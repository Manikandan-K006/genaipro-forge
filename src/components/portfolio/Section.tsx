import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  titleCustom,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  titleCustom?: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-[#173B31] bg-[#07120F] px-4 py-1 text-xs font-mono uppercase tracking-widest text-[#34D399] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              {eyebrow}
            </div>
          )}
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-[#F8FAFC]">
            {titleCustom ? titleCustom : <span className="bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC] to-[#34D399] bg-clip-text text-transparent">{title}</span>}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-[#94A3B8] text-base sm:text-lg">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

