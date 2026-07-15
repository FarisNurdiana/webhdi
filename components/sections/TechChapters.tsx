import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import TechnologyMedia from "@/components/visuals/TechnologyMedia";
import { technologies } from "@/data/technologies";

/**
 * SECTION 03 — CORE TECHNOLOGIES
 * Three large cinematic chapters, alternating composition. No card grids.
 */
export default function TechChapters() {
  return (
    <section className="border-t hairline bg-graphite">
      <div className="mx-auto max-w-shell px-6 py-28 lg:px-12 lg:py-36">
        <SectionHeader
          index="03"
          label="Core Technologies"
          title={
            <>
              Three systems.
              <br />
              One hydrogen ecosystem.
            </>
          }
          intro="Production, storage and conversion — engineered to work as a single value chain from Indonesian silica sand to usable clean energy."
        />

        <div className="mt-24 space-y-32 lg:mt-32 lg:space-y-44">
          {technologies.map((tech, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={tech.slug}
                className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
              >
                {/* Visual */}
                <Reveal
                  className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}
                >
                  <TechnologyMedia technology={tech} />
                </Reveal>

                {/* Copy */}
                <div
                  className={`lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}
                >
                  <Reveal>
                    <span
                      aria-hidden="true"
                      className="font-display block text-[5.5rem] font-medium leading-none text-steel lg:text-[7rem]"
                    >
                      {tech.index}
                    </span>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <p className="meta-label mt-2 text-hydrogen">
                      {tech.kicker}
                    </p>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <h3 className="headline mt-4 text-3xl text-fog sm:text-4xl">
                      {tech.name}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="mt-3 font-display text-lg text-mist">
                      {tech.headline}
                    </p>
                  </Reveal>
                  <Reveal delay={0.26}>
                    <p className="mt-5 text-sm leading-relaxed text-mist sm:text-base">
                      {tech.summary}
                    </p>
                  </Reveal>
                  <Reveal delay={0.32}>
                    <dl className="mt-8 space-y-3 border-t hairline pt-6">
                      {tech.facts.map((f) => (
                        <div
                          key={f.label}
                          className="grid grid-cols-[7rem_1fr] gap-4 text-sm"
                        >
                          <dt className="meta-label !text-[0.62rem] pt-0.5">
                            {f.label}
                          </dt>
                          <dd className="text-mist">{f.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </Reveal>
                  <Reveal delay={0.38}>
                    <Link
                      href={`/technology/${tech.slug}`}
                      className="group mt-9 inline-flex items-center gap-3 font-display text-[0.8rem] font-medium uppercase tracking-[0.18em] text-fog transition-colors hover:text-hydrogen"
                    >
                      Explore Technology
                      <span
                        aria-hidden="true"
                        className="block h-px w-10 bg-current transition-all duration-300 group-hover:w-14"
                      />
                    </Link>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
