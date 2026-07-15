import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

/**
 * SECTION 07/08 — ABOUT HDI
 * Verified metrics are unavailable, so this section carries the company
 * story qualitatively — exactly as the content rules require.
 */
export default function AboutStrip() {
  return (
    <section className="border-t hairline bg-graphite">
      <div className="mx-auto max-w-shell px-6 py-28 lg:px-12 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="meta-label text-hydrogen">07</span>
                <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
                <span className="meta-label">About HDI</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="headline mt-7 text-4xl text-fog sm:text-5xl lg:text-6xl">
                INDONESIAN TECHNOLOGY.
                <br />
                GLOBAL AMBITION.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
                {site.name} is an Indonesian deep-tech company based in{" "}
                {site.location}. HDI builds a hydrogen value chain from silica
                sand and plasma technology to real applications — vehicles,
                cooking, gensets and clean electricity — for Indonesia and the
                world.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist">
                The company is open to collaboration with industry, research
                institutions and international partners in hydrogen technology
                development and deployment projects.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10">
                <Button href="/about" variant="ghost">
                  About the Company
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Qualitative pillars — no invented statistics */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.2}>
              <dl className="space-y-8 border-l hairline pl-8">
                {[
                  {
                    t: "Domestic feedstock",
                    d: "Built on abundant Indonesian silica sand.",
                  },
                  {
                    t: "Full value chain",
                    d: "Production, solid storage and end-use conversion in one ecosystem.",
                  },
                  {
                    t: "Field-demonstrated",
                    d: "Hydrogen vehicle, stoves and genset shown publicly in Jakarta.",
                  },
                  {
                    t: "Open collaboration",
                    d: "Working with industry, research institutions and international partners.",
                  },
                ].map((item) => (
                  <div key={item.t}>
                    <dt className="font-display text-base font-medium text-fog">
                      {item.t}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-dim">
                      {item.d}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
