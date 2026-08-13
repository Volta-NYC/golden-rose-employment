"use client";

import Link from "next/link";
import { PapelPicado, Photo } from "../image-slot";
import { useLanguage } from "../language-context";
import { photos } from "../site-content";

/* Only the commercial/food group has a photo that honestly represents it. The
   domestic and general-labour groups stay as empty slots until she sends real
   placement photography. */
const groupPhotos: Record<string, { alt: string; src: string } | undefined> = {
  restaurant: {
    alt: "Cacao pods, chocolate and bottles laid out on a table",
    src: photos.food,
  },
};

export default function ServicesPage() {
  const { copy } = useLanguage();

  return (
    <main id="main-content">
      <section className="page-hero image-page-hero">
        <PapelPicado />
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
            <Photo
              alt={groupPhotos[group.image]?.alt ?? `${group.title} image placeholder`}
              src={groupPhotos[group.image]?.src}
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
