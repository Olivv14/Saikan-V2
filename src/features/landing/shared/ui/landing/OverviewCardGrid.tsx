import type { ReactNode } from "react";

type OverviewCardGridProps = {
  children: ReactNode;
  className?: string;
};

export function OverviewCardGrid({ children, className = "" }: OverviewCardGridProps) {
  return (
    <div className={`landing-overview-card-grid ${className}`.trim()}>
      {children}
    </div>
  );
}
