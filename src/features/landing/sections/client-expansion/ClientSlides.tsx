import { Box, RefreshCw, Search, type LucideIcon } from "lucide-react";
import { afterItems, beforeItems, steps, type Step } from "./data";

const stepIcons: Record<Step["icon"], LucideIcon> = {
  build: Box,
  discovery: Search,
  evolve: RefreshCw,
};

function StepIcon({ icon }: { icon: Step["icon"] }) {
  const Icon = stepIcons[icon];

  return <Icon aria-hidden="true" strokeWidth={1.65} />;
}

export function BeforeAfterSlide({ active }: { active: boolean }) {
  return (
    <article
      className="client-solution-slide client-solution-slide-ba"
      aria-label="Before and after Saikan"
      aria-hidden={!active}
    >
      <div className="client-before-after">
        <div className="client-ba-unit before">
          <div className="client-ba-visual client-ba-visual--back" aria-hidden="true">
            <img
              src="/assets/sketch/before-saikan.jpg"
              alt=""
              decoding="async"
            />
          </div>
          <article className="client-ba-card before">
            <div className="client-ba-head">
              <span>Before Saikan</span>
            </div>
            <ul>
              {beforeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="client-ba-arrow" aria-hidden="true">
          ↓
        </div>

        <article className="client-ba-card after">
          <div className="client-ba-head">
            <span>After Saikan</span>
          </div>
          <ul>
            {afterItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="client-ba-visual" aria-hidden="true">
            <img src="/assets/sketch/client-dashboard-only.png" alt="" decoding="async" />
          </div>
        </article>
      </div>
    </article>
  );
}

export function ProcessSlide({ active }: { active: boolean }) {
  return (
    <article
      className="client-solution-slide client-solution-slide-process"
      aria-label="Our process"
      aria-hidden={!active}
    >
      <div className="client-process">
        <p className="client-process-eyebrow">Our Process</p>
        <h3>From discovery to operational intelligence.</h3>
        <div className="client-steps">
          {steps.map((step) => (
            <article key={step.number}>
              <span className="client-step-number">{step.number}</span>
              <i
                className={`client-step-icon is-${step.icon}`}
                aria-hidden="true"
              >
                <StepIcon icon={step.icon} />
              </i>
              <div>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}
