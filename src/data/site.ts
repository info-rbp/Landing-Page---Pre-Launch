export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  hero: string;
  intro: string;
  summary: string;
  challenges: string[];
  capabilities: string[];
  deliverables: string[];
  idealFor: string;
  closing: string;
  meta: string;
  external?: { label: string; url: string; description: string };
};

export const services: Service[] = [
  {
    slug: "commercial-advisory",
    title: "Commercial Advisory",
    shortTitle: "Commercial Advisory",
    category: "Advisory & decisions",
    hero: "Better commercial decisions begin with a clearer picture.",
    intro: "Independent commercial thinking for business owners and decision-makers navigating opportunity, complexity or risk.",
    summary: "We examine the commercial realities behind a decision: financial performance, obligations, competing priorities, available options and the likely practical implications. Our advice is structured to help clients decide what to do next, not simply understand the problem.",
    challenges: ["A major decision has competing commercial considerations", "Financial results are not translating into clear management priorities", "A business needs a fresh, independent assessment", "An agreement, negotiation or growth plan has material implications"],
    capabilities: ["Business and commercial performance reviews", "Strategic planning and options analysis", "Commercial negotiations and decision support", "Pricing, cost and margin assessments", "Business model and operating structure reviews", "Restructuring options and commercial risk analysis"],
    deliverables: ["Written commercial assessments and recommendations", "Options papers and decision matrices", "Prioritised commercial action plans", "Management briefings and implementation roadmaps"],
    idealFor: "Owners, directors and management teams seeking independent input on significant business decisions.",
    closing: "Bring the decision into focus before committing time, money or resources.",
    meta: "Independent commercial advisory, business reviews, decision support and strategic analysis for Australian businesses."
  },
  {
    slug: "due-diligence",
    title: "Due Diligence & Transaction Support",
    shortTitle: "Due Diligence",
    category: "Transactions & risk",
    hero: "Understand the commercial risks before and after a transaction.",
    intro: "Structured review and investigation to help buyers, owners and advisers make better-informed transaction decisions.",
    summary: "Business acquisitions and commercial transactions can carry obligations that are not obvious from the headline price. We review the available commercial, financial and operational information, identify issues requiring further investigation and organise findings so clients and their appointed advisers can act.",
    challenges: ["You are considering acquiring a business", "Transaction disclosures or liabilities require closer examination", "Deferred consideration or completion calculations are disputed or unclear", "Post-acquisition records reveal unexpected commercial exposure"],
    capabilities: ["Pre-acquisition commercial due diligence", "Transaction documentation and disclosure reviews", "Working capital, liabilities and payment analysis", "Lease, supplier, workforce and operating-risk assessment", "Post-completion reviews and commercial investigations", "Evidence schedules and liaison with legal or accounting advisers"],
    deliverables: ["Commercial due diligence reports", "Risk and issue registers", "Evidence and document request schedules", "Recommendations and decision-support briefings"],
    idealFor: "Business purchasers, vendors, investors, directors and professional advisers requiring commercial investigation support.",
    closing: "Know the questions to ask, the evidence to request and the exposure to consider.",
    meta: "Commercial due diligence and transaction support for business acquisitions, disclosure reviews, risk assessment and post-completion issues."
  },
  {
    slug: "business-management",
    title: "Business Management Support",
    shortTitle: "Business Management",
    category: "Management & operations",
    hero: "Management capacity without committing to a permanent executive role.",
    intro: "Flexible, outsourced business management support that keeps decisions, people, processes and priorities moving.",
    summary: "Many owner-managed businesses need more management capacity before they need another full-time executive. We work alongside decision-makers to introduce structure, coordinate delivery, oversee business functions and make operating performance more visible.",
    challenges: ["The business depends too heavily on the owner", "Important operational actions are not being followed through", "Staff, suppliers and priorities need more coordinated oversight", "Management reporting and accountability are inconsistent"],
    capabilities: ["Fractional and outsourced operational management", "Business owner and leadership support", "Operational planning and prioritisation", "Staff, contractor and supplier coordination", "Budget oversight and management reporting", "Implementation support and issue resolution"],
    deliverables: ["Practical management plans and action registers", "Regular operational and financial reporting", "Responsibility frameworks and meeting rhythms", "Progress tracking against agreed priorities"],
    idealFor: "Growing SMEs and business owners who need capable, structured management support.",
    closing: "Create the capacity to lead the business rather than manage every task yourself.",
    meta: "Outsourced business management and fractional operational support for SMEs, owners and management teams."
  },
  {
    slug: "business-improvement",
    title: "Business Improvement & Transformation",
    shortTitle: "Business Improvement",
    category: "Operations & change",
    hero: "Turn complex operations into practical, repeatable systems.",
    intro: "Business improvement focused on the way work actually gets done.",
    summary: "We help organisations define better operating processes, clarify accountability and introduce management systems that improve consistency. Initiatives are scoped to the organisation's resources and designed for practical implementation.",
    challenges: ["Existing processes are undocumented or inconsistent", "Growth has exposed gaps in roles, workflows and reporting", "Manual work and duplicated systems slow the team down", "A change program needs a clear delivery structure"],
    capabilities: ["Operating model and organisational structure reviews", "Process mapping and standard operating procedures", "Change and transition management", "Digital records, registers and reporting systems", "Workflow improvements and practical automation", "Performance measures and accountability systems"],
    deliverables: ["Operating procedures and process maps", "Change and implementation plans", "Digital registers and reporting tools", "Role clarity and performance frameworks"],
    idealFor: "Businesses preparing to scale, reduce owner-dependency or improve operational controls.",
    closing: "Design changes that teams can understand, adopt and sustain.",
    meta: "Operational improvement, change management, workflow design, SOPs and management systems for growing businesses."
  },
  {
    slug: "financial-analysis",
    title: "Financial Analysis, Valuations & Feasibility",
    shortTitle: "Financial Analysis",
    category: "Financial insight",
    hero: "Put meaningful numbers behind important decisions.",
    intro: "Commercial financial analysis that connects assumptions, risks and business objectives.",
    summary: "We develop practical models and assessments to support pricing, investment, feasibility, business value and cash-flow decisions. The emphasis is on transparency: what the numbers show, what assumptions matter and how different scenarios change the outcome.",
    challenges: ["You need to understand a business's indicative value", "A project or investment requires a feasibility assessment", "Cash flow, pricing or margin visibility needs improvement", "Different commercial scenarios need comparison"],
    capabilities: ["Indicative commercial business valuations", "Feasibility studies and business cases", "Cash-flow forecasts and scenario models", "Budgets, cost and profitability analysis", "Pricing and margin modelling", "Commercial sensitivity and risk assessment"],
    deliverables: ["Valuation and commercial assessment reports", "Feasibility reports and investment models", "Cash-flow and forecasting workbooks", "Executive summaries and decision scenarios"],
    idealFor: "Owners, purchasers, project sponsors and management teams evaluating business value, investment or viability.",
    closing: "Understand the assumptions and trade-offs behind the figures.",
    meta: "Business valuations, feasibility studies, cash-flow forecasting, pricing analysis and financial modelling for commercial decisions."
  },
  {
    slug: "tenders-procurement",
    title: "Contracts, Tenders & Procurement",
    shortTitle: "Tenders & Procurement",
    category: "Commercial delivery",
    hero: "Stronger submissions. Clearer commercial commitments.",
    intro: "Practical support across tenders, procurement, commercial documentation and contract administration.",
    summary: "From determining a viable tender price to structuring a convincing proposal, we help businesses present their capabilities and make informed procurement decisions. We also assist with the commercial administration of supplier and project arrangements.",
    challenges: ["A tender response requires substantial business and pricing input", "A contract needs clear scope, assumptions and delivery responsibilities", "Supplier quotations need structured comparison", "A project needs control over costs, variations or deliverables"],
    capabilities: ["Tender response and proposal preparation", "Pricing schedules and cost build-ups", "Scope of works and service methodologies", "Contractor procurement and quotation comparisons", "Commercial negotiation and supplier coordination", "Contract administration, variations and reporting"],
    deliverables: ["Tender submissions and supporting schedules", "Pricing models and cost comparison reports", "Scopes of works and procurement packs", "Contract management and variation registers"],
    idealFor: "Construction, manufacturing, facilities and service businesses pursuing contracts or managing procurement.",
    closing: "Prepare commercial documents that are clear, complete and deliverable.",
    meta: "Tender writing, pricing models, procurement support and commercial contract administration for Australian businesses."
  },
  {
    slug: "governance-risk",
    title: "Governance, Risk & Compliance",
    shortTitle: "Governance & Risk",
    category: "Controls & accountability",
    hero: "Build governance that works in everyday operations.",
    intro: "Management systems, documentation and controls tailored to operational obligations and organisational risk.",
    summary: "Policies and procedures are most useful when they clarify decisions, responsibilities and evidence. We support the design and implementation of business governance systems, operational documentation, risk registers and practical oversight tools.",
    challenges: ["Policies and processes have not kept pace with the business", "Responsibilities and approvals are unclear", "A regulated operation needs stronger document controls", "Management wants better visibility of risks and corrective actions"],
    capabilities: ["Governance and operational policy frameworks", "Risk assessment tools and registers", "Compliance documentation and recordkeeping processes", "WHS and incident-management systems", "Management controls and reporting frameworks", "Operational readiness and documentation-gap reviews"],
    deliverables: ["Policy and procedure suites", "Risk and compliance registers", "Management control matrices", "Implementation and review schedules"],
    idealFor: "SMEs, regulated service providers and organisations formalising their governance arrangements.",
    closing: "Translate obligations and risks into clear operating responsibilities.",
    meta: "Business governance, policy frameworks, risk registers, operational compliance documentation and management controls."
  },
  {
    slug: "hr-recruitment",
    title: "Human Resources & Recruitment",
    shortTitle: "HR & Recruitment",
    category: "People & workforce",
    hero: "Build the workforce structure behind better performance.",
    intro: "Human resources and recruitment support that connects people decisions with operational needs.",
    summary: "We help businesses plan their workforce, clarify roles and strengthen the processes used to recruit, onboard and manage staff. Recruitment services are also supported through the dedicated RBP Recruitment website.",
    challenges: ["The business needs additional capability or new roles", "Position descriptions and responsibilities are unclear", "Recruitment and onboarding need a more consistent process", "Performance reviews and people-management systems are underdeveloped"],
    capabilities: ["Workforce planning and organisational design", "Position descriptions and recruitment documentation", "Recruitment coordination and candidate processes", "Onboarding and induction frameworks", "Performance reviews and management templates", "HR policies and people-process development"],
    deliverables: ["Workforce and recruitment plans", "Position descriptions and role scorecards", "Onboarding and performance templates", "Employment-process documentation"],
    idealFor: "Owner-managed businesses, growing teams and organisations navigating workforce change.",
    closing: "Develop a workforce approach aligned with your operating priorities.",
    meta: "HR support, workforce planning, recruitment coordination, position design and people-management systems for SMEs.",
    external: {
      label: "Visit RBP Recruitment",
      url: "https://recruitment.remotebusinesspartner.com.au/",
      description: "Dedicated recruitment services and employer enquiries."
    }
  },
  {
    slug: "property-facilities",
    title: "Property & Facilities Services",
    shortTitle: "Property & Facilities",
    category: "Property operations",
    hero: "Coordinated property operations, with commercial oversight.",
    intro: "Building, facilities and commercial property support for owners, managers and project stakeholders.",
    summary: "RBP assists with the operational and commercial management of built assets, from maintenance planning and contractor coordination to commercial lease administration and client-side project support. Residential inspection services are available through ProInspect.",
    challenges: ["A property requires structured maintenance and contractor oversight", "Commercial lease administration is becoming difficult to coordinate", "Building operations need clearer reporting and records", "An owner needs support with construction quotes, variations or delivery"],
    capabilities: ["Building and facilities operations support", "Maintenance, contractor and works coordination", "Commercial property and lease administration", "Procurement and asset-related reporting", "Client-side construction contract coordination", "Property condition, routine and exit inspection services through ProInspect"],
    deliverables: ["Maintenance and contractor registers", "Building and property management reports", "Commercial lease and critical-date trackers", "Project cost and variation assessments"],
    idealFor: "Commercial property owners, strata stakeholders, landlords, building managers and property agencies.",
    closing: "Keep operational responsibilities and commercial decisions connected.",
    meta: "Building and facilities management, commercial property operations, lease administration and property inspection services.",
    external: {
      label: "Explore ProInspect",
      url: "https://proinspect.systems/",
      description: "Specialist property condition reports, routine and exit inspections."
    }
  }
];

export const primaryServices = services.slice(0, 3);

export type Project = {
  number: string;
  category: string;
  title: string;
  context: string;
  engagement: string;
  output: string;
  status?: string;
  serviceSlugs: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    category: "Transactions / Commercial risk",
    title: "Independent acquisition review",
    context: "Following a manufacturing business acquisition, questions arose around seller disclosures, transaction adjustments and pre-completion liabilities.",
    engagement: "Commercial review of transaction records, accounting evidence, operational obligations and matters requiring specialist follow-up.",
    output: "An evidence-based due diligence report, issue classifications and recommendations to support directors and appointed professional advisers.",
    serviceSlugs: ["due-diligence", "commercial-advisory"]
  },
  {
    number: "02",
    category: "Financial analysis / Strategy",
    title: "Business valuation for an allied-health provider",
    context: "An operating practice required a structured, indicative assessment of business value and the factors influencing future sale or investment readiness.",
    engagement: "Review of financial sustainability, market position, operating systems, growth prospects and material risk.",
    output: "An indicative business valuation report supported by assessment criteria, documented assumptions and commercial improvement priorities.",
    serviceSlugs: ["financial-analysis", "commercial-advisory"]
  },
  {
    number: "03",
    category: "Procurement / Tendering",
    title: "Tendering and commercial response framework",
    context: "A service business needed a structured method for preparing competitive tender responses and transparent contract pricing.",
    engagement: "Development of tender structures covering service methodology, staffing, commercial offers, safety, governance and supporting cost schedules.",
    output: "A reusable tender document framework and pricing tools to support future submissions.",
    serviceSlugs: ["tenders-procurement", "financial-analysis"]
  },
  {
    number: "04",
    category: "Systems / Project controls",
    title: "Integrated project costing system",
    context: "A project-based business needed clearer visibility over labour, materials, margins, payment milestones and cash-flow commitments.",
    engagement: "Design of linked costing, forecasting, reporting, scenario-planning and validation tools.",
    output: "An integrated spreadsheet-based costing model with dashboard outputs and a structured user guide.",
    serviceSlugs: ["business-improvement", "financial-analysis"]
  }
];

export const audiences = [
  {
    title: "Business owners & leadership teams",
    description: "For owners who need independent commercial thinking, management capacity or a structured way to move priorities forward.",
    needs: "Commercial advice / outsourced management / business improvement"
  },
  {
    title: "Business purchasers & investors",
    description: "For stakeholders evaluating acquisitions, commercial exposure, value, operating risk or transaction options.",
    needs: "Due diligence / financial analysis / feasibility"
  },
  {
    title: "Manufacturing, construction & service businesses",
    description: "For businesses balancing people, projects, cost control, tendering and operational change.",
    needs: "Tenders / project costing / operations / procurement"
  },
  {
    title: "Professional & allied-health organisations",
    description: "For service providers needing business reviews, financial insight, workforce systems and better governance.",
    needs: "Valuations / planning / HR / governance"
  },
  {
    title: "Property owners & building stakeholders",
    description: "For owners and managers needing coordination across tenants, maintenance, contractors and property operations.",
    needs: "Facilities / lease administration / inspections"
  },
  {
    title: "Regulated & growing organisations",
    description: "For organisations formalising operating controls, policies, risk oversight and management documentation.",
    needs: "Governance / management systems / change"
  }
];

export const navigation = [
  { title: "Who We Help", href: "/who-we-help" },
  { title: "Our Work", href: "/our-work" },
  { title: "How We Work", href: "/how-we-work" },
  { title: "About RBP", href: "/about" }
];

export const siteUrl = "https://remotebusinesspartner.com.au";
export const contactEmail = "info@remotebusinesspartner.com.au";
