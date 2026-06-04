import { Section } from "../ui/Section";
import { PARTNERS } from "../../lib/firm";

export function PartnersStrip() {
  return (
    <Section background="alt" padding="md">
      <div className="mx-auto max-w-5xl text-center">
        <p className="eyebrow">Our partners</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
          Long-term clients across sectors.
        </h2>
        <p className="mt-2 text-sm text-muted">
          We serve clients in oil and gas, banking and finance, insurance,
          hospitality, professional services and more.
        </p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
        {PARTNERS.map((p) => (
          <li
            key={p.name}
            className="flex h-24 items-center justify-center bg-surface px-4 text-center"
            title={p.name}
          >
            <div className="flex flex-col items-center leading-tight">
              <span className="font-display text-base font-semibold tracking-wide text-primary sm:text-lg">
                {p.name}
              </span>
              {p.sector && (
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {p.sector}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
