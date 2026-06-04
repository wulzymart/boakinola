import { canonical } from "../../lib/seo";
import { SITE } from "../../lib/site";

interface WebSchemaProps {
  extra?: object[];
}

export function WebSchema({ extra = [] }: WebSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: "en-NG",
        publisher: { "@id": `${SITE.url}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#localbusiness`,
        name: SITE.name,
        image: `${SITE.url}/images/og/home.svg`,
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
      },
      ...extra,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
