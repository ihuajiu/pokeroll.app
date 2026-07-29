"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TOOLS, TOOL_GROUPS } from "@/lib/tools";
import { GroupIcon } from "./ToolIcons";
import ThemeToggle from "@/components/ThemeToggle";

const MAIN = [
  { href: "/type", label: "Types" },
  { href: "/fusion", label: "Fusion" },
  { href: "/wheel", label: "Wheel" },
  { href: "/challenge", label: "Challenge" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header
      className="sticky top-0 z-30 border-b border-poke-border backdrop-blur-md"
      style={{ background: "var(--header-bg)" }}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-bold text-poke-ink"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-poke-violet to-poke-scarlet text-white shadow-[0_3px_0_rgba(0,0,0,0.18)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <circle cx="9" cy="9" r="1.5" fill="#fff" />
              <circle cx="15" cy="9" r="1.5" fill="#fff" />
              <circle cx="9" cy="15" r="1.5" fill="#fff" />
              <circle cx="15" cy="15" r="1.5" fill="#fff" />
            </svg>
          </span>
          PockRoll
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-poke-dim md:flex">
          {MAIN.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="transition hover:text-poke-violet"
            >
              {m.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div className="relative hidden md:block" ref={dropRef}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Browse all tools"
              className="game-btn game-btn-ghost px-3.5 py-2 text-sm"
            >
              All tools
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {open && (
              <div className="absolute right-0 mt-3 w-[28rem] rounded-2.5xl border border-poke-border bg-poke-surface p-4 shadow-panel ring-1 ring-poke-violet/15">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {TOOL_GROUPS.map((g) => (
                    <div key={g.id}>
                      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-poke-violet">
                        <GroupIcon group={g.id} className="h-4 w-4" />
                        {g.title}
                      </div>
                      <ul className="space-y-1">
                        {TOOLS.filter((t) => t.group === g.id).map((t) => (
                          <li key={t.href}>
                            <Link
                              href={t.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-2 py-1 text-sm font-medium text-poke-ink transition hover:bg-poke-violet/10 hover:text-poke-violet"
                            >
                              {t.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/"
            className="hidden game-btn game-btn-primary px-4 py-2 text-sm sm:inline-flex"
          >
            Random Pokémon
          </Link>

          <button
            type="button"
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobile}
            className="game-btn game-btn-ghost inline-flex h-9 w-9 items-center justify-center md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobile && (
        <div className="border-t border-poke-border bg-poke-surface px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {MAIN.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                onClick={() => setMobile(false)}
                className="rounded-lg px-2 py-2 text-sm font-semibold text-poke-ink transition hover:bg-poke-violet/10 hover:text-poke-violet"
              >
                {m.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 space-y-3">
            {TOOL_GROUPS.map((g) => (
              <div key={g.id}>
                <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-poke-violet">
                  <GroupIcon group={g.id} className="h-4 w-4" />
                  {g.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {TOOLS.filter((t) => t.group === g.id).map((t) => (
                    <Link
                      key={t.href}
                      href={t.href}
                      onClick={() => setMobile(false)}
                      className="rounded-full border border-poke-border bg-poke-surface px-3 py-1 text-xs font-medium text-poke-ink transition hover:border-poke-violet hover:text-poke-violet"
                    >
                      {t.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/"
            onClick={() => setMobile(false)}
            className="game-btn game-btn-primary mt-4 block px-4 py-2 text-center text-sm"
          >
            Random Pokémon
          </Link>
        </div>
      )}
    </header>
  );
}
