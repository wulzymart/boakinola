export const PARTNERS: { name: string; sector?: string }[] = [
  { name: "BrockwellGates", sector: "Energy & Logistics" },
  { name: "Adeniji Agboola", sector: "Legal" },
  { name: "Regency Assurance", sector: "Insurance" },
  { name: "Lesam Global Concept", sector: "Hospitality" },
  { name: "AK Banks Consulting", sector: "Financial Advisory" },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Audit",
    body: "We begin every engagement with a focused diagnostic of your books, systems and statutory exposure, so nothing is assumed.",
  },
  {
    n: "02",
    title: "Evaluate",
    body: "Findings are benchmarked against Nigerian regulation and the firm's three decades of practice, then translated into clear options.",
  },
  {
    n: "03",
    title: "Project",
    body: "We scope the work, agree deliverables, timeline and fees in writing, and assign a partner-led team for the duration of the engagement.",
  },
  {
    n: "04",
    title: "Recommendation",
    body: "You receive a written report with concrete recommendations that you can act on — supported by our principal officers, not handed off.",
  },
] as const;

export const VALUES = [
  {
    label: "Ingenuity",
    body: "We think first, then act. Every engagement starts with a clear question and ends with a defensible answer.",
  },
  {
    label: "Creativity",
    body: "Tax, audit and advisory problems rarely have off-the-shelf answers. We design solutions that fit your business.",
  },
  {
    label: "Customer Focused",
    body: "Your deadlines, your stakeholders and your risks drive our work — not the other way around.",
  },
  {
    label: "Transparency",
    body: "Plain-English updates. No hidden fees. No scope creep. You always know where the engagement stands.",
  },
  {
    label: "Commitment",
    body: "When we take on an engagement, principal-officer time is committed until the deliverable is signed off.",
  },
  {
    label: "Integrity",
    body: "We have been licensed by ICAN since 24 May 1990, and we still do business the same way we did on day one.",
  },
] as const;

export const STATS = [
  { value: 30, suffix: "+", label: "Years of practice" },
  { value: 13, suffix: "", label: "Professional services" },
  { value: " 1990", suffix: "", label: "ICAN licensed" },
  { value: 7, suffix: "", label: "Principal officers" },
] as const;
