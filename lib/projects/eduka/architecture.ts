export function getEdukaArchitecture(language: string) {
  return {
    description:
      language === "fr"
        ? `Notre application repose sur une <strong>architecture multicouche</strong> (front-end, back-end, ORM, base de données) garantissant une séparation claire des responsabilités, une sécurité renforcée et une scalabilité optimale.\n\n<strong>✅ Les avantages de l'architecture multicouche</strong>\n\n• <em>Séparation totale</em> : chaque couche a une responsabilité unique (React = affichage, NestJS = logique métier, Prisma = accès données, MySQL = stockage).\n• <em>Sécurité renforcée</em> : NestJS impose des Guards JWT et des DTOs à la couche back-end, indépendamment du front, garantissant que seules des données valides entrent en base.\n• <em>Scalabilité</em> : les couches pouvant être déployées séparément (Vercel pour le front, AWS EC2 pour le back), l'architecture s'adapte facilement à la montée en charge.\n• <em>Testabilité</em> : chaque couche peut être testée de façon isolée (Jest pour le back, Cypress pour le front), sans dépendances croisées.`
        : `Our application uses a <strong>multi-layer architecture</strong> (front-end, back-end, ORM, database) ensuring a clear separation of responsibilities, enhanced security and optimal scalability.\n\n<strong>✅ Benefits of multi-layer architecture</strong>\n\n• <em>Complete separation</em>: each layer has a single responsibility (React = display, NestJS = business logic, Prisma = data access, MySQL = storage).\n• <em>Enhanced security</em>: NestJS enforces JWT Guards and DTOs at the back-end layer, independently from the front, ensuring only valid data enters the database.\n• <em>Scalability</em>: layers can be deployed separately (Vercel for front, AWS EC2 for back), the architecture easily adapts to increased load.\n• <em>Testability</em>: each layer can be tested in isolation (Jest for back-end, Cypress for front-end) without cross-dependencies.`,
    image: "/assets/eduka/conception/architecture.png",
    points:
      language === "fr"
        ? [
            "Action utilisateur : L'utilisateur interagit avec l'application (par exemple, en cliquant sur un bouton).",
            "React (Front-end) : Envoie une requête HTTP en JSON au back-end pour demander des données ou effectuer une action.",
            "NestJS (Back-end) : Reçoit la requête JSON et utilise Prisma pour interagir avec la base de données.",
            "Prisma (ORM) : Traduit les requêtes du back-end en SQL que MySQL peut comprendre, puis les exécute sur la base de données.",
            "MySQL (Base de données) : Exécute la requête SQL pour récupérer ou modifier des données, puis renvoie les résultats à Prisma.",
            "Prisma : Convertit les résultats SQL en JSON et les renvoie à NestJS.",
            "NestJS : Envoie la réponse JSON à React.",
            "React : Reçoit la réponse JSON et affiche les données ou le résultat de l'action à l'utilisateur.",
          ]
        : [
            "User action: The user interacts with the application (e.g., clicking a button).",
            "React (Front-end): Sends an HTTP request in JSON to the back-end to request data or perform an action.",
            "NestJS (Back-end): Receives the JSON request and uses Prisma to interact with the database.",
            "Prisma (ORM): Translates back-end queries into SQL that MySQL can understand, then executes them on the database.",
            "MySQL (Database): Executes the SQL query to retrieve or modify data, then returns results to Prisma.",
            "Prisma: Converts SQL results to JSON and returns them to NestJS.",
            "NestJS: Sends the JSON response to React.",
            "React: Receives the JSON response and displays the data or action result to the user.",
          ],
  };
}
