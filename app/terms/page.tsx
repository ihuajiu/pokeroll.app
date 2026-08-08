import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Use — PokeRoll",
  description:
    "PokeRoll terms of use — a fan-made, unofficial Pokémon toolbox provided as is. Pokémon is a trademark of Nintendo, Game Freak and The Pokémon Company.",
  keywords: [
    "pokeroll terms of use",
    "pokemon fan site terms",
    "unofficial pokemon tool",
  ],
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl py-10">
      <PageHeader title="Terms of Use" />
      <div className="space-y-4 text-sm leading-relaxed text-poke-dim">
        <p>
          PokeRoll is a fan-made, unofficial Pokémon toolbox. By using this
          site you agree to the terms below.
        </p>
        <p>
          <strong>Unofficial fan project:</strong> This site is not affiliated
          with, endorsed by, or sponsored by Nintendo, Game Freak or The
          Pokémon Company. Pokémon and all related names, characters and
          artwork are trademarks of Nintendo, Game Freak and The Pokémon
          Company, and are used here for informational and entertainment
          purposes only.
        </p>
        <p>
          <strong>Provided as is:</strong> The tools and content on this site
          are provided &quot;as is&quot;, without warranties of any kind. Random
          results are for fun; we make no guarantees about availability,
          accuracy or fitness for any purpose.
        </p>
        <p>
          <strong>Data sources:</strong> Pokémon data (names, types, stats,
          abilities, sprites) comes from the public{" "}
          <a
            href="https://pokeapi.co/"
            title="PokéAPI"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-poke-red"
          >
            PokéAPI
          </a>
          . Sprites are © their respective rights holders.
        </p>
        <p>
          <strong>Affiliate links:</strong> As an Amazon Associate we earn from
          qualifying purchases made through shopping links on this site. This
          does not affect the tools, which remain free. See the{" "}
          <Link
            href="/disclaimer"
            title="Disclaimer"
            className="underline text-poke-red"
          >
            disclaimer
          </Link>{" "}
          for the full disclosure.
        </p>
        <p>
          <strong>Contact:</strong> Questions about these terms? Email{" "}
          <a
            href="mailto:hello@pokeroll.app"
            className="underline text-poke-red"
          >
            hello@pokeroll.app
          </a>
          .
        </p>
        <p>
          <Link href="/" title="PokeRoll home" className="font-semibold text-poke-red underline">
            ← Back to the generator
          </Link>
        </p>
      </div>
    </main>
  );
}
