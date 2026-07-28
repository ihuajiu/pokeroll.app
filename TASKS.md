# 开发任务分解 — Random Pokémon Generator Hub

> 配套 `PRD.md`。每个任务含：目标 / 关键步骤 / 产出 / 验收 / 依赖 / 预估。
> 执行顺序按 Phase；[] 表示可在看板/TaskCreate 中跟踪的条目。

---

## Phase 0 — 脚手架与基座（0.5–1 天）

**T0.1 初始化 Next.js 项目**
- 目标：搭好可运行工程。
- 步骤：`create-next-app`（App Router, TS, Tailwind, ESLint）；配置 `package.json` 脚本。
- 产出：本地 `npm run dev` 可启动空白站。
- 验收：首页 200，Tailwind 生效。
- 依赖：无。

**T0.2 PokéAPI 数据封装层 `lib/pokeapi.ts`**
- 目标：统一、带缓存的随机宝可梦数据获取。
- 步骤：
  1. 实现 `getRandomPokemon(pool?)`：从全量或筛选池随机取 id。
  2. 实现 `getPokemonById(id)`：聚合 `/pokemon` + `/pokemon-species`。
  3. 实现筛选池：`getPoolByGeneration(n)` / `getPoolByRegion(r)` / `getPoolByType(t)` / `getStarters()`。
  4. 缓存：内存 Map + 可选 ISR（`export const revalidate`）；失败兜底（重试/回退随机）。
- 产出：`lib/pokeapi.ts` + 类型 `Pokemon`（见 PRD §6.2）。
- 验收：单测覆盖随机/筛选/失败回退；请求命中缓存；错误不白屏。
- 依赖：T0.1。

**T0.3 合规基座组件**
- 目标：全局 fan-made 声明与页脚。
- 步骤：`<Disclaimer />` 组件（"fan-made, not affiliated with Nintendo"）；放入 layout 页脚。
- 验收：每个页面可见声明。
- 依赖：T0.1。

**T0.4 SEO 基座**
- 目标：可索引骨架。
- 步骤：`app/robots.ts`、`app/sitemap.ts`（先输出静态页，Phase 2 补程序化页）；根 `metadata`。
- 验收：/robots.txt、/sitemap.xml 可访问。
- 依赖：T0.1。

---

## Phase 1 — 核心工具（2–3 天）【P0】

**T1.1 主工具页 `/` 与 `/random-pokemon-generator`**
- 目标：随机生成一个宝可梦并完整展示。
- 步骤：Server Component 调用 `getRandomPokemon()`；渲染结果卡（名称+#编号、Type、Ability、六项 Stats+BST、Generation、小 Sprite）。
- 验收：FR-01 全部字段显示；#编号必现；加载 < 1s（缓存）。
- 依赖：T0.2。

**T1.2 Generate Again**
- 目标：不整页刷新重随机。
- 步骤：客户端按钮调用路由/`router.refresh()` 或客户端再请求；保证不重复上一次。
- 验收：点击即换新结果；URL 可带 `?seed=` 便于分享。
- 依赖：T1.1。

**T1.3 Share（链接 + OG 图）**
- 目标：可分享当前结果。
- 步骤：复制结果链接（`/random-pokemon-generator?p=pikachu`）；`opengraph-image` 动态生成分享图（名称/编号/类型/Sprite）。
- 验收：复制成功；分享到社交平台显示卡片图。
- 依赖：T1.1。

**T1.4 响应式与欢迎文案**
- 目标：移动端优先 + 训练家语境。
- 步骤：Tailwind 响应式；结果卡套 `Welcome Trainer! Your random Pokémon is… ✨ {name}`。
- 验收：移动视口无溢出；文案出现。
- 依赖：T1.1。

---

## Phase 2 — 筛选 / 变体 / 程序化 SEO（3–4 天）【P1】

**T2.1 筛选：世代 / 地区 / 类型**
- 目标：按维度过滤随机池。
- 步骤：筛选 UI（下拉/标签）→ 调用对应 pool；地区—世代映射表（PRD §6.3）。
- 验收：选 Kanto 仅出 Gen1；选 Fire 仅出火属性；映射正确。
- 依赖：T0.2。

**T2.2 变体工具（数据型）**
- 目标：type/ability/move/bst/number generator。
- 步骤：各自路由复用模板，随机对应单项并展示关联宝可梦。
- 验收：每个变体返回合法随机值。
- 依赖：T0.2, T2.1。

**T2.3 变体工具（玩法型）**
- 目标：no-names / shiny / starter。
- 步骤：
  - no-names：隐藏名称，仅图/类型/特性（猜宝可梦）。
  - shiny：用 `front_shiny` sprite。
  - starter：仅从各代御三家随机（需 starter 名单）。
- 验收：no-names 不泄露名称；shiny 显示闪光色；starter 仅御三家。
- 依赖：T0.2。

**T2.4 程序化 SEO 模板页（FR-08）**
- 目标：约 50 个模板化落地页。
- 步骤：`/by/[region]`、`/type/[type]`、`/gen/[n]` 动态路由；`generateStaticParams` 预生成；每页独立 `generateMetadata`（标题/描述）+ 内链网。
- 验收：sitemap 覆盖全部；无重复内容；可索引。
- 依赖：T2.1, T0.4。

**T2.5 变体工具（增强型，P2 可延后）**
- 目标：fusion / wheel / card / nickname / cute / mythical / mega。
- 步骤：fusion=双图并排+名称拼接；wheel=转盘动画；其余=简化数据展示。
- 验收：fusion 出组合名；wheel 动画选中；其余返回合法值。
- 依赖：T0.2, T2.1。

---

## Phase 3 — 互动深化（2–3 天）【P2】

**T3.1 Build Team（localStorage）**
- 目标：本地收藏组成队伍。
- 步骤：`useTeam` hook + 收藏按钮；队伍页展示/移除/分享。
- 验收：刷新后收藏仍在（localStorage）；可分享队伍链接。
- 依赖：T1.1。

**T3.2 Create Challenge**
- 目标：基于筛选生成挑战。
- 步骤：如"猜 5 只 / 集齐某类型"，调用现有随机+筛选。
- 验收：挑战可生成并可分享。
- 依赖：T2.1, T3.1。

**T3.3 联盟链接位（变现，低风险）**
- 目标：MVP 阶段轻量变现。
- 步骤：结果页/地区页底部加"推荐卡牌收纳/游戏"文字链接（**不用 Pokémon Logo、不暗示官方**），链接到零售商品类页。
- 验收：无 Logo、无官方措辞；点击可跳转。
- 依赖：T1.1。⚠️ 遵守 PRD §9/§11。

---

## Phase 4 — Monster Generator（独立品牌，另立 PRD）
- 独立子站/品牌，AI 原创生物生成（自有 IP，可订阅）。
- 不在本 MVP 范围。

---

## 执行清单（勾选式）
- [ ] T0.1 初始化 Next.js
- [ ] T0.2 PokéAPI 封装层
- [ ] T0.3 合规基座
- [ ] T0.4 SEO 基座
- [ ] T1.1 主工具页
- [ ] T1.2 Generate Again
- [x] T1.3 Share
- [x] T1.4 响应式/文案
- [x] T2.1 筛选
- [x] T2.2 数据型变体
- [x] T2.3 玩法型变体
- [x] T2.4 程序化 SEO 页
- [x] T2.5 增强型变体
- [x] T3.1 Build Team
- [x] T3.2 Create Challenge
- [x] T3.3 联盟链接位

## 依赖关系速览
T0.1 → {T0.2,T0.3,T0.4}
T0.2 → {T1.1,T2.1,T2.2,T2.3,T2.5}
T1.1 → {T1.2,T1.3,T1.4,T3.1,T3.3}
T2.1 → {T2.4,T2.5,T3.2}
T3.1 → T3.2
