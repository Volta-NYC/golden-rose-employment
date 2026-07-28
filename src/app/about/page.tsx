"use client";

import Link from "next/link";
import { PapelPicado, Photo } from "../image-slot";
import { useLanguage } from "../language-context";
import { photos } from "../site-content";

export default function AboutPage() {
  const { copy } = useLanguage();

  return (
    <main>
      <section className="page-hero image-page-hero">
        <PapelPicado />
        <p className="eyebrow">{copy.about.eyebrow}</p>
        <h1>{copy.about.title}</h1>
        <p className="lede">{copy.about.text}</p>
        <div className="page-hero-actions" aria-label="About page actions">
          <Link className="button primary" href="/contact">
            {copy.nav.contact}
          </Link>
          <Link className="button secondary" href="/services">
            {copy.nav.services}
          </Link>
        </div>
      </section>
      <section className="section split">
        <div className="image-panel">
          <Photo
            alt="The Golden Rose office in Brooklyn, with the job posting board by the desk"
            objectPosition="70% center"
            src={photos.office}
          />
        </div>
        <div className="service-card">
          <h2>Golden Rose</h2>
          <ul>
            {copy.about.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
