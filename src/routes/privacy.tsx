import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "../lib/site";
import { canonical } from "../lib/seo";
import { breadcrumbsSchema, buildSchemaBlocks } from "../lib/schema";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { Section } from "../components/ui/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${SITE.name}` },
      {
        name: "description",
        content:
          "Privacy notice for boakinola.com — what personal data we collect, how we use it, and the rights you have under the Nigeria Data Protection Regulation (NDPR).",
      },
      { property: "og:title", content: `Privacy Policy — ${SITE.name}` },
      { property: "og:url", content: canonical("/privacy") },
    ],
    links: [{ rel: "canonical", href: canonical("/privacy") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildSchemaBlocks([
            breadcrumbsSchema([
              { name: "Home", url: `${SITE.url}/` },
              { name: "Privacy Policy", url: canonical("/privacy") },
            ]),
          ]),
        ),
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <section className="border-b border-border bg-surface-alt">
        <div className="container-narrow py-12 md:py-16">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <p className="eyebrow mt-6">Legal</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl text-balance">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted">
            Last updated: {new Date().toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <Section padding="lg" containerClassName="!max-w-3xl">
        <div className="prose-firm max-w-none text-base">
          <p>
            This Privacy Policy describes how {SITE.legalName} ("we", "us" or
            "our") collects, uses and protects personal information when you use
            this website (boakinola.com) or contact us through it. We are
            committed to handling your information in accordance with the
            Nigeria Data Protection Regulation (NDPR) and applicable law.
          </p>

          <h2>1. Information we collect</h2>
          <p>
            When you use the contact form on this site, we collect the
            information you choose to provide: your name, email address, phone
            number, subject and message. We also automatically collect basic
            technical information about your visit (such as IP address,
            browser type and pages viewed) for the legitimate purpose of
            operating and securing the site. We do not place marketing or
            advertising cookies.
          </p>

          <h2>2. How we use your information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Respond to your enquiry and provide the services you ask for;</li>
            <li>Communicate with you about an existing or proposed engagement;</li>
            <li>Maintain the security and integrity of the site;</li>
            <li>Comply with our legal, regulatory and professional obligations.</li>
          </ul>

          <h2>3. Lawful basis</h2>
          <p>
            We rely on the lawful bases of consent (where you have asked us to
            contact you), performance of a contract or pre-contractual steps
            (where you are a current or prospective client), and our legitimate
            interests in operating a secure website and a professional services
            firm.
          </p>

          <h2>4. Sharing your information</h2>
          <p>
            We do not sell your personal information. We may share information
            with carefully selected service providers who help us operate the
            site (such as our hosting and email providers), with professional
            advisers where required, or where we are legally required to do so.
          </p>

          <h2>5. Retention</h2>
          <p>
            We keep enquiry information for as long as is necessary to deal with
            your request, then for a period required by our professional,
            legal and tax obligations. Client engagement records are retained in
            line with the rules of the Institute of Chartered Accountants of
            Nigeria.
          </p>

          <h2>6. Your rights</h2>
          <p>Under the NDPR, you have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you;</li>
            <li>Request correction of inaccurate or incomplete data;</li>
            <li>Request deletion of data, subject to our legal obligations;</li>
            <li>Withdraw consent where we rely on it;</li>
            <li>Lodge a complaint with the Nigeria Data Protection Commission.</li>
          </ul>

          <h2>7. Security</h2>
          <p>
            We use appropriate technical and organisational measures to protect
            personal information. The site is served over HTTPS and access to
            enquiry data is restricted to the principal officers of the firm.
          </p>

          <h2>8. Contact</h2>
          <p>
            For any privacy-related question, write to us at{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or by post to the
            address listed on our <a href="/contact">contact page</a>.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The latest version will
            always be published on this page with a revised "last updated" date.
          </p>
        </div>
      </Section>
    </>
  );
}
