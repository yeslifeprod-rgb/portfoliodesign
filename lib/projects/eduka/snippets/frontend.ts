export function getEdukaFrontendSnippets(language: string) {
  return [
    // [1] Role-based routing
    {
      title:
        language === "fr"
          ? "Routing basé sur les rôles — Zéro fuite d'accès en prod"
          : "Role-based routing — Zero access leaks in prod",
      description:
        language === "fr"
          ? "Problème : 3 types d'utilisateurs (parents, écoles, enseignants) avec des parcours totalement différents. Un parent ne doit jamais voir le dashboard admin d'une école. Solution : routing conditionnel avec guards par rôle intégrés à react-router-dom. Chaque route privée vérifie le rôle via le token JWT avant le rendu. Résultat : zéro fuite d'accès signalée en production, onboarding simplifié pour chaque profil."
          : "Problem: 3 user types (parents, schools, teachers) with completely different journeys. A parent should never see a school's admin dashboard. Solution: conditional routing with role-based guards built into react-router-dom. Each private route checks the role via the JWT token before rendering. Result: zero access leaks reported in production, simplified onboarding per profile.",
      code: "",
      language: "typescript",
      category: "frontend" as const,
      image: "/assets/eduka/front-end/frontend-architecture.png",
    },

    // [2] 3-step deletion flow
    {
      title:
        language === "fr"
          ? "Suppression en 3 étapes — Protection RGPD des données enfants"
          : "3-step deletion flow — GDPR protection for children's data",
      description:
        language === "fr"
          ? "Problème : les données d'enfants sont sensibles (RGPD). Une suppression accidentelle de profil parent supprime aussi toutes les annonces et activités associées aux enfants. Solution : flux en 3 écrans (formulaire, confirmation modale, feedback visuel) pour forcer l'intention de l'utilisateur avant toute suppression. Résultat : zéro suppression accidentelle signalée, conformité RGPD respectée sur les données sensibles."
          : "Problem: children's data is sensitive (GDPR). An accidental parent profile deletion also removes all announcements and activities linked to the children. Solution: 3-screen flow (form, confirmation modal, visual feedback) to force user intent before any deletion. Result: zero accidental deletions reported, GDPR compliance maintained on sensitive data.",
      code: "",
      language: "typescript",
      category: "frontend" as const,
      image: "/assets/eduka/front-end/wireframe-front-end.png",
    },

    // [3] React + Vite vs Next.js
    {
      title:
        language === "fr"
          ? "Architecture et choix techniques front-end"
          : "Architecture and front-end technical choices",
      description:
        language === "fr"
          ? `Dans le cadre du développement de notre application web, nous devions créer une interface moderne, rapide et simple à maintenir. Nous avons rencontré plusieurs problématiques, notamment la gestion des formulaires, la validation des données et le risque de création de profils incomplets.

Pour répondre à ces besoins, nous avons utilisé React.js et Vite pour les performances, Tailwind CSS et Material UI pour l’interface utilisateur, ainsi que TypeScript pour sécuriser le code. Formik et Yup ont permis de simplifier la gestion et la validation des formulaires, tandis qu’Axios a été utilisé pour les échanges avec le serveur.

Dès l’inscription, nous avons imposé l’ajout obligatoire d’un enfant à un profil afin de garantir qu’un parent soit toujours associé à un enfant. Si aucune information n’est renseignée, un message d’erreur empêche la poursuite de l’inscription.

Enfin, les modals et formulaires ont été créés sous forme de composants réutilisables afin de faciliter la maintenance, la réutilisation du code et le travail en équipe.`
          : `As part of the development of our web application, we needed to create a modern, fast, and easy-to-maintain interface. We encountered several challenges, including form management, data validation, and the risk of creating incomplete profiles.

To meet these needs, we used React.js and Vite for performance, Tailwind CSS and Material UI for the user interface, and TypeScript to secure the code. Formik and Yup simplified form management and validation, while Axios was used for server communication.

From registration, we made adding a child to a profile mandatory to ensure a parent is always linked to a child. If no information is provided, an error message prevents the registration from proceeding.

Finally, modals and forms were built as reusable components to facilitate maintenance, code reuse, and teamwork.`,
      code: "",
      language: "typescript",
      category: "frontend" as const,
      image: "/assets/eduka/front-end/Front-end.png",
    },

    // [4] Strict TypeScript typing
    {
      title:
        language === "fr"
          ? "Typage TypeScript strict — Contrats partagés avec l'API REST"
          : "Strict TypeScript typing — Shared contracts with the REST API",
      description:
        language === "fr"
          ? "Problème : en JS vanilla, un champ 'birthday' envoyé comme string au lieu de Date causait des erreurs silencieuses dans le calcul d'âge des enfants. Solution : interfaces TypeScript strictes partagées entre le front React et le back NestJS. Les DTOs de l'API REST et les types front sont alignés pour éviter toute désynchronisation. Résultat : les erreurs de format sont détectées à la compilation, pas en production."
          : "Problem: in vanilla JS, a 'birthday' field sent as string instead of Date caused silent errors in children's age calculation. Solution: strict TypeScript interfaces shared between the React frontend and NestJS backend. REST API DTOs and frontend types are aligned to prevent any desynchronization. Result: format errors caught at compile time, not in production.",
      code: "",
      language: "typescript",
      category: "frontend" as const,
      image: "/assets/eduka/front-end/Front-end-TypeScript.png",
    },

    // [5] Discipline cap client-side
    {
      title:
        language === "fr"
          ? "Limite de 3 disciplines — Validation front + back pour la cohérence"
          : "Cap at 3 disciplines — Front + back validation for consistency",
      description:
        language === "fr"
          ? "Problème : sans limite, certains parents sélectionnaient 8+ disciplines, rendant la mise en relation et le filtrage des activités trop complexes (trop de combinaisons). Solution : limite de 3 disciplines avec feedback immédiat côté front (sans attente serveur). La validation est dupliquée côté API REST NestJS pour la sécurité — le front ne peut jamais bypasser la règle métier. Résultat : les groupes d'activités sont plus cohérents, la pertinence des annonces proposées a augmenté."
          : "Problem: without a limit, some parents selected 8+ disciplines, making activity filtering and matching too complex (too many combinations). Solution: cap at 3 disciplines with instant client-side feedback (no server wait). Validation is duplicated on the NestJS REST API for security — the frontend can never bypass the business rule. Result: activity groups are more cohesive, relevance of suggested announcements improved.",
      code: "",
      language: "typescript",
      category: "frontend" as const,
      image: "/assets/eduka/front-end/Front-end-modal.png",
    },
  ];
}
