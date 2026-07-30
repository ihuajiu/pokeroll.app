import type { ReactNode } from "react";

export default function PageHeader({
  title,
  description,
  children,
  compact,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
  compact?: boolean;
}) {
  return (
    <header className={`text-center ${compact ? "mb-2" : "mb-8"}`}>
      <h1 className="font-display text-2xl font-extrabold text-poke-ink sm:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-poke-dim">
          {description}
        </p>
      ) : null}
      {children}
    </header>
  );
}
