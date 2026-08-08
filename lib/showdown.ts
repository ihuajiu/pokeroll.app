import type { Pokemon } from "./types";
import movesData from "@/data/moves.json";
import itemsData from "@/data/items.json";
import naturesData from "@/data/natures.json";

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

export interface MoveMeta {
  slug: string;
  name: string;
  type: string;
  power: number | null;
  accuracy: number | null;
  priority: number;
  damageClass: string;
  healing: number;
  drain: number;
  isHeal: boolean;
  isHazard: boolean;
  isSetup: boolean;
  setupStats: string[];
  isSpeedControl: boolean;
  isStall: boolean;
  failed?: boolean;
}

export interface ItemMeta {
  slug: string;
  name: string;
  tags: string[];
}

export interface NatureMeta {
  name: string;
  up: "atk" | "def" | "spa" | "spd" | "spe" | null;
  down: "atk" | "def" | "spa" | "spd" | "spe" | null;
}

export interface ShowdownSetOptions {
  level?: 50 | 100;
}

const MOVES = movesData as unknown as Record<string, MoveMeta>;
const ITEMS = itemsData as unknown as ItemMeta[];
const NATURES = naturesData as unknown as NatureMeta[];

/* ------------------------------------------------------------------ */
/*  Species name mapping                                               */
/* ------------------------------------------------------------------ */

const SPECIES_EXCEPTIONS: Record<string, string> = {
  farfetchd: "Farfetch’d",
  sirfetchd: "Sirfetch’d",
  "mr-mime": "Mr. Mime",
  "mr-rime": "Mr. Rime",
  "mime-jr": "Mime Jr.",
  "nidoran-f": "Nidoran-F",
  "nidoran-m": "Nidoran-M",
  "type-null": "Type: Null",
  "porygon-z": "Porygon-Z",
  "ho-oh": "Ho-Oh",
  "jangmo-o": "Jangmo-o",
  "hakamo-o": "Hakamo-o",
  "kommo-o": "Kommo-o",
  flabebe: "Flabébé",
};

function titleCaseSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join("-");
}

function toShowdownBase(slug: string): string {
  return SPECIES_EXCEPTIONS[slug] ?? titleCaseSlug(slug);
}

// Showdown treats these as the species' default form — the suffix is dropped.
const DEFAULT_FORM_SUFFIX = /-(standard|incarnate|ordinary|altered|aria|plant)$/;

/** Map a site Pokémon (incl. regional / mega / gmax forms) to a Showdown species name. */
export function speciesName(pokemon: Pokemon): string {
  const slug = pokemon.name;
  const form = pokemon.form;

  if (form === "gigantamax") {
    const base = slug.replace(/^gigantamax-/, "");
    return `${toShowdownBase(base)}-Gmax`;
  }

  // Drop "-breed" (Tauros Paldea) and default-form suffixes first.
  let s = slug.replace(/-breed$/, "").replace(DEFAULT_FORM_SUFFIX, "");

  // Paldea combat / blaze / aqua.
  const paldea = s.match(/^([a-z0-9]+)-paldea(?:-(combat|blaze|aqua))?$/);
  if (paldea) {
    const extra = paldea[2]
      ? `-${paldea[2].charAt(0).toUpperCase()}${paldea[2].slice(1)}`
      : "";
    return `${toShowdownBase(paldea[1])}-Paldea${extra}`;
  }

  if (form === "mega") {
    if (s.endsWith("-mega-x")) return `${toShowdownBase(s.replace(/-mega-x$/, ""))}-Mega-X`;
    if (s.endsWith("-mega-y")) return `${toShowdownBase(s.replace(/-mega-y$/, ""))}-Mega-Y`;
    if (s.endsWith("-mega")) return `${toShowdownBase(s.replace(/-mega$/, ""))}-Mega`;
  }

  const REGION_SUFFIX: Record<string, string> = {
    alola: "Alola",
    galar: "Galar",
    hisui: "Hisui",
  };
  for (const [suffix, region] of Object.entries(REGION_SUFFIX)) {
    if (s.endsWith(`-${suffix}`)) {
      return `${toShowdownBase(s.slice(0, -suffix.length - 1))}-${region}`;
    }
  }

  return toShowdownBase(s);
}

/* ------------------------------------------------------------------ */
/*  Moves                                                             */
/* ------------------------------------------------------------------ */

const CLASSIC_BONUS = new Set([
  "protect", "substitute", "stealth-rock", "spikes", "toxic-spikes", "sticky-web",
  "earthquake", "rock-slide", "u-turn", "volt-switch", "rapid-spin", "defog",
  "knock-off", "swords-dance", "calm-mind", "dragon-dance", "quiver-dance",
  "shell-smash", "nasty-plot", "bulk-up", "ice-beam", "flamethrower", "fire-blast",
  "thunderbolt", "shadow-ball", "sludge-bomb", "earth-power", "energy-ball",
  "focus-blast", "surf", "hydro-pump", "scald", "leaf-storm", "giga-drain",
  "drain-punch", "recover", "roost", "slack-off", "soft-boiled", "milk-drink",
  "shore-up", "thunder-wave", "will-o-wisp", "toxic", "taunt", "roar", "whirlwind",
  "haze", "encore", "trick", "body-press", "flip-turn", "glare", "nuzzle",
]);

// Moves that are almost always bad in an exported set.
const SELF_KO = new Set([
  "explosion", "self-destruct", "misty-explosion", "final-gambit", "memento",
  "healing-wish", "lunar-dance",
]);
const RECHARGE = new Set([
  "blast-burn", "hydro-cannon", "frenzy-plant", "hyper-beam", "giga-impact",
  "rock-wrecker", "prismatic-laser", "eternabeam", "roar-of-time", "meteor-assault",
]);
const CHARGE_TURN = new Set([
  "solar-beam", "solar-blade", "sky-attack", "meteor-beam", "focus-cannon", "dig",
  "fly", "bounce", "phantom-force", "shadow-force", "dive", "skull-bash",
  "razor-wind", "freeze-shock", "ice-burn",
]);

// True recovery moves (restore HP directly) vs. draining attacks.
const RECOVER_SLUGS = new Set([
  "recover", "roost", "slack-off", "soft-boiled", "milk-drink", "shore-up",
  "synthesis", "moonlight", "morning-sun", "rest", "wish", "lunar-blessing",
  "strength-sap", "life-dew", "jungle-healing", "floral-healing",
]);
export function isRecoverMove(m: MoveMeta): boolean {
  return m.healing > 0 || RECOVER_SLUGS.has(m.slug);
}
export function isDrainMove(m: MoveMeta): boolean {
  return m.drain > 0;
}

export function getMoveMeta(slug: string): MoveMeta | undefined {
  return MOVES[slug];
}

function moveScore(m: MoveMeta, types: string[]): number {
  const power = m.power ?? 0;
  const acc = m.accuracy ?? 100;
  let score = (power * acc) / 100 + m.priority * 30;
  if (isRecoverMove(m)) score += 80;
  if (isDrainMove(m)) score += 35;
  if (m.isHazard) score += 70;
  if (m.isSetup) score += 70;
  if (m.isSpeedControl) score += 60;
  if (m.isStall) score += 50;
  if (CLASSIC_BONUS.has(m.slug)) score += 40;
  if (power >= 90) score += 12;
  if (SELF_KO.has(m.slug)) score -= 80;
  if (RECHARGE.has(m.slug)) score -= 40;
  if (CHARGE_TURN.has(m.slug)) score -= 20;
  if (types.includes(m.type)) score += 25; // STAB
  return score;
}

/** Pick 4 sensible moves: STAB-first, score-based, max 2 of the same type. */
export function pickMoves(pokemon: Pokemon, rng: () => number = Math.random): MoveMeta[] {
  const types = pokemon.types ?? [];
  const available = (pokemon.moveNames ?? [])
    .map((slug) => MOVES[slug])
    .filter((m): m is MoveMeta => !!m && !m.failed);
  if (!available.length) return [];

  const sorted = [...available].sort((a, b) => moveScore(b, types) - moveScore(a, types));
  const picked: MoveMeta[] = [];
  const usedTypes: Record<string, number> = {};

  // First pass: best move of each type for coverage.
  const bestOfType = new Map<string, MoveMeta>();
  let haveStall = false;
  for (const m of sorted) {
    if (bestOfType.has(m.type)) continue;
    if (m.isStall && haveStall) continue;
    if (m.isStall) haveStall = true;
    bestOfType.set(m.type, m);
  }
  for (const m of bestOfType.values()) {
    if (picked.length >= 4) break;
    picked.push(m);
    usedTypes[m.type] = (usedTypes[m.type] ?? 0) + 1;
  }
  // Second pass: fill by score, max 2 of a type, no duplicate stall moves.
  const hasStall = picked.some((p) => p.isStall);
  for (const m of sorted) {
    if (picked.length >= 4) break;
    if (picked.includes(m)) continue;
    if (m.isStall && hasStall) continue;
    if ((usedTypes[m.type] ?? 0) >= 2) continue;
    picked.push(m);
    usedTypes[m.type] = (usedTypes[m.type] ?? 0) + 1;
  }
  // Rare fallback: still short (mono-type mon) — top up by score.
  for (const m of sorted) {
    if (picked.length >= 4) break;
    if (picked.includes(m)) continue;
    if (m.isStall && picked.some((p) => p.isStall)) continue;
    picked.push(m);
  }
  return picked;
}

/* ------------------------------------------------------------------ */
/*  Item                                                              */
/* ------------------------------------------------------------------ */

export function pickItem(
  pokemon: Pokemon,
  moves: MoveMeta[],
  rng: () => number = Math.random,
): ItemMeta | null {
  const abilities = (pokemon.abilities ?? []).map((a) => a.toLowerCase());
  const s = pokemon.stats ?? { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
  const hasHealMove = moves.some((m) => isRecoverMove(m));
  const hasSetup = moves.some((m) => m.isSetup);
  const hasStall = moves.some((m) => m.isStall);
  const isPoison = (pokemon.types ?? []).includes("poison");

  // Black Sludge is only ever offered to Poison types; exclude from generic pools.
  const byTag = (tag: string) => ITEMS.filter((i) => i.tags.includes(tag) && i.slug !== "black-sludge");
  const pick = (arr: ItemMeta[]): ItemMeta | null =>
    arr.length ? arr[Math.floor(rng() * arr.length)] : null;

  if (abilities.includes("sturdy")) {
    return pick(byTag("priority")) ?? pick(byTag("utility"));
  }
  if (isPoison && rng() < 0.5) {
    const sludge = ITEMS.find((i) => i.slug === "black-sludge");
    if (sludge) return sludge;
  }
  // Tanky + recovery -> Leftovers-style healing.
  if (hasHealMove && s.def + s.spd >= 160 && s.hp >= 70) {
    return pick(byTag("heal")) ?? pick(byTag("tank"));
  }
  // Stall sets get recovery.
  if (hasStall && !hasSetup && rng() < 0.5) {
    const heal = pick(byTag("heal"));
    if (heal) return heal;
  }
  // Special attacker.
  if (s.spa > s.atk && s.spa >= 100) {
    return pick([...byTag("spa"), ...byTag("boost")]);
  }
  // Physical attacker.
  if (s.atk >= 100) {
    const band = ITEMS.find((i) => i.slug === "choice-band");
    if (band && rng() < 0.4) return band;
    return pick(byTag("boost"));
  }
  // Fast scarfer occasionally.
  if (s.spe >= 110 && rng() < 0.3) {
    const scarf = ITEMS.find((i) => i.slug === "choice-scarf");
    if (scarf) return scarf;
  }
  // Default pool — heal items only when the set has recovery.
  const pool = [...byTag("boost"), ...byTag("priority")];
  if (hasHealMove) pool.push(...byTag("heal"));
  return pick(pool);
}

/* ------------------------------------------------------------------ */
/*  Nature + EVs                                                      */
/* ------------------------------------------------------------------ */

const STAT_KEYS: (keyof Pokemon["stats"])[] = ["hp", "atk", "def", "spa", "spd", "spe"];

export function pickEVs(pokemon: Pokemon): Record<keyof Pokemon["stats"], number> {
  const s = pokemon.stats ?? { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
  const evs: Record<keyof Pokemon["stats"], number> = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };

  // Standard competitive 252/252/4 spread. HP is normally excluded from the
  // 252s and just takes the leftover 4 — but when HP is the Pokémon's highest
  // base stat (Blissey, Chansey, Wobbuffet, Snorlax…), the community-standard
  // spread invests 252 HP instead.
  const ranked = (Object.keys(s) as (keyof Pokemon["stats"])[]).sort((a, b) => s[b] - s[a]);
  if (ranked[0] === "hp") {
    evs.hp = 252;
    evs[ranked[1]] = 252;
    evs[ranked[2]] = 4;
  } else {
    const candidates = ranked.filter((r) => r !== "hp");
    evs[candidates[0]] = 252;
    evs[candidates[1]] = 252;
    // Leftover 4 EVs go to HP.
    evs.hp = 4;
  }

  return evs;
}

export function pickNature(
  pokemon: Pokemon,
  evs: Record<keyof Pokemon["stats"], number>,
): NatureMeta {
  const s = pokemon.stats ?? { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
  const natureKeys: ("atk" | "def" | "spa" | "spd" | "spe")[] = ["atk", "def", "spa", "spd", "spe"];

  const invested = natureKeys.filter((k) => evs[k] >= 252);
  const up =
    invested.find((k) => k === "spe") ??
    invested.find((k) => k === "atk") ??
    invested.find((k) => k === "spa") ??
    invested[0] ??
    natureKeys.sort((a, b) => s[b] - s[a])[0];

  const down = natureKeys
    .filter((k) => k !== up)
    .sort((a, b) => s[a] - s[b] || evs[a] - evs[b])[0];

  return (
    NATURES.find((n) => n.up === up && n.down === down) ??
    NATURES.find((n) => n.up === null) ??
    NATURES[0]
  );
}

/* ------------------------------------------------------------------ */
/*  Set / team text                                                   */
/* ------------------------------------------------------------------ */

function abilityName(pokemon: Pokemon): string {
  const a = pokemon.abilities?.[0];
  if (a) return a;
  const slug = pokemon.abilityNames?.[0];
  if (slug) {
    return slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  return "No Ability";
}

export function buildShowdownSet(pokemon: Pokemon, opts: ShowdownSetOptions = {}): string {
  const level = opts.level ?? 100;
  const moves = pickMoves(pokemon);
  const item = pickItem(pokemon, moves);
  const evs = pickEVs(pokemon);
  const nature = pickNature(pokemon, evs);
  const name = speciesName(pokemon);
  const gmax = pokemon.form === "gigantamax";

  const lines: string[] = [];
  lines.push(item ? `${name} @ ${item.name}` : name);
  lines.push(`Ability: ${abilityName(pokemon)}`);
  lines.push(`Level: ${level}`);
  if (gmax) lines.push("Gigantamax: Yes");
  const hasEVs = STAT_KEYS.some((k) => evs[k] > 0);
  if (hasEVs) {
    lines.push(
      `EVs: ${evs.hp} HP / ${evs.atk} Atk / ${evs.def} Def / ${evs.spa} SpA / ${evs.spd} SpD / ${evs.spe} Spe`,
    );
  }
  lines.push(`${nature.name} Nature`);
  const moveNames = moves.map((m) => m.name);
  for (let i = 0; i < 4; i++) {
    lines.push(`- ${moveNames[i] ?? "Tackle"}`);
  }
  return lines.join("\n");
}

export function buildShowdownTeam(
  team: Pokemon[],
  opts: ShowdownSetOptions = {},
): string {
  return team.map((p) => buildShowdownSet(p, opts)).join("\n\n");
}
