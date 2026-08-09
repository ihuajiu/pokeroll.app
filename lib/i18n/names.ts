import type { Locale } from "./config";
import namesDe from "@/data/names-de.json";
import namesFr from "@/data/names-fr.json";
import abilitiesEs from "@/data/abilities-es.json";
import abilitiesDe from "@/data/abilities-de.json";
import abilitiesFr from "@/data/abilities-fr.json";

/* ------------------------------------------------------------------ */
/*  Localized Pokémon terminology                                       */
/*                                                                     */
/*  Type names are official localized terms (game UI). Region names    */
/*  (Kanto, Johto…) are identical across en/es/pt/de/fr — no table.    */
/*  Pokémon species names: es/pt use English names; de/fr localized    */
/*  names come from data/names-{de,fr}.json (fallback = English).      */
/* ------------------------------------------------------------------ */

const LOCALIZED_NAMES: Partial<Record<Locale, Record<string, string>>> = {
  de: namesDe as Record<string, string>,
  fr: namesFr as Record<string, string>,
};

/**
 * Display name for a Pokémon in the given locale. es/pt species names are
 * identical to English, so only de/fr consult the tables; anything missing
 * falls back to the English displayName.
 */
export function localizedDisplayName(
  pokemon: { name: string; displayName: string },
  locale: Locale,
): string {
  return LOCALIZED_NAMES[locale]?.[pokemon.name] ?? pokemon.displayName;
}

/* Ability display names: es/de/fr have official game-localized terms in
 * data/abilities-{es,de,fr}.json (keyed by slug, each entry keeps the English
 * display name); pt has no official localization, so pt/en keep English. */
type AbilityEntry = { en: string; name: string };

function buildAbilityIndex(table: Record<string, AbilityEntry>) {
  const byEn: Record<string, string> = {};
  for (const [slug, v] of Object.entries(table)) {
    byEn[v.en] = v.name;
    // Also index the slug so API values ("unaware") resolve too.
    byEn[slug] = v.name;
  }
  return byEn;
}

const LOCALIZED_ABILITIES: Partial<Record<Locale, Record<string, string>>> = {
  es: buildAbilityIndex(abilitiesEs as Record<string, AbilityEntry>),
  de: buildAbilityIndex(abilitiesDe as Record<string, AbilityEntry>),
  fr: buildAbilityIndex(abilitiesFr as Record<string, AbilityEntry>),
};

/**
 * Localized ability display name. Accepts either the English display string
 * ("Flame Body", carried by Pokemon.abilities) or the slug ("flame-body",
 * returned by /api/variant); anything missing falls back to the input.
 */
export function localizedAbility(englishOrSlug: string, locale: Locale): string {
  return LOCALIZED_ABILITIES[locale]?.[englishOrSlug] ?? englishOrSlug;
}

export const TYPE_NAMES: Record<Locale, Record<string, string>> = {
  en: {
    normal: "Normal", fire: "Fire", water: "Water", electric: "Electric",
    grass: "Grass", ice: "Ice", fighting: "Fighting", poison: "Poison",
    ground: "Ground", flying: "Flying", psychic: "Psychic", bug: "Bug",
    rock: "Rock", ghost: "Ghost", dragon: "Dragon", dark: "Dark",
    steel: "Steel", fairy: "Fairy",
  },
  es: {
    normal: "Normal", fire: "Fuego", water: "Agua", electric: "Eléctrico",
    grass: "Planta", ice: "Hielo", fighting: "Lucha", poison: "Veneno",
    ground: "Tierra", flying: "Volador", psychic: "Psíquico", bug: "Bicho",
    rock: "Roca", ghost: "Fantasma", dragon: "Dragón", dark: "Siniestro",
    steel: "Acero", fairy: "Hada",
  },
  pt: {
    normal: "Normal", fire: "Fogo", water: "Água", electric: "Elétrico",
    grass: "Planta", ice: "Gelo", fighting: "Lutador", poison: "Venenoso",
    ground: "Terrestre", flying: "Voador", psychic: "Psíquico", bug: "Inseto",
    rock: "Pedra", ghost: "Fantasma", dragon: "Dragão", dark: "Sombrio",
    steel: "Aço", fairy: "Fada",
  },
  de: {
    normal: "Normal", fire: "Feuer", water: "Wasser", electric: "Elektro",
    grass: "Pflanze", ice: "Eis", fighting: "Kampf", poison: "Gift",
    ground: "Boden", flying: "Flug", psychic: "Psycho", bug: "Käfer",
    rock: "Gestein", ghost: "Geist", dragon: "Drache", dark: "Unlicht",
    steel: "Stahl", fairy: "Fee",
  },
  fr: {
    normal: "Normal", fire: "Feu", water: "Eau", electric: "Électrik",
    grass: "Plante", ice: "Glace", fighting: "Combat", poison: "Poison",
    ground: "Sol", flying: "Vol", psychic: "Psy", bug: "Insecte",
    rock: "Roche", ghost: "Spectre", dragon: "Dragon", dark: "Ténèbres",
    steel: "Acier", fairy: "Fée",
  },
};

/** Localized display name for a type slug ("fire" → "Fuego" in es). */
export function typeName(slug: string, locale: Locale): string {
  return TYPE_NAMES[locale][slug] ?? TYPE_NAMES.en[slug] ?? slug;
}

const GEN_WORD: Record<Locale, string> = {
  en: "Generation",
  es: "Generación",
  pt: "Geração",
  de: "Generation",
  fr: "Génération",
};

/** "Generation 4" → "Generación 4" (es) etc. */
export function genLabel(gen: number, locale: Locale): string {
  return `${GEN_WORD[locale]} ${gen}`;
}
