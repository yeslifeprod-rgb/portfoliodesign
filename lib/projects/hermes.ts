import type { Project } from "./types";

export function getHermesProject(language: string): Project {
  const isFrench = language === "fr";

  return {
    id: "hermes",
    quote: isFrench
      ? "Un espace de travail personnel, installé sur un VPS Ubuntu pour avancer avec Hermes, Obsidian et mes cours."
      : "An Ubuntu VPS workspace for Hermes, Obsidian and course preparation.",
    name: "Hermes Agent",
    designation: isFrench
      ? "VPS — Hermes et Obsidian"
      : "VPS — Hermes and Obsidian",
    srcs: ["/assets/hermes/hermes-agent.gif"],
    video: "/assets/hermes/hermes-agent.mp4",
    gallery: ["/assets/hermes/hermes-agent.gif"],
    stack: ["Ubuntu", "VPS", "Hermes Agent", "Obsidian"],
    story: isFrench
      ? {
          title: "Un environnement qui suit le projet",
          paragraphs: [
            "Le point de départ était simple : ne plus disperser le travail entre plusieurs outils et plusieurs machines. J'avais besoin d'un espace accessible, stable et suffisamment clair pour retrouver mes ressources et continuer à avancer.",
            "J'ai installé Hermes sur un VPS Ubuntu, puis organisé l'environnement autour d'Obsidian et de la création de cours. Le serveur devient ainsi un point de travail unique : les idées sont structurées, les contenus préparés et les tâches peuvent reprendre sans repartir de zéro.",
            "Le résultat n'est pas seulement une installation technique. C'est une base de travail durable, pensée pour accompagner les prochaines étapes du projet et garder une continuité entre préparation, documentation et mise en œuvre.",
          ],
        }
      : {
          title: "An environment that follows the project",
          paragraphs: [
            "The starting point was simple: stop scattering the work across multiple tools and machines. I needed a workspace that was accessible, stable and clear enough to keep moving without losing context.",
            "I installed Hermes on an Ubuntu VPS and organized the environment around Obsidian and course creation. The server became a single workspace: ideas are structured, content is prepared and tasks can resume without starting over.",
            "The result is more than a technical installation. It is a durable workspace designed to support the next steps of the project and maintain continuity between preparation, documentation and delivery.",
          ],
        },
    features: isFrench
      ? [
          "VPS Ubuntu",
          "Hermes Agent installé",
          "Ressources Obsidian",
          "Préparation de cours",
        ]
      : [
          "Ubuntu VPS",
          "Hermes Agent installed",
          "Obsidian resources",
          "Course preparation",
        ],
    architecture: {
      description: isFrench
        ? "Le VPS regroupe Hermes Agent, Obsidian et la préparation de cours."
        : "The VPS brings together Hermes Agent, Obsidian and course preparation.",
      points: isFrench
        ? [
            "VPS Ubuntu pour le travail",
            "Hermes Agent installé",
            "Ressources dans Obsidian",
            "Cours préparés au même endroit",
          ]
        : [
            "Ubuntu VPS for daily work",
            "Hermes Agent installed",
            "Resources in Obsidian",
            "Courses prepared in one place",
          ],
    },
    metrics: isFrench
      ? [
          { label: "Environnement", value: "Ubuntu" },
          { label: "Infrastructure", value: "VPS" },
          { label: "Projet", value: "Hermes" },
        ]
      : [
          { label: "Environment", value: "Ubuntu" },
          { label: "Infrastructure", value: "VPS" },
          { label: "Project", value: "Hermes" },
        ],
    businessCase: isFrench
      ? {
          problem: "Un travail réparti entre plusieurs outils, difficile à retrouver et à reprendre.",
          role: "Installer Hermes sur Ubuntu, structurer le VPS et organiser les ressources dans Obsidian.",
          result: "Un environnement unique pour documenter, créer des cours et faire avancer le projet sereinement.",
        }
      : {
          problem: "Work was spread across several tools, making it difficult to find and resume.",
          role: "Install Hermes on Ubuntu, structure the VPS and organize resources in Obsidian.",
          result: "One workspace to document, create courses and move the project forward with confidence.",
        },
  };
}
