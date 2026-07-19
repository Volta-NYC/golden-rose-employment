"use client";

/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import { useLanguage } from "../language-context";
import { placeholderImages } from "../site-content";

export default function ServicesPage() {
  const { copy } = useLanguage();

  return (
    <main>
      <section
        className="page-hero image-page-hero"
        style={
          {
            "--page-hero-image": `url("${placeholderImages.restaurant}")`,
          } as CSSProperties
        }
      >
        <p className="eyebrow">{copy.services.eyebrow}</p>
        <h1>{copy.services.title}</h1>
        <p className="lede">{copy.services.text}</p>
      </section>
      <section className="section service-page-grid">
        {copy.services.groups.map((group) => (
          <article className="service-detail" key={group.title}>
            <img
              alt=""
              src={placeholderImages[group.image as keyof typeof placeholderImages]}
            />
            <div>
              <h2>{group.title}</h2>
              <ul className="service-chip-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
