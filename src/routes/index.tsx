import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "../lib/site";
import { faqSchema, breadcrumbsSchema, buildSchemaBlocks } from "../lib/schema";
import { Hero } from "../components/home/Hero";
import { IntroBlock } from "../components/home/IntroBlock";
import { ServicesGrid } from "../components/home/ServicesGrid";
import { ProcessTimeline } from "../components/home/ProcessTimeline";
import { ValuesGrid } from "../components/home/ValuesGrid";
import { StatsBand } from "../components/home/StatsBand";
import { PartnersStrip } from "../components/home/PartnersStrip";
import { TeamPreview } from "../components/home/TeamPreview";
import { HomeFAQ } from "../components/home/HomeFAQ";
import { CTABanner } from "../components/home/CTABanner";

const FAQS = [
  {
    q: "Are you licensed to practice in Nigeria?",
    a: "Yes. B.O. Akinola & Co was licensed by the Institute of Chartered Accountants of Nigeria (ICAN) to practice on 24 May 1990.",
  },
  {
    q: "Where is your office and which cities do you serve?",
    a: "We are headquartered in Lagos (Ijaiye-Ogba) and serve clients in Lagos, Abuja and Port Harcourt.",
  },
  {
    q: "What size of business do you typically work with?",
    a: "Our client base ranges from high net-worth individuals and SMEs to listed corporates and financial institutions.",
  },
  {
    q: "Will a partner actually work on my engagement?",
    a: "Yes. Every engagement is partner-led — a principal officer scopes, oversees and signs off the work.",
  },
  {
    q: "How is your fee structured?",
    a: "Fees depend on scope, complexity, urgency and risk. After the diagnostic step we provide a written fee proposal — no hidden charges.",
  },
  {
    q: "Do you handle tax disputes and tax authority representation?",
    a: "Yes. We provide tax planning, computation, filing, and representation before the FIRS, state revenue boards and the Tax Appeal Tribunal.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:url", content: `${SITE.url}/` },
      { name: "twitter:title", content: `${SITE.name} — ${SITE.tagline}` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildSchemaBlocks([
            breadcrumbsSchema([{ name: "Home", url: `${SITE.url}/` }]),
            faqSchema(FAQS),
          ]),
        ),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <IntroBlock />
      <ServicesGrid />
      <ProcessTimeline />
      <ValuesGrid />
      <StatsBand />
      <PartnersStrip />
      <TeamPreview />
      <HomeFAQ />
      <CTABanner />
    </>
  );
}
