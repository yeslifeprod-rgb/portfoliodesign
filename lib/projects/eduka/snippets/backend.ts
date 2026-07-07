export function getEdukaBackendSnippets(language: string) {
  return [
    // [6] NestJS modular architecture
    {
      title:
        language === "fr"
          ? "NestJS modulaire — 80% de conflits Git en moins sur 4 devs"
          : "Modular NestJS — 80% fewer Git conflicts across 4 devs",
      description:
        language === "fr"
          ? "Problème : 4 développeurs travaillant en parallèle sur le même backend. Avec Express monolithique, les merge conflicts étaient constants sur les fichiers routes. Solution : NestJS avec architecture modulaire — un module par domaine métier (Auth, User, Group, Event, Ride). Chaque dev travaille dans son module sans toucher aux autres. L'API REST expose des endpoints clairs par domaine. Résultat : conflits Git réduits de 80%, modules testables indépendamment avec Jest."
          : "Problem: 4 developers working in parallel on the same backend. With monolithic Express, merge conflicts were constant on route files. Solution: NestJS with modular architecture — one module per business domain (Auth, User, Group, Event, Ride). Each dev works in their module without touching others. The REST API exposes clear endpoints per domain. Result: Git conflicts reduced by 80%, modules independently testable with Jest.",
      code: "",
      language: "typescript",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Archictecture.png",
    },

    // [7] Double JWT + DB check
    {
      title:
        language === "fr"
          ? "Double vérification JWT + BDD — Aucune mutation fantôme possible"
          : "Double JWT + DB check — No ghost mutations possible",
      description:
        language === "fr"
          ? "Problème : un token JWT valide ne garantit pas que le compte existe encore (suppression par un admin, compte désactivé). Un parent supprimé pourrait modifier son profil pendant 15 min avec un token encore valide. Solution : Guard NestJS qui vérifie systématiquement en BDD après validation JWT sur chaque endpoint REST protégé. Résultat : aucune modification fantôme possible — les comptes désactivés sont bloqués immédiatement, même avec un token valide."
          : "Problem: a valid JWT token doesn't guarantee the account still exists (admin deletion, deactivated account). A deleted parent could still modify their profile for 15 min with a valid token. Solution: NestJS Guard that systematically checks in DB after JWT validation on each protected REST endpoint. Result: no ghost modifications possible — deactivated accounts are blocked immediately, even with a valid token.",
      code: "",
      language: "typescript",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Workflow.png",
    },

    // [8] DTOs preventing SQL injection
    {
      title:
        language === "fr"
          ? "DTOs NestJS — Zéro donnée invalide en base de données"
          : "NestJS DTOs — Zero invalid data in the database",
      description:
        language === "fr"
          ? "Problème : sans validation serveur, n'importe quel payload JSON peut atteindre Prisma via l'API REST. Un champ 'email' contenant du HTML ou un tableau 'children' vide crée des profils inutilisables. Solution : DTOs avec class-validator et validation imbriquée pour les objets enfants. Le pipe ValidationPipe global rejette tout payload non conforme avant même de toucher la BDD. Résultat : les données invalides sont rejetées avec des messages explicites — l'API REST est robuste et auto-documentée."
          : "Problem: without server validation, any JSON payload can reach Prisma via the REST API. An 'email' field containing HTML or an empty 'children' array creates unusable profiles. Solution: DTOs with class-validator and nested validation for child objects. The global ValidationPipe rejects any non-compliant payload before even touching the DB. Result: invalid data is rejected with explicit messages — the REST API is robust and self-documented.",
      code: "",
      language: "typescript",
      category: "backend" as const,
      image: "/assets/eduka/back-end/DTO.png",
    },

    // [9] Delete + create for disciplines
    {
      title:
        language === "fr"
          ? "Delete + Create atomique — Mise à jour sans doublons en BDD"
          : "Atomic delete + create — Updates without DB duplicates",
      description:
        language === "fr"
          ? "Problème : un parent passe de [Maths, Musique] à [Maths, Sport]. Avec un upsert via l'API REST, il faut comparer l'ancien et le nouveau tableau pour savoir quoi ajouter/supprimer — code complexe et source de bugs. Solution : supprimer toutes les anciennes relations puis recréer les nouvelles dans une transaction Prisma atomique. Le PUT de l'API REST reste simple et idempotent. Résultat : code simple, atomique — impossible d'avoir des doublons ou des orphelins en BDD."
          : "Problem: a parent changes from [Math, Music] to [Math, Sports]. With an upsert via the REST API, you need to diff the old and new arrays to know what to add/remove — complex and bug-prone code. Solution: delete all old relationships then recreate new ones in an atomic Prisma transaction. The REST API PUT endpoint remains simple and idempotent. Result: simple, atomic code — no possibility of duplicates or orphans in DB.",
      code: "",
      language: "typescript",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Service.png",
    },

    // [10] Return full profile after update
    {
      title:
        language === "fr"
          ? "Réponse complète après PUT — UX fluide sur connexions 3G"
          : "Full response after PUT — Smooth UX on 3G connections",
      description:
        language === "fr"
          ? "Problème : le front affiche le profil juste après la sauvegarde. Avec un simple 200, il doit refaire un GET pour afficher les données mises à jour — double appel réseau inutile sur mobile. Solution : l'endpoint PUT de l'API REST retourne le profil complet mis à jour avec les relations incluses. Le front met à jour son state immédiatement sans second appel. Résultat : expérience fluide sur connexions 3G — une seule requête pour sauvegarder et afficher les données."
          : "Problem: the frontend displays the profile right after saving. With a simple 200, it needs another GET to display updated data — unnecessary double network call on mobile. Solution: the REST API PUT endpoint returns the complete updated profile with included relations. The frontend updates its state immediately without a second call. Result: smooth experience on 3G connections — a single request to save and display data.",
      code: "",
      language: "typescript",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Uptade.png",
    },

    // [11] Thin controller
    {
      title:
        language === "fr"
          ? "Controller mince — Service testable avec Jest sans mock HTTP"
          : "Thin controller — Service testable with Jest without HTTP mock",
      description:
        language === "fr"
          ? "Problème : dans notre premier sprint, un dev avait mis la validation et les requêtes Prisma directement dans le controller. Impossible à tester unitairement avec Jest, et le code était dupliqué entre les routes GET et PUT de l'API REST. Solution : controller mince qui délègue tout au service. Le guard JWT s'applique via decorator, pas dans le corps de la méthode. Résultat : le service est testable avec Jest sans simuler de requête HTTP — couverture unitaire maximale avec un minimum de setup."
          : "Problem: in our first sprint, a dev put validation and Prisma queries directly in the controller. Impossible to unit test with Jest, and code was duplicated between GET and PUT routes of the REST API. Solution: thin controller that delegates everything to the service. JWT guard applies via decorator, not in the method body. Result: the service is testable with Jest without simulating HTTP requests — maximum unit coverage with minimal setup.",
      code: "",
      language: "typescript",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Controller.png",
    },

    // [12] Postman contract validation
    {
      title:
        language === "fr"
          ? "Postman avant le front — Valider les contrats API REST en amont"
          : "Postman before frontend — Validating REST API contracts early",
      description:
        language === "fr"
          ? "Aperçu d'une requête PUT pour la modification d'un profil utilisateur via Postman, avant même le développement de l'interface React. Cette approche 'API-first' garantit que les endpoints REST fonctionnent correctement de façon isolée avant d'être intégrés. La réponse montre un code 200 OK en vert, confirmant que le contrat API est respecté — les tests Cypress E2E valident ensuite le comportement de bout en bout."
          : "Preview of a PUT request to modify a user profile via Postman, even before developing the React interface. This 'API-first' approach ensures REST endpoints work correctly in isolation before integration. The response shows a green 200 OK code, confirming the API contract is honored — Cypress E2E tests then validate the end-to-end behavior.",
      code: "",
      language: "javascript",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Postman.png",
    },

    // [13] Jest unit tests
    {
      title:
        language === "fr"
          ? "Tests Jest — Chaque service validé indépendamment de la BDD"
          : "Jest tests — Each service validated independently of the DB",
      description:
        language === "fr"
          ? "Stratégie de tests unitaires avec Jest sur les services NestJS : chaque méthode de service est testée avec des mocks Prisma pour simuler la base de données. On teste les cas nominaux (création d'un groupe réussie), les cas d'erreur (email déjà pris), et les cas limites (enfant sans école assignée). Les tests s'exécutent en CI/CD sans dépendance externe. Résultat : confiance dans les refactors — si un test échoue, le problème est isolé en quelques secondes."
          : "Unit testing strategy with Jest on NestJS services: each service method is tested with Prisma mocks to simulate the database. Nominal cases (successful group creation), error cases (email already taken), and edge cases (child without assigned school) are all covered. Tests run in CI/CD without external dependencies. Result: confidence in refactoring — if a test fails, the problem is isolated in seconds.",
      code: "",
      language: "typescript",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Archictecture.png",
    },

    // [14] Cypress E2E tests
    {
      title:
        language === "fr"
          ? "Tests Cypress E2E — Parcours complets validés du login à la création d'activité"
          : "Cypress E2E tests — Full flows validated from login to activity creation",
      description:
        language === "fr"
          ? "Les tests Cypress simulent le comportement réel des utilisateurs sur l'interface React : connexion parent → sélection de disciplines → création d'une annonce d'activité → réception d'une notification. Chaque parcours critique (inscription enfant, création de groupe, publication d'annonce) est couvert. Les tests s'exécutent contre l'API REST réelle en environnement de staging. Résultat : les bugs de régression sont détectés avant la mise en production — les 4 devs de l'équipe poussent avec confiance."
          : "Cypress tests simulate real user behavior on the React interface: parent login → discipline selection → activity announcement creation → notification receipt. Each critical journey (child registration, group creation, announcement publishing) is covered. Tests run against the real REST API in staging environment. Result: regression bugs are caught before production — all 4 team devs push with confidence.",
      code: "",
      language: "javascript",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Workflow.png",
    },
  ];
}
