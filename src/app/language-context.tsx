"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { Language, siteCopy } from "./site-content";
import { LanguagePopup } from "./language-popup";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: (typeof siteCopy)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  function setLanguage(language: Language) {
    document.documentElement.lang = language;
    setLanguageState(language);
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, copy: siteCopy[language] }}
    >
      <LanguagePopup onChoose={setLanguage} />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
