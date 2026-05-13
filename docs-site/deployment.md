# Fincept Terminal 部署指南

本文档介绍 Fincept Terminal 的多种部署方式及构建系统详情。

---

## 部署方式总览

| 方式 | 适用平台 | 难度 | 推荐场景 |
|------|----------|------|----------|
| **方式一：下载安装包** | Windows / Linux / macOS | ⭐ 简单 | 推荐大多数用户 |
| **方式二：快速构建** | Linux / macOS | ⭐⭐ 中等 | 开发者 / 高级用户 |
| **方式三：Docker** | Linux (X11) | ⭐⭐ 中等 | CI / 开发环境 |

---

## 方式一：下载安装包（推荐）

直接下载对应平台的安装程序，一键安装：

| 操作系统 | 下载文件 | 版本 |
|----------|----------|------|
| Windows | `FinceptTerminal-Windows-x64-setup.exe` | v4.0.2 |
| Linux | `FinceptTerminal-Linux-x64.run` | v4.0.2 |
| macOS (Apple Silicon) | `FinceptTerminal-macOS-arm64.dmg` | v4.0.2 |

> **提示**：安装包包含所有运行时依赖，开箱即用。

---

## 方式二：快速构建

通过源码脚本快速构建，适合开发者或平台暂无安装包的情况。

### 前置依赖

| 依赖 | 最低版本 | 说明 |
|------|----------|------|
| C++ 编译器 | GCC 12.3 / Clang 15.0 | C++20 支持 |
| CMake | 3.27 | 构建系统 |
| Python | 3.11+ | 脚本和数据分析 |
| Qt | 6.8.3 | GUI 框架 |

### 构建步骤

```bash
# 克隆源码
git clone https://github.com/Fincept-Corporation/FinceptTerminal.git
cd FinceptTerminal

# 添加执行权限并运行自动构建脚本
chmod +x setup.sh && ./setup.sh
```

`setup.sh` 会自动完成以下步骤：

1. 检测操作系统，安装必要的构建工具
2. 验证编译器、CMake、Python 版本
3. 通过 `aqtinstall` 自动安装 Qt 6.8.3
4. 使用 CMake Preset 配置项目
5. 编译生成可执行文件

> **CI 模式**：`./setup.sh --ci` 跳过交互式步骤，适合自动化流水线。

---

## 方式三：Docker（CI / 开发环境）

Docker 方式适用于持续集成或标准化开发环境。

| 平台 | 支持情况 | 备注 |
|------|----------|------|
| Linux (X11) | ✅ 支持 | 需要 X11 转发显示 |
| Windows | ❌ 不支持 | 无 X11 环境 |
| macOS | ❌ 不支持 | 无 X11 环境 |

### 基本用法

```bash
# 构建镜像
docker build -t fincept-terminal .

# 运行（需要 X11 转发）
docker run -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix fincept-terminal
```

> **注意**：Docker 方式仅支持 Linux 平台，且需要配置 X11 转发以显示 GUI。

---

## 构建系统

Fincept Terminal 使用 CMake 作为构建系统，配合 CMakePresets.json 实现跨平台一致性。

### 7 种构建预设

| 预设名称 | 平台 | 构建类型 | 说明 |
|----------|------|----------|------|
| `win-release` | Windows | Release | 生产构建（默认） |
| `win-debug` | Windows | Debug | 调试构建 |
| `win-fast` | Windows | RelWithDebInfo | 快速迭代开发 |
| `win-release-lto` | Windows | Release + LTO | 启用链接时优化，适合发布 |
| `linux-release` | Linux | Release | 生产构建 |
| `linux-debug` | Linux | Debug | 调试构建 |
| `macos-release` | macOS | Release | 生产构建 |
| `macos-debug` | macOS | Debug | 调试构建 |

### 构建优化技术

| 技术 | 说明 |
|------|------|
| **Unity Build** | 合并多个源文件加速编译（部分模块因匿名命名空间冲突已禁用） |
| **ccache** | 编译缓存，显著加速增量构建（自动检测） |
| **LTO** (Link-Time Optimization) | 链接时全程序优化，提升运行性能（`win-release-lto` 预设默认启用） |

### CMake 关键配置

```bash
# 使用预设配置（示例：Linux Release）
cmake --preset linux-release

# 使用预设构建
cmake --build --preset linux-release
```

---

## 系统依赖详情

### Linux（Ubuntu/Debian）

```bash
sudo apt-get install git cmake ninja-build g++ python3 python3-pip \
    libgl1-mesa-dev libglu1-mesa-dev libxkbcommon-dev libxkbcommon-x11-dev \
    libfontconfig1 libdbus-1-3 libssl-dev libxcb-cursor0 libsecret-1-dev \
    pkg-config curl
```

### macOS

通过 Homebrew 安装：

```bash
brew install cmake ninja python@3.11 openssl@3 yt-dlp expat portaudio
```

### Windows

- 使用 MSVC 2022 编译器
- 通过 vcpkg 或手动安装 Qt 6.8.3
- 建议使用 Visual Studio 2022 + Ninja 生成器

---

## 快速参考

| 项目 | 详情 |
|------|------|
| 仓库地址 | https://github.com/Fincept-Corporation/FinceptTerminal |
| 最新稳定版 | v4.0.2 |
| Qt 版本 | 6.8.3 |
| C++ 标准 | C++20 |
| Python 版本 | 3.11+ |
| CMake 版本 | 3.27+ |
| GCC 最低版本 | 12.3 |
| Clang 最低版本 | 15.0 |
