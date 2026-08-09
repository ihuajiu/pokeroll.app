import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  isLocale,
  languageAlternates,
  localePath,
  pageHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.contact;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: {
      canonical: localePath(locale, "/contact"),
      languages: languageAlternates("/contact"),
    },
  };
}

// Non-translatable channel metadata (href / external / icon), indexed to
// match dict.pages.contact.channels.
const CHANNEL_META: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
}[] = [
  {
    href: "mailto:hello@pokeroll.app?subject=PokeRoll%20Feedback",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    href: "https://x.com/JoeyChou2024",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-6" aria-hidden="true">
        <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/ihuajiu/pokeroll.app/issues",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3Z" />
      </svg>
    ),
  },
];

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.contact;

  return (
    <main className="mx-auto max-w-4xl py-10">
      <PageHeader title={d.headerTitle} description={d.headerDesc} />

      <div className="grid gap-4 sm:grid-cols-3">
        {d.channels.map((c, i) => {
          const meta = CHANNEL_META[i];
          return (
            <div
              key={c.title}
              className="flex flex-col rounded-2xl border border-poke-border bg-poke-surface p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-poke-chip text-poke-red">
                {meta.icon}
              </span>
              <h2 className="mt-4 text-base font-extrabold text-poke-ink">
                {c.title}
              </h2>
              <p className="mt-0.5 text-sm font-semibold text-poke-red">
                {c.handle}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-poke-dim">
                {c.desc}
              </p>
              <a
                href={meta.href}
                {...(meta.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="game-btn game-btn-primary mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold"
              >
                {c.action}
              </a>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm leading-relaxed text-poke-dim">
        {d.soloNote}
      </p>
      <p className="mt-4 text-center text-sm">
        <Link
          href={pageHref(locale, "/")}
          title={dict.nav.homeTitle}
          className="font-semibold text-poke-red underline"
        >
          {d.backLink}
        </Link>
      </p>
    </main>
  );
}
