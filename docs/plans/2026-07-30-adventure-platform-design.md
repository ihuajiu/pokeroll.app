# PokeRoll → Random Adventure Platform（Phase 1 设计）

> 决策日期：2026-07-30
> 状态：已批准（§1–§4 全部确认）
> Phase 1 范围：新增 `/adventure` 灵魂页 + 首页 Hero 改造

## 0. 背景与转向

PokeRoll 现状是「Pokémon 工具箱」（17+ 工具平铺），用户心智散。品牌名 PokeRoll 本应表达「掷骰子开启冒险」。转向目标：**从 Tool 集合 → Adventure 体验**，用一个灵魂动作 `Roll Your Pokémon Adventure` 把已有工具组合成一次冒险。

现状资产评估：数据层 / Generator 框架 / Team 系统 / 分享 / SEO 路由 / 多工具矩阵已齐备（完成度 ~80%），缺的是产品叙事与信息架构。Phase 1 不增工具，只组合。

## 1. 一次 Roll 产出的维度（V1）

| 维度 | 展示 | 数据来源 |
|---|---|---|
| Starter | ✅ | `getStarters()` 随机一只 |
| Region | ✅ | `REGIONS` 随机一个 |
| Team(6) | ✅ | 与 Region 联动：`getPoolByRegion(region)` 取 6 只（确定性 RNG） |
| Challenge | ✅ | 新增 `CHALLENGES` 叙事规则列表（**不复用** `getChallenge`） |
| Goal | ✅ | 新增 `GOALS` 故事终点列表 |
| Trainer | ✅ | 新增 `TRAINER_NAMES`(~12) + `TRAINER_ROLES`(7)，随机组合 → "Alex — Ace Trainer" |
| Type | ❌ 不展示 | 内部保留，仅作队伍属性角标（🔥/⚡/🌊） |
| Difficulty | ⏸️ V2 | 与 Challenge 重叠，缓 |

**数据集内容**：
- `TRAINER_ROLES`: Ace Trainer / Dragon Tamer / Gym Challenger / Researcher / Rival / Explorer / Collector
- `GOALS`: Become Champion / Complete Pokédex / Discover Legendary Pokémon / Build the Ultimate Team / Defeat All Gyms / Become a Type Master
- `CHALLENGES`: Nuzlocke Challenge / Hardcore Nuzlocke / Mono-Type Run / No Healing Items / Set Mode Only / Scramble Challenge / Wonder Locke / Egglocke

**V2 deferred**：Trainer Class / Rival / Gym Journey / Legendary Encounter。

## 2. `/adventure` 页架构

- 路由 `app/adventure/page.tsx`，服务端组件，`dynamic = "force-dynamic"`。
- **可分享**：复用 challenge 的 seed 机制。`/adventure?seed=xxx` 复现同一冒险；首次访问无 seed 时服务端生成并 `router.replace` 写入 URL。
- **RNG 复用**：`lib/challenge.ts` 的 `hashSeed` + `mulberry32` 改为 `export`（仅加 export，不改逻辑，`/challenge` 零回归），`lib/adventure.ts` 导入复用。

**`rollAdventure(seed)` 逻辑**（新建 `lib/adventure.ts`）：
```
rng = mulberry32(hashSeed(seed))
trainer   = { name: pick(TRAINER_NAMES,rng), role: pick(TRAINER_ROLES,rng) }
region    = pick(REGIONS, rng)
goal      = pick(GOALS, rng)
challenge = pick(CHALLENGES, rng)
starter   = pickOne(getStarters(), rng)
team      = pickDistinct(await getPoolByRegion(region), 6, rng)
return { seed, trainer, region, goal, challenge, starter, team }
```
全部确定性 RNG → 同 seed 必复现 → 天然可分享。

**页面结构**（`components/AdventureView.tsx`，客户端）：
```
PageHeader "Roll Your Pokémon Adventure"
[Share Adventure]  [Roll Again]   ← Roll Again = router.push(?seed=<new>)
┌─ Adventure Banner ─────────────────────┐
│  Trainer:   Alex — Ace Trainer          │
│  Region:    Kanto                       │
│  Starter:   🔥 Charmander  (HeroCard)    │
│  Challenge: Hardcore Nuzlocke            │
│  Team:      6× HeroCard variant="team"   │
│  Goal:      Become Champion             │
└──────────────────────────────────────────┘
```
全部复用现有 `HeroCard`，不造新卡片组件。

**解耦原则**：Adventure 的 Challenge 维度是叙事标签（`CHALLENGES`），与现有 `/challenge` 页的 `getChallenge`（guess/collect/team/shiny 工具型）完全解耦；Team 改由 Region 池直接取，不走 `getChallenge`。`lib/challenge.ts` 与 `/challenge` 页零改动。

## 3. 首页 Hero 改造

现有 Hero `xl:grid-cols-2` 双栏结构保留，只换左栏内容、右栏改静态：

**左栏（hero-copy）**
- eyebrow：`Random Adventure Platform`
- H1：`Roll Your Pokémon <span class="accent">Adventure</span>`
- lead：一句叙事
- CTA：主按钮 `[Roll Adventure →]` = `<Link href="/adventure">`；次按钮保留 `[Explore Tools]`（锚 `#tools`）
- `hero-meta`（1000+ / 18 / 9）保留

**右栏（hero-visual）**
- stage（rings/ball）+ `HeroCard` 保留，但改静态展示：`showActions={false}`，移除 `rollButtonId`
- 不放单独 `???` 预告卡（右侧静态 HeroCard 已是视觉钩子，避免重复）

**代价（已知）**：首页移除「原地 Roll a Pokémon」随机换卡（`HeroActions` 的 `heroRollBtn` 桥接作废）。纯随机抽卡由 `/random` 承担，冒险由 `/adventure` 承担——正是转向意图。`HeroActions` 组件保留（不删），仅 HomeTool 不再渲染它。

「Pick a tool, start playing」区第一张卡改为 Adventure 入口（替代现 Random Generator 头位），其余顺延。

## 4. 文件清单

**新建**
- `lib/adventure.ts` — `rollAdventure(seed)` + 数据集 `TRAINER_NAMES`/`TRAINER_ROLES`/`GOALS`/`CHALLENGES`；导入 challenge 的 RNG
- `app/adventure/page.tsx` — 服务端页
- `components/AdventureView.tsx` — 客户端交互（Roll Again / Share Adventure）

**改动**
- `lib/challenge.ts` — `hashSeed`/`mulberry32` 加 `export`（不改逻辑）
- `components/HomeTool.tsx` — Hero 左栏换冒险叙事+CTA；右栏 HeroCard `showActions={false}` 去 rollButtonId；`JUMP_TOOLS` 头位改 Adventure
- `components/SiteNav.tsx` — `MAIN` 头位加 Adventure
- `lib/tools.ts` — `TOOLS` 加 `/adventure`（core 组）

## 5. Phase 1 Non-goals（防 scope creep）

- 导航五分组重构（Adventure/Generators/Challenges/Tools/Team）
- `/team/random` 参数化（世代/地区/类型/数量/难度）
- `/challenge` 升级（难度/规则/推荐队）
- `/shiny` Hunt 模式
- SEO 工具（Ability/Move/BST/Number/Cute/Mythical/Mega/Nickname）降级迁移
- Card Generator 降级到 Fun Tools
- 首页原地 Roll 完整结果

## 6. 实现顺序

1. `lib/challenge.ts` 导出 RNG（1 行改动）
2. `lib/adventure.ts` 数据集 + `rollAdventure`
3. `app/adventure/page.tsx` + `components/AdventureView.tsx`
4. `components/HomeTool.tsx` Hero 改造 + `JUMP_TOOLS`
5. `components/SiteNav.tsx` + `lib/tools.ts` 导航接入
6. 自测：`/adventure` 首屏 Roll、Roll Again、Share、seed 复现；首页 CTA 跳转；`/challenge` 回归
