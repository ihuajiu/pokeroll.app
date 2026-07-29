import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        display: ["Sora", "Outfit", "system-ui", "sans-serif"],
        mono: ["Space Mono", "ui-monospace", "monospace"],
      },
      colors: {
        poke: {
          // Raw brand color (same in both themes)
          yellow: "#FFCB05",
          // Brand tokens
          violet: "rgb(var(--brand) / <alpha-value>)",
          violetHover: "rgb(var(--brand-hover) / <alpha-value>)",
          scarlet: "rgb(var(--accent) / <alpha-value>)",
          // Legacy semantic aliases kept for existing class usage
          red: "rgb(var(--accent) / <alpha-value>)",
          btn: "rgb(var(--btn) / <alpha-value>)",
          btnHover: "rgb(var(--btn-hover) / <alpha-value>)",
          cream: "rgb(var(--bg) / <alpha-value>)",
          surface: "rgb(var(--card) / <alpha-value>)",
          tint: "rgb(var(--surface-2) / <alpha-value>)",
          chip: "rgb(var(--chip-bg) / <alpha-value>)",
          border: "rgb(var(--border) / <alpha-value>)",
          ink: "rgb(var(--text) / <alpha-value>)",
          dim: "rgb(var(--text-dim) / <alpha-value>)",
          orange: "rgb(var(--accent-2) / <alpha-value>)",
        },
      },
      boxShadow: {
        panel:
          "0 1px 2px rgb(0 0 0 / 0.05), 0 20px 44px -30px rgb(17 13 28 / 0.45)",
        glow: "0 0 0 1px rgb(var(--brand) / 0.22), 0 30px 60px -30px rgb(var(--brand))",
      },
      borderRadius: {
        "2.5xl": "1.4rem",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(12px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgb(var(--brand) / 0)" },
          "50%": { boxShadow: "0 0 30px 3px rgb(var(--brand) / 0.35)" },
        },
        spinSlow: { to: { transform: "rotate(360deg)" } },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        reveal: "reveal 0.6s ease both",
        popIn: "popIn 0.45s cubic-bezier(0.2,0.8,0.2,1) both",
        pulseGlow: "pulseGlow 2.6s ease-in-out infinite",
        spinSlow: "spinSlow 18s linear infinite",
        scan: "scan 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
