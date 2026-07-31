# Shiny Found 卡 — TCG 闪卡质感设计

日期：2026-07-31 · 状态：已获用户批准（原型 `prototypes/shiny-found-tcg.html` 验收通过）

## 目标

ShinyHunt 的 found 结果卡是分享传播的核心载体（reveal 链接落地页 + 分享图的原型），
需要"出货瞬间"的惊艳感。方向定为 **TCG 宝可梦闪卡质感**，与分享图、/card 交易卡页形成统一的卡牌语言。

## 设计决策

- **深色卡面**：固定深海军蓝（`#1b1e2b → #14161f` 径向渐变），不随站点明暗主题切换——真闪卡就是深色底 + 全息
- **全息描边**：1.5~2px 四色镭射渐变描边，复用 prototypes 的 `--holo`（`#5eead4 → #818cf8 → #f0abfc → #fde68a`）+ mask 描边技术
- **视差 foil**：指针移动时卡片 ±7° 倾斜（perspective 1100px），全息光泽（screen 混合）跟随指针位置；`prefers-reduced-motion` 时禁用
- **出货爆发**：8 颗 ✦ 从中心向外飞散（0.9s 一次，错峰 0.15–0.3s），之后回归常驻错峰 twinkle
- **金色排版**：`✦ SHINY` 卡头标签 + 宝可梦名字用金色渐变字（`--gold-text`）
- **芯片**：难度 = 白描边 pill；概率 = holo 渐变填充 pill（Easy 显示 `1 / 204 · GUARANTEED`）
- **HUD**：出货后计数器白色大数字 + 进度条满槽金色渐变
- **按钮**：主按钮保持站点红色；ghost 按钮用深色变体（半透明白底白描边，hover 变金）

## 实现落点

- `app/globals.css`：`--holo` / `--gold-text` 变量、`.tcg-card`（含 ::before 描边 / ::after 光泽）、
  `.tcg-gold-text`、`.tcg-chip` / `.tcg-chip-odds`、`tcg-float` / `tcg-breathe-gold` / `tcg-burst` 关键帧
- `components/ShinyHunt.tsx`：found 态整体替换为 TCG 结构（卡头 / HUD / 舞台 / 信息 / 按钮），
  容器在 found 时切换为 `.tcg-card`；指针视差用 `onPointerMove` 直接写 CSS 变量（--rx/--ry/--gx/--gy），
  不走 React state；`matchMedia('(prefers-reduced-motion: reduce)')` 时跳过
- 狩猎中（未出货）的卡片保持现有浅色主题样式不变

## 边界

- 分享图（`lib/shareCard.ts`）初版未重画；后续已随 found 卡同步改为同款深色 TCG 版式（全息描边、金色标题、难度/概率 pill、PokeRoll.app 角标 + 二维码）
- 无障碍：所有动画受全站 reduced-motion 重置约束；视差 JS 侧也判断
