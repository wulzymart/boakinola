import { Section } from "../ui/Section";

export function IntroBlock() {
  return (
    <Section background="surface" padding="lg">
      <div className="grid gap-10 md:grid-cols-12 md:items-start">
        <div className="md:col-span-4">
          <p className="eyebrow">Welcome to BOAkinola &amp; Co</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl text-balance">
            External auditor, trainers, tax &amp; professional consultants.
          </h2>
          <div className="divider-accent" />
        </div>
        <div className="md:col-span-8">
          <div className="prose-firm max-w-none text-base text-ink">
            <p>
              We are a firm of Chartered Accountants with a specialty in financial
              advisory, auditing, training, and investigation for organisations
              across Nigeria. Our principal officers have trained and worked at
              KPMG, PricewaterhouseCoopers, Maersk, Dunlop, Dangote Cement and
              other leading institutions before bringing their experience to bear
              on the businesses we serve.
            </p>
            <p>
              We work as financial advisor, sole auditor or joint auditor, trainer,
              tax and professional consultant, or independent investigator —
              depending on what your business actually needs. The work is always
              led by a partner, never handed off to a junior team you have never met.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
