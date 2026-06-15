import {
  Crosshair,
  Database,
  FileText,
  Gauge,
  Layers,
  LayoutGrid,
  Share2,
  Shield,
  SlidersHorizontal,
  Target,
  TrendingUp,
  User,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const thesisHeader = {
  eyebrow: "Our Thesis",
  titleLines: ["The future of software", "is not apps. It's systems."],
  description: [
    "Companies rely on countless tools, documents and people to get work done. But disconnected systems create friction, slow decisions and limit impact.",
    "Saikan brings everything together into one adaptive operating layer that understands your business and drives it forward.",
  ],
};

export type ThesisInput = {
  label: string;
  Icon: LucideIcon;
  color: string;
  y: number;
  entry: number;
};

export type Capability = {
  title: string;
  desc: string;
  color: string;
  Icon?: LucideIcon;
  badge?: string;
};

export type Outcome = {
  title: string;
  sub: string;
  color: string;
  Icon: LucideIcon;
  chipY: number;
  rowY: number;
};

export const THESIS_INPUTS: ThesisInput[] = [
  { label: "Apps", Icon: LayoutGrid, color: "#4c9dff", y: 26, entry: 88 },
  { label: "People", Icon: User, color: "#19d8e4", y: 70, entry: 106 },
  { label: "Documents", Icon: FileText, color: "#ff5cc8", y: 114, entry: 122 },
  { label: "Processes", Icon: Share2, color: "#ffb32c", y: 158, entry: 138 },
  { label: "Data", Icon: Database, color: "#46d879", y: 202, entry: 154 },
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Context",
    desc: "Understands how work, people and decisions connect.",
    color: "#4c9dff",
    Icon: Target,
  },
  {
    title: "Memory",
    desc: "Keeps operational truth alive across the company.",
    color: "#19d8e4",
    Icon: Layers,
  },
  {
    title: "Execution",
    desc: "Turns knowledge into structured, accountable action.",
    color: "#9b74ff",
    Icon: Zap,
  },
  {
    title: "Proactive",
    desc: "Acts before problems become blockers.",
    color: "#c46cff",
    Icon: Shield,
  },
  {
    title: "Always On",
    desc: "Works continuously, 24/7, not only when asked.",
    color: "#2bd6b4",
    badge: "24/7",
  },
  {
    title: "Compound",
    desc: "Every action improves future outcomes and performance.",
    color: "#ffb32c",
    Icon: TrendingUp,
  },
];

export const OUTCOMES: Outcome[] = [
  { title: "Growth", sub: "Scale with confidence", color: "#46d879", Icon: TrendingUp, chipY: 88, rowY: 26 },
  { title: "Precision", sub: "Make decisions with clarity", color: "#4c9dff", Icon: Crosshair, chipY: 104, rowY: 70 },
  { title: "Control", sub: "Govern with confidence", color: "#9b74ff", Icon: SlidersHorizontal, chipY: 120, rowY: 114 },
  { title: "Velocity", sub: "Move faster, together", color: "#ffb32c", Icon: Gauge, chipY: 136, rowY: 158 },
  { title: "Alignment", sub: "Everyone in sync", color: "#19d8e4", Icon: Workflow, chipY: 152, rowY: 202 },
];
