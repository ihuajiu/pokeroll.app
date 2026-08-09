import { getPokemonById } from "@/lib/pokeapi";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { withLocalizedFlavor } from "@/lib/i18n/flavor";

export const dynamic = "force-dynamic";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  const localeRaw = new URL(req.url).searchParams.get("locale");
  const locale: Locale = localeRaw && isLocale(localeRaw) ? localeRaw : "en";
  // Numeric paths (e.g. /api/pokemon/25) resolve by Pokédex number;
  // anything else is looked up by name/slug.
  const id = /^\d+$/.test(name) ? Number(name) : name;
  try {
    return Response.json(withLocalizedFlavor(await getPokemonById(id), locale));
  } catch {
    return Response.json({ error: "Pokémon not found" }, { status: 404 });
  }
}
