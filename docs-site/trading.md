# 交易系统 (Trading)

Fincept Terminal 交易系统是一个多资产、统一架构的交易引擎，支持加密货币和股票现货的实时交易、算法交易、模拟交易和完整仓位/订单管理。

---

## 系统架构

交易系统位于 `fincept-qt/src/trading/`，核心组件包括：

| 组件 | 文件 | 说明 |
|------|------|------|
| `BrokerInterface.h` | 抽象经纪人接口 | 所有券商适配器的基类，定义统一的订单、持仓、行情等接口 |
| `BrokerRegistry.cpp/h` | 券商注册中心 | 运行时注册和发现可用券商 |
| `ExchangeService.cpp/h` | 交易所连接服务 | 加密货币交易所 WebSocket 连接管理 |
| `OrderMatcher.cpp/h` | 订单撮合引擎 | 订单匹配与成交处理 |
| `PaperTrading.cpp/h` | 模拟交易引擎 | 资产无关的模拟交易引擎 |
| `UnifiedTrading.cpp/h` | 统一交易门面 | 对外提供统一的交易 API |
| `brokers/` | 券商适配器 | 20+ 券商实现 |

---

## 加密货币交易 (Crypto Trading)

通过 WebSocket 实时连接，支持以下交易所：

### Kraken WebSocket

- **用途**：BTC/ETH 等主流加密货币实时价格
- **协议**：Kraken WebSocket API
- **数据**：实时 tick、订单簿深度、成交数据
- **集成**：`ExchangeService::on_kraken_tick` 处理所有 Kraken 推送

### HyperLiquid

- **用途**：永续合约交易
- **协议**：HyperLiquid 专属 WebSocket
- **功能**：合约下单、持仓查询、实时行情
- **签名**：使用 `aa_hyperliquid_signer` 进行交易签名

### 行情主题 (DataHub)

| 主题 | 数据类型 |
|------|----------|
| `ws:kraken:*` | Kraken 实时 Tick |
| `ws:hyperliquid:*` | HyperLiquid 永续合约数据 |

---

## 股票交易 (Equity Trading)

支持 **16 家券商**，覆盖印度、美国、欧盟市场。

### 印度券商（10 家）

| 券商 | 特点 |
|------|------|
| **Zerodha** | Kite WebSocket（二进制协议），支持 GTT 订单 |
| **Angel One** | SmartStream WebSocket，支持 TOTP 自动登录 |
| **Upstox** | WebSocket 实时行情 |
| **Fyers** | Fyers Ticker WebSocket |
| **Dhan** | 现代化 API |
| **Groww** | 简洁交易界面 |
| **Kotak** | Kotak Securities |
| **IIFL** | IIFL Wealth |
| **5paisa** | 5paisa Capital |
| **AliceBlue** | AN WebSocket |

### 国际券商（6 家）

| 券商 | 地区 | 特点 |
|------|------|------|
| **Shoonya** | 印度 | 零佣金券商 |
| **Motilal** | 印度 | Motilal Oswal |
| **IBKR** | 美国 | Interactive Brokers，Advanced Option Chain |
| **Alpaca** | 美国 | 原生 Paper Trading 支持，REST + SSE |
| **Tradier** | 美国 | 经纪商 + 交易 API |
| **Saxo** | 欧盟 | Saxo Bank，OpenAPI 流式报价 |

### 券商接口规范

所有券商适配器实现 `IBroker` 接口：

- **认证**：`exchange_token` — API Key/Secret 交换 Token
- **订单**：`place_order` / `modify_order` / `cancel_order` / `get_orders`
- **持仓**：`get_positions` / `get_holdings` / `get_funds`
- **行情**：`get_quotes` / `get_history` / `get_latest_bars`
- **保证金**：`get_order_margins` / `get_basket_margins`
- **WebSocket**：`ws_adapter_name()` — 返回 WebSocket 适配器名称

---

## 交易功能

### Real-Time Trading（实时交易）

- 全市场实时行情（加密货币 + 股票）
- 一键下单、修改、撤销
- 支持市价单、限价单、止损单、括号订单、覆盖订单
- 订单状态实时跟踪

### Algo Trading（算法交易）

- **Algo Live Runner**：`algo_trading/algo_live_runner.py` — 实盘算法运行器
- **Algo Manager**：`algo_trading/algo_manager.py` — 算法生命周期管理
- **Backtest Engine**：`algo_trading/backtest_engine.py` — 历史数据回测
- 支持 Python 算法脚本嵌入执行

### Paper Trading Engine（模拟交易引擎）

资产无关的模拟交易引擎（`PaperTrading.cpp/h`），功能：

| 函数 | 说明 |
|------|------|
| `pt_create_portfolio` | 创建模拟组合 |
| `pt_place_order` | 下单（模拟） |
| `pt_fill_order` | 成交模拟（手动触发或行情触发） |
| `pt_get_orders` | 查询订单 |
| `pt_get_positions` | 查询持仓 |
| `pt_get_stats` | 获取组合统计（P&L、收益率等） |
| `pt_reset_portfolio` | 重置组合 |

### Position Management（仓位管理）

- 实时持仓跟踪
- 多券商、多账户持仓汇总
- 持仓盈亏实时计算
- 支持杠杆和保证金模式

### Order Management（订单管理）

- 订单簿管理（下单/修改/撤销/查询）
- GTT（Good Till Triggered）订单支持
- 订单历史和成交记录查询
- 订单模板和快捷下单

---

## 技术细节

### WebSocket 管理

- **懒加载**：只有当至少有一个订阅者时，才打开 Kraken/HyperLiquid WebSocket
- **引用计数**：`ExchangeService` 通过 DataHub 进行引用计数管理连接生命周期
- **背压处理**：Kraken 可达 100+ 条/秒，DataHub 分发层进行合并或丢弃过时更新

### 安全存储

- 券商凭证通过 `SecureStorage` 加密存储（平台 Keychain 或 AES）
- 自动登录流程支持 TOTP（Zerodha、Angel One）
- SessionGuard 在收到 401 时自动登出

### Python 集成

- 算法交易脚本通过 `PythonRunner` 执行
- 支持回测和实盘脚本
- 脚本通过 stdout 输出 JSON 与 C++ 层通信

---

*版本：v4.0.1 | 最后更新：March 2026*
