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
  const d = dict.pages.disclaimer;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: {
      canonical: localePath(locale, "/disclaimer"),
      languages: languageAlternates("/disclaimer"),
    },
  };
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.disclaimer;
  const linkCls = "underline text-poke-red";

  return (
    <main className="mx-auto max-w-2xl py-10">
      <PageHeader title={d.headerTitle} />
      <div className="space-y-4 text-sm leading-relaxed text-poke-dim">
        <p>{d.intro}</p>
        <p>
          {d.dataSources.s1}
          <a
            href="https://pokeapi.co/"
            title={dict.footer.pokeApi}
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            {d.dataSources.l1}
          </a>
          {d.dataSources.s2}
        </p>
        <p>
          <strong>{d.affiliate.h}</strong> {d.affiliate.p}
        </p>
        <p>
          <Link
            href={pageHref(locale, "/")}
            title={dict.nav.homeTitle}
            className="font-semibold text-poke-red underline"
          >
            {d.backLink}
          </Link>
        </p>
      </div>
    </main>
  );
}
