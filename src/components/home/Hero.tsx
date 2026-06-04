import { Link } from "@tanstack/react-router";
import { Button } from "../ui/Button";
import { SITE } from "../../lib/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-primary text-white"
    >
      {/* Background gradient + faint pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(201,162,39,0.18), transparent 55%), linear-gradient(180deg, #0B2545 0%, #102A56 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />

      <div className="container-narrow grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <p className="eyebrow text-accent">Chartered Accountants · Est. 1990</p>
          <h1
            id="hero-title"
            className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
          >
            Financial auditing &amp; consulting,{" "}
            <span className="text-accent">at its best</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 text-pretty">
            BOAkinola &amp; Co is a firm of Chartered Accountants in Lagos, licensed
            by ICAN since 24 May 1990. We work with ambitious Nigerian businesses
            on auditing, taxation, advisory and corporate-secretarial work — with
            principal officers personally engaged on every assignment.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              to="/contact"
              variant="accent"
              size="lg"
              iconRight={<span aria-hidden="true">→</span>}
            >
              Request a consultation
            </Button>
            <Button
              to="/services"
              variant="ghost-light"
              size="lg"
            >
              See all services
            </Button>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-6 text-sm">
            <div>
              <dt className="text-white/60">Established</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-accent">1990</dd>
            </div>
            <div>
              <dt className="text-white/60">Years of practice</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-accent">30+</dd>
            </div>
            <div>
              <dt className="text-white/60">Principal officers</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-accent">7</dd>
            </div>
          </dl>
        </div>

        <div className="hidden md:col-span-5 md:block">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 shadow-2xl"
            aria-hidden="true"
          >
            <img
              src="/images/hero/hero-portrait.jpg"
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
              width={640}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Trusted since 1990
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-white">
                30+ years of auditing, tax &amp; advisory.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-white/10 bg-primary-700/40">
        <div className="container-narrow flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-xs uppercase tracking-[0.16em] text-white/70">
          <span>ICAN licensed</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Oil &amp; Gas</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Banking &amp; Finance</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Agriculture</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Manufacturing</span>
        </div>
      </div>
    </section>
  );
}
