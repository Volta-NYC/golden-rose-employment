"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./language-context";
import { dcwpLinks, logoImage } from "./site-content";

const navItems = [
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["community", "/community"],
  ["rights", "/job-seeker-rights"],
  ["contact", "/contact"],
] as const;

export function SiteHeader() {
  const { copy, language, setLanguage } = useLanguage();
  const pathname = usePathname();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <Link className="brand" href="/#top" aria-label="Golden Rose home">
          <img alt="Golden Rose logo" src={logoImage} />
          <span>
            <strong>Golden Rose</strong>
            <small>Agencia de Empleos NYC</small>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          {navItems.map(([key, href]) => {
            const isActive = href === "/" ? pathname === "/" : pathname === href;
            const isContact = key === "contact";

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={[
                  isActive ? "is-active" : "",
                  isContact ? "nav-cta" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                href={href}
                key={key}
              >
                {copy.nav[key]}
              </Link>
            );
          })}
          <button
            aria-label={
              language === "en"
                ? "Switch site language to Spanish"
                : "Switch site language to English"
            }
            aria-pressed={language === "es"}
            className="language-toggle"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            type="button"
          >
            {language === "en" ? "Espanol" : "English"}
          </button>
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  const { copy } = useLanguage();

  return (
    <>
      <div className="mobile-contact-bar" aria-label="Quick contact">
        <a href="tel:+13473509660">Call</a>
        <a href="https://wa.me/13476510276" rel="noreferrer" target="_blank">
          WhatsApp<span className="sr-only">, opens in a new tab</span>
        </a>
      </div>
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <img alt="Golden Rose logo" className="footer-logo" src={logoImage} />
            <div>
              <strong>Golden Rose Agencia de Empleos NYC</strong>
              <span>{copy.footer.tagline}</span>
              <span>{copy.footer.appointment}</span>
              <span className="license-line">{copy.footer.legalName}</span>
              <span>{copy.footer.address}</span>
              <span>{copy.footer.license}</span>
              <span>{copy.footer.phone}</span>
            </div>
          </div>
          <div className="footer-column">
            <strong>Contact</strong>
            <a href="tel:+13473509660">(347) 350-9660</a>
            <a href="tel:+13477891185">(347) 789-1185</a>
            <a href="https://wa.me/13476510276" target="_blank" rel="noreferrer">
              WhatsApp<span className="sr-only">, opens in a new tab</span>
            </a>
          </div>
          <div className="footer-column">
            <strong>Location</strong>
            <span>381 Troy Ave</span>
            <span>Brooklyn, NY 11213 US</span>
            <span>{copy.footer.hours}</span>
          </div>
          <div className="footer-column">
            <strong>Social</strong>
            <a
              href="https://www.facebook.com/agenciadeempleosNyc"
              rel="noreferrer"
              target="_blank"
            >
              Facebook<span className="sr-only">, opens in a new tab</span>
            </a>
            <a
              href="https://www.instagram.com/agenciadeempleosnyc/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram<span className="sr-only">, opens in a new tab</span>
            </a>
            <a
              href="https://www.tiktok.com/@agenciadeempleosnyc"
              rel="noreferrer"
              target="_blank"
            >
              TikTok<span className="sr-only">, opens in a new tab</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{copy.footer.rights}</span>
          <a href={dcwpLinks.jobHunters} rel="noreferrer" target="_blank">
            DCWP Job Hunter Rights
            <span className="sr-only">, opens in a new tab</span>
          </a>
          <a
            className="volta-credit"
            href="https://www.novusnyc.org/"
            rel="noreferrer"
            target="_blank"
          >
            {copy.footer.madeBy}
            <span className="sr-only">, opens in a new tab</span>
          </a>
        </div>
      </footer>
    </>
  );
}
