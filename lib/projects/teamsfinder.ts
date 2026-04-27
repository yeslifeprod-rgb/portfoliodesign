import type { Project } from "./types";

export function getTeamsFinderProject(language: string): Project {
  return {
    id: "teamsfinder",
    quote:
      language === "fr"
        ? "TeamsFinder est une plateforme qui permet aux joueurs de trouver des coéquipiers pour leurs jeux favoris. Recherche par jeu, niveau et disponibilité pour former l'équipe idéale."
        : "TeamsFinder is a platform that helps gamers find teammates for their favorite games. Search by game, skill level and availability to form the perfect team.",
    name: "TeamsFinder",
    designation:
      language === "fr"
        ? "Projet personnel — Plateforme de matchmaking gaming"
        : "Personal project — Gaming matchmaking platform",
    srcs: ["/assets/teamsfinder/teamsfinder.gif"],
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Supabase"],
    gallery: ["/assets/teamsfinder/teamsfinder.gif"],
    features: language === "fr" ? [
      "Recherche de coéquipiers par jeu et niveau",
      "Système de profils joueurs",
      "Filtres avancés (disponibilité, langue, rang)",
      "Messagerie intégrée",
    ] : [
      "Teammate search by game and skill level",
      "Player profile system",
      "Advanced filters (availability, language, rank)",
      "Built-in messaging",
    ],
    metrics: language === "fr" ? [
      { label: "Utilisateurs", value: "20 inscrits" },
      { label: "Revenu", value: " 2 ventes" },
      { label: "Matchmaking", value: "Algorithmique" },

    ] : [
      { label: "Users", value: "20 registered" },
      { label: "Revenue", value: "2 sales" },
      { label: "Matchmaking", value: "Algorithmic" },
    ],
    businessCase: language === "fr" ? {
      problem: "Gamers sans outil efficace pour trouver des coéquipiers",
      role: "Développeur full stack Next.js + Supabase",
      result: "Plateforme live avec matchmaking algorithmique",
    } : {
      problem: "Gamers lacking an efficient tool to find teammates",
      role: "Full stack developer Next.js + Supabase",
      result: "Live platform with algorithmic matchmaking",
    },
    gridSize: "md:col-span-2 lg:col-span-1",
    liveUrl: "https://www.theteamsfinder.com/en",
  };
}
