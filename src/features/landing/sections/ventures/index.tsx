import { useState } from "react";
import {
  OverviewCard,
  OverviewCardGrid,
  SectionHeader,
  SectionShell,
  TitleLines,
} from "../../shared/ui/landing";
import { businessLines, venturesHeader, type BusinessLine, type LineKey } from "./data";

export default function Ventures() {
  const [activeKey, setActiveKey] = useState<LineKey | null>(null);

  const goToTarget = (line: BusinessLine) => {
    setActiveKey(line.key);
    document
      .getElementById(line.targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <SectionShell
      id="ecosystem"
      className="business-lines reveal"
      revealDelay="0.12s"
      ariaLabel="Our business lines"
    >
      <SectionHeader
        eyebrow={venturesHeader.eyebrow}
        title={<TitleLines lines={venturesHeader.titleLines} />}
        description={venturesHeader.description}
        eyebrowClassName="business-eyebrow"
        titleClassName="business-title"
        descriptionClassName="business-copy"
      />

      <OverviewCardGrid className="business-cards">
        {businessLines.map((line) => (
          <OverviewCard
            key={line.key}
            item={{
              key: line.key,
              title: line.title,
              eyebrow: "",
              body: line.body,
              cta: line.cta,
              asset: line.asset,
              targetId: line.targetId,
              tone: line.key,
            }}
            className="business-card"
            contentClassName="business-card-content"
            assetClassName="business-asset"
            ctaClassName="business-cta"
            isActive={activeKey === line.key}
            onSelect={() => goToTarget(line)}
            showEyebrow={false}
          />
        ))}
      </OverviewCardGrid>
    </SectionShell>
  );
}
