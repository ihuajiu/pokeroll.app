# 收藏夹(Favorites)功能设计

日期:2026-08-04
状态:已获用户批准(独立收藏夹 + 快照链接)

## 背景与目标

用户 roll 到喜欢的宝可梦时,目前没有地方长期保存(Your Team 限 6 只、
语义是战斗队)。目标:提供无限容量的收藏夹,收藏内容可以通过链接唯一
标识并分享给任何人,打开链接即可查看。

## 关键决策(已与用户确认)

- **独立于 Your Team**:收藏夹 = 喜欢清单,无容量上限;队伍 = 6 人战斗队,
  两者并存互不干扰。
- **快照链接语义**:收藏内容编码在 URL 里(`/favorites?m=4,25,150`),
  打开即见分享那一刻的快照;之后修改收藏不影响已发出的链接。不引入
  服务端存储/数据库。

## 存储与标识

- 新建 `components/useFavorites.ts`:模块级共享 store +
  `useSyncExternalStore`(仿照 `useTeam`),localStorage key
  `rpg-favorites`,存完整 Pokemon 对象,按 dexNumber 去重,无容量上限。
  多标签页通过 storage 事件联动。
- 分享链接:dexNumber 升序逗号编码(`/favorites?m=4,25,150`)。排序保证
  同一份收藏永远生成同一 URL —— 链接本身就是收藏夹的唯一标识。
- 快照还原:打开链接时从本地 `data/pokedex.json` 按 dex 查回完整数据
  (复用 `lib/pokedex.ts` 现有查询能力)。

## 入口

### 卡片收藏(HeroCard 新增 `favoritable` prop)

- `showActions=true` 的生成器卡(/random、/type、/gen 等):action bar
  左侧加爱心 toggle 按钮。
- `showActions=false` 的阵容卡(/team/random、/adventure):右上角立绘
  区浮一个半透明底爱心(与左上角锁按钮对称,z-index 高于卡片背景)。
- 爱心状态由 HeroCard 内部 `useFavorites()` 直接驱动(全局 store,
  无需父组件传状态);已收藏 = 红色填充,未收藏 = 描边。
- 点击 toggle 收藏/取消,aria-pressed 标注状态。

### Header

- Your Team 入口左侧加心形 Favorites 入口,带数量 badge,点击进
  `/favorites`。复用现有 Your Team 按钮的样式模式。

## /favorites 页面(双模式)

- **无参数(我的收藏)**:PageHeader "Your Favorites";卡片网格
  (variant="team" 阵容卡,可逐个移除);顶部"分享收藏夹"按钮
  (navigator.share → clipboard 降级,复制快照链接);空态引导用户去
  生成器 roll 宝可梦。
- **带 `?m=`(快照模式)**:标题 "Shared Favorites",只读卡片网格
  (不显示移除按钮);顶部横幅说明这是分享的收藏快照 + "保存到我的
  收藏"按钮(合并进 localStorage,按 dex 去重)。

## 组件改动清单

1. `components/useFavorites.ts`(新):全局收藏 store。
2. `components/HeroCard.tsx`:新增 `favoritable` prop + 爱心按钮
   (action bar / 角落两种放置)。
3. `components/FavoritesClient.tsx`(新):双模式收藏夹页面客户端组件。
4. `app/favorites/page.tsx`(新):metadata + 挂载 FavoritesClient。
5. `components/SiteNav.tsx`:Header 收藏夹入口 + badge。
6. `app/globals.css`:爱心按钮样式(action bar 内复用现有按钮样式,
   阵容卡角落样式仿 lock-toggle)。

## 错误处理

- `?m=` 参数含非法/未知 dex:跳过无效项;全部无效时显示"链接无效或
  已过期"空态 + 回我的收藏入口。
- localStorage 不可用:沿用 useTeam 的容错(内存态)。

## 测试与验证

- `npx tsc --noEmit` 通过。
- playwright 实测:
  1. 生成器卡片收藏 2 只 → Header badge 变 2。
  2. /favorites 显示 2 张卡,移除 1 张 → badge 变 1。
  3. 生成分享链接,清 localStorage 模拟新会话打开 → 快照完整只读。
  4. 快照页"保存到我的收藏"→ 合并去重。
  5. 阵容卡(/team/random)角落爱心可收藏。

## 非目标(YAGNI)

- 服务端短链 / 实时同步(已被快照决策排除)。
- 收藏分组/标签、排序拖拽、导出图片。
- 登录账号体系。
