import Link from "next/link";
import { REGIONS, TYPES, GENS, titleCase } from "@/lib/seo";
import { TOOLS, TOOL_GROUPS } from "@/lib/tools";

import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-grid">
        <div className="foot-brand">
          <div className="brand-name">
            <LogoMark className="ball" />
            <span>Poke<span className="red">Roll</span></span>
          </div>
          <p>
            Roll a random Pokémon — names, types, stats and shinies in one tap.
          </p>
          <a
            className="foot-contact"
            href="mailto:smith.chou.2023@gmail.com?subject=PokeRoll%20Feedback"
          >
            ✉ Contact Us — send your feedback
          </a>
        </div>
        {TOOL_GROUPS.map((g) => {
          const links = TOOLS.filter((t) => t.group === g.id);
          return (
            <div
              key={g.id}
              className={`foot-col${links.length > 6 ? " foot-col--wide" : ""}`}
            >
              <h4>{g.title}</h4>
              {links.map((t) => (
                <Link key={t.href} href={t.href} title={t.label}>
                  {t.label}
                </Link>
              ))}
            </div>
          );
        })}
      </div>

      <div className="foot-browse">
        <div className="fb-block">
          <h4>By Region</h4>
          <div className="fb-chips">
            {REGIONS.map((r) => (
              <Link key={r} href={`/by/${r}`} title={titleCase(r)}>
                {titleCase(r)}
              </Link>
            ))}
          </div>
        </div>
        <div className="fb-block">
          <h4>By Type</h4>
          <div className="fb-chips">
            {TYPES.map((t) => (
              <Link key={t} href={`/type/${t}`} title={titleCase(t)}>
                {titleCase(t)}
              </Link>
            ))}
          </div>
        </div>
        <div className="fb-block">
          <h4>By Generation</h4>
          <div className="fb-chips">
            {GENS.map((g) => (
              <Link key={g} href={`/gen/${g}`} title={`Gen ${g}`}>
                Gen {g}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="foot-disclaim">
        This is a fan-made tool. Not affiliated with Nintendo, Game Freak or The
        Pokémon Company. Pokémon data provided by{" "}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          PokéAPI
        </a>
        . <Link href="/disclaimer" title="Disclaimer" className="underline">Disclaimer</Link>
        {" · "}
        <Link href="/privacy" title="Privacy Policy" className="underline">Privacy</Link>
        {" · "}
        <Link href="/terms" title="Terms of Use" className="underline">Terms</Link>.
      </div>
    </footer>
  );
}
