"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DEFAULT_LOCALE,
  LOCALE_LABEL,
  LOCALES,
  isLocale,
  pageHref,
  type Locale,
} from "@/lib/i18n/config";
import { useI18n } from "@/components/I18nProvider";

// Header language entry: globe button showing the current locale, click opens
// a dropdown with every language linking to the same page. Click-based (not
// hover) so it works on touch; a document listener closes it on outside tap
// (a fixed overlay won't work — the header's backdrop-filter traps it).
export default function NavLanguageMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const { locale, dict } = useI18n();
  const pathname = usePathname() || "/";
  const seg = pathname.split("/")[1] ?? "";
  const basePath =
    isLocale(seg) && seg !== DEFAULT_LOCALE
      ? pathname.slice(seg.length + 1) || "/"
      : pathname;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={dict.nav.languageAria}
        aria-expanded={open}
        title={dict.nav.languageAria}
        className="game-btn game-btn-ghost inline-flex h-9 items-center justify-center gap-1 px-2"
      >
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
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="text-xs font-bold uppercase">{locale}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 pt-2">
            <div className="w-40 rounded-2xl border border-poke-border bg-poke-surface p-1.5 shadow-xl">
              {LOCALES.map((l: Locale) => {
                const active = l === locale;
                return (
                  <Link
                    key={l}
                    href={pageHref(l, basePath)}
                    hrefLang={l}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-bold transition ${
                      active
                        ? "bg-[#ee3b3b]/10 text-[#ee3b3b]"
                        : "text-poke-ink hover:bg-poke-chip"
                    }`}
                  >
                    {LOCALE_LABEL[l]}
                    {active && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
      )}
    </div>
  );
}
