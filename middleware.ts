import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The /challenge idea-roller hub was retired — the playable challenges live on
// their own pages. Legacy /challenge?mode=... shared links still land on the
// right challenge (mode picks the target, every other param is carried over);
// a bare /challenge goes to the guess page. All permanent 308s so search
// engines transfer signals to the challenge pages. Handled in middleware
// because next.config redirects run earlier and can't drop the mode param.
export function middleware(req: NextRequest) {
  const url = req.nextUrl;
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

export const config = { matcher: "/challenge" };
