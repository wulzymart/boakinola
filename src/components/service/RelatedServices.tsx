import { Link } from "@tanstack/react-router";
import { ServiceCard } from "../ui/ServiceCard";
import { relatedServices, type ServiceDef } from "../../lib/nav";

export function RelatedServices({ currentSlug, title = "Related services" }: { currentSlug: string; title?: string }) {
  const related: ServiceDef[] = relatedServices(currentSlug, 3);
  if (!related.length) return null;

  return (
    <section className="bg-surface-alt py-14 md:py-20" aria-labelledby="related-services">
      <div className="container-narrow">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 id="related-services" className="font-display text-2xl font-semibold text-primary sm:text-3xl">
            {title}
          </h2>
          <Link to="/services" className="text-sm font-semibold text-accent-600 hover:underline">
            See all services →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <ServiceCard key={s.slug} service={s} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
