export function getEdukaDesign(language: string) {
  return {
    title:
      language === "fr"
        ? "Processus de Conception"
        : "Design Process",
    description:
      language === "fr"
        ? "EDUKA a été conçue selon une méthodologie complète combinant UX/UI design et planification projet pour garantir une expérience utilisateur optimale et une réalisation conforme aux objectifs."
        : "EDUKA was designed using a comprehensive methodology combining UX/UI design and project planning to ensure optimal user experience and delivery aligned with project goals.",
    methods: [
      {
        name: language === "fr" ? "Carte Mentale" : "Mind Map",
        description:
          language === "fr"
            ? "Structuration des idées et organisation des fonctionnalités principales de l'application pour définir le périmètre du projet."
            : "Structuring ideas and organizing main application features to define project scope.",
      },
      {
        name: "Epic Story & User Stories",
        description:
          language === "fr"
            ? "Décomposition des fonctionnalités en épics et user stories pour une planification agile. Chaque story décrit une fonctionnalité du point de vue de l'utilisateur avec critères d'acceptation clairs."
            : "Breaking down features into epics and user stories for agile planning. Each story describes a feature from the user's perspective with clear acceptance criteria.",
      },
      {
        name: language === "fr" ? "Wireframes" : "Wireframes",
        description:
          language === "fr"
            ? "Esquisse des interfaces en wireframes pour définir la structure et la disposition des éléments avant le design visuel."
            : "Sketching interfaces with wireframes to define structure and element layout before visual design.",
      },
      {
        name: language === "fr" ? "Méthode MERISE" : "MERISE Method",
        description:
          language === "fr"
            ? "Modélisation des données et flux de l'application avec les diagrammes de contexte et modèles conceptuels de données (MCD) pour assurer une architecture robuste."
            : "Modeling application data and flows with context diagrams and conceptual data models (CDM) to ensure robust architecture.",
      },
      {
        name: language === "fr" ? "Maquettes Figma" : "Figma Mockups",
        description:
          language === "fr"
            ? "Conception détaillée des interfaces dans Figma avec design system, composants réutilisables, et prototypage interactif pour valider l'expérience utilisateur."
            : "Detailed interface design in Figma with design system, reusable components, and interactive prototyping to validate user experience.",
      },
    ],
  };
}
