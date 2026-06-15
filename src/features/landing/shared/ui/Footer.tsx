import { ventures } from "../../data/content";
import { CTAButton } from "./landing";

export default function Footer() {
  return (
    <footer id="connect" className="site-footer" aria-label="Site footer">
      <div className="phone-frame site-footer-inner">
        <div className="site-footer-cta">
          <img
            className="site-footer-mark"
            src="/assets/sketch/brand-mark.png"
            alt=""
            aria-hidden="true"
          />
          <h2 className="site-footer-title">
            Built to scale.
            <br />
            Designed to compound.
          </h2>
          <p className="site-footer-sub">
            One system. Three business lines.
            <br />
            Infinite potential.
          </p>
          <div className="landing-cta-row site-footer-actions">
            <CTAButton href="#operating-model" variant="secondary">
              Explore Solutions
            </CTAButton>
            <CTAButton href="/contact" variant="primary">
              Book a Call <span aria-hidden="true">↗</span>
            </CTAButton>
          </div>
        </div>

        <div className="site-footer-halo" aria-hidden="true">
          <div className="site-footer-halo-glow" />
          <svg
            className="site-footer-horizon"
            viewBox="0 0 430 72"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="footerHorizonFade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="12%" stopColor="rgba(210,220,255,0.22)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.98)" />
                <stop offset="88%" stopColor="rgba(210,220,255,0.22)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              <filter id="footerHorizonGlow" x="-20%" y="-80%" width="140%" height="260%">
                <feGaussianBlur stdDeviation="1.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="footerHorizonSoft" x="-20%" y="-120%" width="140%" height="340%">
                <feGaussianBlur stdDeviation="5.5" />
              </filter>
            </defs>
            <path
              d="M -8 54 Q 215 10 438 54"
              stroke="url(#footerHorizonFade)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              opacity="0.28"
              filter="url(#footerHorizonSoft)"
            />
            <path
              d="M -8 54 Q 215 10 438 54"
              stroke="url(#footerHorizonFade)"
              strokeWidth="1.35"
              strokeLinecap="round"
              fill="none"
              filter="url(#footerHorizonGlow)"
            />
          </svg>
        </div>

        <div className="site-footer-legal">
          <p className="site-footer-copy">&copy; 2026 SAIKAN HOLDINGS</p>
          <p className="site-footer-meta">
            {ventures.length} ventures under management
          </p>
          <p className="site-footer-links">
            <a href="#">Terms</a>
            <span aria-hidden="true"> · </span>
            <a href="#">Privacy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
