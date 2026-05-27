# Deployment

## Local development

Install dependencies and run the local dev server:

```bash
pnpm install
pnpm docs:dev
```

## Production build

Create the static output with:

```bash
pnpm docs:build
```

The generated files are written to `docs/.vitepress/dist`.

## Maintenance notes

- Keep navigation labels synchronized across locales.
- Update both English and Chinese pages when a guide changes.
- Prefer guide-style content over placeholder sample pages.
