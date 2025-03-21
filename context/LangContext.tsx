"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Lang = "fr" | "en";

type LangContextType = {
  language: Lang;
  setLanguage: (lang: Lang) => void;
};

const LangContext = createContext<LangContextType | null>(null);

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within LangProvider");
  return context;
};

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Lang>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "fr" || stored === "en") setLanguage(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};
