export function getEdukaFrontendSnippets(language: string) {
  return [
    // [1] Role-based routing
    {
      title:
        language === "fr"
          ? "Pourquoi un routing basé sur les rôles dès le départ"
          : "Why role-based routing from day one",
      description:
        language === "fr"
          ? "Problème : 3 types d'utilisateurs (parents, écoles, enseignants) avec des parcours totalement différents. Un parent ne doit jamais voir le dashboard admin d'une école. Choix : routing conditionnel avec guards par rôle intégrés à react-router-dom. Résultat : zéro fuite d'accès signalée en prod, onboarding simplifié pour chaque profil."
          : "Problem: 3 user types (parents, schools, teachers) with completely different journeys. A parent should never see a school's admin dashboard. Choice: conditional routing with role-based guards built into react-router-dom. Result: zero access leaks reported in prod, simplified onboarding per profile.",
      category: "frontend" as const,
      image: "/assets/eduka/front-end/frontend-architecture.png",
    },

    // [2] 3-step deletion flow
    {
      title:
        language === "fr"
          ? "Pourquoi une suppression en 3 étapes pour protéger les données enfants"
          : "Why a 3-step deletion flow to protect children's data",
      description:
        language === "fr"
          ? "Problème : les données d'enfants sont sensibles (RGPD). Une suppression accidentelle de profil parent supprime aussi les données de trajet des enfants. Choix : flux en 3 écrans (formulaire, confirmation modale, feedback visuel) pour forcer l'intention. Résultat : zéro suppression accidentelle signalée, conformité RGPD respectée."
          : "Problem: children's data is sensitive (GDPR). An accidental parent profile deletion also removes children's ride data. Choice: 3-screen flow (form, confirmation modal, visual feedback) to force intent. Result: zero accidental deletions reported, GDPR compliance maintained.",
      category: "frontend" as const,
      image: "/assets/eduka/front-end/wireframe-front-end.png",
    },

    // [3] React + Vite vs Next.js
    {
      title:
        language === "fr"
          ? "Pourquoi React + Vite plutôt que Next.js pour ce projet"
          : "Why React + Vite instead of Next.js for this project",
      description:
        language === "fr"
          ? "Problème : l'app est un SPA privé (derrière authentification), pas un site public. Le SSR de Next.js n'apporte rien ici et complexifie le déploiement. Choix : React + Vite pour le HMR instantané en dev, Tailwind pour la vélocité UI dans une équipe de 4, Formik + Yup pour la validation car les formulaires d'inscription parent-enfant sont complexes. Résultat : temps de build 3x plus rapide qu'un CRA, onboarding dev simplifié."
          : "Problem: the app is a private SPA (behind auth), not a public site. Next.js SSR adds no value here and complicates deployment. Choice: React + Vite for instant HMR in dev, Tailwind for UI velocity in a 4-person team, Formik + Yup for validation because parent-child registration forms are complex. Result: build time 3x faster than CRA, simplified dev onboarding.",
      category: "frontend" as const,
      image: "/assets/eduka/front-end/Front-end.png",
    },

    // [4] Strict TypeScript typing
    {
      title:
        language === "fr"
          ? "Comment le typage strict a éliminé une classe entière de bugs"
          : "How strict typing eliminated an entire class of bugs",
      description:
        language === "fr"
          ? "Problème : en JS vanilla, un champ 'birthday' envoyé comme string au lieu de Date causait des erreurs silencieuses dans le calcul d'âge des enfants. Choix : interfaces TypeScript strictes partagées entre front et back. Résultat : les erreurs de format sont détectées à la compilation, pas en production. Les 4 devs de l'équipe travaillent avec le même contrat de données."
          : "Problem: in vanilla JS, a 'birthday' field sent as string instead of Date caused silent errors in children's age calculation. Choice: strict TypeScript interfaces shared between front and back. Result: format errors caught at compile time, not in production. All 4 team devs work with the same data contract.",
      category: "frontend" as const,
      image: "/assets/eduka/front-end/Front-end-TypeScript.png",
    },

    // [5] Discipline cap client-side
    {
      title:
        language === "fr"
          ? "Pourquoi limiter à 3 disciplines et gérer ça côté front"
          : "Why cap at 3 disciplines and handle it client-side",
      description:
        language === "fr"
          ? "Problème : sans limite, certains parents sélectionnaient 8+ disciplines, rendant le matching covoiturage impossible (trop de combinaisons). Choix : limite de 3 disciplines avec feedback immédiat côté front (pas d'attente serveur). La validation est dupliquée côté back pour la sécurité. Résultat : les groupes de covoiturage sont plus cohérents, le taux de matching a augmenté."
          : "Problem: without a limit, some parents selected 8+ disciplines, making carpool matching impossible (too many combinations). Choice: cap at 3 disciplines with instant client-side feedback (no server wait). Validation is duplicated server-side for security. Result: carpool groups are more cohesive, matching rate increased.",
      category: "frontend" as const,
      image: "/assets/eduka/front-end/Front-end-modal.png",
    },
  ];
}
