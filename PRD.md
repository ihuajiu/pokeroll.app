# PRD — Random Pokémon Generator Hub

| 项 | 内容 |
|---|---|
| 文档版本 | v1.0（2026-07-27） |
| 项目 | 英文出海 SEO 工具站：Random Pokémon Generator Hub |
| 状态 | 已评审待开发 |
| 技术栈 | Next.js (App Router) + TypeScript + Tailwind CSS + PokéAPI |
| MVP 目标工期 | 1 周内可上线核心工具页 |

---

## 1. 产品概述

### 1.1 背景
目标市场为英文 Google SEO。关键词群（35+ 个）属于**工具型 + 娱乐互动型**搜索意图，用户想"直接使用"随机宝可梦工具，而非看文章。竞品 UX 普遍薄弱（生成一次即结束，无后续动作），差异化机会在**玩法/体验设计**。

### 1.2 目标
- 短期：上线核心随机生成工具 + 长尾工具矩阵，用程序化 SEO 获取自然流量。
- 定位：**流量入口项目**，非最终商业资产。
- 长期：导流至自有 IP 的 **Monster Generator**（原创生物生成），沉淀可变现资产。

### 1.3 成功指标（MVP 后 90 天）
- 自然搜索流量：核心词 + 长尾词进入 Google 前 20。
- 工具页可用率：单次访问平均生成次数 ≥ 2。
- 合规：0 任天堂 takedown / 商标投诉。
- 变现：跑通轻量联盟链接点击（不依赖广告为主）。

---

## 2. 范围

### In Scope（MVP）
- 核心随机宝可梦生成（名称/#编号/类型/特性/六项能力值/小 Sprite/世代）。
- Generate Again、Share（复制链接/分享图）。
- 筛选：世代、地区、类型。
- 变体工具（部分）：no-names 猜宝可梦、shiny、starter、type/ability/move/bst/number generator。
- 程序化 SEO：约 50 个模板化落地页 + sitemap。
- fan-made 声明与合规约束。

### Out of Scope（MVP 不做，后续/Phase 3+）
- 账号系统 / 云端收藏（先用 localStorage）。
- 付费会员、卖宝可梦素材。
- AI 原创生成（Monster Generator，独立品牌）。
- 融合生成的高阶图像融合（先做两图并排展示）。
- VGC/对战/Meta 等硬核功能。

---

## 3. 用户角色与场景
- **娱乐探索用户（80%）**：随便生成、收集、分享、玩猜宝可梦。→ 重点服务。
- **创作者/挑战玩家**：要 type/ability/move/bst 做原创设计或挑战。
- **新手训练家**：用 starter generator 决定初始伙伴。

---

## 4. 功能需求（Functional Requirements）

> 优先级：P0=必须（MVP）；P1=重要（MVP 内或紧接）；P2=增强。

### FR-01 核心随机生成（P0）
- 随机返回一个宝可梦，展示：英文名、`#National Dex 编号`、`类型(1–2)`、`特性`、`六项基础值(HP/Atk/Def/SpA/SpD/Spe)`、`BST 总和`、`世代`、`小 Sprite`。
- 验收：编号必显示（如 `#025 Pikachu`）；数据来自 PokéAPI；加载 < 1s（含缓存）。

### FR-02 Generate Again（P0）
- 一键重新随机，不刷新整页（客户端或路由刷新）。

### FR-03 Share（P0）
- 复制当前结果链接；生成 OG 分享图（含名称/编号/类型/图）。

### FR-04 筛选：世代 / 地区 / 类型（P1）
- 按 Gen1–9、Kanto…Paldea、18 种类型过滤随机池。
- 验收：地区与世代映射正确（见数据模型表）；类型过滤返回对应属性宝可梦。

### FR-05 变体工具（P1）
- **No-names / Without names**（P1）：隐藏名称，仅显示图/类型/特性，供猜宝可梦。
- **Shiny**（P1）：展示闪光配色（用 shiny sprite）。
- **Starter**（P1）：仅从各代御三家随机。
- **Type / Ability / Move / BST / Number generator**（P1）：分别随机对应单项。
- **Fusion**（P2）：选两个宝可梦，并排展示 + 名称拼接（如 Pikazard）。
- **Wheel**（P2）：转盘动画随机选择。
- **Card / Nickname / Cute / Mythical / Mega**（P2）：简化版（数据展示为主）。

### FR-06 Build Team（P2）
- 本地收藏（localStorage）已生成宝可梦，组成队伍，可查看/分享。

### FR-07 Create Challenge（P2）
- 基于当前筛选生成挑战（如"猜 5 只/集齐某类型"）。

### FR-08 程序化 SEO 落地页（P1）
- 由数据生成约 50 页：按 地区 × 类型 × 世代 组合的模板页，含唯一标题/描述与内链。
- 验收：sitemap 覆盖全部页；无重复内容；每页可被索引。

---

## 5. 信息架构 / 路由（App Router）
```
/                              → 首页/主工具 (FR-01~03)
/random-pokemon-generator      → 主工具（规范 URL）
/[variant]                     → 变体工具页（fusion/type/starter/no-names/wheel…；shiny 已并入 /challenge/shiny，/shiny 301 跳转）
/by/[region]                   → 地区筛选页（程序化）
/type/[type]                   → 类型页（程序化）
/gen/[n]                       → 世代页（程序化）
/about / disclaimer            → fan-made 声明
```
SEO 页面统一模板组件，数据驱动渲染。

---

## 6. 数据模型与数据源

### 6.1 数据源：PokéAPI（首选）
- `GET /pokemon/{id|name}` → name, id, types[], abilities[], stats[], sprites{front_default, front_shiny}, moves[]
- `GET /pokemon-species/{id}` → generation, is_legendary, is_mythical, evolution_chain, flavor_text
- `GET /generation/{n}` → 该世代宝可梦列表（用于筛选）
- 服务端 fetch + 缓存（内存/ISR），避免客户端直连限流。

### 6.2 Pokémon 对象（前端模型）
```ts
type Pokemon = {
  name: string; dexNumber: number;
  types: string[];          // 18 种之一
  abilities: string[];
  stats: { hp:number; atk:number; def:number; spa:number; spd:number; spe:number };
  bst: number;              // 六项之和
  generation: number;       // 1–9
  region: string;           // Kanto…Paldea
  sprite: string;           // 小图 URL
  shinySprite?: string;
  isLegendary?: boolean; isMythical?: boolean; isStarter?: boolean;
};
```

### 6.3 世代—地区映射（筛选必需）
| Gen | 游戏 | 地区 |
|---|---|---|
| 1 | Red/Blue | Kanto |
| 2 | Gold/Silver | Johto |
| 3 | Ruby/Sapphire | Hoenn |
| 4 | Diamond/Pearl | Sinnoh |
| 5 | Black/White | Unova |
| 6 | X/Y | Kalos |
| 7 | Sun/Moon | Alola |
| 8 | Sword/Shield | Galar |
| 9 | Scarlet/Violet | Paldea |

### 6.4 18 种类型
Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, Fairy

---

## 7. 技术与架构
- 框架：Next.js（App Router, RSC）+ TypeScript。
- 样式：Tailwind CSS。
- 数据：服务端封装 `lib/pokeapi.ts`，带缓存与错误兜底（随机失败回退）。
- 随机算法：在合法池（全量或筛选后）内取随机索引；支持分页/游标避免重复。
- SEO：每页 `generateMetadata` 动态标题/描述；`sitemap.ts` 输出全量 URL；`robots.ts`。
- 状态：Team/收藏用 localStorage（无后端账号）。

---

## 8. 设计 / UX 规范
- 文案风格：模拟"训练家遭遇"，如 `Welcome Trainer! Your random Pokémon is… ✨ Eevee`。
- 主结果卡字段顺序：名称+#编号 → Type → Ability → Stats(六项+BST) → Generation → Sprite。
- 生成后必提供后续动作按钮：`[Generate Again] [Build Team] [Create Challenge] [Share]`。
- 响应式：移动端优先（工具站移动流量高）。
- 特殊模式：no-names 隐藏名称；wheel 转盘动画；fusion 双图并排。

---

## 9. IP / 合规约束（强制 Checklist）
- ✅ 使用：宝可梦名称、#编号、类型、特性、小 Sprite（PokéAPI 链接）。
- ❌ 禁止：官方高清插画、Pokémon Logo、卡牌图片、游戏截图、冒充官方。
- ✅ 站点须含：`This is a fan-made tool. Not affiliated with Nintendo or The Pokémon Company.`
- ✅ 联盟/广告素材不得用 Pokémon Logo，不得暗示官方合作（见 PRD §11）。
- ⚠️ 不做付费宝可梦功能（最高风险）。

---

## 10. 非功能需求
- 性能：工具页 LCP < 2.5s；随机请求命中缓存。
- 可访问性：对比度达标，按钮有 aria-label。
- SEO：规范 URL、结构化数据（可加 JSON-LD 标注为工具/WebApplication）。
- 合规：robots 允许索引；sitemap 完整。

---

## 11. 变现集成（来自设计文档第 11 章）
- **MVP 阶段**：免费工具 + 轻量联盟链接（卡牌/游戏，通用文案、无 Logo）。
- **风险档**：联盟 ≈ AdSense（商业化 ⭐⭐⭐⭐）；付费宝可梦功能 ⭐⭐⭐⭐⭐（禁止）。
- **资产层**：有量后做独立品牌的 Monster Generator（自有 IP 订阅）。
- 详见 `design-requirements.md` 第 11 章。

---

## 12. 里程碑
| 阶段 | 内容 | 估时 |
|---|---|---|
| Phase 0 | 脚手架 + PokéAPI 封装 + 合规基座 | 0.5–1 天 |
| Phase 1 | 核心工具（FR-01~03）+ 响应式 | 2–3 天 |
| Phase 2 | 筛选 + 变体工具（FR-04~05）+ SEO 模板（FR-08） | 3–4 天 |
| Phase 3 | 互动深化（FR-06~07：Team/Challenge/Share 图） | 2–3 天 |
| Phase 4 | Monster Generator 独立品牌（后续） | 另立 PRD |

---

## 13. 风险
- **IP 风险**：商业化升级任天堂关注 → 严格遵守 §9 checklist。
- **API 限流**：PokéAPI 公共版有限流 → 服务端缓存 + 失败兜底。
- **流量天花板**：宝可梦用户商业意图低 → 用联盟而非纯广告，长期靠自有 IP。

---

## 14. 待确认
1. 视觉风格/配色（需 UI 设计）。
2. 移动端适配优先级确认。
3. ~~仅英文 or 多语言~~（已决策 2026-08：多语言 es/pt/de/fr 子目录，英文 URL 零前缀；M1/M2 已上线，M3 工具页+legal 页翻译单独立项）。
4. Team/收藏是否需要账号（暂定 localStorage）。
5. 联盟具体用哪个平台（Amazon Associates / 其它）。
