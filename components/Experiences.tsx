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
  const { ref: inViewRef, inView } = useInView({ threshold: 0.2, triggerOnce: true });

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
      const scrolled = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (totalHeight + window.innerHeight)));
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = useMemo(() => [
    {
      id: 1,
      title: language === "fr" ? "Concepteur Développeur d'Applications" : "Application Developer Designer",
      company: "ALT Incubateur",
      years: "2023 — 2024",
      description: language === "fr"
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
      title: language === "fr" ? "1Formation – 1Job Nurserie (6 semaines)" : "1Formation – 1Job Nursery (6 weeks)",
      company: "1Formation",
      years: "2023",
      description: language === "fr"
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
      title: language === "fr" ? "Formation découverte des métiers du numérique" : "Intro to digital careers",
      company: "O'clock",
      years: "2022",
      description: language === "fr"
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
  ], [language]);

  const extraExperiences = useMemo(() => [
    {
      title: language === "fr" ? "🚗 Permis de conduire — Lewis Hamilton sous stéréo" : "🚗 Driver's License — Lewis Hamilton vibes",
      company: language === "fr" ? "République Française" : "French Republic",
      years: language === "fr" ? "Mai 2022" : "May 2022",
      description: language === "fr"
        ? ["Je conduis comme Lewis Hamilton, pas comme Charles Leclerc sous pression dans un virage. 🏎️"]
        : ["I drive like Lewis Hamilton, not like Charles Leclerc under pressure in a turn. 🏎️"],
    },
    {
      title: language === "fr" ? "🎓 Bac Pro Gestion-Administration — Arc administratif" : "🎓 Baccalaureate in Management",
      company: language === "fr" ? "Lycée" : "High School",
      years: language === "fr" ? "Juillet 2019" : "July 2019",
      description: language === "fr"
        ? [
            "Des stages… en série. Certains dignes de The Office sans les caméras.",
            "Après seulement un mois en Première, ma santé s’est gravement dégradée. J’ai dû interrompre l’année.",
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
      title: language === "fr" ? "🎓 Brevet des collèges — Évolution en Dracaufeu" : "🎓 Middle School Diploma — Charizard evolution arc",
      company: language === "fr" ? "Éducation Nationale" : "National Education",
      years: language === "fr" ? "Juillet 2016" : "July 2016",
      description: language === "fr"
        ? ["J’ai commencé en Salamèche, charbonné comme Reptincel… et j’ai terminé en Dracaufeu. 🐉"]
        : ["Started as Charmander, grinded like Charmeleon… and evolved into Charizard. 🐉"],
    },
  ], [language]);

  return (
    // Ton JSX reste inchangé et correct, pas besoin de le recopier ici
    <></>
  );
};

export default ExperienceSection;
