"use client";

/* eslint-disable @next/next/no-img-element */
import { useLanguage } from "../language-context";
import { placeholderImages } from "../site-content";

export default function CommunityPage() {
  const { copy } = useLanguage();

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">{copy.community.eyebrow}</p>
        <h1>{copy.community.title}</h1>
        <p className="lede">{copy.community.text}</p>
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
