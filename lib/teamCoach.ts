import { getAllPokemon, getPokemonByIdLocal } from "./pokedex";
import type { Pokemon } from "./types";
import { hashSeed, mulberry32 } from "./challenge";
import {
  coverageScore,
  firstResisted,
  resistCount,
  weaknessesOf,
} from "./typechart";

export interface TeamCoachOptions {
  /** Dex numbers the user picked and wants to keep (locked). */
  locked: number[];
  /** Dex numbers of already-generated picks to preserve (single-slot re-roll). */
  keep: number[];
  /** Target team size (3-6). */
  count: number;
  gen?: string;
  region?: string;
  type?: string;
  seed?: string;
}

export interface TeamCoachResult {
  seed: string;
  team: Pokemon[];
  /** Reason label per newly-added dex number. */
  reasons: Record<number, string>;
}

/** Score weights — tune here. */
const W = {
  typeDup: 6, // penalty per duplicated primary type
  resist: 10, // per team weakness this candidate blocks
  coverage: 4, // per new attack-coverage target
  role: 7, // fills a missing role
};

type Role = "speed" | "bulk" | "phys" | "spec" | "balanced";

function roleOf(p: Pokemon): Role {
  const s = p.stats;
  if (s.spe >= 105) return "speed";
  if ((s.def + s.spd) / 2 >= 95) return "bulk";
  if (s.atk >= 100 && s.atk >= s.spa) return "phys";
  if (s.spa >= 100) return "spec";
  return "balanced";
}

const ROLE_LABEL: Record<Role, string> = {
  speed: "🚀 Fast attacker",
  bulk: "🛡 Tanky",
  phys: "⚔️ Physical attacker",
  spec: "✨ Special attacker",
  balanced: "⚖️ Balanced",
};

function rolePresent(roles: Role[], r: Role): boolean {
  return roles.some((x) => x === r);
}

function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function randomSeed(): string {
  return Math.random().toString(36).slice(2, 10);
}

/** Pick one candidate from the pool, weighted by score vs the current team. */
function pickWeighted(
  pool: Pokemon[],
  teamTypes: string[],
  teamWeakAttacks: string[],
  teamRoles: Role[],
  rng: () => number,
): Pokemon {
  const scored = pool.map((p) => {
    const dup = p.types.filter((t) => teamTypes.includes(t)).length;
    const resist = resistCount(p.types, teamWeakAttacks);
    const cov = coverageScore(p.types);
    const role = roleOf(p);
    const roleNeed = rolePresent(teamRoles, role) ? 0 : 1;
    const score =
      -W.typeDup * dup + W.resist * resist + W.coverage * cov + W.role * roleNeed;
    return { p, score };
  });
  // Weighted random: shift scores positive + a base so weaker candidates
  // still have a chance — keeps the roll feeling like a roll, not an oracle.
  const min = Math.min(...scored.map((s) => s.score));
  const weighted = scored.map((s) => ({ p: s.p, w: Math.max(0.2, s.score - min + 1) }));
  const total = weighted.reduce((a, b) => a + b.w, 0);
  let r = rng() * total;
  for (const c of weighted) {
    r -= c.w;
    if (r <= 0) return c.p;
  }
  return weighted[weighted.length - 1].p;
}

function reasonOf(
  p: Pokemon,
  teamTypes: string[],
  teamWeakAttacks: string[],
  teamRoles: Role[],
): string {
  const blocked = firstResisted(p.types, teamWeakAttacks);
  if (blocked) return `🛡 Blocks ${titleCase(blocked)} weakness`;
  const role = roleOf(p);
  if (!rolePresent(teamRoles, role)) return ROLE_LABEL[role];
  if (coverageScore(p.types) >= 1) return "🎯 New coverage";
  return "⚖️ Fills a slot";
}

/**
 * Complete a partial team. Deterministic for the same locked + keep +
 * filters + seed, so results can be shared and reproduced from a link.
 */
export async function completeTeam(opts: TeamCoachOptions): Promise<TeamCoachResult> {
  const { locked, keep, count: countRaw, gen, region, type, seed } = opts;
  const count = Math.min(6, Math.max(3, countRaw || 6));
  const base = [...new Set([...locked, ...keep])];
  if (base.length >= count) throw new Error("locked-count"); // need >=1 free slot
  const seedStr = seed || randomSeed();
  const rng = mulberry32(hashSeed(seedStr));
  rng(); // mix once

  const all = getAllPokemon();
  const exclude = new Set(base);
  let pool = all.filter((p) => {
    if (exclude.has(p.dexNumber)) return false;
    if (gen) {
      const n = Number(gen);
      if (!Number.isNaN(n) && p.generation !== n) return false;
    }
    if (region && p.region.toLowerCase() !== region.toLowerCase()) return false;
    if (type && !p.types.includes(type)) return false;
    return true;
  });

  const basePokes = base
    .map((d) => getPokemonByIdLocal(d))
    .filter((p): p is Pokemon => !!p);

  // Relax if the filtered pool is too small: drop filters first (still
  // exclude the base picks). The full dex is large enough to fill from.
  if (pool.length < count - base.length) {
    pool = all.filter((p) => !exclude.has(p.dexNumber));
  }
  if (pool.length === 0) throw new Error("empty-pool");

  const team = [...basePokes];
  const reasons: Record<number, string> = {};
  const need = count - team.length;
  for (let i = 0; i < need; i++) {
    const teamTypes = team.flatMap((p) => p.types);
    const weakMap = weaknessesOf(teamTypes);
    const teamWeakAttacks = Array.from(weakMap.entries())
      .filter(([, eff]) => eff > 1)
      .map(([a]) => a);
    const teamRoles = team.map((p) => roleOf(p));
    const cand = pickWeighted(pool, teamTypes, teamWeakAttacks, teamRoles, rng);
    reasons[cand.dexNumber] = reasonOf(cand, teamTypes, teamWeakAttacks, teamRoles);
    team.push(cand);
    pool = pool.filter((p) => p.dexNumber !== cand.dexNumber);
  }

  return { seed: seedStr, team, reasons };
}
