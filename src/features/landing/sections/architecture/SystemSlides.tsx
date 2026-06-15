import type { CSSProperties } from "react";
import { LAYERS, type Layer } from "./data";

type SystemOverviewSlideProps = {
  goTo: (index: number) => void;
};

export function SystemOverviewSlide({ goTo }: SystemOverviewSlideProps) {
  return (
    <article
      className="system-v137-slide system-v138-overview"
      aria-label="System overview"
    >
      <div className="system-composition">
        <div className="system-stack-wrap" aria-hidden="true">
          <img
            src="/assets/sketch/system-stack.webp"
            alt=""
            className="system-stack"
          />
        </div>

        <div className="layer-list">
          {LAYERS.map((layer, index) => {
            const LayerIcon = layer.Icon;

            return (
              <button
                type="button"
                className="layer-card"
                key={layer.id}
                style={{ "--layer-accent": layer.cardAccent } as CSSProperties}
                onClick={() => goTo(index + 1)}
                aria-label={`Open ${layer.title}`}
              >
                <span className="layer-card-icon" aria-hidden="true">
                  <LayerIcon strokeWidth={1.7} />
                </span>
                <span className="layer-text">
                  <h3>{layer.title}</h3>
                  <p>{layer.cardSub}</p>
                </span>
                <span className="layer-arrow" aria-hidden="true">
                  ›
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </article>
  );
}

type LayerDetailSlideProps = {
  layer: Layer;
};

export function LayerDetailSlide({ layer }: LayerDetailSlideProps) {
  const Icon = layer.Icon;

  return (
    <article
      className={`system-v137-slide layer-phone-slide ${layer.slideClass}`}
      style={{ "--accent": layer.accent } as CSSProperties}
      aria-label={layer.title}
    >
      <div className="lp-copy">
        <div className="lp-title-row">
          <span className="lp-title-icon" aria-hidden="true">
            <Icon strokeWidth={1.7} />
          </span>
          <span className="lp-title-divider" aria-hidden="true">
            |
          </span>
          <h3>{layer.title}</h3>
        </div>
        <p className="lp-lead">{layer.lead}</p>
        <div className="lp-points">
          {layer.points.map((point) => (
            <span key={point.b}>{point.b}</span>
          ))}
        </div>
      </div>

      <div className="lp-phone-wrap">
        <img
          src={layer.image}
          alt={`${layer.title} mobile interface`}
          className="lp-phone"
        />
      </div>
    </article>
  );
}
