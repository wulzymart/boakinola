import { Link } from "@tanstack/react-router";

export function ServiceHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section
      aria-labelledby="service-title"
      className="relative overflow-hidden border-b border-border bg-surface-alt"
    >
      <div className="container-narrow grid items-center gap-10 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <p className="eyebrow">{eyebrow}</p>
          <h1
            id="service-title"
            className="mt-2 font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl text-balance"
          >
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            {intro}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn btn-primary">
              Request a consultation
            </Link>
            <Link to="/services" className="btn btn-outline">
              All services
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          {image ? (
            <div className="overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src={image}
                alt={imageAlt ?? ""}
                className="h-full w-full object-cover"
                width={640}
                height={480}
                loading="eager"
              />
            </div>
          ) : (
            <div
              aria-hidden="true"
              className="aspect-[4/3] rounded-xl border border-border bg-gradient-to-br from-primary-50 via-surface to-accent-50"
            />
          )}
        </div>
      </div>
    </section>
  );
}
