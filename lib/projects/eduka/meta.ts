export function getEdukaMeta(language: string) {
  return {
    id: "eduka",
    name: "EDUKA",
    quote:
      language === "fr"
        ? "EDUKA est une application web et mobile conçue pour faciliter la création et la gestion d'activités pour les enfants, dans un cadre scolaire ou privé. Professeurs et parents peuvent créer, gérer et publier des annonces liées à des sorties scolaires, activités extra-scolaires, anniversaires ou cours privés. L'application repose sur un système d'école référente pour limiter l'accès aux utilisateurs concernés, et permet aussi des annonces privées indépendantes de tout établissement. Développée à distance par une équipe de 4 développeurs fullstack, avec une forte attention portée à la protection des données et au respect du RGPD."
        : "EDUKA is a web and mobile application designed to facilitate the creation and management of activities for children, in school or private settings. Teachers and parents can create, manage and publish announcements for school trips, extracurricular activities, birthdays or private lessons. The app relies on a reference school system to restrict access to relevant users, and also supports private announcements independent of any institution. Developed remotely by a team of 4 fullstack developers, with a strong focus on data protection and GDPR compliance.",
    designation:
      language === "fr"
        ? "ALT - Application de gestion d'activités pour enfants"
        : "ALT - Children's Activity Management App",
    srcs: [
      "/assets/eduka/Eduka.webp",
      "/assets/eduka/eduka1.png",
      "/assets/eduka/eduka5.png",
    ],
    stack: [
      "Figma", "React", "Tailwind", "TypeScript", "Nest", "Git",
      "Vercel", "Prisma", "Mysql", "Cypress", "Jest", "Ionic", "MongoDB", "Docker",
      "REST API",
    ],
    gallery: [
      "/assets/eduka/Eduka.webp",
      "/assets/eduka/eduka1.png",
      "/assets/eduka/eduka5.png",
    ],
    features:
      language === "fr"
        ? [
            "Système d'authentification sécurisé avec vérification d'email",
            "Conformité RGPD avec chiffrement des données sensibles (noms, prénoms, etc.)",
            "Logique métier stricte : un parent doit avoir au moins un enfant inscrit dans une école de référence",
            "Création et gestion de groupes pour organiser les covoiturages",
            "Calendrier interactif pour planifier les trajets",
            "Notifications en temps réel pour les parents et responsables",
            "Interface responsive adaptée mobile et desktop",
            "Système de messagerie intégré entre parents",
            "Dashboard admin pour gérer les utilisateurs et les événements",
            "Tests automatisés avec Cypress et Jest pour garantir la qualité",
          ]
        : [
            "Secure authentication system with email verification",
            "GDPR compliance with encryption of sensitive data (names, etc.)",
            "Strict business logic: a parent must have at least one child enrolled in a reference school",
            "Create and manage groups to organize carpools",
            "Interactive calendar to plan rides",
            "Real-time notifications for parents and managers",
            "Responsive interface for mobile and desktop",
            "Integrated messaging system between parents",
            "Admin dashboard to manage users and events",
            "Automated tests with Cypress and Jest to ensure quality",
          ],
    businessCase:
      language === "fr"
        ? {
            problem: "Professeurs et parents sans outil centralisé pour créer et gérer les activités scolaires et extra-scolaires des enfants",
            role: "Développeur frontend React + mobile Ionic + API REST NestJS + tests E2E (Cypress/Jest)",
            result: "Application web et mobile avec système de rôles, API REST, règles métier et tests automatisés.",
          }
        : {
            problem: "Teachers and parents lacking a centralized tool to create and manage children's school and extracurricular activities",
            role: "Frontend React + mobile Ionic developer + NestJS REST API + E2E testing (Cypress/Jest)",
            result: "Web and mobile app with role system, REST API, business rules and automated tests.",
          },
    githubUrls: {
      front: "https://github.com/yeslifeprod-rgb/Eduka-front",
      back: "https://github.com/yeslifeprod-rgb/Eduka-back",
    },
    gridSize: "md:col-span-2",
  };
}
