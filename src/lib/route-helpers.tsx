import { createFileRoute } from "@tanstack/react-router";
import { SERVICE_PAGES } from "../content/service-pages";
import { ServicePageView } from "../components/service/ServicePageView";
import { SITE } from "../lib/site";
import { canonical } from "../lib/seo";
import { breadcrumbsSchema, serviceSchema, faqSchema, buildSchemaBlocks } from "../lib/schema";

/**
 * Build a TanStack Start file route for a given service slug. Reduces the
 * boilerplate for each of the 13 service pages to a one-liner.
 */
export function buildServiceRoute(slug: string) {
  const content = SERVICE_PAGES[slug];
  if (!content) {
    throw new Error(`Unknown service slug: ${slug}`);
  }

  return createFileRoute(`/services/${slug}`)({
    head: () => ({
      meta: [
        { title: `${content.shortTitle} — ${SITE.name}` },
        { name: "description", content: content.intro },
        { property: "og:title", content: `${content.shortTitle} — ${SITE.name}` },
        { property: "og:description", content: content.intro },
        { property: "og:url", content: canonical(`/services/${slug}`) },
        { property: "og:image", content: `${SITE.url}${SITE.ogImage}` },
        { property: "og:image:secure_url", content: `${SITE.url}${SITE.ogImage}` },
        { property: "og:image:width", content: String(SITE.ogImageWidth) },
        { property: "og:image:height", content: String(SITE.ogImageHeight) },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:alt", content: `${content.shortTitle} — ${SITE.name}` },
        { name: "twitter:title", content: `${content.shortTitle} — ${SITE.name}` },
        { name: "twitter:description", content: content.intro },
      ],
      links: [{ rel: "canonical", href: canonical(`/services/${slug}`) }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            buildSchemaBlocks([
              breadcrumbsSchema([
                { name: "Home", url: `${SITE.url}/` },
                { name: "Services", url: canonical("/services") },
                { name: content.shortTitle, url: canonical(`/services/${slug}`) },
              ]),
              serviceSchema({
                name: content.shortTitle,
                description: content.intro,
                url: canonical(`/services/${slug}`),
              }),
              faqSchema(content.faqs),
            ]),
          ),
        },
      ],
    }),
    component: () => <ServicePageView content={content} />,
  });
}
