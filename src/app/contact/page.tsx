"use client";

import type { CSSProperties } from "react";
import {
  ApplicantIntakeForm,
  EmployerRequestForm,
  intakeFormTitles,
} from "../contact-form";
import { useLanguage } from "../language-context";
import { placeholderImages } from "../site-content";

export default function ContactPage() {
  const { copy, language } = useLanguage();

  return (
    <main>
      <section
        className="page-hero image-page-hero contact-page-hero"
        style={
          {
            "--page-hero-image": `url("${placeholderImages.domestic}")`,
          } as CSSProperties
        }
      >
        <p className="eyebrow">{copy.contact.eyebrow}</p>
        <h1>{copy.contact.title}</h1>
        <p className="lede">{copy.contact.text}</p>
        <div className="page-hero-actions" aria-label="Contact page actions">
          <a className="button primary" href="tel:+13473509660">
            {copy.contact.phone}
          </a>
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
      <section className="section contact-layout">
        <div className="intake-grid">
          <div className="contact-card" id="employer">
            <h2>{intakeFormTitles[language].employer}</h2>
            <EmployerRequestForm language={language} />
          </div>
          <div className="contact-card" id="applicant">
            <h2>{intakeFormTitles[language].applicant}</h2>
            <ApplicantIntakeForm language={language} />
          </div>
        </div>
        <div className="contact-card">
          <h2>{copy.contact.business}</h2>
          <div>
            <strong>Address</strong>
            <span>{copy.contact.address}</span>
          </div>
          <div>
            <strong>Phone</strong>
            <a href="tel:+13473509660">{copy.contact.phone}</a>
          </div>
          <div>
            <strong>Hours</strong>
            <span>
              {copy.contact.openToday}: {copy.contact.hours}
            </span>
            <span>{copy.contact.closed}</span>
          </div>
          <a
            className="button primary"
            href="https://wa.me/13476510276"
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
