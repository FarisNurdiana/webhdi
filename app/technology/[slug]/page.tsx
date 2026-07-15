import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import TechnologyMedia from "@/components/visuals/TechnologyMedia";
import { getTechnology, technologies } from "@/data/technologies";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return technologies.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tech = getTechnology(slug);
  if (!tech) return {};
  return {
    title: tech.name,
    description: tech.summary,
    alternates: { canonical: `/technology/${tech.slug}` },
  };
}

export default async function TechnologyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const tech = getTechnology(slug);
  if (!tech) notFound();

  const others = technologies.filter((t) => t.slug !== tech.slug);

  return (
    <>
      <PageHero
        label={`Technology ${tech.index} — ${tech.kicker}`}
        title={tech.name}
        intro={tech.headline}
      />

      <section className="bg-graphite">
        <div className="mx-auto max-w-shell px-6 py-24 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <TechnologyMedia technology={tech} />
            </Reveal>

            <div className="lg:col-span-5">
              {tech.detail.map((para, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="mb-6 text-base leading-relaxed text-mist">
                    {para}
                  </p>
                </Reveal>
              ))}

              <Reveal delay={0.2}>
                <dl className="mt-6 space-y-4 border-t hairline pt-8">
                  {tech.facts.map((f) => (
                    <div
                      key={f.label}
                      className="grid grid-cols-[8rem_1fr] gap-4 text-sm"
                    >
                      <dt className="meta-label pt-0.5">{f.label}</dt>
                      <dd className="text-mist">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={0.28}>
                <div className="mt-12">
                  <Button href="/contact">Discuss This Technology</Button>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Other technologies */}
          <div className="mt-28 border-t hairline pt-12">
            <p className="meta-label">Continue Exploring</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/technology/${o.slug}`}
                  className="group border hairline bg-charcoal/50 p-8 transition-colors duration-300 hover:border-hydrogen"
                >
                  <p className="meta-label text-hydrogen">{o.index}</p>
                  <h3 className="font-display mt-3 text-2xl text-fog">
                    {o.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist line-clamp-2">
                    {o.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
