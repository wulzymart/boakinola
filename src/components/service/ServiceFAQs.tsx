import { Accordion, AccordionItem } from "../ui/Accordion";
import { faqSchema } from "../../lib/schema";

export function ServiceFAQs({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="border-t border-border bg-surface py-14 md:py-20" aria-labelledby="service-faq">
      <div className="container-narrow !max-w-3xl">
        <p className="eyebrow text-center">FAQs</p>
        <h2 id="service-faq" className="mt-2 text-center font-display text-2xl font-semibold text-primary sm:text-3xl text-balance">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-center text-muted">
          Specific questions clients tend to ask about this engagement.
        </p>
        <div className="mt-8">
          <Accordion>
            {items.map((f, i) => (
              <AccordionItem key={i} q={f.q} a={f.a} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
