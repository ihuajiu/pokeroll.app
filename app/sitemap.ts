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

// /wheel and /fusion are English-only tool pages (locale URLs 308 to the
// English one), so they're excluded from the translated set even though they
// share the [variant] route.
const TRANSLATED_VARIANTS = VARIANTS.filter(
  (v) => v !== "fusion" && v !== "wheel",
);

// Page groups that exist in every locale. Everything else (team/challenge/
// legal/adventure …) is English-only for now and stays a single entry with
// no alternates.
const TRANSLATED_PATHS = [
  "/",
  "/random-pokemon-generator",
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
    entry("/adventure", false),
    entry("/team", false),
    entry("/team/random", false),
    entry("/team/coach", false),
    entry("/team/challenge", false),
    entry("/challenge/guess", false),
    entry("/challenge/shiny", false),
    entry("/disclaimer", false),
    entry("/privacy", false),
    entry("/terms", false),
    entry("/contact", false),
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
