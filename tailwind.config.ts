import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        mono: ["Space Mono", "ui-monospace", "monospace"],
      },
      colors: {
        poke: {
          // Raw brand color (same in both themes)
          yellow: "#FFCB05",
          // Theme-aware tokens, driven by CSS variables in globals.css
          // so they automatically adapt to light/dark mode.
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
    },
  },
  plugins: [],
};

export default config;
