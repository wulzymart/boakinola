import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "../lib/site";
import { breadcrumbsSchema, personSchema, buildSchemaBlocks } from "../lib/schema";
import { Section } from "../components/ui/Section";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { TeamGrid } from "../components/team/TeamGrid";
import { CTABanner } from "../components/home/CTABanner";
import { StatsBand } from "../components/home/StatsBand";
import { TEAM } from "../lib/team";
import { VALUES } from "../lib/firm";
import { canonical } from "../lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${SITE.name}` },
      {
        name: "description",
        content:
          "BOAkinola & Co is a firm of Chartered Accountants licensed by ICAN since 24 May 1990. Meet our principal officers, our history, and our values.",
      },
      { property: "og:title", content: `About — ${SITE.name}` },
      { property: "og:url", content: canonical("/about") },
    ],
    links: [{ rel: "canonical", href: canonical("/about") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildSchemaBlocks([
            breadcrumbsSchema([
              { name: "Home", url: `${SITE.url}/` },
              { name: "About", url: canonical("/about") },
            ]),
            ...TEAM.map((m) =>
              personSchema({
                name: m.name,
                jobTitle: m.role,
                credentials: m.credentials,
                bio: m.bio,
                url: canonical(`/about#${m.slug}`),
              }),
            ),
          ]),
        ),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface-alt">
        <div className="container-narrow py-12 md:py-16">
          <Breadcrumbs items={[{ label: "About" }]} />
          <p className="eyebrow mt-6">About BOAkinola &amp; Co</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl text-balance">
            Chartered accountants, partner-led since 1990.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            A firm of Chartered Accountants with a specialty in financial advisory,
            auditing, training, and investigation for organisations across Nigeria.
          </p>
        </div>
      </section>

      {/* History */}
      <Section padding="lg">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Brief history</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-primary text-balance">
              Licensed by ICAN on 24 May 1990.
            </h2>
            <div className="divider-accent" />
          </div>
          <div className="md:col-span-8">
            <div className="prose-firm max-w-none text-base">
              <p>
                Our firm, B.O. Akinola &amp; Co, was licensed by the Institute of
                Chartered Accountants of Nigeria to practice on 24 May 1990 as a
                firm of Chartered Accountants in practice.
              </p>
              <p>
                Before their commencement of private practice, each of the partners
                in the firm had accumulated several years of varied pre- and
                post-qualification experience at the highest levels in business
                recovery, auditing, business accounting, finance and general
                management in reputable establishments and professional offices.
              </p>
              <p>
                We render quality service to clients in various sectors of the
                economy such as oil and gas, banking and finance, agriculture and
                more — as reflected in the list of our clientele.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Offices */}
      <Section background="alt" padding="lg">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Our offices</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-primary text-balance">
              Lagos · Abuja · Port Harcourt.
            </h2>
            <div className="divider-accent" />
          </div>
          <div className="md:col-span-7">
            <div className="prose-firm max-w-none text-base">
              <p>
                The company operates presently mainly from Lagos, but efforts are
                already in place to upgrade our accommodation arrangements in
                Abuja and Port Harcourt to enable us serve our clients better
                while also growing our client base.
              </p>
              <p>
                Our main office is at 181 Flat 3, LSDPC Medium Housing Estate,
                S4TC, Oba-Ogunji Road, Ijaiye-Ogba, Lagos.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section padding="lg">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-primary">
              Quality at the centre.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              To render unparallel quality taxation, financial and management
              services through competent, articulate and dedicated professionals
              using cutting-edge technology — to give total client satisfaction
              at reasonable return while upholding our professionalism and
              credibility through honesty and integrity.
            </p>
          </div>
          <div>
            <p className="eyebrow">Our vision</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-primary">
              Superior professional services.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              To be a quality organisation providing superior professional
              services to our clients in an efficient and qualitative responsive
              manner that adds value to all stakeholders.
            </p>
          </div>
          <div>
            <p className="eyebrow">Our values</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-primary">
              Six commitments.
            </h2>
            <ul className="mt-4 space-y-2 text-base text-muted">
              {VALUES.map((v) => (
                <li key={v.label} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>
                    <strong className="text-primary">{v.label}.</strong> {v.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <StatsBand />

      {/* Team */}
      <Section background="surface-alt" padding="lg">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Principal officers</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl text-balance">
            The people who sign your report.
          </h2>
          <p className="mt-4 text-muted text-pretty">
            Our partners and senior staff have trained and worked at the
            highest levels of practice and industry. Click any name to read
            their biography.
          </p>
        </div>
        <div className="mt-10">
          <TeamGrid members={TEAM} />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
