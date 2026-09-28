# 常见问题

## VitePress 相关

### 如何添加新页面？

1. 在对应目录下创建 `.md` 文件
2. 在 `.vitepress/config.ts` 的 `sidebar` 中添加条目
3. 保存即可，开发服务器自动生效

### 如何修改主题颜色？

创建 `.vitepress/theme/custom.css`：

```css
:root {
  --vp-c-brand-1: #3498db;
  --vp-c-brand-2: #2980b9;
}
```

### 如何使用 Vue 组件？

VitePress 原生支持 Vue。在 Markdown 中直接使用：

```md
<CustomComponent :prop="value" />
```

确保组件已导入或注册为全局组件。

### 如何添加 Google Analytics？

安装插件：

```bash
npm install vitepress-plugin-google-analytics
```

在 `config.ts` 中配置：

```ts
import { googleAnalyticsPlugin } from 'vitepress-plugin-google-analytics'

export default defineConfig({
  plugins: [
    googleAnalyticsPlugin({ id: 'G-XXXXXXXXXX' }),
  ],
})
```

## 部署相关

### GitHub Pages 不更新？

- 确认 GitHub Actions 工作流已成功运行
- 检查仓库 Settings → Pages 中的源分支是否正确
- 清除浏览器缓存后重试

### 自定义域名？

1. 在项目根目录创建 `public/CNAME` 文件，写入你的域名
2. 在 DNS 设置中添加 CNAME 记录指向 `username.github.io`
