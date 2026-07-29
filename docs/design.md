# PokeTools 设计规范（design.md）

> 提取自 https://www.poketools.com/（2026-07 抓取，含首页、Damage Calculator 工具页与实际 CSS 令牌）
> 站点性质：面向竞技玩家的宝可梦工具箱（Gen 1–9），含伤害计算、队伍构建、属性克制、EV 优化等 79 个工具 / 14 个分类。

---

## 1. 技术栈

| 项 | 说明 |
|---|---|
| 框架 | Next.js（Turbopack，`/_next/static/chunks/`） |
| 样式 | Tailwind CSS v4 + 少量自定义组件类 + CSS 变量设计令牌 |
| 字体 | Google Fonts：Outfit / Sora / Space Mono |
| 主题机制 | `<html data-mode="dark|light" data-skin="versus|pokedex">` 双维度切换（2 皮肤 × 明暗 = 4 套配色） |
| 数据 | PokeAPI、Pokémon Showdown（@smogon/calc 伤害引擎）、Smogon |

---

## 2. 设计令牌（Design Tokens）

### 2.1 全局基础（`:root`）

```css
--accent:      #ee3b3b;   /* 主品牌红（精灵球红） */
--accent-2:    #ff7a3c;   /* 辅助橙（渐变/次级强调） */
--accent-ink:  #fff;      /* 强调色上的文字 */
--font:    "Outfit", system-ui, sans-serif;   /* 正文 */
--display: "Sora", "Outfit", sans-serif;      /* 标题 */
--mono:    "Space Mono", ui-monospace, monospace; /* 数据/代码 */
--r-sm: 8px;  --r-md: 12px;  --r-lg: 18px;  --r-xl: 26px;  /* 圆角 */
--maxw: 1240px;                              /* 内容最大宽度 */
```

### 2.2 主题配色（4 套）

**默认皮肤 `versus`（竞技风，深蓝底）**

| 令牌 | Dark（默认） | Light |
|---|---|---|
| `--bg` | `#0c0f1a` | `#f4f6fb` |
| `--surface` / `--card` | `#141a2b` | `#ffffff` |
| `--surface-2` / `--chip-bg` | `#1b2236` | `#f1f4fb` |
| `--border` | `#26304a` | `#e4e8f1` |
| `--border-soft` | `#1d2336` | `#eef1f7` |
| `--text` | `#eef2fb` | `#16203a` |
| `--text-dim` | `#aab3cc` | `#56627e` |
| `--text-faint` | `#6b7595` | `#93a0bb` |
| `--header-bg` | `#0b0e18d1`（半透明毛玻璃） | `#ffffffd9` |
| `--shadow` | `0 18px 40px -22px #000c` | `0 20px 44px -26px #1e2c5a52` |

**皮肤 `pokedex`（图鉴风，暖纸感）**

| 令牌 | Dark（暖棕黑） | Light（奶油纸） |
|---|---|---|
| `--bg` | `#160f10` | `#f0e9e2` |
| `--surface` / `--card` | `#20171a` | `#fffdfb` |
| `--border` | `#3b2a2d` | `#e2d2c6` |
| `--text` | `#f6ece9` | `#2a2018` |
| `--text-dim` | `#c6a9a6` | `#6c5a4c` |
| `--text-faint` | `#8a6f6d` | `#a9968a` |
| 差异点 | 圆角更大（r-sm 12 / r-md 18 / r-lg 28 / r-xl 40px），按钮用硬投影 `0 5px 0` 营造按压感 | 同左 |

**背景渐变**（`--bg-grad`，顶角径向光晕 + 纵向线性渐变叠加）：
```css
/* versus dark 示例 */
radial-gradient(1200px 700px at 78% -8%, #1a2236 0%, transparent 55%),
linear-gradient(180deg, #0b0e18, #0c0f1a);
```

### 2.3 辅助语义色

- Tailwind 标准调色板（oklch）：red/orange/amber/yellow/green/emerald/cyan/blue/purple/gray。
- 属性徽章（Type chips）：沿用宝可梦官方属性色，如 Fire 橙 `#f97316` 系、Water 蓝 `#3b82f6` 系、Flying 紫 `#a78bfa` 系，圆角小胶囊带图标。
- 状态色：HP 条绿色渐变，伤害占比红→橙渐变，KO 提示琥珀色底 banner，"LIVE" 指示绿色圆点。
- 分类色 `--cc`：每张分类卡片有独立主题色（Cobblemon 绿、Pokopia 珊瑚红、Battle 红、Search 蓝、Playthrough 青、Evolution 紫、Breeding 粉、Contest 橙、Item 金、Trackers 黄……），用于图标块、hover 描边与投影。

---

## 3. 字体排印（Typography）

| 用途 | 字体 | 规格 |
|---|---|---|
| Hero 大标题 | Sora 800 | `clamp(44px, 6.4vw, 82px)`，行高 0.98，`letter-spacing: -2.5px`（移动端 `clamp(34px,11vw,46px)` / -1.5px） |
| 区块标题（H2） | Sora 700–800 | 约 32–40px，负字距 |
| 卡片标题 | Sora 700 | 17px，`letter-spacing: -0.4px` |
| 正文 / 副文案 | Outfit 400–500 | Hero lead `clamp(17px,1.5vw,20px)`，卡片描述 13px / 行高 1.42 |
| 小标签 eyebrow | Outfit 700 | 13px，全大写，`letter-spacing: 1.4px`，前置 22×2px 红色短横线 |
| 数据 / GEN 标签 | Space Mono | 11px，`letter-spacing: 0.3px` |
| 品牌字标 | Sora 800 | 21px，"Poke" 红色 + "Tools" 前景色 |

选中态：`::selection { background: var(--accent) }`。

---

## 4. 布局

- 内容容器最大宽 **1240px**，水平居中。
- **首页结构**（自上而下）：
  1. 顶部导航（sticky，半透明背景 + 模糊）
  2. Hero：左右双栏网格（`1.05fr / .95fr`，间距 30px）。左侧 eyebrow + 超大标题（关键词"Pokémon"用品牌红）+ 副文案 + 双 CTA；右侧悬浮宝可梦立绘舞台（皮卡丘居中，喷火龙/超梦/路卡利欧/烈咬陆鲨环绕），背景有巨型精灵球线稿（opacity 0.14）与 640px 双环圆环装饰（`hero-ring`，右侧 -6% 溢出）。
  3. "Competitive Meta Hub" 功能横幅卡（NEW 徽章 + 图 + 3 个 pill 按钮 + 右侧"All formats"）
  4. "LIVE · Gen 9 OU ladder" 使用率榜单条（5 个名次卡，含使用率%与进度条）
  5. "Jump straight in" 常用工具 6 卡网格（3 列）
  6. "Browse by category" 14 分类卡网格（4 列）
  7. 页脚
- **工具内页结构**：面包屑 → eyebrow + 大标题 + 一句话描述 → 模式 pill 切换（1v1 / vs Team / Gen 9 / Doubles）→ 三栏工作区（Attacker 面板 / Damage Result 结果面板 / Defender 面板）→ 下方 SEO 长文说明。
- **页脚**：免责声明（粉丝项目，与任天堂/Game Freak 无关）+ About/Credits/Privacy/Contact + 数据来源 + 姊妹站链接矩阵（6 列）。

---

## 5. 组件规范

### 按钮
```css
.btn-primary { background: var(--accent); color: var(--accent-ink);
               box-shadow: 0 10px 24px -12px var(--accent); }
.btn-primary:hover { filter: brightness(1.05); transform: translateY(-1px); }
.btn-ghost { background: var(--surface); border: 1px solid var(--border); }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }
```
- 圆角约 12px（pokedex 皮肤下更大并带硬投影）。
- 次级 pill 按钮：半透明 chip 底 + 圆角 999px。

### 「Browse by category」分类网格（`.cat-grid` / `.cat-card`）——首页第 6 屏

**区块头部（`.sec-head`）**：eyebrow「THE FULL LIBRARY」+ H2「Browse by category」+ 副文案「79 tools across 14 categories — pick a lane.」，右端一枚 ghost pill「All tools →」。

```css
.sec-head      { display:flex; justify-content:space-between; align-items:flex-end;
                 gap:20px; margin-bottom:30px; }
.sec-head h2   { font-family:var(--display); font-weight:800;
                 font-size:clamp(26px,3vw,38px); letter-spacing:-1px; }
.sec-head p    { color:var(--text-dim); font-size:16px; margin:6px 0 0; }
/* 移动端：纵向排列，h2 缩至 clamp(24px,7vw,30px) */
```

**网格**：`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`，`gap: 16px`（桌面 4 列）；移动端单列，卡片 min-height 158px → 142px。

**分类卡（`.cat-card`）**：纵向 flex 布局，圆角 `--r-lg`(18px)，右上角有以分类色 `--cc` 绘制的径向光晕背景（叠加在 `--card` 底色上，`color-mix` 兑至 14% 透明度），`overflow: hidden`。

```css
.cat-card        { --cc:var(--accent); position:relative; overflow:hidden; cursor:pointer;
                   border:1px solid var(--border); border-radius:var(--r-lg);
                   background:radial-gradient(120% 90% at 100% 0%,
                     color-mix(in srgb,var(--cc) 14%,transparent), transparent 58%),
                     var(--card);
                   display:flex; flex-direction:column; gap:9px;
                   min-height:158px; padding:18px 18px 16px;
                   transition:transform .2s cubic-bezier(.2,.8,.2,1), border-color .2s, box-shadow .2s; }
.cat-card:hover  { transform:translateY(-4px);
                   border-color:color-mix(in srgb,var(--cc) 55%,var(--border));
                   box-shadow:0 22px 44px -26px var(--cc); }
```

**卡片内部结构**（自上而下）：

```css
.cc-top     { display:flex; align-items:center; gap:11px; }            /* 图标 + 标题行 */
.cc-em      { width:40px; height:40px; border-radius:var(--r-md);       /* 分类色图标块 */
              background:var(--cc); color:#fff; display:grid; place-items:center;
              box-shadow:0 8px 18px -8px var(--cc); }                   /* 图标带同色系投影 */
h4          { font-family:var(--display); font-size:18px; font-weight:800; letter-spacing:-.4px; }
.cc-count   { font-family:var(--mono); font-size:11px; font-weight:700; /* "15 tools" 计数 */
              letter-spacing:.5px; color:var(--cc); }                   /* 用分类色，非灰色 */
p           { font-size:13px; line-height:1.42; color:var(--text-dim);
              max-width:19ch; text-wrap:pretty; }                       /* 一句话描述 */
.cc-go      { margin-top:auto; font-size:12.5px; font-weight:700;       /* "Explore →" 沉底 */
              color:var(--cc); display:inline-flex; gap:6px; }
.cc-mon     { position:absolute; right:-14px; bottom:-16px; width:96px; height:96px;
              object-fit:contain; opacity:.9; z-index:-1;               /* 右下角探出的宝可梦立绘 */
              filter:drop-shadow(0 6px 10px #0000004d); transition:transform .25s; }
.cat-card:hover .cc-mon { transform:scale(1.08) translateY(-3px); }     /* hover 时立绘探出放大 */
```

**14 个分类及其专属色 `--cc`**（图标块、计数、Explore 链接、hover 描边/投影/光晕全部吃这个变量）：

| 分类 | `--cc` | 工具数 | 卡片立绘 |
|---|---|---|---|
| Cobblemon Tools | `#63bc5a` 草绿 | 15 | 伊布 |
| Pokopia Tools | `#fa7179` 珊瑚红 | 4 | 胖丁 |
| Battle Tools | `#ee4b3b` 品牌红 | 13 | 烈咬陆鲨 |
| Search & Discovery | `#2f7df6` 蓝 | 8 | 皮卡丘 |
| Playthrough Tools | `#14b8c4` 青 | 8 | 妙蛙种子 |
| Evolution Tools | `#a25be0` 紫 | 4 | 喷火龙 |
| Breeding Tools | `#ec8fe6` 粉 | 4 | 仙子伊布 |
| Contest Tools | `#ff9d55` 橙 | 3 | 九尾 |
| Item Tools | `#c7b78b` 金卡其 | 4 | 班基拉斯 |
| Location Tools | `#34b3a0` 绿松石 | 2 | 水箭龟 |
| Stat & Data Tools | `#34b36a` 翠绿 | 6 | 太阳伊布 |
| Trackers | `#f7d23c` 明黄 | 3 | 卡比兽 |
| Draft & Meta | `#5269ac` 靛蓝 | 1 | 巨金怪 |
| Fun & Games | `#ab6ac8` 兰紫 | 4 | 耿鬼 |

> 注：同一套分类色也复用在「Jump straight in」工具卡的 eyebrow 标签与「Open」按钮上（如 Damage Calculator 红、Pokédex 蓝、Catch Rate 青、Comparison 绿、Living Dex 黄）。

### 工具卡 / 分类卡（`.tool-card` / `.browse-card`）
```css
.tool-card   { background: var(--card); border: 1px solid var(--border);
               border-radius: 26px; box-shadow: var(--shadow); }
.browse-card { display: grid; grid-template-columns: 124px 1fr; /* 左侧插画区 + 右侧内容 */
               border-radius: var(--r-lg); overflow: hidden;
               transition: transform .2s cubic-bezier(.2,.8,.2,1); }
.browse-card:hover { transform: translateY(-4px);
               border-color: color-mix(in srgb, var(--cc) 55%, var(--border));
               box-shadow: 0 22px 44px -26px var(--cc); }
```
- 卡片内结构：左侧带分类色光晕的小插画/图标区；右侧 eyebrow 分类标签（含彩色圆点）→ 标题 → 描述 → 底部 `GEN 1-9` 等宽字体标签 + `Open →` 圆形描边按钮（hover 时填充为分类色）。

### 导航
- 左侧品牌（精灵球 SVG + 双色字标）；中间分类下拉链接（Meta 为琥珀色高亮带星标）；右侧主题切换按钮（太阳/月亮图标）+ 红色 "All Tools" 主按钮。
- 链接 14px/500，`padding: 8px 9px`，hover 出 chip 底色，当前项 `--accent` 红色。

### 表单（工具页）
- 输入框/下拉：`--surface-2` 底、`--border` 描边、圆角 12px；label 全大写小号 dim 色。
- EV/IV 表格：等宽数字列，红/绿标注增减（Atk 红、Def 绿）。
- 结果区：超大等宽百分比数字（如 `17.7–21.0%`）+ 渐变伤害条 + Showdown 风格文本串 + "HP After Each Hit" 连击条列表 + 速度对比行。

### 其他
- **徽章**：`badge-new`（红 ★ NEW，大写 12px）、属性胶囊、"LIVE" 绿点。
- **阴影**：卡片柔和大半径低透明阴影；悬浮元素 `drop-shadow(0 24px 30px #00000052)`。
- **分割线**：区块间 `border-top` 1px `--border-soft`。

---

## 6. 视觉风格与动效

- **整体气质**：深色电竞/数据仪表盘风（"versus"），大面积近黑蓝底 + 高饱和精灵球红点缀；备用"pokedex"皮肤则偏复古掌机图鉴的暖纸质感与粗圆角硬投影。
- **图形语言**：精灵球线稿、同心圆环、宝可梦官方立绘悬浮摆放、分类色径向光晕。
- **动效**：
  - 卡片 hover：上移 4px + 分类色描边/投影，`cubic-bezier(.2,.8,.2,1)` 0.2s。
  - 按钮 hover：微上移 + 提亮。
  - Hero 立绘带浮动动画与投影。
- **插画**：全部使用宝可梦官方立绘 PNG，配合 `object-fit: contain` 与 drop-shadow 悬浮感。

## 7. 响应式

- 移动端 Hero 改单列，标题缩至 `clamp(34px,11vw,46px)`，CTA 纵向铺满；舞台高度 460px → 240px；精灵球装饰 340px → 240px。
- 卡片网格 4 列 → 2 列 → 1 列；`.browse-card` 插画列宽 124px → 100/88px 逐级收窄。
- 导航移动端折叠为汉堡/大触控链接（16px，padding 13×14）。

## 8. 无障碍与细节

- 正文与背景对比度充足（暗底 `#0c0f1a` vs `#eef2fb`；亮底 `#f4f6fb` vs `#16203a`）。
- `text-wrap: pretty` 用于副文案防孤词；交互元素均有 hover/focus 态；主题切换即时无闪烁（SSR 输出 data 属性）。
