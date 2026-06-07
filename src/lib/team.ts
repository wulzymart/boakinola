export interface TeamMember {
  slug: string;
  name: string;
  initials: string;
  credentials: string;
  role: string;
  bio: string;
  gradientFrom: string;
  gradientTo: string;
}

export const TEAM: TeamMember[] = [
  {
    slug: "bamidele-obafemi-akinola",
    name: "Bamidele Obafemi Akinola",
    initials: "BOA",
    credentials: "B.Sc, MBA, FCA, FCIT, MNIM, M.IoD; FIns",
    role: "Managing Partner",
    bio: "Over 23 years of varied experience in professional practice in Nigeria. Trained and worked with KPMG Ani, Ogunde & Co, Maersk Nigeria Limited, Sea Trucks Limited, Aero Maritime Nigeria Ltd, Aviation Development Company (ADC) Plc, DN Meyer Plc and Skyway Aviation Handling Company Ltd, functioning at the highest level of financial reporting and management, including corporate tax planning.",
    gradientFrom: "#0B2545",
    gradientTo: "#13315C",
  },
  {
    slug: "olawale-surajudeen-salami",
    name: "Olawale Surajudeen Salami",
    initials: "OSS",
    credentials: "B.Sc, MBA, FCA",
    role: "Partner — Audit & Assurance",
    bio: "Over 28 years of varied experience in professional practice in Nigeria. Trained and worked at Coopers and Lybrand (now PricewaterhouseCoopers), USAID, Dunlop Nigeria Limited, Pamol Nigeria Ltd, and Jerry Bright Travels.",
    gradientFrom: "#102A56",
    gradientTo: "#0B2545",
  },
  {
    slug: "oluwatoyin-elefontuyi",
    name: "Oluwatoyin Elefontuyi",
    initials: "OE",
    credentials: "B.Sc, MBA, ACA",
    role: "Partner — Internal Audit & Risk",
    bio: "A Chartered Accountant with a rich background in audit and consultancy, and international accounting experience. Worked with Maersk Nigeria Limited, Phillips Medical System, Pregis Corporation and Atlas Copco, and with various companies in the United States, before returning to Nigeria to join Dangote Cement Plc as Assistant General Manager, Audit and Internal Control.",
    gradientFrom: "#13315C",
    gradientTo: "#1E3A8A",
  },
  {
    slug: "ibukunoluwa-bodunrin-akinola",
    name: "Ibukunoluwa Bodunrin Akinola",
    initials: "IBA",
    credentials: "B.Sc, M.Sc",
    role: "Manager — International Business",
    bio: "An accounting graduate of Covenant University, Ota, and holder of a Master of Science in International Business from Coventry University, United Kingdom. A resourceful, innovative and articulate professional supporting the firm's cross-border engagements.",
    gradientFrom: "#0B2545",
    gradientTo: "#1E40AF",
  },
  {
    slug: "folasade-akinola",
    name: "Folasade Akinola",
    initials: "FA",
    credentials: "B.Sc (Accountancy)",
    role: "Senior — Tax Assessment",
    bio: "A tax expert who worked with the Lagos State Board of Internal Revenue Service for over ten years as senior staff and tax assessor. Brings deep experience of state-level tax practice to the firm's clients.",
    gradientFrom: "#0B2545",
    gradientTo: "#13315C",
  },
];

export function memberBySlug(slug: string): TeamMember | undefined {
  return TEAM.find((m) => m.slug === slug);
}
