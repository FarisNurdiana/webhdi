import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

/**
 * Technical, restrained CTA. Sharp corners, hairline borders,
 * a quiet hydrogen-blue fill on the primary action only.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-3 px-7 py-[0.95rem] font-display text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300";

  const styles =
    variant === "primary"
      ? "bg-hydrogen text-white hover:bg-hydrogen-deep"
      : "border border-line-strong text-fog hover:border-hydrogen hover:text-white";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <svg
        aria-hidden="true"
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          d="M1 5h11M9 1l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    </Link>
  );
}
