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
  { cat: "Front-End", items: "JavaScript - React - Vue.js - Next.js - TypeScript" },
  { cat: "Back-End & API", items: "Node.js - NestJS - GraphQL - API REST - Prisma" },
  { cat: "Mobile", items: "Ionic" },
  { cat: "Bases de données & Sécurité", items: "MySQL - PostgreSQL - MongoDB - Supabase - JWT - bcrypt - RGPD - OWASP - chiffrement - Merise" },
  { cat: "DevOps & Outils", items: "Docker - AWS - Git - CI/CD - Vercel - Railway" },
  { cat: "Qualité & Méthodes", items: "Jest - Cypress - Agile Scrum - YouTrack" }
];

export const languages = [
  {
    label: "Anglais",
    level: "B2",
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
      "Conçu et optimisé une interface web **Next.js** performante avec une forte attention **UX/UI** et conversion.",
      "Travail direct avec le **CEO/CTO** pour arbitrer les priorités produit, les choix d’interface et la livraison des fonctionnalités.",
      "Déployé l'intégration de **RevenueCat** avec **Xcode** pour sécuriser et fluidifier les achats in-app et les abonnements sur iOS.",
    ],
  },
  {
    period: "2023 – 2024",
    title: "ALT Incubateur (8 mois) | remote BZH",
    company:
      "EDUKA — App web/mobile de gestion d’activités pour enfants (sorties scolaires, extra-scolaires, cours privés). Équipe de 4 développeurs fullstack, travail à distance.",
    type: "",
    bullets: [
      "Conception maquette, développement **Front-end** (**React**) et mobile (**Ionic**) avec attention portée à l’**UX/UI**.",
      "Modélisation **MySQL**, développement **Back-end** : **Node.js**, **Prisma**, **API REST**, **JWT**, **bcrypt**, **DTO**, système de rôles (professeurs / parents).",
      "Architecture **microservices** avec **NestJS** et **Docker** ; **CRUD** complet ; sécurisation, chiffrement, conformité **RGPD** et prise en compte des recommandations **OWASP**.",
      "Rédaction de **documentation technique**, **revues de code** et tests automatisés (**Cypress**, **Jest**) au sein d'une **équipe de 4 développeurs** en **Agile** (**YouTrack**).",
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
      "Développement et **refonte de plateforme web** et **back-office** avec **Next.js**, **React**, **TypeScript** et **Supabase**.",
      "Conception et modélisation d’une base de données liée à un **catalogue produits** de +500 000 entrées (jeux, genres, plateformes).",
      "Mise en place et évolution d’une **API GraphQL** et de services **Node.js** pour supporter les briques produit : recherche, comptes, paiements et contenus.",
      "Intégration de paiements **Stripe** (e-commerce) et **SEO international** (i18n FR/EN/ES) avec publication Google **Play Store**.",
    ],
  },
];
