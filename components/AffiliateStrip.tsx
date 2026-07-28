import Link from "next/link";

// Text-only affiliate recommendations. No Pokémon logo, no official wording,
// fan-made disclaimer included (PRD §9 / §11). Links point to retailer
// category search pages so they stay valid without per-product tracking IDs.
const LINKS = [
  { label: "Pokémon TCG storage & binders", href: "https://www.amazon.com/s?k=pokemon+tcg+storage+binder" },
  { label: "Pokémon video games", href: "https://www.amazon.com/s?k=pokemon+video+game" },
  { label: "Pokémon plush & toys", href: "https://www.amazon.com/s?k=pokemon+plush+toys" },
  { label: "Pokémon cards & boosters", href: "https://www.amazon.com/s?k=pokemon+trading+card+booster" },
];

export default function AffiliateStrip() {
  return (
    <section className="mt-10 rounded-2xl border border-poke-border bg-poke-chip p-5 text-xs text-poke-dim">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-poke-dim">
        Shop Pokémon gear
      </h2>
      <ul className="flex flex-wrap gap-x-4 gap-y-1">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="underline hover:text-poke-red"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 leading-relaxed">
        As an Amazon Associate we earn from qualifying purchases. This is a
        fan-made, unofficial site and is not affiliated with Nintendo, Game
        Freak or The Pokémon Company. Learn more in our{" "}
        <Link href="/disclaimer" className="underline hover:text-poke-red">
          disclaimer
        </Link>
        .
      </p>
    </section>
  );
}
