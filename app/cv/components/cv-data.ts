export const A4_W = 794;
export const A4_H = 1123;

export const TEXT_DARK = "#0f172a";
export const TEXT_MID = "#374151";
export const TEXT_LIGHT = "#6b7280";
export const BORDER = "#e5e7eb";
export const BLUE_1 = "#1d4ed8";
export const BLUE_2 = "#2563eb";
export const BLUE_3 = "#0ea5e9";
export const GRAD_H = `linear-gradient(135deg, ${BLUE_1} 0%, ${BLUE_2} 55%, ${BLUE_3} 100%)`;

export const stackATS = [
  { cat: "Front-end", items: "React - Next.js - Vue.js - TypeScript - Ionic - Tailwind CSS" },
  { cat: "Back-end", items: "Node.js - NestJS - Express - API REST - Prisma" },
  { cat: "Bases de données", items: "MySQL - PostgreSQL - MongoDB - Supabase - Merise" },
  { cat: "DevOps & Cloud", items: "Docker - AWS EC2 - Git - CI/CD" },
  { cat: "Qualité & IA", items: "Jest - Cypress - Claude Code - Codex" },
  { cat: "Sécurité & Méthodes", items: "JWT - bcrypt - RGPD - OWASP - Agile Scrum - YouTrack" }
];

export const languages = [
  {
    label: "Anglais",
    level: "B1",
  },
];

export const hobbies = ["Musique", "Jeux vidéo", "Football"];

export const experiences = [
  {
    period: "2025",
    title: "Stage Num4 (1 mois) | Plaine Images",
    company:
      "Num4 est une plateforme musicale où les artistes vendent leurs musiques exclusives à leurs auditeurs.",
    companyLink: "https://num4-lp.vercel.app",
    type: "",
    bullets: [
      "Concevoir le wireframe et la maquette, puis refondre et développer la landing page avec **Next.js** en l’optimisant pour la performance, le référencement et la présentation du produit.",
      "Échanger directement avec le **CEO/CTO** pour définir les priorités produit et les choix d'interface.",
      "Intégrer **RevenueCat** et tester les achats in-app avec **Xcode** pour les abonnements iOS.",
    ],
  },
  {
    period: "2023 – 2024",
    title: "ALT Incubateur (8 mois) | remote BZH",
    company:
      "EDUKA — App web/mobile de gestion d’activités pour enfants (sorties scolaires, extra-scolaires, cours privés). Équipe de 4 développeurs fullstack, travail à distance.",
    type: "",
    bullets: [
      "Concevoir la maquette puis développer des composants front **React** et l'application mobile **Ionic** au sein d'une équipe de 4 développeurs.",
      "Développer le back-end **Node.js** avec **Prisma**, **MySQL** et **API REST**, en intégrant l’authentification **JWT/bcrypt** et la gestion des rôles.",
      "Appliquer les principes **RGPD** et les bonnes pratiques **OWASP**, puis participer à la conception d’une architecture **multicouche** frontend/backend avec **NestJS**, conteneurisée avec **Docker** et déployée sur **AWS EC2**.",
      "Concevoir des bases de données avec la méthode **Merise** et ses modèles **MCD, MLD et MPD**, à partir des besoins fonctionnels et techniques.",
      "Écrire des tests **Cypress/Jest**, contribuer à la **CI/CD**, à la documentation technique et aux **code reviews** dans un cadre **Agile** suivi avec **YouTrack**.",
    ],
  },
];

export const projets = [
  {
    period: "2026 – présent",
    title: "Projet personnel | Teamsfinder",
    company:
      "SaaS gaming connecté à un catalogue de +500 000 jeux — +50 utilisateurs actifs",
    companyLink: "https://theteamsfinder.com/en",
    type: "",
    bullets: [
      "Faire évoluer la plateforme web et le **back-office** en production avec **Next.js**, **React**, **TypeScript** et **Supabase**.",
      "Concevoir la base de données et intégrer un catalogue de plus de **500 000 jeux** via une API.",
      "Mettre en place un **webhook Discord** et une tâche planifiée pour envoyer automatiquement les annonces du site vers un salon dédié.",
      "Intégrer les paiements **Stripe** et le **SEO international** en français, anglais et espagnol.",
    ],
  },
];
