import type { Metadata } from "next";
import { redirect } from "next/navigation";
import TeamChallenge from "@/components/TeamChallenge";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getRandomTeam } from "@/lib/team";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Team Challenge — Roll a Team, Challenge a Friend",
  description:
    "Roll a seeded team of 6 Pokémon, share the link, and challenge a friend to beat your lineup. Free fan-made tool.",
  keywords: [
    "pokemon team challenge",
    "random pokemon team",
    "pokemon team generator",
  ],
  alternates: { canonical: "/team/challenge" },
};

export default async function TeamChallengePage({
  searchParams,
}: {
  searchParams: Promise<{ seed?: string | string[]; count?: string | string[] }>;
}) {
  const sp = await searchParams;
  const seed = typeof sp.seed === "string" ? sp.seed : undefined;
  if (!seed) {
    redirect(`/team/challenge?seed=${Math.random().toString(36).slice(2, 10)}`);
  }
  const countRaw = Number(sp.count);
  const count = countRaw ? Math.min(12, Math.max(3, countRaw)) : 6;
  const { pokemon } = await getRandomTeam({ seed, count });

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Team Challenge" },
        ]}
      />
      <PageHeader
        title="Pokémon Team Challenge"
        description={`I rolled a team of ${pokemon.length} — roll yours and let's see who wins.`}
      />
      <TeamChallenge pokemon={pokemon} seed={seed} />
      <section className="mt-10 max-w-2xl">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-poke-dim">
          How it works
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-poke-dim">
          The team is generated deterministically from the seed in the link, so
          everyone who opens it sees the exact same lineup. Challenge a friend,
          compare squads, and roll your own to settle it.
        </p>
      </section>
      <RelatedTools current="/team/challenge" />
    </main>
  );
}
