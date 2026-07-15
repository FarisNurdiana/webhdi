"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

/**
 * OFFICIAL LOGO SLOT — IDENTITY RULE
 *
 * This component renders the official PT Hidro Dinamika Internasional logo
 * from /public/images/logo.png (the H₂ droplet mark). The official logo
 * must never be redrawn, reinterpreted or replaced.
 *
 * If the file is not yet present in the repository, the component falls
 * back to a plain typographic wordmark (company name set in the site
 * typeface). The wordmark is NOT a logo redesign — it is a neutral
 * placeholder that disappears automatically once the official asset is
 * added at public/images/logo.png.
 */
export default function Logo({ withName = true }: { withName?: boolean }) {
  const [logoAvailable, setLogoAvailable] = useState(true);

  return (
    <Link
      href="/"
      aria-label={`${site.name} — Home`}
      className="group flex items-center gap-3"
    >
      {logoAvailable && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src="/images/logo.png"
          alt={`${site.name} logo`}
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
          onError={() => setLogoAvailable(false)}
        />
      )}
      {(withName || !logoAvailable) && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[0.95rem] font-semibold tracking-[0.08em] text-fog">
            HIDRO DINAMIKA
          </span>
          <span className="meta-label mt-1 !text-[0.55rem] tracking-[0.34em] text-dim">
            INTERNASIONAL
          </span>
        </span>
      )}
    </Link>
  );
}
