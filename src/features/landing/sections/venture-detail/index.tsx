import { Plus } from "lucide-react";
import {
  FocusSlide,
  OverviewCard,
  OverviewCardGrid,
  SectionHeader,
  SectionShell,
  SnapCarousel,
  TitleLines,
} from "../../shared/ui/landing";
import { overviewVentures, ventureDetailHeader, ventures } from "./data";

const slideCount = ventures.length + 1;

export default function VentureDetail() {
  return (
    <SectionShell
      id="saikan-venture-detail"
      className="venture-detail landing-detail-section"
      dataMainSection
      ariaLabel="Saikan venture studio ecosystem"
    >
      <div className="venture-detail-inner">
        <SectionHeader
          className="venture-detail-copy"
          eyebrow={ventureDetailHeader.eyebrow}
          eyebrowAs="span"
          eyebrowClassName="micro-eyebrow"
          title={
            <TitleLines
              lines={ventureDetailHeader.titleLines}
              highlightedLines={ventureDetailHeader.highlightedLines}
            />
          }
          description={ventureDetailHeader.description}
        />

        <div className="venture-orbit-art" aria-hidden="true">
          <img src="/assets/sketch/venture-orbit-art.webp" alt="" decoding="async" />
        </div>

        <SnapCarousel
          ariaLabel="Saikan venture carousel"
          className="venture-stack-carousel"
          dotLabel="venture slide"
          dotsClassName="stack-carousel-dots venture-carousel-dots"
          slideClassName="venture-stack-slide"
          slideCount={slideCount}
          trackClassName="venture-stack-track"
        >
          {({ goTo }) => (
            <>
            <article
              aria-label="Venture overview"
              className="venture-stack-slide venture-overview-slide"
            >
              <OverviewCardGrid className="product-cards venture-card-grid">
                {overviewVentures.map((venture) => (
                  <OverviewCard
                    className="product-card venture-card"
                    iconClassName="product-card-icon venture-card-icon"
                    item={{
                      key: venture.name,
                      title: venture.name,
                      eyebrow: venture.eyebrow,
                      body: venture.body,
                      logo: venture.logo,
                      tone: venture.tone,
                    }}
                    key={venture.name}
                    onSelect={() => goTo(ventures.indexOf(venture) + 1)}
                    titleAs="h5"
                  />
                ))}

                <OverviewCard
                  className="product-card venture-card"
                  iconClassName="product-card-icon venture-card-icon more-icon"
                  item={{
                    key: "more",
                    title: "More",
                    eyebrow: "Venture Studio",
                    body: "Explore the companies built from the Saikan operating stack.",
                    tone: "more",
                  }}
                  onSelect={() => goTo(1)}
                  titleAs="h5"
                >
                  <div aria-hidden="true">
                    <Plus strokeWidth={1.8} />
                  </div>
                </OverviewCard>
              </OverviewCardGrid>
            </article>

            {ventures.map((venture) => (
              <FocusSlide
                key={venture.name}
                auraClassName="venture-focus-logo-aura"
                className="venture-stack-slide venture-focus-slide"
                item={{
                  title: venture.focusTitle,
                  eyebrow: venture.eyebrow,
                  body: venture.focusBody,
                  points: venture.points,
                  logo: venture.logo,
                  accent: venture.accent,
                  tone: venture.tone,
                  shortName: venture.name,
                }}
                logoClassName="venture-focus-logo-img"
                visualClassName="venture-logo-visual"
              />
            ))}
            </>
          )}
        </SnapCarousel>
      </div>
    </SectionShell>
  );
}
