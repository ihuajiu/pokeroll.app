import Link from "next/link";

const BASE = process.env.SITE_URL ?? "https://pokeroll.app";

export interface Crumb {
  label: string;
  href?: string;
}

// Breadcrumb trail above PageHeader + matching BreadcrumbList JSON-LD.
// Last item is the current page (rendered as text, no link).
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: `${BASE}${it.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4 text-xs text-poke-dim">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((it, i) => {
            const last = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">›</span>}
                {it.href && !last ? (
                  <Link href={it.href} className="hover:text-poke-violet">
                    {it.label}
                  </Link>
                ) : (
                  <span
                    className={last ? "font-medium text-poke-ink" : undefined}
                    aria-current={last ? "page" : undefined}
                  >
                    {it.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
