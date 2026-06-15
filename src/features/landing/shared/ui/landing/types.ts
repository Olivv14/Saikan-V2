import type { ReactNode } from "react";

export type SectionHeaderProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode | ReactNode[];
  eyebrowAs?: "p" | "span";
  titleAs?: "h1" | "h2" | "h3";
  variant?: "hero" | "default" | "compact";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export type OverviewCardItem = {
  key: string;
  title: string;
  eyebrow: string;
  body: string;
  tone: string;
  asset?: string;
  logo?: string;
  alt?: string;
  cta?: string;
  targetId?: string;
};

export type FocusSlideItem = {
  title: string;
  eyebrow: string;
  body: string;
  points: string[];
  logo: string;
  accent: string;
  tone: string;
  shortName?: string;
};
