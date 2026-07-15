"use client";

import Link from "next/link";
import { useLanguage } from "./language-context";

const navItems = [
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["community", "/community"],
  ["contact", "/contact"],
] as const;

export function SiteHeader() {
  const { copy } = useLanguage();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Golden Rose home">
        <span>
          <strong>Golden Rose</strong>
          <small>Agencia de Empleos NYC</small>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        {navItems.map(([key, href]) => (
          <Link href={href} key={key}>
            {copy.nav[key]}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const { copy } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <strong>Golden Rose Agencia de Empleos NYC</strong>
          <span>{copy.footer.tagline}</span>
          <span>{copy.footer.appointment}</span>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="tel:+13473509660">(347) 350-9660</a>
          <a href="tel:+13477891185">(347) 789-1185</a>
          <a href="https://wa.me/13476510276" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
        <div>
          <strong>Location</strong>
          <span>381 Troy Ave</span>
          <span>Brooklyn, NY 11213 US</span>
          <span>{copy.footer.hours}</span>
        </div>
        <div>
          <strong>Social</strong>
          <a
            href="https://www.facebook.com/agenciadeempleosNyc"
            rel="noreferrer"
            target="_blank"
          >
            Facebook
          </a>
          <a href="/contact">{copy.nav.contact}</a>
          <a href="https://voltanyc.org/" rel="noreferrer" target="_blank">
            {copy.footer.madeBy}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{copy.footer.rights}</span>
      </div>
    </footer>
  );
}
