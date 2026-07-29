# Random Pokémon Generator — 设计需求文档

> 来源：ChatGPT 共享对话「随机宝可梦生成器分析」（关键词搜索意图分析 + IP 风险 + 竞争 + 宝可梦知识背景）
> 整理日期：2026-07-27
> 适用范围：英文出海 SEO 工具站（程序化 SEO + 工具矩阵）

---

## 1. 产品定位（Product Positioning）

| 维度 | 需求要点 |
|---|---|
| 产品形态 | **Random Pokémon Generator Hub**（工具矩阵 / 工具站），不是单页工具，也不是资讯站 |
| 搜索意图 | 工具型（Tool Intent）+ 娱乐互动型（Interactive Intent），用户想"直接使用"，不是看文章 |
| 目标市场 | 英文出海（Google SEO） |
| 核心策略 | 用长尾关键词树覆盖需求，而非只抢核心词 `random pokemon generator` |
| 竞争差异化 | 竞品 UX 普遍差（生成一次后"然后呢？"缺失），**靠玩法/体验设计取胜** |
| 资产定位 | 作为"流量入口项目"，而非最终商业资产（长期应过渡到原创 Monster Generator） |

---

## 2. 功能需求清单（Feature Requirements）

按关键词映射为功能模块，标注每个功能的**输出内容**与**交互形态**：

### 2.1 核心随机生成
- **Random Pokémon Generator（主工具）**
  - 输出：随机宝可梦名称、类型、属性、图片、能力值
  - 入口流量最大（⭐⭐⭐⭐⭐）

### 2.2 AI 生成类
- **Random Pokémon Generator AI**
  - AI 创造全新宝可梦设定：外观、属性、技能、背景故事
  - 创意生成需求（⭐⭐⭐⭐⭐）

### 2.3 游戏/挑战类（高互动）
- **No Names / Without Names**：隐藏名称，仅展示图片/属性/类型，用于"猜宝可梦"挑战
- **Wheel（转盘）**：幸运转盘形式随机选择
- **Starter Generator**：随机决定初始御三家
- **Fusion Generator**：融合两个宝可梦生成新形态（搞笑/创作/分享，高互动）

### 2.4 属性/机制生成类
- **Type Generator / Element Generator**：随机生成属性类型（18 种之一）
- **Ability Generator**：随机生成特性（如 Static、Blaze）
- **Move Generator**：随机生成招式
- **BST Generator**：随机生成种族值总和（Base Stat Total）
- **Number Generator**：随机生成 Pokédex 编号

### 2.5 原创/角色设计类
- **Card Generator**：随机生成卡牌（HP、技能、攻击力、卡面设计）
- **Character Generator**：随机角色（宝可梦/训练师/原创角色）
- **Nickname Generator**：随机昵称/训练师命名

### 2.6 世代 / 地区筛选类
- **Gen 1–9 / Kanto / Johto / Hoenn / Sinnoh / Unova / Kalos / Alola / Galar / Paldea** 筛选
- 特定游戏池：**Legends Z-A**、**Pokémon Violet**
- 示例：`random kanto pokemon generator` = 随机第一地区宝可梦

### 2.7 稀有玩法类
- **Shiny Generator**：闪光宝可梦（稀有颜色形态，概率 ~1/4096）
- **Mega Generator**：超级进化形态
- **Mythical Generator**：幻之宝可梦（Mew、Celebi…）
- **Cute Generator**：筛选可爱风格宝可梦
- **Starter 1–9**：随机第 1–9 世代御三家

---

## 3. 信息架构 / URL 规划（Information Architecture）

### 3.1 建议 Hub 结构（一级 + 二级）
```
首页  /random-pokemon-generator                (主工具)
  ├─ /random-pokemon-generator-ai              (AI 原创)
  ├─ /random-pokemon-fusion-generator          (融合)
  ├─ /random-pokemon-type-generator            (属性)
  ├─ /random-starter-pokemon-generator         (御三家)
  ├─ /random-shiny-pokemon-generator           (闪光)
  ├─ /random-pokemon-generator-by-region       (地区筛选)
  └─ /random-pokemon-generator-no-names        (猜宝可梦模式)
```

### 3.2 更完整的工具矩阵（三级长尾）
- Random Team Generator（队伍）
- Starter Generator
- Fusion Generator
- Shiny Generator
- Pokemon Card Generator
- Pokemon Challenge Generator

### 3.3 长期过渡方向（降低 IP 依赖）
```
Pokemon Generator
      ↓
AI Creature Generator → Monster / Dragon / Fantasy Creature / Anime Creature Generator
```
理由：Pokémon 带流量，原创生成带资产与商业价值。

### 3.4 程序化 SEO 要求
- 数据驱动、页面模板化、批量生成落地页
- MVP 目标约 **50 个 SEO 页面**（覆盖核心词 + 长尾词树）

---

## 4. 数据模型（Pokémon Data Model）

每个宝可梦对象需包含以下字段（来自对话中的"宝可梦知识背景"）：

| 字段 | 说明 | 必要性 |
|---|---|---|
| `name` | 名称（如 Pikachu） | 必须 |
| `pokedex_number` | 编号（#001…#025…），**必须展示**，玩家看重 | 必须 |
| `type` | 1–2 种属性（18 种） | 必须 |
| `ability` | 特性 | 必须 |
| `moves` | 招式列表 | 必须 |
| `base_stats` | 六项：HP / Attack / Defense / Sp.Atk / Sp.Def / Speed | 必须 |
| `bst` | 种族值总和（六项加总） | 必须（有专门关键词） |
| `generation` | 世代 Gen 1–9 | 必须 |
| `region` | 地区（Kanto…Paldea） | 必须 |
| `evolution` | 进化路线 | 可选 |
| `shiny` | 闪光形态 | 可选（有专门功能） |
| `rarity` | Legendary / Mythical / 普通 | 可选 |
| `starter` | 是否御三家 | 可选 |
| `sprite` | 小尺寸图片链接 | 核心（见版权约束） |

### 4.1 世代—地区映射表（筛选功能必需）
| 世代 | 游戏 | 地区 |
|---|---|---|
| Gen 1 | Red/Blue | Kanto |
| Gen 2 | Gold/Silver | Johto |
| Gen 3 | Ruby/Sapphire | Hoenn |
| Gen 4 | Diamond/Pearl | Sinnoh |
| Gen 5 | Black/White | Unova |
| Gen 6 | X/Y | Kalos |
| Gen 7 | Sun/Moon | Alola |
| Gen 8 | Sword/Shield | Galar |
| Gen 9 | Scarlet/Violet | Paldea |

### 4.2 18 种属性（Type）
Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, Fairy

### 4.3 关键术语（UI 文案必须准确）
Pokémon=宝可梦 / Trainer=训练家 / Pokédex=图鉴 / Generation=世代 / Region=地区 / Type=属性 / Ability=特性 / Move=招式 / Evolution=进化 / Starter=初始宝可梦 / Legendary=传说 / Mythical=幻之 / Shiny=闪光 / Stats=能力值 / BST=种族值总和 / Team=队伍

---

## 5. 技术需求（Technical Requirements）

| 项 | 需求 |
|---|---|
| 数据源 | **PokéAPI（首选）**：提供 name / id / type / ability / moves / sprites |
| 后端/框架 | Next.js（MVP 建议） |
| 样式 | Tailwind CSS |
| 图片方案 | 官方 Sprite（小尺寸），通过 PokéAPI 链接展示 |
| 页面规模 | 模板化生成约 50 个 SEO 落地页 |
| MVP 工期 | 1 周以内 |
| 必备展示字段 | Name / Type / Ability / Stats / Generation / Small Sprite / Pokédex Number |

**示例数据结构（PokéAPI）：**
```json
{
  "name": "pikachu",
  "types": ["electric"],
  "sprites": { "front_default": "..." }
}
```

---

## 6. 交互 / UX 设计要求（Interaction & UX — 关键差异化）

> 对话核心观点：竞品只做到"生成一次就结束"，**真正的机会在用户体验差距**。

### 6.1 必须的补全动作（生成之后"然后呢？"）
- **Generate Again**（再生成）
- **Build Team**（收藏/组队）
- **Create Challenge**（创建挑战）
- **Share**（分享）
- **Favorites / 收藏**
- **Gamification**（游戏化）

### 6.2 建议的欢迎/结果流（文案风格）
```
Welcome Trainer!

Your random Pokémon is...
✨ Eevee

Type:    Normal
Ability: Adaptability
Generation: Gen 1

[Generate Again]  [Build Team]  [Create Challenge]
```

### 6.3 特殊交互模式
- **猜宝可梦模式**（No Names）：只显示图片/属性/类型，隐藏名称
- **转盘模式**（Wheel）：旋转抽奖式选择
- **融合模式**（Fusion）：选两个宝可梦 → 生成新形态
- **地区/世代筛选**：下拉或标签过滤

### 6.4 用户心理
不要做成"随机数据库查询"，要模拟："如果我是训练家，我会遇到什么？"
→ 强调沉浸感、收集感、挑战感。

---

## 7. 版权与合规约束（IP / Compliance — 硬性设计约束）

> 这是"最大风险点之一"，必须在设计阶段就约束素材使用。

### 7.1 素材风险等级
| 素材 | 是否需要 | 风险 |
|---|---|---|
| 宝可梦名称 | 必须 | 低 |
| 编号 | 必须 | 低 |
| 属性 Type | 必须 | 低 |
| 能力 Ability | 必须 | 中低 |
| 图片 Sprite/Artwork | 核心 | **高** |
| 官方描述 | 可选 | 高 |
| 卡牌图片 | 可选 | 很高 |
| AI 生成图片 | 可选 | 中 |

### 7.2 禁止项（设计上不得出现）
- ❌ Pokémon Logo
- ❌ 宝可梦卡牌图片
- ❌ 游戏截图
- ❌ 冒充官方（"Official Pokemon Generator" / "Pokemon AI Creator Official"）

> **决策更新**：原型阶段已决定**采用** PokéAPI 的 `official-artwork` endpoint（475×475 官方高清插画，经 jsDelivr / GitHub raw 镜像获取，失败时 fallback）。该做法提升视觉质量，但也提升 IP 合规风险，正式上线前需重新评估。详见 `docs/superpowers/specs/2026-07-28-home-hub-field-guide-design.md`。

### 7.3 必要声明文案（站点必须包含）
```
This is a fan-made tool.
Not affiliated with Nintendo or The Pokémon Company.
```

### 7.4 推荐安全做法
- 展示数据 + 官方 artwork（475×475），图片经第三方 CDN 镜像获取并带 fallback
- Footer 必须含声明："PokeField Guide is a fan project. Not affiliated with Nintendo / Game Freak. Pokémon names, images, and artwork are trademarks of their respective owners. Artwork via PokéAPI."
- 若用 AI 图片：生成"受闪电启发的可爱电击鼠生物"，**不要生成 Pikachu 克隆**
- 定位为 "Fan-made tool"，明确非官方、非冒充、非大量商业化

### 7.5 商业化风险参考
- 个人免费工具：⭐⭐
- SEO + 广告盈利（Adsense）：⭐⭐⭐⭐（已商业化，任天堂 IP 管理严格）
- 卖会员/付费功能：⭐⭐⭐⭐⭐

---

## 8. 分阶段路线图（Roadmap）

| 阶段 | 范围 | 关键约束 |
|---|---|---|
| **Phase 1（低风险）** | PokéAPI 数据 + 展示 Name/Type/Ability/Stats/Generation/Small Sprite | 不放高清官方图 |
| **Phase 2** | 增加 AI 功能：Create your own fantasy monster | 避免直接生成宝可梦 |
| **Phase 3** | 建立 Monster Generator（Creature/Dragon/Fantasy/Anime） | 沉淀自有 IP |

---

## 9. 目标用户画像（Target Users）

- **80% 为娱乐探索用户**，不是硬核对战玩家
- **不需要**的功能（避免过度设计）：对战 Meta、EV 训练、IV 个体值、努力值计算、双打规则、VGC 赛事
- 知识需求配比参考：宝可梦百科 20% + 游戏玩法 30% + SEO 用户需求 50%
- 真正决定成败的是**玩法设计**，不是数据本身

---

## 10. 价值评估（供决策参考）

| 维度 | 评分 |
|---|---|
| 搜索需求 | 9/10 |
| SEO 机会 | 7/10 |
| 竞争强度 | 6/10（中高） |
| 开发难度 | 10/10（极易） |
| 长期价值 | 6/10 |
| 测试验证价值 | 9/10 |

**结论**：非蓝海，但适合作为"小成本验证项目"；建议做工具矩阵 + 长尾词获取流量，定位为流量入口而非最终资产。

---

## 11. 变现策略与 IP 风险细化（Monetization）

> 说明：本章根据后续讨论补充。核心结论——宝可梦 IP 上的直接变现既弱又有风险，**真正可放心放大的是自有 IP（Monster Generator）那一层**。

### 11.1 变现路径按风险/价值排序
| 路径 | 风险 | 价值 | 备注 |
|---|---|---|---|
| **Monster Generator（自有 IP 订阅/周边）** | 低 | ⭐⭐⭐⭐⭐ | 原创生物，可放心收费，是资产层 |
| **联盟营销（Affiliate）** | ⭐⭐⭐⭐（同广告档） | ⭐⭐⭐⭐ | 契合受众（粉丝买卡牌/游戏），但属"用任天堂 IP 商业化" |
| **展示广告（AdSense）** | ⭐⭐⭐⭐ | ⭐⭐ | 用户商业意图低，RPM 一般；自动化投放，创意风险小 |
| **付费会员 / 卖宝可梦素材** | ⭐⭐⭐⭐⭐ | — | 明显商业利用，最危险，不建议 |
| **站点翻转（Flip）** | 中 | ⭐⭐⭐ | 程序化 SEO 站是 Flippa/Acquire 硬通货，适合验证后退出 |
| **工具矩阵组合** | 中 | ⭐⭐⭐⭐ | 同模板批量生成（龙/奇幻生物/动漫角色），摊薄单站风险 |

### 11.2 联盟营销的 IP 风险澄清（重要修正）
联盟营销**不是无风险**。风险来源不是"做联盟"这个动作，而是"在谁的 IP 上、用什么素材变现"：
- **商业化信号本身升级风险**：个人免费工具 ⭐⭐；一旦用宝可梦流量赚钱（广告或联盟），落到商业化档 ⭐⭐⭐⭐。联盟与广告同档，并不会因换形式自动变安全。
- **比广告多出的坑 = 商标（Trademark）**：广告创意由平台托管，联盟需自己写文案/放按钮，易踩红线——尤其是使用 **Pokémon Logo**、写"购买官方宝可梦卡牌"、暗示官方合作（商标淡化/虚假关联）。
- **底层素材灰度不变**：站上展示名称/小图仍在"非官方、非冒充"灰色区，联盟只是给灰度加了变现。

**低风险做法（"相对稳"的真条件）：**
- 用宝可梦**名称/数据**做编辑性文字推荐（事实信息，低风险）；
- 链接到零售商**品类页**（如"TCG 卡牌收纳"），**不使用官方 Logo**；
- 文案写成"我们推荐的卡牌收纳/游戏周边"，不冒充官方；
- 保留 fan-made 声明（"Not affiliated with Nintendo"）。

**高危做法（禁止）：** 在"立即购买"按钮放 Pokémon Logo；暗示与任天堂关联；用宝可梦角色图当联盟广告素材。

### 11.3 推荐落地顺序
1. **MVP 阶段**：免费工具 + 轻量联盟链接（卡牌/游戏，通用文案、无 Logo），先跑通流量。
2. **有量之后**：加 AI 原创怪物生成（Monster Generator），独立品牌/子站，做订阅制（$5–9/月），与宝可梦内容做清晰隔离。
3. **长期**：做成原创 Monster Generator 矩阵，或整体 Flip 退出。

### 11.4 流量—资产关系
```
Pokémon Generator（免费、SEO 引流、养站，灰色区）
        ↓ 导流
Monster Generator（自有 IP，可付费/周边/沉淀）
        ↓ 变现
订阅 / 联盟 / 周边 / 翻转
```
核心逻辑：**Pokemon 带流量，原创生成带资产。** 只做宝可梦天花板是薄广告收入 + 随时被 takedown 的风险；用宝可梦聚人，在自有原创内容上收费，才是可放大模型。

---

## 附：待确认 / 未覆盖的设计问题
1. 视觉风格 / 配色方案（对话未定义，需后续 UI 设计）
2. 移动端适配要求（工具站通常移动流量高，需明确）
3. 多语言（仅英文？还是后续扩展）
4. 账号系统（Build Team / Favorites 是否需要登录）
5. 广告位规划（若走 Adsense 变现）
