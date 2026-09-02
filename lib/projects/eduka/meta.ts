export function getEdukaMeta(language: string) {
  return {
    id: "eduka",
    name: "EDUKA",
    quote:
      language === "fr"
        ? "EDUKA réunit les activités scolaires et extrascolaires au même endroit. Parents et enseignants peuvent publier une activité, organiser les trajets et échanger dans un cadre clair."
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
    story: language === "fr"
      ? {
          title: "Organiser les activités au même endroit",
          paragraphs: [
            "Les activités et les échanges passaient par plusieurs canaux. Il fallait un espace partagé, mais aussi des règles simples pour savoir qui peut voir et rejoindre une activité.",
            "Dans une équipe distante de quatre développeurs, j'ai travaillé sur l'interface React, l'application Ionic, l'API NestJS et les tests. Les rôles et les accès ont été traités comme des règles du produit, pas comme un détail ajouté à la fin.",
            "EDUKA permet ainsi de publier une activité, créer un groupe et suivre les échanges sur web et mobile, avec une base testée.",
          ],
        }
      : {
          title: "Giving children's activities a shared framework",
          paragraphs: [
            "Parents and teachers needed a shared space for trips, activities and communication. The product had to stay simple while enforcing access rules and data protection.",
            "As part of a remote team of four full-stack developers, I worked on the React interface, Ionic mobile app, NestJS API and tests.",
            "EDUKA provides one entry point on web and mobile to publish activities, create groups and follow conversations on a tested foundation.",
        ],
      },
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
            "Tests automatisés avec Cypress et Jest pour vérifier les parcours",
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
            problem: "Les activités et les échanges étaient répartis entre plusieurs canaux.",
            role: "Interface React, application Ionic, API NestJS et tests au sein d'une équipe de quatre.",
            result: "Un espace web et mobile pour publier, organiser et suivre les activités avec des accès définis.",
          }
        : {
            problem: "Teachers and parents lacking a centralized tool to create and manage children's school and extracurricular activities",
            role: "Frontend React + mobile Ionic developer + NestJS REST API + E2E testing (Cypress/Jest)",
            result: "Full web and mobile app with role system, GDPR compliance, REST API and an automated test suite, delivered by a remote team of 4 developers.",
          },
    githubUrls: {
      front: "https://github.com/yeslifeprod-rgb/Eduka-front",
      back: "https://github.com/yeslifeprod-rgb/Eduka-back",
    },
    gridSize: "md:col-span-2",
  };
}
