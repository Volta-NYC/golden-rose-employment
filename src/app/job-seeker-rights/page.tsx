"use client";

import Link from "next/link";
import { useLanguage } from "../language-context";
import { dcwpLinks } from "../site-content";

export default function JobSeekerRightsPage() {
  const { copy } = useLanguage();

  return (
    <main>
      <section className="page-hero rights-hero">
        <p className="eyebrow">{copy.rights.eyebrow}</p>
        <h1>{copy.rights.title}</h1>
        <p className="lede">{copy.rights.text}</p>
        <div className="page-hero-actions" aria-label="Official rights materials">
          <a
            className="button primary"
            href={dcwpLinks.jobHunters}
            rel="noreferrer"
            target="_blank"
          >
            {copy.rights.englishPdf}
          </a>
          <a
            className="button secondary"
            href={dcwpLinks.jobHunters}
            rel="noreferrer"
            target="_blank"
          >
            {copy.rights.spanishPdf}
          </a>
        </div>
      </section>

      <section className="section rights-section" aria-label="Job seeker rights">
        <div className="rights-source">
          <span>{copy.rights.sourceLabel}</span>
          <a href={dcwpLinks.employmentAgencies} rel="noreferrer" target="_blank">
            nyc.gov/site/dca/businesses/info-employment-agencies.page
          </a>
        </div>
        <div className="rights-grid">
          <article className="rights-card">
            <h2>{copy.rights.rightsTitle}</h2>
            <ul>
              {copy.rights.rightsList.map((right) => (
                <li key={right}>{right}</li>
              ))}
            </ul>
          </article>
          <article className="rights-card spanish-rights">
            <h2>{copy.rights.spanishTitle}</h2>
            <ul>
              {copy.rights.spanishList.map((right) => (
                <li key={right}>{right}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className="rights-note">
          <p>{copy.rights.note}</p>
          <Link className="button primary" href="/contact">
            {copy.nav.contact}
          </Link>
        </div>
      </section>
    </main>
  );
}
