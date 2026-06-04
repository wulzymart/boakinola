import { Link } from "@tanstack/react-router";
import { Section } from "../ui/Section";
import { ServiceCard } from "../ui/ServiceCard";
import { SERVICES, SERVICE_CATEGORIES } from "../../lib/nav";

export function ServicesGrid() {
  return (
    <Section background="surface" padding="lg">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="eyebrow">Our services</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl text-balance">
            Thirteen services, one partner-led team.
          </h2>
        </div>
        <p className="md:col-span-5 text-muted text-pretty">
          Our core values are reflected in every service we render. Pick the
          service you need and a principal officer will personally scope the
          engagement with you.
        </p>
      </div>

      <div className="mt-10 space-y-12">
        {(Object.keys(SERVICE_CATEGORIES) as (keyof typeof SERVICE_CATEGORIES)[]).map((cat) => {
          const items = SERVICES.filter((s) => s.category === cat);
          if (!items.length) return null;
          const meta = SERVICE_CATEGORIES[cat];
          return (
            <div key={cat}>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-3">
                <h3 className="font-display text-xl font-semibold text-primary">
                  {meta.title}
                </h3>
                <p className="max-w-md text-sm text-muted">{meta.blurb}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link to="/contact" className="btn btn-primary">
          Discuss your engagement with a partner
        </Link>
      </div>
    </Section>
  );
}
