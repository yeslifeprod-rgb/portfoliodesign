export function getEdukaMeta(language: string) {
  return {
    id: "eduka",
    name: "EDUKA",
    quote:
      language === "fr"
        ? "EDUKA est une application web conçue pour faciliter le covoiturage des enfants lors d'activités extra-scolaires. Les responsables peuvent y créer et gérer des groupes ainsi que des événements, tandis que les parents peuvent proposer ou rejoindre des trajets. L'application a été développée à distance par une équipe de 4 développeurs fullstack, avec un fort accent sur la sécurité des données des enfants."
        : "EDUKA is a web application designed to facilitate carpooling for children's extracurricular activities. Managers can create and manage groups and events, while parents can offer or join rides. The app was developed remotely by a team of four fullstack developers, with a strong focus on data and child safety.",
    designation:
      language === "fr"
        ? "ALT - Application de covoiturage extra-scolaire"
        : "ALT - Carpooling App for Kids' Activities",
    srcs: [
      "/assets/eduka/Eduka.webp",
      "/assets/eduka/eduka1.png",
      "/assets/eduka/eduka5.png",
    ],
    stack: [
      "Figma", "React", "Tailwind", "TypeScript", "Nest", "Git",
      "Vercel", "Prisma", "Mysql", "Cypress", "Jest", "Ionic", "MongoDB", "Docker",
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
    metrics:
      language === "fr"
        ? [
            { label: "Microservices NestJS", value: "4" },
            { label: "Score Lighthouse", value: "95+" },
            { label: "Tests Cypress + Jest", value: "E2E & Unit" },
            { label: "Conteneurisation", value: "Docker" },
          ]
        : [
            { label: "NestJS Microservices", value: "4" },
            { label: "Lighthouse Score", value: "95+" },
            { label: "Cypress + Jest Tests", value: "E2E & Unit" },
            { label: "Containerization", value: "Docker" },
          ],
    businessCase:
      language === "fr"
        ? {
            problem: "Parents perdant du temps à organiser les trajets extra-scolaires par SMS",
            role: "Développeur frontend React + tests E2E (Cypress/Jest)",
            result: "Application testée, titre CDA Bac+4 obtenu",
          }
        : {
            problem: "Parents wasting time organizing extracurricular trips via SMS",
            role: "Frontend React developer + E2E testing (Cypress/Jest)",
            result: "Tested application, CDA Bachelor+4 certification obtained",
          },
    gridSize: "md:col-span-2",
  };
}
