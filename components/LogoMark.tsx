// PokeRoll 品牌 Logo:方骰球 W1 旋转版 —— 圆角骰子外形倾斜 12°,
// 上红下白 + 四角反色骰点,中心按钮即第五点。
// 红色部分硬编码品牌红 #ee3b3b(= --accent-hex,四主题一致),不用 currentColor,
// 否则在红色主按钮上(currentColor=白)整球变全白、丢失品牌识别。
// 与文字标 "PokeRoll" 搭配使用;favicon 版本见 app/icon.svg。
const BRAND_RED = "#ee3b3b";

export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <ellipse cx="50" cy="92" rx="36" ry="5" fill="#1f2430" opacity="0.1" />
      <g transform="rotate(12 50 48)">
        <rect x="8" y="6" width="84" height="84" rx="20" fill={BRAND_RED} />
        <path
          d="M8 48h84v22a20 20 0 0 1-20 20H28a20 20 0 0 1-20-20Z"
          fill="#fff"
        />
        <rect x="8" y="42" width="84" height="12" fill="#1f2430" />
        <rect
          x="8"
          y="6"
          width="84"
          height="84"
          rx="20"
          fill="none"
          stroke="#1f2430"
          strokeWidth="4"
        />
        <g fill="#fff">
          <circle cx="30" cy="27" r="6.5" />
          <circle cx="70" cy="27" r="6.5" />
        </g>
        <g fill={BRAND_RED}>
          <circle cx="30" cy="69" r="6.5" />
          <circle cx="70" cy="69" r="6.5" />
        </g>
        <circle cx="50" cy="48" r="13" fill="#fff" stroke="#1f2430" strokeWidth="6" />
      </g>
    </svg>
  );
}
