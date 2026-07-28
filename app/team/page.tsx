import type { Metadata } from "next";
import TeamClient from "@/components/TeamClient";

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
  return <TeamClient sharedNames={sp.team ?? null} />;
}
