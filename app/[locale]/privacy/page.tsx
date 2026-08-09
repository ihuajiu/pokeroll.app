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
  const d = dict.pages.privacy;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: {
      canonical: localePath(locale, "/privacy"),
      languages: languageAlternates("/privacy"),
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.privacy;
  const linkCls = "underline text-poke-red";

  return (
    <main className="mx-auto max-w-2xl py-10">
      <PageHeader title={d.headerTitle} />
      <div className="space-y-4 text-sm leading-relaxed text-poke-dim">
        <p>{d.intro}</p>
        <p>
          <strong>{d.analytics.h}</strong> {d.analytics.p}
        </p>
        <p>
          <strong>{d.storage.h}</strong> {d.storage.p}
        </p>
        <p>
          <strong>{d.personal.h}</strong> {d.personal.p}
        </p>
        <p>
          <strong>{d.affiliate.h}</strong> {d.affiliate.s1}
          <Link
            href={pageHref(locale, "/disclaimer")}
            title={dict.footer.disclaimerTitle}
            className={linkCls}
          >
            {d.affiliate.l1}
          </Link>
          {d.affiliate.s2}
        </p>
        <p>
          <strong>{d.contact.h}</strong> {d.contact.s1}
          <a href="mailto:hello@pokeroll.app" className={linkCls}>
            {d.contact.l1}
          </a>
          {d.contact.s2}
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
