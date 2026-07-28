import { NextRequest } from "next/server";
import { getRandomPokemon, getStarters, getPoolByGeneration, getPoolByRegion, getPoolByType } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const gen = searchParams.get("gen");
  const region = searchParams.get("region");
  const type = searchParams.get("type");
  const starter = searchParams.get("starter");

  try {
    let pool: number[] | undefined;
    if (starter === "1") {
      pool = getStarters();
    } else if (gen) {
      pool = await getPoolByGeneration(Number(gen));
    } else if (region) {
      pool = await getPoolByRegion(region);
    } else if (type) {
      pool = await getPoolByType(type);
    }
    const pokemon = await getRandomPokemon(pool);
    return Response.json(pokemon);
  } catch (e) {
    return Response.json({ error: "Failed to generate" }, { status: 500 });
  }
}
