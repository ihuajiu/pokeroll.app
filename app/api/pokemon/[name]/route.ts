import { getPokemonById } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  try {
    return Response.json(await getPokemonById(name));
  } catch {
    return Response.json({ error: "Pokémon not found" }, { status: 404 });
  }
}
