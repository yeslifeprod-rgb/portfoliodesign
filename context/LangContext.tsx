"use client";

import { createContext, useContext } from "react";

type Lang = "fr";

type LangContextType = {
  language: Lang;
};

const LangContext = createContext<LangContextType | null>(null);

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within LangProvider");
  return context;
};

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const language: Lang = "fr";

  return <LangContext.Provider value={{ language }}>{children}</LangContext.Provider>;
};
