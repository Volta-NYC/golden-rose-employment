"use client";

import { useEffect } from "react";

const revealSelector = [
  ".page-hero",
  ".page-hero .eyebrow",
  ".page-hero .lede",
  ".section-heading",
  ".section h2",
  ".section p",
  ".split > *",
  ".preview-card",
  ".service-detail",
  ".service-chip-list li",
  ".image-panel",
  ".contact-card",
  ".contact-info-card",
  ".contact-info-card span",
  ".contact-info-card a",
  ".initiative-card",
  ".contact-rail",
  "form label",
  "form p",
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(revealSelector));

    elements.forEach((element) => element.classList.add("reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
