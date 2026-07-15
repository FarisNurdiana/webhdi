import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { news } from "@/data/news";

/**
 * SECTION 09 — NEWS / INSIGHTS
 * Minimal editorial list of real, source-backed items.
 */
export default function NewsStrip() {
  return (
    <section className="border-t hairline bg-void">
      <div className="mx-auto max-w-shell px-6 py-28 lg:px-12 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            index="08"
            label="News & Insights"
            title="In the field, in the press."
          />
          <Reveal>
            <Link
              href="/news"
              className="group inline-flex items-center gap-3 font-display text-[0.8rem] font-medium uppercase tracking-[0.18em] text-mist transition-colors hover:text-hydrogen"
            >
              All News
              <span aria-hidden="true" className="block h-px w-10 bg-current transition-all duration-300 group-hover:w-14" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 border-t hairline">
          {news.map((item, i) => (
            <Reveal key={item.slug} delay={Math.min(i * 0.05, 0.15)}>
              <a
                href={item.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-3 border-b hairline py-8 transition-colors duration-300 hover:bg-charcoal/40 sm:grid-cols-12 sm:items-baseline sm:gap-8"
              >
                <span className="meta-label sm:col-span-2 sm:pl-2">
                  {item.dateLabel}
                </span>
                <span className="meta-label !text-[0.6rem] text-hydrogen sm:col-span-2">
                  {item.category}
                </span>
                <h3 className="font-display text-lg leading-snug text-fog transition-colors group-hover:text-white sm:col-span-7">
                  {item.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="hidden text-dim transition-all duration-300 group-hover:translate-x-1 group-hover:text-hydrogen sm:col-span-1 sm:block sm:justify-self-end sm:pr-2"
                >
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
