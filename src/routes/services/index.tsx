import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "../../lib/site";
import { breadcrumbsSchema, buildSchemaBlocks } from "../../lib/schema";
import { Breadcrumbs } from "../../components/seo/Breadcrumbs";
import { ServiceCard } from "../../components/ui/ServiceCard";
import { SERVICES, SERVICE_CATEGORIES } from "../../lib/nav";
import { CTABanner } from "../../components/home/CTABanner";
import { canonical } from "../../lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: `Our Services — ${SITE.name}` },
      {
        name: "description",
        content:
          "All professional services rendered by BOAkinola & Co: auditing, accounting, taxation, VAT, debt recovery, management consultancy, company formation, receivership, investigation, training and more.",
      },
      { property: "og:title", content: `Our Services — ${SITE.name}` },
      { property: "og:url", content: canonical("/services") },
    ],
    links: [{ rel: "canonical", href: canonical("/services") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildSchemaBlocks([
            breadcrumbsSchema([
              { name: "Home", url: `${SITE.url}/` },
              { name: "Services", url: canonical("/services") },
            ]),
          ]),
        ),
      },
    ],
  }),
  component: ServicesIndexPage,
});

function ServicesIndexPage() {
  return (
    <>
      <section className="border-b border-border bg-surface-alt">
        <div className="container-narrow py-12 md:py-16">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <p className="eyebrow mt-6">Our services</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl text-balance">
            Every partner and staff of BOAkinola &amp; Co has imbibed the
            organisation's core values and is ready to render the following
            services.
          </h1>
        </div>
      </section>

      <section className="py-14 md:py-20" aria-label="All services">
        <div className="container-narrow space-y-14">
          {(Object.keys(SERVICE_CATEGORIES) as (keyof typeof SERVICE_CATEGORIES)[]).map((cat) => {
            const items = SERVICES.filter((s) => s.category === cat);
            if (!items.length) return null;
            const meta = SERVICE_CATEGORIES[cat];
            return (
              <div key={cat}>
                <div className="mb-6 border-b border-border pb-3">
                  <h2 className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                    {meta.title}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-muted">{meta.blurb}</p>
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
      </section>

      <CTABanner />
    </>
  );
}
