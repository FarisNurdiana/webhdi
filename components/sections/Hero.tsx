"use client";

import dynamic from "next/dynamic";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_45%,rgba(19,90,196,0.12),transparent_70%)]" />
  ),
});

export default function Hero() {
  return (
    <section className="vignette relative flex min-h-svh items-end overflow-hidden bg-void">
      {/* 3D layer */}
      <HeroScene />

      {/* Fine technical frame */}
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-60"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-shell px-6 pb-28 pt-48 lg:px-12 lg:pb-32">
        <Reveal>
          <p className="meta-label flex items-center gap-4">
            <span className="h-px w-10 bg-hydrogen" aria-hidden="true" />
            {site.name}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="headline mt-8 max-w-5xl text-[clamp(2.8rem,8vw,7rem)] text-fog">
            FROM SILICA
            <br />
            TO <span className="text-hydrogen">HYDROGEN</span>
          </h1>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mt-8 max-w-md text-base leading-relaxed text-mist sm:text-lg">
            Indonesian technology for a cleaner energy future — turning
            abundant silica sand, plasma and engineering into practical
            hydrogen systems.
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-11 flex flex-wrap items-center gap-4">
            <Button href="/technology">Explore Our Technology</Button>
            <Button href="/about" variant="ghost">
              Discover HDI
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-6 z-10 hidden flex-col items-center gap-4 sm:flex lg:right-12"
      >
        <span className="meta-label rotate-90 !tracking-[0.3em]">Scroll</span>
        <span className="relative mt-6 block h-16 w-px overflow-hidden bg-line-strong">
          <span className="scroll-cue-bar absolute left-0 top-0 h-full w-full bg-hydrogen" />
        </span>
      </div>
    </section>
  );
}
