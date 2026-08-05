import { getPokemonById } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  // Numeric paths (e.g. /api/pokemon/25) resolve by Pokédex number;
  // anything else is looked up by name/slug.
  const id = /^\d+$/.test(name) ? Number(name) : name;
  try {
    return Response.json(await getPokemonById(id));
  } catch {
    return Response.json({ error: "Pokémon not found" }, { status: 404 });
  }
}
