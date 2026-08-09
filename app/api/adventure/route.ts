import { NextRequest } from "next/server";
import { rollAdventure } from "@/lib/adventure";
import { randomSeed } from "@/lib/adventure-types";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { withLocalizedAdventure } from "@/lib/i18n/flavor";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const params = new URL(req.url).searchParams;
  const seed = params.get("seed") || randomSeed();
  const difficulty = params.get("difficulty") || undefined;
  const localeRaw = params.get("locale");
  const locale: Locale = localeRaw && isLocale(localeRaw) ? localeRaw : "en";
  try {
    const adventure = await rollAdventure(seed, difficulty ?? undefined);
    return Response.json(withLocalizedAdventure(adventure, locale));
  } catch (e) {
    return Response.json({ error: "Failed to roll adventure" }, { status: 500 });
  }
}
