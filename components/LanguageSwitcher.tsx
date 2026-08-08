"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DEFAULT_LOCALE,
  LOCALE_LABEL,
  LOCALES,
  isLocale,
  pageHref,
} from "@/lib/i18n/config";
import { useI18n } from "@/components/I18nProvider";

// Footer language switcher: one link per locale to the same page in that
// language. On untranslated pages the non-English links 308 to the English
// URL (middleware) — acceptable, no special-casing.
export default function LanguageSwitcher() {
  const { locale } = useI18n();
  const pathname = usePathname() || "/";
  const seg = pathname.split("/")[1] ?? "";
  // Strip a leading locale segment to get the locale-neutral base path.
  const basePath =
    isLocale(seg) && seg !== DEFAULT_LOCALE
      ? pathname.slice(seg.length + 1) || "/"
      : pathname;

  return (
    <nav aria-label="Language" className="foot-lang">
      {LOCALES.map((l, i) => (
        <span key={l}>
          {i > 0 && (
            <span className="foot-lang-dot" aria-hidden="true">
              ·
            </span>
          )}
          <Link
            href={pageHref(l, basePath)}
            hrefLang={l}
            aria-current={l === locale ? "page" : undefined}
            className={l === locale ? "foot-lang-active" : undefined}
          >
            {LOCALE_LABEL[l]}
          </Link>
        </span>
      ))}
    </nav>
  );
}
