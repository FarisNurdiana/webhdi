import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "PT Hidro Dinamika Internasional is an Indonesian deep-tech company with an office in Jakarta Selatan and a workshop in Bandung, building a hydrogen value chain from silica sand and plasma technology to real applications.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  {
    n: "01",
    t: "Start from Indonesian matter",
    d: "The chain begins with abundant domestic silica sand — a feedstock Indonesia has in depth, turned into an energy material.",
  },
  {
    n: "02",
    t: "Build the whole chain",
    d: "Production (skid generators, Plasmalysis), storage (HydroSi solid carrier) and conversion (vehicles, gensets, stoves) — one connected system.",
  },
  {
    n: "03",
    t: "Convert, don't discard",
    d: "Existing vehicles and diesel gensets are converted to hydrogen operation rather than replaced — a pragmatic route to decarbonization.",
  },
  {
    n: "04",
    t: "Prove it in public",
    d: "HDI demonstrates working technology at national events — from Hydrogen Car Free Day in Jakarta to the IFHE forum.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About HDI"
        title={
          <>
            INDONESIAN TECHNOLOGY.
            <br />
            GLOBAL AMBITION.
          </>
        }
        intro={site.description}
      />

      <section className="bg-graphite">
        <div className="mx-auto max-w-shell px-6 py-24 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="headline text-3xl text-fog sm:text-4xl">
                  From matter to energy — as a company mission.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 text-base leading-relaxed text-mist">
                  {site.name} (HDI) is based in {site.location}. The company
                  develops hydrogen and silica technology: transforming silica
                  sand into active silicon as a solid hydrogen carrier,
                  producing hydrogen with modular skid generators and
                  high-temperature plasma, and converting vehicles, gensets and
                  cooking equipment to run on clean hydrogen.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-5 text-base leading-relaxed text-mist">
                  HDI is open to collaboration with industry, research
                  institutions and international partners in hydrogen
                  technology development and deployment projects — in
                  Indonesia and beyond.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <div className="mt-10">
                  <Button href="/contact">Contact HDI</Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="space-y-0 border-t hairline">
                {PRINCIPLES.map((p, i) => (
                  <Reveal key={p.n} delay={Math.min(i * 0.06, 0.18)}>
                    <li className="grid grid-cols-[3.5rem_1fr] gap-6 border-b hairline py-8">
                      <span className="font-display text-2xl font-medium text-hydrogen">
                        {p.n}
                      </span>
                      <div>
                        <h3 className="font-display text-lg text-fog">{p.t}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-mist">
                          {p.d}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
