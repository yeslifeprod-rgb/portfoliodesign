"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiVercel,
  SiFigma,
  SiTailwindcss,
  SiNestjs,
  SiPrisma,
  SiMysql,
  SiJavascript,
  SiLua,
} from "react-icons/si";

export const Projects = () => {
  const testimonials = [
    {
      id: "projects",
      name: "Portfolio personnel",
      designation: "React, Next.js & TypeScript",
      quote:
        "Ce portfolio a été créé avec React, Next.js et TypeScript, déployé sur Vercel. Il présente mes projets, mon parcours et mes compétences.",
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
      designation: "Application de covoiturage extra-scolaire",
      quote:
        "Notre objectif est de développer une application conviviale pour le covoiturage des activités extra-scolaires des enfants.",
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
      designation: "GTA V modifié pour un jeu de rôle",
      quote:
        "GTA RP est une version modifiée de Grand Theft Auto V qui permet aux joueurs de jouer des rôles en ligne dans un monde fictif.",
      src: "https://ilyesportfolio-v.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1656787346245-528afaaecb86%3Fq%3D80%26w%3D3000%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=3840&q=90",
      icons: [
        { Icon: SiJavascript, color: "#F7DF1E" },
        { Icon: SiLua, color: "#2C2D72" },
        { Icon: SiMysql, color: "#4479A1" },
      ],
    },
  ];

  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="projets"
      className="mx-auto max-w-6xl px-8 sm:px-12 md:px-20 py-40 font-['DM_Sans']"
    >
      {/* Titre centré */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
        🗂️ Projets
      </h2>

      {/* Grille responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image du projet */}
        <div className="relative h-72 sm:h-80 w-full">
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
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-xl object-cover shadow-lg"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Texte + Icônes */}
        <div className="flex flex-col text-center md:text-left">
          <motion.div
            key={testimonials[active].id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-semibold">{testimonials[active].name}</h3>
            <p className="text-lg text-gray-700">{testimonials[active].designation}</p>
            <p className="mt-6 text-base text-gray-700 leading-relaxed">
              {testimonials[active].quote}
            </p>

            {/* Icônes des technos */}
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              {testimonials[active].icons.map(({ Icon, color }, i) => (
                <Icon key={i} style={{ color }} className="h-6 w-6 sm:h-7 sm:w-7" />
              ))}
            </div>
          </motion.div>

          {/* Boutons de navigation */}
          <div className="flex gap-6 pt-10 justify-center md:justify-start">
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
        </div>
      </div>
    </div>
  );
};
