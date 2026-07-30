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
- **客户端/服务端隔离（关键）**：`lib/adventure.ts` 的 `rollAdventure` 依赖 `lib/pokeapi` → `lib/pokedex.ts`（`fs` 读 `data/pokedex.json`），属服务端模块，**禁止被 `"use client"` 组件 import**，否则 Webpack 把 `fs` 拖进客户端 bundle 报 `Module not found: Can't resolve 'fs'`。故拆分：
  - `lib/adventure-types.ts`（客户端安全）：`Adventure` 类型 + `TRAINER_NAMES`/`TRAINER_ROLES`/`GOALS`/`CHALLENGES` 数据集 + `randomSeed`/`shareText` 纯函数，无任何 fs/pokeapi 依赖。
  - `lib/adventure.ts`（服务端）：仅 `rollAdventure`，从 `adventure-types` re-export 类型与纯函数供服务端使用。
  - `components/AdventureView.tsx`（use client）与 `app/adventure/page.tsx` 的 `randomSeed` 均从 `lib/adventure-types` 导入；`rollAdventure` 仅 `page.tsx` 服务端调用。

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
- stage（rings/ball）作为视觉背板保留
- 右栏整体重设计为**一张「冒险预告卡」**(Adventure Teaser Card)，不再放静态 HeroCard：
  ```
  ┌─────────────────────────────────────┐
  │       (stage rings + ball 背板)      │
  │      🎲  YOUR ADVENTURE AWAITS       │
  │   Your Pokémon     ???               │
  │   Your Region      ???               │
  │   Your Challenge  ???               │
  │   [ Roll Adventure → ]              │
  │   ··· 6 unknown companions ···       │
  └─────────────────────────────────────┘
  ```
- 三行问号 + 「6 unknown companions」暗示队伍，强化未知叙事
- 主 CTA `Roll Adventure →` = `<Link href="/adventure">`
- 卡片样式：`rounded-2xl border border-poke-border bg-poke-surface`，红色主题 `--cc: var(--poke-red)`
- 客户端组件 `HeroAdventureTeaser`，便于 hover/聚焦动效

**代价（已知）**：首页移除「原地 Roll a Pokémon」随机换卡（`HeroActions` 的 `heroRollBtn` 桥接作废）。纯随机抽卡由 `/random` 承担，冒险由 `/adventure` 承担——正是转向意图。`HeroActions` 组件保留（不删），仅 HomeTool 不再渲染它。

「Pick a tool, start playing」区第一张卡改为 Adventure 入口（替代现 Random Generator 头位），其余顺延。

## 4. 文件清单

**新建**
- `lib/adventure-types.ts` — 客户端安全：`Adventure` 类型 + 数据集 + `randomSeed`/`shareText`（无 fs/pokeapi 依赖）
- `lib/adventure.ts` — 服务端：`rollAdventure(seed)`（导入 pokeapi 与 RNG），re-export adventure-types
- `app/adventure/page.tsx` — 服务端页（`force-dynamic`，读 `searchParams.seed`）
- `components/AdventureView.tsx` — 客户端交互（Roll Again / Share Adventure / Add all to Team），从 `lib/adventure-types` 导入
- `components/HeroAdventureTeaser.tsx` — 首页右栏冒险预告卡（🎲 + 三问号 + Roll Adventure CTA）

**改动**
- `lib/challenge.ts` — `hashSeed`/`mulberry32` 加 `export`（不改逻辑，零回归）
- `components/HomeTool.tsx` — Hero 左栏换冒险叙事+CTA；右栏 `HeroCard` 替换为 `HeroAdventureTeaser`；移除 `HeroActions` 渲染与 `getRandomPokemon`/`getPokemonById` import；`JUMP_TOOLS` 头位改 Adventure Mode
- `components/SiteNav.tsx` — `MAIN` 头位加 Adventure
- `lib/tools.ts` — `TOOLS` 头位加 `/adventure`（core 组）

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
4. `components/HeroAdventureTeaser.tsx`（右栏预告卡）
5. `components/HomeTool.tsx` Hero 改造 + `JUMP_TOOLS`
6. `components/SiteNav.tsx` + `lib/tools.ts` 导航接入
7. 自测：`/adventure` 首屏 Roll、Roll Again、Share、seed 复现；首页 CTA 跳转；`/challenge` 回归

## 7. 实现状态（2026-07-30）

✅ **全部完成，`tsc --noEmit` 通过，所有文件 lint 0 错误。**

- §1 七维度全部落地（Trainer/Region/Starter/Team/Challenge/Goal 展示；Type 不展示由 HeroCard 自带属性标识承担；Difficulty 缓 V2）
- §2 `/adventure` 服务端首屏 Roll + 客户端 Roll Again（push 新 seed）+ Share Adventure（剪贴板复制分享文案+链接）+ Add all to Team
- §3 首页 Hero 双栏保留：左栏冒险叙事 CTA，右栏 `HeroAdventureTeaser`（无静态 HeroCard），`HeroActions` 不再渲染（组件保留未删），HomeTool 不再依赖 `lib/pokeapi`
- §4 全部文件清单按修订版落地，导航 `MAIN` 与 `TOOLS` 头位均为 Adventure
- 代价确认：首页「原地 Roll a Pokémon」随机换卡已移除，由 `/random` 与 `/adventure` 分别承担
