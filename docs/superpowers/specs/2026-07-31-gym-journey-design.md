# Adventure V2 — Gym Journey 维度设计

> 决策日期：2026-07-31
> 状态：已批准
> 前置：`docs/plans/2026-07-30-adventure-platform-design.md` §1 V2 deferred

## 0. 范围决定

V2 deferred 原列 4 项：Trainer Class / Rival / Gym Journey / Legendary Encounter。
Rival 与 Legendary Encounter 已实现（commit `034b9ce`）。

- **Trainer Class：取消**。与现有 `TRAINER_ROLES`（Ace Trainer / Dragon Tamer 等 7 种）语义重复，用户确认不再新增。
- **Gym Journey：实现**。本文件范围。

## 1. 维度定义

按 Region 展示该地区 8 个道馆（馆主 + 属性 + 徽章），以水平进度条呈现冒险的"道馆征途"。纯静态数据，无 RNG —— 同 Region 恒定，不影响 seed 复现语义。

### 1.1 数据结构（`lib/adventure-types.ts`，客户端安全）

```ts
export interface GymStop {
  leader: string;   // 馆主名（Alola 为试炼队长/Kahuna）
  type: string;     // 属性（小写，与 TYPE_HEX 键一致）
  badge: string;    // 徽章名（Alola 为试炼名）
}

export const GYM_JOURNEYS: Record<string, GymStop[]> = { ... }; // 9 地区 × 8 站
```

### 1.2 数据集（9 地区 × 8 站）

| Region | 站点（馆主 — 属性 — 徽章） |
|---|---|
| kanto | Brock/Rock/Boulder, Misty/Water/Cascade, Lt. Surge/Electric/Thunder, Erika/Grass/Rainbow, Koga/Poison/Soul, Sabrina/Psychic/Marsh, Blaine/Fire/Volcano, Giovanni/Ground/Earth |
| johto | Falkner/Flying/Zephyr, Bugsy/Bug/Hive, Whitney/Normal/Plain, Morty/Ghost/Fog, Chuck/Fighting/Storm, Jasmine/Steel/Mineral, Pryce/Ice/Glacier, Clair/Dragon/Rising |
| hoenn | Roxanne/Rock/Stone, Brawly/Fighting/Knuckle, Wattson/Electric/Dynamo, Flannery/Fire/Heat, Norman/Normal/Balance, Winona/Flying/Feather, Tate & Liza/Psychic/Mind, Wallace/Water/Rain |
| sinnoh | Roark/Rock/Coal, Gardenia/Grass/Forest, Maylene/Fighting/Cobble, Crasher Wake/Water/Fen, Fantina/Ghost/Relic, Byron/Steel/Mine, Candice/Ice/Icicle, Volkner/Electric/Beacon |
| unova | Cilan/Grass/Trio, Lenora/Normal/Basic, Burgh/Bug/Insect, Elesa/Electric/Bolt, Clay/Ground/Quake, Skyla/Flying/Jet, Drayden/Dragon/Legend, Marlon/Water/Wave |
| kalos | Viola/Bug/Bug, Grant/Rock/Cliff, Korrina/Fighting/Rumble, Ramos/Grass/Plant, Clemont/Electric/Voltage, Valerie/Fairy/Fairy, Olympia/Psychic/Psychic, Wulfric/Ice/Iceberg |
| alola | Ilima/Normal/Verdant Cavern Trial, Lana/Water/Brooklet Hill Trial, Kiawe/Fire/Wela Volcano Trial, Mallow/Grass/Lush Jungle Trial, Sophocles/Electric/Hokulani Observatory Trial, Acerola/Ghost/Thrifty Megamart Trial, Mina/Fairy/Poni Island Trial, Hala/Fighting/Melemele Grand Trial |
| galar | Milo/Grass/Grass, Nessa/Water/Water, Kabu/Fire/Fire, Bea/Fighting/Fighting, Opal/Fairy/Fairy, Gordie/Rock/Rock, Piers/Dark/Dark, Raihan/Dragon/Dragon |
| paldea | Katy/Bug/Bug, Brassius/Grass/Grass, Iono/Electric/Electric, Kofu/Water/Water, Larry/Normal/Normal, Ryme/Ghost/Ghost, Tulip/Psychic/Psychic, Grusha/Ice/Ice |

**特殊约定**：
- **Alola** 无道馆制，用 Island Challenge 试炼顶替 8 节点（7 试炼队长 + Hala Grand Trial 收尾）。
- 版本差异取主流一版：Unova 按 BW（Cilan 代表 Striaton 三兄弟）、Galar 按 Sword 侧（Bea / Gordie）、Hoenn 第八馆用 Wallace。
- Paldea 按官方等级顺序（Katy → Grusha）。

## 2. 逻辑层（`lib/adventure.ts`）

`rollAdventure` 内查表，无 RNG：

```ts
const gymJourney = GYM_JOURNEYS[region] ?? GYM_JOURNEYS.kanto;
```

`Adventure` 类型新增字段：

```ts
gymJourney: GymStop[];  // 长度恒为 8
```

`/api/adventure` 返回值自动携带（`rollAdventure` 结果直出）。

## 3. 视图层（`components/AdventureView.tsx`）

新增 **Gym Journey** 区块，位于 Team 之后、Legendary Encounter 之前（叙事顺序：组队 → 道馆征途 → 传说遭遇）。

- 标题样式沿用现有区块（`text-xs font-bold uppercase tracking-wide text-poke-dim`）
- 水平进度条：8 节点横排，圆点用 `TYPE_HEX[type]` 着色，节点间连线（1px `border-poke-border`）
- 每节点三行小字：馆主名（`text-poke-ink` 半粗）/ 属性（属性色）/ 徽章（`text-poke-dim`）
- 纯展示，无交互；节点 `title` 属性兜底（`"Brock — Rock — Boulder Badge"`）
- 移动端（<640px）折行为 2×4 网格，连线仅同行保留

## 4. 文案与元数据

- `shareText` 追加一行：`Gym Journey: 8 gyms in <Region>`（Alola 写 `8 trials in Alola`）
- `app/adventure/page.tsx` meta description 补充 `gym journey`

## 5. Non-goals（YAGNI）

- 道馆攻克状态 / 完成进度（冒险是起点叙事，8 节点均为未征服）
- 推荐等级 / 顺序标注
- hover 详情卡片、点击跳转
- Trainer Class 维度（见 §0）

## 6. 文件清单

- `lib/adventure-types.ts` — `GymStop` 类型 + `GYM_JOURNEYS` 数据集 + `Adventure.gymJourney` 字段 + `shareText` 追加
- `lib/adventure.ts` — `rollAdventure` 查表 + re-export `GYM_JOURNEYS`/`GymStop`
- `components/AdventureView.tsx` — Gym Journey 进度条区块
- `app/adventure/page.tsx` — meta description 补充

## 7. 验证

- `npx tsc --noEmit` 通过
- `/adventure?seed=b3h253q7`（Paldea）与 Alola 地区 seed 各截一图：8 节点进度条、属性着色、移动端折行
- 同 seed 复现不变（gymJourney 无 RNG）
