import type { Metadata } from "next";
import TeamClient from "@/components/TeamClient";
import RelatedTools from "@/components/RelatedTools";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Your Pokémon Team | PokeRoll",
  description: "Your saved squad of randomly generated Pokémon — share the link with friends, or copy every set to Showdown for battles. Free fan-made tool.",
  keywords: [
    "pokemon team builder",
    "random pokemon team builder",
    "pokemon team planner",
  ],
  alternates: { canonical: "/team" },
};

export default async function TeamPage({
  searchParams,
}: {
  searchParams: Promise<{ team?: string }>;
}) {
  const sp = await searchParams;
  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title="Your Pokémon Team"
        description="Your saved squad — add Pokémon from any generator, then build and share."
      />

      




      <TeamClient sharedNames={sp.team ?? null} />


      <RelatedTools current="/team" />
    </main>
  );
}
