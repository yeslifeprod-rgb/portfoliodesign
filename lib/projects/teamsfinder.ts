import type { Project } from "./types";

export function getTeamsFinderProject(language: string): Project {
  return {
    id: "teamsfinder",
    quote:
      language === "fr"
        ? "Les joueurs perdaient du temps à chercher un coéquipier dans plusieurs communautés. TeamsFinder rassemble le jeu, le niveau et les disponibilités au même endroit."
        : "TeamsFinder is a platform that helps gamers find teammates for their favorite games. Search by game, skill level and availability to form the perfect team.",
    name: "TeamsFinder",
    designation:
      language === "fr"
        ? "Projet personnel — Plateforme de matchmaking gaming"
        : "Personal project — Gaming matchmaking platform",
    srcs: ["/assets/teamsfinder/teamsfinder.gif"],
    video: "/assets/teamsfinder/teamsfinder.mp4",
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Supabase", "Ionic", "Stripe"],
    story: language === "fr"
      ? {
          title: "Trouver le bon coéquipier plus simplement",
          paragraphs: [
            "Le besoin ne consistait pas seulement à créer des profils. Il fallait pouvoir trouver une personne disponible, sur le bon jeu et avec un niveau proche, sans passer par plusieurs espaces.",
            "J'ai construit une plateforme web et mobile où ces critères sont réunis dans une même recherche. Les utilisateurs peuvent ensuite échanger et organiser leur équipe au même endroit.",
            "TeamsFinder est aujourd'hui accessible en ligne, avec des événements, des notifications et un lien avec Discord. Plus de 50 utilisateurs l'ont déjà utilisée.",
          ],
        }
      : {
          title: "From scattered searches to teams that come together",
          paragraphs: [
            "Players already had communities, but not always the right teammate at the right time. The challenge was to cross game, skill level and availability without wasting time.",
            "I designed TeamsFinder as a web and mobile meeting point. Profiles can be filtered, matches use concrete criteria and conversations stay connected to the team search.",
            "The project grew from a matchmaking idea into a live platform with events, notifications and Discord integration. More than 50 users have already used it.",
          ],
        },
    gallery: [
      "/assets/teamsfinder/teamsfinder.gif",
    ],
    playstoreImages: [
      "/assets/teamsfinder/playstore/screenshot1.png",
      "/assets/teamsfinder/playstore/screenshot2.png",
    ],
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
    businessCase: language === "fr" ? {
      problem: "Les joueurs cherchaient leurs coéquipiers dans plusieurs espaces, sans filtre commun.",
      role: "Conception et développement de la plateforme web et mobile.",
      result: "Une recherche réunissant jeu, niveau et disponibilité, avec échanges, événements et intégration Discord. Plus de 50 utilisateurs.",
    } : {
      problem: "Gamers lacked a reliable tool to find teammates of their skill level.",
      role: "Creator and full stack developer of the project (Web & Mobile).",
      result: "Live platform with algorithmic matchmaking, events (call calendar, notifications), blog, announcements, and game review. Discord integration (exclusive channel access, announcement webhooks). Already +50 users.",
    },
    architecture: {
      description:
        language === "fr"
          ? `<p>TeamsFinder s'appuie sur <strong>trois parties qui travaillent ensemble</strong> : l'interface, le moteur de recherche et le lien avec Discord.</p>
<p><strong>1. Écosystème Client — Next.js & Ionic</strong><br/>
La plateforme est accessible via une interface web (Next.js) optimisée pour le SEO grâce au Server-Side Rendering, et via une application mobile (Ionic). Les deux interfaces partagent la même codebase React et s'abonnent aux mêmes flux de données en temps réel.</p>
<p><strong>2. Moteur de Matchmaking — Supabase & Edge Functions</strong><br/>
Le matchmaking est orchestré par des requêtes optimisées qui croisent instantanément les profils selon des critères stricts : jeu spécifique, niveau de compétence (tolérance de +/- 1 rang) et chevauchement des horaires de disponibilité. Les données sont sécurisées par Row Level Security (RLS). Dès qu'un match est trouvé, une notification temps réel est poussée via les WebSockets natifs de Supabase.</p>
<p><strong>3. Écosystème Discord — Webhooks & Gestion de rôles</strong><br/>
La plateforme est reliée à Discord pour diffuser les annonces LFG (Looking For Group) dans les salons prévus. La gestion des rôles par l'API Discord réserve certains canaux aux membres vérifiés.</p>`
          : `<p>TeamsFinder's architecture rests on <strong>three distinct pillars</strong> designed to offer a seamless and interconnected experience.</p>
<p><strong>1. Client Ecosystem — Next.js & Ionic</strong><br/>
The platform is accessible via a web interface (Next.js) optimized for SEO through Server-Side Rendering, and via a mobile application (Ionic). Both interfaces share the same React codebase and subscribe to the same real-time data streams.</p>
<p><strong>2. Matchmaking Engine — Supabase & Edge Functions</strong><br/>
Matchmaking is orchestrated by optimized queries that instantly cross-reference profiles based on strict criteria: specific game, skill level (tolerance of +/- 1 rank), and availability schedule overlap. Data is secured by Row Level Security (RLS). As soon as a match is found, a real-time notification is pushed via Supabase's native WebSockets.</p>
<p><strong>3. Discord Ecosystem — Webhooks & Role Management</strong><br/>
The platform is deeply linked to Discord to engage the community. Webhooks automate real-time broadcasting of LFG (Looking For Group) announcements into dedicated channels. Role management via the Discord API restricts access to exclusive channels for verified members only.</p>`,
      points:
        language === "fr"
          ? [
              "Frontend Unifié : Codebase React partagée entre le web (Next.js) et le mobile (Ionic).",
              "Temps Réel : Utilisation des subscriptions Supabase pour les notifications instantanées.",
              "Algorithmique : Filtrage multicritères (Jeu, Rang, Disponibilité) exécuté côté serveur.",
              "API Discord : Automatisation des Webhooks LFG (Looking For Group) avec embeds enrichis.",
              "Sécurité : Row Level Security (RLS) sur Supabase pour protéger les données privées des joueurs.",
            ]
          : [
              "Unified Frontend: React codebase shared between web (Next.js) and mobile (Ionic).",
              "Real-time: Use of Supabase subscriptions for instant notifications.",
              "Algorithmic: Multi-criteria filtering (Game, Rank, Availability) executed server-side.",
              "Discord API: Automation of LFG (Looking For Group) Webhooks with rich embeds.",
              "Security: Row Level Security (RLS) on Supabase to protect players' private data.",
            ],
    },
    gridSize: "md:col-span-2 lg:col-span-1",
    liveUrl: "https://www.theteamsfinder.com/en",
  };
}
