/* ------------------------------------------------------------------ */
/*  Locale configuration — single source of truth for i18n             */
/*                                                                     */
/*  English stays URL-clean (no /en/ prefix): middleware rewrites      */
/*  unprefixed paths to /en/... internally. Other locales carry a      */
/*  path prefix (/es/..., /de/..., ...).                                */
/* ------------------------------------------------------------------ */

export const LOCALES = ["en", "es", "pt", "de", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Locales that carry a path prefix. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export function isLocale(s: string): s is Locale {
  return (LOCALES as readonly string[]).includes(s);
}

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  pt: "pt_BR",
  de: "de_DE",
  fr: "fr_FR",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  de: "Deutsch",
  fr: "Français",
};

// Pages not yet translated — a locale-prefixed visit (e.g. /es/random-pokemon)
// 308s to the English URL (middleware), and pageHref keeps their links
// unprefixed so users don't bounce through that redirect.
export const UNTRANSLATED_PREFIXES = [
  // English-only synonym landers — they exist to rank for English synonym
  // keywords, a locale version has no search purpose.
  "/random-pokemon",
  "/random-pokemon-picker",
  "/pokemon-randomizer",
];

/** True when a page path is (or is under) an untranslated prefix. */
export function isUntranslatedPath(path: string): boolean {
  const p = path.startsWith("/") ? path : `/${path}`;
  return UNTRANSLATED_PREFIXES.some(
    (prefix) => p === prefix || p.startsWith(`${prefix}/`),
  );
}

/** Locale-prefixed path for a page path like "/type/fire". English stays unprefixed. */
export function localePath(locale: Locale, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? p : `/${locale}${p === "/" ? "" : p}`;
}

/** hreflang map for a page path — every locale plus x-default (English). */
export function languageAlternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of LOCALES) out[l] = localePath(l, path);
  out["x-default"] = localePath(DEFAULT_LOCALE, path);
  return out;
}

/**
 * Internal-link href for a page path: like localePath, but untranslated
 * pages stay unprefixed (their locale URLs 308 to English anyway, so linking
 * there directly avoids a pointless redirect hop).
 */
export function pageHref(locale: Locale, path: string): string {
  if (isUntranslatedPath(path)) return path.startsWith("/") ? path : `/${path}`;
  return localePath(locale, path);
}
