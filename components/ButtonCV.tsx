"use client";

import React, { useRef } from "react";
import { useLang } from "@/context/LangContext";
import { motion, useInView } from "framer-motion";

const ButtonCV: React.FC = () => {
  const { language } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Lien Dropbox direct pour FR et EN (avec ?dl=1 pour forcer le téléchargement)
  const fileUrl =
    language === "fr"
      ? "https://www.dropbox.com/scl/fi/u8lagan4i2pd30f4pkz2m/CV-Benhouss-FR.pdf?rlkey=9pwi0nvo9ig4oi4oiv0grcf15&st=zoi1c9be&dl=1"
      : "https://www.dropbox.com/scl/fi/8jclx6bhrea321f3l6xny/CV-Benhouss-EN.pdf?rlkey=43m4aeeaqkhusiix713ey8boz&st=2djhuhde&dl=1"; // ← remplace par ton vrai lien EN

  const buttonText =
    language === "fr" ? "📄 Télécharger le CV" : "📄 Download Resume";

  const text =
    language === "fr"
      ? "Un clic, un fichier. Peut-être le début de quelque chose."
      : "One click, one file. Maybe the start of something.";

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

      <motion.a
        href={fileUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded-full text-base sm:text-lg font-medium shadow-md hover:bg-blue-700 transition duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {buttonText}
        <span className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl opacity-40 z-0 animate-pulse" />
      </motion.a>
    </div>
  );
};

export default ButtonCV;
