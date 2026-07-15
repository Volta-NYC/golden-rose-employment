import { ContactForm } from "./contact-form";
import { LanguagePopup } from "./language-popup";

const employerServices = [
  "Domestic worker referrals",
  "Commercial and office cleaning teams",
  "Restaurant, warehouse, factory, retail, construction, and hospitality staff",
  "Candidate recruitment and screening",
  "Matching support for live-in and live-out positions",
];

const applicantServices = [
  "Housekeepers, nannies, companions, and elder caregivers",
  "Restaurant, kitchen, cleaning, warehouse, and general labor roles",
  "Resume assistance and interview preparation",
  "Guidance for immigrant workers and new arrivals",
  "Connections to local programs and community resources",
];

const processSteps = [
  {
    title: "Tell us what you need",
    text: "Employers share the role, schedule, language needs, location, and expectations. Applicants tell us about their experience and availability.",
  },
  {
    title: "We review and match",
    text: "Golden Rose screens candidates, reviews fit, and connects people with opportunities that match the role and work environment.",
  },
  {
    title: "We support the next step",
    text: "We help coordinate interviews, prepare applicants, and keep communication clear before and after a placement conversation.",
  },
];

const testimonials = [
  {
    quote:
      "Golden Rose helped our family find dependable home support with care and patience.",
    name: "Brooklyn family",
  },
  {
    quote:
      "They listened to my work experience and helped me feel ready for interviews.",
    name: "Job seeker",
  },
  {
    quote:
      "A practical, responsive partner when our business needed reliable cleaning staff.",
    name: "Local employer",
  },
];

const stats = [
  ["2016", "Serving New York since"],
  ["NYC", "Licensed employment agency"],
  ["2", "Languages: English and Spanish"],
  ["381", "Troy Ave, Brooklyn"],
];

export default function Home() {
  return (
    <main>
      <LanguagePopup />
      <section className="hero" id="top">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="Golden Rose home">
            <span>
              <strong>Golden Rose</strong>
              <small>Agencia de Empleos NYC</small>
            </span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#community">Community</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Bienvenidos / Welcome</p>
            <h1>Golden Rose Agencia de Empleos NYC</h1>
            <p className="lede">
              Since 2016, Golden Rose has helped Brooklyn employers, families,
              and job seekers move forward with professionalism, compassion, and
              respect for immigrant communities.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#employers">
                I need workers
              </a>
              <a className="button secondary" href="#applicants">
                I need work
              </a>
            </div>
            <p className="spanish-line">
              Agencia de empleos en Brooklyn. Hablamos ingles y espanol.
            </p>
          </div>

          <aside className="hero-panel" aria-label="Golden Rose highlights">
            <div className="rose-card">
              <span className="rose-symbol" aria-hidden="true">
                2016
              </span>
              <h2>Call us now to make an appointment.</h2>
              <p>
                Domestic, commercial, hospitality, labor, and community support
                referrals for New York families and businesses.
              </p>
            </div>
            <div className="quick-contact">
              <a href="tel:+13473509660">(347) 350-9660</a>
              <a href="tel:+13477891185">(347) 789-1185</a>
              <span>381 Troy Ave, Brooklyn, NY 11213</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="stats-strip" aria-label="Agency facts">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section split" id="services">
        <div>
          <p className="eyebrow">Referral services</p>
          <h2>Practical staffing help for homes, offices, and local teams.</h2>
          <p>
            Golden Rose is more than a listing board. We learn what employers
            need, understand each applicant&apos;s experience, and help both
            sides move through the referral process with clarity.
          </p>
        </div>
        <div className="service-grid">
          <article className="service-card" id="employers">
            <span>For employers</span>
            <h3>Find dependable workers</h3>
            <ul>
              {employerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </article>
          <article className="service-card" id="applicants">
            <span>For applicants</span>
            <h3>Find better opportunities</h3>
            <ul>
              {applicantServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-heading">
          <p className="eyebrow">How referrals work</p>
          <h2>A clear process for employers and job seekers.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bilingual">
        <div>
          <p className="eyebrow">English</p>
          <h2>Built for the communities we serve.</h2>
          <p>
            We support immigrant workers, families, and small businesses with
            employment referrals, preparation, and introductions to trusted
            nonprofit and workforce resources.
          </p>
        </div>
        <div>
          <p className="eyebrow">Espanol</p>
          <h2>Creado para nuestra comunidad.</h2>
          <p>
            Apoyamos a trabajadores inmigrantes, familias y pequenos negocios
            con referencias de empleo, preparacion y conexiones a recursos
            comunitarios confiables.
          </p>
        </div>
      </section>

      <section className="section community" id="community">
        <div>
          <p className="eyebrow">Community growth</p>
          <h2>Modernizing with purpose, not losing the personal touch.</h2>
          <p>
            Golden Rose is growing its digital presence through NYC Small
            Business Solutions, nonprofit marketing classes, and an intensive AI
            program for small businesses. The goal is simple: communicate
            better, respond faster, and serve clients with more care.
          </p>
        </div>
        <div className="initiative-card">
          <span>Neighborhood initiative</span>
          <h3>Greenest Block in Brooklyn</h3>
          <p>
            Golden Rose was selected to participate in Brooklyn Botanic
            Garden&apos;s Greenest Block in Brooklyn initiative, reflecting a
            commitment to sustainability, beautification, and community pride.
          </p>
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-heading">
          <p className="eyebrow">Success stories</p>
          <h2>Trusted by families, workers, and local employers.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name}>
              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption>{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Contact Golden Rose</p>
          <h2>Call to make an appointment or send your information.</h2>
          <p>
            To serve every client with attention, appointments are recommended.
            Employers and applicants can start by calling, messaging, or using
            the intake forms below.
          </p>
          <div className="contact-actions">
            <a className="button primary" href="tel:+13473509660">
              Call (347) 350-9660
            </a>
            <a
              className="button secondary"
              href="https://wa.me/13473509660"
              rel="noreferrer"
              target="_blank"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-card">
          <ContactForm />
        </div>
      </section>

      <footer>
        <div>
          <strong>Golden Rose Employment Agency Inc.</strong>
          <span>Licensed employment referral agency in Brooklyn, NY.</span>
        </div>
        <div>
          <span>381 Troy Ave, Brooklyn, NY 11213</span>
          <span>Open 9:00 AM - 5:00 PM. Closed Saturdays.</span>
        </div>
      </footer>
    </main>
  );
}
