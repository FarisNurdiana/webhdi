"use client";

import { useMemo } from "react";

/**
 * Conceptual HydroSi visual: silica grains condensing into an engineered
 * solid carrier sphere. Pure SVG, golden-angle packing — clearly abstract,
 * no unsupported scientific claims.
 */
export default function HydrosiVisual() {
  const dots = useMemo(() => {
    const out: { x: number; y: number; r: number; c: string; o: number }[] = [];
    const CX = 280;
    const CY = 210;
    const R = 150;
    const COUNT = 420;
    for (let i = 0; i < COUNT; i++) {
      // golden-angle spiral on a projected sphere
      const phi = Math.acos(2 * ((i + 0.5) / COUNT) - 1);
      const theta = i * 2.39996;
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi); // -1 back … 1 front
      const depth = (z + 1) / 2;
      // outer shell keeps a mineral tone; the core turns hydrogen blue
      const rad = Math.hypot(x, y);
      const core = rad < 0.55;
      out.push({
        x: CX + x * R,
        y: CY + y * R,
        r: 1.2 + depth * 2.2,
        c: core ? "#2f8bff" : "#c8b590",
        o: 0.25 + depth * 0.65,
      });
    }
    return out;
  }, []);

  return (
    <svg
      viewBox="0 0 560 420"
      role="img"
      aria-label="Conceptual visualization of HydroSi: silica-derived particles forming a solid sphere with a hydrogen-bearing core"
      className="h-auto w-full"
    >
      {/* stray silica grains being drawn in */}
      {[
        [60, 70], [110, 330], [480, 90], [510, 300], [40, 200], [520, 200],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="#c8b590" opacity="0.45" className="pulse-node" />
      ))}

      {/* faint capture orbits */}
      <ellipse cx="280" cy="210" rx="220" ry="120" fill="none" stroke="rgba(255,255,255,0.06)" />
      <ellipse cx="280" cy="210" rx="180" ry="170" fill="none" stroke="rgba(255,255,255,0.05)" />

      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c} opacity={d.o} />
      ))}

      <g
        fill="#7d878e"
        fontSize="10"
        letterSpacing="2"
        fontFamily="'Space Grotesk Variable', sans-serif"
      >
        <text x="30" y="392">SILICA-DERIVED CARRIER</text>
        <text x="404" y="392" fill="#2f8bff">HYDROGEN-BEARING CORE</text>
      </g>
    </svg>
  );
}
