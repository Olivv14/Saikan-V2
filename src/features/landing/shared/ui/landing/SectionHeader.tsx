import type { ReactNode } from "react";
import type { SectionHeaderProps } from "./types";

function descriptions(description: SectionHeaderProps["description"]) {
  if (!description) return [];
  return Array.isArray(description) ? description : [description];
}

export function SectionHeader({
  eyebrow,
  eyebrowAs: Eyebrow = "p",
  title,
  description,
  titleAs: Heading = "h2",
  variant = "default",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeaderProps) {
  const descriptionItems = descriptions(description);

  return (
    <div
      className={`landing-section-header landing-section-header--${variant} ${className}`.trim()}
    >
      <Eyebrow className={`landing-section-header__eyebrow ${eyebrowClassName}`.trim()}>
        {eyebrow}
      </Eyebrow>
      <Heading className={`landing-section-header__title ${titleClassName}`.trim()}>
        {title}
      </Heading>
      {descriptionItems.map((item, index) => (
        <p
          className={`landing-section-header__copy ${descriptionClassName}`.trim()}
          key={typeof item === "string" ? item : index}
        >
          {item as ReactNode}
        </p>
      ))}
    </div>
  );
}
