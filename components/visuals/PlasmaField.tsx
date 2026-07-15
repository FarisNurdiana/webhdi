"use client";

import { useEffect, useRef } from "react";

/**
 * Conceptual Plasmalysis visual: a controlled plasma discharge between two
 * electrodes, drawn procedurally on canvas. Scientific in tone — no
 * Hollywood explosions. Static frame under prefers-reduced-motion.
 */
export default function PlasmaField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    /** One jagged discharge path between the electrodes */
    const drawArc = (t: number, seed: number, alpha: number) => {
      const x0 = w * 0.16;
      const x1 = w * 0.84;
      const midY = h * 0.5;
      const segments = 26;

      ctx.beginPath();
      ctx.moveTo(x0, midY);
      for (let i = 1; i <= segments; i++) {
        const f = i / segments;
        const x = x0 + (x1 - x0) * f;
        const envelope = Math.sin(f * Math.PI); // pinch at electrodes
        const n =
          Math.sin(f * 21 + t * 7 + seed * 13) * 0.5 +
          Math.sin(f * 47 - t * 11 + seed * 7) * 0.3 +
          Math.sin(f * 9 + t * 3 + seed * 29) * 0.2;
        ctx.lineTo(x, midY + n * envelope * h * 0.16);
      }
      ctx.strokeStyle = `rgba(70, 213, 242, ${alpha})`;
      ctx.lineWidth = 1.1;
      ctx.stroke();
    };

    const drawFrame = (time: number) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      // ambient field glow
      const glow = ctx.createRadialGradient(
        w / 2, h / 2, 10,
        w / 2, h / 2, Math.max(w, h) * 0.45
      );
      glow.addColorStop(0, "rgba(47, 139, 255, 0.10)");
      glow.addColorStop(1, "rgba(47, 139, 255, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // electrodes
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.fillRect(w * 0.13, h * 0.34, 5, h * 0.32);
      ctx.fillRect(w * 0.84 + 6, h * 0.34, 5, h * 0.32);

      // layered discharges
      drawArc(t, 1, 0.5);
      drawArc(t * 1.35, 2, 0.3);
      drawArc(t * 0.8, 3, 0.18);

      // drifting ionized particles
      ctx.fillStyle = "rgba(70, 213, 242, 0.6)";
      for (let i = 0; i < 42; i++) {
        const f = ((t * 0.09 + i * 0.024) % 1 + 1) % 1;
        const x = w * 0.16 + (w * 0.68) * f;
        const y =
          h * 0.5 +
          Math.sin(i * 3.1 + t * 1.4) * h * 0.11 * Math.sin(f * Math.PI);
        ctx.beginPath();
        ctx.arc(x, y, 1.15, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let rafId = 0;
    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const loop = (time: number) => {
      rafId = requestAnimationFrame(loop);
      if (!visible || document.hidden) return;
      drawFrame(time);
    };

    if (reduced) {
      drawFrame(1200); // static frame
    } else {
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Conceptual visualization of a controlled plasma discharge between two electrodes"
      className="h-full w-full"
    />
  );
}
