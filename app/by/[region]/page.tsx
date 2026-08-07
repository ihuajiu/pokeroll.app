import type { Metadata } from "next";
import Link from "next/link";
import FilteredGenerator from "@/components/FilteredGenerator";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getPoolByRegion, getRandomPokemon } from "@/lib/pokeapi";
import { REGION_GAME, REGION_GEN, REGION_EXTRA_KEYWORDS, titleCase } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region } = await params;
  const r = titleCase(region);
  const game = REGION_GAME[region] ?? "";
  // Mention the third-version games that share these regions.
  const gameDesc =
    region === "hoenn"
      ? "Ruby, Sapphire & Emerald"
      : region === "sinnoh"
        ? "Diamond, Pearl & Platinum"
        : game;
  // Kalos titles ("X & Y") are short, so pad that variant with "instantly" to
  // keep every region's description inside the 140–160 char SEO window.
  const fill = gameDesc.length > 0 && gameDesc.length < 10 ? " instantly" : "";
  return {
    title: `${r} Pokémon Generator — Random ${r} Pokémon`,
    description: `Generate a random ${r} Pokémon${fill}${
      gameDesc ? ` from Pokémon ${gameDesc}` : ""
    }: name, type, ability, base stats and sprite — copy it to Showdown. Free fan-made tool.`,
    keywords: [
      `random ${region} pokemon generator`,
      `random pokemon generator ${region}`,
      `${region} pokemon`,
      ...(REGION_EXTRA_KEYWORDS[region] ?? []),
    ],
    alternates: { canonical: `/by/${region}` },
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  const r = titleCase(region);
  const game = REGION_GAME[region] ?? "";
  const pool = await getPoolByRegion(region);
  const initial = pool.length ? await getRandomPokemon(pool) : await getRandomPokemon();
  const gen = REGION_GEN[region] ?? 1;
  const linkCls =
    "font-medium text-poke-violet underline underline-offset-2";

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Random Pokémon", href: "/random-pokemon-generator" },
          { label: `${r} Pokémon` },
        ]}
      />
      <PageHeader
        title={`Random ${r} Pokémon Generator`}
        description={`Explore the Pokémon of ${r}${game ? `, featured in Pokémon ${game}` : ""}. Here's one for you — tap Generate Again for another.`}
      />
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-poke-dim">
        {r} is home to the{" "}
        <Link className={linkCls} title={`Gen ${gen}`} href={`/gen/${gen}`}>
          Generation {gen} Pokédex
        </Link>
        {game ? ` and the games Pokémon ${game}` : ""}. Roll one above, or try
        the{" "}
        <Link className={linkCls} title="Random Pokémon Generator" href="/random-pokemon-generator">
          fully random generator
        </Link>{" "}
        instead.
      </p>
      <FilteredGenerator query={`region=${region}`} initial={initial} />
      <RelatedTools hrefs={["/random-pokemon-generator", "/type", "/team/random", "/adventure"]} />
    </main>
  );
}
