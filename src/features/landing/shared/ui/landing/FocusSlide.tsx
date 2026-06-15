import type { CSSProperties } from "react";
import SketchImage from "../SketchImage";
import type { FocusSlideItem } from "./types";

type FocusSlideProps = {
  item: FocusSlideItem;
  className?: string;
  visualClassName?: string;
  auraClassName?: string;
  logoClassName?: string;
  wordClassName?: string;
};

export function FocusSlide({
  item,
  className = "",
  visualClassName = "",
  auraClassName = "",
  logoClassName = "",
  wordClassName = "",
}: FocusSlideProps) {
  return (
    <article
      aria-label={`${item.title} slide`}
      className={`landing-focus-slide product-focus-slide ${item.tone}-focus ${className}`.trim()}
      style={{ "--accent": item.accent } as CSSProperties}
    >
      <div className="product-focus-copy">
        <span className="micro-eyebrow">{item.eyebrow}</span>
        <h5>{item.title}</h5>
        <p>{item.body}</p>
        <div className="product-focus-points">
          {item.points.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className={`product-focus-visual product-logo-visual ${visualClassName}`.trim()}
      >
        <div className={`product-focus-logo-aura ${auraClassName}`.trim()}>
          <SketchImage
            src={item.logo}
            alt=""
            className={`product-focus-logo-img ${logoClassName}`.trim()}
          />
          <span className={`product-logo-word ${wordClassName}`.trim()}>
            {item.shortName ?? item.title}
          </span>
        </div>
      </div>
    </article>
  );
}
