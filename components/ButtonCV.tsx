"use client";

import React, { useRef } from "react";
import { useLang } from "@/context/LangContext";
import { motion, useInView } from "framer-motion";

const ButtonCV: React.FC = () => {
  const { language } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const handleDownload = () => {
    const isFr = language === "fr";
    const fileName = isFr ? "cv-ilyes-ghardi-fr.pdf" : "cv-ilyes-ghardi-en.pdf";
    const downloadName = isFr ? "CV-Ilyes-Ghardi-FR.pdf" : "CV-Ilyes-Ghardi-EN.pdf";

    const link = document.createElement("a");
    link.href = `assets/${fileName}`;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const text =
    language === "fr"
      ? "Un clic, un fichier. Peut-être le début de quelque chose."
      : "One click, one file. Maybe the start of something.";

  const buttonText =
    language === "fr" ? "📄 Télécharger le CV" : "📄 Download Resume";

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-8 mt-32 px-4 text-center font-sans"
    >
      <motion.p
        className="text-zinc-500 text-lg sm:text-xl font-normal tracking-tight max-w-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {text}
      </motion.p>

      <motion.button
        onClick={handleDownload}
        className="relative inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded-full text-base sm:text-lg font-medium shadow-md hover:bg-blue-700 transition duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {buttonText}
        <span className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl opacity-40 z-0 animate-pulse" />
      </motion.button>
    </div>
  );
};

export default ButtonCV;
