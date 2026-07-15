"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * SECTION 02 — TRANSFORMATION OF MATTER
 *
 * A pinned, scroll-driven particle sequence: one particle field morphs
 * through the company's actual value chain —
 * SILICA → ACTIVE SILICON → HYDROSi → HYDROGEN → ENERGY.
 *
 * Rendered procedurally on a 2D canvas (no textures, no fake product
 * imagery). Under prefers-reduced-motion the section degrades to a
 * static editorial list.
 */

const STAGES = [
  {
    key: "SILICA",
    title: "Silica",
    text: "An abundant Indonesian material. The foundation for advanced energy technology.",
  },
  {
    key: "ACTIVE SILICON",
    title: "Active Silicon",
    text: "Silica sand, engineered at the material level into active silicon.",
  },
  {
    key: "HYDROSI",
    title: "HydroSi",
    text: "Hydrogen carried in solid form — safe, economical, and practical to ship across islands.",
  },
  {
    key: "HYDROGEN",
    title: "Hydrogen",
    text: "Available where and when energy is needed.",
  },
  {
    key: "ENERGY",
    title: "Energy",
    text: "For transportation, power generation, industry and future infrastructure.",
  },
] as const;

const N = 820;

/** Per-stage particle color (r, g, b) */
const STAGE_COLORS: [number, number, number][] = [
  [200, 181, 144], // silica — mineral sand
  [178, 192, 202], // silicon — metallic gray
  [124, 158, 216], // hydrosi — mineral turning blue
  [47, 139, 255], // hydrogen — hydrogen blue
  [70, 213, 242], // energy — plasma cyan
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function smooth(t: number) {
  return t * t * (3 - 2 * t);
}

/** Build the 5 target layouts for a given canvas size (CSS pixels). */
function buildTargets(w: number, h: number): Float32Array[] {
  const cx = w / 2;
  const cy = h / 2;
  const R = Math.min(w, h) * 0.34;
  const targets: Float32Array[] = [];

  // 0 — SILICA: clumped, irregular grains
  {
    const arr = new Float32Array(N * 2);
    const clusters = 7;
    for (let i = 0; i < N; i++) {
      const c = i % clusters;
      const ca = (c / clusters) * Math.PI * 2 + 0.7;
      const cr = R * (0.25 + (c % 3) * 0.28);
      const ccx = cx + Math.cos(ca) * cr;
      const ccy = cy + Math.sin(ca) * cr * 0.75;
      const a = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.6) * R * 0.42;
      arr[i * 2] = ccx + Math.cos(a) * r;
      arr[i * 2 + 1] = ccy + Math.sin(a) * r * 0.85;
    }
    targets.push(arr);
  }

  // 1 — ACTIVE SILICON: ordered crystalline lattice (diamond orientation)
  {
    const arr = new Float32Array(N * 2);
    const cols = Math.ceil(Math.sqrt(N * (w >= h ? 1.2 : 0.9)));
    const rows = Math.ceil(N / cols);
    const spanX = R * 2.3;
    const spanY = R * 1.9;
    for (let i = 0; i < N; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const offset = row % 2 === 0 ? 0 : spanX / cols / 2;
      const x = cx - spanX / 2 + (col / (cols - 1)) * spanX + offset;
      const y = cy - spanY / 2 + (row / Math.max(rows - 1, 1)) * spanY;
      // rotate 45° around center for a crystal-facet feel
      const dx = x - cx;
      const dy = y - cy;
      const rot = Math.PI / 4;
      arr[i * 2] = cx + dx * Math.cos(rot) * 0.82 - dy * Math.sin(rot) * 0.82;
      arr[i * 2 + 1] = cy + (dx * Math.sin(rot) + dy * Math.cos(rot)) * 0.62;
    }
    targets.push(arr);
  }

  // 2 — HYDROSI: dense solid sphere (projected 3D packing)
  {
    const arr = new Float32Array(N * 2);
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(2 * ((i + 0.5) / N) - 1);
      const theta = i * 2.39996; // golden angle spiral — even packing
      const x3 = Math.sin(phi) * Math.cos(theta);
      const y3 = Math.sin(phi) * Math.sin(theta);
      arr[i * 2] = cx + x3 * R * 0.92;
      arr[i * 2 + 1] = cy + y3 * R * 0.92;
    }
    targets.push(arr);
  }

  // 3 — HYDROGEN: diatomic pairs, dispersing and rising
  {
    const arr = new Float32Array(N * 2);
    for (let i = 0; i < N; i += 2) {
      const px = cx + (Math.random() - 0.5) * R * 2.6;
      const py = cy + (Math.random() - 0.62) * R * 2.3;
      const a = Math.random() * Math.PI * 2;
      const d = 4.5;
      arr[i * 2] = px + Math.cos(a) * d;
      arr[i * 2 + 1] = py + Math.sin(a) * d;
      if (i + 1 < N) {
        arr[(i + 1) * 2] = px - Math.cos(a) * d;
        arr[(i + 1) * 2 + 1] = py - Math.sin(a) * d;
      }
    }
    targets.push(arr);
  }

  // 4 — ENERGY: radiant spokes + halo ring
  {
    const arr = new Float32Array(N * 2);
    const spokes = 28;
    const ringShare = Math.floor(N * 0.3);
    for (let i = 0; i < N; i++) {
      if (i < ringShare) {
        const a = (i / ringShare) * Math.PI * 2;
        const r = R * (1.02 + (i % 3) * 0.03);
        arr[i * 2] = cx + Math.cos(a) * r;
        arr[i * 2 + 1] = cy + Math.sin(a) * r;
      } else {
        const j = i - ringShare;
        const spoke = j % spokes;
        const a = (spoke / spokes) * Math.PI * 2;
        const r = R * 0.12 + Math.pow(((j / spokes) % 1e9) / ((N - ringShare) / spokes), 0.8) * R * 1.35;
        arr[i * 2] = cx + Math.cos(a) * r;
        arr[i * 2 + 1] = cy + Math.sin(a) * r;
      }
    }
    targets.push(arr);
  }

  return targets;
}

export default function Transformation() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tickRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const progressRef = useRef(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !stage || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let targets: Float32Array[] = [];
    const jitter = new Float32Array(N * 2);
    for (let i = 0; i < N * 2; i++) jitter[i] = Math.random() * Math.PI * 2;

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      targets = buildTargets(w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    let rafId = 0;
    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(wrap);

    const draw = (time: number) => {
      rafId = requestAnimationFrame(draw);
      if (!visible || document.hidden || targets.length < 5) return;

      const p = progressRef.current * (STAGES.length - 1); // 0..4
      const k = Math.min(Math.floor(p), STAGES.length - 2);
      const f = smooth(p - k);
      const from = targets[k];
      const to = targets[k + 1];
      const [r0, g0, b0] = STAGE_COLORS[k];
      const [r1, g1, b1] = STAGE_COLORS[k + 1];
      const r = Math.round(lerp(r0, r1, f));
      const g = Math.round(lerp(g0, g1, f));
      const b = Math.round(lerp(b0, b1, f));
      const t = time * 0.001;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = `rgba(${r},${g},${b},0.85)`;

      for (let i = 0; i < N; i++) {
        const wob = Math.sin(t * 1.1 + jitter[i * 2]) * 1.6;
        const wob2 = Math.cos(t * 0.9 + jitter[i * 2 + 1]) * 1.6;
        const x = lerp(from[i * 2], to[i * 2], f) + wob;
        const y = lerp(from[i * 2 + 1], to[i * 2 + 1], f) + wob2;
        const size = 1.1 + ((i * 7) % 10) * 0.12;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Caption + rail state, driven directly (no React re-render)
      const active = Math.round(p);
      captionRefs.current.forEach((el, i) => {
        if (!el) return;
        const dist = Math.abs(p - i);
        const o = Math.max(0, 1 - dist * 1.6);
        el.style.opacity = String(o);
        el.style.transform = `translateY(${(1 - o) * 18}px)`;
        el.style.pointerEvents = o > 0.5 ? "auto" : "none";
      });
      tickRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.backgroundColor =
          i === active ? "var(--color-hydrogen)" : "rgba(255,255,255,0.16)";
        el.style.width = i === active ? "2.5rem" : "1.25rem";
      });
    };
    rafId = requestAnimationFrame(draw);

    const st = ScrollTrigger.create({
      trigger: wrap,
      start: "top top",
      end: "+=380%",
      pin: stage,
      scrub: 0.5,
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });

    return () => {
      st.kill();
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  /* Reduced-motion fallback: calm editorial sequence, same facts */
  if (reduced) {
    return (
      <section className="border-t hairline bg-void py-28">
        <div className="mx-auto max-w-shell px-6 lg:px-12">
          <p className="meta-label text-hydrogen">Transformation of Matter</p>
          <h2 className="headline mt-6 max-w-3xl text-4xl sm:text-5xl">
            Matter becomes energy.
          </h2>
          <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            {STAGES.map((s, i) => (
              <li key={s.key} className="border-l hairline pl-6">
                <span className="meta-label text-hydrogen">0{i + 1}</span>
                <h3 className="font-display mt-3 text-xl text-fog">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section ref={wrapRef} aria-label="Transformation of matter" className="relative border-t hairline bg-void">
      <div ref={stageRef} className="relative flex h-svh flex-col overflow-hidden">
        {/* Section label */}
        <div className="pointer-events-none absolute left-6 top-28 z-10 lg:left-12">
          <p className="meta-label text-hydrogen">02 — Transformation of Matter</p>
          <p className="headline mt-4 text-2xl text-fog sm:text-3xl">
            Matter becomes energy.
          </p>
        </div>

        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        />

        {/* Stage captions */}
        <div className="pointer-events-none absolute inset-x-6 bottom-20 z-10 lg:inset-x-12 lg:bottom-24">
          <div className="relative h-36 max-w-xl">
            {STAGES.map((s, i) => (
              <div
                key={s.key}
                ref={(el) => {
                  captionRefs.current[i] = el;
                }}
                className="absolute inset-0"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <p className="meta-label">
                  {String(i + 1).padStart(2, "0")} / 05
                </p>
                <h3 className="headline mt-3 text-4xl text-fog sm:text-5xl">
                  {s.key}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-mist sm:text-base">
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          {/* Progress rail */}
          <div className="mt-8 flex items-center gap-2" aria-hidden="true">
            {STAGES.map((s, i) => (
              <span
                key={s.key}
                ref={(el) => {
                  tickRefs.current[i] = el;
                }}
                className="block h-px w-5 bg-line-strong transition-all duration-500"
              />
            ))}
          </div>
        </div>

        {/* Screen-reader narrative (animation is decorative) */}
        <div className="sr-only">
          <h2>Transformation of matter</h2>
          <ol>
            {STAGES.map((s) => (
              <li key={s.key}>
                {s.title}: {s.text}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
