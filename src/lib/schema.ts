import { SITE } from "./site";

export interface FaqItem {
  q: string;
  a: string;
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function breadcrumbsSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo/boa.jpg`,
    foundingDate: `${SITE.foundingYear}-05-24`,
    email: SITE.email,
    telephone: SITE.phoneTel,
    sameAs: [SITE.social.linkedin],
  };
}

export function localBusinessSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: `${SITE.url}/images/og/home.jpg`,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      addressCountry: "NG",
      postalCode: SITE.address.postal,
    },
    areaServed: [
      { "@type": "City", name: "Lagos" },
      { "@type": "City", name: "Abuja" },
      { "@type": "City", name: "Port Harcourt" },
      { "@type": "Country", name: "Nigeria" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    parentOrganization: { "@id": `${SITE.url}/#organization` },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "en-NG",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "Country", name: "Nigeria" },
    url: opts.url,
  };
}

export function personSchema(opts: {
  name: string;
  jobTitle: string;
  credentials: string;
  bio: string;
  url: string;
}) {
  return {
    "@type": "Person",
    name: opts.name,
    jobTitle: opts.jobTitle,
    description: opts.bio,
    url: opts.url,
    worksFor: { "@id": `${SITE.url}/#organization` },
    knowsAbout: opts.credentials,
  };
}

export function buildSchemaBlocks(blocks: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": blocks,
  };
}
