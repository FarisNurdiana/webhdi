import Reveal from "@/components/motion/Reveal";
import type { ReactNode } from "react";

/**
 * Interior page opening: dark, typographic, technical — consistent with
 * the homepage chapters but lighter in weight (no WebGL).
 */
export default function PageHero({
  label,
  title,
  intro,
}: {
  label: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <header className="vignette relative overflow-hidden border-b hairline bg-void">
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-50"
      />
      <div className="relative mx-auto max-w-shell px-6 pb-20 pt-44 lg:px-12 lg:pb-24 lg:pt-52">
        <Reveal>
          <p className="meta-label flex items-center gap-4">
            <span className="h-px w-10 bg-hydrogen" aria-hidden="true" />
            {label}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="headline mt-7 max-w-4xl text-5xl text-fog sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
