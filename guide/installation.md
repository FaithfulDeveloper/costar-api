# 安装指南

## 环境要求

| 依赖 | 最低版本 | 推荐版本 |
|------|----------|----------|
| Node.js | 18.x | 20.x |
| npm | 8.x | 10.x |

## 安装步骤

### 1. 克隆项目

```bash
git clone https://github.com/FaithfulDeveloper/costar-api .git
cd your-repo
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

## 项目结构

```
docs-vitepress/
├── .vitepress/
│   └── config.ts          # VitePress 配置
├── guide/
│   ├── quickstart.md      # 快速开始
│   ├── installation.md    # 安装指南
│   └── config.md          # 配置参考
├── api/
│   ├── index.md           # API 概览
│   ├── auth.md            # 认证接口
│   └── data.md            # 数据接口
├── index.md               # 首页
├── faq.md                 # 常见问题
└── package.json
```

## 添加新页面

1. 在对应目录下创建 `.md` 文件
2. 在 `.vitepress/config.ts` 的 `sidebar` 中添加条目
3. 保存后开发服务器自动生效
