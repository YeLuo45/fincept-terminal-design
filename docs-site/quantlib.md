# QuantLib Suite

QuantLib Suite 是 Fincept Terminal 内置的量化分析模块，基于 QuantLib 开源库构建，提供 **18 个量化分析模块**，涵盖 **590+ 个量化 API 端点**。

## 核心架构

| 组件 | 说明 |
|------|------|
| **QuantLibClient** | 统一的 HTTP 客户端，负责与后端 QuantLib API 通信 |
| **QuantLibScreen** | Qt 前端界面，提供模块选择、参数输入、结果展示 |
| **API Base** | `https://api.fincept.in/quantlib/` |
| **协议** | RESTful JSON API |
| **集成方式** | 异步调用（QuantLibScreen）+ 同步封装（MCP QuantLibTools） |

---

## 18 个量化分析模块

### 1. Pricing（期权定价）— 29 个端点

| 功能 | 描述 |
|------|------|
| **Black-Scholes** | 标准 BS 期权定价模型 |
| **Black76** | Black76 期权定价模型（用于期货期权） |
| **Bachelier** | Bachelier（正态）期权定价模型 |
| **Numerical** | 数值方法定价（蒙特卡洛、有限差分等） |

**示例请求：**
```json
{
  "spot": 100,
  "strike": 105,
  "risk_free_rate": 0.05,
  "volatility": 0.2,
  "time_to_maturity": 1.0,
  "option_type": "call"
}
```

---

### 2. Risk（风险分析）— 25 个端点

| 功能 | 描述 |
|------|------|
| **VaR** | Value at Risk — 风险价值计算 |
| **CVaR** | Conditional VaR（Expected Shortfall）— 条件风险价值 |
| **Sensitivities** | Greeks 计算（Delta、Gamma、Vega、Theta、Rho） |
| **VaR/Stress** | VaR 与压力测试 |
| **EVT/XVA** | 极值理论与 XVA 调整 |

**示例请求：**
```json
{
  "portfolio_value": 1000000,
  "volatility": 0.02,
  "confidence": 0.99,
  "horizon": 1
}
```

---

### 3. Stochastic（随机过程）— 36 个端点

| 功能 | 描述 |
|------|------|
| **Processes** | 基础随机过程定义 |
| **布朗运动** | 标准布朗运动（Geometric Brownian Motion 基础） |
| **几何布朗运动** | GBM 过程 — 股票价格建模 |
| **跳扩散过程** | Jump Diffusion（Merton 模型等） |
| **Exact** | 精确模拟方法 |
| **Simulation** | 蒙特卡洛模拟 |
| **Sampling** | 随机采样技术 |
| **Theory** | 随机理论工具 |

**示例请求（GBM 模拟）：**
```json
{
  "S0": 100,
  "mu": 0.05,
  "sigma": 0.2,
  "T": 1.0,
  "n_steps": 52,
  "n_paths": 5
}
```

---

### 4. Volatility（波动率）— 14 个端点

| 功能 | 描述 |
|------|------|
| **Surface** | 波动率曲面（Volatility Surface） |
| **SABR** | SABR 波动率模型 |
| **Local Vol** | 局部波动率模型（Local Volatility） |
| **隐含波动率** | Implied Volatility 计算 |
| **GARCH** | GARCH 波动率模型 |

---

### 5. Fixed Income（固定收益）— 14 个端点

| 功能 | 描述 |
|------|------|
| **Bonds** | 债券定价 |
| **Swaps/FRA** | 利率互换与远期利率协议 |
| **久期/凸性** | Duration & Convexity 计算 |
| **免疫策略** | Immunization Strategy（免疫策略） |
| **Credit/Futures** | 信用衍生品与期货 |

---

### 6. Portfolio（投资组合）— 15 个端点

| 功能 | 描述 |
|------|------|
| **Optimization** | 组合优化（均值-方差、最小方差等） |
| **Risk Metrics** | 风险指标计算 |
| **Sharpe 比率** | Sharpe Ratio — 风险调整收益指标 |
| **风险调整收益** | Risk-Adjusted Return（Calmar、Sortino 等） |

---

### 7. Models（定价模型）— 14 个端点

| 功能 | 描述 |
|------|------|
| **Short Rate** | 短期利率模型 |
| **Hull-White** | Hull-White 利率模型 |
| **Heston** | Heston 随机波动率模型 |
| **Jump Diffusion** | 跳扩散模型 |
| **Dupire/SVI** | Dupire 局部波动率模型 / SVI 模型 |

**示例请求（Heston 模型）：**
```json
{
  "spot": 100,
  "strike": 105,
  "r": 0.05,
  "T": 1.0,
  "v0": 0.04,
  "kappa": 1.5,
  "theta": 0.04,
  "sigma_v": 0.3,
  "rho": -0.7,
  "option_type": "call"
}
```

---

### 8. Curves（收益率曲线）— 31 个端点

| 功能 | 描述 |
|------|------|
| **Build & Query** | 曲线构建与查询 |
| **Transforms** | 曲线转换 |
| **NS/NSS Fitting** | Nelson-Siegel / NSS 曲线拟合 |
| **Specialized** | 专业化曲线工具 |

---

### 9. Analysis（财务分析）— 122 个端点

| 功能 | 描述 |
|------|------|
| **Fundamentals** | 基本面分析指标 |
| **Profitability** | 盈利能力分析（ROE、ROA、毛利率等） |
| **Liquidity** | 流动性分析 |
| **Efficiency** | 运营效率分析（周转率等） |
| **Growth** | 成长性分析 |
| **Leverage** | 杠杆率分析 |
| **Valuation Ratios** | 估值比率（P/E、EV/EBITDA 等） |
| **DCF Valuation** | DCF 现金流折现估值 |

---

### 10. Statistics（统计）— 52 个端点

| 功能 | 描述 |
|------|------|
| **Continuous Dist** | 连续分布（正态、对数正态等） |
| **Discrete Dist** | 离散分布（二项、泊松等） |
| **Time Series** | 时间序列统计 |

---

### 11. Core（核心基础）— 51 个端点

| 功能 | 描述 |
|------|------|
| **Types** | 类型定义 |
| **Conventions** | 金融约定（日计数、利率约定等） |
| **AutoDiff** | 自动微分 |
| **Distributions** | 概率分布 |
| **Math** | 数学工具 |
| **Operations** | 运算工具 |
| **Legs** | 分期付款（现金流分段） |
| **Periods** | 计息期（固定/浮动票息） |

---

### 12. Economics（经济理论）— 25 个端点

| 功能 | 描述 |
|------|------|
| **Equilibrium** | 一般均衡理论 |
| **Game Theory** | 博弈论 |
| **Auctions** | 拍卖理论 |
| **Utility Theory** | 效用理论 |

---

### 13. Instruments（金融工具）— 26 个端点

| 功能 | 描述 |
|------|------|
| **Bonds** | 债券工具 |
| **Swaps/FRA** | 互换与远期利率协议 |
| **Markets** | 市场数据接口 |
| **Credit/Futures** | 信用衍生品与期货 |

---

### 14. Machine Learning（机器学习）— 48 个端点

| 功能 | 描述 |
|------|------|
| **Credit** | 信用风险 ML |
| **Regression** | 回归模型 |
| **Clustering** | 聚类分析 |
| **Preprocessing** | 数据预处理 |
| **Features** | 特征工程 |
| **Validation** | 模型验证 |
| **Time Series** | 时间序列 ML |
| **GP/Neural Net** | 高斯过程与神经网络 |
| **Factor/Covariance** | 因子模型与协方差估计 |

---

### 15. Numerical（数值方法）— 28 个端点

| 功能 | 描述 |
|------|------|
| **Diff/FFT/Int** | 微分、FFT、积分 |
| **Interp/LinAlg** | 插值与线性代数 |
| **ODE/Roots/Opt** | 常微分方程、方程求根、优化 |

---

### 16. Physics（物理金融）— 24 个端点

| 功能 | 描述 |
|------|------|
| **Entropy** | 熵理论（最大熵方法） |
| **Thermodynamics** | 热力学方法 |

---

### 17. Regulatory（监管合规）— 11 个端点

| 功能 | 描述 |
|------|------|
| **Basel III** | 巴塞尔协议 III 资本要求 |
| **SA-CCR** | 标准化方法-对手方信用风险 |
| **IFRS 9** | IFRS 9 预期信用损失模型 |
| **Liquidity** | 流动性覆盖率 |
| **Stress Test** | 压力测试 |

---

### 18. Scheduling（日历与日程）— 14 个端点

| 功能 | 描述 |
|------|------|
| **Calendars** | 交易日历 |
| **Day Count** | 日计数约定（ACT/360、ACT/365、30/360 等） |

---

## 前端界面

QuantLibScreen 提供完整的 Qt 图形界面：

- **左侧边栏**：18 个模块的树形导航，每个模块显示端点数量
- **中央面板**：API 端点选择 + JSON 请求体输入 + 快捷填充按钮（BS Price、GBM Sim、VaR、Heston）
- **右侧结果面板**：JSON 格式或表格形式展示 API 返回结果
- **状态栏**：实时显示当前模块、面板、端点信息

---

## 快捷填充示例

| 按钮 | 功能 |
|------|------|
| **BS Price** | Black-Scholes 期权定价 |
| **GBM Sim** | 几何布朗运动蒙特卡洛模拟 |
| **VaR** | 风险价值计算 |
| **Heston** | Heston 随机波动率模型定价 |

---

## 相关文件

| 文件 | 说明 |
|------|------|
| `fincept-qt/src/services/quantlib/QuantLibClient.h` | QuantLib HTTP 客户端声明 |
| `fincept-qt/src/services/quantlib/QuantLibClient.cpp` | QuantLib HTTP 客户端实现 |
| `fincept-qt/src/screens/quantlib/QuantLibScreen.h` | QuantLib 界面头文件 |
| `fincept-qt/src/screens/quantlib/QuantLibScreen.cpp` | QuantLib 界面实现（18 个模块定义） |
| `fincept-qt/src/app/DockScreenRouter.cpp` | 路由注册 |
| `fincept-qt/resources/component_catalog.json` | 组件目录（category: QuantLib） |
