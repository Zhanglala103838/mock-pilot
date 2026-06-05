# Mock Pilot · Mock 数据工作台

一个 **100% 用 [`@hulianui/ui`](https://github.com/hulianui/hulian) 搭建** 的 mock 数据工作台。生成个人档案、账号权限、业务数据、通用字段、UUID、占位图、接口响应，支持表格 / JSON / 卡片三视图预览、逐格复制、模板库、历史记录，以及 JSON / CSV / SQL INSERT / TS interface 多格式导出。

> 本项目同时是 `@hulianui/ui` 的**真实场景 dogfood 载体**：缺组件就回库加，组件有问题回库改源码，不在本项目里打 CSS 补丁。

## 技术栈

- **Vite + React 19 + TypeScript** —— 纯客户端 SPA，构建为静态文件
- **`@hulianui/ui`** —— 全部 UI 用瑚琏组件（AdminLayout / ProTable / Segmented / JsonViewer / DocumentSheet / Drawer / Dialog / Card / Masonry / Tag / Toast / 全套表单件 …）
- **`@hulianui/tokens`** —— Tailwind v4 preset + 设计令牌，深浅色主题
- **Vitest** —— 生成逻辑纯函数单测（含 GB 11643 身份证校验位国标向量）

数据全部在浏览器本地生成，**零后端、零远程请求**。

## 开发

```bash
pnpm install        # 依赖默认软链本地 ../hulian/packages/{ui,tokens}
pnpm dev            # http://localhost:49173
pnpm test           # 生成逻辑单测
pnpm typecheck      # 仅校验本项目代码（库源码 typecheck 在其自身仓库）
```

### 库消费机制（dev 软链 / prod 线上）

- **本地开发**：`package.json` 依赖用 `link:../hulian/packages/*` 软链本地源码，改库源码 Vite HMR 立即生效。
- **发版部署**：`pnpm use:registry` 把依赖切到线上 pin 版本（`.npmrc` 路由 `@hulianui:registry`，需 `NODE_AUTH_TOKEN` 鉴权 GitHub Packages）；回退用 `pnpm use:local`。

## 构建与部署

```bash
pnpm build                  # 输出静态站到 dist/
node scripts/deploy.mjs     # 构建 + rsync 到生产 nginx
```

部署目标：`60.205.112.50:/www/wwwroot/https:/mock.haloritual.com` → <https://mock.haloritual.com>

视图状态同步到 `?tool=` query，始终是根 `index.html`，**nginx 零额外配置**（无需 SPA fallback）。

## 目录结构

```text
src/
├── lib/                # 纯逻辑（无 UI）
│   ├── random.ts       # 可注入 RNG（mulberry32 测试可复现）
│   ├── datetime.ts     # 日期工具
│   ├── constants.ts    # 地区/姓氏/号段/角色等数据表 + 字段标签
│   ├── generators/     # personal(GB11643) / uuid / general / account / business / api
│   ├── image.ts        # 占位图 Canvas 绘制
│   ├── export.ts       # JSON / CSV / SQL / TS interface 导出
│   └── clipboard.ts    # 复制 / 下载
├── workbench/          # 共享工作台壳（RecordWorkbench / 预览 / 导出抽屉 / 卡片视图）
├── panels/             # 7 大生成器面板 + 模板库 + 历史
├── store/workspace.ts  # localStorage 模板库 + 历史（外部 store）
├── app/tools.tsx       # 工具注册表 + 侧栏菜单
└── App.tsx             # AdminLayout 骨架 + 主题 + Toast
```

## 数据规则

- **手机号**：11 位大陆移动号段。
- **身份证号**：18 位结构，地址码 + 出生日期 + 性别顺序码（男奇女偶）+ **GB 11643 校验位**。
- **公司名**：城市 + 字号 + 行业 + 后缀组合。
- **UUID**：v4，浏览器支持时用 Web Crypto，可切大写 / 32 位无连字符。
- **占位图**：Canvas 本地生成骨架屏风格 PNG，矩形 / 方形 / 圆形。
- **接口响应**：标准 `code / message / data / pagination / error` 结构。

生成数据均为虚构，仅供测试、演示和原型填充。
