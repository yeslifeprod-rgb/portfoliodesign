export function getEdukaBackendSnippets(language: string) {
  return [
    // [6] NestJS modular architecture
    {
      title:
        language === "fr"
          ? "Pourquoi NestJS modulaire plutôt qu'Express monolithique"
          : "Why modular NestJS over monolithic Express",
      description:
        language === "fr"
          ? "Problème : 4 développeurs travaillant en parallèle sur le même backend. Avec Express, les merge conflicts étaient constants sur les fichiers routes. Choix : NestJS avec architecture modulaire (un module par domaine métier). Chaque dev travaille dans son module sans toucher aux autres. Résultat : conflits Git réduits de 80%, modules testables indépendamment avec Jest."
          : "Problem: 4 developers working in parallel on the same backend. With Express, merge conflicts were constant on route files. Choice: NestJS with modular architecture (one module per business domain). Each dev works in their module without touching others. Result: Git conflicts reduced by 80%, modules independently testable with Jest.",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Archictecture.png",
    },

    // [7] Double JWT + DB check
    {
      title:
        language === "fr"
          ? "Pourquoi une double vérification JWT + BDD sur chaque mutation"
          : "Why double-check JWT + DB on every mutation",
      description:
        language === "fr"
          ? "Problème : un token JWT valide ne garantit pas que le compte existe encore (suppression par un admin, compte désactivé). Un parent supprimé pourrait encore modifier son profil pendant 15 min avec un token valide. Choix : vérification systématique en BDD après validation JWT. Résultat : aucune modification fantôme possible, les comptes désactivés sont immédiatement bloqués."
          : "Problem: a valid JWT token doesn't guarantee the account still exists (admin deletion, deactivated account). A deleted parent could still modify their profile for 15 min with a valid token. Choice: systematic DB check after JWT validation. Result: no ghost modifications possible, deactivated accounts are immediately blocked.",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Workflow.png",
    },

    // [8] DTOs preventing SQL injection
    {
      title:
        language === "fr"
          ? "Pourquoi les DTOs m'ont évité des injections SQL et des données corrompues"
          : "How DTOs prevented SQL injection and corrupted data",
      description:
        language === "fr"
          ? "Problème : sans validation serveur, n'importe quel payload JSON peut atteindre Prisma. Un champ 'email' contenant du HTML ou un tableau 'children' vide crée des profils inutilisables. Choix : DTOs avec class-validator et validation imbriquée pour les objets enfants. Résultat : les données invalides sont rejetées avec des messages explicites avant même de toucher la BDD."
          : "Problem: without server validation, any JSON payload can reach Prisma. An 'email' field containing HTML or an empty 'children' array creates unusable profiles. Choice: DTOs with class-validator and nested validation for child objects. Result: invalid data is rejected with explicit messages before even touching the DB.",
      category: "backend" as const,
      image: "/assets/eduka/back-end/DTO.png",
    },

    // [9] Delete + create for disciplines
    {
      title:
        language === "fr"
          ? "Pourquoi la mise à jour des disciplines passe par delete + create"
          : "Why discipline updates use delete + create instead of upsert",
      description:
        language === "fr"
          ? "Problème : un parent passe de [Maths, Musique] a [Maths, Sport]. Avec un upsert, il faut comparer l'ancien et le nouveau tableau pour savoir quoi ajouter/supprimer — code complexe et source de bugs. Choix : supprimer toutes les anciennes relations puis recréer les nouvelles dans une transaction Prisma. Résultat : code simple, atomique, et impossible d'avoir des doublons ou des orphelins en BDD."
          : "Problem: a parent changes from [Math, Music] to [Math, Sports]. With upsert, you need to diff the old and new arrays to know what to add/remove — complex code and bug-prone. Choice: delete all old relationships then recreate new ones in a Prisma transaction. Result: simple, atomic code with no possibility of duplicates or orphans in DB.",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Service.png",
    },

    // [10] Return full profile after update
    {
      title:
        language === "fr"
          ? "Pourquoi retourner le profil complet après update et pas juste un 200"
          : "Why return the full profile after update instead of just a 200",
      description:
        language === "fr"
          ? "Problème : le front affiche le profil juste après la sauvegarde. Avec un simple 200, il doit refaire un GET pour afficher les données mises a jour — double appel réseau inutile sur mobile. Choix : retourner le profil mis a jour avec les relations incluses. Résultat : le front met a jour son state immédiatement, pas de loading supplémentaire, UX fluide sur connexions 3G."
          : "Problem: the frontend displays the profile right after saving. With a simple 200, it needs another GET to display updated data — unnecessary double network call on mobile. Choice: return the updated profile with included relations. Result: frontend updates its state immediately, no extra loading, smooth UX on 3G connections.",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Uptade.png",
    },

    // [11] Thin controller
    {
      title:
        language === "fr"
          ? "Pourquoi le controller ne contient aucune logique métier"
          : "Why the controller contains zero business logic",
      description:
        language === "fr"
          ? "Problème : dans notre premier sprint, un dev avait mis la validation et les requêtes Prisma directement dans le controller. Impossible à tester unitairement, et le code était dupliqué entre les routes GET et PUT. Choix : controller mince qui délègue tout au service. Le guard JWT s'applique au niveau du decorator, pas dans le corps de la méthode. Résultat : le service est testable avec Jest sans simuler de requête HTTP."
          : "Problem: in our first sprint, a dev put validation and Prisma queries directly in the controller. Impossible to unit test, and code was duplicated between GET and PUT routes. Choice: thin controller that delegates everything to the service. JWT guard applies at the decorator level, not in the method body. Result: the service is testable with Jest without simulating HTTP requests.",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Controller.png",
    },

    // [12] Postman contract validation
    {
      title:
        language === "fr"
          ? "Pourquoi Postman en amont du front pour valider les contrats API"
          : "Why Postman before the frontend to validate API contracts",
      description:
        language === "fr"
          ? "Aperçu de la requête PUT pour la modification d'un profil utilisateur via Postman, ainsi qu'un aperçu du côté front-end. La réponse montre un code 200 OK en vert, indiquant que la requête a été traitée avec succès par le serveur.."
          : "Preview of the PUT request to modify a user profile via Postman, as well as a preview of the front-end side. The response shows a green 200 OK code, indicating that the request was successfully processed by the server..",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Postman.png",
    },
  ];
}
