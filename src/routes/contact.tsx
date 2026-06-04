import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "../lib/site";
import { canonical } from "../lib/seo";
import { buildMailto, whatsappLink } from "../lib/contact";
import { breadcrumbsSchema, buildSchemaBlocks } from "../lib/schema";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SITE.name}` },
      {
        name: "description",
        content:
          "Get in touch with BOAkinola & Co by phone, email, WhatsApp or in person at our Lagos office. A principal officer will respond within one business day.",
      },
      { property: "og:title", content: `Contact — ${SITE.name}` },
      { property: "og:url", content: canonical("/contact") },
    ],
    links: [{ rel: "canonical", href: canonical("/contact") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildSchemaBlocks([
            breadcrumbsSchema([
              { name: "Home", url: `${SITE.url}/` },
              { name: "Contact", url: canonical("/contact") },
            ]),
          ]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const href = buildMailto(form);
    window.location.href = href;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <section className="border-b border-border bg-surface-alt">
        <div className="container-narrow py-12 md:py-16">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <p className="eyebrow mt-6">Get in touch</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl text-balance">
            Talk to a principal officer.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            Call us, send a WhatsApp message, or use the form below. A principal
            officer will personally respond within one business day.
          </p>
        </div>
      </section>

      <Section padding="lg">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Contact details */}
          <div className="md:col-span-5">
            <h2 className="font-display text-2xl font-semibold text-primary">
              BOAkinola &amp; Co
            </h2>
            <p className="mt-1 text-sm text-muted">{SITE.hours}</p>

            <dl className="mt-6 space-y-6 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Office address
                </dt>
                <dd className="mt-1.5 leading-relaxed text-ink">
                  <strong className="text-primary">Lagos office</strong>
                  <br />
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.country}
                  <br />
                  {SITE.address.postal}
                </dd>
                <a
                  className="mt-2 inline-block text-xs font-semibold text-accent-600 hover:underline"
                  href="https://www.google.com/maps/search/?api=1&query=LSDPC+Medium+Housing+Estate+Oba-Ogunji+Road+Ijaiye-Ogba+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Phone
                </dt>
                <dd className="mt-1.5 space-y-1 text-ink">
                  <a href={`tel:${SITE.phoneTel[0]}`} className="block hover:text-accent-600">
                    {SITE.phoneDisplay[0]}
                  </a>
                  <a href={`tel:${SITE.phoneTel[1]}`} className="block hover:text-accent-600">
                    {SITE.phoneDisplay[1]}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Email
                </dt>
                <dd className="mt-1.5 space-y-1 text-ink">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="block hover:text-accent-600"
                  >
                    {SITE.email}
                  </a>
                  <a
                    href={`mailto:${SITE.altEmail}`}
                    className="block hover:text-accent-600"
                  >
                    {SITE.altEmail}
                  </a>
                </dd>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="mt-2 text-xs font-semibold text-accent-600 hover:underline"
                >
                  {copied ? "Copied!" : "Copy email"}
                </button>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  WhatsApp
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink hover:text-accent-600"
                  >
                    Chat with us on WhatsApp →
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <div className="card">
              <h2 className="font-display text-2xl font-semibold text-primary">
                Request a consultation
              </h2>
              <p className="mt-1 text-sm text-muted">
                Fill in your details — this will open your mail client with the
                message pre-filled. If you would prefer not to use your mail
                client, just call or send us a WhatsApp message instead.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    How can we help? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button type="submit" variant="primary">
                    Send via email
                  </Button>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-accent-600 hover:underline"
                  >
                    …or send via WhatsApp
                  </a>
                </div>
                <p className="text-xs text-muted">
                  By contacting us you agree that we may respond via the email
                  or phone number you provide. We will not subscribe you to
                  marketing without your consent.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <Section background="alt" padding="md">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-primary">
            Where to find us
          </h2>
          <p className="mt-1 text-sm text-muted">
            Our Lagos office is in the LSDPC Medium Housing Estate, off Oba-Ogunji
            Road in Ijaiye-Ogba.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
            <iframe
              title="Map of BOAkinola & Co Lagos office"
              src="https://www.google.com/maps?q=LSDPC+Medium+Housing+Estate+Oba-Ogunji+Road+Ijaiye-Ogba+Lagos&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
