"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ImageSlot, PapelPicado } from "./image-slot";
import { useLanguage } from "./language-context";
import { logoLockup } from "./site-content";

export default function Home() {
  const { copy } = useLanguage();

  return (
    <main>
      <section className="hero" id="top">
        <PapelPicado />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{copy.home.eyebrow}</p>
            <h1>{copy.home.title}</h1>
            <p className="lede">{copy.home.text}</p>
            <div className="hero-actions" aria-label="Primary actions">
              <Link className="button primary" href="/contact">
                {copy.home.primaryAction}
              </Link>
              <Link className="button secondary" href="/contact?type=applicant">
                {copy.home.secondaryAction}
              </Link>
            </div>
            <div className="trust-proof" aria-label="Golden Rose trust proof">
              {copy.home.trustProof.map((proof) => (
                <span key={proof}>{proof}</span>
              ))}
            </div>
            <div className="audience-paths" aria-label="Choose a path">
              {copy.home.audiencePaths.map((path) => (
                <Link className="audience-path" href={path.href} key={path.title}>
                  <span>{path.title}</span>
                  <p>{path.text}</p>
                  <strong>{path.action}</strong>
                </Link>
              ))}
            </div>
          </div>

          <aside className="hero-panel" aria-label="Golden Rose highlights">
            <div className="rose-card">
              <img
                alt="Golden Rose Agencia de Empleos NYC"
                className="hero-logo"
                src={logoLockup}
              />
              <h2>{copy.home.appointmentTitle}</h2>
              <p>{copy.home.appointmentText}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="stats-strip" aria-label="Agency facts">
        {copy.home.stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section split compact-section">
        <div>
          <p className="eyebrow">Golden Rose</p>
          <h2>{copy.home.introTitle}</h2>
          <p>{copy.home.introText}</p>
        </div>
        <div className="contact-rail">
          <a href="tel:+13473509660">(347) 350-9660</a>
          <a href="tel:+13477891185">(347) 789-1185</a>
          <span>381 Troy Ave, Brooklyn, NY 11213</span>
          <span>09:00 am - 05:00 pm</span>
        </div>
      </section>

      <section className="section preview-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.nav.services}</p>
          <h2>{copy.services.title}</h2>
        </div>
        <div className="preview-grid">
          {copy.home.cards.map((card) => (
            <Link className="preview-card" href={card.href} key={card.title}>
              <ImageSlot />
              <span>{card.title}</span>
              <ul className="preview-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="section process" aria-labelledby="employer-process">
        <div className="section-heading">
          <p className="eyebrow">{copy.home.process.eyebrow}</p>
          <h2 id="employer-process">{copy.home.process.title}</h2>
          <p>{copy.home.process.text}</p>
        </div>
        <div className="process-grid employer-process-grid">
          {copy.home.process.steps.map((step, index) => {
            const details = "details" in step ? step.details : undefined;

            return (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {details?.length ? (
                  <ul>
                    {details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </div>
        <div className="process-actions">
          <Link className="button primary" href="/contact#employer">
            {copy.home.primaryAction}
          </Link>
          <a
            className="button secondary"
            href="https://wa.me/13476510276"
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <section className="section testimonials" aria-labelledby="trust-proof">
        <div className="section-heading">
          <p className="eyebrow">{copy.home.trust.eyebrow}</p>
          <h2 id="trust-proof">{copy.home.trust.title}</h2>
          <p>{copy.home.trust.text}</p>
        </div>
        <div className="testimonial-grid trust-metrics">
          {copy.home.stats.map(([value, label]) => (
            <figure key={label}>
              <strong>{value}</strong>
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="service-card trust-notes">
          <ul>
            {copy.home.trust.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
