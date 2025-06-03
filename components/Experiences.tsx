"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLang } from "@/context/LangContext";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

const ExperienceSection = () => {
  const { language } = useLang();
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = timelineRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalHeight = el.offsetHeight;
      const scrolled = Math.min(
        1,
        Math.max(
          0,
          (window.innerHeight - rect.top) / (totalHeight + window.innerHeight)
        )
      );
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
        skills: [
          "React",
          "NestJS",
          "Prisma",
          "MySQL",
          "TypeScript",
          "Bcrypt",
          "MongoDB",
          "Git",
          "JWT",
          "API REST",
          "UML",
        ],
      },
      {
        id: 2,
        title:
          language === "fr"
            ? "1Formation – 1Job Nurserie (6 semaines)"
            : "1Formation – 1Job Nursery (6 weeks)",
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
            ? "Formation découverte des métiers du numérique"
            : "Intro to digital careers",
        company: "O'clock",
        years: "2022",
        description:
          language === "fr"
            ? [
                "Découverte des métiers : Web designer, Développeur Web, Cybersécurité, Community manager",
                "Ateliers thématiques sur plusieurs jours",
              ]
            : [
                "Job discovery: Web designer, Web Dev, Cybersecurity, Community manager",
                "Workshops over several days",
              ],
        skills: ["HTML", "CSS"],
      },
    ],
    [language]
  );

  const extraExperiences = useMemo(
    () => [
      {
        title:
          language === "fr"
            ? "🚗 Permis de conduire — Lewis Hamilton sous stéréo"
            : "🚗 Driver's License — Lewis Hamilton vibes",
        company: language === "fr" ? "République Française" : "French Republic",
        years: language === "fr" ? "Mai 2022" : "May 2022",
        description:
          language === "fr"
            ? [
                "Je conduis comme Lewis Hamilton, pas comme Charles Leclerc sous pression dans un virage. 🏎️",
              ]
            : [
                "I drive like Lewis Hamilton, not like Charles Leclerc under pressure in a turn. 🏎️",
              ],
      },
      {
        title:
          language === "fr"
            ? "🎓 Bac Pro Gestion-Administration — Arc administratif"
            : "🎓 Baccalaureate in Management",
        company: language === "fr" ? "Lycée" : "High School",
        years: language === "fr" ? "Juillet 2019" : "July 2019",
        description:
          language === "fr"
            ? [
                "Des stages… en série. Certains dignes de The Office sans les caméras.",
                "Après seulement trois mois en Première, ma santé s’est gravement dégradée. J’ai dû interrompre l’année.",
                "Malgré le mépris de certains professeurs et un enseignement douteux, ils voulaient que je redouble.",
                "J’ai refusé. J’ai fait all-in comme au poker : pas de Première, passage direct au Bac.",
                "Comme dirait Mark Zuckerberg : « Le plus grand risque, c’est de ne prendre aucun risque. »",
                "Obtenu haut la main. 🏆",
              ]
            : [
                "Internships… on repeat. Some worthy of The Office, minus the cameras.",
                "After just one month in 11th grade, my health seriously declined. I had to interrupt the year.",
                "Despite contempt from some teachers and questionable teaching, they wanted me to repeat.",
                "I refused. I went all-in like in poker: skipped 11th grade, straight to the final exam.",
                "As Mark Zuckerberg said: “The biggest risk is not taking any risk.”",
                "Graduated with honors. 🏆",
              ],
      },
      {
        title:
          language === "fr"
            ? "🎓 Brevet des collèges — Évolution en Dracaufeu"
            : "🎓 Middle School Diploma — Charizard evolution arc",
        company:
          language === "fr" ? "Éducation Nationale" : "National Education",
        years: language === "fr" ? "Juillet 2016" : "July 2016",
        description:
          language === "fr"
            ? [
                "J’ai commencé en Salamèche, charbonné comme Reptincel… et j’ai terminé en Dracaufeu. 🐉",
              ]
            : [
                "Started as Charmander, grinded like Charmeleon… and evolved into Charizard. 🐉",
              ],
      },
    ],
    [language]
  );

  return (
    <section
      ref={inViewRef}
      id="experience"
      className="min-h-screen py-12 md:py-24 bg-white font-['DM_Sans']"
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
                preload="none"
                style={{ maxHeight: "350px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent" />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
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

            <div
              ref={timelineRef}
              className="relative space-y-16 md:space-y-32 pl-12 md:pl-[64px] lg:pl-[100px] z-10"
            >
              {experiences.map((exp, index) => (
                <MotionDiv
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  className="relative group"
                >
                  <div className="absolute left-[-8px] md:left-[-36px] lg:left-[-108px] top-3">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full border-4 border-blue-500 bg-white transition-transform duration-300 group-hover:scale-125" />
                      <div className="absolute -inset-2 rounded-full border border-blue-200 opacity-0 group-hover:animate-ping" />
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-6 p-4 md:p-6 rounded-lg hover:bg-gray-50 transition-all duration-300">
                    <div className="text-sm text-blue-500 tracking-widest font-medium">
                      {exp.years}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl text-gray-900 font-light">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 mt-1">{exp.company}</p>
                    </div>
                    <ul className="space-y-3 md:space-y-4">
                      {exp.description.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-3 md:space-x-4 text-gray-600 text-sm md:text-base"
                        >
                          <span className="w-[3px] h-[3px] bg-blue-400 rounded-full mt-2.5 flex-shrink-0" />
                          <span>{point}</span>
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

              <div className="flex justify-center mt-12">
                <button
                  onClick={openModal}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
                >
                  {language === "fr" ? "Voir plus" : "See more"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          >
            <MotionDiv
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl p-6 max-w-xl w-full relative overflow-y-auto max-h-[80vh]"
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                ✖
              </button>
              <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">
                {language === "fr"
                  ? "Mes premières victoires"
                  : "My first wins"}
              </h2>

              {extraExperiences.map((exp, i) => (
                <MotionDiv
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="mb-6 border-b border-gray-200 pb-4"
                >
                  <div className="text-sm text-blue-500 tracking-widest font-medium">
                    {exp.years}
                  </div>
                  <h3 className="text-lg font-light text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600">{exp.company}</p>
                  <ul className="mt-2 space-y-2">
                    {exp.description.map((line, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 text-sm flex items-start gap-2"
                      >
                        <span className="mt-1 w-[6px] h-[6px] bg-blue-400 rounded-full flex-shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </MotionDiv>
              ))}
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;
