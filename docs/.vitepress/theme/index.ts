// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import './style.css'
import TuiHome from './TuiHome.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData()
    // Render the full TUI homepage when requested
    if (frontmatter.value.layout === 'tuiHome') {
      return h(TuiHome)
    }
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ router }) {
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