import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "$ Lo7ong Docs",
  description: "Terminal-Style Technical Blog | CLI风格技术博客",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0d1117' }],
    ['meta', { name: 'color-scheme', content: 'dark' }],
    // 添加等宽字体
    ['link', { 
      rel: 'stylesheet', 
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap' 
    }]
  ],

  // 强制深色模式
  appearance: false,

  themeConfig: {
    // CLI风格导航
    nav: [
      { text: '$ home', link: '/' },
      { text: '$ docs', link: '/markdown-examples' },
      { text: '$ api', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: '📁 Documentation',
        items: [
          { text: '> Markdown Examples', link: '/markdown-examples' },
          { text: '> Runtime API', link: '/api-examples' }
        ]
      },
      {
        text: '📁 Tutorials',
        items: [
          { text: '> Getting Started', link: '/getting-started' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lo7ong/' }
    ],

    footer: {
      message: 'System Status: ✓ Online | Built with VitePress',
      copyright: 'Copyright © 2025 Lo7ong'
    },

    // 搜索配置
    search: {
      provider: 'local'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/Lo7ong/lo7ong.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    // 最后更新时间
    lastUpdated: {
      text: 'Last commit',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '$ Contents'
    },

    // 页脚导航
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    }
  },

  // Markdown配置 - 只使用深色主题
  markdown: {
    theme: 'github-dark',
    lineNumbers: true,
    container: {
      tipLabel: 'INFO',
      warningLabel: 'WARNING',
      dangerLabel: 'ERROR',
      infoLabel: 'NOTE'
    }
  }
})

