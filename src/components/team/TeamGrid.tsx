import { TeamCard } from "./TeamCard";
import type { TeamMember } from "../../lib/team";

export function TeamGrid({
  members,
  compact = false,
}: {
  members: TeamMember[];
  compact?: boolean;
}) {
  return (
    <div
      className={`grid gap-5 ${
        compact
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      }`}
    >
      {members.map((m) => (
        <TeamCard key={m.slug} member={m} />
      ))}
    </div>
  );
}
