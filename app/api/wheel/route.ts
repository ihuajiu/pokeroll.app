import { getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const items = await Promise.all(
      Array.from({ length: 8 }, () => getRandomPokemon()),
    );
    return Response.json({ items });
  } catch {
    return Response.json({ error: "Failed to spin wheel" }, { status: 500 });
  }
}
