import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { applications } from "@/data/applications";

/**
 * SECTION 05 — REAL-WORLD APPLICATIONS
 * Editorial index, not a card grid: numbered rows with generous
 * whitespace, hairline separations, and verified proof lines.
 */
export default function ApplicationsShowcase() {
  return (
    <section className="border-t hairline bg-graphite">
      <div className="mx-auto max-w-shell px-6 py-28 lg:px-12 lg:py-36">
        <SectionHeader
          index="05"
          label="Applications"
          title="Where the hydrogen goes."
          intro="From converted vehicles on Jakarta streets to gensets, kitchens and island logistics — HDI technology is built for deployment, not for the lab shelf."
        />

        <div className="mt-20 border-t hairline">
          {applications.map((app, i) => (
            <Reveal
              key={app.slug}
              delay={Math.min(i * 0.04, 0.2)}
              className="group border-b hairline"
            >
              <Link
                href="/applications"
                className="grid gap-4 py-9 transition-colors duration-300 hover:bg-charcoal/40 sm:grid-cols-12 sm:items-baseline sm:gap-8 lg:py-11"
              >
                <span className="meta-label sm:col-span-1 sm:pl-2 text-hydrogen">
                  {app.index}
                </span>
                <h3 className="headline text-2xl text-fog transition-colors duration-300 group-hover:text-white sm:col-span-4 sm:text-3xl lg:text-4xl">
                  {app.title}
                </h3>
                <div className="sm:col-span-6">
                  <p className="meta-label !text-[0.62rem]">{app.category}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist">
                    {app.summary}
                  </p>
                  {app.proof && (
                    <p className="mt-3 text-xs tracking-wide text-hydrogen/80">
                      {app.proof}
                    </p>
                  )}
                </div>
                <span
                  aria-hidden="true"
                  className="hidden text-dim transition-all duration-300 group-hover:translate-x-1 group-hover:text-hydrogen sm:col-span-1 sm:block sm:justify-self-end sm:pr-2"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
