import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Required so the route is emitted as a static file under `output: 'export'`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
