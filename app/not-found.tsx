import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="vignette relative flex min-h-svh items-center justify-center overflow-hidden bg-void">
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-40"
      />
      <div className="relative z-10 px-6 text-center">
        <p className="meta-label text-hydrogen">Error 404</p>
        <h1 className="headline mt-6 text-5xl text-fog sm:text-7xl">
          SIGNAL LOST
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base text-mist">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/">Return Home</Button>
        </div>
        <Link
          href="/contact"
          className="mt-6 block text-sm text-dim transition-colors hover:text-hydrogen"
        >
          Or contact HDI
        </Link>
      </div>
    </section>
  );
}
