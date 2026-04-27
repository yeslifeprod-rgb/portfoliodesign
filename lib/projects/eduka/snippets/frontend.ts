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
      code:
        language === "fr"
          ? `// Problème : 3 rôles distincts, chacun avec son propre parcours.
// Un parent qui accède au dashboard école = faille de sécurité.
// Solution : guards de route imbriqués par rôle.

&lt;UserProvider&gt;   {/* Contexte global : évite le prop drilling sur 12+ pages */}
  &lt;ModalProvider&gt; {/* Modales centralisées : confirmation suppression, etc. */}
    &lt;Routes&gt;
      &lt;Route path="/" element={&lt;LoginPage /&gt;} /&gt;

      {/* Routes parents — PrivateRoute vérifie le JWT,
          RoleBasedRoute vérifie role === "PARENT" */}
      &lt;Route element={&lt;PrivateRoute /&gt;}&gt;
        &lt;Route element={&lt;RoleBasedRoute role="PARENT" /&gt;}&gt;
          &lt;Route path="/parent/home" element={&lt;HomePageParent /&gt;} /&gt;
          &lt;Route path="/parent/profile" element={&lt;EditProfil /&gt;} /&gt;
          &lt;Route path="/parent/event/:id" element={&lt;EventPublicPage /&gt;} /&gt;
        &lt;/Route&gt;

        {/* Routes écoles — même pattern, rôle différent */}
        &lt;Route element={&lt;RoleBasedRoute role="SCHOOL" /&gt;}&gt;
          &lt;Route path="/school/dashboard" element={&lt;SchoolDashboard /&gt;} /&gt;
          &lt;Route path="/school/teachers" element={&lt;TeacherRegistration /&gt;} /&gt;
        &lt;/Route&gt;
      &lt;/Route&gt;
    &lt;/Routes&gt;
  &lt;/ModalProvider&gt;
&lt;/UserProvider&gt;

// Résultat : structure plate et lisible, chaque rôle est isolé.
// Ajouter un nouveau rôle = un nouveau bloc Route, pas de refactor.`
          : `// Problem: 3 distinct roles, each with its own user journey.
// A parent accessing the school dashboard = security breach.
// Solution: nested route guards per role.

&lt;UserProvider&gt;   {/* Global context: avoids prop drilling across 12+ pages */}
  &lt;ModalProvider&gt; {/* Centralized modals: delete confirmation, etc. */}
    &lt;Routes&gt;
      &lt;Route path="/" element={&lt;LoginPage /&gt;} /&gt;

      {/* Parent routes — PrivateRoute checks JWT,
          RoleBasedRoute checks role === "PARENT" */}
      &lt;Route element={&lt;PrivateRoute /&gt;}&gt;
        &lt;Route element={&lt;RoleBasedRoute role="PARENT" /&gt;}&gt;
          &lt;Route path="/parent/home" element={&lt;HomePageParent /&gt;} /&gt;
          &lt;Route path="/parent/profile" element={&lt;EditProfil /&gt;} /&gt;
          &lt;Route path="/parent/event/:id" element={&lt;EventPublicPage /&gt;} /&gt;
        &lt;/Route&gt;

        {/* School routes — same pattern, different role */}
        &lt;Route element={&lt;RoleBasedRoute role="SCHOOL" /&gt;}&gt;
          &lt;Route path="/school/dashboard" element={&lt;SchoolDashboard /&gt;} /&gt;
          &lt;Route path="/school/teachers" element={&lt;TeacherRegistration /&gt;} /&gt;
        &lt;/Route&gt;
      &lt;/Route&gt;
    &lt;/Routes&gt;
  &lt;/ModalProvider&gt;
&lt;/UserProvider&gt;

// Result: flat, readable structure. Each role is isolated.
// Adding a new role = one new Route block, no refactor needed.`,
      language: "typescript",
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
      code:
        language === "fr"
          ? `// Problème : un parent peut supprimer son profil par erreur.
// Les données enfants liées seraient perdues. RGPD impose un
// consentement explicite pour la suppression de données mineurs.

// Écran 1 : Formulaire de profil
// GET /user/:id → pré-remplit les champs au chargement
// PUT /user/:id → sauvegarde les modifications
const handleSave = async (data: ProfileFormData) => {
  // Validation côté client AVANT l'appel API
  // pour éviter des requêtes inutiles au serveur
  const validated = profileSchema.parse(data);
  await api.put(\`/user/\${userId}\`, validated);
};

// Écran 2 : Modale de confirmation
// Pourquoi une modale et pas un simple confirm() ?
// → confirm() natif est bloqué par certains navigateurs mobiles
// → Les parents utilisent majoritairement l'app sur mobile
const handleDelete = async () => {
  // DELETE /user/:id — déclenché UNIQUEMENT après clic sur "OUI"
  // Soft delete en BDD : on garde les données 30 jours
  // pour permettre la récupération du compte
  await api.delete(\`/user/\${userId}\`);
};

// Écran 3 : Feedback visuel + redirection
// Le délai de 3s avant redirect laisse le temps
// de confirmer visuellement que la suppression est effective`
          : `// Problem: a parent could accidentally delete their profile.
// Linked children's data would be lost. GDPR requires explicit
// consent for deleting minors' data.

// Screen 1: Profile form
// GET /user/:id → pre-fills fields on load
// PUT /user/:id → saves modifications
const handleSave = async (data: ProfileFormData) => {
  const validated = profileSchema.parse(data);
  await api.put(\`/user/\${userId}\`, validated);
};

// Screen 2: Confirmation modal
// Why a modal instead of a simple confirm()?
// → Native confirm() is blocked by some mobile browsers
// → Parents primarily use the app on mobile
const handleDelete = async () => {
  await api.delete(\`/user/\${userId}\`);
};

// Screen 3: Visual feedback + redirect
// The 3s delay before redirect gives time
// to visually confirm the deletion is effective`,
      language: "typescript",
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
      code:
        language === "fr"
          ? `// Décision de stack — pourquoi chaque choix compte

// React + Vite plutôt que Next.js :
// L'app est 100% privée (derrière login). Pas de SEO, pas de SSR.
// Vite donne un HMR en ~40ms vs ~300ms avec CRA.
// Pour 4 devs qui itèrent vite, ça change tout.

// Tailwind plutôt que CSS Modules :
// Équipe de 4 devs, chacun avec un style CSS différent.
// Tailwind impose une convention unique → pas de conflits de merge.

// Formik + Yup pour les formulaires :
// Le formulaire d'inscription parent a des champs dynamiques
// (1 à N enfants, chacun avec nom + date de naissance + classe).
const registrationSchema = Yup.object({
  email: Yup.string().email().required(),
  children: Yup.array().of(
    Yup.object({
      name: Yup.string().required(),
      birthday: Yup.date().required(),
    })
  ).min(1, "Au moins un enfant requis"),
});`
          : `// Stack decision — why each choice matters

// React + Vite instead of Next.js:
// The app is 100% private (behind login). No SEO, no SSR needed.
// Vite gives ~40ms HMR vs ~300ms with CRA.
// For 4 devs iterating fast, that changes everything.

// Tailwind instead of CSS Modules:
// Team of 4 devs, each with different CSS style.
// Tailwind enforces a single convention → no merge conflicts.

// Formik + Yup for forms:
// The parent registration form has dynamic fields
// (1 to N children, each with name + birthday + class).
const registrationSchema = Yup.object({
  email: Yup.string().email().required(),
  children: Yup.array().of(
    Yup.object({
      name: Yup.string().required(),
      birthday: Yup.date().required(),
    })
  ).min(1, "At least one child required"),
});`,
      language: "typescript",
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
      code:
        language === "fr"
          ? `// Le bug qui a motivé ce typage strict :
// Un dev envoyait birthday comme "2015-03-12" (string).
// Le backend calculait l'âge avec new Date(birthday) → NaN en prod.

interface Child {
  id: number;
  name: string;
  birthday: Date;    // Date, pas string — le calcul d'âge en dépend
  class: string;     // "CP", "CE1", etc.
}

interface ParentProfile {
  photo: string;
  lastname: string;
  firstname: string;
  email: string;
  children: Child[]; // Min 1 enfant obligatoire (règle métier)
  disciplines: Discipline[];
}

// Ce type est partagé avec le backend via un package commun.
// Quand un dev ajoute un champ ici, le DTO NestJS casse
// à la compilation s'il n'est pas mis à jour → synchronisation forcée.`
          : `// The bug that motivated this strict typing:
// A dev was sending birthday as "2015-03-12" (string).
// Backend calculated age with new Date(birthday) → NaN in prod.

interface Child {
  id: number;
  name: string;
  birthday: Date;    // Date, not string — age calculation depends on it
  class: string;     // "CP", "CE1", etc.
}

interface ParentProfile {
  photo: string;
  lastname: string;
  firstname: string;
  email: string;
  children: Child[]; // Min 1 child required (business rule)
  disciplines: Discipline[];
}

// This type is shared with backend via a common package.
// When a dev adds a field here, the NestJS DTO breaks
// at compile time if not updated → forced synchronization.`,
      language: "typescript",
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
      code:
        language === "fr"
          ? `// Pourquoi max 3 ? L'algo de matching covoiturage croise les disciplines.
// Avec 8 disciplines, les combinaisons explosent.

const MAX_DISCIPLINES = 3;

const handleAdd = (subject: Discipline) => {
  if (selectedSubjects.length >= MAX_DISCIPLINES) {
    // Feedback immédiat — pas d'appel serveur pour dire "non"
    toast.warn("Maximum 3 disciplines autorisées");
    return;
  }
  onAddSubject(subject);
  // La même validation existe côté backend (DTO @ArrayMaxSize(3))
  // Double validation : UX rapide + sécurité garantie
};`
          : `// Why max 3? The carpool matching algo crosses disciplines.
// With 8 disciplines, combinations explode.

const MAX_DISCIPLINES = 3;

const handleAdd = (subject: Discipline) => {
  if (selectedSubjects.length >= MAX_DISCIPLINES) {
    // Instant feedback — no server call just to say "no"
    toast.warn("Maximum 3 disciplines allowed");
    return;
  }
  onAddSubject(subject);
  // Same validation exists server-side (DTO @ArrayMaxSize(3))
  // Double validation: fast UX + guaranteed security
};`,
      language: "typescript",
      image: "/assets/eduka/front-end/Front-end-modal.png",
    },
  ];
}
