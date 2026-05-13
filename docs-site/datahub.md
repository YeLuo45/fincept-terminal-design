# DataHub 架构

**状态:** 当前版本（2026-04-18 已投入生产，所有阶段 0–10 已交付）  
**版本:** 1.0  
**拥有者:** Fincept Terminal Core  
**范围:** 进程内 pub/sub 数据层，服务于整个终端（市场、新闻、经济学、券商流、WebSocket、代理）。

---

## 1. 问题背景

当前终端中每个屏幕和小组件各自拉取数据：

- `~20 个 dashboard 小组件`（`MarketPanel`、`WatchlistScreen`、`PortfolioBlotter` 等）各自拥有 `QTimer`，独立调用 `MarketDataService::fetch_quotes(...)`
- `55+ 个屏幕`有本地定时器驱动各自的刷新周期
- `27 个服务`混合了三种不兼容的响应风格：`std::function` 回调、Qt `signals:` 带请求 ID，以及原始 `QWebSocket` 流
- 结果：重复的 Python 进程、重复的 HTTP 调用、碎片化的缓存行为，没有"某数据何时更新"单一数据源

30 秒的 `CacheManager` TTL 勉强掩盖了单次刷新窗口内的问题，但跨标签页和时间就失效了。

**目标：** 任意时刻对某一 (symbol, source) 组合只进行一次获取，扇出给所有订阅者——市场、dashboard、监视列表、投资组合、AI 聊天、MCP 工具、代理——通过单一推送原语。

---

## 2. 非目标

- **不是进程间 broker** — 保持在进程内（单一 Qt 应用），不引入 Redis、ZeroMQ、MQTT
- **不是 CacheManager 的替代品** — DataHub **使用** CacheManager 做持久化
- **不是 PythonRunner、HttpClient 或券商 SDK 的替代品** — 服务层仍负责 I/O
- **不是工作流/事件总线** — 用于**数据状态**，不是命令事件

---

## 3. 核心概念

### 3.1 Topic

Topic 是字符串键控的槽位，存储数据的最后已知值。

**格式：** `domain:subdomain:id[:modifier]`

**示例：**

```
market:quote:AAPL
market:history:AAPL:1y:1d
market:sparkline:TSLA
news:general
news:symbol:NVDA
econ:fred:GDP
econ:dbnomics:IMF/IFS/USA.PCPI_IX.Q
ws:kraken:BTC-USD
ws:hyperliquid:ETH
broker:zerodha:positions
broker:angelone:orders
geopolitics:hdx:conflicts
agent:hedgefund:run:42
```

**规则：**

- 小写、冒号分隔、无空格
- 稳定性 — topic 键是公开契约，生产者和订阅者需达成共识
- 订阅时允许尾部使用 `*` 通配符（如 `market:quote:*`）

### 3.2 Subscriber（订阅者）

任何调用 `DataHub::subscribe(owner, topic, slot)` 的 `QObject`（小组件、屏幕、服务、MCP 工具）。

- 订阅**归属于某个 QObject**，所有者销毁时订阅自动清理（通过 `QObject::destroyed()` 信号）
- 订阅者收到：(a) 订阅时立即获得当前缓存值（如果新鲜），(b) 之后该 topic 的每次 `publish()`
- 一个订阅者可订阅多个 topic；一个 topic 可被多个订阅者订阅

### 3.3 Producer（生产者）

拥有某组 topic 刷新权限的服务。实现：

```cpp
class Producer {
  public:
    virtual ~Producer() = default;

    // 此生产者拥有的模式，如 {"market:quote:*", "market:history:*"}
    virtual QStringList topic_patterns() const = 0;

    // Hub 调用：当 ≥1 个订阅者存在且缓存值过期时
    // 生产者（异步）获取数据，完成后调用 hub.publish()
    virtual void refresh(const QStringList& topics) = 0;

    // 可选：最大每秒出站请求数
    // Hub 调度器分组并限速，默认 0 = 无限制
    // 示例：Zerodha REST = 3，Angel One REST = 1，Polymarket = 10
    virtual int max_requests_per_sec() const { return 0; }

    // 可选：最后一个订阅者离开 topic 时调用
    // 生产者可释放资源（关闭 WebSocket 通道、取消流等）
    virtual void on_topic_idle(const QString& /*topic*/) {}
};
```

### 3.4 TopicPolicy（刷新策略）

存储在 hub 中的 per-topic 元数据：

```cpp
struct TopicPolicy {
    int ttl_ms          = 30000;   // 缓存值保持新鲜的时长
    int min_interval_ms = 5000;    // 刷新间隔不小于此值
    bool push_only      = false;   // true → 无 TTL，无调度刷新（WebSocket 驱动 topic）
    int priority        = 0;       // 高优先级在背压下优先刷新
};
```

- `push_only = true` 适用于所有 `ws:*` topic，Hub 不会调度它们，由生产者每次 tick 调用 `publish()`
- `ttl_ms = 30000` 是市场报价默认（匹配当前行为）
- `ttl_ms = 300000` 用于新闻，`ttl_ms = 3600000` 用于经济学序列

---

## 4. 架构图

```mermaid
graph TB
    subgraph Producers["生产者 (Producers)"]
        MarketDataService["MarketDataService<br/>market:quote:*<br/>market:history:*"]
        NewsService["NewsService<br/>news:*"]
        BrokerService["BrokerService<br/>broker:zerodha:*"]
        WebSocketService["WebSocketService<br/>ws:kraken:*"]
    end

    subgraph DataHub["DataHub (Singleton)"]
        TopicRegistry["TopicRegistry<br/>topic → value"]
        SubscriberMap["SubscriberMap<br/>topic → [subscribers]"]
        Scheduler["Scheduler<br/>TTL / min_interval"]
        PolicyStore["PolicyStore<br/>topic → TopicPolicy"]
    end

    subgraph Subscribers["订阅者 (Subscribers)"]
        Dashboard["Dashboard Widgets<br/>~20 个"]
        Screens["Screens<br/>55+ 个"]
        AIChat["AI Chat"]
        MCPTools["MCP Tools"]
        Agents["Agents"]
    end

    MarketDataService -->|publish(topic, value)| DataHub
    NewsService -->|publish(topic, value)| DataHub
    BrokerService -->|publish(topic, value)| DataHub
    WebSocketService -->|publish(topic, value)| DataHub

    DataHub -->|subscribe(owner, topic, slot)| Dashboard
    DataHub -->|subscribe(owner, topic, slot)| Screens
    DataHub -->|subscribe(owner, topic, slot)| AIChat
    DataHub -->|subscribe(owner, topic, slot)| MCPTools
    DataHub -->|subscribe(owner, topic, slot)| Agents

    DataHub -.->|refresh(topics)| MarketDataService
    DataHub -.->|refresh(topics)| NewsService
    DataHub -.->|refresh(topics)| BrokerService
    DataHub -.->|无调度| WebSocketService

    CacheManager["CacheManager<br/>(持久化)"] <--> DataHub
```

**流程说明：**

1. **订阅流程：** 订阅者调用 `DataHub::subscribe(owner, topic, slot)` → DataHub 在 `SubscriberMap` 中注册，并立即推送当前缓存值（如果新鲜）
2. **发布流程：** 生产者完成数据获取后调用 `DataHub::publish(topic, value)` → DataHub 更新 `TopicRegistry` 并通过 Qt 信号/槽推送给所有订阅者
3. **刷新调度：** DataHub 的 Scheduler 监控 TTL，当缓存过期且有活跃订阅者时，调用对应生产者的 `refresh()` 方法
4. **生命周期：** 订阅者销毁时自动取消订阅（通过 `QObject::destroyed()` 信号）

---

## 5. 公共 API

```cpp
namespace fincept::datahub {

class DataHub : public QObject {
    Q_OBJECT
  public:
    static DataHub& instance();

    // ── 订阅 ─────────────────────────────────────────────────────────
    // 返回 Qt 连接（用于手动断开）
    QMetaObject::Connection subscribe(
        QObject* owner,
        const QString& topic,
        const std::function<void(const QVariant&)>& slot
    );

    // ── 发布 ─────────────────────────────────────────────────────────
    void publish(const QString& topic, const QVariant& value);

    // ── 取消订阅 ─────────────────────────────────────────────────────
    void unsubscribe(QObject* owner, const QString& topic);
    void unsubscribe_all(QObject* owner);

    // ── 查询 ─────────────────────────────────────────────────────────
    QVariant get(const QString& topic) const;          // 获取当前值
    bool has_value(const QString& topic) const;        // 是否有值
    QStringList active_topics() const;                 // 所有活跃 topic

    // ── 策略配置 ─────────────────────────────────────────────────────
    void set_policy(const QString& topic, const TopicPolicy& policy);
    TopicPolicy policy(const QString& topic) const;

  signals:
    void value_changed(const QString& topic, const QVariant& value);
    void topic_subscribed(const QString& topic);
    void topic_unsubscribed(const QString& topic);
};

}  // namespace fincept::datahub
```

### 5.1 使用示例

```cpp
// 订阅市场报价
auto conn = DataHub::instance().subscribe(
    this,
    "market:quote:AAPL",
    [this](const QVariant& value) {
        // 更新 UI
        ui->priceLabel->setText(value.toMap()["price"].toString());
    }
);

// 订阅多个 topic（带通配符）
DataHub::instance().subscribe(
    this,
    "market:quote:*",
    [this](const QVariant& value) {
        // 处理所有市场报价更新
    }
);

// 生产者发布数据
DataHub::instance().publish("market:quote:AAPL", map);

// 取消订阅
DataHub::instance().unsubscribe(this, "market:quote:AAPL");
```

---

## 6. 总结

DataHub 通过**进程内 pub/sub 模式**解决了终端数据层的核心问题：

| 问题 | 解决方案 |
|------|---------|
| 重复请求 | 单次获取，扇出给所有订阅者 |
| 无单一数据源 | TopicRegistry 作为唯一数据记录 |
| 刷新策略碎片化 | 统一 Scheduler + TopicPolicy |
| 三种响应风格 | 统一 `publish()` 推送原语 |
| 订阅生命周期管理 | 依托 QObject 销毁信号自动清理 |
