import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import TechnologyMedia from "@/components/visuals/TechnologyMedia";
import { technologies } from "@/data/technologies";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "HDI's core technologies: the Skid Hydrogen Generator, HydroSi silica-based solid hydrogen carrier, and the Plasmalysis plasma reactor platform.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        label="Technology"
        title={
          <>
            ENGINEERING
            <br />
            THE ELEMENTS
          </>
        }
        intro="Three connected systems carry Indonesian silica sand all the way to usable clean energy: modular hydrogen production, a solid hydrogen carrier, and plasma-based molecular decomposition."
      />

      <section className="bg-graphite">
        <div className="mx-auto max-w-shell px-6 py-24 lg:px-12">
          <div className="space-y-28">
            {technologies.map((tech, i) => (
              <article
                key={tech.slug}
                className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
              >
                <Reveal
                  className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2 lg:col-start-7" : ""}`}
                >
                  <TechnologyMedia technology={tech} />
                </Reveal>
                <div
                  className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : "lg:col-start-8"}`}
                >
                  <Reveal>
                    <p className="meta-label text-hydrogen">
                      {tech.index} — {tech.kicker}
                    </p>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h2 className="headline mt-4 text-3xl text-fog sm:text-4xl">
                      {tech.name}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <p className="mt-5 text-sm leading-relaxed text-mist sm:text-base">
                      {tech.summary}
                    </p>
                  </Reveal>
                  <Reveal delay={0.24}>
                    <Link
                      href={`/technology/${tech.slug}`}
                      className="group mt-8 inline-flex items-center gap-3 font-display text-[0.8rem] font-medium uppercase tracking-[0.18em] text-fog transition-colors hover:text-hydrogen"
                    >
                      Explore {tech.name}
                      <span
                        aria-hidden="true"
                        className="block h-px w-10 bg-current transition-all duration-300 group-hover:w-14"
                      />
                    </Link>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
