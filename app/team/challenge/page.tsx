import type { Metadata } from "next";
import TeamChallenge from "@/components/TeamChallenge";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getRandomTeam } from "@/lib/team";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Team Challenge — Roll a Team, Challenge a Friend",
  description:
    "Roll a seeded team of 6 Pokémon, share the link, and challenge a friend — their team is compared by total BST to pick a winner. Free fan-made tool.",
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
  searchParams: Promise<{
    seed?: string | string[];
    mine?: string | string[];
    count?: string | string[];
    result?: string | string[];
  }>;
}) {
  const sp = await searchParams;
  const seed = typeof sp.seed === "string" ? sp.seed : undefined;
  const mine = typeof sp.mine === "string" ? sp.mine : undefined;
  const resultView = sp.result === "1";
  const countRaw = Number(sp.count);
  const count = countRaw ? Math.min(12, Math.max(3, countRaw)) : 6;
  // No seed = idle state: nothing is generated until the user clicks.
  const challenger = seed
    ? (await getRandomTeam({ seed, count })).pokemon
    : null;
  const yours = seed && mine ? (await getRandomTeam({ seed: mine, count })).pokemon : null;

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
        description="Roll a 6-Pokémon challenge team, share the link, and let total BST pick a winner against your friends."
      />
      <TeamChallenge
        challenger={challenger}
        yours={yours}
        seed={seed}
        count={count}
        resultView={resultView}
      />
      <RelatedTools current="/team/challenge" />
    </main>
  );
}
