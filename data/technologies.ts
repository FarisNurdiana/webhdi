/**
 * Core technology content.
 *
 * Sources: hidrodinamika.com (official site), plasmalisis page, and
 * published coverage of HDI field demonstrations. Descriptions are
 * faithful rewrites of official material — no invented specifications.
 */

export type Technology = {
  index: string;
  slug: string;
  name: string;
  kicker: string;
  headline: string;
  summary: string;
  detail: string[];
  facts: { label: string; value: string }[];
  visual: "skid" | "hydrosi" | "plasma";
  atmosphere: "industrial" | "material" | "energetic";
};

export const technologies: Technology[] = [
  {
    index: "01",
    slug: "skid-hydrogen-generator",
    name: "Skid Hydrogen Generator",
    kicker: "Modular Hydrogen Production",
    headline: "Hydrogen production, engineered as a system.",
    summary:
      "Modular hydrogen production packages for diesel power plants, industry and demonstration projects — with capacity configurable from tens to hundreds of kilograms of hydrogen per day.",
    detail: [
      "The Skid Hydrogen Generator packages HDI's hydrogen production technology into a modular, transportable unit. Instead of building fixed plant infrastructure, hydrogen capacity is delivered as an engineered skid that can be installed where energy is needed.",
      "Target deployments include diesel power plants (PLTD) moving toward hydrogen co-firing, industrial facilities, and demonstration projects — with system capacity tailored per site, from tens to hundreds of kilograms of H₂ per day.",
    ],
    facts: [
      { label: "Format", value: "Modular skid package" },
      { label: "Capacity", value: "Tens to hundreds of kg H₂ / day, per configuration" },
      { label: "Deployment", value: "Diesel power plants · industry · demonstration projects" },
    ],
    visual: "skid",
    atmosphere: "industrial",
  },
  {
    index: "02",
    slug: "hydrosi",
    name: "HydroSi",
    kicker: "Silica-Based Solid Hydrogen Carrier",
    headline: "Hydrogen. In solid form.",
    summary:
      "HydroSi transforms Indonesian silica sand into active silicon — a solid hydrogen carrier that is safe to handle, economical, and practical to ship between islands.",
    detail: [
      "Indonesia is an archipelago, and moving energy between islands is one of its hardest infrastructure problems. HydroSi approaches hydrogen logistics at the material level: abundant Indonesian silica sand is processed into active silicon that functions as a solid hydrogen carrier — conceptually, a solid-state hydrogen battery.",
      "Because the carrier is a stable solid rather than a compressed or cryogenic gas, it is safer to handle, more economical to store, and far simpler to distribute across island geographies. Hydrogen is released from the carrier where and when energy is needed.",
    ],
    facts: [
      { label: "Feedstock", value: "Indonesian silica sand" },
      { label: "Form", value: "Active silicon — solid hydrogen carrier" },
      { label: "Character", value: "Safe · economical · shippable across islands" },
    ],
    visual: "hydrosi",
    atmosphere: "material",
  },
  {
    index: "03",
    slug: "plasmalysis",
    name: "Plasmalysis",
    kicker: "High-Temperature Plasma Reactor Platform",
    headline: "Breaking molecules with controlled plasma.",
    summary:
      "A reactor platform that uses high-temperature plasma to break down water vapor, urea and ammonia molecules into hydrogen gas and derivative products.",
    detail: [
      "Plasmalysis (PlasmaArc) is HDI's plasma reactor platform. Inside the reactor, high-temperature plasma decomposes feedstock molecules — water vapor, urea, ammonia — into hydrogen gas and other derivative products.",
      "Plasma-based decomposition gives the platform flexibility in feedstock and output, making it a complementary production route alongside HDI's silica-based carrier technology within one connected hydrogen ecosystem.",
    ],
    facts: [
      { label: "Principle", value: "High-temperature plasma decomposition" },
      { label: "Feedstocks", value: "Water vapor · urea · ammonia" },
      { label: "Output", value: "Hydrogen gas + derivative products" },
    ],
    visual: "plasma",
    atmosphere: "energetic",
  },
];

export function getTechnology(slug: string): Technology | undefined {
  return technologies.find((t) => t.slug === slug);
}
