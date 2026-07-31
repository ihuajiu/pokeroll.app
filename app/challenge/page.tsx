import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

type SP = Record<string, string | string[] | undefined>;

// The challenge modes live on their own pages now (/challenge/guess and
// /challenge/shiny). Keep old /challenge?... links working: mode picks the
// target page, every other param is carried over untouched.
export default async function ChallengeIndex({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  const sp = await searchParams;
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(sp)) {
    if (k === "mode") continue;
    const val = Array.isArray(v) ? v[0] : v;
    if (val) q.set(k, val);
  }
  const mode = Array.isArray(sp.mode) ? sp.mode[0] : sp.mode;
  const target = mode === "shiny" ? "/challenge/shiny" : "/challenge/guess";
  const qs = q.toString();
  redirect(qs ? `${target}?${qs}` : target);
}
