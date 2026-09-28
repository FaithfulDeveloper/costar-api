import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Project',
  description: 'A documentation site built with VitePress',
  lang: 'zh-CN',

  // 项目页部署到 https://<user>.github.io/costar-api/ 时必须设置 base
  // 若仓库改名为 <user>.github.io（个人主页仓库），则改为 '/' 并删除下一行
  base: '/costar-api/',

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/quickstart' },
      { text: 'API', link: '/api/' },
      { text: '常见问题', link: '/faq' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '安装指南', link: '/guide/installation' },
            { text: '配置参考', link: '/guide/config' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '概览', link: '/api/' },
            { text: '认证接口', link: '/api/auth' },
            { text: '数据接口', link: '/api/data' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FaithfulDeveloper/costar-api' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Your Name',
    },

    editLink: {
      pattern: 'https://github.com/FaithfulDeveloper/costar-api/edit/main/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: {
      text: '最后更新于',
    },
  },
})
