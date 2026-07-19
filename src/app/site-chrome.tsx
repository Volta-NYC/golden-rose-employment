"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./language-context";

const navItems = [
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["community", "/community"],
  ["contact", "/contact"],
] as const;

export function SiteHeader() {
  const { copy, language, setLanguage } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/#top" aria-label="Golden Rose home">
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
          className="language-toggle"
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          type="button"
        >
          {language === "en" ? "Espanol" : "English"}
        </button>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const { copy } = useLanguage();

  return (
    <>
      <div className="mobile-contact-bar" aria-label="Quick contact">
        <a href="tel:+13473509660">Call</a>
        <a href="https://wa.me/13476510276" rel="noreferrer" target="_blank">
          WhatsApp
        </a>
      </div>
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo" aria-hidden="true">
              GR
            </div>
            <div>
              <strong>Golden Rose Agencia de Empleos NYC</strong>
              <span>{copy.footer.tagline}</span>
              <span>{copy.footer.appointment}</span>
            </div>
          </div>
          <div className="footer-column">
            <strong>Contact</strong>
            <a href="tel:+13473509660">(347) 350-9660</a>
            <a href="tel:+13477891185">(347) 789-1185</a>
            <a href="https://wa.me/13476510276" target="_blank" rel="noreferrer">
              WhatsApp
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
              Facebook
            </a>
            <a href="/contact">{copy.nav.contact}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{copy.footer.rights}</span>
          <a
            className="volta-credit"
            href="https://voltanyc.org/"
            rel="noreferrer"
            target="_blank"
          >
            {copy.footer.madeBy}
          </a>
        </div>
      </footer>
    </>
  );
}
