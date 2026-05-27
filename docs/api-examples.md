---
outline: deep
---

# Runtime API

This page keeps a compact runtime reference for the built-in VitePress data helpers used by the site.

## useData()

Use `useData()` when a page or custom Vue component needs access to runtime metadata.

```ts
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
```

## Available values

| Key | Description |
| --- | --- |
| `site` | Global site metadata from the VitePress config |
| `theme` | Resolved theme configuration for the current locale |
| `page` | Current page metadata and route information |
| `frontmatter` | Frontmatter for the current markdown page |

## Typical use cases

- Reading the active locale and navigation state.
- Rendering custom page-level UI from frontmatter.
- Accessing theme settings from Vue-based custom components.

::: tip
Keep runtime helpers for interactive or theme-level cases. Static page content should stay in markdown whenever possible.
:::
