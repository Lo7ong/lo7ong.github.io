---
outline: deep
---

# 运行时 API

这里保留一个精简的 VitePress 运行时能力参考页。

## useData()

当页面或 Vue 自定义组件需要读取运行时元数据时，可以使用 `useData()`。

```ts
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
```

## 可用字段

| 字段 | 说明 |
| --- | --- |
| `site` | 来自站点配置的全局元数据 |
| `theme` | 当前语言环境下解析后的主题配置 |
| `page` | 当前页面的元信息与路由数据 |
| `frontmatter` | 当前 Markdown 页面的 frontmatter |

## 常见用途

- 读取当前语言与导航状态。
- 根据 frontmatter 渲染自定义页面元素。
- 在 Vue 组件中读取主题配置。

::: tip
如果内容本身是静态说明，优先保持在 Markdown 中；运行时 API 更适合交互或主题层扩展。
:::
