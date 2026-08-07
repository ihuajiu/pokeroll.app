import Link from "next/link";

// Home facts block: machine-extractable structures for AI/GEO citability —
// a numbers table, a how-to ordered list, and attributed quotations with
// outbound source links (PokéAPI, Bulbapedia).
const FACTS: { metric: string; value: string; note: string }[] = [
  { metric: "Pokémon species", value: "1,000+", note: "All 9 generations" },
  { metric: "Pokémon types", value: "18", note: "Every type filterable" },
  { metric: "Generations", value: "9", note: "Gen 1 (Kanto) to Gen 9 (Paldea)" },
  { metric: "Random team size", value: "6", note: "A full battle-ready squad" },
  { metric: "Base shiny odds", value: "1 / 4,096", note: "Mirrors the modern games" },
];

export default function HomeFacts() {
  return (
    <section className="mt-10">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-poke-dim">
        PokeRoll in numbers
      </h2>

      {/* Numbers table */}
      <div className="mt-3 overflow-x-auto rounded-xl border border-poke-border bg-poke-surface p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-poke-dim">
              <th className="pb-2 pr-4 font-semibold">Metric</th>
              <th className="pb-2 pr-4 font-semibold">Value</th>
              <th className="pb-2 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody className="text-poke-ink">
            {FACTS.map((f) => (
              <tr key={f.metric} className="border-t border-poke-border">
                <td className="py-2 pr-4">{f.metric}</td>
                <td className="py-2 pr-4 font-semibold">{f.value}</td>
                <td className="py-2 text-poke-dim">{f.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* How-to ordered list */}
      <div className="mt-3 rounded-xl border border-poke-border bg-poke-surface p-4">
        <h3 className="text-sm font-semibold text-poke-ink">
          How to roll a random Pokémon in 3 steps
        </h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-poke-dim">
          <li>
            Open the{" "}
            <Link
              href="/random-pokemon-generator"
              className="underline text-poke-red"
            >
              Random Pokémon Generator
            </Link>
            — no sign-up, no download.
          </li>
          <li>
            Tap the roll button to instantly get 1 of 1,000+ species with
            name, type, ability, base stats and artwork.
          </li>
          <li>
            Flip the card to copy a ready-made Pokémon Showdown set, or share
            the link with friends.
          </li>
        </ol>
      </div>

      {/* Attributed quotations with outbound source links */}
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <blockquote className="rounded-xl border border-poke-border bg-poke-surface p-4 text-sm leading-relaxed text-poke-dim">
          <p>
            “This results in a base Shiny probability of approximately
            16/65536, or 1/4096.”
          </p>
          <cite className="mt-2 block text-xs not-italic">
            —{" "}
            <a
              href="https://bulbapedia.bulbagarden.net/wiki/Shiny_Pok%C3%A9mon"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-poke-red"
            >
              Bulbapedia, “Shiny Pokémon”
            </a>
          </cite>
        </blockquote>
        <blockquote className="rounded-xl border border-poke-border bg-poke-surface p-4 text-sm leading-relaxed text-poke-dim">
          <p>
            “All the Pokémon data you’ll ever need in one place, easily
            accessible through a modern free open-source RESTful API.”
          </p>
          <cite className="mt-2 block text-xs not-italic">
            —{" "}
            <a
              href="https://pokeapi.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-poke-red"
            >
              PokéAPI
            </a>
            , serving over 50 billion API calls each month
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
