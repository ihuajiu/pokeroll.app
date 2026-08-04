import { NextRequest } from "next/server";
import {
  getAllPokemon,
  getRandomPokemon,
  getStarters,
  getPoolByGeneration,
  getPoolByRegion,
  getPoolByType,
} from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const gen = searchParams.get("gen");
  const region = searchParams.get("region");
  const type = searchParams.get("type");
  const starter = searchParams.get("starter"); // "1" = starters only
  const legendary = searchParams.get("legendary"); // "1" = only, "0" = exclude
  // Comma-separated dex numbers to exclude (e.g. the user's favorites).
  const excludeRaw = searchParams.get("exclude");
  const excludeSet = excludeRaw
    ? new Set(excludeRaw.split(",").map(Number).filter(Number.isFinite))
    : null;

  try {
    // Pools intersect: gen ∩ region ∩ type ∩ starter ∩ legendary. A single
    // filter behaves as before; combining filters narrows the pool.
    const all = getAllPokemon();
    let pool: number[] | null = null;
    const intersect = (ids: number[]) => {
      pool = pool ? pool.filter((id) => ids.includes(id)) : ids;
    };
    if (gen) intersect(await getPoolByGeneration(Number(gen)));
    if (region) intersect(await getPoolByRegion(region));
    if (type) intersect(await getPoolByType(type));
    if (starter === "1") intersect(getStarters());
    if (legendary === "1" || legendary === "0") {
      const legendaryIds = new Set(
        all.filter((p) => p.isLegendary).map((p) => p.dexNumber),
      );
      if (legendary === "1") {
        intersect([...legendaryIds]);
      } else {
        const base = pool ?? all.map((p) => p.dexNumber);
        pool = base.filter((id) => !legendaryIds.has(id));
      }
    }
    if (excludeSet && excludeSet.size > 0) {
      const base = pool ?? all.map((p) => p.dexNumber);
      pool = base.filter((id) => !excludeSet.has(id));
    }

    if (pool && pool.length === 0) {
      return Response.json(
        { error: "No Pokémon match those filters" },
        { status: 404 },
      );
    }
    const pokemon = await getRandomPokemon(pool ?? undefined);
    return Response.json(pokemon);
  } catch {
    return Response.json({ error: "Failed to generate" }, { status: 500 });
  }
}
