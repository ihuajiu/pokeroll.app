# Showdown 导出功能 — 设计文档

日期：2026-08-06
状态：待评审

## 1. 背景与目标

PokeRoll 是随机宝可梦工具站。随机/推荐/对战产生的结果目前只能停留在站内，无法直接用于实战。
本功能把结果导出成 **Pokémon Showdown 标准文本格式**（纯文本），用户一键复制即可粘贴到
Showdown Teambuilder 使用。这是从"随机娱乐"到"可落地使用"的关键桥梁。

目标：
- 任意单只宝可梦卡片可一键复制 Showdown set
- 队伍场景可一键复制整队（6 只）
- 导出的配置"能用"：招式本系优先 + 完整智能选招、道具按特性/种族/招式推荐、性格与努力值协调

## 2. 范围

- **单只导出**：所有 HeroCard 卡片（随机生成器、组队、冒险、收藏等所有展示卡）
- **整队导出**：`/team/random`、`/team/coach`、`/team/challenge` 三个结果页
- Level：默认 100，导出界面可切换 50 / 100

## 3. 数据准备

### 3.1 `data/moves.json`（脚本生成，PokeAPI 拉取）
- 覆盖全站 pokedex 出现过的全部招式 slug（约 800+）
- 每招字段：`slug`、`name`（Showdown 显示名）、`type`、`power`、`accuracy`、`priority`、
  `damageClass`、`isHeal`、`isHazard`、`isStatus`、`isSetup`、`isSpeedControl`、`isRecoil` 等
- 生成脚本：`scripts/fetch-moves.mjs`（复用现有 fetch 脚本模式，启动时执行一次并提交产物）
- 显示名例外表内置在脚本中（`v-create→V-create`、`x-scissor→X-Scissor`、`freeze-dry→Freeze-Dry`、
  `10000000-volt-thunderbolt→10,000,000 Volt Thunderbolt`、`happy-hour→Happy Hour` 等）

### 3.2 `data/items.json`（手维护，约 50 个常用道具）
每个字段：`slug`、`name`、`tags`（数组，取值：`heal/priority/boost/speed/tank/spa/utility`）
- 例：剩饭→heal+tank；气势披带→priority；生命宝珠→boost；讲究头带/围巾/眼镜→boost+speed/spa；
  木子果→utility；抗性果→tank；进化奇石→tank

### 3.3 `data/natures.json`（25 种性格）
每个字段：`name`、`up`、`down`（属性：atk/def/spa/spd/spe）

### 3.4 `lib/showdown.ts`
- `speciesName(pokemon)`：`displayName/form → Showdown 物种名`
- `moveSlugToName(slug)`：查 moves.json 的 name，兜底 title-case
- `buildShowdownSet(pokemon, opts)` / `buildShowdownTeam(team, opts)`：生成文本
- `pickMoves(pokemon, movesMap)` / `pickItem(...)` / `pickNature(...)` / `pickEVs(...)`：智能配置

## 4. 智能配置规则

### 4.1 招式选择（完整智能）
1. 从该宝可梦 `moveNames` 中过滤出 moves.json 有元数据的招式
2. 评分：`score = power*accuracy/100 + priority*30`，类别加成：
   - 回复类（recover/roost/slack off/synthesis…）+80
   - 场地类（stealth-rock/spikes/toxic-spikes/sticky-web）+70
   - 强化类（swords-dance/calm-mind/dragon-dance/quiver-dance/shell-smash…）+70
   - 控速类（thunder-wave/will-o-wisp/tailwind/trick-room…）+60
   - 保护/替身 +50
   - 经典好招加成表（守住/替身/地震/岩崩/急速折返/伏特替换/高速旋转/清除浓雾等 ~40 招）+40
3. 排序：`STAB 命中（招招属性=宝可梦某类型）> 分数 > 多属性分散`
4. 取 4 招，尽量 4 种不同属性；同属性招最多 2 个（保证打击面）
5. 规则可后续用 Smogon 使用率数据迭代，但第一版用上述客观评分即可

### 4.2 道具推荐（按优先级）
1. 特性 `Sturdy`（结实） → 气势披带
2. 有回复招 + 种族 HP/防较高 → 剩饭
3. 特攻最高且 > 物攻 → 讲究眼镜 / 生命宝珠
4. 物攻最高 → 讲究头带 / 生命宝珠
5. 速度种族 ≥ 100 且招式无强化类 → 30% 概率推荐讲究围巾
6. 默认 → 通用池（生命宝珠/气势披带/剩饭）随机

### 4.3 性格
- 取种族最高两项，`up=最高项`，`down=最低项（且非 up）`
- 若最高项是速度则 down 取第二高之外的项

### 4.4 努力值
- `252 / 252 / 4`：给种族最高两项各 252，剩 4 点给 HP 或速度
- Level 50 模式：按 Showdown 规则（4 努力 = 1 点，mod4 余数丢弃）将 252 调整为可整除值，并提示
- 全 0 时省略 EV 行

### 4.5 Level
- 默认 100，导出时 50/100 切换

## 5. 导出格式（采用用户模板）

```
Pikachu @ Light Ball
Ability: Static
Level: 100
EVs: 252 Atk / 252 Def / 0 SpA / 0 SpD / 252 Spe / 4 HP
Jolly Nature
- Volt Tackle
- Thunderbolt
- Quick Attack
- Surf
```

- EV 行按 `HP / Atk / Def / SpA / SpD / Spe` 顺序全 6 项显式列出（用户模板）
- 全员 0 努力 → 省略 EV 行
- 形态名：`Mega Venusaur→Venusaur-Mega`、`Charizard-Mega-X→Charizard-Mega-X`、
  `Galarian Darmanitan→Darmanitan-Galar`、`Hisuian Zorua→Zorua-Hisui`、`Paldean Tauros→Tauros-Paldea`
- Gmax 形态：物种名用 `-Gmax` 后缀，并追加一行 `Gigantamax: Yes`
- 整队 = 6 个 set 之间空行分隔

## 6. 复制 / 下载交互

- **一键复制**：`navigator.clipboard.writeText()`，成功 toast「已复制到剪贴板」，失败 fallback 隐藏 textarea
- **单只下载**：复制按钮旁可选下载 `.txt`（复用现有 html-to-image 下载模式的按钮样式）
- 整队同样支持复制 + 下载 txt

## 7. UI 入口

### 7.1 单卡（HeroCard）
- 操作栏现有 3 个图标按钮（收藏/分享/下载），新增第 4 个 **Showdown 图标按钮**（终端/复制样式）
- `title="Copy Showdown set"`，点击复制本卡 set，toast 反馈
- 移动端保持图标一行不换行

### 7.2 整队
- `/team/random`：队伍结果区上方工具条加「Copy Team」按钮
- `/team/coach`：推荐结果区工具条加「Copy Team」
- `/team/challenge`：结果卡区加「Copy Team」（含双方 6+6 或仅本方，见 7.3）
- 按钮为文字+图标样式（game-btn 风格），与页面现有按钮一致

### 7.3 挑战赛（/team/challenge）
- 双方队伍导出：默认导出**本方 6 只**；提供「Copy Both」可同时导出双方（双方之间用注释行 `===
  对手 ==` 分隔，Showdown 忽略注释）

## 8. 验证

- 单元层面：lib/showdown.ts 的 name/evs/nature/items 各函数用 5-10 只典型宝可梦验证输出
- 整队：三个页面渲染后点击复制，粘贴到 Showdown 检查无报错
- 形态：抽 3-4 只 mega/alolan/galar/gmax 验证物种名映射
- 本地 dev + 生产模式（next build/start）各跑一遍

## 9. 非目标（YAGNI）

- 不做 Showdown 语法校验（相信生成规则正确）
- 不做自定义队伍编辑（已有 Team 功能，不在本需求内）
- 不做 Smogon 实时使用率拉取（第一版用客观评分 + 经典加成表）
- 不做后端接口（纯前端生成）
