import type { Metadata } from "next";
import TeamGenerator from "@/components/TeamGenerator";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
import PageHeader from "@/components/PageHeader";
import { getRandomTeam, type TeamRandomParams } from "@/lib/team";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Random Pokémon Team — Fan-made Tool",
  description:
    "Generate a random team of 6 Pokémon in one tap — lock favourites, re-roll the rest, then export every set to Showdown or share the link. Free fan-made tool.",
  keywords: [
    "random pokemon team generator",
    "pokemon team generator",
    "pokemon team randomizer",
    "pokemon team builder",
    "generate a random pokemon team",
    "generate random pokemon team",
    "make a random pokemon team",
    "random generator pokemon team",
    "pokemon random generator team",
    "random pokemon team generator showdown",
    "pokemon showdown random pokemon generator",
    "random pokemon team generator filter",
    "random pokemon team generator with moves",
    "random pokemon team generator scarlet and violet",
    "random pokemon team generator sword and shield",
    "random pokemon team generator game",
    "random generator pokemon game",
    "pokemon random generator game",
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


      <FaqSection
        items={[
          {
            q: "How are teams generated?",
            a: "Each roll draws six random Pokémon at once. Open the filters to restrict the pool by generation, region, type or category (like Legendary or Starter) before rolling.",
          },
          {
            q: "Why did I get fewer than six Pokémon?",
            a: "Very narrow filters can leave a matching pool smaller than six. Widen one of the filters — or set one back to Random — and roll again.",
          },
          {
            q: "Can I save or share a team?",
            a: "Share the page link — the URL carries the rolled squad, so friends opening it see the same six. Tap Add to Team on any card to keep favourites in Your Team across the whole site.",
          },
        ]}
      />
      <RelatedTools current="/team/random" />
    </main>
  );
}
