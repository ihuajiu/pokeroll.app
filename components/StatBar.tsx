// Heat-colored stat bar: low → red/orange, mid → amber, high → green.
// Mirrors the prototype's HUD bars so strong/weak stats read at a glance.
const heat = (pct: number): string =>
  `hsl(${Math.round(8 + (Math.min(100, Math.max(0, pct)) / 100) * 128)} 72% 55%)`;

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
  const c = heat(pct);
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-20 shrink-0 text-poke-dim">{label}</span>
      <div className="stat-track">
        <div
          className="stat-fill"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${c}, hsl(136 75% 60%))`,
            boxShadow: `0 0 8px -2px ${c}`,
          }}
        />
      </div>
      <span className="w-8 shrink-0 text-right font-medium font-mono">{value}</span>
    </div>
  );
}
