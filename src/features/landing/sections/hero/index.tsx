import type { CSSProperties } from "react";
import { CTAButton, SectionHeader, TitleLines } from "../../shared/ui/landing";
import { heroActions, heroHeader } from "./data";

export default function Hero() {
  return (
    <header
      id="hero"
      className="reveal relative mb-0 min-h-[540px] overflow-hidden px-[var(--frame-pad)] pt-[84px] pb-0 md:-mt-32 md:pt-32 max-md:min-h-0 max-md:pt-[6.1rem] max-md:pb-4"
      style={{ "--reveal-delay": "0.05s" } as CSSProperties}
    >
      <img
        src="/assets/sketch/hero-stack.png"
        alt=""
        className="pointer-events-none absolute top-[70px] right-2 z-[1] h-auto w-60 opacity-[0.98]"
        aria-hidden="true"
      />

      <div className="relative z-[5]">
        <SectionHeader
          eyebrow={heroHeader.eyebrow}
          title={
            <TitleLines
              lines={heroHeader.titleLines}
              highlightedLines={heroHeader.highlightedLines}
            />
          }
          description={heroHeader.description}
          titleAs="h1"
          variant="hero"
        />
        <div className="landing-cta-row mt-9 flex w-[150px] flex-col gap-3">
          {heroActions.map((action) => (
            <CTAButton
              className="w-full"
              href={action.href}
              key={action.label}
              variant={action.variant}
            >
              {action.label}
              {action.icon ? (
                <span className="translate-y-[-1px] text-lg font-normal">
                  {action.icon}
                </span>
              ) : null}
            </CTAButton>
          ))}
        </div>
      </div>
    </header>
  );
}
