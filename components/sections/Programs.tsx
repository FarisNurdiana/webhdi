import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { news } from "@/data/news";

/**
 * SECTION 06 — FIELD PROGRAMS
 *
 * The company's verifiable public track record: real demonstrations and
 * events, each backed by published coverage. Framed as cinematic program
 * entries rather than an invented "projects portfolio" — no fabricated
 * project names, clients or figures.
 */
export default function Programs() {
  return (
    <section className="relative border-t hairline bg-void">
      <div className="relative mx-auto max-w-shell px-6 py-28 lg:px-12 lg:py-36">
        <SectionHeader
          index="06"
          label="Field Programs"
          title="Proven in public, not just on paper."
          intro="HDI takes its technology into the open — city streets, public exhibitions and national hydrogen events — together with partners in Indonesia's energy ecosystem."
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {news.map((item, i) => (
            <Reveal
              key={item.slug}
              delay={Math.min(i * 0.08, 0.24)}
              className="flex"
            >
              <article className="relative flex flex-col justify-between border hairline bg-gradient-to-b from-charcoal to-graphite p-8 transition-colors duration-300 hover:border-line-strong lg:min-h-[24rem]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="meta-label text-hydrogen">
                      P—0{i + 1}
                    </span>
                    <span className="meta-label !text-[0.6rem]">
                      {item.dateLabel}
                    </span>
                  </div>
                  <p className="meta-label mt-8 !text-[0.62rem]">
                    {item.category}
                  </p>
                  <h3 className="font-display mt-3 text-xl leading-snug text-fog">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-8">
                  <p className="text-sm leading-relaxed text-mist line-clamp-4">
                    {item.excerpt}
                  </p>
                  <a
                    href={item.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-dim transition-colors hover:text-hydrogen"
                  >
                    Coverage: {item.source.name}
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <Button href="/programs" variant="ghost">
            All Programs
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
