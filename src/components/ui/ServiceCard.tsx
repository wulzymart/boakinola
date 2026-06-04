import { Link } from "@tanstack/react-router";
import type { ServiceDef } from "../../lib/nav";
import { IconForService } from "./IconForService";

export function ServiceCard({ service, compact = false }: { service: ServiceDef; compact?: boolean }) {
  return (
    <Link
      to={service.to}
      className="card group flex h-full flex-col"
      aria-label={`${service.title}: ${service.blurb}`}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary-50 text-primary transition-colors group-hover:bg-accent group-hover:text-primary">
        <IconForService name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent-600 transition-colors">
        {service.shortTitle}
      </h3>
      {!compact && (
        <p className="mt-2 grow text-sm leading-relaxed text-muted">{service.blurb}</p>
      )}
      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent-600">
        <span>Learn more</span>
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
