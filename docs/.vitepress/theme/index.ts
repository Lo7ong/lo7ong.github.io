// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-before': () => h('div', { class: 'cli-startup' }, [
        h('pre', { class: 'startup-text' }, `
╔═══════════════════════════════════════╗
║   Lo7ong Technical Documentation      ║
║   System Ready • Version 1.0          ║
╚═══════════════════════════════════════╝
        `)
      ])
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 添加页面加载动画
    if (typeof window !== 'undefined') {
      router.onBeforeRouteChange = () => {
        console.log('%c[System] Loading page...', 'color: #3fb950; font-family: monospace;')
      }
      router.onAfterRouteChanged = () => {
        console.log('%c[System] ✓ Page loaded', 'color: #3fb950; font-family: monospace;')
      }
    }
  }
} satisfies Theme