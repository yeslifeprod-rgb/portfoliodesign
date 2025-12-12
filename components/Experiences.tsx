"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLang } from "@/context/LangContext";
import dynamic from "next/dynamic";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiPrisma, SiMysql,
  SiDocker, SiGit, SiJest, SiCypress, SiFigma,
  SiFlutter, SiVercel, SiGithub, SiNotion,
  SiIonic, SiHtml5, SiCss3, SiJavascript, SiWordpress,
  SiXcode, SiAmazonwebservices
} from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";

// Mapping des skills vers leurs icônes et couleurs
const skillIcons: Record<string, { icon: React.ElementType; color: string }> = {
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Tailwind": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "NestJS": { icon: SiNestjs, color: "#E0234E" },
  "Prisma": { icon: SiPrisma, color: "#2D3748" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Git": { icon: SiGit, color: "#F05032" },
  "Jest": { icon: SiJest, color: "#C21325" },
  "Cypress": { icon: SiCypress, color: "#17202C" },
  "Figma": { icon: SiFigma, color: "#F24E1E" },
  "Flutter": { icon: SiFlutter, color: "#02569B" },
  "Vercel": { icon: SiVercel, color: "#000000" },
  "Github": { icon: SiGithub, color: "#181717" },
  "Notion": { icon: SiNotion, color: "#000000" },
  "Ionic": { icon: SiIonic, color: "#3880FF" },
  "HTML": { icon: SiHtml5, color: "#E34F26" },
  "CSS": { icon: SiCss3, color: "#1572B6" },
  "Javascript": { icon: SiJavascript, color: "#F7DF1E" },
  "Wordpress": { icon: SiWordpress, color: "#21759B" },
  "Supabase": { icon: RiSupabaseLine, color: "#3ECF8E" },
  "Xcode": { icon: SiXcode, color: "#147EFB" },
  "AWS": { icon: SiAmazonwebservices, color: "#FF9900" },
};

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
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "50px 0px",
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
            ? "Stagiaire Développeur Fullstack"
            : "Full Stack Developer Intern",
        company:
          language === "fr"
            ? "Num4 | Plateforme musicale où les artistes vendent leurs morceaux exclusifs - Plaine Images"
            : "Num4 | Music platform where artists sell their exclusive tracks - Plaine Images",
        years: "2025",
        description:
          language === "fr"
            ? [
                "Développement front et back en Next.js pour livrer une application web réactive et performante, améliorant l'accès aux contenus exclusifs",
                "Intervention sur la fonctionnalité de paiement iOS avec intégration de RevenueCat pour la gestion des achats in-app, synchronisation back-end (Postgres) et intégration front-end (Flutter/Next.js)",
                "Utilisation de Xcode pour tester et simuler l'application sur différents appareils iOS afin d'assurer sa stabilité et sa compatibilité",
                "Conception d'une landing page performante pour optimiser l'acquisition et la clarté du parcours utilisateur",
                "Collaboration directe avec le fondateur et le CTO, participation aux réflexions produit (UX/UI, parcours utilisateur) pour garantir une cohérence entre design et implémentation",
              ]
            : [
                "Developed front-end and back-end with Next.js to deliver a responsive, high-performance web app, improving access to exclusive content",
                "Implemented iOS payment functionality with RevenueCat integration for in-app purchases, back-end synchronization (Postgres) and front-end integration (Flutter/Next.js)",
                "Used Xcode to test and simulate the app on various iOS devices to ensure stability and compatibility",
                "Designed a high-performance landing page to optimize acquisition and user journey clarity",
                "Collaborated directly with the founder and CTO, participated in product discussions (UX/UI, user journey) to ensure consistency between design and implementation",
              ],
        skills: [
          "Next.js",
          "Flutter",
          "TypeScript",
          "React",
          "Figma",
          "Tailwind",
          "Vercel",
          "Prisma",
          "MLD",
          "MCD",
          "MPD",
          "UML",
          "AWS",
          "CI/CD",
          "Mobile",
          "UX/UI",
          "Github",
          "Xcode",
          "Ios",
          "RevenueCat",
          "Notion",
        ],
      },
      {
        id: 2,
        title:
          language === "fr"
            ? "NoteShare (Application éducative sécurisée)"
            : "NoteShare (Secure Educational App)",
        company: language === "fr" ? "Projet personnel" : "Personal Project",
        years: "2025",
        description:
          language === "fr"
            ? [
                "Développement d'une application de prise de notes sécurisée avec gestion des accès via access et refresh tokens et chiffrement des données sensibles (crypto.js, bcrypt) pour garantir la confidentialité",
                "Architecture et persistance avec Prisma et Supabase pour assurer une scalabilité et une gestion structurée des données",
                "Conception d'une interface moderne avec shadcn/ui offrant vue liste/grille et filtres par tags pour améliorer l'efficacité des utilisateurs",
              ]
            : [
                "Developed a secure note-taking app with access management via access and refresh tokens and encryption of sensitive data (crypto.js, bcrypt) to ensure confidentiality",
                "Architecture and persistence with Prisma and Supabase to ensure scalability and structured data management",
                "Designed a modern interface with shadcn/ui featuring list/grid views and tag filters to improve user efficiency",
              ],
        skills: [
          "Next.js",
          "Prisma",
          "Supabase",
          "Bcrypt",
          "shadcn/ui",
          "TypeScript",
          "Node.js",
          "Crypto.js",
        ],
      },
      {
        id: 3,
        title:
          language === "fr"
            ? "Concepteur Développeur d'Applications"
            : "Application Developer Designer",
        company: "ALT Incubateur",
        years: "2023 — 2024",
        description:
          language === "fr"
            ? [
                "Conception de la maquette et développement Front-end en React JS et mobile en Ionic pour une application open source de gestion extra-scolaire, assurant une expérience responsive sur différents devices",
                "Structuration de la base de données et développement Back-end en Node JS avec Prisma, JWT et bcrypt pour sécuriser l'authentification et les opérations CRUD",
                "Transition d'une architecture multicouche vers une architecture microservices avec NestJS et MySQL et intégration d'API pour améliorer la maintenabilité et la performance",
                "Mise en conteneur du back-end Node.js avec Docker pour assurer un environnement stable, reproductible et facile à déployer en équipe",
                "Travail en méthodologie Agile Scrum avec YouTrack pour le workflow et la priorisation des tâches, sprints, daily meetings et rétrospectives pour assurer des livraisons itératives et une amélioration continue",
                "Rédaction et exécution de tests automatisés avec Cypress et Jest pour renforcer la qualité du code et la fiabilité des livraisons",
                "🎓 Obtention du titre professionnel de Concepteur Développeur d'Applications (RNCP Bac +4)",
              ]
            : [
                "Designed mockups and developed Front-end with React JS and mobile with Ionic for an open source extracurricular management app, ensuring a responsive experience across devices",
                "Structured the database and developed Back-end with Node JS, Prisma, JWT and bcrypt to secure authentication and CRUD operations",
                "Transitioned from a multi-layer architecture to a microservices architecture with NestJS and MySQL, integrating APIs to improve maintainability and performance",
                "Containerized the Node.js back-end with Docker to ensure a stable, reproducible and easy-to-deploy environment for the team",
                "Worked in Agile Scrum methodology with YouTrack for workflow and task prioritization, sprints, daily meetings and retrospectives to ensure iterative deliveries and continuous improvement",
                "Wrote and executed automated tests with Cypress and Jest to strengthen code quality and delivery reliability",
                "🎓 Earned the professional title of Application Developer Designer (Level 6 - RNCP Bac +4)",
              ],
        skills: [
          "React",
          "NestJS",
          "Prisma",
          "MySQL",
          "TypeScript",
          "Bcrypt",
          "Ionic",
          "Node.js",
          "Docker",
          "Agile/Scrum",
          "YouTrack",
          "Cypress",
          "Jest",
          "JWT",
          "API REST",
          "UML",
        ],
      },
      {
        id: 4,
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
        id: 5,
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16 md:mb-32"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900">
            💻 {language === "fr" ? "Expériences" : "Experiences"}
          </h2>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-6 md:gap-8 lg:gap-16 items-start">
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
                preload="metadata"
                style={{ maxHeight: "350px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent" />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-2 md:left-4 top-0 bottom-0 w-[2px] bg-gray-200 z-0 overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full bg-blue-600 transition-all duration-200"
                style={{ height: `${progress * 100}%` }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 w-5 h-5 z-10"
                style={{ top: `calc(${progress * 100}% - 10px)` }}
              >
                <img
                  alt="progress orb"
                  className="w-full h-full animate-pulse"
                />
              </div>
            </div>

            <div
              ref={timelineRef}
              className="relative space-y-12 md:space-y-20 lg:space-y-32 pl-8 md:pl-[64px] lg:pl-[100px] z-10"
            >
              {experiences.map((exp, index) => (
                <MotionDiv
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="relative group"
                >
                  <div className="absolute left-[-4px] md:left-[-36px] lg:left-[-108px] top-3">
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
                    <MotionDiv
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <ul className="space-y-3 md:space-y-4">
                        {exp.description.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-3 md:space-x-4 text-gray-600 text-sm md:text-base leading-relaxed"
                          >
                            <span className="w-[3px] h-[3px] bg-blue-400 rounded-full mt-2.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </MotionDiv>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {exp.skills.map((skill) => {
                        const skillData = skillIcons[skill];
                        const Icon = skillData?.icon;
                        return (
                          <span
                            key={skill}
                            className="px-2 md:px-3 py-1 text-xs md:text-sm text-blue-600 border border-blue-200 rounded-full font-light hover:bg-blue-50 hover:border-blue-300 transition-colors duration-300 flex items-center gap-1.5"
                          >
                            {Icon && <Icon style={{ color: skillData.color }} className="w-3.5 h-3.5" />}
                            {skill}
                          </span>
                        );
                      })}
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
