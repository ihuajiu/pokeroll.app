# Team Coach（补队教练）实现计划

> 日期：2026-08-06 · 基于 spec：docs/superpowers/specs/2026-08-06-team-coach-design.md

## 步骤 0 · 类型攻防表 lib/typechart.ts（新建）
- 18 种类型的攻防效率数据（Gen 8+ 官方表，含 fairy、免疫 0x）。
- 导出：`typeEffectiveness(attack, defense): number`（0/0.5/1/2/4）、`weaknessesOf(types): Map<attack, mult>`、`resistsOf(types)`。
- 采用 compact 形式：每种类型声明 weak / resist / immune 列表，运行时展开。

## 步骤 1 · 核心算法 lib/teamCoach.ts（新建）
- `completeTeam({ locked, keep, count, filters, seed }) → { team: Pokemon[], reasons: Record<dex, string> }`
- 候选池：getAllPokemon() 按 gen/region/type 过滤，排除 locked/keep 的 dex。
- 角色分类：按 stats 粗分（高速手 spe / 耐久 def+spd / 物攻 atk / 特攻 spa / 均衡）。
- 打分（权重常量集中）：类型去重扣分；补抗性（队伍弱点 vs 候选抗性）加分；补覆盖加分；角色缺口加分。
- 生成：种子 RNG（复用 lib/challenge 的 mulberry32/hashSeed）+ 按分数加权抽签，逐只填充并实时更新队伍集合。
- 理由：每只补的卡取最高分维度 → 简短标签（≤一行）。
- 兜底：候选不足 → 去筛选 → 允许类型重复 → 仍不足用随机兜底，保证补满。
- 可复现：同 locked+keep+count+filters+seed → 同结果。

## 步骤 2 · API /api/team/coach（新建 route.ts）
- GET：解析 locked/keep/count/gen/region/type/seed → completeTeam → `{ seed, team, reasons }`。
- 参数非法 → 400；force-dynamic。

## 步骤 3 · 服务端页面 app/team/coach/page.tsx（新建）
- 解析 searchParams（locked/count/seed/gen/region/type）；locked 存在 → 服务端 completeTeam 生成初始结果。
- metadata（title/desc/keywords/canonical）、Breadcrumbs、PageHeader、GuideSteps（How to play 3 步）、<TeamCoach initial />、RelatedTools。

## 步骤 4 · 客户端组件 components/TeamCoach.tsx（新建）
- 锁定区：搜索联想添加（需搜索数据源，见注意）+ 从收藏夹导入（useFavorites 弹层勾选）+ 从队伍导入（useTeam）。
- 锁定卡：HeroCard team 变体 + hideRoll + 移除 ×；锁定数 < 目标尺寸校验。
- 目标尺寸下拉 3-6（默认 6）；gen/region/type 筛选（复用 team/random 样式）。
- 补全按钮 → fetch /api/team/coach；结果展示完整队伍，补的卡带理由标签 + ↻单格重摇（keep=其他卡）+ 全部重补。
- 加入我的队伍（useTeam 循环 add，复用"Add all"提示）；分享（ShareDialog，url=/team/coach?locked=…&count=…&seed=…）。
- URL 同步 seed（history.replaceState），保持可分享复现。

## 步骤 5 · 集成
- lib/tools.ts：/team/coach 加入 team 分组（label "Team Coach"，icon 🧠）。
- app/sitemap.ts：staticPages 加 /team/coach。
- RelatedTools 随分组自动关联。

## 步骤 6 · 验证
- `npx tsc --noEmit`。
- Playwright：锁定 2 只 → 补全 → 6 只且每张补的卡有理由标签 → 单格重摇只变该格 → 加入队伍 → 分享链接对方打开复现同一队伍。

## 注意 / 风险
- **搜索联想数据源**：现有 /api/pokemon/:name 只能按精确名取单只。补一个 `/api/pokemon/search?q=`（模糊匹配 displayName/name，返回前 N 条精简结果）或客户端内置全 dex 过滤。推荐前者（保持客户端轻）。
- 类型攻防表需引用 Gen 8+ 官方数据，重点核对 fairy/steel/dark/poison 的免疫与半伤。
- 理由标签文案统一简短，避免换行。
- 单格重摇的"keep"参数与完整补全共用同一 API，注意 count 与已锁+keep 数量一致（至少留 1 个补位）。
