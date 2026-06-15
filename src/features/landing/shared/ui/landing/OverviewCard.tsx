import type { KeyboardEvent, ReactNode } from "react";
import SketchImage from "../SketchImage";
import type { OverviewCardItem } from "./types";

type OverviewCardProps = {
  item: OverviewCardItem;
  isActive?: boolean;
  className?: string;
  contentClassName?: string;
  iconClassName?: string;
  assetClassName?: string;
  ctaClassName?: string;
  titleAs?: "h3" | "h5";
  showBody?: boolean;
  showEyebrow?: boolean;
  children?: ReactNode;
  onSelect?: (item: OverviewCardItem) => void;
};

export function OverviewCard({
  item,
  isActive = false,
  className = "",
  contentClassName = "",
  iconClassName = "",
  assetClassName = "",
  ctaClassName = "",
  titleAs: Heading = "h3",
  showBody = true,
  showEyebrow = true,
  children,
  onSelect,
}: OverviewCardProps) {
  const select = () => onSelect?.(item);
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    select();
  };

  return (
    <article
      className={`landing-overview-card ${className} ${item.tone}${
        isActive ? " is-active" : ""
      }`.trim()}
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      aria-controls={item.targetId}
      aria-label={`${item.title}. ${item.body}${item.cta ? ` ${item.cta}` : ""}`}
      onClick={select}
      onKeyDown={onSelect ? onKeyDown : undefined}
    >
      <div className={`landing-overview-card__content ${contentClassName}`.trim()}>
        {(item.logo || children) && (
          <div className={`landing-overview-card__icon ${iconClassName}`.trim()}>
            {children ?? (
              <SketchImage src={item.logo ?? ""} alt={item.alt ?? ""} />
            )}
          </div>
        )}
        <Heading>{item.title}</Heading>
        {showEyebrow ? <span>{item.eyebrow}</span> : null}
        {showBody ? <p>{item.body}</p> : null}
        {item.cta ? (
          <div className={`landing-overview-card__cta ${ctaClassName}`.trim()}>
            {item.cta}
          </div>
        ) : null}
      </div>
      {item.asset ? (
        <div
          className={`landing-overview-card__asset ${assetClassName}`.trim()}
          aria-hidden="true"
        >
          <img src={item.asset} alt="" decoding="async" />
        </div>
      ) : null}
    </article>
  );
}
