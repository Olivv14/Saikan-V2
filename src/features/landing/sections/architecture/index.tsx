import {
  SectionHeader,
  SectionShell,
  SnapCarousel,
} from "../../shared/ui/landing";
import { architectureHeader, LAYERS } from "./data";
import { LayerDetailSlide, SystemOverviewSlide } from "./SystemSlides";

const slideCount = LAYERS.length + 1;

export default function Architecture() {
  return (
    <SectionShell
      id="operating-model"
      className="system-works reveal"
      revealDelay="0.1s"
      ariaLabel="How The System Works"
    >
      <SectionHeader
        eyebrow={architectureHeader.eyebrow}
        title={
          <>
            {architectureHeader.titleBeforeHighlight}{" "}
            <span className="blue-word">{architectureHeader.highlightedTitle}</span>{" "}
            {architectureHeader.titleAfterHighlight}
            <br />
            {architectureHeader.titleSecondLine}
          </>
        }
        description={architectureHeader.description}
        eyebrowClassName="system-eyebrow"
        titleClassName="system-title"
        descriptionClassName="system-copy"
      />

      <SnapCarousel
        ariaLabel="System slides"
        className="system-v137-carousel"
        dotLabel="slide"
        dotsClassName="system-v137-dots"
        enableMouseDrag
        slideClassName="system-v137-slide"
        slideCount={slideCount}
        trackClassName="system-v137-track"
      >
        {({ goTo }) => (
          <>
            <SystemOverviewSlide goTo={goTo} />
            {LAYERS.map((layer) => (
              <LayerDetailSlide key={layer.id} layer={layer} />
            ))}
          </>
        )}
      </SnapCarousel>
    </SectionShell>
  );
}
