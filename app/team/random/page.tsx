import type { Metadata } from "next";
import TeamGenerator from "@/components/TeamGenerator";
import RelatedTools from "@/components/RelatedTools";
import PageHeader from "@/components/PageHeader";
import { getRandomTeam, type TeamRandomParams } from "@/lib/team";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Random Pokémon Team — Fan-made Tool",
  description:
    "Generate a random team of 6 Pokémon in one tap — roll again for a brand-new squad.",
  keywords: [
    "random pokemon team generator",
    "pokemon team generator",
    "random pokemon team picker",
    "pokemon team randomizer",
    "random pokemon team builder",
  ],
  alternates: { canonical: "/team/random" },
};

export default async function RandomTeamPage({
  searchParams,
}: {
  searchParams: Promise<TeamRandomParams>;
}) {
  const sp = await searchParams;
  const { pokemon } = await getRandomTeam(sp);

  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title="Random Pokémon Team"
        description="Roll a filtered squad of random Pokémon — then add your favourites to Your Team."
      />
      <TeamGenerator initial={pokemon} />
      <RelatedTools current="/team/random" />
    </main>
  );
}
