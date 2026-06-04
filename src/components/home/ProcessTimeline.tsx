import { Section } from "../ui/Section";
import { PROCESS_STEPS } from "../../lib/firm";

export function ProcessTimeline() {
  return (
    <Section background="primary" padding="lg">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-accent">Working process</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl text-balance">
          A four-step engagement model.
        </h2>
        <p className="mt-4 text-white/75 text-pretty">
          Every engagement follows the same four steps, regardless of size. It
          keeps the work disciplined, the scope honest, and the partner close to
          the client.
        </p>
      </div>

      <ol className="mt-12 grid gap-5 md:grid-cols-4">
        {PROCESS_STEPS.map((step, i) => (
          <li
            key={step.n}
            className="relative flex flex-col gap-3 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <span
              aria-hidden="true"
              className="absolute -top-3 left-6 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-primary"
            >
              Step {i + 1}
            </span>
            <span className="font-display text-3xl font-semibold text-accent">
              {step.n}
            </span>
            <h3 className="font-display text-lg font-semibold text-white">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/75">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
