"use client";

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
  type CSSProperties,
} from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in seconds */
  delay?: number;
  /** Custom style passthrough */
  style?: CSSProperties;
};

/**
 * Viewport-entry reveal. Adds `.is-inview` once when the element enters the
 * viewport; the actual animation lives in CSS (`.reveal` in globals.css),
 * so `prefers-reduced-motion` neutralizes it without JS branching.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}s`, ...style } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
