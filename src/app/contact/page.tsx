"use client";

import { ContactForm } from "../contact-form";
import { useLanguage } from "../language-context";

export default function ContactPage() {
  const { copy, language } = useLanguage();

  return (
    <main>
      <section className="page-hero contact-page-hero">
        <p className="eyebrow">{copy.contact.eyebrow}</p>
        <h1>{copy.contact.title}</h1>
        <p className="lede">{copy.contact.text}</p>
      </section>
      <section className="section contact-layout">
        <div className="contact-card">
          <h2>{copy.contact.formTitle}</h2>
          <ContactForm language={language} />
        </div>
        <div className="contact-info-card">
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
