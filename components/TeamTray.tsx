"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { useTeam } from "./useTeam";
import LocalizedLink from "./LocalizedLink";
import { useI18n } from "./I18nProvider";

// Header entry for the current team: icon button with a live count badge,
// opening a small tray that lists the selected members and links to /team.
export default function TeamTray() {
  const { team, max } = useTeam();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { dict } = useI18n();
  const t = dict.teamTray;

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.ariaLabel
          .replace("{count}", String(team.length))
          .replace("{max}", String(max))}
        aria-expanded={open}
        title={t.title}
        className="game-btn game-btn-ghost fav-entry inline-flex h-9 w-9 items-center justify-center"
      >
        <span className="relative inline-flex">
          {/* Two-person (team) icon + live count badge */}
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
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          {team.length > 0 && (
            <span className="absolute -right-2.5 -top-1.5 rounded-full bg-[#ee3b3b] px-1 text-[10px] font-bold leading-4 text-white">
              {team.length}
            </span>
          )}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-40 w-64 rounded-xl border border-poke-border bg-poke-surface p-3 shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wide text-poke-dim">
              {t.heading}
            </span>
            <span className="text-xs font-semibold text-poke-dim">
              {team.length}/{max}
            </span>
          </div>
          {team.length === 0 ? (
            <p className="py-3 text-center text-sm text-poke-dim">
              {t.empty}
            </p>
          ) : (
            <ul className="space-y-1">
              {team.map((p) => (
                <li key={p.dexNumber}>
                  <LocalizedLink
                    href="/team" title={dict.common.viewYourTeam}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-poke-bg"
                  >
                    <img
                      src={p.sprite}
                      alt={p.displayName}
                      className="h-8 w-8"
                      loading="lazy"
                    />
                    <span className="text-sm font-medium text-poke-ink">
                      {p.displayName}
                    </span>
                    <span className="ml-auto text-xs text-poke-dim">
                      #{p.dexNumber}
                    </span>
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          )}
          <LocalizedLink
            href="/team" title={dict.common.viewYourTeam}
            onClick={() => setOpen(false)}
            className="mt-2 inline-block w-full rounded-lg border border-poke-border px-3 py-1.5 text-center text-xs font-semibold text-poke-ink transition hover:border-[#ee3b3b] hover:text-[#ee3b3b]"
          >
            {team.length === 0 ? t.buildTeam : t.openTeam}
          </LocalizedLink>
        </div>
      )}
    </div>
  );
}
