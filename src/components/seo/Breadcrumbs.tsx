import { canonical } from "../../lib/seo";
import { SITE } from "../../lib/site";

interface BreadcrumbsProps {
  items: { label: string; to?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted">
        <li>
          <a href="/" className="hover:text-accent-600">Home</a>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-border-strong">/</span>
              {item.to && !isLast ? (
                <a href={item.to} className="hover:text-accent-600">{item.label}</a>
              ) : (
                <span className="text-ink" aria-current={isLast ? "page" : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function buildBreadcrumbsSchema(items: { label: string; to?: string }[]) {
  const list = [{ label: "Home", to: "/" }, ...items];
  return {
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: canonical(item.to ?? "/"),
    })),
  };
}

export function PageSchema({ blocks }: { blocks: object[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE.url}/#organization`,
              name: SITE.name,
              legalName: SITE.legalName,
              url: SITE.url,
              logo: `${SITE.url}/images/logo/boa.jpg`,
              foundingDate: `${SITE.foundingYear}-05-24`,
              email: SITE.email,
              telephone: SITE.phoneTel,
            },
            ...blocks,
          ],
        }),
      }}
    />
  );
}
