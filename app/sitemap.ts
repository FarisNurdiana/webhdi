import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { technologies } from "@/data/technologies";

// Required so the route is emitted as a static file under `output: 'export'`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/technology",
    "/applications",
    "/programs",
    "/about",
    "/news",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const techRoutes = technologies.map((t) => ({
    url: `${site.url}/technology/${t.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...techRoutes];
}
