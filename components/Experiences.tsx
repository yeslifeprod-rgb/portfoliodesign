"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLang } from "@/context/LangContext";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });

const ExperienceSection = () => {
  const { language } = useLang();
  const { ref: inViewRef, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = timelineRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalHeight = el.offsetHeight;

      const scrolled = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (totalHeight + window.innerHeight)));
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = useMemo(
    () => [
      {
        id: 1,
        title: language === "fr" ? "Concepteur Développeur d'Applications" : "Application Developer Designer",
        company: "ALT Incubateur",
        years: "2023 — 2024",
        description:
          language === "fr"
            ? [
                "Développement frontend avec React.js et TypeScript",
                "Création d'une API REST avec NestJS",
                "Gestion de base de données avec Prisma et MySQL",
                "Implémentation de l'authentification JWT",
                "Développement de fonctionnalités en temps réel",
                "Tests unitaires et d'intégration",
                "🎓 Obtention du titre professionnel de Concepteur Développeur d’Applications (RNCP Bac +4)",
              ]
            : [
                "Frontend development with React.js and TypeScript",
                "Built a REST API using NestJS",
                "Database management with Prisma and MySQL",
                "Implemented JWT authentication",
                "Real-time feature development",
                "Unit and integration testing",
                "🎓 Earned the professional title of Application Developer Designer (Level 6 - RNCP Bac +4)",
              ],
        skills: ["React", "NestJS", "Prisma", "MySQL", "TypeScript", "Bcrypt", "MongoDB", "Git", "JWT", "API REST"],
      },
      {
        id: 2,
        title:
          language === "fr"
            ? "2023 | 1Formation – 1Job Nurserie (6 semaines) remote"
            : "2023 | 1Formation – 1Job Nursery (6 weeks) remote",
        company: "1Formation",
        years: "2023",
        description:
          language === "fr"
            ? [
                "Métiers informatiques et agilité.",
                "Développement Front et Web.",
                "Optimisation des performances",
                "Découverte du back-end.",
                "Gestion de données et administration.",
                "Ateliers : confiance en soi, leadership, gestion du temps et CV.",
                "Tests de code",
              ]
            : [
                "IT careers and agility.",
                "Frontend and web development.",
                "Performance optimization",
                "Backend discovery.",
                "Data management and administration.",
                "Workshops: self-confidence, leadership, time management and resume.",
                "Code tests",
              ],
        skills: ["HTML", "CSS", "Javascript", "UX/UI", "Wordpress"],
      },
      {
        id: 3,
        title:
          language === "fr"
            ? "Formation découverte des métiers du numériques O'clock (2 semaines) remote"
            : "Intro to digital careers - O'clock (2 weeks) remote",
        company: "O'clock",
        years: "2022",
        description:
          language === "fr"
            ? [
                "Découverte des métiers, Web designer, Dev Web, Cyber sécurité, Community manager",
                "Atelier sur les différents métiers sur plusieurs jours.",
              ]
            : [
                "Discovery of jobs: Web designer, Web Dev, Cybersecurity, Community manager",
                "Workshops on various tech jobs over several days.",
              ],
        skills: ["HTML", "CSS"],
      },
    ],
    [language]
  );

  return (
    <section
      ref={inViewRef}
      id="experience"
      className="min-h-screen py-12 md:py-24 relative bg-white font-['DM_Sans']"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-32"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900">
            💻 {language === "fr" ? "Expériences" : "Experiences"}
          </h2>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-8 lg:gap-16 items-start">
          {/* Vidéo à gauche */}
          <div className="lg:sticky lg:top-24 h-fit max-w-[280px] mx-auto mb-12 lg:mb-0">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <video
                src="../assets/Jobs.mp4"
                className="w-full h-auto object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                style={{ maxHeight: "350px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent" />
            </div>
          </div>

          {/* Timeline à droite */}
          <div className="relative">
            {/* Barre de progression */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200 z-0 overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full bg-blue-600 transition-all duration-200"
                style={{ height: `${progress * 100}%` }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 w-5 h-5 z-10"
                style={{ top: `calc(${progress * 100}% - 10px)` }}
              >
                <img
                  src="/icons/magic_orb.gif"
                  alt="progress orb"
                  className="w-full h-full animate-pulse"
                />
              </div>
            </div>

            {/* Timeline items */}
            <div
              ref={timelineRef}
              className="relative space-y-16 md:space-y-32 pl-12 md:pl-[64px] lg:pl-[100px] z-10"
            >
              {experiences.map((exp, index) => (
                <MotionDiv
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
                  className="relative group"
                >
                  <div className="absolute left-[-8px] md:left-[-36px] lg:left-[-108px] top-3">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full border-4 border-blue-500 bg-white transition-transform duration-300 group-hover:scale-125" />
                      <div className="absolute -inset-2 rounded-full border border-blue-200 opacity-0 group-hover:animate-ping" />
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-6 p-4 md:p-6 rounded-lg hover:bg-gray-50 transition-all duration-300">
                    <div className="text-sm text-blue-500 tracking-widest font-medium">{exp.years}</div>
                    <div>
                      <h3 className="text-lg md:text-xl text-gray-900 font-light">{exp.title}</h3>
                      <p className="text-blue-600 mt-1">{exp.company}</p>
                    </div>
                    <ul className="space-y-3 md:space-y-4">
                      {exp.description.map((point, i) => (
                        <li
                          key={i}
                          className={`flex items-start space-x-3 md:space-x-4 text-gray-600 text-sm md:text-base ${
                            point.includes("🎓") ? "relative" : ""
                          }`}
                        >
                          <span className="w-[3px] h-[3px] bg-blue-400 rounded-full mt-2.5 flex-shrink-0" />
                          <span
                            className={`font-light ${
                              point.includes("🎓") ? "text-blue-600 font-semibold" : ""
                            }`}
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 md:px-3 py-1 text-xs md:text-sm text-blue-600 border border-blue-200 rounded-full font-light hover:bg-blue-50 hover:border-blue-300 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
