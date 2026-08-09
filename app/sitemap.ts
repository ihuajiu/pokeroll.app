import type { MetadataRoute } from "next";
import { REGIONS, TYPES, GENS } from "@/lib/seo";
import { LOCALES, DEFAULT_LOCALE, localePath, type Locale } from "@/lib/i18n/config";

const BASE = process.env.SITE_URL ?? "https://pokeroll.app";

const VARIANTS = [
  "type",
  "ability",
  "move",
  "bst",
  "number",
  "starter",
  "no-names",
  "cute",
  "mythical",
  "legendary",
  "mega",
  "nickname",
  "fusion",
  "wheel",
];

// All variant pages exist in every locale (M3 localized wheel/fusion too).
const TRANSLATED_VARIANTS = VARIANTS;

// Page groups that exist in every locale. Only the English-only synonym
// landers (/random-pokemon, /random-pokemon-picker, /pokemon-randomizer)
// stay single entries with no alternates.
const TRANSLATED_PATHS = [
  "/",
  "/random-pokemon-generator",
  "/adventure",
  "/team",
  "/team/random",
  "/team/coach",
  "/team/challenge",
  "/challenge/guess",
  "/challenge/shiny",
  "/favorites",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
  ...TRANSLATED_VARIANTS.map((v) => `/${v}`),
  ...REGIONS.map((r) => `/by/${r}`),
  ...TYPES.map((t) => `/type/${t}`),
  ...GENS.map((g) => `/gen/${g}`),
];

/** hreflang alternates for one path: every locale (absolute) + x-default. */
function alternatesFor(path: string): { languages: Record<string, string> } {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${BASE}${localePath(l, path)}`;
  languages["x-default"] = `${BASE}${localePath(DEFAULT_LOCALE, path)}`;
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const entry = (path: string, translated: boolean) => ({
    url: `${BASE}${path}`,
    lastModified: today,
    ...(translated ? { alternates: alternatesFor(path) } : {}),
  });

  const staticPages = [
    entry("/", true),
    entry("/random-pokemon-generator", true),
    entry("/adventure", true),
    entry("/team", true),
    entry("/team/random", true),
    entry("/team/coach", true),
    entry("/team/challenge", true),
    entry("/challenge/guess", true),
    entry("/challenge/shiny", true),
    entry("/favorites", true),
    entry("/disclaimer", true),
    entry("/privacy", true),
    entry("/terms", true),
    entry("/contact", true),
    // English-only synonym landers — no locale copies, no alternates.
    entry("/random-pokemon", false),
    entry("/random-pokemon-picker", false),
    entry("/pokemon-randomizer", false),
  ];

  const variantPages = VARIANTS.map((v) =>
    entry(`/${v}`, TRANSLATED_VARIANTS.includes(v)),
  );

  const regionPages = REGIONS.map((r) => entry(`/by/${r}`, true));

  const typePages = TYPES.map((t) => entry(`/type/${t}`, true));

  const genPages = GENS.map((g) => entry(`/gen/${g}`, true));

  // Per-locale copies of the translated pages (English stays unprefixed and
  // is already listed above). Same alternates block as the English entry.
  const localePages = LOCALES.filter((l) => l !== DEFAULT_LOCALE).flatMap(
    (l: Locale) =>
      TRANSLATED_PATHS.map((path) => ({
        url: `${BASE}${localePath(l, path)}`,
        lastModified: today,
        alternates: alternatesFor(path),
      })),
  );

  return [
    ...staticPages,
    ...variantPages,
    ...regionPages,
    ...typePages,
    ...genPages,
    ...localePages,
  ];
}
