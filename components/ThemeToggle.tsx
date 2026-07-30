"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark";
type Skin = "versus" | "pokedex";

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("dark");
  const [skin, setSkin] = useState<Skin>("versus");

  useEffect(() => {
    const el = document.documentElement;
    setMode(((el.getAttribute("data-mode") as Mode) || "dark"));
    setSkin(((el.getAttribute("data-skin") as Skin) || "versus"));
  }, []);

  function persist(nextMode: Mode, nextSkin: Skin) {
    try {
      localStorage.setItem(
        "pokefield-theme",
        JSON.stringify({ mode: nextMode, skin: nextSkin }),
      );
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }

  function toggleMode() {
    const el = document.documentElement;
    const next: Mode = mode === "dark" ? "light" : "dark";
    el.setAttribute("data-mode", next);
    el.classList.toggle("dark", next === "dark");
    setMode(next);
    persist(next, skin);
  }

  function toggleSkin() {
    const el = document.documentElement;
    const next: Skin = skin === "versus" ? "pokedex" : "versus";
    el.setAttribute("data-skin", next);
    setSkin(next);
    persist(mode, next);
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleMode}
        aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        title={mode === "dark" ? "Light mode" : "Dark mode"}
        className="game-btn game-btn-ghost inline-flex h-9 w-9 items-center justify-center"
      >
        {mode === "dark" ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
          </svg>
        )}
      </button>
      <button
        type="button"
        onClick={toggleSkin}
        aria-label={skin === "versus" ? "Switch to Pokédex skin" : "Switch to Versus skin"}
        title={skin === "versus" ? "Pokédex skin" : "Versus skin"}
        className="game-btn game-btn-ghost inline-flex h-9 w-9 items-center justify-center"
      >
        {skin === "versus" ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3.2 12h17.6" />
            <circle cx="12" cy="12" r="3" />
            <g fill="currentColor" stroke="none">
              <circle cx="10.6" cy="10.6" r="0.7" />
              <circle cx="13.4" cy="10.6" r="0.7" />
              <circle cx="12" cy="12" r="0.7" />
              <circle cx="10.6" cy="13.4" r="0.7" />
              <circle cx="13.4" cy="13.4" r="0.7" />
            </g>
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
            <path d="M8.5 5v14" strokeWidth="2.6" />
          </svg>
        )}
      </button>
    </>
  );
}
