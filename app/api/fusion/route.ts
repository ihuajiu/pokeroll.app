import { getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [a, b] = await Promise.all([getRandomPokemon(), getRandomPokemon()]);
    return Response.json({ a, b });
  } catch {
    return Response.json({ error: "Failed to generate fusion" }, { status: 500 });
  }
}
