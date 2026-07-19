"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { CSSProperties } from "react";
import { useLanguage } from "../language-context";
import { placeholderImages } from "../site-content";

export default function CommunityPage() {
  const { copy } = useLanguage();

  return (
    <main>
      <section
        className="page-hero image-page-hero"
        style={
          {
            "--page-hero-image": `url("${placeholderImages.community}")`,
          } as CSSProperties
        }
      >
        <p className="eyebrow">{copy.community.eyebrow}</p>
        <h1>{copy.community.title}</h1>
        <p className="lede">{copy.community.text}</p>
        <div className="page-hero-actions" aria-label="Community page actions">
          <Link className="button primary" href="/contact">
            {copy.nav.contact}
          </Link>
          <Link className="button secondary" href="/services">
            {copy.nav.services}
          </Link>
        </div>
      </section>
      <section className="section split">
        <div className="initiative-card">
          <span>Golden Rose</span>
          <h2>Community Resource</h2>
          <ul>
            {copy.community.initiatives.map((initiative) => (
              <li key={initiative}>{initiative}</li>
            ))}
          </ul>
        </div>
        <div className="image-panel">
          <img alt="" src={placeholderImages.community} />
        </div>
      </section>
    </main>
  );
}
