# Random Pokémon Generator — Home Hub 原型设计文档

**设计主题：** Field Guide（野外考察手册）  
**适用范围：** 首页 `/`（Random Pokémon Generator Hub）  
**创建日期：** 2026-07-28  
**状态：** 待实现为独立 HTML 原型

---

## 1. 设计目标

基于 `design-requirements.md`，首页 Hub 需要同时满足：

1. **SEO 入口**：覆盖核心词 `random pokemon generator` 与工具矩阵导航。
2. **即时价值**：用户首次进入 3 秒内看到一只具体宝可梦，降低跳出率。
3. **玩法差异化**：竞品只做到"生成一次"，本设计通过"野外手册/日志"概念强化生成后的连续动作（收藏、组队、挑战、分享）。
4. **IP 安全**：原型阶段经评估后，决定使用第三方托管的官方 artwork（475×475）以提升视觉体验；不放 Pokémon Logo、卡牌图片、游戏截图。该决策会提升 IP 风险，需在上线前再次评估。
5. **情感定位**：模拟训练家在野外翻开图鉴手册的体验，强调探索、收藏、冒险感。

---

## 2. 视觉语言

### 2.1 色彩系统

| 名称 | Hex | 用途 |
|------|-----|------|
| Paper | `#f6f1e7` | 主背景，模拟牛皮纸/旧图鉴页 |
| Paper Dark | `#ede6d9` | 卡片、分区背景 |
| Ink | `#2a2018` | 主文字 |
| Ink Muted | `#6f6353` | 副标题、描述 |
| Forest | `#2d4a3e` | 主按钮、强调标题、类型徽章底色 |
| Teak | `#8b5a2b` | 边框、分隔线、次要强调 |
| Ochre | `#d4a03a` | CTA 高亮、稀有度、收藏图标 |
| Stamp Red | `#b74d3e` | 邮戳、标签、提示 |
| Ink Blue | `#1e3a5f` | 链接、编号、等宽文字 |

### 2.2 字体

| 用途 | 字体 | 备注 |
|------|------|------|
| 大标题/Hero | `Fraunces` (Google Fonts) | 衬线，有图鉴标题的仪式感 |
| 正文/UI | `Inter` | 清晰易读 |
| 编号/标签/数据 | `Space Mono` | Pokédex 编号、BST、能力值 |
| 手写标注（可选） | `Caveat` | 用于"Sketched"、"Found today"等装饰性文字 |

### 2.3 纹理与图形

- **背景纹理：Linen（亚麻布交叉纹理 + 轻微噪点）**。在 Field Guide 原型中测试了 16 种背景（paper grain、clean、notebook lines、dot grid、aged、canvas、parchment、kraft、graph、photo、newsprint、watercolor 等），最终选择 **Linen**：低调、不抢眼、不刺眼，像一本用旧的布面笔记本，同时给页面提供轻微的质感参照。
- 卡片使用 2px 虚线边框或胶带贴纸效果。
- 类型徽章为手绘风格圆角徽章，带轻微旋转（±2deg）。
- 地区邮戳为圆形印章样式。
- 箭头、指南针、脚印等小图标点缀。

### 2.4 阴影与层级

- 卡片阴影：`0 12px 32px rgba(42, 32, 24, 0.08)`，柔和如纸张叠放。
- Hover 时卡片轻微上浮 `translateY(-3px)`，阴影加深。

---

## 3. 页面分区（首页 Hub）

### 3.1 Top Bar（固定导航）

- **Logo**：左侧，一个简化指南针/精灵球轮廓图标 + "PokéField Guide" 文字。
- **导航链接**：Types · Generations · Regions · Tools（锚点或实际页面）。
- **右侧**："My Journal"（已收藏数量角标）+ "Build Team" 按钮。
- 移动端：汉堡菜单，展开为全屏纸质感菜单。

### 3.2 Hero

**左栏（文案）：**

- Eyebrow："A fan-made field guide for trainers"
- H1："Discover your next **Pokémon**"（Pokémon 用 Forest 色高亮）
- 副标题："Open the guide and meet a random Pokémon — stats, type, ability, and region. Save your favorites, build a team, or challenge a friend."
- CTA 组：
  - 主按钮："Generate a Pokémon"（Forest 色，大按钮）
  - 次按钮："Browse by Type"（幽灵按钮）
- 信任标签（一行小字）：
  - "1,025 species"
  - "18 types"
  - "All 9 regions"
  - "Fan-made & free"

**右栏（Today's Find 卡片）：**

- 标题条："Today's Find" + 邮戳样式 "#NEW"
- 宝可梦 artwork 图片（475×475，通过 jsDelivr CDN 镜像的 PokéAPI official-artwork endpoint 获取，失败时 fallback 到 GitHub raw content）
- 名称：如 "Pikachu"
- 编号："#0025"
- 类型徽章：如 Electric
- 关键数据：Ability / Gen / Region / BST
- 底部动作条：
  - "Generate Again"（循环箭头）
  - "Add to Team"（加号）
  - "Save"（书签）
  - "Share"（链接）

### 3.3 Field Kit（快速入口）

标题："Your field kit"  
副标题："Pick a tool and start exploring."

6 个入口卡片（2×3 网格，移动端 2 列）：

| 图标 | 标题 | 描述 |
|------|------|------|
| 🎲 | Random Generator | One tap, one new Pokémon. |
| ✨ | Shiny Finder | Rare color forms, 1 in 4,096. |
| 🛡️ | Build a Team | Collect six for your next run. |
| 🗺️ | By Region | Kanto, Johto, Hoenn, and beyond. |
| 🧬 | Fusion Lab | Combine two into something new. |
| ❓ | Who's That? | Guess from sprite and clues. |

每张卡片有轻微手绘边框，hover 时像被"翻起一角"。

### 3.4 Browse by Category

标题："Browse the guide"  
副标题："Everything organized by how trainers actually use it."

三个分类卡片（桌面 3 列，移动端 1 列）：

1. **Generators**（Forest 绿）
   - "Roll by type, ability, move, BST, number, starter, or nature."
   - CTA: "See all generators"

2. **Play & Challenges**（Ochre 黄）
   - "Fusion, wheel spins, daily rolls, and shareable challenges."
   - CTA: "Start playing"

3. **Collect & Share**（Teak 棕）
   - "Save favorites, build a team, create a card, and share your finds."
   - CTA: "Open journal"

### 3.5 Featured Expeditions

标题："Featured expeditions"  
三个精选玩法卡片：

1. **Starter Pick**
   - "Let the guide choose your first partner."
   - CTA: "Pick a starter"

2. **Who's That?**
   - "Name hidden. Clues only. Can you guess?"
   - CTA: "Try a challenge"

3. **Spin the Wheel**
   - "Spin the regional wheel and see where it lands."
   - CTA: "Spin now"

### 3.6 Journal Strip

- 一条横向滚动的"最近发现"记录带。
- 显示最近生成/保存的 8–10 只宝可梦小缩略（sprite + 编号 + 名称）。
- 空状态时显示："No entries yet. Generate your first find!"
- 位置：Featured Expeditions 下方，Footer 上方。

### 3.7 Footer

- 四列链接：Generators / Play / Browse / About
- 联盟营销条（低风险文案）：
  > "Trainer's supplies we use: card binders · game guides · plush toys. As an Amazon Associate we earn from qualifying purchases."
- Disclaimer：
  > "PokeField Guide is a fan project. Not affiliated with Nintendo / Game Freak. Pokémon names, images, and artwork are trademarks of their respective owners. Artwork via PokéAPI."

---

## 4. 组件规范

### 4.1 主按钮（Primary Button）

```
background: #2d4a3e
color: #f6f1e7
border-radius: 10px
padding: 14px 24px
font-weight: 600
hover: background #22382f, translateY(-1px)
```

### 4.2 幽灵按钮（Ghost Button）

```
background: transparent
border: 1.5px solid #8b5a2b
color: #2a2018
border-radius: 10px
padding: 13px 22px
hover: border-color #2d4a3e, color #2d4a3e
```

### 4.3 类型徽章（Type Badge）

```
font-family: Inter
font-size: 12px
font-weight: 700
text-transform: capitalize
padding: 5px 12px
border-radius: 999px
background: [type color]
color: #fff
box-shadow: inset 0 1px 0 rgba(255,255,255,.25)
transform: rotate(-1deg) // 手绘感
```

### 4.4 宝可梦发现卡（Pokémon Find Card）

```
background: #f6f1e7
border: 2px dashed #d4c4a8
border-radius: 20px
padding: 24px
box-shadow: 0 12px 32px rgba(42,32,24,.08)
内部结构：标题条 / Artwork（475×475） / 名称 / 编号 / 类型 / 数据网格 / 动作条
```

### 4.5 动作条（Action Bar）

固定在卡片底部，4 个等宽按钮：
- Generate Again
- Add to Team
- Save
- Share

按钮用图标 + 文字（移动端仅图标）。

---

## 5. 核心交互流程

### 5.1 首次进入

1. 页面加载，Hero 右栏自动展示一只随机宝可梦（Today's Find）。
2. 用户看到完整数据：名称、编号、类型、能力、世代、地区、BST。
3. 用户可选择：
   - 点击 "Generate Again" → 卡片翻页动画，加载新宝可梦。
   - 点击 "Add to Team" → 宝可梦加入本地队伍，按钮状态变为"In Team"。
   - 点击 "Save" → 加入 Journal Strip。
   - 点击 "Share" → 复制带 `?p=pikachu` 参数的链接。

### 5.2 生成后动作链

所有生成结果统一提供 4 个动作，降低决策成本：

| 动作 | 功能 | 本地状态 |
|------|------|----------|
| Generate Again | 重新随机生成 | 无需状态 |
| Add to Team | 加入 6 人队伍 | LocalStorage |
| Save | 收藏到 Journal | LocalStorage |
| Share | 复制当前 URL | 无 |

### 5.3 本地数据

原型阶段仅使用 LocalStorage：
- `poke-team`: 队伍数组（最多 6 个）
- `poke-journal`: 日志数组（最多 50 个最近记录）

---

## 6. 移动端适配

- Hero：左右栏垂直堆叠，Today's Find 卡片在文案下方。
- Field Kit：2 列网格，图标与文字上下排列。
- Browse by Category：单列卡片。
- Featured Expeditions：单列卡片。
- Journal Strip：横向滚动，每张小卡片固定 72px 宽。
- 导航：汉堡菜单，展开为全屏菜单，链接大号显示。
- 动作条：卡片底部固定，按钮仅显示图标以节省空间。

---

## 7. 版权与合规

### 7.1 允许使用

- 宝可梦名称、编号、类型、能力、招式、种族值、世代、地区
- 第三方托管的官方 artwork 图片（原型当前采用，需持续评估风险）
- 原创 UI、图标、布局、文案

### 7.2 禁止出现

- 直接声称官方授权或官方合作的文案
- Pokémon Logo
- 宝可梦卡牌图片
- 游戏截图
- "Official"、"Nintendo-approved" 等暗示官方关联的文案

> **注意**：原型早期方案禁止 official artwork，后经决策改为使用 PokéAPI 的 official-artwork endpoint。此做法提升了视觉质量，但也提升了 IP 合规风险，正式上线前需重新评估。

### 7.3 必须声明

页面 Footer 必须包含：

> "PokeField Guide is a fan project. Not affiliated with Nintendo / Game Freak. Pokémon names, images, and artwork are trademarks of their respective owners. Artwork via PokéAPI."

### 7.4 联盟营销低风险做法

- 推荐通用训练师用品（card binders, game guides, plush toys）。
- 不使用 Pokémon Logo 作为按钮素材。
- 文案写 "we recommend"，不写 "official"。

---

## 8. 原型交付

- **文件位置：** `prototypes/home-field-guide.html`
- **形式：** 独立 HTML 文件，内嵌 CSS 与 JavaScript，可直接用浏览器打开。
- **数据源：** 静态示例数据 + poketools.com 的 artwork 图片（原型阶段直接引用网络图片）。
- **交互范围：** Generate Again、Add to Team、Save、Share 使用 LocalStorage 或控制台模拟。

---

## 9. 待确认事项

1. 是否需要原型中接入真实 PokéAPI 调用，还是使用模拟数据？
2. "Who's That?" / Challenge 等玩法在首页是否只放入口，还是做轻量演示？
3. 是否需要暗黑模式切换？（当前 Field Guide 为暖色纸质主题）
