import Link from "next/link";
import { REGIONS, TYPES, GENS, titleCase } from "@/lib/seo";
import { localizeTools, localizeToolGroups } from "@/lib/tools";
import { pageHref, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { typeName } from "@/lib/i18n/names";

import LanguageSwitcher from "./LanguageSwitcher";
import LogoMark from "./LogoMark";

export default async function Footer({ locale = "en" }: { locale?: Locale }) {
  const dict = await getDictionary(locale);
  const TOOLS = localizeTools(dict);
  const TOOL_GROUPS = localizeToolGroups(dict);
  const f = dict.footer;
  return (
    <footer className="foot">
      <div className="foot-grid">
        <div className="foot-brand">
          <div className="brand-name">
            <LogoMark className="ball" />
            <span>Poke<span className="red">Roll</span></span>
          </div>
          <p>{f.tagline}</p>
          <div className="foot-social">
            <Link
              href={pageHref(locale, "/contact")}
              aria-label={f.contactUs}
              title={f.contactUs}
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
              aria-label={f.onX}
              title={f.xTitle}
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
              aria-label={f.onGithub}
              title={f.githubTitle}
              className="foot-social-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3Z" />
              </svg>
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
                <Link key={t.href} href={pageHref(locale, t.href)} title={t.label}>
                  {t.label}
                </Link>
              ))}
            </div>
          );
        })}
      </div>

      <div className="foot-browse">
        <div className="fb-block">
          <h4>{f.byRegion}</h4>
          <div className="fb-chips">
            {REGIONS.map((r) => (
              <Link key={r} href={pageHref(locale, `/by/${r}`)} title={titleCase(r)}>
                {titleCase(r)}
              </Link>
            ))}
          </div>
        </div>
        <div className="fb-block">
          <h4>{f.byType}</h4>
          <div className="fb-chips">
            {TYPES.map((t) => (
              <Link key={t} href={pageHref(locale, `/type/${t}`)} title={typeName(t, locale)}>
                {typeName(t, locale)}
              </Link>
            ))}
          </div>
        </div>
        <div className="fb-block">
          <h4>{f.byGeneration}</h4>
          <div className="fb-chips">
            {GENS.map((g) => (
              <Link
                key={g}
                href={pageHref(locale, `/gen/${g}`)}
                title={dict.common.genShort.replace("{n}", String(g))}
              >
                {dict.common.genShort.replace("{n}", String(g))}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="foot-disclaim">
        {f.disclaimer}{" "}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {f.pokeApi}
        </a>
        . <Link href={pageHref(locale, "/disclaimer")} title={f.disclaimerTitle} className="underline">{f.disclaimerLink}</Link>
        {" · "}
        <Link href={pageHref(locale, "/privacy")} title={f.privacyTitle} className="underline">{f.privacy}</Link>
        {" · "}
        <Link href={pageHref(locale, "/terms")} title={f.termsTitle} className="underline">{f.terms}</Link>.
      </div>

      <LanguageSwitcher />

      <div className="foot-badges">
        <a
          href="https://fazier.com/launches/pokeroll"
          target="_blank"
          rel="noopener noreferrer"
          className="foot-badge"
          title={f.badges.fazierTitle}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=featured&theme=neutral"
            alt={f.badges.fazierAlt}
            style={{ height: "37px", width: "auto" }}
          />
        </a>
        <a
          href="https://tinylaunch.com"
          target="_blank"
          rel="noopener noreferrer"
          className="foot-badge"
          title={f.badges.tinyTitle}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://tinylaunch.com/tinylaunch_badge_featured_on.svg"
            alt={f.badges.tinyAlt}
            style={{ height: "37px", width: "auto" }}
          />
        </a>
        {/* StartupBase 徽章暂时下线：产品页未上线（404），上线后恢复
        <a
          href="https://startupbase.io/products/pokeroll?utm_source=startupbase&utm_medium=badge&utm_campaign=launch-badge-neutral"
          target="_blank"
          rel="noopener noreferrer"
          className="foot-badge"
          title="Launched on StartupBase"
        >
          <img
            src="https://statics.startupbase.io/site/badges/launched-on-sb-neutral.svg"
            alt="Launched on StartupBase"
            style={{ height: "37px", width: "auto" }}
          />
        </a>
        */}
        <a
          href="https://findly.tools/pokeroll-random-pok-mon-generato-team-type-wheel-showdown?utm_source=pokeroll-random-pok-mon-generato-team-type-wheel-showdown"
          target="_blank"
          rel="noopener noreferrer"
          className="foot-badge"
          title={f.badges.findlyTitle}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://findly.tools/badges/findly-tools-badge-light.svg"
            alt={f.badges.findlyAlt}
            style={{ height: "37px", width: "auto" }}
          />
        </a>
      </div>
    </footer>
  );
}
