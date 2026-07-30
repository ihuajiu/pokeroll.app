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
    case "adventure":
      return (
        <Svg className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
          <path d="M12 8l4 4-4 4-4-4z" />
        </Svg>
      );
    case "generator":
      return (
        <Svg className={className}>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <circle cx="8" cy="8" r="1.2" fill="currentColor" />
          <circle cx="16" cy="8" r="1.2" fill="currentColor" />
          <circle cx="8" cy="16" r="1.2" fill="currentColor" />
          <circle cx="16" cy="16" r="1.2" fill="currentColor" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" />
        </Svg>
      );
    case "challenge":
      return (
        <Svg className={className}>
          <path d="M12 15l-3.4 2.2 1-3.8-2.6-2.2 3.5-.3L12 7l1.5 3.9 3.5.3-2.6 2.2 1 3.8z" />
          <circle cx="12" cy="12" r="9" />
        </Svg>
      );
    case "tool":
      return (
        <Svg className={className}>
          <path d="M14.7 6.3a1 1 0 0 0-1.4 0L8 11.6 6 9.6l-2 2 4 4L4 19.6l2 2 4.4-4.4 4 4 2-2-2-2 5.3-5.3a1 1 0 0 0 0-1.4l-4.6-4.6z" />
        </Svg>
      );
    case "team":
      return (
        <Svg className={className}>
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="8" r="2.5" />
          <circle cx="6" cy="16" r="3" />
          <circle cx="15" cy="16" r="3" />
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
