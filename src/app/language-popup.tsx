"use client";

import { useState } from "react";
import { Language } from "./site-content";

type LanguagePopupProps = {
  onChoose: (language: Language) => void;
};

export function LanguagePopup({ onChoose }: LanguagePopupProps) {
  const [isOpen, setIsOpen] = useState(true);

  function chooseLanguage(language: Language) {
    document.documentElement.lang = language;
    onChoose(language);
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
          <button type="button" onClick={() => chooseLanguage("en")}>
            English
          </button>
          <button type="button" onClick={() => chooseLanguage("es")}>
            Espanol
          </button>
        </div>
      </div>
    </div>
  );
}
