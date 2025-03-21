"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "@/context/LangContext";
import { useMemo } from "react";

const ExperienceSection = () => {
  const { language } = useLang();
  const { ref: inViewRef, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const experiences = useMemo(() => [
    {
      id: 1,
      title:
        language === "fr"
          ? "Concepteur Développeur d'Applications"
          : "Application Developer Designer",
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
            ]
          : [
              "Frontend development with React.js and TypeScript",
              "Built a REST API using NestJS",
              "Database management with Prisma and MySQL",
              "Implemented JWT authentication",
              "Real-time feature development",
              "Unit and integration testing",
            ],
      skills: ["React", "NestJS", "Prisma", "MySQL", "TypeScript", "Bcrypt", "MongoDB", "Git", "JWT", "API REST"]
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
              "Tests de code"
            ]
          : [
              "IT careers and agility.",
              "Frontend and web development.",
              "Performance optimization",
              "Backend discovery.",
              "Data management and administration.",
              "Workshops: self-confidence, leadership, time management and resume.",
              "Code tests"
            ],
      skills: ["HTML", "CSS", "Javascript", "UX/UI", "Wordpress"]
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
      skills: ["HTML", "CSS"]
    }
  ], [language]);

  return (
    <section
      ref={inViewRef}
      id="experience"
      className="min-h-screen py-12 md:py-24 relative bg-white font-['DM_Sans']"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-32"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900">
            💻 {language === "fr" ? "Expériences" : "Experiences"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-8 lg:gap-16 items-start">
          {/* Vidéo */}
          <div className="lg:sticky lg:top-24 h-fit max-w-[280px] mx-auto mb-12 lg:mb-0">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <video
                src="../assets/Jobs.mp4"
                className="w-full h-auto object-cover"
                autoPlay
                loop
                muted
                playsInline
                style={{ maxHeight: "350px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent" />
            </div>
          </div>

          {/* Liste des expériences */}
          <div className="relative">
            {/* Ligne pour desktop */}
            <svg className="absolute left-0 h-full w-[100px] hidden lg:block" viewBox="0 0 100 800" fill="none">
              <path
                d="M50 0C30 200 70 400 30 600C70 800 50 800 50 800"
                stroke="url(#blue-gradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="800">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Ligne pour mobile */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/20 via-blue-500 to-blue-500/20 lg:hidden" />

            <div className="relative space-y-16 md:space-y-32 pl-12 lg:pl-[100px]">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
                  className="relative group"
                >
                  {/* Point */}
                  <div className="absolute left-[-8px] lg:left-[-108px] top-3">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full border-4 border-blue-500 bg-white transition-transform duration-300 group-hover:scale-125" />
                      <div className="absolute -inset-2 rounded-full border border-blue-200 opacity-0 group-hover:animate-ping" />
                    </div>
                  </div>

                  {/* Contenu */}
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
                          className="flex items-start space-x-3 md:space-x-4 text-gray-600 text-sm md:text-base"
                        >
                          <span className="w-[3px] h-[3px] bg-blue-400 rounded-full mt-2.5 flex-shrink-0" />
                          <span className="font-light">{point}</span>
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
