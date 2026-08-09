import { completeTeam } from "@/lib/teamCoach";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { withLocalizedFlavor } from "@/lib/i18n/flavor";

export const dynamic = "force-dynamic";

function nums(raw: string | null): number[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((s) => Number(s.trim()))
    .filter((n) => !Number.isNaN(n) && n > 0);
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const locked = nums(url.searchParams.get("locked"));
  const keep = nums(url.searchParams.get("keep"));
  const count = Number(url.searchParams.get("count")) || 6;
  const gen = url.searchParams.get("gen") || undefined;
  const region = url.searchParams.get("region") || undefined;
  const type = url.searchParams.get("type") || undefined;
  const seed = url.searchParams.get("seed") || undefined;
  const localeRaw = url.searchParams.get("locale");
  const locale: Locale = localeRaw && isLocale(localeRaw) ? localeRaw : "en";

  try {
    const result = await completeTeam({ locked, keep, count, gen, region, type, seed });
    return Response.json({
      ...result,
      team: result.team.map((p) => withLocalizedFlavor(p, locale)),
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "failed";
    return Response.json({ error: msg }, { status: 400 });
  }
}
