export type LineKey = "solutions" | "products" | "studio";

export type BusinessLine = {
  key: LineKey;
  title: string;
  body: string;
  cta: string;
  asset: string;
  targetId: string;
};

export const venturesHeader = {
  eyebrow: "Our Business Lines",
  titleLines: ["One stack.", "Three ways to create value."],
  description:
    "The same internal operating system powers our products, client systems, and the companies we build.",
};

export const businessLines: BusinessLine[] = [
  {
    key: "solutions",
    title: "Client Solutions",
    body: "Custom operating systems adapted to each client.",
    cta: "See client systems",
    asset: "/assets/sketch/client-dashboard-only.png",
    targetId: "saikan-client-detail",
  },
  {
    key: "products",
    title: "Saikan Products",
    body: "AI-native software products built from our internal stack.",
    cta: "Explore products",
    asset: "/assets/sketch/biz-products.png",
    targetId: "saikan-products-detail",
  },
  {
    key: "studio",
    title: "Venture Studio",
    body: "Companies created and scaled using our infrastructure.",
    cta: "See venture studio",
    asset: "/assets/sketch/RefLab Phone Image.png",
    targetId: "saikan-venture-detail",
  },
];
