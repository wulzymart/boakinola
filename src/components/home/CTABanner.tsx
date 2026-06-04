import { Link } from "@tanstack/react-router";
import { Section } from "../ui/Section";
import { SITE } from "../../lib/site";

export function CTABanner() {
  return (
    <Section
      background="primary"
      padding="lg"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(circle at right, rgba(201,162,39,0.22), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-12">
        <div className="md:col-span-8">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl text-balance">
            Do you need any consulting service?
          </h2>
          <p className="mt-3 text-white/75 text-pretty">
            Tell us briefly about the engagement you are considering. A principal
            officer will respond within one business day.
          </p>
        </div>
        <div className="md:col-span-4">
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="btn btn-accent">
              Contact us
            </Link>
            <a
              href={`tel:${SITE.phoneTel[0]}`}
              className="btn btn-ghost-light"
            >
              Call {SITE.phoneDisplay[0]}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
