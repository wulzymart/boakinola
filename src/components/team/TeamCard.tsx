import type { TeamMember } from "../../lib/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="card flex h-full flex-col items-start">
      <div
        className="mb-5 flex h-16 w-16 items-center justify-center rounded-full text-xl font-semibold tracking-wide text-white shadow-md"
        style={{
          background: `linear-gradient(135deg, ${member.gradientFrom} 0%, ${member.gradientTo} 100%)`,
        }}
        aria-hidden="true"
      >
        {member.initials}
      </div>
      <h3 className="font-display text-lg font-semibold text-primary">
        {member.name}
      </h3>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-600">
        {member.role}
      </p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
        {member.credentials}
      </p>
      <p className="mt-3 grow text-sm leading-relaxed text-muted">{member.bio}</p>
    </article>
  );
}
