import type { Metadata } from "next";
import Link from "next/link";
import FilteredGenerator from "@/components/FilteredGenerator";
import RelatedTools from "@/components/RelatedTools";
import SeoNav from "@/components/SeoNav";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getPoolByType, getRandomPokemon } from "@/lib/pokeapi";
import { GEN_REGION, TYPE_GEN, titleCase } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const t = titleCase(type);
  return {
    title: `${t} Pokémon Generator — Random ${t}-type Pokémon`,
    description: `Generate a random ${t}-type Pokémon instantly: name, abilities, base stats, generation and sprite. Fan-made tool.`,
  };
}

export default async function TypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const t = titleCase(type);
  const pool = await getPoolByType(type);
  const initial = pool.length ? await getRandomPokemon(pool) : await getRandomPokemon();
  const gen = TYPE_GEN[type] ?? 1;
  const region = GEN_REGION[gen];
  const linkCls =
    "font-medium text-poke-violet underline underline-offset-2";

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Random Pokémon", href: "/random" },
          { label: `${t}-type Pokémon` },
        ]}
      />
      <PageHeader
        title={`Random ${t}-type Pokémon Generator`}
        description={`Looking for a random ${t}-type Pokémon? Here's one — tap Generate Again for another.`}
      />
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-poke-dim">
        {t}-type Pokémon first appeared in{" "}
        <Link className={linkCls} href={`/gen/${gen}`}>
          Generation {gen}
        </Link>{" "}
        alongside the{" "}
        <Link className={linkCls} href={`/by/${region}`}>
          {titleCase(region)} region
        </Link>
        . Roll one above, browse all 18 types with the{" "}
        <Link className={linkCls} href="/type">
          Type Generator
        </Link>
        , or go{" "}
        <Link className={linkCls} href="/random">
          fully random
        </Link>
        .
      </p>
      <FilteredGenerator query={`type=${type}`} initial={initial} />
      <RelatedTools hrefs={["/type", "/random", "/starter", "/legendary"]} />
      <SeoNav current={{ type: "type", value: type }} />
    </main>
  );
}
