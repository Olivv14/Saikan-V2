export const productsHeader = {
  eyebrow: "Our Stack",
  titleLines: ["One stack.", "Four products.", "Infinite potential."],
  highlightedLines: ["Infinite potential."],
  description:
    "A unified ecosystem of operating systems and AI-native tools built to scale businesses, augment humans and automate everything in between.",
};

export type Product = {
  tone: "nest" | "brain" | "pulse" | "reson";
  name: string;
  shortName: string;
  audience: string;
  body: string;
  logo: string;
  alt: string;
  accent: string;
  focusTitle: string;
  focusBody: string;
  points: string[];
};

export const products: Product[] = [
  {
    tone: "nest",
    name: "Saikan Nest",
    shortName: "Nest",
    audience: "For Businesses",
    body: "The operating system for businesses.",
    logo: "/assets/sketch/logo-nest.png",
    alt: "Nest logo",
    accent: "#4d87ff",
    focusTitle: "The operating system for business.",
    focusBody:
      "Memory, dashboards, applications and orchestration in one company workspace.",
    points: ["Company OS", "Shared context", "Built to scale"],
  },
  {
    tone: "brain",
    name: "Saikan Brain",
    shortName: "Brain",
    audience: "For Humans",
    body: "The operating system for humans.",
    logo: "/assets/sketch/logo-brain.png",
    alt: "Brain logo",
    accent: "#55ddd1",
    focusTitle: "Your personal operating system.",
    focusBody:
      "A private command layer for memory, decisions, priorities and daily execution.",
    points: ["Personal memory", "Daily clarity", "Private by design"],
  },
  {
    tone: "pulse",
    name: "Saikan Pulse",
    shortName: "Pulse",
    audience: "AI Agents",
    body: "AI agents and harnesses that get work done.",
    logo: "/assets/sketch/logo-pulse.png",
    alt: "Pulse logo",
    accent: "#ff5f65",
    focusTitle: "AI agents that get work done.",
    focusBody:
      "Deploy specialised agents connected to your context, tools and workflows.",
    points: ["Agent teams", "Workflow harnesses", "Human review"],
  },
  {
    tone: "reson",
    name: "Saikan Reson",
    shortName: "Reson",
    audience: "AI Layer",
    body: "Our proprietary AI layer. Multiple models. Infinite use cases.",
    logo: "/assets/sketch/logo-reson.png",
    alt: "Reson logo",
    accent: "#ffad55",
    focusTitle: "The AI layer behind the system.",
    focusBody:
      "Model routing, reasoning layers and intelligence infrastructure for every product.",
    points: ["Multiple models", "Reasoning layer", "Infinite use cases"],
  },
];
