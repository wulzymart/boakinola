import { Section } from "../ui/Section";
import { VALUES } from "../../lib/firm";

export function ValuesGrid() {
  return (
    <Section background="alt" padding="lg">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Our values</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl text-balance">
          Six commitments that shape every engagement.
        </h2>
        <p className="mt-4 text-base text-muted text-pretty">
          The words below are on our letterhead because we still live by them.
          They guide how we staff an engagement, write a report, and respond when
          a client calls with a problem.
        </p>
      </div>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((v) => (
          <li key={v.label} className="card flex flex-col">
            <h3 className="font-display text-xl font-semibold text-primary">
              {v.label}
            </h3>
            <p className="mt-2 grow text-sm leading-relaxed text-muted">{v.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
