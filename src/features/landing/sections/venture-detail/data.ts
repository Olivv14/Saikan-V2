export const ventureDetailHeader = {
  eyebrow: "Our Venture Studio",
  titleLines: ["One stack.", "Many companies.", "Infinite upside."],
  highlightedLines: ["Infinite upside."],
  description:
    "We use Saikan's operating system to create, launch and scale companies from one shared intelligence layer.",
};

export type Venture = {
  tone: string;
  name: string;
  eyebrow: string;
  body: string;
  logo: string;
  accent: string;
  focusTitle: string;
  focusBody: string;
  points: string[];
};

export const ventures: Venture[] = [
  {
    tone: "reflab",
    name: "RefLab",
    eyebrow: "Research Lab",
    body: "A venture for applied experiments, validation and technical exploration.",
    logo: "/assets/Ventures/RefLab.svg",
    accent: "#ffc130",
    focusTitle: "Applied research for the next operating systems.",
    focusBody:
      "RefLab turns ideas into validated concepts, prototypes and reusable intelligence for the Saikan ecosystem.",
    points: ["Research", "Validation", "Prototypes"],
  },
  {
    tone: "wingy",
    name: "Wingy",
    eyebrow: "Consumer AI",
    body: "A product venture designed around faster decisions and daily action.",
    logo: "/assets/Ventures/Wingy.svg",
    accent: "#ff4297",
    focusTitle: "A lightweight system for everyday momentum.",
    focusBody:
      "Wingy packages focused AI assistance into a fast, useful product experience built to compound with use.",
    points: ["Consumer", "Action", "Assistance"],
  },
  {
    tone: "clucks",
    name: "Clucks",
    eyebrow: "Food Venture",
    body: "A brand venture built with Saikan infrastructure from day one.",
    logo: "/assets/Ventures/Clucks.svg",
    accent: "#ff6821",
    focusTitle: "A venture built from one shared stack.",
    focusBody:
      "Clucks uses the Saikan operating layer to connect brand, operations and execution as it scales.",
    points: ["Brand", "Operations", "Scale"],
  },
];
export const overviewVentures = ventures;

