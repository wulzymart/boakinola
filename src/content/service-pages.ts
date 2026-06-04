import type { FaqItem } from "./schema";

export interface ServicePageContent {
  slug: string;
  shortTitle: string;
  title: string;
  intro: string;
  body: string[];
  bullets?: string[];
  whatYouGet?: string[];
  faqs: FaqItem[];
  image: string;
  imageAlt: string;
  draft?: boolean;
}

/**
 * Centralised copy for all service pages. Source content (where available)
 * comes from /content; for the seven services with no source copy, we have
 * written conservative descriptions in the firm's voice and flagged them
 * `draft: true` so the principal officers can review.
 */
export const SERVICE_PAGES: Record<string, ServicePageContent> = {
  auditing: {
    slug: "auditing",
    shortTitle: "Auditing",
    title: "Independent audits that stand up to scrutiny",
    intro:
      "We lift the auditing burden off your organisation's finances — helping you meet deadlines, avoid penalties and give stakeholders the assurance they expect.",
    body: [
      "We do a thorough evaluation of your books and help reveal all loopholes that need to be closed. Our audit work is partner-led, scheduled around your reporting cycle, and scoped to give you exactly the level of assurance you need — no more, no less.",
      "Whether you require a statutory audit under Nigerian law, a special-purpose audit for investors or lenders, or an interim review to keep management informed, our principal officers are personally involved from planning to the final report.",
    ],
    bullets: [
      "Statutory audits for companies, NGOs and regulated entities",
      "Special-purpose audits (grant, donor, project, lender-driven)",
      "Interim financial reviews and management accounts",
      "Internal control evaluation and remediation",
      "Audit readiness and pre-audit advisory",
    ],
    faqs: [
      {
        q: "How long does a statutory audit usually take?",
        a: "It depends on the size and complexity of the entity, the readiness of your books, and the reporting deadline. After the diagnostic step we give you a written timeline and stick to it.",
      },
      {
        q: "Will the same partner be there from start to finish?",
        a: "Yes. A principal officer plans the engagement, attends key meetings, and signs the report. The team supporting them may include seniors and associates, but the partner is consistent.",
      },
      {
        q: "Can you audit entities in sectors other than financial services?",
        a: "Yes. Our sector experience spans oil and gas, banking, insurance, manufacturing, hospitality, agriculture and the public sector. We bring the right specialists for the engagement.",
      },
    ],
    image: "/images/services/auditing.jpg",
    imageAlt:
      "Auditor reviewing financial statements with a calculator and ledger book on the desk",
  },
  accounting: {
    slug: "accounting",
    shortTitle: "Accounting",
    title: "Books that satisfy both the tax man and your board",
    intro:
      "The opening and writing up of proper books of accounts and other financial records in a systematic manner — adequately for statutory and management demands — is indispensable for good management and success.",
    body: [
      "Even when an organisation has a full-fledged accounts department, work in the whole department or certain vital sections may fall into arrears, or difficulties may arise that require extra-ordinary attention — the services of a firm of Chartered Accountants.",
      "We step in where you need us: whether it is opening books for a new entity, clearing backlog periods, redesigning your chart of accounts, or providing ongoing monthly bookkeeping support.",
    ],
    bullets: [
      "Setting up books of account for new entities",
      "Clearing backlog accounting and reconstruction of prior periods",
      "Monthly, quarterly and annual bookkeeping and management accounts",
      "Chart of accounts redesign and accounting policy manuals",
      "Payroll, fixed asset and inventory accounting support",
    ],
    faqs: [
      {
        q: "Do you take over our full accounting function?",
        a: "We can, as an outsourced finance team for SMEs that do not yet need a full in-house finance department. We also work alongside your existing team to add capacity, expertise or both.",
      },
      {
        q: "Which accounting frameworks do you work with?",
        a: "We prepare accounts under Nigerian GAAP (SAS), IFRS, and IFRS for SMEs, depending on the entity's size, regulatory requirement and reporting audience.",
      },
      {
        q: "Can you help with backlog accounting?",
        a: "Yes — we routinely reconstruct multiple years of accounts from bank statements, invoices and source records. We will tell you up front if the source documents are not sufficient to support a robust reconstruction.",
      },
    ],
    image: "/images/services/accounting.jpg",
    imageAlt:
      "Accountant reviewing a ledger book and supporting documents at a desk",
  },
  taxation: {
    slug: "taxation",
    shortTitle: "Taxation",
    title: "Tax planning, compliance and representation",
    intro:
      "Tax laws are now so numerous and complex that it always needs the proficiency of an expert to ensure that the tax payer does not suffer more liability than is required by law.",
    body: [
      "We support individuals, SMEs and corporates across personal income tax, companies' income tax, withholding tax, capital gains tax, petroleum profits tax and the various state-level taxes that Nigerian businesses routinely contend with.",
      "Beyond compliance, we design tax structures that withstand scrutiny — for new investments, restructurings, cross-border transactions and the everyday decisions that determine how much of your profit actually reaches the bank.",
    ],
    bullets: [
      "Corporate and personal income tax planning and computation",
      "Annual and provisional tax returns preparation and filing",
      "Withholding tax management and reconciliations",
      "Tax health checks and exposure reviews",
      "Representation before the FIRS, state revenue boards and the Tax Appeal Tribunal",
    ],
    faqs: [
      {
        q: "Do you handle tax disputes with the FIRS or state boards?",
        a: "Yes. We prepare objections, respond to enquiries, and represent clients at audit, investigations and hearings before the Tax Appeal Tribunal and the courts where required.",
      },
      {
        q: "Can you help us structure a new investment tax-efficiently?",
        a: "Yes. We work with your lawyers and advisers at the structuring stage so that the entity, financing and revenue model are designed with Nigerian tax rules in mind from day one.",
      },
      {
        q: "What if we have unfiled returns?",
        a: "We run a confidential review, regularise your filings, and put you on a forward-looking compliance calendar. The longer you delay, the higher the exposure — we will tell you the cost of that delay before we start.",
      },
    ],
    image: "/images/services/taxation.jpg",
    imageAlt: "Tax adviser reviewing Nigerian tax forms and computations",
    draft: true,
  },
  "value-added-tax": {
    slug: "value-added-tax",
    shortTitle: "Value Added Tax (VAT)",
    title: "VAT registration, returns and disputes",
    intro:
      "Value Added Tax requires professional expertise for effective implementation. We assist our clients under the scheme in the areas of registration, returns, reconciliations and resolution of disputes.",
    body: [
      "Whether you are a startup approaching the VAT threshold, an established business struggling with VAT reconciliations, or a company under VAT audit, our tax team works with you end-to-end to keep your VAT position clean and defensible.",
    ],
    bullets: [
      "VAT registration and de-registration support",
      "Monthly and quarterly VAT returns preparation and filing",
      "Input and output VAT reconciliations and health checks",
      "VAT audit response and dispute resolution",
      "Advisory on VAT treatment of new products, services and contracts",
    ],
    faqs: [
      {
        q: "Are we required to register for VAT?",
        a: "The general rule is that any person whose taxable supplies exceed the statutory threshold must register. We help you assess your obligation and register where required.",
      },
      {
        q: "Can you handle a VAT audit on our behalf?",
        a: "Yes. We act as your representative throughout the VAT audit process — from initial enquiry through to closure or escalation.",
      },
    ],
    image: "/images/services/vat.jpg",
    imageAlt: "Hands working on VAT returns and computations on a desk",
    draft: true,
  },
  "debt-recovery": {
    slug: "debt-recovery",
    shortTitle: "Debt Recovery",
    title: "Recovering what is owed — discreetly and effectively",
    intro:
      "We specialise in the recovery of debts for both high net-worth individuals and corporate bodies. The process begins with proper verification of our client, and includes reconciliation of balances and effective demands for the reconciled amounts.",
    body: [
      "We have achieved some remarkable success for clients — and the money recovered has been of tremendous use to those clients. We balance firmness with professionalism, knowing that overly aggressive tactics can damage the commercial relationships our clients are trying to preserve.",
    ],
    bullets: [
      "Verification and reconciliation of debtor balances",
      "Pre-litigation demand letters and follow-up",
      "Negotiation of settlement plans and payment schedules",
      "Coordination with legal counsel where litigation is unavoidable",
      "Status reporting and recovered-funds administration",
    ],
    faqs: [
      {
        q: "How is debt recovery fees structured?",
        a: "Depending on the volume, age and complexity of the receivables, we work on retainer, success-fee, or a hybrid arrangement. We discuss and agree the model in writing before the engagement starts.",
      },
      {
        q: "Will our customer relationships be damaged?",
        a: "We conduct recovery in a professional, evidence-led manner. The objective is to recover the debt, not to score points. We can also work in a 'soft' mode where the relationship is strategically important to you.",
      },
    ],
    image: "/images/services/debt-recovery.jpg",
    imageAlt: "Documents and calculator representing debt recovery services",
  },
  "management-consultancy": {
    slug: "management-consultancy",
    shortTitle: "Management Consultancy",
    title: "Practical advice to make your business work better",
    intro:
      "Management consultancy covers a wide range of services aimed at improving the efficiency and profitability of an established or proposed company — for purposes such as expansion, diversification, better competitiveness and reorganisation.",
    body: [
      "Our consultancy work is grounded in practice: decades of real engagements with Nigerian businesses, not borrowed slide-deck frameworks. We work with you, your management team and your board to design and implement change that actually sticks.",
    ],
    bullets: [
      "Feasibility studies and business plan preparation",
      "Investment analysis and appraisal",
      "Financial analysis and capital structuring",
      "System review, control evaluation and data processing",
      "Costing and pricing methods",
      "Budgets and budgetary control",
      "Management information system design",
      "Organisation structure and manpower development",
      "Pension and retirement scheme design",
      "Financial advisory services",
    ],
    faqs: [
      {
        q: "Do you only work on the full assignment, or also on smaller pieces?",
        a: "Both. We will scope a single, well-defined deliverable (e.g. a feasibility study) or a longer programme of work, depending on what you need.",
      },
      {
        q: "Will the partner present findings to our board?",
        a: "Yes. We do not deliver a report and disappear. The partner leading the work is the partner who presents the findings to your board and supports the implementation.",
      },
    ],
    image: "/images/services/management-consultancy.jpg",
    imageAlt: "Management consultants in a meeting with a client team",
  },
  "company-formation": {
    slug: "company-formation",
    shortTitle: "Company Formation",
    title: "From incorporation to ongoing secretarial compliance",
    intro:
      "This involves bringing a company to life and running it in accordance with the laws — observing set procedures, rules and regulations, and the filing of various returns on specified aspects of the company's transactions.",
    body: [
      "We support entrepreneurs and established groups through every step: name reservation, incorporation with the Corporate Affairs Commission, post-incorporation setup, and the ongoing statutory registers, minutes and annual returns that keep your company in good standing.",
    ],
    bullets: [
      "Company name search, reservation and incorporation",
      "Preparation of memorandum and articles of association",
      "Post-incorporation setup — registers, share certificates, minutes",
      "Annual returns and statutory filings with the CAC",
      "Changes to company particulars — directors, shareholders, share capital",
      "Corporate secretarial retainer",
    ],
    faqs: [
      {
        q: "How long does company incorporation take?",
        a: "With clean documentation, a private company can be incorporated within a few working days. Where additional approvals are required (e.g. for foreign-owned entities), we will give you an honest timeline up front.",
      },
      {
        q: "Do you handle annual filings as well?",
        a: "Yes. We offer a corporate-secretarial retainer that covers annual returns, changes, minute books and the other statutory housekeeping that companies often forget — until the CAC or a bank reminds them.",
      },
    ],
    image: "/images/services/company-formation.jpg",
    imageAlt: "Entrepreneur reviewing incorporation documents at a desk",
  },
  "receivership-liquidation": {
    slug: "receivership-liquidation",
    shortTitle: "Receivership & Liquidation",
    title: "Orderly resolution when a company runs into trouble",
    intro:
      "Usually when a company runs into financial difficulties for whatever reason, its creditors may decide to take over temporarily the management of the company for the purpose of re-organisation or liquidation. In such cases, a Receiver/Manager or Receiver/Liquidator is appointed.",
    body: [
      "We act as independent Receiver/Manager and Liquidator, working transparently with creditors, shareholders and the court. Our focus is on protecting creditor value, preserving going-concern businesses where possible, and delivering an orderly wind-down where it is not.",
    ],
    bullets: [
      "Appointment as Receiver/Manager by secured creditors or court",
      "Appointment as Liquidator (members' or creditors' voluntary winding-up)",
      "Court-supervised winding-up",
      "Asset realisation and distribution to creditors",
      "Reporting to creditors, the court and regulatory bodies",
    ],
    faqs: [
      {
        q: "Who can appoint a Receiver/Manager?",
        a: "Typically a secured creditor under the terms of a debenture, or a court. We can advise both lenders and borrowers on the practical implications before an appointment is made.",
      },
      {
        q: "Do you handle both solvent and insolvent liquidations?",
        a: "Yes. We handle members' voluntary winding-up (solvent), creditors' voluntary winding-up and court-supervised liquidations.",
      },
    ],
    image: "/images/services/receivership.jpg",
    imageAlt: "Gavel and documents representing receivership and liquidation",
  },
  investigation: {
    slug: "investigation",
    shortTitle: "Investigation",
    title: "Independent investigation when something has gone wrong",
    intro:
      "When loss has occurred — through fraud, embezzlement, mismanagement or wrong judgement — it usually becomes necessary to carry out an in-depth, independent investigation to establish what happened, quantify the loss and recommend recovery or remediation steps.",
    body: [
      "Our investigation work is conducted with independence, evidence discipline, and a clear focus on findings that stand up to legal scrutiny. Where appropriate, we work alongside your legal counsel and, if required, support criminal or civil proceedings.",
    ],
    bullets: [
      "Allegations of fraud, embezzlement or misappropriation",
      "Forensic accounting and loss quantification",
      "Lifestyle and asset tracing",
      "Background checks and integrity due diligence",
      "Internal control gap analysis and remediation",
      "Expert witness support in civil and criminal proceedings",
    ],
    faqs: [
      {
        q: "Will you keep the investigation confidential?",
        a: "Yes. Investigations are conducted on a strict need-to-know basis. Findings are reported to the principal who commissioned the work (typically the board, audit committee or principal shareholder).",
      },
      {
        q: "Can you support a court case?",
        a: "Yes. We can prepare expert reports and, where required, give expert testimony in support of criminal or civil proceedings.",
      },
    ],
    image: "/images/services/investigation.jpg",
    imageAlt: "Investigator reviewing financial records with a magnifying glass",
    draft: true,
  },
  reconciliation: {
    slug: "reconciliation",
    shortTitle: "Reconciliation of Accounts",
    title: "Closing the loop on long-outstanding reconciliations",
    intro:
      "Reconciliation of accounts is the discipline of getting bank balances, inter-company balances, supplier statements and ledger accounts to agree — and keeping them that way.",
    body: [
      "If your finance team is carrying months (or years) of unreconciled items, you cannot rely on your management accounts, and your audit will be painful. Our reconciliation work clears the backlog, identifies the root cause, and puts you on a forward-looking cadence.",
    ],
    bullets: [
      "Bank reconciliation and bank-statement analysis",
      "Inter-company account reconciliation",
      "Supplier and customer statement reconciliations",
      "Fixed asset register reconciliation",
      "Process redesign to prevent recurrence",
    ],
    faqs: [
      {
        q: "How long does it take to clear a backlog?",
        a: "It depends on the volume and quality of source records. We always run a short diagnostic first, then give you a written estimate of time and cost before we start the actual reconciliation work.",
      },
      {
        q: "Can you also redesign the process so it does not happen again?",
        a: "Yes. A reconciliation is only as good as the process that produces the inputs. We pair the clean-up with a short process improvement so the next quarter's reconciliation is not a fire-drill.",
      },
    ],
    image: "/images/services/reconciliation.jpg",
    imageAlt: "Accountant reconciling bank statements and ledgers",
    draft: true,
  },
  "asset-verification": {
    slug: "asset-verification",
    shortTitle: "Asset Verification & Valuation",
    title: "Knowing exactly what you own — and what it is worth",
    intro:
      "Asset verification confirms what assets your organisation actually owns, where they are, and their condition. Valuation places a defensible value on them. Together, they give you a single source of truth for insurance, financing, M&A and statutory reporting.",
    body: [
      "Whether you need a one-off verification exercise, an independent valuation for a transaction, or both, our team works to a structured methodology that produces results you can stand behind in front of lenders, insurers, regulators and tax authorities.",
    ],
    bullets: [
      "Physical asset verification, tagging and reconciliation to fixed asset register",
      "Independent asset valuation for insurance, finance and M&A",
      "Annual asset verification exercises for large asset bases",
      "Specialised valuations — plant and machinery, real estate, intangibles",
      "Supporting documentation for tax, insurance and audit purposes",
    ],
    faqs: [
      {
        q: "Can you do the verification at multiple locations?",
        a: "Yes. We routinely run multi-location exercises. The methodology is consistent so the results are comparable across sites.",
      },
      {
        q: "Will the report satisfy a bank or insurer?",
        a: "Yes — we prepare reports in the format required by Nigerian banks, insurance companies and tax authorities. We can also work to a specific lender's or insurer's template if one has been provided.",
      },
    ],
    image: "/images/services/asset-verification.jpg",
    imageAlt: "Inspector verifying physical assets and tagging items",
    draft: true,
  },
  training: {
    slug: "training",
    shortTitle: "Professional Training",
    title: "In-house training for finance teams",
    intro:
      "Strong finance teams are built through targeted training — not generic courses. We design and deliver in-house training that fits the work your team actually does, on the frameworks you actually use.",
    body: [
      "Sessions are run by partners and senior staff with current practical experience. We never deliver a topic we are not actively working on elsewhere in the practice.",
    ],
    bullets: [
      "IFRS and Nigerian GAAP update sessions",
      "Tax compliance and tax-planning workshops",
      "Internal audit and audit-readiness training",
      "Fraud awareness and ethics for finance teams",
      "Budgeting, costing and management reporting workshops",
    ],
    faqs: [
      {
        q: "Do you run public courses or only in-house?",
        a: "Primarily in-house, so the content is tailored to your team and your sector. We can also co-deliver with a training partner for industry associations where that makes sense.",
      },
      {
        q: "How long is a typical session?",
        a: "Half-day, full-day, or a multi-day programme — depending on the topic and the depth required. We are happy to scope a focused session for a specific team.",
      },
    ],
    image: "/images/services/training.jpg",
    imageAlt: "Finance team in a training session with a Chartered Accountant",
    draft: true,
  },
  "agricultural-extension": {
    slug: "agricultural-extension",
    shortTitle: "Agricultural Extension",
    title: "Bookkeeping and advisory for agribusiness",
    intro:
      "Agricultural businesses — from smallholder cooperatives to large agribusinesses — need the same discipline of bookkeeping, budgeting and reporting as any other enterprise. We provide services tailored to the realities of the sector.",
    body: [
      "Our work in this area has covered cooperatives, out-grower schemes and commercial farms. We adapt standard accounting and reporting practice to the way agricultural businesses actually operate, including seasonality and produce-based revenue recognition.",
    ],
    bullets: [
      "Bookkeeping and management accounts for farms, cooperatives and out-grower schemes",
      "Budgeting and cash-flow planning across the agricultural cycle",
      "Costing by crop, block and activity",
      "Advisory on grants, donor funding and project reporting",
      "Statutory and tax compliance for agricultural entities",
    ],
    faqs: [
      {
        q: "Do you work with cooperatives as well as commercial farms?",
        a: "Yes. Our methodology adapts to the size and governance of the entity, and to the reporting requirements of donors, lenders or regulatory bodies where relevant.",
      },
      {
        q: "Can you support a donor or grant-funded project?",
        a: "Yes. We can design the chart of accounts, project the budget, and prepare the periodic financial reports required by donors — in addition to the underlying bookkeeping and statutory records.",
      },
    ],
    image: "/images/services/agricultural-extension.jpg",
    imageAlt: "Agricultural field with a notebook and pen representing extension services",
    draft: true,
  },
};

export function getServiceContent(slug: string): ServicePageContent | undefined {
  return SERVICE_PAGES[slug];
}
