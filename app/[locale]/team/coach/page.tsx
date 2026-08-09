import type { Metadata } from "next";
import TeamCoach from "@/components/TeamCoach";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { completeTeam } from "@/lib/teamCoach";
import { getPokemonByIdLocal } from "@/lib/pokedex";
import type { Pokemon } from "@/lib/types";
import { localizeToolGroups, localizeTools } from "@/lib/tools";
import {
  isLocale,
  languageAlternates,
  localePath,
  pageHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocalizedFlavor } from "@/lib/i18n/flavor";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.teamCoach;
  const path = "/team/coach";
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: {
      canonical: localePath(locale, path),
      languages: languageAlternates(path),
    },
  };
}

type SP = Record<string, string | string[] | undefined>;
const get = (sp: SP, k: string) =>
  Array.isArray(sp[k]) ? (sp[k] as string[])[0] : (sp[k] as string | undefined);

export default async function TeamCoachPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<SP>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.teamCoach;
  const sp = await searchParams;
  const lockedRaw = get(sp, "locked") || "";
  const locked = lockedRaw
    .split(",")
    .map((s) => Number(s.trim()))
    .filter((n) => !Number.isNaN(n) && n > 0);
  const count = Math.min(6, Math.max(3, Number(get(sp, "count")) || 6));
  const gen = get(sp, "gen");
  const region = get(sp, "region");
  const type = get(sp, "type");
  const seed = get(sp, "seed");

  const initialLocked = locked
    .map((d) => getPokemonByIdLocal(d))
    .filter((p): p is Pokemon => !!p)
    .map((p) => withLocalizedFlavor(p, locale));

  // Shared link carries the full result (picks + reasons), so the viewer
  // sees exactly what the sharer saw — no recompute drift after re-rolls.
  const picksRaw = get(sp, "picks") || "";
  const picks = picksRaw
    .split(",")
    .map((s) => Number(s.trim()))
    .filter((n) => !Number.isNaN(n) && n > 0);
  const reasonsRaw = get(sp, "r") || "";
  let initial: Awaited<ReturnType<typeof completeTeam>> | null = null;
  if (picks.length > 0) {
    const parts = reasonsRaw.split("|");
    const reasons: Record<number, string> = {};
    picks.forEach((d, i) => {
      if (parts[i]) reasons[d] = parts[i];
    });
    const pickPokes = picks
      .map((d) => getPokemonByIdLocal(d))
      .filter((p): p is Pokemon => !!p)
      .map((p) => withLocalizedFlavor(p, locale));
    if (pickPokes.length > 0) {
      initial = { seed: seed || "", team: [...initialLocked, ...pickPokes], reasons };
    }
  } else if (initialLocked.length > 0 && initialLocked.length < count) {
    try {
      initial = await completeTeam({ locked, keep: [], count, gen, region, type, seed });
    } catch {
      initial = null;
    }
  }
  if (initial) {
    initial = {
      ...initial,
      team: initial.team.map((p) => withLocalizedFlavor(p, locale)),
    };
  }

  const TOOLS = localizeTools(dict);
  const TOOL_GROUPS = localizeToolGroups(dict);
  const tool = TOOLS.find((t) => t.href === "/team/coach");
  const group = TOOL_GROUPS.find((g) => g.id === tool?.group);

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: dict.common.home, href: pageHref(locale, "/") },
          ...(group
            ? [{ label: group.title, href: pageHref(locale, "/team") }]
            : []),
          { label: tool?.label ?? d.breadcrumbLabel },
        ]}
      />
      <PageHeader
        title={d.headerTitle}
        description={d.headerDesc}
      />

      <TeamCoach initial={initial} initialLocked={initialLocked} />

      <FaqSection items={d.faqs} locale={locale} />
      <RelatedTools current="/team/coach" locale={locale} />
    </main>
  );
}
