import type { Metadata } from "next";
import TeamClient from "@/components/TeamClient";
import GuideSteps from "@/components/GuideSteps";
import RelatedTools from "@/components/RelatedTools";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Your Pokémon Team — Fan-made Tool",
  description: "Build and share your team of randomly generated Pokémon.",
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
      <GuideSteps
        className="mt-10"
        title="How to build your team"
        steps={[
          {
            n: "1",
            t: "Roll & add",
            d: "Generate Pokémon on any tool and tap “Add to Team” to save them here.",
          },
          {
            n: "2",
            t: "Manage your squad",
            d: "Select Pokémon to remove or clear — your team holds up to 6.",
          },
          {
            n: "3",
            t: "Share it",
            d: "Copy the team link so friends can view your lineup.",
          },
        ]}
      />
      <RelatedTools current="/team" />
    </main>
  );
}
