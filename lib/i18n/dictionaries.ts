import type { Locale } from "./config";
import en from "./dict/en";

/** The dictionary shape — English is the source of truth for keys/types. */
export type Dictionary = typeof en;

const DICTIONARIES: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dict/en").then((m) => m.default),
  es: () => import("./dict/es").then((m) => m.default),
  pt: () => import("./dict/pt").then((m) => m.default),
  de: () => import("./dict/de").then((m) => m.default),
  fr: () => import("./dict/fr").then((m) => m.default),
};

/** Load the UI-string dictionary for a locale (static per-locale imports). */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (DICTIONARIES[locale] ?? DICTIONARIES.en)();
}
