"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { CSSProperties } from "react";
import { useLanguage } from "./language-context";
import { oldHeroImage, placeholderImages } from "./site-content";

export default function Home() {
  const { copy } = useLanguage();

  return (
    <main>
      <section
        className="hero"
        id="top"
        style={{ "--hero-image": `url("${oldHeroImage}")` } as CSSProperties}
      >
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{copy.home.eyebrow}</p>
            <h1>{copy.home.title}</h1>
            <p className="lede">{copy.home.text}</p>
            <div className="hero-actions" aria-label="Primary actions">
              <Link className="button primary" href="/contact">
                {copy.home.primaryAction}
              </Link>
              <Link className="button secondary" href="/services">
                {copy.home.secondaryAction}
              </Link>
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
              <span className="rose-symbol" aria-hidden="true">
                2016
              </span>
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
              <img
                alt=""
                src={placeholderImages[card.image as keyof typeof placeholderImages]}
              />
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
    </main>
  );
}
