import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () =>
        h('div', { class: 'site-notice' }, [
          h('div', { class: 'site-notice__inner' }, [
            h('span', { class: 'site-notice__badge' }, 'Updated'),
            h(
              'p',
              { class: 'site-notice__text' },
              'This site is being updated continuously to keep guides and references easy to browse.'
            )
          ])
        ])
    })
  }
} satisfies Theme
