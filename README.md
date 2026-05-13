# Fincept Terminal Design

> Fincept Terminal v4 架构设计文档站

## 项目简介

Fincept Terminal v4 是一个机构级金融智能终端，C++20 原生应用 + Qt6 UI + 嵌入式 Python 分析引擎。

**核心理念**：Your Thinking is the Only Limit. The Data Isn't.

## 文档结构

- [整体架构](./architecture.md) — C++20/Qt6/Python 混合架构
- [DataHub 数据层](./datahub.md) — 进程内 pub/sub 数据层
- [AI Agents](./agents.md) — 37 个 AI Agent（Buffett/Graham/Lynch 等）
- [数据连接器](./data-connectors.md) — 100+ 数据源
- [交易系统](./trading.md) — 16 家券商 + 加密货币 WebSocket
- [QuantLib 量化](./quantlib.md) — 18 个量化模块
- [节点编辑器](./node-editor.md) — 可视化量化工作流
- [部署指南](./deployment.md) — Docker/CMake/多平台安装

## 在线访问

https://yeluo45.github.io/fincept-terminal-design/

## 技术栈

- VitePress — 文档渲染
- GitHub Actions — 自动构建部署
- GitHub Pages — 托管
