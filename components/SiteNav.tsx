"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOOLS, TOOL_GROUPS } from "@/lib/tools";
import { GroupIcon } from "./ToolIcons";
import ThemeToggle from "@/components/ThemeToggle";
import { useTeam } from "./useTeam";

// 五分组主导航：每组指向该组的第一个工具页。
const MAIN = [
  { href: "/adventure", label: "Adventure" },
  { href: "/random", label: "Generators" },
  { href: "/challenge", label: "Challenges" },
  { href: "/fusion", label: "Tools" },
  { href: "/team", label: "Team" },
];

export default function SiteNav({ currentPath = "" }: { currentPath?: string }) {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const activePath = pathname || currentPath;
  const isActive = (href: string) => activePath === href || activePath === href + "/";
  const { team } = useTeam();
  const teamCount = team.length;

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
          className="brand"
        >
          <svg className="ball" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="46" fill="currentColor" />
            <path d="M4 50a46 46 0 0 1 92 0Z" fill="#fff" />
            <rect x="2" y="45" width="96" height="10" fill="#1f2430" />
            <circle cx="50" cy="50" r="15" fill="#fff" stroke="#1f2430" strokeWidth="7" />
          </svg>
          <span>Pock<span className="red">Roll</span></span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-poke-dim md:flex">
          {MAIN.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className={`flex items-center gap-1.5 transition ${
                isActive(m.href)
                  ? "text-[#ee3b3b]"
                  : "text-poke-dim hover:text-[#ee3b3b]"
              }`}
            >
              {m.label}
              {m.href === "/team" && teamCount > 0 && (
                <span className="rounded-full bg-[#ee3b3b] px-1.5 text-xs font-bold leading-5 text-white">
                  {teamCount}
                </span>
              )}
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
              <div className="absolute right-0 mt-3 w-[28rem] rounded-2.5xl border border-poke-border bg-poke-surface p-4 shadow-panel ring-1 ring-[#ee3b3b]/15">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
                  {TOOL_GROUPS.map((g) => (
                    <div key={g.id}>
                      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#ee3b3b]">
                        <GroupIcon group={g.id} className="h-4 w-4" />
                        {g.title}
                      </div>
                      <ul className="space-y-1">
                        {TOOLS.filter((t) => t.group === g.id).map((t) => (
                          <li key={t.href}>
                            <Link
                              href={t.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-2 py-1 text-sm font-medium text-poke-ink transition hover:bg-[#ee3b3b]/10 hover:text-[#ee3b3b]"
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
            href="/adventure"
            className="hidden game-btn game-btn-primary px-4 py-2 text-sm sm:inline-flex"
          >
            Roll Adventure
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
          <div className="space-y-3">
            {TOOL_GROUPS.map((g) => {
              const first = TOOLS.find((t) => t.group === g.id);
              const active = first ? isActive(first.href) : false;
              return (
                <div key={g.id}>
                  <Link
                    href={first?.href ?? "/"}
                    onClick={() => setMobile(false)}
                    className={`mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide transition hover:text-[#ee3b3b] ${
                      active ? "text-[#ee3b3b]" : "text-poke-dim"
                    }`}
                  >
                    <GroupIcon group={g.id} className="h-4 w-4" />
                    {g.title}
                    {g.id === "team" && teamCount > 0 && (
                      <span className="rounded-full bg-[#ee3b3b] px-1.5 text-xs font-bold leading-5 text-white">
                        {teamCount}
                      </span>
                    )}
                  </Link>
                  <div className="flex flex-wrap gap-2">
                    {TOOLS.filter((t) => t.group === g.id).map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setMobile(false)}
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition hover:border-[#ee3b3b] hover:text-[#ee3b3b] ${
                          isActive(t.href)
                            ? "border-[#ee3b3b] bg-[#ee3b3b]/10 text-[#ee3b3b]"
                            : "border-poke-border bg-poke-surface text-poke-ink"
                        }`}
                      >
                        {t.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            href="/adventure"
            onClick={() => setMobile(false)}
            className="game-btn game-btn-primary mt-4 block px-4 py-2 text-center text-sm"
          >
            Roll Adventure
          </Link>
        </div>
      )}
    </header>
  );
}
