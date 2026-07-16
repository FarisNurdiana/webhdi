import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PT Hidro Dinamika Internasional — collaboration in hydrogen technology for industry, research institutions and international partners.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title={
          <>
            START A<br />
            COLLABORATION
          </>
        }
        intro="HDI is open to collaboration with industry, research institutions and international partners in hydrogen technology development and projects."
      />

      <section className="bg-graphite">
        <div className="mx-auto max-w-shell px-6 py-24 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <dl className="space-y-10">
                  <div>
                    <dt className="meta-label">Email</dt>
                    <dd className="mt-3">
                      <a
                        href={`mailto:${site.email}`}
                        className="font-display text-2xl text-fog transition-colors hover:text-hydrogen sm:text-3xl"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="meta-label">Phone</dt>
                    <dd className="mt-3">
                      <a
                        href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                        className="font-display text-2xl text-fog transition-colors hover:text-hydrogen sm:text-3xl"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                  {site.addresses.map((addr) => (
                    <div key={addr.type}>
                      <dt className="meta-label">{addr.type}</dt>
                      <dd className="mt-3 font-display text-lg leading-relaxed text-mist">
                        {addr.lines.map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.12}>
                <div className="border hairline bg-charcoal/60 p-8 sm:p-10">
                  <p className="meta-label text-hydrogen">Who We Work With</p>
                  <ul className="mt-6 space-y-4 text-sm leading-relaxed text-mist">
                    <li className="border-b hairline pb-4">
                      Industrial partners — hydrogen supply, genset and PLTD
                      conversion
                    </li>
                    <li className="border-b hairline pb-4">
                      Government and energy-sector stakeholders
                    </li>
                    <li className="border-b hairline pb-4">
                      Research institutions — silica, plasma and hydrogen
                      systems
                    </li>
                    <li>
                      International technology partners and collaborators
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
