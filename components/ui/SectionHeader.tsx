import Reveal from "@/components/motion/Reveal";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
};

/**
 * Standard chapter opening: numbered technical label, hairline rule,
 * large editorial headline, optional short intro.
 */
export default function SectionHeader({
  index,
  label,
  title,
  intro,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}>
      <Reveal>
        <div
          className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}
        >
          <span className="meta-label text-hydrogen">{index}</span>
          <span className="reveal-line is-inview h-px w-10 bg-line-strong" />
          <span className="meta-label">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="headline mt-7 text-4xl text-fog sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
