import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-neon-cyan" />
              {eyebrow}
            </div>
          )}
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
