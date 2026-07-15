"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/motion/Reveal";

/**
 * SECTION 04 — THE HDI TECHNOLOGY ECOSYSTEM
 *
 * Animated system diagram of the verified value chain:
 * silica → active silicon → HydroSi solid storage → hydrogen release,
 * with Plasmalysis as a parallel production route, feeding real
 * application classes (PLTD/power, industry, vehicles, households).
 */

type NodeInfo = {
  id: string;
  label: string;
  sub: string;
  detail: string;
};

const CHAIN: NodeInfo[] = [
  {
    id: "silica",
    label: "SILICA",
    sub: "Indonesian silica sand",
    detail: "Abundant domestic feedstock — the starting point of the chain.",
  },
  {
    id: "silicon",
    label: "ACTIVE SILICON",
    sub: "Engineered material",
    detail: "Silica processed into active silicon, the working material of HydroSi.",
  },
  {
    id: "hydrosi",
    label: "HYDROSI",
    sub: "Solid hydrogen carrier",
    detail: "A solid-state carrier — safe, economical, shippable across islands.",
  },
  {
    id: "release",
    label: "HYDROGEN",
    sub: "Release & production",
    detail: "Hydrogen released from the carrier, or produced directly via skid generators and Plasmalysis.",
  },
];

const APPLICATIONS: NodeInfo[] = [
  {
    id: "power",
    label: "POWER",
    sub: "PLTD & gensets",
    detail: "Diesel power plants and gensets converted to hydrogen–diesel co-firing.",
  },
  {
    id: "industry",
    label: "INDUSTRY",
    sub: "Industrial energy",
    detail: "Skid-based hydrogen supply for industrial facilities and demonstrations.",
  },
  {
    id: "mobility",
    label: "VEHICLES",
    sub: "Hydrogen mobility",
    detail: "Conventional vehicles converted to hydrogen fuel — demonstrated in Jakarta.",
  },
  {
    id: "household",
    label: "HOUSEHOLDS",
    sub: "Hydrogen cooking",
    detail: "Clean hydrogen combustion for homes, SMEs and industrial kitchens.",
  },
];

export default function Ecosystem() {
  const [active, setActive] = useState<NodeInfo | null>(null);

  const nodeButton = (n: NodeInfo, accent = false) => (
    <button
      key={n.id}
      type="button"
      onMouseEnter={() => setActive(n)}
      onFocus={() => setActive(n)}
      onMouseLeave={() => setActive(null)}
      onBlur={() => setActive(null)}
      className={`group w-full border px-5 py-4 text-left transition-colors duration-300 ${
        active?.id === n.id
          ? "border-hydrogen bg-hydrogen/10"
          : "hairline bg-charcoal/50 hover:border-line-strong"
      }`}
    >
      <span
        className={`font-display block text-sm font-medium tracking-[0.14em] ${
          accent ? "text-plasma" : "text-fog"
        }`}
      >
        {n.label}
      </span>
      <span className="meta-label mt-1 block !text-[0.6rem] !tracking-[0.16em]">
        {n.sub}
      </span>
    </button>
  );

  return (
    <section className="relative border-t hairline bg-void">
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-40"
      />
      <div className="relative mx-auto max-w-shell px-6 py-28 lg:px-12 lg:py-36">
        <SectionHeader
          index="04"
          label="The HDI Ecosystem"
          title="One connected system, from sand to socket."
          intro="HDI's technologies are not isolated products. Production, solid storage and conversion form a single chain that carries Indonesian silica all the way to usable energy."
        />

        <Reveal className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Value chain */}
            <div className="lg:col-span-8">
              <p className="meta-label mb-5">Value Chain</p>
              <div className="grid gap-3 sm:grid-cols-4">
                {CHAIN.map((n, i) => (
                  <div key={n.id} className="relative">
                    {nodeButton(n)}
                    {i < CHAIN.length - 1 && (
                      <svg
                        aria-hidden="true"
                        className="absolute -right-3 top-1/2 hidden h-2 w-3 -translate-y-1/2 sm:block"
                        viewBox="0 0 12 8"
                      >
                        <path
                          d="M0 4h10M8 1l3 3-3 3"
                          stroke="#2f8bff"
                          strokeWidth="1"
                          fill="none"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              {/* Plasmalysis parallel route */}
              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                <div className="sm:col-start-2 sm:col-span-2">
                  {nodeButton(
                    {
                      id: "plasmalysis",
                      label: "PLASMALYSIS",
                      sub: "Parallel production route",
                      detail:
                        "High-temperature plasma breaks down water vapor, urea and ammonia into hydrogen and derivatives.",
                    },
                    true
                  )}
                </div>
                <p className="meta-label self-center !text-[0.6rem] text-dim/70 sm:col-span-2">
                  Plasma route feeds hydrogen directly into the chain
                </p>
              </div>

              {/* Flow into applications */}
              <div className="my-8 flex items-center gap-4" aria-hidden="true">
                <svg className="h-6 w-full" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path
                    d="M0 5 H100"
                    stroke="rgba(47,139,255,0.5)"
                    strokeWidth="0.6"
                    fill="none"
                    className="flow-line"
                  />
                </svg>
              </div>

              <p className="meta-label mb-5">Applications</p>
              <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
                {APPLICATIONS.map((n) => nodeButton(n))}
              </div>
            </div>

            {/* Detail panel — progressive disclosure */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 border hairline bg-charcoal/60 p-8">
                <p className="meta-label">System Detail</p>
                <p className="font-display mt-5 min-h-14 text-xl text-fog">
                  {active ? active.label : "Hover a node"}
                </p>
                <p className="mt-3 min-h-20 text-sm leading-relaxed text-mist">
                  {active
                    ? active.detail
                    : "Trace the path from raw silica to end-use energy. Every stage is a real HDI technology or application area."}
                </p>
                <div className="mt-6 h-px w-full bg-line" aria-hidden="true" />
                <p className="meta-label mt-6 !text-[0.6rem] text-dim/70">
                  Silica → Silicon → HydroSi → Hydrogen → Applications
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
