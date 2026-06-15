import type { CSSProperties, ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  ariaLabel?: string;
  className?: string;
  revealDelay?: string;
  dataMainSection?: boolean;
};

export function SectionShell({
  children,
  id,
  ariaLabel,
  className = "",
  revealDelay,
  dataMainSection,
}: SectionShellProps) {
  const style = revealDelay
    ? ({ "--reveal-delay": revealDelay } as CSSProperties)
    : undefined;

  return (
    <section
      id={id}
      className={`landing-section ${className}`.trim()}
      style={style}
      data-main-section={dataMainSection ? "true" : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
}
