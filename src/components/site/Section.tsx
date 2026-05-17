import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  align = "center",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {(eyebrow || title || subtitle) && (
          <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} reveal`}>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-[1.1] text-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={eyebrow || title || subtitle ? "mt-12 md:mt-16" : ""}>
          {children}
        </div>
      </div>
    </section>
  );
}
