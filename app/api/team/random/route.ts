import { NextRequest } from "next/server";
import { getRandomTeam } from "@/lib/team";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { withLocalizedFlavor } from "@/lib/i18n/flavor";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const localeRaw = searchParams.get("locale");
  const locale: Locale = localeRaw && isLocale(localeRaw) ? localeRaw : "en";

  const result = await getRandomTeam({
    region: searchParams.get("region") || undefined,
    type: searchParams.get("type") || undefined,
    gen: searchParams.get("gen") || undefined,
    count: searchParams.get("count") || undefined,
    difficulty: searchParams.get("difficulty") || undefined,
    seed: searchParams.get("seed") || undefined,
  });

  return Response.json({
    ...result,
    pokemon: result.pokemon.map((p) => withLocalizedFlavor(p, locale)),
  });
}
