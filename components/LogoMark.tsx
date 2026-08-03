// PokeRoll 品牌 Logo:方骰球 W1 旋转版 —— 圆角骰子外形倾斜 12°,
// 上红下白 + 四角反色骰点,中心按钮即第五点。
// currentColor 驱动红色部分(.brand/.foot-brand 里指向 --accent),
// 与文字标 "PokeRoll" 搭配使用;favicon 版本见 app/icon.svg。
export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <ellipse cx="50" cy="92" rx="36" ry="5" fill="#1f2430" opacity="0.1" />
      <g transform="rotate(12 50 48)">
        <rect x="8" y="6" width="84" height="84" rx="20" fill="currentColor" />
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
        <g fill="currentColor">
          <circle cx="30" cy="69" r="6.5" />
          <circle cx="70" cy="69" r="6.5" />
        </g>
        <circle cx="50" cy="48" r="13" fill="#fff" stroke="#1f2430" strokeWidth="6" />
      </g>
    </svg>
  );
}
