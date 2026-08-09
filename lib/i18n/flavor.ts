import type { Locale } from "./config";
import type { Adventure } from "../adventure-types";
import flavorEs from "@/data/flavor-es.json";
import flavorDe from "@/data/flavor-de.json";
import flavorFr from "@/data/flavor-fr.json";

/* ------------------------------------------------------------------ */
/*  Localized Pokédex flavor text                                       */
/*                                                                     */
/*  data/flavor-{es,de,fr}.json comes from PokéAPI                     */
/*  pokemon-species.flavor_text_entries (newest game version per       */
/*  language; see scripts/fetch-flavor.mjs). pt has no PokéAPI flavor  */
/*  data and en is the source language, so both keep the English       */
/*  description. Species without an entry (Gen 9 / Hisui — upstream    */
/*  only has English) also fall back to English.                       */
/*                                                                     */
/*  SERVER ONLY: the tables are ~270 KB each — import this module      */
/*  from server components / route handlers only, never from client    */
/*  components (localizedDisplayName in names.ts is the client-side    */
/*  pattern for names; flavor text is localized at the data source).   */
/* ------------------------------------------------------------------ */

type FlavorEntry = { short: string; full: string };

const FLAVOR: Partial<Record<Locale, Record<string, FlavorEntry>>> = {
  es: flavorEs as Record<string, FlavorEntry>,
  de: flavorDe as Record<string, FlavorEntry>,
  fr: flavorFr as Record<string, FlavorEntry>,
};

/**
 * Flavor text for a Pokémon slug in the given locale, or null when the
 * locale has no table (en/pt) or the species has no entry (Gen 9/Hisui).
 */
export function localizedFlavor(name: string, locale: Locale): FlavorEntry | null {
  return FLAVOR[locale]?.[name] ?? null;
}

/**
 * Returns `p` with description/descriptionFull replaced by the localized
 * flavor text. en/pt and missing entries return the object unchanged.
 */
export function withLocalizedFlavor<
  T extends { name: string; description?: string; descriptionFull?: string },
>(p: T, locale: Locale): T {
  const f = localizedFlavor(p.name, locale);
  if (!f) return p;
  return { ...p, description: f.short, descriptionFull: f.full };
}

/**
 * Adventure payloads nest Pokémon in several slots (starter, team, rival,
 * legendary) — localize them all in one pass.
 */
export function withLocalizedAdventure(a: Adventure, locale: Locale): Adventure {
  return {
    ...a,
    starter: withLocalizedFlavor(a.starter, locale),
    team: a.team.map((p) => withLocalizedFlavor(p, locale)),
    rival: { ...a.rival, starter: withLocalizedFlavor(a.rival.starter, locale) },
    legendary: {
      ...a.legendary,
      pokemon: withLocalizedFlavor(a.legendary.pokemon, locale),
    },
  };
}
