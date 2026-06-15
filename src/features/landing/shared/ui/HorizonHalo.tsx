type HorizonHaloProps = {
  className?: string;
};

export default function HorizonHalo({ className = "" }: HorizonHaloProps) {
  return (
    <div className={`site-horizon-halo ${className}`.trim()} aria-hidden="true">
      <div className="site-horizon-halo__glow" />
      <svg
        className="site-horizon-halo__curve"
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
  );
}
