import {
  SectionHeader,
  SectionShell,
  SnapCarousel,
  TitleLines,
} from "../../shared/ui/landing";
import { clientExpansionHeader, SLIDE_LABELS } from "./data";
import { BeforeAfterSlide, ProcessSlide } from "./ClientSlides";

export default function ClientExpansion() {
  return (
    <SectionShell
      id="saikan-client-detail"
      className="client-expansion landing-detail-section"
      dataMainSection
      ariaLabel="Client Solutions detail"
    >
      <div className="client-inner">
        <SectionHeader
          eyebrow={clientExpansionHeader.eyebrow}
          title={<TitleLines lines={clientExpansionHeader.titleLines} />}
          description={clientExpansionHeader.description}
          eyebrowClassName="client-eyebrow"
          titleClassName="client-title"
          descriptionClassName="client-copy"
        />

        <SnapCarousel
          activeDotClassName="is-active"
          ariaLabel="Client Solutions slides"
          className="client-solutions-slider"
          dotClassName="client-solutions-dot"
          dotLabel="Client Solutions slide"
          dotsClassName="client-solutions-dots"
          hideInactiveSlides
          slideClassName="client-solution-slide"
          slideCount={SLIDE_LABELS.length}
          trackClassName="client-solutions-track"
        >
          {({ active }) => (
            <>
              <BeforeAfterSlide active={active === 0} />
              <ProcessSlide active={active === 1} />
            </>
          )}
        </SnapCarousel>
      </div>
    </SectionShell>
  );
}
