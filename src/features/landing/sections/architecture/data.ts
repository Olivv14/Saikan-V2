import {
  createLucideIcon,
  Database,
  Hash,
  Shield,
  type LucideIcon,
} from "lucide-react";

const TriangleNodes = createLucideIcon("triangle-nodes", [
  ["path", { d: "M12 4 4.5 18h15L12 4Z", key: "triangle" }],
  ["circle", { cx: "12", cy: "4", r: "2.4", key: "top" }],
  ["circle", { cx: "4.5", cy: "18", r: "2.4", key: "left" }],
  ["circle", { cx: "19.5", cy: "18", r: "2.4", key: "right" }],
]);

export const architectureHeader = {
  eyebrow: "How The System Works",
  titleBeforeHighlight: "Built in",
  highlightedTitle: "four",
  titleAfterHighlight: "layers.",
  titleSecondLine: "Designed to scale.",
  description: [
    "The Saikan OS unifies memory, visibility, connection, and execution into one intelligent system.",
    "Each layer has a role. Together, they create continuous impact across your organization.",
  ],
};

export type Point = { b: string };

export type Layer = {
  id: string;
  kicker: string;
  title: string;
  cardSub: string;
  lead: string;
  points: Point[];
  image: string;
  accent: string;
  cardAccent: string;
  slideClass: string;
  Icon: LucideIcon;
};

export const LAYERS: Layer[] = [
  {
    id: "memory",
    kicker: "Layer 01",
    title: "Memory Layer",
    cardSub: "Unify and contextualize company knowledge",
    lead: "A living company memory that captures context, connects knowledge and keeps it ready for people and agents.",
    points: [
      { b: "Captures" },
      { b: "Connects" },
      { b: "Compounds" },
    ],
    image: "/assets/system/layer-memory.png",
    accent: "#6fa0ff",
    cardAccent: "#6fa0ff",
    slideClass: "layer-phone-memory",
    Icon: Hash,
  },
  {
    id: "dashboard",
    kicker: "Layer 02",
    title: "Dashboard Layer",
    cardSub: "See every signal in real time",
    lead: "A live operating view where signals, risks, decisions and progress surface before they become noise.",
    points: [
      { b: "See" },
      { b: "Spot" },
      { b: "Act" },
    ],
    image: "/assets/system/layer-dashboard.png",
    accent: "#6fa0ff",
    cardAccent: "#46d879",
    slideClass: "layer-phone-dashboard",
    Icon: Database,
  },
  {
    id: "application",
    kicker: "Layer 03",
    title: "Application Layer",
    cardSub: "Turn context into workflows and apps",
    lead: "Purpose-built apps for your business, shaped around your workflows instead of generic third-party tools.",
    points: [
      { b: "Replace" },
      { b: "Adapt" },
      { b: "Scale" },
    ],
    image: "/assets/system/layer-application.png",
    accent: "#6fa0ff",
    cardAccent: "#b37cff",
    slideClass: "layer-phone-application",
    Icon: TriangleNodes,
  },
  {
    id: "orchestration",
    kicker: "Layer 04",
    title: "Orchestration Layer",
    cardSub: "Coordinate people, agents and execution",
    lead: "Coordinate people, agents and workflows so the right work moves to the right place at the right time.",
    points: [
      { b: "Assign" },
      { b: "Advance" },
      { b: "Deliver" },
    ],
    image: "/assets/system/layer-orchestration.png",
    accent: "#6fa0ff",
    cardAccent: "#19d8e4",
    slideClass: "layer-phone-orchestration",
    Icon: Shield,
  },
];
