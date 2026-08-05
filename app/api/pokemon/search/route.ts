import { getAllPokemon } from "@/lib/pokedex";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = (url.searchParams.get("q") || "").trim().toLowerCase();
  if (!q) return Response.json({ results: [] });
  const all = getAllPokemon();
  const results = all
    .filter(
      (p) =>
        p.displayName.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        String(p.dexNumber) === q,
    )
    .slice(0, 8)
    .map((p) => ({
      dexNumber: p.dexNumber,
      name: p.name,
      displayName: p.displayName,
      types: p.types,
      img: p.artwork || p.sprite,
    }));
  return Response.json({ results });
}
