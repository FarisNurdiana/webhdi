import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { applications } from "@/data/applications";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Where HDI hydrogen technology is applied: mobility, power generation, industry, remote and island energy, hydrogen cooking, and R&D collaboration.",
  alternates: { canonical: "/applications" },
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        label="Applications"
        title={
          <>
            POWERING A<br />
            CLEANER FUTURE
          </>
        }
        intro="HDI technology is built for deployment across transportation, power, industry and households — shaped by the real logistics of the Indonesian archipelago."
      />

      <section className="bg-graphite">
        <div className="mx-auto max-w-shell px-6 py-24 lg:px-12">
          <div className="space-y-0 border-t hairline">
            {applications.map((app, i) => (
              <Reveal key={app.slug} delay={Math.min(i * 0.03, 0.12)}>
                <article className="grid gap-6 border-b hairline py-14 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-4">
                    <p className="meta-label text-hydrogen">{app.index}</p>
                    <h2 className="headline mt-4 text-3xl text-fog sm:text-4xl">
                      {app.title}
                    </h2>
                    <p className="meta-label mt-4 !text-[0.62rem]">
                      {app.category}
                    </p>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-6">
                    <p className="font-display text-lg text-mist">
                      {app.summary}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-mist/90 sm:text-base">
                      {app.detail}
                    </p>
                    {app.proof && (
                      <p className="mt-5 border-l-2 border-hydrogen/60 pl-4 text-sm text-hydrogen/90">
                        {app.proof}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <Button href="/contact">Discuss an Application</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
