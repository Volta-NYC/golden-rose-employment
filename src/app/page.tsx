"use client";

import { useState } from "react";
import { ContactForm } from "./contact-form";
import { Language, LanguagePopup } from "./language-popup";

const content = {
  en: {
    nav: ["Services", "Process", "Community", "Contact"],
    eyebrow: "Bienvenidos / Welcome",
    heroTitle: "Golden Rose Agencia de Empleos NYC",
    heroText:
      "Since 2016, Golden Rose has helped Brooklyn employers, families, and job seekers move forward with professionalism, compassion, and respect for immigrant communities.",
    primaryAction: "I need workers",
    secondaryAction: "I need work",
    spanishLine: "Agencia de empleos en Brooklyn. Hablamos ingles y espanol.",
    heroCardTitle: "Call us now to make an appointment.",
    heroCardText:
      "Domestic, commercial, hospitality, labor, and community support referrals for New York families and businesses.",
    stats: [
      ["2016", "Serving New York since"],
      ["NYC", "Licensed employment agency"],
      ["2", "Languages: English and Spanish"],
      ["381", "Troy Ave, Brooklyn"],
    ],
    services: {
      eyebrow: "Referral services",
      title: "Practical staffing help for homes, offices, and local teams.",
      text: "Golden Rose is more than a listing board. We learn what employers need, understand each applicant's experience, and help both sides move through the referral process with clarity.",
      employerLabel: "For employers",
      employerTitle: "Find dependable workers",
      applicantLabel: "For applicants",
      applicantTitle: "Find better opportunities",
      employerServices: [
        "Domestic worker referrals",
        "Commercial and office cleaning teams",
        "Restaurant, warehouse, factory, retail, construction, and hospitality staff",
        "Candidate recruitment and screening",
        "Matching support for live-in and live-out positions",
      ],
      applicantServices: [
        "Housekeepers, nannies, companions, and elder caregivers",
        "Restaurant, kitchen, cleaning, warehouse, and general labor roles",
        "Resume assistance and interview preparation",
        "Guidance for immigrant workers and new arrivals",
        "Connections to local programs and community resources",
      ],
    },
    process: {
      eyebrow: "How referrals work",
      title: "A clear process for employers and job seekers.",
      steps: [
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
      ],
    },
    bilingual: {
      leftEyebrow: "English",
      leftTitle: "Built for the communities we serve.",
      leftText:
        "We support immigrant workers, families, and small businesses with employment referrals, preparation, and introductions to trusted nonprofit and workforce resources.",
      rightEyebrow: "Espanol",
      rightTitle: "Creado para nuestra comunidad.",
      rightText:
        "Apoyamos a trabajadores inmigrantes, familias y pequenos negocios con referencias de empleo, preparacion y conexiones a recursos comunitarios confiables.",
    },
    community: {
      eyebrow: "Community growth",
      title: "Modernizing with purpose, not losing the personal touch.",
      text: "Golden Rose is growing its digital presence through NYC Small Business Solutions, nonprofit marketing classes, and an intensive AI program for small businesses. The goal is simple: communicate better, respond faster, and serve clients with more care.",
      cardLabel: "Neighborhood initiative",
      cardTitle: "Greenest Block in Brooklyn",
      cardText:
        "Golden Rose was selected to participate in Brooklyn Botanic Garden's Greenest Block in Brooklyn initiative, reflecting a commitment to sustainability, beautification, and community pride.",
    },
    testimonials: {
      eyebrow: "Success stories",
      title: "Trusted by families, workers, and local employers.",
      items: [
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
      ],
    },
    contact: {
      eyebrow: "Contact Golden Rose",
      title: "Call to make an appointment or send your information.",
      text: "To serve every client with attention, appointments are recommended. Employers and applicants can start by calling, messaging, or using the intake forms below.",
      call: "Call (347) 350-9660",
      footerText: "Licensed employment referral agency in Brooklyn, NY.",
      hours: "Open 9:00 AM - 5:00 PM. Closed Saturdays.",
    },
  },
  es: {
    nav: ["Servicios", "Proceso", "Comunidad", "Contacto"],
    eyebrow: "Bienvenidos / Welcome",
    heroTitle: "Golden Rose Agencia de Empleos NYC",
    heroText:
      "Desde 2016, Golden Rose ayuda a empleadores, familias y trabajadores en Brooklyn con profesionalismo, compasion y respeto por las comunidades inmigrantes.",
    primaryAction: "Necesito trabajadores",
    secondaryAction: "Busco empleo",
    spanishLine: "Agencia de empleos en Brooklyn. Hablamos ingles y espanol.",
    heroCardTitle: "Llamenos para hacer una cita.",
    heroCardText:
      "Referencias para trabajo domestico, limpieza, restaurantes, almacenes, fabrica, construccion, hospitalidad y apoyo comunitario.",
    stats: [
      ["2016", "Sirviendo a Nueva York desde"],
      ["NYC", "Agencia de empleos licenciada"],
      ["2", "Idiomas: ingles y espanol"],
      ["381", "Troy Ave, Brooklyn"],
    ],
    services: {
      eyebrow: "Servicios de referencia",
      title: "Ayuda practica para hogares, oficinas y negocios locales.",
      text: "Golden Rose no es solamente una lista de trabajos. Escuchamos las necesidades de los empleadores, conocemos la experiencia de cada candidato y ayudamos a ambas partes con claridad.",
      employerLabel: "Para empleadores",
      employerTitle: "Encuentre trabajadores confiables",
      applicantLabel: "Para solicitantes",
      applicantTitle: "Encuentre mejores oportunidades",
      employerServices: [
        "Referencias de trabajadoras domesticas",
        "Equipos de limpieza comercial y de oficinas",
        "Personal para restaurantes, almacenes, fabrica, tiendas, construccion y hoteleria",
        "Reclutamiento y evaluacion de candidatos",
        "Apoyo para posiciones internas, externas, tiempo completo o parcial",
      ],
      applicantServices: [
        "Housekeepers, nineras, companeras y cuidadoras de ancianos",
        "Trabajos en restaurantes, cocina, limpieza, almacenes y labor general",
        "Ayuda con resume y preparacion para entrevistas",
        "Orientacion para trabajadores inmigrantes y recien llegados",
        "Conexion con programas locales y recursos comunitarios",
      ],
    },
    process: {
      eyebrow: "Como funciona",
      title: "Un proceso claro para empleadores y trabajadores.",
      steps: [
        {
          title: "Diganos que necesita",
          text: "Los empleadores comparten el puesto, horario, idioma, ubicacion y expectativas. Los solicitantes nos cuentan su experiencia y disponibilidad.",
        },
        {
          title: "Revisamos y conectamos",
          text: "Golden Rose revisa candidatos, evalua compatibilidad y conecta personas con oportunidades adecuadas para el puesto y el ambiente de trabajo.",
        },
        {
          title: "Apoyamos el proximo paso",
          text: "Ayudamos a coordinar entrevistas, preparar solicitantes y mantener comunicacion clara antes y despues de una conversacion de empleo.",
        },
      ],
    },
    bilingual: {
      leftEyebrow: "Espanol",
      leftTitle: "Creado para nuestra comunidad.",
      leftText:
        "Apoyamos a trabajadores inmigrantes, familias y pequenos negocios con referencias de empleo, preparacion y conexiones a recursos comunitarios confiables.",
      rightEyebrow: "English",
      rightTitle: "Serving Brooklyn in two languages.",
      rightText:
        "Golden Rose welcomes employers and applicants who prefer English or Spanish, with respectful support from the first call.",
    },
    community: {
      eyebrow: "Crecimiento comunitario",
      title: "Modernizandonos sin perder el trato personal.",
      text: "Golden Rose esta fortaleciendo su presencia digital con NYC Small Business Solutions, clases de mercadeo de organizaciones sin fines de lucro y un programa intensivo de inteligencia artificial para pequenos negocios.",
      cardLabel: "Iniciativa del vecindario",
      cardTitle: "Greenest Block in Brooklyn",
      cardText:
        "Golden Rose fue seleccionada para participar en la iniciativa Greenest Block in Brooklyn de Brooklyn Botanic Garden, reflejando compromiso con sostenibilidad, belleza del vecindario y orgullo comunitario.",
    },
    testimonials: {
      eyebrow: "Historias de exito",
      title: "Confiados por familias, trabajadores y empleadores locales.",
      items: [
        {
          quote:
            "Golden Rose ayudo a nuestra familia a encontrar apoyo confiable en el hogar con paciencia y cuidado.",
          name: "Familia de Brooklyn",
        },
        {
          quote:
            "Escucharon mi experiencia laboral y me ayudaron a sentirme preparada para entrevistas.",
          name: "Solicitante de empleo",
        },
        {
          quote:
            "Un equipo practico y atento cuando nuestro negocio necesito personal de limpieza confiable.",
          name: "Empleador local",
        },
      ],
    },
    contact: {
      eyebrow: "Contacte a Golden Rose",
      title: "Llame para hacer una cita o envie su informacion.",
      text: "Para servirle mejor, recomendamos hacer una cita. Empleadores y solicitantes pueden comenzar llamando, enviando mensaje o usando el formulario.",
      call: "Llamar (347) 350-9660",
      footerText: "Agencia de empleos licenciada en Brooklyn, NY.",
      hours: "Abierto 9:00 AM - 5:00 PM. Cerrado los sabados.",
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = content[language];

  return (
    <main>
      <LanguagePopup onChoose={setLanguage} />
      <section className="hero" id="top">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="Golden Rose home">
            <span>
              <strong>Golden Rose</strong>
              <small>Agencia de Empleos NYC</small>
            </span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#services">{copy.nav[0]}</a>
            <a href="#process">{copy.nav[1]}</a>
            <a href="#community">{copy.nav[2]}</a>
            <a href="#contact">{copy.nav[3]}</a>
          </nav>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.heroTitle}</h1>
            <p className="lede">{copy.heroText}</p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#employers">
                {copy.primaryAction}
              </a>
              <a className="button secondary" href="#applicants">
                {copy.secondaryAction}
              </a>
            </div>
            <p className="spanish-line">{copy.spanishLine}</p>
          </div>

          <aside className="hero-panel" aria-label="Golden Rose highlights">
            <div className="rose-card">
              <span className="rose-symbol" aria-hidden="true">
                2016
              </span>
              <h2>{copy.heroCardTitle}</h2>
              <p>{copy.heroCardText}</p>
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
        {copy.stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section split" id="services">
        <div>
          <p className="eyebrow">{copy.services.eyebrow}</p>
          <h2>{copy.services.title}</h2>
          <p>{copy.services.text}</p>
        </div>
        <div className="service-grid">
          <article className="service-card" id="employers">
            <span>{copy.services.employerLabel}</span>
            <h3>{copy.services.employerTitle}</h3>
            <ul>
              {copy.services.employerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </article>
          <article className="service-card" id="applicants">
            <span>{copy.services.applicantLabel}</span>
            <h3>{copy.services.applicantTitle}</h3>
            <ul>
              {copy.services.applicantServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-heading">
          <p className="eyebrow">{copy.process.eyebrow}</p>
          <h2>{copy.process.title}</h2>
        </div>
        <div className="process-grid">
          {copy.process.steps.map((step, index) => (
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
          <p className="eyebrow">{copy.bilingual.leftEyebrow}</p>
          <h2>{copy.bilingual.leftTitle}</h2>
          <p>{copy.bilingual.leftText}</p>
        </div>
        <div>
          <p className="eyebrow">{copy.bilingual.rightEyebrow}</p>
          <h2>{copy.bilingual.rightTitle}</h2>
          <p>{copy.bilingual.rightText}</p>
        </div>
      </section>

      <section className="section community" id="community">
        <div>
          <p className="eyebrow">{copy.community.eyebrow}</p>
          <h2>{copy.community.title}</h2>
          <p>{copy.community.text}</p>
        </div>
        <div className="initiative-card">
          <span>{copy.community.cardLabel}</span>
          <h3>{copy.community.cardTitle}</h3>
          <p>{copy.community.cardText}</p>
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-heading">
          <p className="eyebrow">{copy.testimonials.eyebrow}</p>
          <h2>{copy.testimonials.title}</h2>
        </div>
        <div className="testimonial-grid">
          {copy.testimonials.items.map((testimonial) => (
            <figure key={testimonial.name}>
              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption>{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">{copy.contact.eyebrow}</p>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.text}</p>
          <div className="contact-actions">
            <a className="button primary" href="tel:+13473509660">
              {copy.contact.call}
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
          <ContactForm language={language} />
        </div>
      </section>

      <footer>
        <div>
          <strong>Golden Rose Employment Agency Inc.</strong>
          <span>{copy.contact.footerText}</span>
        </div>
        <div>
          <span>381 Troy Ave, Brooklyn, NY 11213</span>
          <span>{copy.contact.hours}</span>
        </div>
      </footer>
    </main>
  );
}
