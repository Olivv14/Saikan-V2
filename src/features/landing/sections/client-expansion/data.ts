export const clientExpansionHeader = {
  eyebrow: "Client Solutions",
  titleLines: [
    "Custom operating systems.",
    "Designed for real operations.",
  ],
  description:
    "We turn your operations, knowledge and workflows into one connected, intelligent system.",
};

export const beforeItems = [
  "Fragmented tools & systems",
  "Repeated manual work",
  "Lost context & knowledge",
  "Slow execution & coordination",
  "Hard to scale & adapt",
];

export const afterItems = [
  "Connected ops & data",
  "Scalable automation",
  "Compounding knowledge",
  "Real-time clarity",
  "Built to scale & evolve",
];

export type Step = {
  number: string;
  title: string;
  body: string;
  icon: "discovery" | "build" | "evolve";
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    body: "Map operations, systems, workflows and blockers.",
    icon: "discovery",
  },
  {
    number: "02",
    title: "MVP & Implementation",
    body: "Connect tools, automate work and ship the first system.",
    icon: "build",
  },
  {
    number: "03",
    title: "Evolution & Partnership",
    body: "Improve, scale and evolve the system as the business grows.",
    icon: "evolve",
  },
];

export const SLIDE_LABELS = ["Before and after Saikan", "Our process"] as const;
