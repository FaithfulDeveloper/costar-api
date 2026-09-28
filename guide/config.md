# 配置参考

VitePress 的配置集中在 `.vitepress/config.ts` 中。

## 基础配置

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '站点标题',
  description: '站点描述',
  lang: 'zh-CN',
  base: '/',           // 部署路径，GitHub Pages 需要设为 '/repo-name/'
})
```

## 主题配置

### 导航栏

```ts
nav: [
  { text: '首页', link: '/' },
  { text: '指南', link: '/guide/quickstart' },
  {
    text: '更多',
    items: [
      { text: 'API', link: '/api/' },
      { text: 'FAQ', link: '/faq' },
    ],
  },
],
```

### 侧边栏

```ts
sidebar: {
  '/guide/': [
    {
      text: '指南',
      items: [
        { text: '快速开始', link: '/guide/quickstart' },
        { text: '安装', link: '/guide/installation' },
      ],
    },
  ],
},
```

### GitHub 链接

```ts
socialLinks: [
  { icon: 'github', link: 'https://github.com/FaithfulDeveloper/costar-api ' },
],
```

## 自定义主题色

在 `.vitepress/theme/` 下创建 `custom.css`：

```css
:root {
  --vp-c-brand-1: #3498db;
  --vp-c-brand-2: #2980b9;
  --vp-c-brand-3: #1a5276;
}
```

然后在 `config.ts` 中引入：

```ts
import './theme/custom.css'
```
