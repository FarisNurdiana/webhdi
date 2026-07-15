/**
 * Global site configuration for PT Hidro Dinamika Internasional.
 *
 * CONTENT RULE: every fact in /data must be traceable to official company
 * materials (hidrodinamika.com) or published press coverage. Never add
 * numbers, clients, or claims that cannot be verified.
 */

export const site = {
  name: "PT Hidro Dinamika Internasional",
  shortName: "HDI",
  tagline: "Hydrogen & Silica Technology",
  description:
    "PT Hidro Dinamika Internasional (HDI) is an Indonesian deep-tech company building a hydrogen value chain — from silica sand and plasma technology to applications in vehicles, cooking, power generation and industry.",
  url: "https://www.hidrodinamika.com",
  email: "admin.hdi@hidrodinamika.com",
  phone: "+62-21-751977",
  location: "Kabupaten Bandung, Jawa Barat, Indonesia",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Technology", href: "/technology" },
  { label: "Applications", href: "/applications" },
  { label: "Programs", href: "/programs" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];
