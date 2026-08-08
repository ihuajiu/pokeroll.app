"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { pageHref } from "@/lib/i18n/config";
import { useI18n } from "@/components/I18nProvider";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

// next/link drop-in that prefixes internal hrefs with the active locale
// (/es/type/fire), leaving untranslated pages unprefixed (pageHref). For
// client components; server components with `locale` in scope should call
// pageHref directly instead.
export default function LocalizedLink({ href, ...rest }: Props) {
  const { locale } = useI18n();
  return <Link href={pageHref(locale, href)} {...rest} />;
}
