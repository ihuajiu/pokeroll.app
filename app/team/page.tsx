import type { Metadata } from "next";
import TeamClient from "@/components/TeamClient";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Your Pokémon Team — Fan-made Tool",
  description: "Build and share your team of randomly generated Pokémon.",
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
    </main>
  );
}
