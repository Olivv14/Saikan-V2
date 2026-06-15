export interface Venture {
  name: string;
  logo: string;
  description: string;
  website?: string;
  stage?: "launching" | "scaling" | "established";
}

export const ventures: Venture[] = [
  {
    name: "Saikan Nest",
    logo: "/assets/Ventures/Saikan BG.jpg",
    description:
      "Internal AI and automation operating system for Saikan, orchestrating bots, workflows, and execution across the portfolio.",
    website: "",
  },
  {
    name: "Perspectiv",
    logo: "/assets/Ventures/Perspectiv.jpg",
    description: "B2B software automation and process centralization.",
    website: "https://perspectiv-v1.netlify.app/",
    stage: "scaling",
  },
  {
    name: "Clucks",
    logo: "/assets/Ventures/Clucks.jpg",
    description: "Platform for productive content and meaningful connections.",
    website: "https://clucks.app",
    stage: "established",
  },
  {
    name: "Daniel Cluckins",
    logo: "/assets/Ventures/Daniel Cluckins.jpg",
    description: "Individual consultations and coaching services.",
    website: "https://danielcluckins.com",
    stage: "established",
  },
  {
    name: "Reflab",
    logo: "/assets/Ventures/RefLab BG.jpg",
    description: "Learning and tools platform for football referees.",
    website: "https://reflab.netlify.app",
    stage: "launching",
  },
  {
    name: "Wingy",
    logo: "/assets/Ventures/Wingy.jpg",
    description: "Dating app designed for real connections.",
    website: "https://wingy-app.netlify.app",
    stage: "launching",
  },
  {
    name: "Senti",
    logo: "/assets/Ventures/Senti.jpg",
    description: "AI assistant for life, goals, and relationships management.",
    website: "https://senti-app.netlify.app",
    stage: "launching",
  },
  {
    name: "Cluckers",
    logo: "/assets/Ventures/Cluckers.jpg",
    description: "Social club to foster activity and connection.",
    website: "https://cluckers-app.netlify.app",
    stage: "launching",
  },
];
