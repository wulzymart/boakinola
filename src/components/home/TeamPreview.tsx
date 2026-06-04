import { Link } from "@tanstack/react-router";
import { Section } from "../ui/Section";
import { TEAM } from "../../lib/team";
import { TeamCard } from "../team/TeamCard";

export function TeamPreview() {
  const featured = TEAM.slice(0, 3);
  return (
    <Section background="surface" padding="lg">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="eyebrow">Our team</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl text-balance">
            Principal officers with deep, varied experience.
          </h2>
        </div>
        <p className="md:col-span-5 text-muted text-pretty">
          Our partners trained at KPMG, PwC, Maersk, Dunlop, Dangote Cement and
          leading state revenue boards. The work you brief is the work they
          personally lead.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((m) => (
          <TeamCard key={m.slug} member={m} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/about" className="btn btn-outline">
          Meet the full team
        </Link>
      </div>
    </Section>
  );
}
