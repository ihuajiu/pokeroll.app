import { NextRequest } from "next/server";
import { getVariant } from "@/lib/pokeapi";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { withLocalizedFlavor } from "@/lib/i18n/flavor";

export const dynamic = "force-dynamic";

const ALLOWED = new Set([
  "type", "ability", "move", "bst", "number",
  "starter", "shiny", "no-names",
  "cute", "mythical", "mega", "nickname",
]);

export async function GET(req: NextRequest) {
  const kind = req.nextUrl.searchParams.get("kind") ?? "type";
  const safeKind = ALLOWED.has(kind) ? kind : "type";
  const localeRaw = req.nextUrl.searchParams.get("locale");
  const locale: Locale = localeRaw && isLocale(localeRaw) ? localeRaw : "en";
  try {
    const result = await getVariant(safeKind);
    return Response.json({
      ...result,
      pokemon: withLocalizedFlavor(result.pokemon, locale),
    });
  } catch {
    return Response.json({ error: "Failed to generate variant" }, { status: 500 });
  }
}
