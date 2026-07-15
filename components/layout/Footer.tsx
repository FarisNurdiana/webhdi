import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { navigation, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t hairline bg-graphite">
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-dim">
              {site.description}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="meta-label">Navigate</h3>
            <ul className="mt-6 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="meta-label">Contact</h3>
            <ul className="mt-6 space-y-3 text-sm text-mist">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li className="text-dim">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta-label !tracking-[0.18em]">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="meta-label !tracking-[0.18em] text-dim/70">
            From silica to hydrogen. From matter to energy.
          </p>
        </div>
      </div>
    </footer>
  );
}
