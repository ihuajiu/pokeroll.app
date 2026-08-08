"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOOLS, TOOL_GROUPS, type ToolMeta } from "@/lib/tools";
import { GroupIcon } from "./ToolIcons";
import LogoMark from "./LogoMark";
import ThemeToggle from "@/components/ThemeToggle";
import TeamTray from "@/components/TeamTray";
import { useFavorites } from "@/components/useFavorites";

// 五分组主导航：每组指向该组的第一个工具页。
// 下拉是数据驱动的——dropdownGroup 指向 lib/tools.ts 里的分组，组内 ≥2 个
// 页面时自动渲染为下拉（加新工具页只需登记 TOOLS），否则退化为直链。
const MAIN: {
  href: string;
  label: string;
  dropdownGroup?: ToolMeta["group"];
}[] = [
  { href: "/adventure", label: "Adventure" },
  { href: "/random-pokemon-generator", label: "Generators", dropdownGroup: "generator" },
  { href: "/team/random", label: "Team", dropdownGroup: "team" },
  { href: "/challenge/guess", label: "Challenges", dropdownGroup: "challenge" },
  { href: "/fusion", label: "Tools", dropdownGroup: "tool" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav({ currentPath = "" }: { currentPath?: string }) {
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();
  const activePath = pathname || currentPath;
  const isActive = (href: string) => activePath === href || activePath === href + "/";
  const { favorites } = useFavorites();

  return (
    <header
      className="sticky top-0 z-30 border-b border-poke-border backdrop-blur-md"
      style={{ background: "var(--header-bg)" }}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-2 px-4 py-3 md:gap-4 md:px-6">
        <Link
          href="/"
          title="PokeRoll home"
          className="brand"
        >
          <LogoMark className="ball" />
          <span>Poke<span className="red">Roll</span></span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-poke-dim md:flex">
          {MAIN.map((m) => {
            const items = m.dropdownGroup
              ? TOOLS.filter((t) => t.group === m.dropdownGroup)
              : [];
            // 大分组（Generators 有 13 项）用双列紧凑布局，避免下拉超出视口。
            const wide = items.length >= 8;
            return items.length >= 2 ? (
              <div key={m.href} className="group relative">
                <Link
                  href={m.href}
                  title={m.label}
                  className={`flex items-center gap-1 transition ${
                    items.some((l) => isActive(l.href))
                      ? "text-[#ee3b3b]"
                      : "text-poke-dim hover:text-[#ee3b3b]"
                  }`}
                >
                  {m.label}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="h-3 w-3 transition group-hover:rotate-180"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full z-40 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div
                    className={`rounded-2xl border border-poke-border bg-poke-surface p-1.5 shadow-xl ${
                      wide ? "grid w-[30rem] grid-cols-2 gap-0.5" : "w-64"
                    }`}
                  >
                    {items.map((l) => {
                      const active = isActive(l.href);
                      return (
                        <Link
                          key={l.href}
                          href={l.href}
                          title={wide ? `${l.label} — ${l.desc}` : l.label}
                          className={`flex items-center rounded-xl transition ${
                            wide ? "gap-2 px-2.5 py-1.5" : "gap-3 px-3 py-2"
                          } ${
                            active
                              ? "bg-[#ee3b3b]/10"
                              : "hover:bg-poke-chip"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`flex shrink-0 items-center justify-center rounded-lg bg-poke-chip ${
                              wide ? "h-6 w-6 text-sm" : "h-8 w-8 text-base"
                            }`}
                          >
                            {l.icon}
                          </span>
                          <span className="flex min-w-0 flex-col">
                            <span
                              className={`font-bold ${
                                wide
                                  ? "truncate text-[13px]"
                                  : "text-sm"
                              } ${
                                active ? "text-[#ee3b3b]" : "text-poke-ink"
                              }`}
                            >
                              {l.label}
                            </span>
                            {!wide && (
                              <span className="truncate text-xs font-normal text-poke-dim">
                                {l.desc}
                              </span>
                            )}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={m.href}
                href={m.href}
                title={m.label}
                className={`flex items-center gap-1.5 transition ${
                  isActive(m.href)
                    ? "text-[#ee3b3b]"
                    : "text-poke-dim hover:text-[#ee3b3b]"
                }`}
              >
                {m.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 md:gap-2">
          <Link
            href="/favorites"
            aria-label={`Favorites (${favorites.length})`}
            title={`Favorites (${favorites.length})`}
            className="game-btn game-btn-ghost fav-entry inline-flex h-9 w-9 items-center justify-center"
          >
            <span className="relative inline-flex">
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
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {favorites.length > 0 && (
                <span className="absolute -right-2.5 -top-1.5 rounded-full bg-[#ee3b3b] px-1 text-[10px] font-bold leading-4 text-white">
                  {favorites.length}
                </span>
              )}
            </span>
          </Link>
          <TeamTray />
          <ThemeToggle />

          <Link
            href="/adventure"
            title="Roll Adventure"
            className="hdr-cta hidden game-btn game-btn-primary px-4 py-2 text-sm sm:inline-flex"
          >
            Roll Adventure
          </Link>

          <button
            type="button"
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobile}
            className="hdr-burger game-btn game-btn-ghost inline-flex h-9 w-9 items-center justify-center md:hidden"
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
                    title={g.title}
                    className={`mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide transition hover:text-[#ee3b3b] ${
                      active ? "text-[#ee3b3b]" : "text-poke-dim"
                    }`}
                  >
                    <GroupIcon group={g.id} className="h-4 w-4" />
                    {g.title}
                  </Link>
                  <div className="flex flex-wrap gap-2">
                    {TOOLS.filter((t) => t.group === g.id).map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setMobile(false)}
                        title={t.label}
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
            title="Roll Adventure"
            className="game-btn game-btn-primary mt-4 w-full px-4 py-2 text-center text-sm"
          >
            Roll Adventure
          </Link>
        </div>
      )}
    </header>
  );
}
