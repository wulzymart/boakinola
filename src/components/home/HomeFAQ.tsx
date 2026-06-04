import { Link } from "@tanstack/react-router";
import { Section } from "../ui/Section";
import { Accordion, AccordionItem } from "../ui/Accordion";
import type { FaqItem } from "../../lib/schema";

const FAQS: FaqItem[] = [
  {
    q: "Are you licensed to practice in Nigeria?",
    a: "Yes. B.O. Akinola & Co was licensed by the Institute of Chartered Accountants of Nigeria (ICAN) to practice on 24 May 1990. We are a firm of Chartered Accountants and operate under that licence to this day.",
  },
  {
    q: "Where is your office and which cities do you serve?",
    a: "We are headquartered in Lagos (Ijaiye-Ogba) and presently serve clients in Lagos, Abuja and Port Harcourt, with plans to formally upgrade our Abuja and Port Harcourt offices. We also serve clients in other Nigerian cities and across West Africa by arrangement.",
  },
  {
    q: "What size of business do you typically work with?",
    a: "Our client base ranges from high net-worth individuals and SMEs to listed corporates and financial institutions across oil and gas, banking, insurance, hospitality, manufacturing and agriculture. Engagements are scoped to fit the size and complexity of the work — not the size of the firm.",
  },
  {
    q: "Will a partner actually work on my engagement?",
    a: "Yes. Every engagement is partner-led. A principal officer scopes the work, oversees the team, and signs off the deliverable. We do not sell a partner's name and then staff the work with juniors you have not met.",
  },
  {
    q: "How is your fee structured?",
    a: "Fees depend on the scope, complexity, urgency and risk profile of each engagement. After the diagnostic step we provide a written fee proposal — no hidden charges, no surprise invoices. We will always tell you up front if a piece of work is likely to take longer than the original estimate.",
  },
  {
    q: "Do you handle tax disputes and tax authority representation?",
    a: "Yes. Our tax practice covers planning, computation, filing, and representation before the Federal Inland Revenue Service, state internal revenue services, and where required, the Tax Appeal Tribunal and the courts.",
  },
];

export function HomeFAQ() {
  return (
    <Section background="alt" padding="lg" containerClassName="!max-w-3xl">
      <p className="eyebrow text-center">Frequently asked</p>
      <h2 className="mt-2 text-center font-display text-3xl font-semibold text-primary sm:text-4xl text-balance">
        Questions prospective clients ask first.
      </h2>
      <p className="mt-4 text-center text-muted text-pretty">
        If your question is not here, just{" "}
        <Link to="/contact" className="text-accent-600 underline">
          send us a message
        </Link>{" "}
        and a partner will respond.
      </p>
      <div className="mt-8">
        <Accordion>
          {FAQS.map((f, i) => (
            <AccordionItem key={i} q={f.q} a={f.a} />
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
