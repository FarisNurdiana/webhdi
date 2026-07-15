"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { navigation } from "@/data/site";

/**
 * Floating navigation. Transparent over the hero, transitions to a subtle
 * dark-glass bar after scroll. Fullscreen menu with large typography on
 * mobile.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on route change and lock body scroll while open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !open ? "glass" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[var(--nav-height)] max-w-shell items-center justify-between px-6 lg:px-12">
          <Logo />

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`font-display text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                      isActive(item.href)
                        ? "text-white"
                        : "text-mist hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`mt-1 block h-px bg-hydrogen transition-transform duration-300 ${
                        isActive(item.href) ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="relative block h-[14px] w-6">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-fog transition-all duration-300 ${
                  open ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-full bg-fog transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-full bg-fog transition-all duration-300 ${
                  open ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-void/[0.98] px-8 transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile">
          <ul className="space-y-2">
            {navigation.map((item, i) => (
              <li
                key={item.href}
                style={{ transitionDelay: open ? `${i * 55 + 120}ms` : "0ms" }}
                className={`transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <Link
                  href={item.href}
                  className={`headline block py-2 text-4xl sm:text-5xl ${
                    isActive(item.href) ? "text-hydrogen" : "text-fog"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="meta-label mt-14">
          Hydrogen &amp; Silica Technology — Indonesia
        </p>
      </div>
    </>
  );
}
