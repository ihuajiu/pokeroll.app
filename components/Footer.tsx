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
          <div className="foot-social">
            <Link
              href="/contact"
              aria-label="Contact us"
              title="Contact us"
              className="foot-social-btn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </Link>
            <a
              href="https://x.com/JoeyChou2024"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PokeRoll on X"
              title="@JoeyChou2024 on X"
              className="foot-social-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-4" aria-hidden="true">
                <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Z" />
              </svg>
            </a>
            <a
              href="https://github.com/ihuajiu/pokeroll.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PokeRoll on GitHub"
              title="ihuajiu/pokeroll.app on GitHub"
              className="foot-social-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3Z" />
              </svg>
            </a>
            <Link href="/contact" title="Contact us" className="foot-contact">
              Contact
            </Link>
          </div>
          <div className="foot-badges">
            <a
              href="https://fazier.com/launches/pokeroll"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-badge"
              title="Featured on Fazier"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=featured&theme=neutral"
                width="150"
                alt="Featured on Fazier badge"
              />
            </a>
            <a
              href="https://tinylaunch.com"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-badge"
              title="Featured on TinyLaunch"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://tinylaunch.com/tinylaunch_badge_featured_on.svg"
                width="150"
                alt="TinyLaunch Badge"
              />
            </a>
            <a
              href="https://startupbase.io/products/pokeroll?utm_source=startupbase&utm_medium=badge&utm_campaign=launch-badge-neutral"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-badge"
              title="Launched on StartupBase"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://statics.startupbase.io/site/badges/launched-on-sb-neutral.svg"
                alt="Launched on StartupBase"
                height="37"
              />
            </a>
          </div>
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
