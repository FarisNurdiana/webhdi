import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "News and published coverage of PT Hidro Dinamika Internasional's hydrogen technology demonstrations and clean-energy activities.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        label="News & Insights"
        title={
          <>
            IN THE FIELD,
            <br />
            IN THE PRESS
          </>
        }
        intro="Published coverage of HDI's activities. Every item links to its original source."
      />

      <section className="bg-graphite">
        <div className="mx-auto max-w-shell px-6 py-24 lg:px-12">
          <div className="border-t hairline">
            {news.map((item, i) => (
              <Reveal key={item.slug} delay={Math.min(i * 0.05, 0.15)}>
                <a
                  href={item.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-4 border-b hairline py-12 transition-colors duration-300 hover:bg-charcoal/40 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="lg:col-span-3">
                    <p className="meta-label">{item.dateLabel}</p>
                    <p className="meta-label mt-2 !text-[0.6rem] text-hydrogen">
                      {item.category}
                    </p>
                  </div>
                  <div className="lg:col-span-8">
                    <h2 className="font-display text-xl leading-snug text-fog transition-colors group-hover:text-white sm:text-2xl">
                      {item.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist">
                      {item.excerpt}
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-dim">
                      Source: {item.source.name} ↗
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
