import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale, isUntranslatedPath } from "@/lib/i18n/config";

function firstSegment(pathname: string): string {
  return pathname.split("/")[1] ?? "";
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  // 1) Legacy /challenge?mode=... shared links — pre-i18n behavior, kept
  // verbatim. Handled in middleware because next.config redirects run
  // earlier and can't drop the mode param. All permanent 308s.
  if (pathname === "/challenge") {
    const params = new URLSearchParams(url.search);
    const mode = params.get("mode");
    params.delete("mode");
    const target = mode === "shiny" ? "/challenge/shiny" : "/challenge/guess";
    const qs = params.toString();
    return NextResponse.redirect(
      new URL(qs ? `${target}?${qs}` : target, req.url),
      308,
    );
  }

  const seg = firstSegment(pathname);

  // 2) /en/... must never exist as a public URL — English is unprefixed.
  if (seg === "en") {
    const rest = pathname.slice(3) || "/";
    return NextResponse.redirect(new URL(rest + url.search, req.url), 308);
  }

  // 3) Prefixed locales pass through — except untranslated pages, which
  // redirect to the English URL.
  if (isLocale(seg) && seg !== "en") {
    const rest = pathname.slice(seg.length + 1) || "/";
    if (isUntranslatedPath(rest)) {
      return NextResponse.redirect(new URL(rest + url.search, req.url), 308);
    }
    return NextResponse.next();
  }

  // 4) Everything else is an English page — rewrite internally to /en/...
  // so app/[locale] can serve it without changing the public URL.
  const rewriteUrl = url.clone();
  rewriteUrl.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(rewriteUrl);
}

// Run on every page path; skip API, Next internals and public assets.
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|icon.svg|favicon.ico|robots.txt|sitemap.xml|llms.txt|fonts|flags|pokemon).*)",
  ],
};
