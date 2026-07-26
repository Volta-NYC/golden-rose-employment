"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".page-hero .eyebrow",
  ".page-hero h1",
  ".page-hero .lede",
  ".page-hero-actions .button",
  ".trust-proof span",
  ".section-heading",
  ".section h2",
  ".section p",
  ".split > *",
  ".community-program",
  ".community-immigrant > *",
  ".process-grid article",
  ".process-actions .button",
  ".preview-card",
  ".preview-list li",
  ".top-services-list li",
  ".service-detail",
  ".service-chip-list li",
  ".trust-metrics figure",
  ".trust-notes li",
  ".image-panel",
  ".contact-card",
  ".contact-info-card",
  ".contact-info-card span",
  ".contact-info-card a",
  ".initiative-card",
  ".rights-card",
  ".rights-source",
  ".rights-note",
  ".contact-rail",
  "form label",
  "form p",
].join(",");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(revealSelector));

    elements.forEach((element, index) => {
      element.classList.remove("is-visible");
      element.classList.add("reveal-on-scroll");

      if (element instanceof HTMLElement) {
        element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 360)}ms`);
      }
    });

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
  }, [pathname]);

  return null;
}
