import LocalizedLink from "@/components/LocalizedLink";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

// Home facts block: machine-extractable structures for AI/GEO citability —
// a numbers table, a how-to ordered list, and attributed quotations with
// outbound source links (PokéAPI, Bulbapedia). Copy lives in the dictionary
// (homeFacts section).
export default async function HomeFacts({ locale = "en" }: { locale?: Locale }) {
  const dict = await getDictionary(locale);
  const f = dict.homeFacts;
  return (
    <section className="mt-10">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-poke-dim">
        {f.title}
      </h2>

      {/* Numbers table */}
      <div className="mt-3 overflow-x-auto rounded-xl border border-poke-border bg-poke-surface p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-poke-dim">
              <th className="pb-2 pr-4 font-semibold">{f.metricHead}</th>
              <th className="pb-2 pr-4 font-semibold">{f.valueHead}</th>
              <th className="pb-2 font-semibold">{f.noteHead}</th>
            </tr>
          </thead>
          <tbody className="text-poke-ink">
            {f.facts.map((fact) => (
              <tr key={fact.metric} className="border-t border-poke-border">
                <td className="py-2 pr-4">{fact.metric}</td>
                <td className="py-2 pr-4 font-semibold">{fact.value}</td>
                <td className="py-2 text-poke-dim">{fact.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* How-to ordered list */}
      <div className="mt-3 rounded-xl border border-poke-border bg-poke-surface p-4">
        <h3 className="text-sm font-semibold text-poke-ink">
          {f.howToTitle}
        </h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-poke-dim">
          <li>
            {f.step1Pre}{" "}
            <LocalizedLink
              href="/random-pokemon-generator"
              className="underline text-poke-red"
            >
              {f.step1Link}
            </LocalizedLink>
            {f.step1Post}
          </li>
          <li>{f.step2}</li>
          <li>{f.step3}</li>
        </ol>
      </div>

      {/* Attributed quotations with outbound source links */}
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <blockquote className="rounded-xl border border-poke-border bg-poke-surface p-4 text-sm leading-relaxed text-poke-dim">
          <p>{f.quote1}</p>
          <cite className="mt-2 block text-xs not-italic">
            —{" "}
            <a
              href="https://bulbapedia.bulbagarden.net/wiki/Shiny_Pok%C3%A9mon"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-poke-red"
            >
              {f.quote1Cite}
            </a>
          </cite>
        </blockquote>
        <blockquote className="rounded-xl border border-poke-border bg-poke-surface p-4 text-sm leading-relaxed text-poke-dim">
          <p>{f.quote2}</p>
          <cite className="mt-2 block text-xs not-italic">
            —{" "}
            <a
              href="https://pokeapi.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-poke-red"
            >
              {dict.footer.pokeApi}
            </a>
            {f.quote2CiteSuffix}
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
