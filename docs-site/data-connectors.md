# 数据连接器 (Data Connectors)

> Fincept Terminal 支持 100+ 数据连接器，覆盖股票、加密货币、外汇、期权、宏观经济、政府数据、航运、卫星等全方位数据源

---

## 目录

- [市场数据 (Market Data)](#市场数据-market-data)
- [加密货币 (Crypto)](#加密货币-crypto)
- [经济数据 (Economic Data)](#经济数据-economic-data)
- [政府 API (Government APIs)](#政府-api-government-apis)
- [券商 API (Broker APIs)](#券商-api-broker-apis)
- [另类数据 (Alternative Data)](#另类数据-alternative-data)
- [脚本示例](#脚本示例)

---

## 市场数据 (Market Data)

| 连接器 | 脚本文件 | API Key | 覆盖市场 | 说明 |
|--------|----------|---------|----------|------|
| Yahoo Finance | `yfinance_data.py` | ❌ 不需要 | 全球股票、ETF、指数、外汇、加密货币、大宗商品 | 免费无限访问，历史数据可追溯数十年 |
| Polygon | `polygon_io_data.py` | 🔑 需要 | 股票、期权、外汇、加密货币 | 实时市场数据，专业级功能 |
| Finnhub | `finnhub_data.py` | 🔑 需要 | 股票、替代数据、情绪指标 | 实时报价、新闻情绪、公司基本面 |
| Alpha Vantage | `alphavantage_data.py` | 🔑 需要 | 股票、外汇、加密货币、技术指标 | 50+ 技术指标，每日500次调用 |
| NASDAQ | `nasdaq_data.py` | ❌ 不需要 | NASDAQ 上市股票、市场统计 | IPO日历、分析师评级 |
| FMP | `fmp_data.py` | 🔑 需要 | 财务报表、估值、分析师预测 | 10+ 年历史财务数据 |
| Trading Economics | `trading_economics_data.py` | 🔑 需要 | 全球经济指标、市场预测 | 30万+ 指标，196个国家 |
| CBOE | `cboe_data.py` | ❌ 不需要 | 期权数据、VIX、波动率指数 | 期权链、Greeks、隐含波动率 |
| CFTC | `cftc_data.py` | ❌ 不需要 | COT 报告、期货持仓 | 每周更新，1986年至今 |

---

## 加密货币 (Crypto)

| 连接器 | 脚本文件 | API Key | 覆盖范围 | 说明 |
|--------|----------|---------|----------|------|
| Kraken | `kraken_api.py` | 🔑 需要 | 实时价格、WebSocket | WebSocket 实时价格推送、订单簿、交易 |
| HyperLiquid | — | 🔑 需要 | 永续合约 | 高性能永续合约交易 |
| CoinGecko | `coingecko.py` | ❌ 不需要 | 1万+ 加密货币 | 实时价格、市值、交易所数据 |
| Messari | `messari_data.py` | 🔑 可选 | 加密资产指标、链上数据 | 资产配置、On-chain 指标 |
| Jupiter | — | ❌ 不需要 | Solana 代币价格 | Jupiter Lite Price API |

---

## 经济数据 (Economic Data)

| 连接器 | 脚本文件 | API Key | 覆盖范围 | 说明 |
|--------|----------|---------|----------|------|
| FRED | `fred_data.py` | 🔑 需要 | 美联储经济数据 80万+ 系列 | 美国经济指标，历史可追溯至1776年 |
| DBnomics | `dbnomics_data.py` | ❌ 不需要 | 全球经济数据库 | 多个数据提供者聚合 |
| IMF | `imf_data.py` | ❌ 不需要 | 国际货币基金组织数据 | 国际金融、GDP、通胀、国际收支 |
| World Bank | `worldbank_data.py` | ❌ 不需要 | 200+ 国家发展指标 | 1400+ 指标，1400+ 发展项目 |
| OECD | `oecd_data.py` | ❌ 不需要 | 38个成员国经济数据 | 标准化经济指标、政策分析 |
| BEA | `bea_data.py` | 🔑 需要 | 美国经济分析局数据 | GDP、行业产出、国际贸易 |
| BLS | `bls_data.py` | 🔑 可选 | 美国劳工统计局数据 | 就业、CPI、PPI、工资数据 |
| ECB | `ecb_data.py` | ❌ 不需要 | 欧洲央行数据 | 欧元区货币政策、利率、汇率 |
| WTO | `wto_data.py` | ❌ 不需要 | 国际贸易统计 | 贸易流、关税、贸易协定 |
| WITS | `wits_trade_data.py` | ❌ 不需要 | 世界综合贸易解决方案 | 266个国家/地区详细贸易统计 |
| USDA FAS | `usda_fas_data.py` | ❌ 不需要 | 美国农业部对外农业服务 | 农产品贸易、全球供需 |
| NBER | `nber_data.py` | ❌ 不需要 | 美国经济研究局 | 经济研究论文、工作论文 |
| FAO | `fao_data_extended.py` | ❌ 不需要 | 联合国粮农组织 | 农业、粮食安全、可持续发展 |
| UNESCO | `unesco_data.py` | ❌ 不需要 | 联合国教科文组织 | 教育、科学、文化统计 |
| HDX | `hdx_data.py` | ❌ 不需要 | 人道主义数据交换 | 危机数据、人道主义响应 |

---

## 政府 API (Government APIs)

| 连接器 | 脚本文件 | API Key | 覆盖范围 | 说明 |
|--------|----------|---------|----------|------|
| govinfo | `govinfo_data.py` | ❌ 不需要 | 美国政府信息 | 法律、立法、国会记录 |
| Census | `census_data.py` | 🔑 可选 | 美国人口普查局 | 人口、经济普查、地理数据 |
| French Gov | `french_gov_api.py` | ❌ 不需要 | 法国政府数据 | 法国公共数据集 |
| Spain Data | `spain_data.py` | ❌ 不需要 | 西班牙国家统计 | 西班牙经济和社会数据 |
| BNR | `bnr_data.py` | ❌ 不需要 | 保加利亚国家银行 | 东欧金融数据 |
| NBP | `nbp_data.py` | ❌ 不需要 | 波兰国家银行 | 波兰货币政策、利率 |
| UNCTAD | `unctad_data.py` | ❌ 不需要 | 联合国贸发会议 | 国际贸易、投资、发展 |
| Census International | `census_international_data.py` | 🔑 可选 | 国际人口数据 | 全球人口普查数据 |

---

## 券商 API (Broker APIs)

> 支持 **16 家券商**，覆盖印度、美国、欧洲主要市场

### 印度券商 🇮🇳

| 券商 | API | 覆盖市场 | 说明 |
|------|-----|----------|------|
| Zerodha | Kite Connect | 印度股票、期权、商品 | 印度最大券商之一 |
| Angel One | Smart API | 印度股票、期权、货币 | 实时市场数据 |
| Upstox | Pro API | 印度股票、期权、货币 | REST + WebSocket |
| Fyers | Fyers API | 印度股票、期权 | 量化交易支持 |
| Dhan | Dhan API | 印度股票、期权、商品 | 现代化 API |
| Groww | Groww API | 印度股票、ETF | 零售投资者友好 |
| Kotak | Neo API | 印度股票、期权、货币 | 银行背景券商 |
| IIFL | IIFL API | 印度股票、期权 | 研究驱动 |
| 5paisa | 5Paisa API | 印度股票、期权 | 低佣金 |
| AliceBlue | ANNA API | 印度股票、期权、商品 | 活跃交易者首选 |
| Shoonya | Shoonya API | 印度股票、期权 | 高级交易功能 |
| Motilal | MOFSL API | 印度股票、期权、债券 | 全方位服务 |

### 美国/国际券商 🇺🇸

| 券商 | API | 覆盖市场 | 说明 |
|------|-----|----------|------|
| IBKR | Trader Workstation (TWS) | 全球股票、期权、期货、外汇 | 最大网络券商 |
| Alpaca | Alpaca API | 美国股票、加密货币 | 免佣金，REST + WebSocket |
| Tradier | Tradier Brokerage | 美国股票、期权、ETF | 开发者友好 |
| Saxo | Saxo OpenAPI | 全球股票、债券、外汇、衍生品 | 丹麦券商，全球覆盖 |

---

## 另类数据 (Alternative Data)

| 连接器 | 脚本文件 | API Key | 数据类型 | 说明 |
|--------|----------|---------|----------|------|
| Adanos | — | 🔑 需要 | 市场情绪 | 替代数据情绪分析，用于股票研究 |
| Maritime Traffic | `marinetraffic_data.py` | 🔑 需要 | 航运数据 | 船舶位置追踪、航线分析 |
| Satellite Data | `sentinelhub_data.py` | 🔑 需要 | 卫星图像 | 地球观测、贸易流量分析 |
| NASA GIBS | `nasa_gibs_api.py` | ❌ 不需要 | 卫星影像 | NASA 全球图像服务 |
| Copernicus | `copernicus_data.py` | 🔑 需要 | 欧空局数据 | 哥白尼地球观测数据 |
| Kaggle | `kaggle_data.py` | 🔑 需要 | 机器学习数据集 | 各类 ML 数据集 |
| Quandl | `quandl_nasdaq_data.py` | 🔑 需要 | 另类数据 | 金融数据、对冲基金策略 |
| OpenBB | `openbb_data.py` | ❌ 不需要 | 金融数据聚合 | 开源金融数据平台 |
| AkShare | `akshare_data.py` | ❌ 不需要 | 中国市场数据 | A股、期货、期权、基金 |
| OSCAR | `oscar_data.py` | ❌ 不需要 | 航运数据 | 船舶数据库 |

---

## 脚本示例

以下是 `scripts/` 目录下已实现的数据获取脚本：

### 市场数据脚本

| 脚本文件 | 功能 | API Key |
|----------|------|---------|
| `yfinance_data.py` | Yahoo Finance 市场数据 | ❌ 不需要 |
| `polygon_io_data.py` | Polygon 专业级市场数据 | 🔑 需要 |
| `finnhub_data.py` | Finnhub 替代数据 | 🔑 需要 |
| `alphavantage_data.py` | Alpha Vantage 技术指标 | 🔑 需要 |
| `coingecko.py` | CoinGecko 加密货币数据 | ❌ 不需要 |
| `cboe_data.py` | CBOE VIX 和期权数据 | ❌ 不需要 |
| `cftc_data.py` | CFTC 持仓报告 | ❌ 不需要 |

### 经济数据脚本

| 脚本文件 | 功能 | API Key |
|----------|------|---------|
| `fred_data.py` | 美联储经济数据 | 🔑 需要 |
| `worldbank_data.py` | 世界银行发展数据 | ❌ 不需要 |
| `imf_data.py` | IMF 国际金融数据 | ❌ 不需要 |
| `oecd_data.py` | OECD 经济数据 | ❌ 不需要 |
| `dbnomics_data.py` | DBnomics 综合经济数据库 | ❌ 不需要 |

### 政府数据脚本

| 脚本文件 | 功能 | API Key |
|----------|------|---------|
| `govinfo_data.py` | 美国政府信息 | ❌ 不需要 |
| `census_data.py` | 人口普查数据 | 🔑 可选 |
| `usda_fas_data.py` | USDA 农产品贸易 | ❌ 不需要 |
| `usda_nass_data.py` | USDA 国家农业统计 | ❌ 不需要 |
| `usda_ers_data.py` | USDA 经济研究服务 | ❌ 不需要 |

### 另类数据脚本

| 脚本文件 | 功能 | API Key |
|----------|------|---------|
| `marinetraffic_data.py` | 航运船舶追踪 | 🔑 需要 |
| `messari_data.py` | Messari 加密数据 | 🔑 可选 |
| `sentinelhub_data.py` | 卫星图像数据 | 🔑 需要 |
| `nasa_gibs_api.py` | NASA 卫星影像 | ❌ 不需要 |
| `copernicus_data.py` | 欧空局地球观测 | 🔑 需要 |
| `kaggle_data.py` | Kaggle ML 数据集 | 🔑 需要 |

### 中国/亚洲数据脚本

| 脚本文件 | 功能 | API Key |
|----------|------|---------|
| `akshare_data.py` | AkShare 中国金融数据 | ❌ 不需要 |
| `cninfo_data.py` | 巨潮资讯（中国监管） | 🔑 需要 |

---

## 数据质量与覆盖

| 类别 | 数据源数量 | 免费数据源 | 实时支持 | 历史深度 |
|------|-----------|-----------|----------|----------|
| 市场数据 | 9 | 4 | 5 | 数十年 |
| 加密货币 | 5 | 2 | 4 | 数年 |
| 经济数据 | 15+ | 12+ | 2 | 70+ 年 |
| 政府 API | 8+ | 6+ | 1 | 各异 |
| 券商 API | 16 | 0 | 16 | 实时 |
| 另类数据 | 10+ | 4 | 3 | 各异 |

---

## API Key 配置

```bash
# 市场数据
export POLYGON_API_KEY="your_key_here"          # Polygon.io
export ALPHA_VANTAGE_API_KEY="your_key_here"    # Alpha Vantage
export FMP_API_KEY="your_key_here"              # Financial Modeling Prep
export FINNHUB_API_KEY="your_key_here"          # Finnhub

# 加密货币
export MESSARI_API_KEY="your_key_here"          # Messari (可选)

# 经济数据
export FRED_API_KEY="your_key_here"             # FRED
export BEA_API_KEY="your_key_here"              # BEA
export BLS_API_KEY="your_key_here"              # BLS (可选)

# 另类数据
export MARINETRAFFIC_API_KEY="your_key_here"    # MarineTraffic
export SENTINELHUB_CLIENT_ID="your_key_here"    # SentinelHub
```

---

## 技术细节

- **协议**: REST API (主要), WebSocket (实时)
- **数据格式**: JSON (主要), CSV/XML (部分)
- **认证方式**: API Key (环境变量或配置)
- **并发处理**: 连接池优化，支持多线程并发获取
- **错误处理**: 完善的异常捕获和重试机制
- **数据缓存**: DataHub 统一缓存策略 (TTL 按数据类型)

---

> 📊 **总计**: 100+ 数据连接器 | 免费: 50+ | 实时: 20+
