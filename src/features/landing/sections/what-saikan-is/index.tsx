import {
  SectionHeader,
  SectionShell,
  SnapCarousel,
  TitleLines,
} from "../../shared/ui/landing";
import { thesisHeader } from "./data";
import {
  ThesisCapabilitySlide,
  ThesisInputSlide,
  ThesisOutcomeSlide,
} from "./ThesisSlides";

const slideCount = 3;

export default function WhatSaikanIs() {
  return (
    <SectionShell id="thesis" ariaLabel="Our thesis" className="thesis">
      <SectionHeader
        eyebrow={thesisHeader.eyebrow}
        title={<TitleLines lines={thesisHeader.titleLines} />}
        description={thesisHeader.description}
        eyebrowClassName="thesis-eyebrow"
        titleClassName="thesis-title"
        descriptionClassName="thesis-copy"
      />

      <SnapCarousel
        ariaLabel="Our Thesis slides"
        className="thesis-fixed-slider-wrap"
        dotLabel="thesis slide"
        dotsClassName="thesis-fixed-dots"
        slideClassName="thesis-fixed-slide"
        slideCount={slideCount}
        trackClassName="thesis-fixed-slider"
      >
        {() => (
          <>
            <ThesisInputSlide />
            <ThesisCapabilitySlide />
            <ThesisOutcomeSlide />
          </>
        )}
      </SnapCarousel>
    </SectionShell>
  );
}
