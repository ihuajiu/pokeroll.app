import type { Metadata } from "next";
import Link from "next/link";
import HomeTool from "@/components/HomeTool";
import HomeFacts from "@/components/HomeFacts";
import FaqSection, { type Faq } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "PokeRoll — Random Pokémon Tools, Teams & Adventures",
  description:
    "PokeRoll is a free random Pokémon generator and toolbox — build a random team, take on challenges or roll a full adventure, and copy any card to Showdown.",
  keywords: [
    "pokemon generator",
    "pokemon randomizer",
    "pokemon tools",
    "pokemon team generator",
    "pokemon adventure",
  ],
  alternates: { canonical: "/" },
};

// ISR:首页从 CDN 缓存直接返回(TTFB 从 ~2.25s 降到 ~100ms),
// 每小时重新生成一次,Hero 展示卡随之换一只。
export const revalidate = 3600;

// 仓库首次提交日期(git log --reverse),作为 datePublished。
const DATE_PUBLISHED = "2026-07-28";

const HOME_FAQS: Faq[] = [
  {
    q: "How many Pokémon can this generator roll?",
    a: (
      <>
        It can roll any of 1,000+ Pokémon species spanning all 9 generations
        and 18 types. Every card comes with full stats, abilities and artwork,
        and the data is sourced from the public{" "}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-poke-red"
        >
          PokéAPI
        </a>
        .
      </>
    ),
    aText:
      "It can roll any of 1,000+ Pokémon species spanning all 9 generations and 18 types. Every card comes with full stats, abilities and artwork, and the data is sourced from the public PokéAPI (pokeapi.co).",
  },
  {
    q: "What are the odds of getting a shiny Pokémon?",
    a: (
      <>
        Our shiny rolls mirror the modern games: a 1 in 4,096 base chance.
        That is the official rate since Generation VI — earlier games used 1
        in 8,192 — as documented on{" "}
        <a
          href="https://bulbapedia.bulbagarden.net/wiki/Shiny_Pok%C3%A9mon"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-poke-red"
        >
          Bulbapedia
        </a>
        . Try your luck in the{" "}
        <Link href="/challenge/shiny" className="underline text-poke-red">
          Shiny Hunt challenge
        </Link>
        .
      </>
    ),
    aText:
      "Our shiny rolls mirror the modern games: a 1 in 4,096 base chance. That is the official rate since Generation VI — earlier games used 1 in 8,192 — as documented on Bulbapedia. Try your luck in the Shiny Hunt challenge.",
  },
  {
    q: "Can I generate a full team of six Pokémon at once?",
    a: (
      <>
        Yes — the{" "}
        <Link href="/team/random" className="underline text-poke-red">
          Random Team generator
        </Link>{" "}
        rolls a ready-made squad of 6 Pokémon in one tap, and the{" "}
        <Link href="/team/coach" className="underline text-poke-red">
          Team Coach
        </Link>{" "}
        balances the 6 slots by type coverage. Every set can be copied
        straight into Pokémon Showdown.
      </>
    ),
    aText:
      "Yes — the Random Team generator rolls a ready-made squad of 6 Pokémon in one tap, and the Team Coach balances the 6 slots by type coverage. Every set can be copied straight into Pokémon Showdown.",
  },
  {
    q: "Is PokeRoll free to use?",
    a: "Yes, every tool on PokeRoll is completely free — all 18+ generators, challenges and team tools work instantly in your browser with no sign-up, no download and no limits on how many times you roll.",
  },
  {
    q: "Where does the Pokémon data on this site come from?",
    a: (
      <>
        All names, types, stats, abilities and sprites come from{" "}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-poke-red"
        >
          PokéAPI
        </a>
        , the open community Pokémon database. It covers 1,000+ species across
        9 generations, so rolls always reflect the real Pokédex.
      </>
    ),
    aText:
      "All names, types, stats, abilities and sprites come from PokéAPI (pokeapi.co), the open community Pokémon database. It covers 1,000+ species across 9 generations, so rolls always reflect the real Pokédex.",
  },
  {
    q: "Is PokeRoll affiliated with Nintendo or The Pokémon Company?",
    a: (
      <>
        No. PokeRoll is an independent fan-made project and is not affiliated
        with, endorsed by, or sponsored by Nintendo, Game Freak or The Pokémon
        Company. See our{" "}
        <Link href="/disclaimer" className="underline text-poke-red">
          disclaimer
        </Link>{" "}
        for the full notice.
      </>
    ),
    aText:
      "No. PokeRoll is an independent fan-made project and is not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak or The Pokémon Company. See our disclaimer for the full notice.",
  },
];

export default function Page() {
  const dateModified = new Date().toISOString().slice(0, 10);

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://pokeroll.app/#webpage",
    url: "https://pokeroll.app/",
    name: "PokeRoll — Random Pokémon Tools, Teams & Adventures",
    description:
      "PokeRoll is a free random Pokémon generator and toolbox — build a random team, take on challenges or roll a full adventure, and copy any card to Showdown.",
    isPartOf: { "@id": "https://pokeroll.app/#website" },
    author: { "@id": "https://pokeroll.app/#org" },
    datePublished: DATE_PUBLISHED,
    dateModified,
    inLanguage: "en",
  };

  return (
    <main className="pt-1 pb-10">
      <HomeTool />
      <HomeFacts />
      <FaqSection items={HOME_FAQS} />
      <p className="mt-6 text-xs text-poke-dim">
        By the PokeRoll Team · Last updated {dateModified}
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
    </main>
  );
}
