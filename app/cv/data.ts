import {
  SiCypress, SiDocker, SiFigma, SiGit, SiIonic, SiJest,
  SiNextdotjs, SiNodedotjs, SiPrisma, SiReact, SiSupabase,
  SiTailwindcss, SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type Tech = { name: string; icon: IconType; color: string };

export const STACK: Record<string, Tech[]> = {
  Frontend: [
    { name: "Next.js",    icon: SiNextdotjs,  color: "#171717" },
    { name: "React",      icon: SiReact,       color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript,  color: "#3178C6" },
    { name: "Tailwind",   icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Ionic",      icon: SiIonic,       color: "#3880FF" },
  ],
  Backend: [
    { name: "Node.js",  icon: SiNodedotjs, color: "#339933" },
    { name: "Prisma",   icon: SiPrisma,    color: "#0ea5e9" },
    { name: "Supabase", icon: SiSupabase,  color: "#3ECF8E" },
  ],
  Outils: [
    { name: "Docker",  icon: SiDocker,  color: "#2496ED" },
    { name: "Git",     icon: SiGit,     color: "#F05032" },
    { name: "Figma",   icon: SiFigma,   color: "#F24E1E" },
    { name: "Jest",    icon: SiJest,    color: "#C21325" },
    { name: "Cypress", icon: SiCypress, color: "#1B9C85" },
  ],
};

export const CV_EXPERIENCES = [
  {
    year: "Jan. 2026",
    company: "TeamsFinder",
    role: "Projet personnel · SaaS matchmaking gaming en production",
    bullets: [
      "Conçu et déployé un SaaS complet en autonomie — de la BDD à l'UI",
      "Moteur de matching par jeu, niveau et langue (Prisma + Supabase)",
      "i18n, Schema.org, sitemap — score Lighthouse 100 (benhouss.site)",
    ],
  },
  {
    year: "2025",
    company: "Num4 — Stage",
    role: "Mission 1 mois · Plaine Images · Startup musicale",
    bullets: [
      "Landing page Next.js orientée conversion, déployée en production",
      "Intégration RevenueCat — abonnements & achats in-app iOS / Android",
    ],
  },
  {
    year: "2023–2024",
    company: "ALT Incubateur",
    role: "Développeur Full Stack en Immersion Professionnelle · 8 mois · Remote",
    bullets: [
      "Interfaces React et applications mobiles Ionic en contexte Agile Scrum",
      "API REST sécurisées (Node.js · Prisma · JWT) containerisées sous Docker",
      "Tests automatisés Jest et Cypress — couverture de bout en bout",
    ],
  },
];

export const CV_FORMATIONS = [
  {
    year: "2023–2024",
    school: "ALT Incubateur",
    diploma: "Titre Pro. Concepteur d'Applications Web & Mobile — Bac+4",
    place: "Immersion Professionnelle · projets livrés en production",
  },
  {
    year: "2022",
    school: "O'Clock",
    diploma: "Découverte des métiers du numérique",
    place: "Remote",
  },
];

export const SOFT_SKILLS = [
  "Livraison autonome",
  "Collaboration CEO/CTO",
  "Agile Scrum",
  "Qualité & tests",
];

export const LANGUES = [
  { flag: "🇫🇷", lang: "Français", level: "Natif" },
  { flag: "🇬🇧", lang: "Anglais",  level: "B1" },
];

export const LOISIRS = ["🎵 Musique", "🎮 Jeux vidéo", "⚽ Football"];
