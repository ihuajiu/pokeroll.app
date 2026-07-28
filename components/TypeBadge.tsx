import { TYPE_COLORS } from "@/lib/typeColors";

export default function TypeBadge({ type }: { type: string }) {
  return (
    <span className={`type-badge ${TYPE_COLORS[type] ?? TYPE_COLORS.normal}`}>
      {type}
    </span>
  );
}
