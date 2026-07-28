// Type-colored stat bar. The fill color is inherited from the parent card's
// --cc CSS variable; falls back to the brand violet.
export default function StatBar({
  label,
  value,
  max = 200,
}: {
  label: string;
  value: number;
  max?: number;
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-20 shrink-0 text-poke-dim">{label}</span>
      <div className="stat-track">
        <div className="stat-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="w-8 shrink-0 text-right font-medium font-mono">{value}</span>
    </div>
  );
}
