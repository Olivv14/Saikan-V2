import {
  FocusSlide,
  OverviewCard,
  OverviewCardGrid,
  SectionHeader,
  SectionShell,
  SnapCarousel,
  TitleLines,
} from "../../shared/ui/landing";
import SketchImage from "../../shared/ui/SketchImage";
import { products, productsHeader } from "./data";

const slideCount = products.length + 1;

export default function ProductsDetail() {
  return (
    <SectionShell
      id="saikan-products-detail"
      className="products-detail landing-detail-section"
      dataMainSection
      ariaLabel="Saikan products ecosystem"
    >
      <div className="products-detail-inner">
        <SketchImage
          src="/assets/sketch/products-hero-art 1.jpg"
          alt=""
          aria-hidden="true"
          className="products-hero-art"
        />
        <SectionHeader
          className="products-detail-copy"
          eyebrow={productsHeader.eyebrow}
          eyebrowAs="span"
          eyebrowClassName="micro-eyebrow"
          title={
            <TitleLines
              lines={productsHeader.titleLines}
              highlightedLines={productsHeader.highlightedLines}
            />
          }
          description={productsHeader.description}
        />

        <SnapCarousel
          ariaLabel="Saikan product stack carousel"
          className="stack-product-carousel"
          dotLabel="product slide"
          dotsClassName="stack-carousel-dots"
          slideClassName="stack-product-slide"
          slideCount={slideCount}
          trackClassName="stack-product-track"
        >
          {({ goTo }) => (
            <>
            <article
              aria-label="Saikan product overview"
              className="stack-product-slide stack-overview-slide"
            >
              <OverviewCardGrid className="product-cards">
                {products.map((product, index) => (
                  <OverviewCard
                    className="product-card"
                    iconClassName="product-card-icon"
                    item={{
                      key: product.name,
                      title: product.name,
                      eyebrow: product.audience,
                      body: product.body,
                      logo: product.logo,
                      alt: product.alt,
                      tone: product.tone,
                    }}
                    key={product.name}
                    onSelect={() => goTo(index + 1)}
                    titleAs="h5"
                  />
                ))}
              </OverviewCardGrid>
            </article>

            {products.map((product) => (
              <FocusSlide
                key={product.name}
                className="stack-product-slide"
                item={{
                  title: product.focusTitle,
                  eyebrow: product.name,
                  body: product.focusBody,
                  points: product.points,
                  logo: product.logo,
                  accent: product.accent,
                  tone: product.tone,
                  shortName: product.shortName,
                }}
                visualClassName={`${product.tone}-visual`}
              />
            ))}
            </>
          )}
        </SnapCarousel>

      </div>
    </SectionShell>
  );
}
