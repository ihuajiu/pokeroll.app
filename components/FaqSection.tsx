export interface Faq {
  q: string;
  a: React.ReactNode;
  /** Plain-text version of `a` for JSON-LD when `a` contains markup. */
  aText?: string;
}

// FAQ block for core pages: h2 + h3 outline (heading structure), genuine
// feature copy, and FAQPage JSON-LD for rich-result eligibility.
export default function FaqSection({ items }: { items: Faq[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.aText ?? (typeof f.a === "string" ? f.a : ""),
      },
    })),
  };

  return (
    <section className="mt-10">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-poke-dim">
        FAQ
      </h2>
      <div className="mt-3 space-y-3">
        {items.map((f) => (
          <div
            key={f.q}
            className="rounded-xl border border-poke-border bg-poke-surface p-4"
          >
            <h3 className="text-sm font-semibold text-poke-ink">{f.q}</h3>
            <p className="mt-1 text-sm leading-relaxed text-poke-dim">{f.a}</p>
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
