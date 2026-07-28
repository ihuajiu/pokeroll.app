import type { ReactNode } from "react";
import type { ToolMeta } from "@/lib/tools";

function Svg({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function GroupIcon({
  group,
  className,
}: {
  group: ToolMeta["group"];
  className?: string;
}) {
  switch (group) {
    case "core":
      return (
        <Svg className={className}>
          <path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3z" />
          <path d="M18 14l.8 2.1L21 17l-2.2.9L18 20l-.8-2.1L15 17l2.2-.9L18 14z" />
        </Svg>
      );
    case "variant":
      return (
        <Svg className={className}>
          <path d="M12 3 21 8 12 13 3 8 12 3z" />
          <path d="M3 13 12 18 21 13" />
        </Svg>
      );
    case "play":
      return (
        <Svg className={className}>
          <rect x="3" y="8" width="18" height="9" rx="4" />
          <path d="M8 12.5h-2M7 11.5v2M16 11.5h.01M18.5 13.5h.01" />
        </Svg>
      );
  }
}

const JUMP: Record<string, ReactNode> = {
  random: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8" cy="8" r="1" fill="currentColor" />
      <circle cx="16" cy="8" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="8" cy="16" r="1" fill="currentColor" />
      <circle cx="16" cy="16" r="1" fill="currentColor" />
    </>
  ),
  type: (
    <>
      <path d="M3 7v5l9 9 7-7-9-9H3z" />
      <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
    </>
  ),
  fusion: (
    <>
      <circle cx="9" cy="12" r="6" />
      <circle cx="15" cy="12" r="6" />
    </>
  ),
  wheel: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12 12 4M12 12 19 16M12 12 5 16" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  challenge: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  card: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M4 8h16" />
    </>
  ),
};

export function JumpIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return <Svg className={className}>{JUMP[name] ?? JUMP.random}</Svg>;
}
