"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  SiReact, SiNextdotjs, SiTypescript, SiVercel, SiFigma,
  SiTailwindcss, SiNestjs, SiPrisma, SiMysql,
  SiJavascript, SiLua,
} from "react-icons/si";
import { useLang } from "@/context/LangContext";

export const Projects = () => {
  const { language } = useLang();

  const testimonials = useMemo(() => [
    {
      id: "projects",
      name: language === "fr" ? "Portfolio personnel" : "Personal Portfolio",
      designation: "React, Next.js & TypeScript",
      quote:
        language === "fr"
          ? "Ce portfolio a été créé avec React, Next.js et TypeScript, déployé sur Vercel. Il présente mes projets, mon parcours et mes compétences."
          : "This portfolio was created with React, Next.js and TypeScript, deployed on Vercel. It presents my projects, background, and skills.",
      details:
        language === "fr"
          ? "J'ai utilisé Next.js, Framer Motion, un système multilingue FR/EN, avec un hébergement sur Vercel."
          : "I used Next.js, Framer Motion, a FR/EN multilingual system, and deployed it on Vercel.",
      src: "https://ilyesportfolio-v.vercel.app/_next/image?url=%2Ficons%2Fprojects%2FPortfolio.png&w=3840&q=90",
      icons: [
        { Icon: SiReact, color: "#61DAFB" },
        { Icon: SiNextdotjs, color: "#000000" },
        { Icon: SiTypescript, color: "#3178C6" },
        { Icon: SiVercel, color: "#000000" },
      ],
    },
    {
      id: "project-2",
      name: "Eduka",
      designation:
        language === "fr"
          ? "Application de covoiturage extra-scolaire"
          : "After-school carpooling app",
      quote:
        language === "fr"
          ? "Notre objectif est de développer une application conviviale pour le covoiturage des activités extra-scolaires des enfants."
          : "Our goal is to develop a user-friendly app for carpooling children to after-school activities.",
      details:
        language === "fr"
          ? "Développée en React + NestJS avec Prisma, cette app facilite l'organisation des trajets extrascolaires entre parents."
          : "Built using React + NestJS with Prisma, this app simplifies carpooling for after-school activities.",
      src: "https://ilyesportfolio-v.vercel.app/_next/image?url=%2Ficons%2Fprojects%2FEduka.png&w=3840&q=90",
      icons: [
        { Icon: SiFigma, color: "#F24E1E" },
        { Icon: SiTailwindcss, color: "#38BDF8" },
        { Icon: SiReact, color: "#61DAFB" },
        { Icon: SiTypescript, color: "#3178C6" },
        { Icon: SiNestjs, color: "#E0234E" },
        { Icon: SiPrisma, color: "#0C344B" },
        { Icon: SiVercel, color: "#000000" },
        { Icon: SiMysql, color: "#4479A1" },
      ],
    },
    {
      id: "project-3",
      name: "Serveur GTA V / FIVEM",
      designation:
        language === "fr"
          ? "GTA V modifié pour un jeu de rôle"
          : "GTA V modified for roleplay",
      quote:
        language === "fr"
          ? "GTA RP est une version modifiée de Grand Theft Auto V qui permet aux joueurs de jouer des rôles en ligne dans un monde fictif."
          : "GTA RP is a modified version of Grand Theft Auto V that allows players to roleplay online in a fictional world.",
      details:
        language === "fr"
          ? "Création d'un serveur complet (scripts, base de données, MLO), avec développement personnalisé en Lua et JS."
          : "Full server creation (scripts, DB, MLO) with custom Lua and JS development.",
      src: "https://ilyesportfolio-v.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1656787346245-528afaaecb86%3Fq%3D80%26w%3D3000%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=3840&q=90",
      icons: [
        { Icon: SiJavascript, color: "#F7DF1E" },
        { Icon: SiLua, color: "#2C2D72" },
        { Icon: SiMysql, color: "#4479A1" },
      ],
    },
  ], [language]);

  const [active, setActive] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 3000);
    }
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handleDetailsClick = () => {
    stopAutoPlay();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    startAutoPlay();
  };

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div id="projets" className="mx-auto max-w-6xl px-4 sm:px-6 md:px-20 py-20 font-['DM_Sans']">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        🗂️ {language === "fr" ? "Projets" : "Projects"}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-64 sm:h-80 md:h-96"
        >
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: active === index ? 1 : 0,
                  scale: active === index ? 1 : 0.95,
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="h-full w-full rounded-xl object-cover shadow-lg"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.div
            key={testimonials[active].id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold">{testimonials[active].name}</h3>
            <p className="text-base sm:text-lg text-gray-700">{testimonials[active].designation}</p>
            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              {testimonials[active].quote}
            </p>

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              {testimonials[active].icons.map(({ Icon, color }, i) => (
                <Icon key={i} style={{ color }} className="h-6 w-6 sm:h-7 sm:w-7" />
              ))}
            </div>

            <div className="mt-6">
              <button
                onClick={handleDetailsClick}
                className="px-5 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
              >
                {language === "fr" ? "Détails" : "Details"}
              </button>
            </div>
          </motion.div>

          <div className="flex gap-6 pt-8 justify-center md:justify-start">
            <button
              onClick={handlePrev}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 transition-colors"
            >
              <FaArrowLeft className="h-5 w-5 text-gray-700 group-hover:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 transition-colors"
            >
              <FaArrowRight className="h-5 w-5 text-gray-700 group-hover:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-xl font-bold mb-4">{testimonials[active].name}</h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                {testimonials[active].details}
              </p>
              <button
                onClick={handleCloseModal}
                className="mt-2 px-5 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
              >
                {language === "fr" ? "Fermer" : "Close"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
