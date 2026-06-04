import { Section } from "../ui/Section";
import { STATS } from "../../lib/firm";

export function StatsBand() {
  return (
    <Section background="surface" padding="md" containerClassName="!max-w-6xl">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-surface p-6 text-center md:p-8">
            <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
              {s.value.toLocaleString()}{s.suffix}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
