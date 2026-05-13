import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Fincept Terminal Design",
  description: "Fincept Terminal v4 架构设计文档站",
  lang: "zh-CN",
  base: "/fincept-terminal-design/",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "架构", link: "/architecture" },
      { text: "DataHub", link: "/datahub" },
      { text: "AI Agents", link: "/agents" },
      { text: "数据连接", link: "/data-connectors" },
      { text: "交易系统", link: "/trading" },
      { text: "QuantLib", link: "/quantlib" },
      { text: "节点编辑器", link: "/node-editor" },
      { text: "部署", link: "/deployment" },
    ],
    sidebar: [
      {
        text: "文档",
        items: [
          { text: "首页", link: "/" },
          { text: "整体架构", link: "/architecture" },
          { text: "DataHub 数据层", link: "/datahub" },
          { text: "AI Agents", link: "/agents" },
          { text: "数据连接器", link: "/data-connectors" },
          { text: "交易系统", link: "/trading" },
          { text: "QuantLib 量化", link: "/quantlib" },
          { text: "节点编辑器", link: "/node-editor" },
          { text: "部署指南", link: "/deployment" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/YeLuo45/fincept-terminal-design" },
    ],
    footer: {
      message: "基于 Fincept Terminal v4 开源项目构建",
      copyright: "Copyright © 2025-present Fincept Corporation",
    },
  },
});
