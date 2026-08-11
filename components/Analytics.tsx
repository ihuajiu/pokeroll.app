'use client';

import { useEffect } from 'react';

const GA_ID = 'G-M74KET4Y45';

// Only send analytics from the production site. Vercel preview deployments
// (*.vercel.app) and local dev fire the same tag otherwise, which pollutes
// GA4 data and triggers "additional domains detected" diagnostics.
const PROD_HOSTS = new Set(['pokeroll.app', 'www.pokeroll.app']);

/** Fire a GA4 event, but only from the production site (same guard as the
 *  loader) so preview/localhost traffic never pollutes the data. */
export function trackEvent(
  action: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  if (!PROD_HOSTS.has(window.location.hostname)) return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", action, params);
}

export default function Analytics() {
  useEffect(() => {
    if (!PROD_HOSTS.has(window.location.hostname)) return;

    const w = window as unknown as {
      dataLayer: unknown[];
      gtag: (...args: unknown[]) => void;
    };
    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag(...args: unknown[]) {
      w.dataLayer.push(args);
    };

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    w.gtag('js', new Date());
    w.gtag('config', GA_ID);
  }, []);

  return null;
}
