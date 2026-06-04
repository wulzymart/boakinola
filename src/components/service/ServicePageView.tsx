import { ServiceHero } from "./ServiceHero";
import { ServiceFAQs } from "./ServiceFAQs";
import { RelatedServices } from "./RelatedServices";
import { CTABanner } from "../home/CTABanner";
import { Breadcrumbs } from "../seo/Breadcrumbs";
import { SERVICE_CATEGORIES, SERVICE_CATEGORIES_TITLE } from "../../lib/nav";
import type { ServicePageContent } from "../../content/service-pages";

export function ServicePageView({ content }: { content: ServicePageContent }) {
  const category = SERVICE_CATEGORIES_TITLE[content.slug];

  return (
    <>
      <section className="border-b border-border bg-surface-alt">
        <div className="container-narrow py-6">
          <Breadcrumbs
            items={[
              { label: "Services", to: "/services" },
              { label: content.shortTitle },
            ]}
          />
        </div>
      </section>

      <ServiceHero
        eyebrow={category ?? "Professional service"}
        title={content.title}
        intro={content.intro}
        image={content.image}
        imageAlt={content.imageAlt}
      />

      {content.draft && (
        <div className="border-y border-warning/30 bg-warning/10">
          <div className="container-narrow py-3 text-center text-xs text-warning">
            <strong className="font-semibold">Draft for firm review.</strong> The copy
            on this page is provisional and should be reviewed by a principal
            officer before publication.
          </div>
        </div>
      )}

      <section className="py-14 md:py-20" aria-label="Service overview">
        <div className="container-narrow !max-w-3xl">
          <div className="prose-firm max-w-none text-base">
            {content.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {content.bullets && content.bullets.length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-primary">
                What the engagement covers
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {content.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <ServiceFAQs items={content.faqs} />
      <RelatedServices currentSlug={content.slug} />
      <CTABanner />
    </>
  );
}
