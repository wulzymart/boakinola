/**
 * Centralised site-wide constants. Import from anywhere; keep in sync with
 * the canonical domain declared in netlify.toml redirects.
 */
export const SITE = {
  name: "BOAkinola & Co",
  shortName: "BOAkinola",
  legalName: "B.O. Akinola & Co (Chartered Accountants)",
  tagline: "Chartered Accountants in Lagos — Auditing, Tax & Advisory",
  description:
    "ICAN-licensed firm of Chartered Accountants with 30+ years of experience in auditing, taxation, advisory, debt recovery and corporate services across Nigeria.",
  url: "https://boakinola.com",
  locale: "en_NG",
  foundingYear: 1990,
  email: "info@boakinola.com",
  altEmail: "femi@boakinola.com",
  phoneDisplay: ["+234 802 501 2214", "+234 803 715 2480"],
  phoneTel: ["+2348025012214", "+2348037152480"],
  whatsapp: "2348025012214",
  address: {
    street: "181 Flat 3, LSDPC Medium Housing Estate, S4TC, Oba-Ogunji Road, Ijaiye-Ogba",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    postal: "P.O. Box 3089, Shomolu, Lagos",
  },
  hours: "Mon – Fri · 9:00 AM – 5:00 PM WAT",
  social: {
    linkedin: "https://www.linkedin.com/company/boakinola",
  },
  ogImage: "/images/og/home.svg",
} as const;

export type Site = typeof SITE;
