import type { Metadata } from "next";
import Link from "next/link";
import FilteredGenerator from "@/components/FilteredGenerator";
import RelatedTools from "@/components/RelatedTools";
import SeoNav from "@/components/SeoNav";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getPoolByRegion, getRandomPokemon } from "@/lib/pokeapi";
import { REGION_GAME, REGION_GEN, titleCase } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region } = await params;
  const r = titleCase(region);
  const game = REGION_GAME[region] ?? "";
  return {
    title: `${r} Pokémon Generator — Random ${r} Pokémon`,
    description: `Generate a random ${r} Pokémon${
      game ? ` from Pokémon ${game}` : ""
    } instantly: name, type, ability, base stats, generation and sprite. Fan-made tool.`,
    keywords: [
      `random ${region} pokemon generator`,
      `random pokemon generator ${region}`,
      `${region} pokemon`,
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
        <Link className={linkCls} href={`/gen/${gen}`}>
          Generation {gen} Pokédex
        </Link>
        {game ? ` and the games Pokémon ${game}` : ""}. Roll one above, or try
        the{" "}
        <Link className={linkCls} href="/random-pokemon-generator">
          fully random generator
        </Link>{" "}
        instead.
      </p>
      <FilteredGenerator query={`region=${region}`} initial={initial} />
      <RelatedTools hrefs={["/random-pokemon-generator", "/type", "/team/random", "/adventure"]} />
      <SeoNav current={{ type: "region", value: region }} />
    </main>
  );
}
