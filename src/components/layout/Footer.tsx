import { Link } from "@tanstack/react-router";
import { SITE } from "../../lib/site";
import { SERVICES, buildHref } from "../../lib/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-narrow py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/boa.jpg"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-md object-cover"
                loading="lazy"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold">
                  BOAkinola <span className="text-accent">&amp;</span> Co
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Chartered Accountants
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
              A firm of Chartered Accountants licensed by the Institute of Chartered
              Accountants of Nigeria since 24 May 1990. Financial advisory, auditing,
              taxation and professional consulting across Nigeria.
            </p>

            <address className="not-italic mt-5 text-sm leading-relaxed text-white/75">
              <strong className="block text-white">Lagos office</strong>
              {SITE.address.street}
              <br />
              {SITE.address.city}, {SITE.address.country}
              <br />
              {SITE.address.postal}
            </address>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Firm
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-accent">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-accent">About us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-accent">Services</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link to={s.to} className="text-white/80 hover:text-accent">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href={`tel:${SITE.phoneTel[0]}`} className="hover:text-accent">
                  {SITE.phoneDisplay[0]}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneTel[1]}`} className="hover:text-accent">
                  {SITE.phoneDisplay[1]}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.hours}</li>
            </ul>

            <div className="mt-6">
              <Link to="/contact" className="btn btn-accent">
                Request a consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 md:flex-row md:items-center">
          <p>
            © {year} {SITE.legalName}. All rights reserved. Licensed by the Institute
            of Chartered Accountants of Nigeria (ICAN).
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link to="/privacy" className="hover:text-accent">
                Privacy policy
              </Link>
            </li>
            <li>
              <a href={buildHref("/sitemap.xml")} className="hover:text-accent">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
