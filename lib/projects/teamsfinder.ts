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
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Supabase", "Ionic"],
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
      problem: "Les joueurs manquaient d'un outil fiable pour trouver des coéquipiers de leur niveau.",
      role: "Créateur et développeur full stack du projet (Web & Mobile).",
      result: "Plateforme live avec matchmaking algorithmique, événements (calendrier d’appels, notifications), blog, annonces et game review. Intégration Discord (accès aux channels exclusifs, webhooks d'annonces). Déjà 20 utilisateurs.",
    } : {
      problem: "Gamers lacked a reliable tool to find teammates of their skill level.",
      role: "Creator and full stack developer of the project (Web & Mobile).",
      result: "Live platform with algorithmic matchmaking, events (call calendar, notifications), blog, announcements, and game review. Discord integration (exclusive channel access, announcement webhooks). Already 20 users.",
    },
    architecture: {
      description:
        language === "fr"
          ? `<p>L'architecture de TeamsFinder repose sur <strong>trois piliers distincts</strong> conçus pour offrir une expérience fluide et interconnectée.</p>
<p><strong>1. Écosystème Client — Next.js & Ionic</strong><br/>
La plateforme est accessible via une interface web (Next.js) optimisée pour le SEO grâce au Server-Side Rendering, et via une application mobile (Ionic). Les deux interfaces partagent la même codebase React et s'abonnent aux mêmes flux de données en temps réel.</p>
<p><strong>2. Moteur de Matchmaking — Supabase & Edge Functions</strong><br/>
Le matchmaking est orchestré par des requêtes optimisées qui croisent instantanément les profils selon des critères stricts : jeu spécifique, niveau de compétence (tolérance de +/- 1 rang) et chevauchement des horaires de disponibilité. Les données sont sécurisées par Row Level Security (RLS). Dès qu'un match est trouvé, une notification temps réel est poussée via les WebSockets natifs de Supabase.</p>
<p><strong>3. Écosystème Discord — Webhooks & Gestion de rôles</strong><br/>
La plateforme est profondément liée à Discord pour fidéliser la communauté. Des webhooks automatisent la diffusion des annonces LFG (Looking For Group) en temps réel dans des salons dédiés. La gestion de rôles via l'API Discord restreint l'accès à des canaux exclusifs uniquement pour les membres vérifiés.</p>`
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
    codeSnippets: [
      {
        title: language === "fr" ? "Algorithme de Matchmaking" : "Matchmaking Algorithm",
        description:
          language === "fr"
            ? "Logique de backend (Edge Function) pour trouver des coéquipiers compatibles basés sur le jeu, le rang, la langue et la disponibilité."
            : "Backend logic (Edge Function) to find compatible teammates based on game, rank, language, and availability.",
        language: "typescript",
        category: "backend",
        code: `// Supabase Edge Function / API Route
export async function findMatch(userId: string, gameId: string) {
  // 1. Fetch user profile and preferences
  const { data: user } = await supabase
    .from('profiles')
    .select('rank, language, schedule')
    .eq('id', userId)
    .single();

  // 2. Query potential teammates with exact game match
  //    and rank proximity (e.g. +/- 1 rank level)
  const { data: candidates } = await supabase
    .from('profiles')
    .select('id, rank, language, reliability_score')
    .eq('game_id', gameId)
    .neq('id', userId)
    .gte('rank', user.rank - 1)
    .lte('rank', user.rank + 1)
    .in('language', [user.language, 'en'])
    .order('reliability_score', { ascending: false })
    .limit(10);

  // 3. Filter by overlapping schedules
  const matchedUsers = candidates.filter(candidate => 
    hasScheduleOverlap(user.schedule, candidate.schedule)
  );

  return matchedUsers;
}`,
      },
      {
        title: "Discord Webhook Integration",
        description:
          language === "fr"
            ? "Service backend pour pousser automatiquement les annonces de recherche de groupe (LFG) sur le serveur Discord."
            : "Backend service to automatically push Looking For Group (LFG) announcements to the Discord server.",
        language: "typescript",
        category: "backend",
        code: `export async function broadcastToDiscord(announcement: LfgPost) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  
  const embed = {
    title: \`🎮 Nouveau groupe pour \${announcement.game}\`,
    description: announcement.description,
    color: 0x5865F2, // Discord Blue
    fields: [
      { name: "Rang Requis", value: announcement.minRank, inline: true },
      { name: "Places", value: \`\${announcement.playersNeeded}/5\`, inline: true },
      { name: "Langue", value: announcement.language, inline: true }
    ],
    timestamp: new Date().toISOString()
  };

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ embeds: [embed] })
  });
}`,
      },
      {
        title: language === "fr" ? "Abonnements Temps Réel" : "Real-time Subscriptions",
        description:
          language === "fr"
            ? "Écoute des nouveaux messages et des notifications de matchmaking côté client avec le SDK Supabase."
            : "Listening for new messages and matchmaking notifications on the client side using the Supabase SDK.",
        language: "typescript",
        category: "frontend",
        code: `import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export function useMatchmakingNotifications(userId: string) {
  useEffect(() => {
    // Subscribe to new match events
    const channel = supabase
      .channel('match_notifications')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'matches',
          filter: \`user_id=eq.\${userId}\`
        },
        (payload) => {
          showNotification(
            "Nouveau Match !", 
            \`Un joueur correspondant à vos critères a été trouvé.\`
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);
}`,
      }
    ],
    gridSize: "md:col-span-2 lg:col-span-1",
    liveUrl: "https://www.theteamsfinder.com/en",
  };
}
