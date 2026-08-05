export interface GuideStep {
  /** Step number, e.g. "1". */
  n: string;
  /** Short bold title. */
  t: string;
  /** One-line description. */
  d: string;
}

/** Lightweight numbered "How to play" grid — the same style as the Team
 *  Challenge page, reusable site-wide so every tool gets consistent steps. */
export default function GuideSteps({
  title = "How to play",
  steps,
  className = "",
}: {
  title?: string;
  steps: GuideStep[];
  className?: string;
}) {
  return (
    <section className={`mx-auto w-full max-w-[1100px] px-4 ${className}`.trim()}>
      <h2 className="text-xs font-semibold uppercase tracking-wide text-poke-dim">
        {title}
      </h2>
      <div className="mt-3 grid gap-3 rounded-2xl border border-poke-border bg-poke-surface p-5 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-poke-btn text-sm font-extrabold text-white">
              {s.n}
            </span>
            <div>
              <div className="text-sm font-bold text-poke-ink">{s.t}</div>
              <div className="text-xs text-poke-dim">{s.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
