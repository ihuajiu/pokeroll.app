# Random Team 锁定功能设计

日期:2026-08-03
状态:已获用户批准(交互行为 + 方案选型)

## 背景与目标

随机队伍生成器(/team/random)目前每次 Roll 都会整队替换。用户在游戏过程中
组队的典型场景:roll 出一队后,想保留其中一两只满意的,只重抽其余的。
目标是为每张已生成的卡片提供"锁定"开关,Roll 时只刷新未锁定的卡位。

## 方案选型

- **方案 A(采用):客户端锁定 + 按需补抽。** 锁状态保存在 TeamGenerator 组件
  state,Roll 时请求 `count = 未锁定卡位数`,把新结果按顺序填入未锁定槽位。
  现有 API(`/api/team/random?count=N`)零改动。
- 方案 B(否决):服务端保持。把锁定的 dexNumber 发给 API 由服务端拼装,可
  实现 URL 分享锁定状态,但参数设计复杂、当前需求用不上。
- 方案 C(否决):锁定即入队。混淆"锁定候选"与"确认入队"两个概念。

## 行为规格

### 锁定交互

- 每张阵容卡(variant="team", showActions=false,且处于锁定功能区)左上角
  渲染一个小锁按钮;右上角已被角标立绘占用,不可用。
- 点击在开锁/锁定间切换。锁定态视觉反馈:锁图标变为红色填充,卡片获得
  一圈淡红色描边。
- HeroCard 新增可选 props:`lockable`、`locked`、`onToggleLock`。不侵入现有
  selectable(多选勾选)逻辑,二者互不相关。
- 锁按钮绝对定位于**卡片的左上角**(top/left 各 8px,z-index 高于卡片
  背景光晕),与右上角的角标立绘区域互不重叠。

### Roll 行为(已确认:原位保留)

- 锁定的卡固定在原槽位不动;未锁定槽位按从左到右、从上到下顺序被新抽取
  结果依次替换。
- 锁按**槽位 index** 记录,不按 dexNumber —— 兼容重复宝可梦(如多只
  Mewtwo),同时修复当前 `key={p.dexNumber}` 在重复时的 React key 冲突,
  key 改为槽位 index。
- 请求参数:`count = 总数 - 锁定数`,其余过滤参数(gen/region/type/seed)
  与现状一致。
- 全部锁定时 Roll 按钮置灰(disabled)。
- 有锁定时 Roll 按钮文案显示将刷新的数量,如 `Roll (4)`。

### 过滤器变更

- Gen / Region / Type 变更不影响已锁定的卡(它们可能不符合新过滤条件,
  这正是锁的意义)。
- Team Size 调小:从末尾优先裁掉未锁定卡;只有当未锁定卡不足裁剪时才裁
  锁定卡(从末尾)。
- Team Size 调大:槽位增加,下次 Roll 时补齐(count = 新总数 - 已有卡数,
  已有卡全部视为"保留")。
- 过滤器变更本身不触发 Roll(与现状一致)。

### 持久化

- 锁状态仅存在于组件 state,刷新页面即清空。不进 URL、不进 localStorage。

## 数据流

```
用户点击锁 → setLocks(toggle index)
用户点击 Roll:
  lockedIdx = locks 中的槽位
  keep = rolled.filter((_, i) => lockedIdx.has(i))
  fetch /api/team/random?count=rolled.length - keep.length (+ filters + seed)
  next = rolled.map((p, i) => lockedIdx.has(i) ? p : newQueue.shift())
  setRolled(next)
```

边界:

- 首次 Roll(rolled 为 null)与普通 Roll 逻辑一致。
- 请求失败保留当前整队(与现状一致)。
- 新结果为空(过滤过窄)时保持现有 notice 提示,不动已有卡片。

## 组件改动

1. `components/HeroCard.tsx`:新增 `lockable` / `locked` / `onToggleLock`
   props;锁按钮绝对定位于卡片左上角(top/left 各 8px),与角标立绘错开;锁定态样式类 `is-locked`。
2. `components/TeamGenerator.tsx`:新增 `locks: Set<number>` state;roll()
   支持增量补抽;尺寸变更裁剪逻辑;Roll 按钮文案/置灰;grid key 改为
   index;卡片传入 lock props。
3. `app/globals.css`:锁按钮与 `is-locked` 描边样式(复用卡片设计令牌)。

## 错误处理

- 全部锁定时 Roll 置灰,不发请求。
- API 失败:保留当前整队与锁状态(沿用现有 catch 逻辑)。
- 过滤结果为空:现有 notice 提示,卡片与锁状态不变。

## 测试与验证

- `npx tsc --noEmit` 通过。
- playwright 实测(390px 移动端 + 1280px 桌面端):
  1. Roll 一队,锁定 2 张,再 Roll —— 锁定卡原位不动,其余刷新。
  2. 全部锁定后 Roll 按钮置灰。
  3. Team Size 6→3,未锁定卡优先被裁,锁定卡保留。
  4. 重复宝可梦场景(key 冲突不再出现控制台警告)。

## 非目标(YAGNI)

- 锁状态持久化(localStorage / URL 分享)。
- 单卡独立重抽(每张卡自己的 re-roll 按钮)。
- /random 单卡页的锁定(单卡无队伍语义)。
