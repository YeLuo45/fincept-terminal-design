# Fincept Terminal AI Agents

> 37 个 AI Agent，涵盖投资框架、经济分析、地缘政治、量化对冲基金等多维智能分析体系

**框架**: FinAgent Core | **LLM**: 本地 Ollama + 多供应商支持 | **工具**: MCP 协议集成

---

## Agent 分类总览

| 类别 | 数量 | 描述 |
|------|------|------|
| **Trader/Investor Agents** | 11 | 传奇投资者框架：价值投资、成长投资、深度价值、宏观对冲等 |
| **Economic Agents** | 2 | 经济分析框架：地缘政治、航运追踪 |
| **Hedge Fund Agents** | 8 | 顶级对冲基金策略模拟 |
| **Geopolitics Agents** | 19 | 地缘政治分析（Grand Chessboard、Prisoners of Geography、World Order） |
| **Economic Analysis** | 1 | 宏观经济政策与指标分析 |

**总计: 37 Agents**

---

## 一、Trader/Investor Agents（投资框架 Agent）

基于传奇投资者投资哲学的 AI 分析 Agent，专注于股票分析、估值评估、风险管理和投资决策支持。

| Agent | 文件 | 投资哲学 | 核心能力 |
|-------|------|----------|----------|
| **Warren Buffett** | `warren_buffett_agent.py` | 价值投资 · 经济护城河 | 护城河分析、所有者收益、资本配置审查、长期估值 |
| **Benjamin Graham** | `benjamin_graham_agent.py` | 格雷厄姆安全边际 | 深度价值筛选、定量价值、安全边际计算、防守型投资者 |
| **Peter Lynch** | `peter_lynch_agent.py` | 增长投资（GARP） | PEG 分析、Lynch 分类、内部人信号检测 |
| **Charlie Munger** | `charlie_munger_agent.py` | 多元思维模型 | 逆向分析、激励审计、偏见检测、心理模型应用 |
| **Seth Klarman** | `seth_klarman_agent.py` | 深度价值 | 下行风险优先、安全边际、特殊情境、资本保全 |
| **Howard Marks** | `howard_marks_agent.py` | 周期与风险 | 周期定位、二级思维、风险校准、信用周期研判 |
| **Ray Dalio** | `ray_dalio_agent.py` | 全天候策略 | 风险平价、宏观经济周期、资产配置、桥水框架 |
| **George Soros** | `george_soros_agent.py` | 反身性理论 | 反射性分析、宏观趋势、认知-现实互动 |
| **John Paulson** | `john_paulson_agent.py` | 宏观对冲 | 宏观事件驱动、信用违约、结构性机会 |
| **Carl Icahn** | `carl_icahn_agent.py` | 激进投资 | 股东维权、敌意收购分析、企业治理改善 |
| **Michael Burry** | `michael_burry_agent.py` | 《大空头》原型 | 极端泡沫识别、衍生品分析、深度逆向投资 |

### Warren Buffett Agent 核心分析框架

```
1. MOAT（护城河）
   - 品牌 / 转换成本 / 网络效应 / 成本优势 / 规模 / 监管
   - 无法命名具体护城河来源 → 无护城河 → 中性或看跌

2. 资本回报率
   - ROE ≥ 15%（过去10年中至少7年）
   - ROIC > WACC

3. 盈利可预测性
   - 过去10年至少8年正盈利
   - 营业利润率标准差 < 5个百分点

4. 资产负债表
   - D/E < 0.5
   - 利息保障倍数 > 5x

5. 管理质量
   - 资本配置记录评分
   - 回购在合理价格（+），在峰值P/E（-），破坏性M&A（-）

6. 估值
   - 所有者收益 = 净利润 + D&A - 维护性资本支出
   - 10% 折现率计算内在价值
```

---

## 二、Economic Agents（经济分析 Agent）

### Geopolitics Agents — 地缘政治分析（19 个 Agent）

基于 Zbigniew Brzezinski、Brent Cooper、Tim Marshall、Henry Kissinger 等地缘政治理论框架。

#### Grand Chessboard Framework（大棋局框架，5 Agent）

| Agent | 焦点 |
|-------|------|
| **American Primacy** | 美国全球领导力战略 |
| **Eurasian Balkans** | 中亚地缘政治 |
| **Heartland Theory** | 陆权论心脏地带控制 |
| **Pivots** | 关键地缘支点国家 |
| **Players** | 主要全球权力玩家 |

#### Prisoners of Geography Framework（地理囚徒框架，10 Agent）

| Agent | 地区覆盖 |
|-------|----------|
| **Russia** | 俄罗斯地理约束 |
| **China** | 中国领土战略 |
| **USA** | 美国地理优势 |
| **Europe** | 欧洲地理挑战 |
| **Middle East** | 中东地理 |
| **Africa** | 非洲发展约束 |
| **India & Pakistan** | 南亚地理 |
| **Japan & Korea** | 东亚岛国 |
| **Latin America** | 拉丁美洲地理 |
| **Arctic** | 北极战略重要性 |

#### World Order Framework（世界秩序框架，4 Agent）

| Agent | 秩序类型 |
|-------|----------|
| **American Order** | 自由国际秩序 |
| **Chinese Order** | 儒教和谐概念 |
| **European Order** | 权力平衡体系 |
| **Islamic Order** | 伊斯兰治理原则 |
| **Multipolar Order** | 多极权力中心 |

### Maritime Tracking — 航运追踪

| 功能 | 描述 |
|------|------|
| **航运路线分析** | 关键航道风险评估（霍尔木兹海峡、马六甲海峡等） |
| **船舶追踪** | 全球船舶位置监控 |
| **供应链影响** | 地缘事件对全球供应链冲击分析 |

---

## 三、Hedge Fund Agents（对冲基金 Agent）

模拟全球顶级对冲基金投资策略：

| 对冲基金 | 策略风格 | 管理规模 |
|----------|----------|----------|
| **Bridgewater Associates** | 全球宏观、风险平价 | $124B |
| **Citadel** | 多策略、量化 | $62B |
| **Renaissance Technologies** | 量化、数学模型 | $55B |
| **Two Sigma** | AI/ML、系统化交易 | $60B |
| **D.E. Shaw** | 计算金融 | $60B |
| **Elliott Management** | 股东维权、不良债务 | $56B |
| **Pershing Square** | 股东维权价值投资 | $16B |
| **AQR Capital** | 因子投资、量化 | $90B |

---

## 四、多 LLM Provider 支持

Fincept Terminal 支持多种 LLM 供应商，可在本地或云端运行：

| 供应商 | 类型 | 支持模型 |
|--------|------|----------|
| **OpenAI** | 云端 | GPT-4o, GPT-4-turbo, GPT-3.5-turbo |
| **Anthropic** | 云端 | Claude 3.5 Sonnet, Claude 3 Opus |
| **Google Gemini** | 云端 | Gemini Pro, Gemini Ultra |
| **Groq** | 云端 | Llama-3.1, Mixtral |
| **DeepSeek** | 云端 | DeepSeek-V3, DeepSeek-Coder |
| **MiniMax** | 云端 | MiniMax-01 |
| **OpenRouter** | 云端聚合 | 多模型聚合 |
| **Ollama** | 本地 | Llama 3.1, Mistral, Mixtral, Phi-3, CodeLlama |

### 本地 LLM 支持（Ollama）

通过 Ollama 在本地运行 LLM，确保数据隐私：

| 模型 | 规模 | 最佳用途 |
|------|------|----------|
| **Llama 3.1** | 8B-70B | 通用推理、分析 |
| **Mistral** | 7B-22B | 金融分析 |
| **Mixtral** | 8x7B | 复杂多步推理 |
| **Phi-3** | 3.8B | 快速响应 |
| **CodeLlama** | 7B-34B | 代码生成、量化策略 |

---

## 五、MCP 工具集成

Model Context Protocol (MCP) 工具系统为 Agent 提供丰富的数据获取和分析能力。

### 架构

```
┌─────────────────────────────────────────────────────┐
│                    LlmService                       │
│         (HTTP / streaming — provider-agnostic)      │
└─────────────────────┬───────────────────────────────┘
                      │ via ToolDispatcher
                      ▼
┌─────────────────────────────────────────────────────┐
│                  ToolDispatcher                     │
│         multi-round loop, parallel tool fan-out     │
└─────────────────────┬───────────────────────────────┘
                      │
         ┌────────────┴────────────┐
         ▼                         ▼
┌─────────────────┐      ┌──────────────────────────┐
│ internal tools  │      │  external: McpManager    │
│ (C++ providers) │      │  → McpClient (JSON-RPC)  │
└─────────────────┘      └──────────────────────────┘
```

### 核心工具

| 工具类别 | 工具名称 | 描述 |
|----------|----------|------|
| **金融数据** | `yfinance` | 股票价格、财务数据、历史行情 |
| | `financial_datasets` | 高级财务指标、分析师数据 |
| | `databento` | 高速市场数据 |
| **搜索** | `duckduckgo` | 网络搜索 |
| | `tavily` | AI 优化的搜索和内容提取 |
| **区块链** | Solana RPC | DEX 流动性、链上数据 |
| | Wallet Connect | 钱包集成 |
| **数据提供** | 18个服务领域 | 市场数据、新闻、agents、工作流等 |

### MCP 工具文件位置

- `src/mcp/McpTypes.h` — 工具定义类型
- `src/mcp/McpProvider.cpp` — 内部工具注册表 + 调度
- `src/mcp/McpService.cpp` — 统一入口
- `src/mcp/SchemaValidator.cpp` — 架构验证
- `src/mcp/dispatch/*` — 提供商适配器和调度器

---

## 六、Agent 核心能力

### 所有 Agent 提供

| 能力 | 描述 |
|------|------|
| **分析** | 市场/地缘政治形势评估 |
| **建议** | 可执行的投资或战略建议 |
| **风险评估** | 潜在风险和缓解策略 |
| **推理** | 透明决策过程 |
| **记忆** | 跨对话持久状态 |

### Trader/Investor Agents 专有能力

- 股票筛选标准
- 估值分析
- 质量评估
- 入场/出场时机
- 仓位规模建议

### Geopolitics Agents 专有能力

- 地区冲突分析
- 贸易路线脆弱性
- 资源竞争评估
- 战略联盟评估
- 投资风险映射

### Hedge Fund Agents 专有能力

- 策略特定建议
- 投资组合构建
- 风险管理方法
- 市场状态分析
- 因子敞口分析

---

## 七、FinAgent Core 框架

| 组件 | 文件 | 用途 |
|------|------|------|
| **Base Agent** | `base_agent.py` | 抽象 Agent 类、生命周期管理 |
| **LLM Executor** | `llm_executor.py` | Ollama 集成、提示执行 |
| **Tool Registry** | `tools/tool_registry.py` | 工具管理和发现 |
| **Database Manager** | `database/db_manager.py` | SQLite 持久化、Agent 记忆 |
| **LLM Providers** | `config/llm_providers.py` | 模型配置 |
| **Logger** | `utils/logger.py` | 结构化日志 |
| **Path Resolver** | `utils/path_resolver.py` | 文件路径管理 |

---

## 八、使用示例

```python
# 地缘政治 Agent
from agents.GeopoliticsAgents.PrisonersOfGeographyAgents.region_agents.china_geography_agent import ChinaGeographyAgent
agent = ChinaGeographyAgent()
analysis = agent.analyze("台湾局势对半导体供应链的影响")

# 对冲基金 Agent
from agents.hedgeFundAgents.bridgewater_associates_hedge_fund_agent.bridgewater_associates_agent import BridgewaterAgent
agent = BridgewaterAgent()
recommendation = agent.analyze_market("美国债券市场展望")

# 投资者 Agent
from agents.TraderInvestorsAgent.warren_buffett_agent import WarrenBuffettAgent
agent = WarrenBuffettAgent()
evaluation = agent.evaluate_stock("AAPL")
```

### Agent Manager

```python
from agents.agent_manager import AgentManager

manager = AgentManager()
manager.register_agent('buffett', WarrenBuffettAgent())
response = manager.query('buffett', 'Should I invest in Apple?')
```

---

## 九、Agent 辩论系统

多个 Agent 可以参与多 Agent 辩论：

- **共识构建** — 汇聚多方观点
- **逆向分析** — 反方观点深度分析
- **风险魔鬼代言人** — 挑战主流观点
- **群体智慧聚合** — 综合判断

参考: `agno_trading/core/debate_orchestrator.py`

---

**文档版本**: 2026-01-23  
**Agent 总数**: 37  
**分类**: 4 大类（Trader/Investor, Economic, Hedge Fund, Geopolitics）  
**框架**: FinAgent Core  
**LLM**: Ollama（本地）+ 多供应商（OpenAI, Anthropic, Gemini, Groq, DeepSeek, MiniMax, OpenRouter）
