"use client";

import React, { useRef } from "react";
import { useLang } from "@/context/LangContext";
import { motion, useInView } from "framer-motion";

const ButtonCV: React.FC = () => {
  const { language } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const handleDownload = () => {
    const cvPath = "assets/cv-ilyes-ghardi.png";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "CV-Ilyes-Ghardi.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const messageFr = (
    <>
      🕶️ Si tu vois ce bouton... ne clique surtout pas si tu ne fais pas partie de la Famille.
      <br />
      Ce fichier appartient à une personne de confiance.
      <br />
      Don Corleone lui-même m’a confié cette mission.
      <br />
      Et toi... es-tu digne d’y accéder ?
      <br />
      <span className="text-red-600 animate-pulse">
        Ah, et ne parle pas comme Jimmy deux fois.🤫
      </span>
    </>
  );

  const messageEn = (
    <>
      🕶️ If you see this button... don't click unless you're part of the Family.
      <br />
      This file belongs to someone trusted.
      <br />
      Don Corleone himself gave me this mission.
      <br />
      And you... are you worthy of access?
      <br />
      <span className="text-red-600 animate-pulse">
        And don’t talk like Jimmy Two Times.🤫
      </span>
    </>
  );

  const buttonText =
    language === "fr" ? "📄 Télécharger ce fichier" : "📄 Download this file";

  return (
    <div ref={ref} className="flex flex-col items-start gap-4 mt-16 ml-6 sm:ml-24">
      {/* Message : animé uniquement quand visible */}
      <motion.div
        className="relative bg-[#e5e5ea] text-black text-base px-6 py-4 rounded-[30px] shadow-md font-medium max-w-[90%] sm:max-w-xl text-left leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {language === "fr" ? messageFr : messageEn}
      </motion.div>

      {/* Bouton avec délai */}
      <motion.button
        onClick={handleDownload}
        className="bg-[#007aff] text-white text-base font-semibold px-8 py-4 rounded-full shadow-lg hover:brightness-110 active:scale-[0.97] transition-all duration-200 font-['DM_Sans']"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {buttonText}
      </motion.button>
    </div>
  );
};

export default ButtonCV;
