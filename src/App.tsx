import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, ArrowDown, BarChart3, BriefcaseBusiness,
  Building2, Check, CheckCircle2, ChevronDown, ChevronRight,
  FileCheck2, FileSearch, Mail, MapPin, Menu, Scale, Settings2,
  ShieldCheck, TrendingUp, Users, X
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  audiences, contactEmail, navigation, primaryServices, projects,
  services, siteUrl
} from './data/site';
import type { Service } from './data/site';

const serviceIcons: LucideIcon[] = [
  BarChart3, FileSearch, BriefcaseBusiness, Settings2, TrendingUp,
  FileCheck2, ShieldCheck, Users, Building2
];

const shortStatement = 'Independent commercial advice, outsourced business management and practical project delivery for Australian businesses.';

function Metadata({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    const fullTitle = title === 'Home'
      ? 'Remote Business Partner | Commercial Advisory & Business Management'
      : title + ' | Remote Business Partner';
    document.title = fullTitle;
    function updateMeta(key: string, value: string, attribute = 'name') {
      let tag = document.querySelector<HTMLMetaElement>('meta[' + attribute + '="' + key + '"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.content = value;
    }
    updateMeta('description', description);
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:type', 'website', 'property');
    updateMeta('og:url', siteUrl + window.location.pathname, 'property');
    updateMeta('twitter:card', 'summary');
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = siteUrl + window.location.pathname;
  }, [title, description]);
  return null;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const anchor = document.getElementById(hash.substring(1));
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);
  return null;
}

function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className={'brand' + (inverted ? ' brand-light' : '')} aria-label="Remote Business Partner — Home">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark-line brand-mark-line-one" />
        <span className="brand-mark-line brand-mark-line-two" />
        <span className="brand-mark-line brand-mark-line-three" />
      </span>
      <span className="brand-type"><strong>REMOTE</strong><span>BUSINESS PARTNER</span></span>
    </Link>
  );
}

function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);
  return (
    <>
      <div className="utility-bar">
        <div className="container utility-content">
          <span>COMMERCIAL ADVISORY · BUSINESS MANAGEMENT</span>
          <span className="utility-location">PERTH, WESTERN AUSTRALIA <span className="utility-dot" /> AUSTRALIA-WIDE</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <details className="services-menu" key={location.pathname}>
              <summary className={location.pathname.startsWith('/services') ? 'nav-link nav-link-active' : 'nav-link'}>
                Services <ChevronDown size={14} strokeWidth={1.8} />
              </summary>
              <div className="services-dropdown">
                <div className="dropdown-heading">OUR CAPABILITIES</div>
                <Link to="/services" className="dropdown-overview">Explore all services <ArrowUpRight size={15} /></Link>
                <div className="dropdown-services">
                  {services.map((service) => (
                    <Link key={service.slug} to={'/services/' + service.slug} className="dropdown-service">
                      {service.shortTitle} <ArrowUpRight size={13} />
                    </Link>
                  ))}
                </div>
              </div>
            </details>
            {navigation.map((item) => (
              <NavLink key={item.href} to={item.href} className={({ isActive }) => 'nav-link' + (isActive ? ' nav-link-active' : '')}>
                {item.title}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <Link to="/contact" className="button button-dark button-small">Let's talk <ArrowUpRight size={16} /></Link>
            <button className="mobile-trigger" type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            <Link to="/services" className="mobile-nav-primary">All services <ArrowUpRight size={16} /></Link>
            <div className="mobile-service-links">
              {services.map((service) => <Link key={service.slug} to={'/services/' + service.slug}>{service.shortTitle}</Link>)}
            </div>
            {navigation.map((item) => <Link key={item.href} to={item.href} className="mobile-nav-primary">{item.title}<ChevronRight size={16} /></Link>)}
            <Link to="/contact" className="mobile-nav-contact">Discuss your requirements <ArrowUpRight size={16} /></Link>
          </nav>
        )}
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-upper">
          <div className="footer-brand-column">
            <Brand inverted />
            <p>Commercial intelligence and practical management support for businesses making important decisions.</p>
            <a href={'mailto:' + contactEmail} className="footer-email">{contactEmail} <ArrowUpRight size={15} /></a>
          </div>
          <div className="footer-links-column">
            <h3>Our Services</h3>
            {services.slice(0, 6).map((service) => <Link key={service.slug} to={'/services/' + service.slug}>{service.shortTitle}</Link>)}
          </div>
          <div className="footer-links-column">
            <h3>Company</h3>
            <Link to="/who-we-help">Who We Help</Link>
            <Link to="/our-work">Our Work</Link>
            <Link to="/how-we-work">How We Work</Link>
            <Link to="/about">About RBP</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-links-column">
            <h3>Specialist Services</h3>
            <Link to="/services/hr-recruitment">Human Resources & Recruitment</Link>
            <a href="https://recruitment.remotebusinesspartner.com.au/" target="_blank" rel="noopener noreferrer">RBP Recruitment <ArrowUpRight size={13} /></a>
            <Link to="/services/property-facilities">Property & Facilities</Link>
            <a href="https://proinspect.systems/" target="_blank" rel="noopener noreferrer">ProInspect <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Remote Business Partner. All rights reserved.</span>
          <div className="footer-legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
          <span>Based in Perth. Supporting businesses across Australia.</span>
        </div>
      </div>
    </footer>
  );
}

function ArrowText({ children }: { children: React.ReactNode }) {
  return <span className="arrow-text">{children} <ArrowUpRight size={17} /></span>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow"><span className="eyebrow-rule" />{children}</span>;
}

function SectionHeading({ eyebrow, title, description, link, linkText }: {
  eyebrow: string; title: React.ReactNode; description?: string; link?: string; linkText?: string
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-main">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {link && <Link className="section-heading-link" to={link}><ArrowText>{linkText || 'Learn more'}</ArrowText></Link>}
    </div>
  );
}

function PillarIcon({ index }: { index: number }) {
  const icons = [BarChart3, BriefcaseBusiness, CheckCircle2];
  const Icon = icons[index] || BarChart3;
  return <span className="pillar-icon"><Icon size={28} strokeWidth={1.5} /></span>;
}

function ServiceCard({ service, index = 0, featured = false }: { service: Service; index?: number; featured?: boolean; key?: string }) {
  const serviceIndex = services.findIndex((item) => item.slug === service.slug);
  const Icon = serviceIcons[serviceIndex] || BriefcaseBusiness;
  return (
    <Link to={'/services/' + service.slug} className={'service-card' + (featured ? ' service-card-featured' : '')}>
      <div className="service-card-top">
        <span className="service-card-icon"><Icon size={26} strokeWidth={1.5} /></span>
        <span className="service-card-number">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <span className="service-card-category">{service.category}</span>
      <h3>{service.shortTitle}</h3>
      <p>{service.intro}</p>
      <span className="service-card-bottom"><span>Explore service</span><ArrowUpRight size={21} /></span>
    </Link>
  );
}

function ActionBand({ eyebrow = 'LET’S GET STARTED', title = 'Let’s put your next decision on solid ground.', description = 'Tell us what you are working through. We can discuss the requirements, scope and most useful next steps.' }: {
  eyebrow?: string; title?: string; description?: string
}) {
  return (
    <section className="action-band">
      <div className="container action-band-inner">
        <div>
          <span className="dark-eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link to="/contact" className="button button-copper">Discuss your requirements <ArrowUpRight size={18} /></Link>
      </div>
    </section>
  );
}

function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <Link to="/">Home</Link>
      {items.map((item, index) => <React.Fragment key={index}><ChevronRight size={13} />{item.href ? <Link to={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</React.Fragment>)}
    </nav>
  );
}

function InteriorHero({ eyebrow, title, intro, crumbs, aside }: {
  eyebrow: string; title: string; intro: string; crumbs: { label: string; href?: string }[]; aside?: React.ReactNode
}) {
  return (
    <section className="interior-hero">
      <div className="container">
        <Breadcrumbs items={crumbs} />
        <div className="interior-hero-content">
          <div className="interior-hero-copy">
            <SectionLabel>{eyebrow}</SectionLabel>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
          <div className="interior-hero-aside" aria-hidden="true">{aside || <div className="page-graphic"><span className="page-graphic-circle" /><span className="page-graphic-line one" /><span className="page-graphic-line two" /><span className="page-graphic-line three" /><span className="page-graphic-dot" /></div>}</div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Metadata title="Home" description={shortStatement} />
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <SectionLabel>INDEPENDENT THINKING. PRACTICAL DELIVERY.</SectionLabel>
            <h1>Commercial clarity.<br /><em>Operational confidence.</em></h1>
            <p>Independent commercial advice, outsourced management capability and specialist support for businesses navigating important decisions and operational challenges.</p>
            <div className="hero-actions">
              <Link to="/services" className="button button-dark">Explore our services <ArrowUpRight size={18} /></Link>
              <Link to="/contact" className="button button-quiet">Discuss your needs <ArrowRight size={18} /></Link>
            </div>
            <div className="hero-proofs">
              <span><Check size={15} /> Commercial perspective</span>
              <span><Check size={15} /> Hands-on support</span>
              <span><Check size={15} /> Flexible engagements</span>
            </div>
          </div>
          <div className="hero-art" aria-label="RBP approach: Assess, Advise, Deliver">
            <div className="hero-art-grid" />
            <div className="hero-art-heading"><span>THE RBP APPROACH</span><span>01 — 03</span></div>
            <div className="hero-art-orbit">
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
              <span className="orbit-center"><span className="orbit-center-line" /><span className="orbit-center-line small" /></span>
            </div>
            <div className="hero-art-steps">
              <div><span>01</span><strong>Assess</strong><small>Understand the position.</small></div>
              <div><span>02</span><strong>Advise</strong><small>Define the options.</small></div>
              <div><span>03</span><strong>Deliver</strong><small>Move priorities forward.</small></div>
            </div>
            <div className="hero-art-footnote">COMMERCIAL INTELLIGENCE / OPERATIONAL DELIVERY</div>
          </div>
        </div>
        <div className="container hero-strip">
          <span>PERTH-BASED · AUSTRALIA-WIDE</span>
          <span>COMMERCIAL ADVISORY <i /> BUSINESS MANAGEMENT <i /> SPECIALIST SERVICES</span>
          <Link to="/how-we-work">OUR APPROACH <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE DO" title={<>An experienced perspective.<br /><span className="serif-accent">A practical way forward.</span></>} description="RBP works across the intersection of commercial analysis, management capability and project delivery. Each engagement is shaped around the real decision or operational challenge." />
          <div className="pillar-grid">
            {[
              { title: 'Advise', content: 'Commercial assessments, due diligence and independent decision support that bring critical information into focus.', link: '/services/commercial-advisory' },
              { title: 'Manage', content: 'Flexible management support to coordinate priorities, strengthen oversight and relieve pressure on business owners.', link: '/services/business-management' },
              { title: 'Deliver', content: 'Practical implementation across processes, tenders, management systems, governance and operational improvement.', link: '/services/business-improvement' }
            ].map((pillar, index) => (
              <Link to={pillar.link} key={pillar.title} className="pillar-card">
                <PillarIcon index={index} />
                <span className="pillar-number">0{index + 1} / CORE CAPABILITY</span>
                <h3>{pillar.title}<span className="pillar-arrow"><ArrowUpRight size={21} /></span></h3>
                <p>{pillar.content}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="container problem-grid">
          <div>
            <SectionLabel>WHEN COMPLEXITY CREATES FRICTION</SectionLabel>
            <h2>Some business problems need more than another recommendation.</h2>
          </div>
          <div className="problem-copy">
            <p>Decisions, people, contracts, processes and financial realities are rarely separate. The right support connects the analysis to what happens next.</p>
            <div className="problem-list">
              {['Complex commercial decisions', 'Overextended management capacity', 'Transactions and operational risk', 'Systems that have not kept pace with growth'].map((item) => <div key={item}><CheckCircle2 size={19} /><span>{item}</span></div>)}
            </div>
            <Link to="/who-we-help" className="text-link text-link-light"><ArrowText>See who we help</ArrowText></Link>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <SectionHeading eyebrow="OUR SERVICES" title={<>Focused expertise for<br /><span className="serif-accent">business realities.</span></>} description="From commercial reviews to operational management, our capabilities support the full journey from assessment to implementation." link="/services" linkText="View all nine services" />
          <div className="service-grid">
            {services.slice(0, 6).map((service, index) => <ServiceCard key={service.slug} service={service} index={index} featured={index < 3} />)}
          </div>
          <div className="services-more"><Link to="/services">Explore our complete service offering <ArrowRight size={19} /></Link></div>
        </div>
      </section>

      <section className="section work-section">
        <div className="container">
          <SectionHeading eyebrow="EXPERIENCE IN PRACTICE" title={<>The work behind<br /><span className="serif-accent">our capabilities.</span></>} description="Selected, anonymised examples of commercial and operational assignments. These illustrate the types of work and documents undertaken, without disclosing client-sensitive details." link="/our-work" linkText="View selected work" />
          <div className="featured-work-grid">
            {projects.slice(0, 3).map((project) => <article className="work-card" key={project.number}>
              <div className="work-card-top"><span>{project.category}</span><span>{project.number}</span></div>
              <h3>{project.title}</h3>
              <p>{project.context}</p>
              <div className="work-card-rule" />
              <p className="work-card-output"><strong>Work product</strong>{project.output}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container approach-grid">
          <div className="approach-heading">
            <SectionLabel>HOW WE WORK</SectionLabel>
            <h2>Structured where it matters.<br /><em>Flexible where it counts.</em></h2>
            <p>Clear scope, sensible priorities and open communication underpin every engagement. We adapt the work to the business, rather than asking the business to fit a template.</p>
            <Link to="/how-we-work" className="text-link"><ArrowText>Explore our engagement approach</ArrowText></Link>
          </div>
          <div className="approach-steps">
            {[
              ['01', 'Understand', 'Clarify the commercial or operational issue, objectives and available information.'],
              ['02', 'Assess', 'Examine relevant evidence, options, dependencies and priorities.'],
              ['03', 'Recommend', 'Set out practical actions, responsibilities and expected outcomes.'],
              ['04', 'Implement & review', 'Coordinate agreed delivery and report on progress where in scope.']
            ].map(([number, title, text]) => <div className="approach-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={17} /></div>)}
          </div>
        </div>
      </section>

      <section className="section specialist-section">
        <div className="container">
          <SectionHeading eyebrow="SPECIALIST SERVICES" title={<>Connected expertise.<br /><span className="serif-accent">Dedicated service pathways.</span></>} description="Alongside our core advisory and management offering, specialist services address workforce and property-related operational needs." />
          <div className="specialist-grid">
            <div className="specialist-card">
              <div className="specialist-head"><span className="specialist-icon"><Users size={26} /></span><span>RBP SERVICE AREA</span></div>
              <h3>HR & Recruitment</h3><p>Workforce planning, recruitment coordination, role design, onboarding and practical people-management systems.</p>
              <Link to="/services/hr-recruitment" className="text-link"><ArrowText>Explore HR services</ArrowText></Link>
              <a href="https://recruitment.remotebusinesspartner.com.au/" target="_blank" rel="noopener noreferrer" className="specialist-external">Visit RBP Recruitment <ArrowUpRight size={15} /></a>
            </div>
            <div className="specialist-card">
              <div className="specialist-head"><span className="specialist-icon"><Building2 size={26} /></span><span>SPECIALIST PROPERTY BRAND</span></div>
              <h3>Property & ProInspect</h3><p>Building and facilities oversight, commercial property administration, contractor coordination and specialist inspection services.</p>
              <Link to="/services/property-facilities" className="text-link"><ArrowText>Explore property services</ArrowText></Link>
              <a href="https://proinspect.systems/" target="_blank" rel="noopener noreferrer" className="specialist-external">Visit ProInspect <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>
      <ActionBand />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Metadata title="Professional Services" description="Explore RBP's nine professional service areas including commercial advisory, due diligence, business management, HR, governance and property." />
      <InteriorHero eyebrow="OUR EXPERTISE" title="Professional services" intro="Commercial insight, management capability and practical delivery. Explore the services available through Remote Business Partner." crumbs={[{ label: 'Services' }]} />
      <section className="section">
        <div className="container">
          <div className="narrow-intro"><SectionLabel>COMPLETE SERVICE OFFERING</SectionLabel><h2>The right capability for the challenge in front of you.</h2><p>Engagements may focus on one defined piece of work or combine complementary capabilities across advisory, management and delivery.</p></div>
          <div className="service-grid service-grid-all">
            {services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} featured={index < 3} />)}
          </div>
        </div>
      </section>
      <section className="section alt-section">
        <div className="container engagement-mini">
          <div><SectionLabel>ENGAGEMENT OPTIONS</SectionLabel><h2>Built around your requirements.</h2></div>
          <div className="engagement-mini-grid">
            {['Defined-scope advisory', 'Ongoing management support', 'Project and implementation support'].map((model, index) => <div key={model}><span>0{index + 1}</span><h3>{model}</h3><p>{['A commercial assessment, written report or discrete problem to investigate.', 'Flexible support with operational priorities, oversight and implementation.', 'An agreed program of work with deliverables, milestones and reporting.'][index]}</p></div>)}
          </div>
        </div>
      </section>
      <ActionBand title="Not sure which service fits?" description="Share the commercial challenge or operational requirement. We can discuss a sensible way to scope the engagement." />
    </>
  );
}

function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const related = services.filter((s) => s.slug !== service.slug && (s.category === service.category || s.slug === 'commercial-advisory' || s.slug === 'business-management')).slice(0, 3);
  return (
    <>
      <Metadata title={service.title} description={service.meta} />
      <InteriorHero eyebrow={service.category.toUpperCase()} title={service.title} intro={service.intro} crumbs={[{ label: 'Services', href: '/services' }, { label: service.shortTitle }]} />
      <section className="section service-overview-section">
        <div className="container service-overview-grid">
          <div><SectionLabel>THE SERVICE</SectionLabel><h2>{service.hero}</h2><p className="lead-paragraph">{service.summary}</p><Link to="/contact" className="button button-dark">Discuss this service <ArrowUpRight size={17} /></Link></div>
          <aside className="challenge-panel"><span className="panel-label">THIS MAY HELP WHEN</span>{service.challenges.map((item) => <div className="challenge-item" key={item}><Check size={17} /><span>{item}</span></div>)}</aside>
        </div>
      </section>
      <section className="section alt-section">
        <div className="container">
          <SectionHeading eyebrow="SERVICE CAPABILITIES" title={<>Areas where we<br /><span className="serif-accent">can support you.</span></>} description="The precise scope is agreed for each engagement and may include a combination of the following activities." />
          <div className="capability-grid">
            {service.capabilities.map((item, index) => <div className="capability-item" key={item}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item}</h3><ArrowUpRight size={17} /></div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container outputs-grid">
          <div><SectionLabel>WHAT YOU CAN EXPECT</SectionLabel><h2>Clearly defined work.<br /><span className="serif-accent">Useful deliverables.</span></h2><p>Outputs depend on the agreed scope. Our focus is on clear documentation and recommendations that support real business decisions.</p></div>
          <div className="outputs-list">
            {service.deliverables.map((item) => <div key={item}><CheckCircle2 size={21} /><span>{item}</span></div>)}
            <div className="ideal-for"><strong>Suitable for</strong><p>{service.idealFor}</p></div>
          </div>
        </div>
      </section>
      {service.external && <section className="external-service-band"><div className="container external-service-inner"><div><span className="dark-eyebrow">SPECIALIST SERVICE WEBSITE</span><h2>{service.external.description}</h2></div><a href={service.external.url} target="_blank" rel="noopener noreferrer" className="button button-copper">{service.external.label} <ArrowUpRight size={18} /></a></div></section>}
      <section className="section related-section"><div className="container"><SectionHeading eyebrow="RELATED SERVICES" title="Connected capabilities." /><div className="related-links">{related.map((item) => <Link key={item.slug} to={'/services/' + item.slug}>{item.shortTitle}<ArrowUpRight size={18} /></Link>)}</div></div></section>
      <ActionBand title={service.closing} description="Let us know what you need to assess, improve or deliver. We can discuss scope, timing and a practical approach." />
    </>
  );
}

function WhoWeHelpPage() {
  return (
    <>
      <Metadata title="Who We Help" description="Remote Business Partner supports business owners, investors, professional services, manufacturing, construction, property and regulated organisations." />
      <InteriorHero eyebrow="WHO WE WORK WITH" title="Different businesses. Common commercial challenges." intro="Our services are shaped around business needs rather than a single sector or company size. We work with owners, leaders and other decision-makers who need clarity and practical support." crumbs={[{ label: 'Who We Help' }]} />
      <section className="section"><div className="container"><SectionHeading eyebrow="CLIENTS & INDUSTRIES" title={<>Built around the<br /><span className="serif-accent">business challenge.</span></>} /><div className="audience-grid">
        {audiences.map((audience, index) => <div className="audience-card" key={audience.title}><div className="audience-card-number">{String(index + 1).padStart(2, '0')}</div><h3>{audience.title}</h3><p>{audience.description}</p><div className="audience-needs">{audience.needs}</div></div>)}
      </div></div></section>
      <section className="section alt-section"><div className="container question-grid"><div><SectionLabel>START WITH THE PROBLEM</SectionLabel><h2>You do not need to know the service name before getting in touch.</h2></div><div><p>Sometimes the real issue becomes clear only after the first conversation. A commercial review may reveal a management issue, while an operational challenge may require better financial information or contract clarity.</p><Link to="/services" className="text-link"><ArrowText>Browse our capabilities</ArrowText></Link></div></div></section>
      <ActionBand />
    </>
  );
}

function OurWorkPage() {
  return (
    <>
      <Metadata title="Our Work" description="Selected anonymised examples of Remote Business Partner's due diligence, commercial valuation, tendering and project costing work." />
      <InteriorHero eyebrow="EXPERIENCE IN PRACTICE" title="Relevant work. Tangible work products." intro="A selection of commercial and operational assignments illustrating the breadth of our work. Client details are anonymised, and descriptions focus on the nature of the engagement rather than unverified outcomes." crumbs={[{ label: 'Our Work' }]} />
      <section className="section"><div className="container"><SectionHeading eyebrow="SELECTED ENGAGEMENTS" title={<>Examples of the work<br /><span className="serif-accent">we undertake.</span></>} /><div className="work-detail-list">
        {projects.map((project) => <article className="work-detail" key={project.number}>
          <div className="work-detail-aside"><span>{project.number}</span><span>{project.category}</span></div>
          <div className="work-detail-main"><h2>{project.title}</h2><div className="work-detail-parts"><div><h3>Context</h3><p>{project.context}</p></div><div><h3>Scope of work</h3><p>{project.engagement}</p></div><div><h3>Work product</h3><p>{project.output}</p></div></div><div className="work-tags">{project.serviceSlugs.map((slug) => { const s = services.find((item) => item.slug === slug); return s ? <Link key={slug} to={'/services/' + slug}>{s.shortTitle} <ArrowUpRight size={13} /></Link> : null; })}</div></div>
        </article>)}
      </div><p className="case-confidentiality">Engagement examples are illustrative summaries prepared from project materials. Specific results and client identities are not published without appropriate verification and permission.</p></div></section>
      <ActionBand eyebrow="WORK WITH RBP" title="Your circumstances deserve their own approach." />
    </>
  );
}

const steps = [
  { n: '01', title: 'Discovery & scope', text: 'Clarify the objectives, commercial context, decision-makers, required information and boundaries of the engagement.' },
  { n: '02', title: 'Review & assessment', text: 'Evaluate available records, current processes, risks, dependencies and opportunities relevant to the agreed work.' },
  { n: '03', title: 'Recommendations & priorities', text: 'Document the options, proposed actions, delivery sequence and responsibilities in a format the business can use.' },
  { n: '04', title: 'Delivery & coordination', text: 'Where agreed, coordinate implementation, manage the work program and keep relevant stakeholders informed.' },
  { n: '05', title: 'Review & next steps', text: 'Reassess progress against the agreed objectives and identify any further support required.' }
];

function HowWeWorkPage() {
  return (
    <>
      <Metadata title="How We Work" description="Explore RBP's structured approach to commercial advisory, project engagements and flexible ongoing business management support." />
      <InteriorHero eyebrow="OUR APPROACH" title="Clear thinking. Structured delivery." intro="An effective engagement begins with understanding what the business needs to achieve. We define the work, establish priorities and keep the focus on usable outcomes." crumbs={[{ label: 'How We Work' }]} />
      <section className="section"><div className="container"><SectionHeading eyebrow="ENGAGEMENT PROCESS" title={<>From first conversation<br /><span className="serif-accent">to practical next steps.</span></>} /><div className="process-list">{steps.map((step) => <div className="process-row" key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>
      <section className="section alt-section"><div className="container"><SectionHeading eyebrow="WAYS TO ENGAGE" title="The right level of support." description="The engagement structure depends on whether you need a specific answer, ongoing capacity or a defined program of improvement." /><div className="model-grid">
        {[{ n: '01', title: 'Advisory assignment', intro: 'A defined piece of commercial analysis or decision support.', points: ['Agreed questions and information requirements', 'Written findings and recommendations', 'Defined scope and deliverables'] }, { n: '02', title: 'Ongoing management support', intro: 'An extension of your management capacity for a defined period.', points: ['Regular prioritisation and oversight', 'Operational coordination and reporting', 'Flexible retainer or scoped arrangement'] }, { n: '03', title: 'Project delivery', intro: 'A practical work program with clear actions and milestones.', points: ['Project plan and responsibilities', 'Work products and progress reporting', 'Implementation support and review'] }].map((model) => <div key={model.n} className="model-card"><span>{model.n} / ENGAGEMENT MODEL</span><h3>{model.title}</h3><p>{model.intro}</p><div>{model.points.map((point) => <p key={point}><Check size={17} />{point}</p>)}</div></div>)}
      </div></div></section>
      <ActionBand />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Metadata title="About Remote Business Partner" description="Learn about Remote Business Partner's commercial advisory, practical business management approach and experience across Australian business operations." />
      <InteriorHero eyebrow="ABOUT REMOTE BUSINESS PARTNER" title="Business-focused by design." intro="Remote Business Partner provides independent commercial advice and flexible business management support to organisations that need sound judgement, operational structure and practical delivery." crumbs={[{ label: 'About RBP' }]} />
      <section className="section about-statement"><div className="container about-statement-grid"><div><SectionLabel>OUR POSITION</SectionLabel><h2>We look at the business as a whole.</h2></div><div><p className="lead-paragraph">Commercial decisions do not happen in isolation. Finance, contracts, people, operating systems, risk and day-to-day delivery all influence the result.</p><p>Our approach brings those considerations together. We help clients understand the position, establish realistic priorities and progress agreed work with the necessary attention to detail.</p><p>Engagements are tailored to the assignment, from independent reviews to ongoing management and specialist implementation support.</p></div></div></section>
      <section className="section alt-section"><div className="container"><SectionHeading eyebrow="WHAT INFORMS OUR WORK" title={<>Commercial judgement.<br /><span className="serif-accent">Operational experience.</span></>} /><div className="value-grid">
        {[['01', 'Independent perspective', 'Structured assessment of evidence, options and material commercial considerations.'],['02', 'Management experience', 'Experience in multi-site operations, workforce leadership, budgets, procurement and business improvement.'],['03', 'Practical work products', 'Clear reports, management systems, models and documentation designed for use after the engagement.'],['04', 'Flexible engagement scope', 'Focused project assignments and ongoing support aligned with the organisation’s priorities and resources.']].map(([n, title, text]) => <div key={n} className="value-card"><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}
      </div></div></section>
      <section className="section"><div className="container about-experience"><div><SectionLabel>EXPERIENCE</SectionLabel><h2>Built on real business responsibilities.</h2></div><div><p>The business's advisory approach draws on senior operational management experience and recent client work across manufacturing, professional services, property, facilities, construction projects, business acquisitions and regulated operations.</p><p>That background connects commercial analysis with the reality of managing people, costs, deadlines, suppliers and operational risk.</p><Link to="/our-work" className="text-link"><ArrowText>Explore selected work</ArrowText></Link></div></div></section>
      <ActionBand />
    </>
  );
}

type ContactData = { name: string; company: string; email: string; service: string; message: string };

function ContactPage() {
  const [data, setData] = useState<ContactData>({ name: '', company: '', email: '', service: '', message: '' });
  function setField(field: keyof ContactData, value: string) { setData((current) => ({ ...current, [field]: value })); }
  function prepareEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = 'Website enquiry — ' + (data.service || 'Professional services');
    const body = [
      'Remote Business Partner enquiry',
      '',
      'Name: ' + data.name,
      'Company: ' + (data.company || 'Not provided'),
      'Email: ' + data.email,
      'Service of interest: ' + (data.service || 'Not specified'),
      '',
      'Requirements:',
      data.message
    ].join('\n');
    window.location.href = 'mailto:' + contactEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }
  return (
    <>
      <Metadata title="Contact" description="Contact Remote Business Partner to discuss a commercial advisory, due diligence, business management or specialist service engagement." />
      <InteriorHero eyebrow="CONTACT RBP" title="Let's discuss what your business needs." intro="Whether you have a defined project or a broader operational challenge, an initial discussion can help establish the right scope and next steps." crumbs={[{ label: 'Contact' }]} />
      <section className="section contact-section"><div className="container contact-grid">
        <div className="contact-info">
          <SectionLabel>START A CONVERSATION</SectionLabel>
          <h2>Tell us about the challenge.</h2>
          <p>Provide a brief description of your requirements, the service area and any relevant timing. We can review the enquiry and discuss whether the work is within our scope.</p>
          <div className="contact-info-item"><Mail size={21} /><div><span>EMAIL ENQUIRIES</span><a href={'mailto:' + contactEmail}>{contactEmail}</a></div></div>
          <div className="contact-info-item"><MapPin size={21} /><div><span>LOCATION</span><strong>Perth, Western Australia</strong><small>Supporting clients locally and remotely across Australia.</small></div></div>
          <div className="contact-note"><strong>Specialist enquiries?</strong><p>For dedicated recruitment services, visit <a href="https://recruitment.remotebusinesspartner.com.au/" target="_blank" rel="noopener noreferrer">RBP Recruitment</a>. For property inspections, visit <a href="https://proinspect.systems/" target="_blank" rel="noopener noreferrer">ProInspect</a>.</p></div>
        </div>
        <div className="contact-form-wrap">
          <h2>Enquiry details</h2><p>Complete the details below to prepare an email in your usual email application.</p>
          <form onSubmit={prepareEmail} className="contact-form">
            <div className="form-row"><label>Your name <span>*</span><input required maxLength={100} name="name" autoComplete="name" placeholder="Full name" value={data.name} onChange={(event) => setField('name', event.target.value)} /></label><label>Business / organisation<input maxLength={120} name="company" autoComplete="organization" placeholder="Company name (optional)" value={data.company} onChange={(event) => setField('company', event.target.value)} /></label></div>
            <label>Email address <span>*</span><input type="email" required maxLength={200} name="email" autoComplete="email" placeholder="you@company.com.au" value={data.email} onChange={(event) => setField('email', event.target.value)} /></label>
            <label>Service of interest<select name="service" value={data.service} onChange={(event) => setField('service', event.target.value)}><option value="">Please select (optional)</option>{services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}<option value="General enquiry">General enquiry</option></select></label>
            <label>Tell us what you need <span>*</span><textarea required maxLength={3000} name="message" rows={6} placeholder="Briefly describe the issue, project or support you're looking for." value={data.message} onChange={(event) => setField('message', event.target.value)} /></label>
            <button className="button button-dark form-submit" type="submit">Prepare enquiry email <ArrowUpRight size={18} /></button>
            <p className="form-clarity"><ShieldCheck size={16} /> This form opens a draft in your email application. It does not submit data to a website server. Your enquiry is sent only when you send the email.</p>
          </form>
        </div>
      </div></section>
    </>
  );
}

const legalPages: Record<string, { title: string; intro: string; sections: { title: string; content: string }[] }> = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'Information about how Remote Business Partner handles enquiries and personal information.',
    sections: [
      { title: 'Information provided to us', content: 'When you contact Remote Business Partner by email, you may provide your name, organisation, contact details and information about your enquiry. Please avoid sending highly sensitive information until appropriate arrangements have been established.' },
      { title: 'Website enquiry form', content: 'The website enquiry form prepares an email draft on your device. It does not transmit information to a website-managed database or store a copy of your submission. Your email provider handles the message when you choose to send it.' },
      { title: 'Use and disclosure', content: 'We use information provided in enquiries to respond, assess proposed work and communicate about requested services. Information may be shared with service providers or professional advisers where needed for the relevant engagement, subject to applicable obligations and arrangements.' },
      { title: 'Hosting and external websites', content: 'Our hosting and infrastructure providers may process technical data such as IP addresses and access logs in operating this website. Links to external services, including the recruitment and ProInspect websites, may have separate privacy practices.' },
      { title: 'Questions and access', content: 'For privacy enquiries, access requests or corrections, contact info@remotebusinesspartner.com.au. Information is handled in accordance with applicable Australian privacy requirements.' }
    ]
  },
  terms: {
    title: 'Website Terms of Use',
    intro: 'General conditions applying to access and use of this website.',
    sections: [
      { title: 'Information on this website', content: 'This website describes general services and capabilities. Content is provided for general information only and does not form an offer to undertake an engagement on specific terms.' },
      { title: 'Separate engagement terms', content: 'The nature, scope, deliverables, fees and responsibilities associated with professional services are determined in the relevant proposal, scope of works or written engagement agreement.' },
      { title: 'Use of content', content: 'Website text, graphics and other material must not be reproduced or represented as belonging to another business without permission, except where permitted by applicable law.' },
      { title: 'External links', content: 'Links to third-party or specialist-service websites are included for convenience. We do not control the content or availability of unrelated external websites.' },
      { title: 'Changes and enquiries', content: 'The website and these terms may be updated. For enquiries, contact info@remotebusinesspartner.com.au.' }
    ]
  },
  disclaimer: {
    title: 'Professional Services Disclaimer',
    intro: 'Important information about the nature and scope of material published by Remote Business Partner.',
    sections: [
      { title: 'General information only', content: 'The information on this website is general in nature and does not take account of individual business circumstances. Viewing the website or contacting us does not itself establish a client relationship.' },
      { title: 'Commercial advisory scope', content: 'RBP provides commercial, operational and management support within the scope of an agreed engagement. Commercial reviews, indicative valuations and financial models rely on the information, assumptions and evidence available for the assignment.' },
      { title: 'Regulated advice and specialist opinions', content: 'Website content and RBP service descriptions do not constitute legal advice, tax advice, an independent financial audit, financial-product advice or regulated professional certification. Where necessary, work may be coordinated with appropriately qualified external advisers.' },
      { title: 'Illustrative project descriptions', content: 'The selected work described on this website consists of anonymised summaries. It illustrates the types of assignments and work products undertaken and is not a promise of a particular financial or commercial outcome.' },
      { title: 'No guarantees', content: 'Any resulting engagement is governed by its agreed scope and terms. Future outcomes depend on client circumstances, available information, market conditions and factors outside RBP’s control.' }
    ]
  }
};

function LegalPage({ slug }: { slug: 'privacy' | 'terms' | 'disclaimer' }) {
  const page = legalPages[slug];
  return (
    <>
      <Metadata title={page.title} description={page.intro} />
      <InteriorHero eyebrow="WEBSITE INFORMATION" title={page.title} intro={page.intro} crumbs={[{ label: page.title }]} />
      <section className="section"><div className="container legal-layout">
        <div className="legal-side"><SectionLabel>INFORMATION</SectionLabel><p>This page concerns our website and is separate from the terms of any individual client engagement.</p></div>
        <div className="legal-content">{page.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.content}</p></section>)}<p className="legal-contact">Questions? <a href={'mailto:' + contactEmail}>{contactEmail}</a></p></div>
      </div></section>
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <Metadata title="Page Not Found" description="The requested Remote Business Partner page could not be found." />
      <section className="not-found container"><span>404 / PAGE NOT FOUND</span><h1>That page isn't here.</h1><p>The address may have changed. Find the right service or return to our homepage.</p><div><Link to="/" className="button button-dark">Return home <ArrowUpRight size={18} /></Link><Link to="/services" className="button button-quiet">Explore services <ArrowRight size={18} /></Link></div></section>
    </>
  );
}

function SiteShell() {
  return (
    <>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/who-we-help" element={<WhoWeHelpPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPage slug="privacy" />} />
          <Route path="/terms" element={<LegalPage slug="terms" />} />
          <Route path="/disclaimer" element={<LegalPage slug="disclaimer" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return <BrowserRouter><SiteShell /></BrowserRouter>;
}
