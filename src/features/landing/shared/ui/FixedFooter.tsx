import { useFixedFooterVisibility } from "../hooks/useFixedFooterVisibility";
import { CTAButton } from "./landing";

export default function FixedFooter() {
  const isVisible = useFixedFooterVisibility();

  return (
    <footer
      className={`site-fixed-footer${isVisible ? " site-fixed-footer--visible" : ""}`}
      aria-label="Quick actions"
      aria-hidden={!isVisible}
    >
      <div className="site-fixed-footer__inner">
        <a href="#hero" className="site-fixed-footer__brand" aria-label="Saikan home">
          <img src="/assets/Ventures/Banner Saikan No BG.png" alt="Saikan" />
        </a>

        <nav className="landing-cta-row site-fixed-footer__actions" aria-label="Saikan quick actions">
          <CTAButton href="#operating-model" variant="secondary">
            Explore Solutions
          </CTAButton>
          <CTAButton href="/contact" variant="primary">
            Book a Call
          </CTAButton>
        </nav>
      </div>
    </footer>
  );
}
