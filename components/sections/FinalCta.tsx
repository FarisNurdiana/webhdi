import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";

/**
 * SECTION 10 — FINAL CINEMATIC CTA
 * A single hydrogen molecule suspended in darkness. Quiet, memorable.
 */
export default function FinalCta() {
  return (
    <section className="vignette relative overflow-hidden border-t hairline bg-void">
      {/* Suspended H₂ molecule — procedural SVG */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 400 400" className="h-[130%] w-auto opacity-70">
          <defs>
            <radialGradient id="cta-atom" cx="0.4" cy="0.35" r="1">
              <stop offset="0" stopColor="#6fb0ff" />
              <stop offset="0.45" stopColor="#2f8bff" />
              <stop offset="1" stopColor="#05070a" />
            </radialGradient>
            <radialGradient id="cta-halo" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="rgba(47,139,255,0.16)" />
              <stop offset="1" stopColor="rgba(47,139,255,0)" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="190" fill="url(#cta-halo)" />
          {/* bond */}
          <line x1="164" y1="212" x2="236" y2="188" stroke="rgba(143,194,255,0.5)" strokeWidth="2" />
          {/* two hydrogen atoms */}
          <circle cx="152" cy="216" r="34" fill="url(#cta-atom)" className="pulse-node" />
          <circle cx="248" cy="184" r="34" fill="url(#cta-atom)" className="pulse-node" style={{ animationDelay: "1.4s" }} />
          {/* drifting field */}
          {[
            [70, 110], [330, 90], [310, 300], [90, 310], [200, 60], [350, 200], [50, 200], [200, 350],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.6" fill="#3a6ea8" opacity="0.7" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85svh] max-w-shell flex-col items-center justify-center px-6 py-32 text-center lg:px-12">
        <Reveal>
          <p className="meta-label">PT Hidro Dinamika Internasional</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline mt-8 max-w-4xl text-4xl text-fog sm:text-6xl lg:text-7xl">
            THE FUTURE OF ENERGY
            <br />
            BEGINS WITH <span className="text-hydrogen">MATTER.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Explore collaboration opportunities with PT Hidro Dinamika
            Internasional — for industry, research institutions and
            international partners.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href="/technology">Explore Technology</Button>
            <Button href="/contact" variant="ghost">
              Start a Collaboration
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
