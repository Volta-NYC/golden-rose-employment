"use client";

/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import { useLanguage } from "../language-context";
import { placeholderImages } from "../site-content";

export default function AboutPage() {
  const { copy } = useLanguage();

  return (
    <main>
      <section
        className="page-hero image-page-hero"
        style={
          {
            "--page-hero-image": `url("${placeholderImages.about}")`,
          } as CSSProperties
        }
      >
        <p className="eyebrow">{copy.about.eyebrow}</p>
        <h1>{copy.about.title}</h1>
        <p className="lede">{copy.about.text}</p>
      </section>
      <section className="section split">
        <div className="image-panel">
          <img alt="" src={placeholderImages.community} />
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
