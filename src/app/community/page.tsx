"use client";

import Link from "next/link";
import { PapelPicado, Photo, TextileBand } from "../image-slot";
import { useLanguage } from "../language-context";
import { photos } from "../site-content";

export default function CommunityPage() {
  const { copy } = useLanguage();

  return (
    <main>
      <section className="page-hero image-page-hero">
        <PapelPicado />
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
          <h2>{copy.community.resourceTitle}</h2>
          <ul>
            {copy.community.initiatives.map((initiative) => (
              <li key={initiative}>{initiative}</li>
            ))}
          </ul>
        </div>
        <div className="image-panel">
          <Photo
            alt="A neighbourhood flower stand, part of the block beautification work"
            src={photos.flowerStand}
          />
        </div>
      </section>
      <TextileBand src={photos.textile} />
      <section className="section community-programs" aria-label="Community programs">
        {copy.community.programs.map((program) => (
          <article className="community-program" key={program.title}>
            <div>
              <p className="eyebrow">{copy.community.eyebrow}</p>
              <h2>{program.title}</h2>
              <p>{program.summary}</p>
            </div>
            <ul className="service-chip-list">
              {program.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="section split community-support">
        <div className="service-card">
          <span>{copy.community.aiSupportTitle}</span>
          <ul className="service-chip-list">
            {copy.community.aiSupporters.map((supporter) => (
              <li key={supporter}>{supporter}</li>
            ))}
          </ul>
        </div>
        <div className="service-card">
          <span>{copy.community.organizationsTitle}</span>
          <p>{copy.community.organizationsText}</p>
          <ul>
            {copy.community.organizations.map((organization) => (
              <li key={organization}>{organization}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section community-immigrant" aria-labelledby="immigrant-support">
        <div>
          <p className="eyebrow">{copy.community.eyebrow}</p>
          <h2 id="immigrant-support">{copy.community.immigrantTitle}</h2>
        </div>
        <div className="community-immigrant-copy">
          {copy.community.immigrantText.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="section split community-photo-note">
        <div className="image-panel">
          <Photo
            alt="Buckets of cut flowers on a market table"
            src={photos.flowerMarket}
          />
        </div>
        <div className="initiative-card">
          <span>{copy.community.eyebrow}</span>
          <h2>{copy.community.photoTitle}</h2>
          <p>{copy.community.photoText}</p>
        </div>
      </section>
    </main>
  );
}
