import { getRandomPokemon } from "@/lib/pokeapi";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { withLocalizedFlavor } from "@/lib/i18n/flavor";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const localeRaw = new URL(req.url).searchParams.get("locale");
  const locale: Locale = localeRaw && isLocale(localeRaw) ? localeRaw : "en";
  try {
    const items = await Promise.all(
      Array.from({ length: 8 }, () => getRandomPokemon()),
    );
    return Response.json({
      items: items.map((p) => withLocalizedFlavor(p, locale)),
    });
  } catch {
    return Response.json({ error: "Failed to spin wheel" }, { status: 500 });
  }
}
