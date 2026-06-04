import { SITE } from "./site";

export interface NavItem {
  label: string;
  to: string;
  description?: string;
}

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", to: "/", description: "Back to the homepage" },
  { label: "About", to: "/about", description: "Our history, mission and team" },
  { label: "Services", to: "/services", description: "All our professional services" },
  { label: "Contact", to: "/contact", description: "Get in touch with the firm" },
];

export interface ServiceDef {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  to: string;
  category: "assurance" | "tax" | "advisory" | "specialised";
  icon: string;
  draft?: boolean;
}

export const SERVICES: ServiceDef[] = [
  {
    slug: "auditing",
    title: "Auditing & Assurance",
    shortTitle: "Auditing",
    blurb:
      "Independent statutory and special-purpose audits that meet regulatory deadlines, surface control gaps, and protect you from penalties.",
    to: "/services/auditing",
    category: "assurance",
    icon: "audit",
  },
  {
    slug: "accounting",
    title: "Accounting",
    shortTitle: "Accounting",
    blurb:
      "Opening and writing up proper books of accounts and financial records, systematically and adequately, for statutory and management use.",
    to: "/services/accounting",
    category: "assurance",
    icon: "ledger",
  },
  {
    slug: "taxation",
    title: "Taxation",
    shortTitle: "Taxation",
    blurb:
      "Expert tax planning, computation, filing and representation that keeps you compliant and minimises your liability under Nigerian tax law.",
    to: "/services/taxation",
    category: "tax",
    icon: "tax",
    draft: true,
  },
  {
    slug: "value-added-tax",
    title: "Value Added Tax (VAT)",
    shortTitle: "VAT",
    blurb:
      "End-to-end VAT support: registration, returns, reconciliations, and resolution of disputes with the relevant tax authorities.",
    to: "/services/value-added-tax",
    category: "tax",
    icon: "vat",
    draft: true,
  },
  {
    slug: "debt-recovery",
    title: "Debt Recovery Services",
    shortTitle: "Debt Recovery",
    blurb:
      "Discreet, professional recovery of overdue debts for high net-worth individuals and corporate bodies, from reconciliation to demand.",
    to: "/services/debt-recovery",
    category: "advisory",
    icon: "recover",
  },
  {
    slug: "management-consultancy",
    title: "Management Consultancy",
    shortTitle: "Management Consultancy",
    blurb:
      "Feasibility studies, financial analysis, budgeting, system review, organisational design and strategic advisory for growing companies.",
    to: "/services/management-consultancy",
    category: "advisory",
    icon: "consult",
  },
  {
    slug: "company-formation",
    title: "Company Formation & Secretarial Services",
    shortTitle: "Company Formation",
    blurb:
      "Bringing a company to life and running it in full compliance with the law — incorporation, statutory filings, registers and minutes.",
    to: "/services/company-formation",
    category: "advisory",
    icon: "incorporate",
  },
  {
    slug: "receivership-liquidation",
    title: "Receivership & Liquidation",
    shortTitle: "Receivership & Liquidation",
    blurb:
      "Independent Receiver/Manager and Liquidator appointments for companies in financial difficulty, focused on creditor value and orderly resolution.",
    to: "/services/receivership-liquidation",
    category: "specialised",
    icon: "gavel",
  },
  {
    slug: "investigation",
    title: "Investigation",
    shortTitle: "Investigation",
    blurb:
      "Independent forensic and financial investigations into suspected fraud, embezzlement, mismanagement or business loss events.",
    to: "/services/investigation",
    category: "specialised",
    icon: "magnify",
    draft: true,
  },
  {
    slug: "reconciliation",
    title: "Reconciliation of Accounts",
    shortTitle: "Reconciliation of Accounts",
    blurb:
      "Bank, inter-company and ledger reconciliations that close the loop on long-outstanding items and restore confidence in your numbers.",
    to: "/services/reconciliation",
    category: "assurance",
    icon: "reconcile",
    draft: true,
  },
  {
    slug: "asset-verification",
    title: "Asset Verification & Valuation",
    shortTitle: "Asset Verification",
    blurb:
      "Physical asset verification, tagging and independent valuation for insurance, finance, M&A and statutory reporting purposes.",
    to: "/services/asset-verification",
    category: "assurance",
    icon: "asset",
    draft: true,
  },
  {
    slug: "training",
    title: "Professional Training",
    shortTitle: "Training",
    blurb:
      "Tailored in-house training for finance teams on IFRS, Nigerian tax, internal controls, audit readiness and ethical practice.",
    to: "/services/training",
    category: "specialised",
    icon: "training",
    draft: true,
  },
  {
    slug: "agricultural-extension",
    title: "Agricultural Extension Services",
    shortTitle: "Agricultural Extension",
    blurb:
      "Bookkeeping, budgeting and advisory support tailored to agribusinesses, cooperatives and agricultural extension programmes.",
    to: "/services/agricultural-extension",
    category: "specialised",
    icon: "leaf",
    draft: true,
  },
];

export const SERVICE_CATEGORIES = {
  assurance: {
    title: "Audit, Accounting & Assurance",
    blurb: "Independent examination and record-keeping that you and your stakeholders can rely on.",
  },
  tax: {
    title: "Taxation",
    blurb: "Planning, compliance and representation across personal, corporate and indirect tax.",
  },
  advisory: {
    title: "Advisory & Corporate Services",
    blurb: "Practical advice and corporate-secretarial support to start, run and grow your business.",
  },
  specialised: {
    title: "Specialised Engagements",
    blurb: "Targeted engagements for complex or sensitive situations — investigations, recovery, training.",
  },
} as const;

export const SERVICE_CATEGORIES_TITLE: Record<string, string> = {
  auditing: "Audit & Assurance",
  accounting: "Audit & Assurance",
  taxation: "Taxation",
  "value-added-tax": "Taxation",
  "debt-recovery": "Advisory & Corporate Services",
  "management-consultancy": "Advisory & Corporate Services",
  "company-formation": "Advisory & Corporate Services",
  "receivership-liquidation": "Specialised Engagements",
  investigation: "Specialised Engagements",
  reconciliation: "Audit & Assurance",
  "asset-verification": "Audit & Assurance",
  training: "Specialised Engagements",
  "agricultural-extension": "Specialised Engagements",
};

export function serviceBySlug(slug: string): ServiceDef | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function relatedServices(slug: string, count = 3): ServiceDef[] {
  const current = serviceBySlug(slug);
  if (!current) return SERVICES.slice(0, count);
  return SERVICES
    .filter((s) => s.slug !== slug)
    .sort((a, b) => {
      if (a.category === current.category && b.category !== current.category) return -1;
      if (b.category === current.category && a.category !== current.category) return 1;
      return 0;
    })
    .slice(0, count);
}

export function buildHref(path: string): string {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export const CONTACT = {
  ...SITE,
  to: "/contact",
  description: "Reach BOAkinola & Co by phone, email, WhatsApp or in person at our Lagos office.",
};
