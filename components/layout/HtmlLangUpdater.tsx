"use client";

import { useEffect } from "react";
import { useLang } from "@/context/LangContext";

const HtmlLangUpdater = () => {
  const { language } = useLang();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
};

export default HtmlLangUpdater;
