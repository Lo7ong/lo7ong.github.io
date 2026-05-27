import { defineConfig } from 'vitepress'

const sharedThemeConfig = {
  search: {
    provider: 'local' as const
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/Lo7ong/lo7ong.github.io' }
  ],
  outline: {
    level: [2, 3] as [2, 3]
  },
  editLink: {
    pattern: 'https://github.com/Lo7ong/lo7ong.github.io/edit/main/docs/:path'
  }
}

const enSidebar = [
  {
    text: 'Overview',
    items: [
      { text: 'Introduction', link: '/guide/introduction' },
      { text: 'Getting Started', link: '/guide/getting-started' },
      { text: 'Deployment', link: '/guide/deployment' }
    ]
  },
  {
    text: 'Reference',
    items: [
      { text: 'Platform Notes', link: '/markdown-examples' },
      { text: 'Runtime API', link: '/api-examples' }
    ]
  }
]

const zhSidebar = [
  {
    text: '概览',
    items: [
      { text: '文档介绍', link: '/zh/guide/introduction' },
      { text: '快速开始', link: '/zh/guide/getting-started' },
      { text: '部署说明', link: '/zh/guide/deployment' }
    ]
  },
  {
    text: '参考',
    items: [
      { text: '平台说明', link: '/zh/markdown-examples' },
      { text: '运行时 API', link: '/zh/api-examples' }
    ]
  }
]

export default defineConfig({
  srcDir: 'docs',
  title: 'Lo7ong Docs',
  description: 'A clean documentation site for guides, references, and deployment notes.',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c82f6' }]
  ],
  themeConfig: {
    ...sharedThemeConfig,
    siteTitle: 'Lo7ong Docs'
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Lo7ong Docs',
      description: 'A clean documentation site for guides, references, and deployment notes.',
      themeConfig: {
        ...sharedThemeConfig,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guides', link: '/guide/introduction' },
          { text: 'Runtime API', link: '/api-examples' }
        ],
        sidebar: enSidebar,
        outline: {
          ...sharedThemeConfig.outline,
          label: 'On this page'
        },
        editLink: {
          ...sharedThemeConfig.editLink,
          text: 'Edit this page on GitHub'
        },
        footer: {
          message: 'Documentation is updated continuously.',
          copyright: 'Copyright © 2026 Lo7ong'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        lastUpdated: {
          text: 'Last updated'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'Lo7ong 文档',
      description: '更接近传统产品文档站的指南、参考与部署说明。',
      themeConfig: {
        ...sharedThemeConfig,
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/introduction' },
          { text: '运行时 API', link: '/zh/api-examples' }
        ],
        sidebar: zhSidebar,
        outline: {
          ...sharedThemeConfig.outline,
          label: '本页目录'
        },
        editLink: {
          ...sharedThemeConfig.editLink,
          text: '在 GitHub 上编辑此页'
        },
        footer: {
          message: '文档内容会持续更新。',
          copyright: 'Copyright © 2026 Lo7ong'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        lastUpdated: {
          text: '最后更新'
        }
      }
    }
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    container: {
      tipLabel: 'TIP',
      warningLabel: 'WARNING',
      dangerLabel: 'IMPORTANT',
      infoLabel: 'NOTE'
    }
  }
})
