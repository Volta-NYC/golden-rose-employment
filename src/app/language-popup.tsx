"use client";

import { useState } from "react";

type Language = "English" | "Spanish";

export function LanguagePopup() {
  const [isOpen, setIsOpen] = useState(true);

  function chooseLanguage(language: Language) {
    document.documentElement.lang = language === "Spanish" ? "es" : "en";
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-labelledby="language-popup-title"
      aria-modal="true"
      className="language-overlay"
      role="dialog"
    >
      <div className="language-popup">
        <p className="eyebrow">Golden Rose Employment</p>
        <h2 id="language-popup-title">Choose your language</h2>
        <p>
          Select English or Spanish to continue. Seleccione ingles o espanol
          para continuar.
        </p>
        <div className="language-actions">
          <button type="button" onClick={() => chooseLanguage("English")}>
            English
          </button>
          <button type="button" onClick={() => chooseLanguage("Spanish")}>
            Espanol
          </button>
        </div>
      </div>
    </div>
  );
}
