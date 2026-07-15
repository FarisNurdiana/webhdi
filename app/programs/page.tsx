import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Field Programs",
  description:
    "HDI's public field programs and demonstrations: hydrogen vehicle conversion, hydrogen stoves and gensets shown at national clean-energy events in Indonesia.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        label="Field Programs"
        title={
          <>
            TECHNOLOGY,
            <br />
            TAKEN OUTSIDE
          </>
        }
        intro="Every entry below is a real, publicly documented HDI activity with published coverage. As new deployments and pilot projects are completed, they join this record."
      />

      <section className="bg-graphite">
        <div className="mx-auto max-w-shell px-6 py-24 lg:px-12">
          <div className="space-y-10">
            {news.map((item, i) => (
              <Reveal key={item.slug} delay={Math.min(i * 0.06, 0.18)}>
                <article className="grid gap-8 border hairline bg-gradient-to-br from-charcoal to-graphite p-8 sm:p-12 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="font-display text-5xl font-medium text-steel">
                      P—0{i + 1}
                    </p>
                    <p className="meta-label mt-4">{item.dateLabel}</p>
                    <p className="meta-label mt-2 !text-[0.6rem] text-hydrogen">
                      {item.category}
                    </p>
                  </div>
                  <div className="lg:col-span-8 lg:col-start-5">
                    <h2 className="font-display text-2xl leading-snug text-fog sm:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-mist sm:text-base">
                      {item.excerpt}
                    </p>
                    <a
                      href={item.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-dim transition-colors hover:text-hydrogen"
                    >
                      Published coverage — {item.source.name}
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 border-t hairline pt-12">
            <p className="max-w-2xl text-base leading-relaxed text-mist">
              Planning a pilot, demonstration or deployment? HDI works with
              industry, research institutions and international partners.
            </p>
            <div className="mt-8">
              <Button href="/contact">Start a Collaboration</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
