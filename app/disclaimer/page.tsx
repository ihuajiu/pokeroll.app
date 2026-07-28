import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer & Affiliate Notice — Fan-made Pokémon Tool",
  description:
    "Fan-made, unofficial site. Not affiliated with Nintendo, Game Freak or The Pokémon Company. Affiliate disclosure included.",
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-2xl">
      <h1 className="mb-4 text-2xl font-bold text-poke-ink">Disclaimer</h1>
      <div className="space-y-4 text-sm leading-relaxed text-poke-dim">
        <p>
          This site is a fan-made, unofficial tool. It is not affiliated with,
          endorsed by, or sponsored by Nintendo, Game Freak or The Pokémon
          Company. Pokémon names, characters and artwork are trademarks of their
          respective owners and are used here for informational and
          entertainment purposes only.
        </p>
        <p>
          All Pokémon data (names, types, abilities, stats, sprites) is fetched
          from the public{" "}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-poke-red"
          >
            PokéAPI
          </a>
          . Sprites are © their respective rights holders.
        </p>
        <p>
          <strong>Affiliate disclosure:</strong> As an Amazon Associate we earn
          from qualifying purchases made through the shopping links on this
          site. This does not affect the tool, which remains free to use.
        </p>
        <p>
          <Link href="/" className="font-semibold text-poke-red underline">
            ← Back to the generator
          </Link>
        </p>
      </div>
    </main>
  );
}
