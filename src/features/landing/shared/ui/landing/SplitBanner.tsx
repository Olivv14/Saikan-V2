import type { ReactNode } from "react";

type SplitBannerProps = {
  title: ReactNode;
  body: ReactNode;
  className?: string;
  dividerClassName?: string;
};

export function SplitBanner({
  title,
  body,
  className = "",
  dividerClassName = "system-banner-divider",
}: SplitBannerProps) {
  return (
    <article className={`landing-split-banner ${className}`.trim()}>
      <strong>{title}</strong>
      <i className={dividerClassName} aria-hidden="true" />
      <span>{body}</span>
    </article>
  );
}
