# 部署说明

## 本地开发

先安装依赖，再启动本地开发服务：

```bash
pnpm install
pnpm docs:dev
```

## 生产构建

使用以下命令输出静态站点：

```bash
pnpm docs:build
```

生成结果位于 `docs/.vitepress/dist`。

## 维护建议

- 保持中英文导航标签同步。
- 修改指南时同步更新英文页与中文页。
- 优先保留真实文档内容，避免重新引入占位性质的默认示例页。
