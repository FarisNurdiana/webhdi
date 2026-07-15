/**
 * Real-world application areas.
 *
 * Sources: hidrodinamika.com and published coverage of HDI demonstrations
 * (Hydrogen Car Free Day Jakarta, IFHE exhibition, Hydrogen Day 2025).
 */

export type Application = {
  index: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  detail: string;
  proof?: string;
};

export const applications: Application[] = [
  {
    index: "01",
    slug: "hydrogen-mobility",
    title: "Hydrogen Mobility",
    category: "Transportation",
    summary:
      "Converting conventional vehicles to run on hydrogen fuel — without replacing the entire engine.",
    detail:
      "HDI has developed conversion technology that allows existing internal-combustion vehicles to operate on hydrogen fuel without a full engine replacement. The approach was demonstrated publicly with a converted Daihatsu Terios at Hydrogen Car Free Day in Jakarta.",
    proof: "Demonstrated: converted hydrogen vehicle, Hydrogen Car Free Day, Jakarta, October 2025.",
  },
  {
    index: "02",
    slug: "power-generation",
    title: "Power Generation",
    category: "Energy Systems",
    summary:
      "Converting existing diesel generator sets to hydrogen–diesel co-firing, up to predominantly hydrogen operation.",
    detail:
      "Rather than replacing installed generation assets, HDI converts existing diesel gensets to co-fire hydrogen alongside diesel — with the hydrogen share extendable until it dominates the fuel mix. The same pathway targets diesel power plants (PLTD) supplied by modular skid hydrogen production.",
  },
  {
    index: "03",
    slug: "industrial-energy",
    title: "Industrial Energy",
    category: "Industry",
    summary:
      "Modular hydrogen production packages for industrial facilities and demonstration projects.",
    detail:
      "HDI's skid-based production units bring hydrogen capacity directly to industrial sites, with system capacity configured per deployment — from tens to hundreds of kilograms of hydrogen per day.",
  },
  {
    index: "04",
    slug: "remote-island-energy",
    title: "Remote & Island Energy",
    category: "Distributed Energy",
    summary:
      "A solid hydrogen carrier designed for the logistics of an archipelago.",
    detail:
      "HydroSi carries hydrogen as a stable solid made from Indonesian silica sand — safe, economical, and practical to ship between islands. It is a hydrogen logistics answer shaped by Indonesian geography, aimed at distributed and remote energy needs.",
  },
  {
    index: "05",
    slug: "hydrogen-cooking",
    title: "Hydrogen Cooking",
    category: "Households & SMEs",
    summary:
      "Clean hydrogen combustion for households, small businesses and industrial kitchens reducing LPG dependence.",
    detail:
      "HDI develops hydrogen-fueled cooking solutions as a clean alternative for households, SMEs and industrial kitchens that want to reduce fossil LPG consumption. Hydrogen stove units have been demonstrated at public clean-energy events in Jakarta.",
    proof: "Demonstrated: hydrogen stove units, Hydrogen Car Free Day, Jakarta, October 2025.",
  },
  {
    index: "06",
    slug: "research-development",
    title: "Research & Development",
    category: "Deep Tech",
    summary:
      "Continuous development across silica processing, plasma reactors and hydrogen systems — open to collaboration.",
    detail:
      "HDI is open to collaboration with industry, research institutions and international partners in hydrogen technology development and deployment projects, spanning silica-to-silicon processing, plasma decomposition and applied hydrogen systems.",
  },
];
