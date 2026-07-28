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
    <header className="sticky top-0 z-30 border-b border-poke-border bg-poke-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-poke-ink"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-poke-btn text-sm font-black text-white">
            P
          </span>
          Pokémon Generator
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-poke-dim md:flex">
          {MAIN.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="transition hover:text-poke-red"
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
              className="inline-flex items-center gap-1 rounded-xl border border-poke-border bg-poke-surface px-3 py-2 text-sm font-semibold text-poke-ink transition hover:border-poke-red hover:text-poke-red"
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
              <div className="absolute right-0 mt-2 w-[28rem] rounded-2xl border border-poke-border bg-poke-surface p-4 shadow-xl">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {TOOL_GROUPS.map((g) => (
                    <div key={g.id}>
                      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-poke-dim">
                        <GroupIcon
                          group={g.id}
                          className="h-4 w-4 text-poke-red"
                        />
                        {g.title}
                      </div>
                      <ul className="space-y-1">
                        {TOOLS.filter((t) => t.group === g.id).map((t) => (
                          <li key={t.href}>
                            <Link
                              href={t.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-2 py-1 text-sm text-poke-ink transition hover:bg-poke-red/10 hover:text-poke-red"
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
            className="hidden rounded-xl bg-poke-btn px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-poke-btnHover sm:inline-block"
          >
            Random Pokémon
          </Link>

          <button
            type="button"
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobile}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-poke-border bg-poke-surface text-poke-ink md:hidden"
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
                className="rounded-lg px-2 py-2 text-sm font-medium text-poke-ink transition hover:bg-poke-red/10 hover:text-poke-red"
              >
                {m.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 space-y-3">
            {TOOL_GROUPS.map((g) => (
              <div key={g.id}>
                <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-poke-dim">
                  <GroupIcon group={g.id} className="h-4 w-4 text-poke-red" />
                  {g.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {TOOLS.filter((t) => t.group === g.id).map((t) => (
                    <Link
                      key={t.href}
                      href={t.href}
                      onClick={() => setMobile(false)}
                      className="rounded-full border border-poke-border bg-poke-surface px-3 py-1 text-xs font-medium text-poke-ink transition hover:border-poke-red hover:text-poke-red"
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
            className="mt-4 block rounded-xl bg-poke-btn px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-poke-btnHover"
          >
            Random Pokémon
          </Link>
        </div>
      )}
    </header>
  );
}
