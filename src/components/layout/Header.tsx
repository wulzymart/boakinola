import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { SITE } from "../../lib/site";
import { PRIMARY_NAV, SERVICES } from "../../lib/nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { location } = useRouterState();
  const path = location.pathname;

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (to: string) => {
    if (to === "/") return path === "/";
    return path === to || path.startsWith(`${to}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/75">
      {/* Top utility bar */}
      <div className="border-b border-border/60 bg-primary text-white">
        <div className="container-narrow flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-1.5 hover:text-accent"
            >
              <span aria-hidden="true">✉</span>
              <span>{SITE.email}</span>
            </a>
            <span className="hidden text-white/40 md:inline">·</span>
            <a
              href={`tel:${SITE.phoneTel[0]}`}
              className="hidden items-center gap-1.5 hover:text-accent md:inline-flex"
            >
              <span aria-hidden="true">☎</span>
              <span>{SITE.phoneDisplay[0]}</span>
            </a>
          </div>
          <div className="hidden items-center gap-2 text-white/80 md:flex">
            <span className="text-white/60">Lagos · Abuja · Port Harcourt</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-narrow flex items-center justify-between gap-4 py-3.5 md:py-4">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label={`${SITE.name} — Home`}
        >
          <img
            src="/images/logo/boa.jpg"
            alt=""
            width={48}
            height={48}
            className="h-10 w-10 rounded-md object-cover sm:h-12 sm:w-12"
            fetchPriority="high"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold text-primary sm:text-lg">
              BOAkinola <span className="text-accent-600">&amp;</span> Co
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted sm:text-[11px]">
              Chartered Accountants
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {PRIMARY_NAV.map((item) => {
              if (item.label === "Services") {
                return (
                  <li
                    key={item.to}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={item.to}
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        isActive(item.to)
                          ? "text-accent-600"
                          : "text-primary hover:text-accent-600"
                      }`}
                      aria-current={isActive(item.to) ? "page" : undefined}
                    >
                      {item.label} <span aria-hidden="true">▾</span>
                    </Link>
                    {servicesOpen && (
                      <div
                        className="absolute right-0 top-full pt-1"
                        role="menu"
                      >
                        <div className="w-[28rem] rounded-lg border border-border bg-surface p-3 shadow-xl">
                          <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                            All services
                          </p>
                          <ul className="grid grid-cols-2 gap-0.5">
                            {SERVICES.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  to={s.to}
                                  className="block rounded-md px-2 py-1.5 text-sm text-ink hover:bg-surface-alt hover:text-accent-600"
                                >
                                  {s.shortTitle}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.to)
                        ? "text-accent-600"
                        : "text-primary hover:text-accent-600"
                    }`}
                    aria-current={isActive(item.to) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${SITE.phoneTel[0]}`}
            className="btn btn-outline"
            aria-label="Call us"
          >
            Call us
          </a>
          <Link to="/contact" className="btn btn-primary">
            Get a quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-primary lg:hidden"
        >
          <span aria-hidden="true" className="block w-5">
            <span
              className={`mb-1.5 block h-0.5 w-full bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`mt-1.5 block h-0.5 w-full bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile nav drawer */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-surface lg:hidden"
      >
        <nav aria-label="Mobile" className="container-narrow py-4">
          <ul className="flex flex-col gap-1">
            {PRIMARY_NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block rounded-md px-3 py-3 text-base font-medium ${
                    isActive(item.to)
                      ? "bg-primary-50 text-accent-600"
                      : "text-primary hover:bg-surface-alt"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            Popular services
          </p>
          <ul className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to={s.to}
                  className="block rounded-md px-3 py-2 text-sm text-ink hover:bg-surface-alt"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-2">
            <a href={`tel:${SITE.phoneTel[0]}`} className="btn btn-outline">
              Call us
            </a>
            <Link to="/contact" className="btn btn-primary">
              Get a quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
