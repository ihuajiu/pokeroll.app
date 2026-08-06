import type { Metadata } from "next";
import TeamCoach from "@/components/TeamCoach";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { completeTeam } from "@/lib/teamCoach";
import { getPokemonByIdLocal } from "@/lib/pokedex";
import type { Pokemon } from "@/lib/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Team Coach — Fill the Rest of Your Team",
  description:
    "Lock the Pokémon you already picked and let Team Coach fill the rest with type coverage and balanced roles — then copy the team to Showdown. Free fan-made tool.",
  keywords: [
    "pokemon team builder",
    "pokemon team filler",
    "pokemon team coach",
    "auto team builder pokemon",
  ],
  alternates: { canonical: "/team/coach" },
};

type SP = Record<string, string | string[] | undefined>;
const get = (sp: SP, k: string) =>
  Array.isArray(sp[k]) ? (sp[k] as string[])[0] : (sp[k] as string | undefined);

export default async function TeamCoachPage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
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
    .filter((p): p is Pokemon => !!p);

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
      .filter((p): p is Pokemon => !!p);
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

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/team" },
          { label: "Team Coach" },
        ]}
      />
      <PageHeader
        title="Pokémon Team Coach"
        description="Lock the Pokémon you already picked, fill the rest with type coverage and balanced roles."
      />
      




      <TeamCoach initial={initial} initialLocked={initialLocked} />


      <RelatedTools current="/team/coach" />
    </main>
  );
}
