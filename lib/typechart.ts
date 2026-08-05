// Single source of truth for type effectiveness (Gen 6+ chart, includes
// Fairy and every immunity). For each ATTACK type we list the DEFENSE types
// it hits super-effectively (weak), not very effectively (resist) and
// not at all (immune).

export const TYPE_CHART: Record<
  string,
  { weak: string[]; resist: string[]; immune: string[] }
> = {
  normal: { weak: [], resist: ["rock", "steel"], immune: ["ghost"] },
  fire: { weak: ["grass", "ice", "bug", "steel"], resist: ["fire", "water", "rock", "dragon"], immune: [] },
  water: { weak: ["fire", "ground", "rock"], resist: ["water", "grass", "dragon"], immune: [] },
  electric: { weak: ["water", "flying"], resist: ["electric", "grass", "dragon"], immune: ["ground"] },
  grass: { weak: ["water", "ground", "rock"], resist: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"], immune: [] },
  ice: { weak: ["grass", "ground", "flying", "dragon"], resist: ["fire", "water", "ice", "steel"], immune: [] },
  fighting: { weak: ["normal", "ice", "rock", "dark", "steel"], resist: ["poison", "flying", "psychic", "bug", "fairy"], immune: ["ghost"] },
  poison: { weak: ["grass", "fairy"], resist: ["poison", "ground", "rock", "ghost"], immune: ["steel"] },
  ground: { weak: ["fire", "electric", "poison", "rock", "steel"], resist: ["grass", "bug"], immune: ["flying"] },
  flying: { weak: ["grass", "fighting", "bug"], resist: ["electric", "rock", "steel"], immune: [] },
  psychic: { weak: ["fighting", "poison"], resist: ["psychic", "steel"], immune: ["dark"] },
  bug: { weak: ["grass", "psychic", "dark"], resist: ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"], immune: [] },
  rock: { weak: ["fire", "ice", "flying", "bug"], resist: ["fighting", "ground", "steel"], immune: [] },
  ghost: { weak: ["psychic", "ghost"], resist: ["dark"], immune: ["normal"] },
  dragon: { weak: ["dragon"], resist: ["steel"], immune: ["fairy"] },
  dark: { weak: ["psychic", "ghost"], resist: ["fighting", "dark", "fairy"], immune: [] },
  steel: { weak: ["ice", "rock", "fairy"], resist: ["fire", "water", "electric", "steel"], immune: [] },
  fairy: { weak: ["fighting", "dragon", "dark"], resist: ["fire", "poison", "steel"], immune: [] },
};

export const ALL_TYPES = Object.keys(TYPE_CHART);

/** Effectiveness of an attack type against a single defense type. */
export function typeEffectiveness(attack: string, defense: string): number {
  const t = TYPE_CHART[attack];
  if (!t) return 1;
  if (t.immune.includes(defense)) return 0;
  if (t.resist.includes(defense)) return 0.5;
  if (t.weak.includes(defense)) return 2;
  return 1;
}

/**
 * Combined defensive profile of a Pokémon (or team): for every attack type,
 * the worst multiplier it lands on the given defense types (0 = immune).
 */
export function weaknessesOf(types: string[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const attack of ALL_TYPES) {
    let eff = 1;
    for (const def of types) eff = Math.min(eff, typeEffectiveness(attack, def));
    map.set(attack, eff);
  }
  return map;
}

/** Attack types that hit the given defense types for at least 2x. */
export function superEffectiveAgainst(types: string[]): string[] {
  return ALL_TYPES.filter((a) => {
    const eff = weaknessesOf(types).get(a) ?? 1;
    return eff >= 2;
  });
}

/**
 * How many of the given attack types this Pokémon is not weak to
 * (resists or is immune). Used for the "patch the team weakness" factor.
 */
export function resistCount(types: string[], attacks: string[]): number {
  if (attacks.length === 0 || types.length === 0) return 0;
  const profile = weaknessesOf(types);
  let n = 0;
  for (const a of attacks) {
    const eff = profile.get(a) ?? 1;
    if (eff < 1) n++;
  }
  return n;
}

/**
 * First attack type this Pokémon resists/immune to from the given list,
 * or null. Used to build the "blocks X weakness" reason label.
 */
export function firstResisted(types: string[], attacks: string[]): string | null {
  const profile = weaknessesOf(types);
  for (const a of attacks) {
    const eff = profile.get(a) ?? 1;
    if (eff < 1) return a;
  }
  return null;
}

/**
 * Attack-coverage score: how many "commonly defensive" types this
 * Pokémon hits super-effectively with its own STAB types. A rough proxy
 * for offering the team a new answer on offense.
 */
export const CORE_DEFENSIVE_TYPES = ["steel", "water", "ghost", "dragon", "fairy", "flying"];

export function coverageScore(types: string[]): number {
  let n = 0;
  for (const target of CORE_DEFENSIVE_TYPES) {
    for (const t of types) {
      if (typeEffectiveness(t, target) >= 2) {
        n++;
        break;
      }
    }
  }
  return n;
}
