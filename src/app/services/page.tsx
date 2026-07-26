"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
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
            "--page-hero-image": `url("${placeholderImages.domestic}")`,
          } as CSSProperties
        }
      >
        <p className="eyebrow">{copy.services.eyebrow}</p>
        <h1>{copy.services.title}</h1>
        <p className="lede">{copy.services.text}</p>
        <div className="page-hero-actions" aria-label="Services page actions">
          <Link className="button primary" href="/contact">
            {copy.nav.contact}
          </Link>
        </div>
      </section>
      <section className="section top-services-band" aria-labelledby="top-services">
        <div>
          <p className="eyebrow">{copy.services.eyebrow}</p>
          <h2 id="top-services">{copy.services.topServicesTitle}</h2>
          <p>{copy.services.topServicesText}</p>
        </div>
        <ol className="top-services-list">
          {copy.services.topServices.map((service, index) => (
            <li key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{service}</strong>
            </li>
          ))}
        </ol>
      </section>
      <section className="section service-page-grid" aria-label="Service overview">
        {copy.services.groups.map((group) => (
          <a className="service-detail" href={`#${group.id}`} key={group.title}>
            <img
              alt=""
              src={placeholderImages[group.image as keyof typeof placeholderImages]}
            />
            <div>
              <h2>{group.title}</h2>
              <p>{group.summary}</p>
              <ul className="service-chip-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </section>
      <section className="section service-detail-sections">
        {copy.services.groups.map((group) => (
          <article className="service-focus" id={group.id} key={group.id}>
            <div>
              <p className="eyebrow">{copy.services.eyebrow}</p>
              <h2>{group.title}</h2>
              <p>{group.summary}</p>
            </div>
            <ul className="service-chip-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button primary" href="/contact">
              {copy.nav.contact}
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
