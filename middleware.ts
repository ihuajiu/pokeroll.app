import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Legacy /challenge?mode=... links predate the hub page: mode picks the
// target challenge page, every other param is carried over untouched.
// Handled at the HTTP layer so these get a real 307, not a client-side
// redirect after streaming starts.
export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  if (url.search) {
    const params = new URLSearchParams(url.search);
    const mode = params.get("mode");
    params.delete("mode");
    const target = mode === "shiny" ? "/challenge/shiny" : "/challenge/guess";
    const qs = params.toString();
    return NextResponse.redirect(
      new URL(qs ? `${target}?${qs}` : target, req.url),
      307,
    );
  }
  return NextResponse.next();
}

export const config = { matcher: "/challenge" };
