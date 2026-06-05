# Mock Pilot 工作台重写 — 设计

> 状态：已批准（用户「做完再通知我」授权自主推进）
> 日期：2026-06-05

## 1. 目的（第一性原理）

Mock Pilot 的重写不是「把旧站抄一遍」，而是**用一个真实、有压强的 mock 数据工作台作为载体，驱动 `@hulianui/ui` 组件库成长**。

硬约束：
- **100% 用 `@hulianui/ui` 组件实现**。缺组件 → 回 hulian 库加；组件有 bug → 回 hulian 库改源码。
- **禁止在本项目里打 CSS 补丁绕过组件缺陷**。需要 hack 才好用 = 组件有缺口，去修组件。
- 允许 web search 调研、允许引入新组件，不必担心给库加东西。

## 2. 三个核心决策

| 维度 | 决策 |
|------|------|
| 产品野心 | **升级为 Mock 工作台**（非 1:1 港口）。保留 7 大生成能力并升级到工作台范式 + 新增模板库/历史/多格式导出。 |
| 库消费 | **dev 本地软链**（`link:../hulian/packages/ui` + tokens，改库源码 HMR 立即生效）；**prod 线上 pin 版本**（`.npmrc` 路由 `@hulianui:registry`，`use:registry` 脚本切换；需 GITHUB_TOKEN）。 |
| 框架 | **Vite + React + TypeScript** SPA。构建静态 `dist/` rsync 到 nginx，零 SSR、零远程请求。 |

## 3. 部署

- 目标：`60.205.112.50:/www/wwwroot/https:/mock.haloritual.com`
- 机制：`vite build` → `dist/` → rsync over ssh。
- 路由：视图状态同步到 `?tool=` query（可分享深链，始终根 `index.html`，**nginx 零配置**，无需 SPA fallback）。

## 4. 库接线（Vite 复刻 www 的 Tailwind v4 + token 链路）

`src/styles.css`：
```css
@import "@hulianui/tokens/tokens.css";   /* token 变量先就位 */
@import "@hulianui/tokens/preset.css";    /* Tailwind v4 + 瑚琏 preset，dark variant 绑 data-theme */
@source "../node_modules/@hulianui/ui/src/**/*.{ts,tsx}";  /* 让消费方 Tailwind 扫到库 className（软链/registry 同路径） */
```
- `@tailwindcss/vite` 插件。
- peer：`@base-ui-components/react` `motion` `react` `react-dom` `tailwindcss` `@emotion/react`（MUI 桥）。
- 重依赖（MUI/recharts/tiptap/vidstack/ogl/dnd-kit）随 ui 的 dependencies 传递安装。
- `'use client'`（库内 399 处）在 Vite 下为无害字符串，rollup `onwarn` 静音 `MODULE_LEVEL_DIRECTIVE`。

## 5. 应用结构

### 5.1 骨架（dogfood `AdminLayout`）
- 左侧导航分组：`数据生成器`（个人 / 账号 / 业务 / 通用 / UUID）、`资产工具`（占位图 / 接口响应）、`模板库`、`历史记录`。
- 顶栏：品牌 + 深浅色 `AnimatedThemeToggler` + 「再生成一批」。

### 5.2 工作台主区（统一三段式）
每个数据生成器复用同一工作台壳：
- **左·配置区**：字段勾选 + 拖拽排序字段 schema（dnd-kit）、生成数量、策略、快捷预设。
- **中·预览区**：`Segmented` 切 `表格 / JSON / 卡片`。表格 = `ProTable`（密度/列设/分页/逐格复制）；JSON = `JsonViewer`/`CodeBlock`；卡片 = `Card`/`Masonry`。
- **右·导出区**：多格式 `JSON / CSV / SQL INSERT / TS interface`（`DocumentSheet` 预览 + `Drawer`），复制 `Toast` 反馈。

### 5.3 工作台级新能力
- **模板库**：当前字段 schema + 配置存为模板（`localStorage`），恢复/删除。
- **历史记录**：最近 N 批生成结果可回看、再导出。
- **占位图**：保留 Canvas 本地生成（矩形/方形/圆形 + 文字 + 骨架纹理）。

## 6. 纯函数 + 测试

旧 `app.js` 的生成算法全部移植为 TS 纯函数（注入 `rng` 便于测试）：
- `personal`：手机号号段、姓名、地址、公司、邮箱、**身份证 GB11643 校验位**、年龄。
- `uuid`：crypto.randomUUID + 降级，大写/紧凑格式。
- `general` / `account` / `business` / `api`：各域生成器。
- `export`：csv（BOM + 转义）、sql insert、ts interface、json。

Vitest 单测覆盖：身份证校验位正确性、号段合法、UUID 格式、CSV 转义、各生成器字段完整性。

## 7. 验证

- 纯逻辑：`vitest run` 全绿。
- UI：真实浏览器（CDP/Playwright）逐 tab 截图自证零 console error，含深浅色。

## 8. 组件覆盖预期（驱动库成长）

`AdminLayout / Segmented / ProTable / JsonViewer / DocumentSheet / Drawer / Dialog / Card / Masonry / Tag / EmptyState / Button(Group) / Toast / Tooltip / Input / Select / Checkbox(Group) / DatePicker / Slider / Switch / AnimatedThemeToggler` 等。过程中暴露的库缺口逐一回 hulian 修。
