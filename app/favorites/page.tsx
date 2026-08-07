import type { Metadata } from "next";
import FavoritesClient from "@/components/FavoritesClient";
import RelatedTools from "@/components/RelatedTools";
import PageHeader from "@/components/PageHeader";
import { getPokemonByIdLocal } from "@/lib/pokedex";
import type { Pokemon } from "@/lib/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Your Pokémon Favorites | PokeRoll",
  description: "Save the Pokémon you love and build your favorites collection — share the list with a link, and copy any card to Showdown. Free fan-made tool.",
  keywords: [
    "pokemon favorites",
    "favorite pokemon list",
    "share pokemon collection",
  ],
  alternates: { canonical: "/favorites" },
};

export default async function FavoritesPage({
  searchParams,
}: {
  searchParams: Promise<{ m?: string }>;
}) {
  const sp = await searchParams;

  // Snapshot mode: decode the dex list from `?m=` and resolve each entry
  // from the local pokedex. Invalid/unknown ids are skipped.
  let shared: Pokemon[] | null = null;
  let sharedInvalid = false;
  if (sp.m !== undefined) {
    const ids = sp.m
      .split(",")
      .map((s) => Number.parseInt(s.trim(), 10))
      .filter((n) => Number.isFinite(n) && n > 0);
    shared = ids
      .map((id) => getPokemonByIdLocal(id))
      .filter((p): p is Pokemon => !!p);
    sharedInvalid = shared.length === 0;
  }

  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title="Pokémon Favorites"
        description="Keep the Pokémon you love in one place — then share the whole list with a single link."
      />
      <FavoritesClient shared={shared} sharedInvalid={sharedInvalid} />
      <RelatedTools current="/favorites" />
    </main>
  );
}
