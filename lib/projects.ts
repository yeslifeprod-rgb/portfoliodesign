export type Project = {
  id: string;
  quote: string;
  name: string;
  designation: string;
  srcs: string[];
  stack?: string[];
  gallery?: string[];
  codeSnippets?: {
    title: string;
    description: string;
    code: string;
    language: string;
    image?: string;
    category?: "frontend" | "backend";
  }[];
  architecture?: {
    description: string;
    image?: string;
    points: string[];
  };
  deployment?: {
    title: string;
    description: string;
    image?: string;
    steps: string[];
    conclusion: string;
  };
  design?: {
    title: string;
    description: string;
    methods: {
      name: string;
      description: string;
      image?: string;
    }[];
  };
  features?: string[];
  gridSize?: string;
};

export function getAllProjects(language: string): Project[] {
  return [
    {
      id: "eduka",
      quote:
        language === "fr"
          ? "EDUKA est une application web conçue pour faciliter le covoiturage des enfants lors d'activités extra-scolaires. Les responsables peuvent y créer et gérer des groupes ainsi que des événements, tandis que les parents peuvent proposer ou rejoindre des trajets. L'application a été développée à distance par une équipe de 4 développeurs fullstack, avec un fort accent sur la sécurité des données des enfants."
          : "EDUKA is a web application designed to facilitate carpooling for children's extracurricular activities. Managers can create and manage groups and events, while parents can offer or join rides. The app was developed remotely by a team of four fullstack developers, with a strong focus on data and child safety.",
      name: "EDUKA",
      designation:
        language === "fr"
          ? "ALT - Application de covoiturage extra-scolaire"
          : "ALT - Carpooling App for Kids' Activities",
      srcs: [
        "/assets/eduka/Eduka.webp",
        "/assets/eduka/eduka1.png",
        "/assets/eduka/eduka5.png"
      ],
      stack: [
        "Figma", "React", "Tailwind", "TypeScript", "Nest", "Git",
        "Vercel", "Prisma", "Mysql", "Cypress", "Jest", "Ionic", "MongoDB", "Docker",
      ],
      gallery: [
        "/assets/eduka/Eduka.webp",
        "/assets/eduka/eduka1.png",
        "/assets/eduka/eduka5.png",
      ],
      features: language === "fr" ? [
        "Système d'authentification sécurisé avec vérification d'email",
        "Création et gestion de groupes pour organiser les covoiturages",
        "Calendrier interactif pour planifier les trajets",
        "Notifications en temps réel pour les parents et responsables",
        "Interface responsive adaptée mobile et desktop",
        "Système de messagerie intégré entre parents",
        "Dashboard admin pour gérer les utilisateurs et les événements",
        "Tests automatisés avec Cypress et Jest pour garantir la qualité",
      ] : [
        "Secure authentication system with email verification",
        "Create and manage groups to organize carpools",
        "Interactive calendar to plan rides",
        "Real-time notifications for parents and managers",
        "Responsive interface for mobile and desktop",
        "Integrated messaging system between parents",
        "Admin dashboard to manage users and events",
        "Automated tests with Cypress and Jest to ensure quality",
      ],
      architecture: {
        description: language === "fr"
          ? "Notre application est divisée en plusieurs couches (front-end, back-end, ORM, et base de données) qui travaillent ensemble pour traiter les demandes des utilisateurs."
          : "Our application is divided into multiple layers (front-end, back-end, ORM, and database) that work together to process user requests.",
        image: "/assets/eduka/conception/architecture.png",
        points: language === "fr" ? [
          "Action utilisateur : L'utilisateur interagit avec l'application (par exemple, en cliquant sur un bouton).",
          "React (Front-end) : Envoie une requête HTTP en JSON au back-end pour demander des données ou effectuer une action.",
          "NestJS (Back-end) : Reçoit la requête JSON et utilise Prisma pour interagir avec la base de données.",
          "Prisma (ORM) : Traduit les requêtes du back-end en SQL que MySQL peut comprendre, puis les exécute sur la base de données.",
          "MySQL (Base de données) : Exécute la requête SQL pour récupérer ou modifier des données, puis renvoie les résultats à Prisma.",
          "Prisma : Convertit les résultats SQL en JSON et les renvoie à NestJS.",
          "NestJS : Envoie la réponse JSON à React.",
          "React : Reçoit la réponse JSON et affiche les données ou le résultat de l'action à l'utilisateur.",
        ] : [
          "User action: The user interacts with the application (e.g., clicking a button).",
          "React (Front-end): Sends an HTTP request in JSON to the back-end to request data or perform an action.",
          "NestJS (Back-end): Receives the JSON request and uses Prisma to interact with the database.",
          "Prisma (ORM): Translates back-end queries into SQL that MySQL can understand, then executes them on the database.",
          "MySQL (Database): Executes the SQL query to retrieve or modify data, then returns results to Prisma.",
          "Prisma: Converts SQL results to JSON and returns them to NestJS.",
          "NestJS: Sends the JSON response to React.",
          "React: Receives the JSON response and displays the data or action result to the user.",
        ]
      },
      codeSnippets: [
        {
          title: language === "fr" ? "Architecture du Projet Front-end" : "Frontend Project Architecture",
          description: language === "fr"
            ? "Organisation et Explication de l'Architecture du Projet Front"
            : "Organization and Explanation of the Frontend Project Architecture",
          category: "frontend" as const,
          code: language === "fr"
            ? `<strong>ORGANISATION ET EXPLICATION DE L'ARCHITECTURE DU PROJET FRONT</strong>

Dans notre projet front-end, les dossiers et fichiers sont organisés de manière structurée pour faciliter le développement et la maintenance. Voici l'organisation des dossiers :

• <strong><em>node_modules</em></strong> : Contient les dépendances du projet.
• <strong><em>public</em></strong> : Contient les fichiers statiques accessibles publiquement.
• <strong><em>src</em></strong> : Contient le code source principal du projet :
  - <strong><em>assets</em></strong> : Contient les ressources telles que les images et les styles CSS.
  - <strong><em>components</em></strong> : Contient les composants réutilisables de l'application.
  - <strong><em>hooks</em></strong> : Contient les hooks personnalisés utilisés dans l'application.
  - <strong><em>pages</em></strong> : Contient les différentes pages de l'application, chacune dans son propre dossier.
  - <strong><em>utils</em></strong> : Contient les services pour les appels API et autres fonctions backend.

<strong>EXTRAIT ET EXPLICATION DE L'APP.TSX AVEC L'ENSEMBLE DES ROUTES ET DES PAGES</strong>

<strong>SECTION 1 : ROUTES POUR LES PARENTS</strong>

<em>Description :</em>
Dans cette section, nous montrons comment les routes pour les utilisateurs de type <strong>"Parent"</strong> sont définies dans le fichier <strong><em>App.tsx</em></strong>. Ces routes permettent de naviguer vers différentes pages comme la page d'accueil des parents, la page de profil, et plus encore.

<em>Explication :</em>
• <strong><em>UserProvider et ModalProvider</em></strong> : Ces composants entourent notre application pour fournir des contextes utilisateurs et des modales globales.
• <strong><em>Routes</em></strong> : Utilise react-router-dom pour définir les routes de l'application.
• <strong><em>Route</em></strong> : Chaque route a un path (le chemin URL) et un élément (le composant React à afficher).
• <strong>Exemple</strong> : <em>path="/"</em> correspond à la page de connexion (<LoginPage />).
• <strong><em>Private Route et Rôle Based Route</em></strong> : Protègent certaines routes pour qu'elles ne soient accessibles qu'aux utilisateurs authentifiés et ayant les bons rôles (comme PARENT).
• <strong><em>Pages</em></strong> : Les différentes pages comme HomePage Parent, Edit Profil, Event Public Page, etc., sont affichées selon les routes définies.

<strong>SECTION 2 : ROUTES POUR LES ÉCOLES ET LES ENSEIGNANTS</strong>

<em>Description :</em>
Dans cette section, nous montrons comment les routes pour les utilisateurs de type <strong>"École"</strong> et <strong>"Enseignant"</strong> sont définies dans le fichier <strong><em>App.tsx</em></strong>. Ces routes permettent de naviguer vers différentes pages comme la page d'accueil des écoles, la page d'inscription des enseignants, et plus encore.`
            : `ORGANIZATION AND EXPLANATION OF THE FRONTEND PROJECT ARCHITECTURE

In our frontend project, folders and files are organized in a structured way to facilitate development and maintenance. Here is the folder organization:

• node_modules : Contains project dependencies.
• public : Contains publicly accessible static files.
• src : Contains the main source code of the project:
  - assets : Contains resources such as images and CSS styles.
  - components : Contains reusable application components.
  - hooks : Contains custom hooks used in the application.
  - pages : Contains the different pages of the application, each in its own folder.
  - utils : Contains services for API calls and other backend functions.

EXTRACT AND EXPLANATION OF APP.TSX WITH ALL ROUTES AND PAGES

SECTION 1: PARENT ROUTES

Description:
In this section, we show how routes for "Parent" type users are defined in the App.tsx file. These routes allow navigation to different pages such as the parent home page, profile page, and more.

Explanation:
• UserProvider and ModalProvider : These components wrap our application to provide user contexts and global modals.
• Routes : Uses react-router-dom to define application routes.
• Route : Each route has a path (the URL path) and an element (the React component to display).
• Example : path="/" corresponds to the login page (<LoginPage />).
• Private Route and Role Based Route : Protect certain routes so they are only accessible to authenticated users with the right roles (like PARENT).
• Pages : Different pages like Parent HomePage, Edit Profile, Event Public Page, etc. are displayed according to defined routes.

SECTION 2: SCHOOL AND TEACHER ROUTES

Description:
In this section, we show how routes for "School" and "Teacher" type users are defined in the App.tsx file. These routes allow navigation to different pages such as the school home page, teacher registration page, and more.`,
          language: "typescript",
          image: "/assets/eduka/front-end/frontend-architecture.png"
        },
        {
          title: language === "fr" ? "Wireframe - Interface de Gestion de Profil" : "Wireframe - Profile Management Interface",
          description: language === "fr"
            ? "Présentation de l'Interface de Gestion de Profil"
            : "Profile Management Interface Presentation",
          category: "frontend" as const,
          code: language === "fr"
            ? `<strong>PRÉSENTATION DE L'INTERFACE DE GESTION DE PROFIL</strong>

<em>Aperçu :</em>
Le wireframe présente une interface pour la gestion de profil utilisateur, avec <strong>trois écrans principaux</strong> : modification du profil, confirmation de suppression, et notification de suppression réussie.

<strong>ÉCRAN 1 : MODIFICATION DU PROFIL</strong>

<strong><em>Formulaire</em></strong> : Champs pour le prénom, nom, adresse, email, et mot de passe.

<strong><em>Méthode HTTP :</em></strong>
• <strong>GET</strong> : Récupère les informations actuelles du profil pour pré-remplir les champs du formulaire.

<strong><em>Boutons :</em></strong>
• <strong>SAVE</strong> : Enregistre les modifications apportées au profil.
  - <em>Méthode HTTP</em> : <strong>PUT</strong> pour envoyer les données modifiées au serveur.

• <strong>DELETE</strong> : Lance la procédure de suppression du profil.
  - <em>Méthode HTTP</em> : <strong>DELETE</strong> pour supprimer le profil du serveur (après confirmation).

<strong>ÉCRAN 2 : CONFIRMATION DE SUPPRESSION</strong>

<strong><em>Message</em></strong> : "Voulez-vous supprimer le profil ?"

<strong><em>Options :</em></strong>
• <strong>NON</strong> : Annule la suppression.
• <strong>OUI</strong> : Confirme la suppression.
  - <em>Méthode HTTP</em> : <strong>DELETE</strong> est déclenchée après la confirmation.

<strong>ÉCRAN 3 : PROFIL SUPPRIMÉ</strong>

<strong><em>Message</em></strong> : "Profil supprimé" avec indication d'une redirection à venir.

<strong>RÉSUMÉ DES MÉTHODES HTTP :</strong>
• <strong>GET</strong> : Récupère les données actuelles du profil pour les afficher.
• <strong>PUT</strong> : Enregistre les modifications du profil.
• <strong>DELETE</strong> : Supprime le profil après confirmation.`
            : `<strong>PROFILE MANAGEMENT INTERFACE PRESENTATION</strong>

<em>Overview:</em>
The wireframe presents a user profile management interface, with <strong>three main screens</strong>: profile editing, deletion confirmation, and successful deletion notification.

<strong>SCREEN 1: PROFILE EDITING</strong>

<strong><em>Form</em></strong>: Fields for first name, last name, address, email, and password.

<strong><em>HTTP Method:</em></strong>
• <strong>GET</strong>: Retrieves current profile information to pre-fill form fields.

<strong><em>Buttons:</em></strong>
• <strong>SAVE</strong>: Saves profile modifications.
  - <em>HTTP Method</em>: <strong>PUT</strong> to send modified data to the server.

• <strong>DELETE</strong>: Initiates profile deletion procedure.
  - <em>HTTP Method</em>: <strong>DELETE</strong> to remove profile from server (after confirmation).

<strong>SCREEN 2: DELETION CONFIRMATION</strong>

<strong><em>Message</em></strong>: "Do you want to delete the profile?"

<strong><em>Options:</em></strong>
• <strong>NO</strong>: Cancels deletion.
• <strong>YES</strong>: Confirms deletion.
  - <em>HTTP Method</em>: <strong>DELETE</strong> is triggered after confirmation.

<strong>SCREEN 3: PROFILE DELETED</strong>

<strong><em>Message</em></strong>: "Profile deleted" with indication of upcoming redirection.

<strong>HTTP METHODS SUMMARY:</strong>
• <strong>GET</strong>: Retrieves current profile data for display.
• <strong>PUT</strong>: Saves profile modifications.
• <strong>DELETE</strong>: Deletes profile after confirmation.`,
          language: "typescript",
          image: "/assets/eduka/front-end/wireframe-front-end.png"
        },
        {
          title: language === "fr" ? "Stack Front-end & Méthodologie" : "Frontend Stack & Methodology",
          description: language === "fr"
            ? "Technologies et approches utilisées dans le développement du front-end"
            : "Technologies and approaches used in frontend development",
          category: "frontend" as const,
          code: language === "fr"
            ? `<strong>TECHNOLOGIES FRONT-END</strong>

<strong><em>Stack :</em></strong> <strong>React.js</strong> + <strong>Vite</strong> + <strong>Tailwind CSS</strong> + <strong>Material UI</strong> + <strong>TypeScript</strong>

• <strong>React.js & Vite</strong> : Rapidité et réactivité optimales
• <strong>Tailwind CSS</strong> : Design élégant avec code propre et maintenable
• <strong>Material UI</strong> : Composants professionnels prêts à l'emploi
• <strong>TypeScript</strong> : Détection d'erreurs précoce pour code robuste

<strong>GESTION DES FORMULAIRES</strong>

• <strong><em>Formik + Yup</em></strong> : Gestion simplifiée des formulaires et validations fiables
• <strong><em>react-datepicker</em></strong> : Sélection intuitive des dates
• <strong><em>Axios</em></strong> : Requêtes HTTP faciles à gérer et suivre

<strong>MÉTHODOLOGIE & SÉCURITÉ</strong>

<strong><em>Règle d'inscription :</em></strong> <strong>Obligation d'associer un enfant au profil parent</strong> dès le début du processus. Cette validation garantit que seuls des profils valides sont créés, protégeant les utilisateurs et organisant la base de données.

<strong><em>Composants réutilisables :</em></strong> Modals et formulaires créés en tant que composants indépendants pour faciliter l'intégration dans d'autres parties de l'application et améliorer la collaboration d'équipe.

<strong>AVANTAGES :</strong>
✓ Sécurité renforcée dès l'inscription
✓ Base de données bien organisée
✓ Expérience utilisateur améliorée
✓ Code flexible et collaboratif`
            : `<strong>FRONTEND TECHNOLOGIES</strong>

<strong><em>Stack :</em></strong> <strong>React.js</strong> + <strong>Vite</strong> + <strong>Tailwind CSS</strong> + <strong>Material UI</strong> + <strong>TypeScript</strong>

• <strong>React.js & Vite</strong> : Optimal speed and responsiveness
• <strong>Tailwind CSS</strong> : Elegant design with clean, maintainable code
• <strong>Material UI</strong> : Professional components ready to use
• <strong>TypeScript</strong> : Early error detection for robust code

<strong>FORM MANAGEMENT</strong>

• <strong><em>Formik + Yup</em></strong> : Simplified form management and reliable validation
• <strong><em>react-datepicker</em></strong> : Intuitive date selection
• <strong><em>Axios</em></strong> : Easy to manage and track HTTP requests

<strong>METHODOLOGY & SECURITY</strong>

<strong><em>Registration Rule :</em></strong> <strong>Mandatory child association to parent profile</strong> from the start of the process. This validation ensures only valid profiles are created, protecting users and organizing the database.

<strong><em>Reusable Components :</em></strong> Modals and forms created as independent components to facilitate integration in other parts of the application and improve team collaboration.

<strong>ADVANTAGES:</strong>
✓ Enhanced security from registration
✓ Well-organized database
✓ Improved user experience
✓ Flexible and collaborative code`,
          language: "typescript",
          image: "/assets/eduka/front-end/Front-end.png"
        },
        {
          title: language === "fr" ? "Typage TypeScript pour les Formulaires" : "TypeScript Typing for Forms",
          description: language === "fr"
            ? "Pourquoi utiliser TypeScript et un typage pour le formulaire"
            : "Why use TypeScript and typing for forms",
          category: "frontend" as const,
          code: language === "fr"
            ? `<strong>IMPORTANCE DU TYPAGE TYPESCRIPT DANS LES FORMULAIRES</strong>

<strong><em>Objectif :</em></strong> Assurer que les données du formulaire sont <strong>correctes et au bon format</strong> avant envoi au serveur.

<strong>STRUCTURE DES CHAMPS TYPÉS :</strong>

• <strong><em>photo</em></strong> : <strong>string</strong> (URL de l'image)
• <strong><em>lastname & firstname</em></strong> : <strong>string</strong> (nom et prénom)
• <strong><em>email</em></strong> : <strong>string</strong> (adresse e-mail)
• <strong><em>children</em></strong> : <strong>array of Child objects</strong>
  - id: <strong>number</strong>
  - name: <strong>string</strong>
  - birthday: <strong>date</strong> (date de naissance)
  - class: <strong>string</strong> (classe scolaire)
• <strong><em>disciplines</em></strong> : <strong>array of strings</strong> (matières : Mathématiques, Musique, etc.)

<strong>AVANTAGES DU TYPAGE :</strong>

<strong>✓ Validation des données :</strong> Chaque champ respecte son type, évitant les erreurs d'envoi
<strong>✓ Maintenabilité :</strong> Code plus clair et facile à comprendre pour l'équipe
<strong>✓ Détection d'erreurs :</strong> Les erreurs de type sont détectées au développement, pas à l'exécution
<strong>✓ Autocomplétion :</strong> L'IDE aide avec les suggestions de propriétés et de méthodes
<strong>✓ Sécurité :</strong> Les données reçues au serveur sont garanties au bon format`
            : `<strong>IMPORTANCE OF TYPESCRIPT TYPING IN FORMS</strong>

<strong><em>Objective :</em></strong> Ensure that form data is <strong>correct and in the right format</strong> before sending to server.

<strong>TYPED FIELDS STRUCTURE:</strong>

• <strong><em>photo</em></strong> : <strong>string</strong> (image URL)
• <strong><em>lastname & firstname</em></strong> : <strong>string</strong> (last and first name)
• <strong><em>email</em></strong> : <strong>string</strong> (email address)
• <strong><em>children</em></strong> : <strong>array of Child objects</strong>
  - id: <strong>number</strong>
  - name: <strong>string</strong>
  - birthday: <strong>date</strong> (birth date)
  - class: <strong>string</strong> (school class)
• <strong><em>disciplines</em></strong> : <strong>array of strings</strong> (subjects: Mathematics, Music, etc.)

<strong>TYPING ADVANTAGES:</strong>

<strong>✓ Data Validation:</strong> Each field respects its type, preventing submission errors
<strong>✓ Maintainability:</strong> Code is clearer and easier to understand for the team
<strong>✓ Error Detection:</strong> Type errors are caught during development, not at runtime
<strong>✓ Autocompletion:</strong> IDE helps with property and method suggestions
<strong>✓ Security:</strong> Data received on server is guaranteed in correct format`,
          language: "typescript",
          image: "/assets/eduka/front-end/Front-end-TypeScript.png"
        },
        {
          title: language === "fr" ? "Composant Subject Selection" : "Subject Selection Component",
          description: language === "fr"
            ? "Gestion de la Sélection des Disciplines avec Modal"
            : "Disciplines Selection Management with Modal",
          category: "frontend" as const,
          code: language === "fr"
            ? `<strong>COMPOSANT SUBJECT SELECTION - SÉLECTION DES DISCIPLINES</strong>

<strong><em>Objectif :</em></strong> Permettre aux utilisateurs de sélectionner les disciplines de leurs enfants via une <strong>modal interactive</strong> avec validation.

<strong>STRUCTURE DU COMPOSANT :</strong>

<strong><em>Props principales :</em></strong>
• <strong>selectedSubjects</strong> : Liste des disciplines actuellement sélectionnées
• <strong>onAddSubject / onRemoveSubject</strong> : Handlers pour gérer l'ajout et la suppression
• <strong>isModalOpen / setModalOpen</strong> : État du modal

<strong><em>Récupération des Disciplines :</em></strong>
• <strong>useEffect</strong> : Appel API au montage du composant
• <strong>Endpoint GET</strong> : Récupère la liste des disciplines disponibles
• <strong>Enum</strong> : Disciplines (Mathématiques, Français, Histoire, Géographie, Musique, etc.)

<strong>RÈGLE DE VALIDATION :</strong>

<strong>⚠️ Limite Maximum de 3 Disciplines</strong>
• Si l'utilisateur tente d'ajouter une 4ème discipline, un <strong>message d'avertissement</strong> s'affiche
• Message : "Maximum 3 disciplines autorisées"
• Le bouton d'ajout se désactive automatiquement

<strong>AVANTAGES :</strong>

✓ Interface claire et intuitive
✓ Validation robuste côté front-end
✓ Expérience utilisateur fluide
✓ Gestion d'état simplifiée
✓ Réutilisabilité du composant`
            : `<strong>SUBJECT SELECTION COMPONENT - DISCIPLINES SELECTION</strong>

<strong><em>Objective :</em></strong> Allow users to select their children's disciplines through an <strong>interactive modal</strong> with validation.

<strong>COMPONENT STRUCTURE:</strong>

<strong><em>Main Props:</em></strong>
• <strong>selectedSubjects</strong> : List of currently selected disciplines
• <strong>onAddSubject / onRemoveSubject</strong> : Handlers for add/remove management
• <strong>isModalOpen / setModalOpen</strong> : Modal state

<strong><em>Fetching Disciplines:</em></strong>
• <strong>useEffect</strong> : API call on component mount
• <strong>GET Endpoint</strong> : Retrieves list of available disciplines
• <strong>Enum</strong> : Disciplines (Mathematics, French, History, Geography, Music, etc.)

<strong>VALIDATION RULE:</strong>

<strong>⚠️ Maximum 3 Disciplines Limit</strong>
• If user tries to add a 4th discipline, a <strong>warning message</strong> appears
• Message: "Maximum 3 disciplines allowed"
• The add button automatically disables

<strong>ADVANTAGES:</strong>

✓ Clear and intuitive interface
✓ Robust front-end validation
✓ Smooth user experience
✓ Simplified state management
✓ Component reusability`,
          language: "typescript",
          image: "/assets/eduka/front-end/Front-end-modal.png"
        },
        {
          title: language === "fr" ? "Architecture du Projet Back-end" : "Backend Project Architecture",
          description: language === "fr"
            ? "Organisation et structure des dossiers du projet NestJS"
            : "Organization and folder structure of the NestJS project",
          category: "backend" as const,
          code: language === "fr"
            ? `<strong>ARCHITECTURE MODULAIRE NESTJS</strong>

<strong><em>Objectif :</em></strong> Organiser le back-end avec une <strong>architecture modulaire</strong> claire et maintenable.

<strong>STRUCTURE DES DOSSIERS :</strong>

• <strong><em>src/</em></strong> : Code source principal
  - <strong><em>modules/</em></strong> : Chaque fonctionnalité est isolée dans son propre module
  - <strong><em>user/</em></strong> : Gestion des utilisateurs
    · <strong>user.controller.ts</strong> : Gère les requêtes HTTP utilisateurs
    · <strong>user.service.ts</strong> : Logique métier utilisateurs
  - <strong><em>auth/</em></strong> : Authentification
    · <strong>auth.controller.ts</strong> : Gère les requêtes d'authentification
    · <strong>auth.service.ts</strong> : Logique d'authentification
    · <strong>jwt.strategy.ts</strong> : Gestion des tokens JWT pour sécuriser les routes
  - <strong><em>common/</em></strong> : Éléments partagés (DTO, guards)

• <strong><em>prisma/</em></strong> : Schéma et migrations de la base de données
• <strong><em>test/</em></strong> : Tests unitaires et d'intégration

<strong>FICHIERS RACINE :</strong>

• <strong>app.module.ts</strong> : Module principal qui importe tous les sous-modules
• <strong>app.controller.ts</strong> : Contrôleur racine
• <strong>app.service.ts</strong> : Service racine
• <strong>main.ts</strong> : Point d'entrée de l'application

<strong>AVANTAGES :</strong>

✓ Séparation claire des responsabilités
✓ Modules indépendants et réutilisables
✓ Facilité de maintenance et de tests
✓ Scalabilité du projet`
            : `<strong>NESTJS MODULAR ARCHITECTURE</strong>

<strong><em>Objective :</em></strong> Organize the back-end with a clear and maintainable <strong>modular architecture</strong>.

<strong>FOLDER STRUCTURE:</strong>

• <strong><em>src/</em></strong> : Main source code
  - <strong><em>modules/</em></strong> : Each feature is isolated in its own module
  - <strong><em>user/</em></strong> : User management
    · <strong>user.controller.ts</strong> : Handles user HTTP requests
    · <strong>user.service.ts</strong> : User business logic
  - <strong><em>auth/</em></strong> : Authentication
    · <strong>auth.controller.ts</strong> : Handles authentication requests
    · <strong>auth.service.ts</strong> : Authentication logic
    · <strong>jwt.strategy.ts</strong> : JWT token management to secure routes
  - <strong><em>common/</em></strong> : Shared elements (DTOs, guards)

• <strong><em>prisma/</em></strong> : Database schema and migrations
• <strong><em>test/</em></strong> : Unit and integration tests

<strong>ROOT FILES:</strong>

• <strong>app.module.ts</strong> : Main module that imports all sub-modules
• <strong>app.controller.ts</strong> : Root controller
• <strong>app.service.ts</strong> : Root service
• <strong>main.ts</strong> : Application entry point

<strong>ADVANTAGES:</strong>

✓ Clear separation of concerns
✓ Independent and reusable modules
✓ Easy maintenance and testing
✓ Project scalability`,
          language: "typescript",
          image: "/assets/eduka/back-end/Archictecture.png"
        },
        {
          title: language === "fr" ? "Workflow - Mise à jour du Profil" : "Workflow - Profile Update",
          description: language === "fr"
            ? "Processus sécurisé de modification de compte via JWT"
            : "Secure account modification process via JWT",
          category: "backend" as const,
          code: language === "fr"
            ? `<strong>MISE À JOUR SÉCURISÉE DU PROFIL UTILISATEUR</strong>

<strong><em>Objectif :</em></strong> Permettre la modification du compte en vérifiant l'identité via un <strong>token JWT</strong> avant toute opération.

<strong>FLUX DE LA REQUÊTE :</strong>

<strong>1. Requête PUT</strong> → Le client envoie une requête <strong>PUT /user/update/id</strong> avec le token JWT dans l'en-tête d'autorisation.

<strong>2. Validation du Token</strong> → Le serveur vérifie la validité du JWT.
  • <em>Token invalide/expiré</em> → Réponse <strong>401 Unauthorized</strong>

<strong>3. Extraction de l'ID</strong> → Le serveur extrait l'ID utilisateur contenu dans le token pour identifier le demandeur.

<strong>4. Vérification en BDD</strong> → Le serveur vérifie que l'utilisateur existe en base de données.
  • <em>Utilisateur introuvable</em> → Réponse <strong>401 Unauthorized</strong>

<strong>5. Mise à jour</strong> → Les modifications sont appliquées et une réponse de succès est renvoyée.

<strong>GESTION DES TOKENS :</strong>

• <strong><em>Token expiré</em></strong> : Le client utilise le <strong>refresh token</strong> pour obtenir un nouveau JWT
• <strong><em>Refresh token</em></strong> : Permet de rester authentifié sans reconnexion manuelle

<strong>AVANTAGES :</strong>

✓ Seul l'utilisateur authentifié peut modifier son compte
✓ Double vérification (token + existence en BDD)
✓ Gestion automatique de l'expiration via refresh token
✓ Réponses d'erreur explicites à chaque étape`
            : `<strong>SECURE USER PROFILE UPDATE</strong>

<strong><em>Objective :</em></strong> Allow account modification by verifying identity via a <strong>JWT token</strong> before any operation.

<strong>REQUEST FLOW:</strong>

<strong>1. PUT Request</strong> → Client sends a <strong>PUT /user/update/id</strong> request with the JWT token in the authorization header.

<strong>2. Token Validation</strong> → Server verifies the JWT validity.
  • <em>Invalid/expired token</em> → <strong>401 Unauthorized</strong> response

<strong>3. ID Extraction</strong> → Server extracts the user ID from the token to identify the requester.

<strong>4. Database Check</strong> → Server verifies the user exists in the database.
  • <em>User not found</em> → <strong>401 Unauthorized</strong> response

<strong>5. Update</strong> → Modifications are applied and a success response is returned.

<strong>TOKEN MANAGEMENT:</strong>

• <strong><em>Expired token</em></strong> : Client uses the <strong>refresh token</strong> to obtain a new JWT
• <strong><em>Refresh token</em></strong> : Allows staying authenticated without manual re-login

<strong>ADVANTAGES:</strong>

✓ Only authenticated user can modify their account
✓ Double verification (token + database existence)
✓ Automatic expiration handling via refresh token
✓ Explicit error responses at each step`,
          language: "typescript",
          image: "/assets/eduka/back-end/Workflow.png"
        },
        {
          title: language === "fr" ? "Validation DTO avec NestJS" : "DTO Validation with NestJS",
          description: language === "fr"
            ? "Validation des données entrantes avec les Data Transfer Objects"
            : "Incoming data validation with Data Transfer Objects",
          category: "backend" as const,
          code: language === "fr"
            ? `<strong>VALIDATION DTO AVEC NESTJS</strong>

<strong><em>Objectif :</em></strong> Valider et structurer les données entrantes avec des <strong>Data Transfer Objects (DTO)</strong> et le package <strong>class-validator</strong>.

<strong>QU'EST-CE QU'UN DTO ?</strong>

Un DTO définit la <strong>forme exacte des données</strong> attendues par l'API. Il agit comme un contrat entre le client et le serveur, garantissant que chaque requête contient des données valides avant tout traitement.

<strong>DÉCORATEURS DE VALIDATION :</strong>

• <strong>@IsString()</strong> : Vérifie que la valeur est une chaîne de caractères
• <strong>@IsEmail()</strong> : Valide le format d'une adresse email
• <strong>@IsOptional()</strong> : Rend le champ facultatif
• <strong>@IsNotEmpty()</strong> : Interdit les valeurs vides
• <strong>@MinLength() / @MaxLength()</strong> : Contrôle la longueur des chaînes

<strong>VALIDATION DES TABLEAUX D'ENFANTS :</strong>

• <strong>@IsArray()</strong> : Vérifie que la valeur est un tableau
• <strong>@ArrayMinSize(1)</strong> : Impose au moins un enfant dans le tableau
• <strong>@ValidateNested({ each: true })</strong> : Valide chaque objet du tableau individuellement
• <strong>@Type(() => CreateChildDto)</strong> : Transforme chaque élément en instance de DTO enfant pour validation

Cette approche garantit que chaque requête est validée automatiquement, rejetant les données invalides avec des messages d'erreur explicites. La validation imbriquée permet de traiter les structures complexes comme les profils parent avec plusieurs enfants, renforçant la sécurité et documentant implicitement la structure API attendue.`
            : `<strong>DTO VALIDATION WITH NESTJS</strong>

<strong><em>Objective :</em></strong> Validate and structure incoming data with <strong>Data Transfer Objects (DTO)</strong> and the <strong>class-validator</strong> package.

<strong>WHAT IS A DTO?</strong>

A DTO defines the <strong>exact shape of data</strong> expected by the API. It acts as a contract between client and server, ensuring each request contains valid data before any processing.

<strong>VALIDATION DECORATORS:</strong>

• <strong>@IsString()</strong> : Verifies the value is a string
• <strong>@IsEmail()</strong> : Validates email address format
• <strong>@IsOptional()</strong> : Makes the field optional
• <strong>@IsNotEmpty()</strong> : Forbids empty values
• <strong>@MinLength() / @MaxLength()</strong> : Controls string length

<strong>CHILDREN ARRAY VALIDATION:</strong>

• <strong>@IsArray()</strong> : Verifies the value is an array
• <strong>@ArrayMinSize(1)</strong> : Requires at least one child in the array
• <strong>@ValidateNested({ each: true })</strong> : Validates each object in the array individually
• <strong>@Type(() => CreateChildDto)</strong> : Transforms each element into a child DTO instance for validation

This approach ensures every request is automatically validated, rejecting invalid data with explicit error messages. Nested validation handles complex structures like parent profiles with multiple children, enhancing security and implicitly documenting the expected API structure.`,
          language: "typescript",
          image: "/assets/eduka/back-end/DTO.png"
        },
        {
          title: language === "fr" ? "Service Back-end - Update Profile" : "Backend Service - Update Profile",
          description: language === "fr"
            ? "Logique complète de mise à jour du profil utilisateur avec Prisma"
            : "Complete user profile update logic with Prisma",
          category: "backend" as const,
          code: language === "fr"
            ? `<strong>LOGIQUE DE MISE À JOUR DU PROFIL UTILISATEUR</strong>

<strong><em>Objectif :</em></strong> Gérer la <strong>modification complète du profil</strong> avec vérification des données, validation des disciplines et gestion des relations.

<strong>1. VÉRIFICATION DU PROFIL UTILISATEUR</strong>

<strong><em>Ce que fait le code :</em></strong> Vérifie si l'utilisateur existe dans la base de données avant de procéder aux mises à jour.

<strong><em>Prisma :</em></strong> Utilise <strong>findUnique</strong> pour rechercher l'utilisateur par son ID. Si le profil n'existe pas, il renvoie une erreur.

<strong><em>Capture :</em></strong> Montre <strong>updateProfile</strong> avec la partie <strong>existingProfile</strong> pour la vérification.

<strong>2. VALIDATION DES DISCIPLINES</strong>

<strong><em>Ce que fait le code :</em></strong> Vérifie que les disciplines envoyées par l'utilisateur sont valides et reconnues dans l'application.

<strong><em>Prisma :</em></strong> Utilise <strong>findMany</strong> pour comparer les disciplines envoyées avec celles stockées en base de données, s'assurant qu'elles sont valides.

<strong><em>Capture :</em></strong> Montre <strong>validDisciplines</strong>, qui valide et filtre les disciplines avant la mise à jour.

<strong>3. GESTION DES RELATIONS DISCIPLINES-UTILISATEUR</strong>

<strong><em>Ce que fait le code :</em></strong> Met à jour les relations entre l'utilisateur et ses disciplines, en ajoutant de nouvelles disciplines ou en supprimant celles qui ne sont plus nécessaires.

<strong><em>Prisma :</em></strong> Utilise <strong>deleteMany</strong> pour supprimer les anciennes relations et <strong>create</strong> pour ajouter les nouvelles dans la table <strong>userHasDiscipline</strong>.

<strong><em>Capture :</em></strong> Montre <strong>userHasDiscipline</strong>, avec les actions <strong>deleteMany</strong> et <strong>create</strong> pour gérer les relations.

Ce processus en trois étapes assure que seuls les profils existants et valides peuvent être modifiés. La gestion atomique des relations garantit que toutes les disciplines sont mises à jour ensemble, évitant les incohérences en base de données.`
            : `<strong>USER PROFILE UPDATE LOGIC</strong>

<strong><em>Objective :</em></strong> Handle <strong>complete profile modification</strong> with data verification, discipline validation, and relationship management.

<strong>1. USER PROFILE VERIFICATION</strong>

<strong><em>What the code does:</em></strong> Verifies the user exists in the database before proceeding with updates.

<strong><em>Prisma:</em></strong> Uses <strong>findUnique</strong> to search for user by ID. If profile doesn't exist, returns an error.

<strong><em>Capture:</em></strong> Shows <strong>updateProfile</strong> with the <strong>existingProfile</strong> verification part.

<strong>2. DISCIPLINE VALIDATION</strong>

<strong><em>What the code does:</em></strong> Verifies that disciplines sent by the user are valid and recognized in the application.

<strong><em>Prisma:</em></strong> Uses <strong>findMany</strong> to compare sent disciplines with those stored in database, ensuring they are valid.

<strong><em>Capture:</em></strong> Shows <strong>validDisciplines</strong>, which validates and filters disciplines before update.

<strong>3. MANAGING USER-DISCIPLINE RELATIONSHIPS</strong>

<strong><em>What the code does:</em></strong> Updates relationships between user and disciplines, adding new ones or removing those no longer needed.

<strong><em>Prisma:</em></strong> Uses <strong>deleteMany</strong> to remove old relationships and <strong>create</strong> to add new ones in the <strong>userHasDiscipline</strong> table.

<strong><em>Capture:</em></strong> Shows <strong>userHasDiscipline</strong>, with <strong>deleteMany</strong> and <strong>create</strong> actions for managing relationships.

This three-step process ensures only existing and valid profiles can be modified. Atomic relationship management guarantees all disciplines are updated together, preventing database inconsistencies.`,
          language: "typescript",
          image: "/assets/eduka/back-end/Service.png"
        },
        {
          title: language === "fr" ? "Mise à jour et Vérification en Base de Données" : "Profile Update and Database Verification",
          description: language === "fr"
            ? "Application des modifications et vérification des relations utilisateur-discipline"
            : "Applying modifications and verifying user-discipline relationships",
          category: "backend" as const,
          code: language === "fr"
            ? `<strong>MISE À JOUR ET VÉRIFICATION EN BASE DE DONNÉES</strong>

<strong><em>Objectif :</em></strong> Appliquer les modifications du profil utilisateur et vérifier leur persistance dans la base de données MySQL.

<strong>4. MISE À JOUR DU PROFIL UTILISATEUR</strong>

<strong><em>Ce que fait le code :</em></strong> Met à jour les informations personnelles de l'utilisateur (nom, prénom, email, enfants, etc.) avec les nouvelles données fournies.

<strong><em>Prisma :</em></strong> Utilise <strong>update</strong> pour appliquer les changements dans la table <strong>profile</strong>, modifiant les champs fournis sans toucher aux autres.

<strong><em>Capture :</em></strong> Montre <strong>updatedProfile</strong>, qui applique la mise à jour des informations du profil.

<strong>5. RETOURNE LE PROFIL</strong>

Après la mise à jour réussie, le service retourne le profil mis à jour (<strong>return updatedProfile</strong>) pour confirmation côté client.

<strong>6. VÉRIFICATION DANS LA BASE DE DONNÉES</strong>

<strong><em>Ce que montre la capture :</em></strong> Les relations mises à jour entre l'utilisateur et les disciplines directement dans la base de données MySQL pour vérifier que tout est bien enregistré.

<strong><em>Prisma :</em></strong> Sauvegarde toutes les modifications dans la table <strong>UserHasDisciplines</strong>, assurant que les relations sont bien stockées.

<strong><em>Capture :</em></strong> Vue MySQL montrant la table <strong>UserHasDisciplines</strong> avec les relations utilisateur-discipline mises à jour (user_id → discipline_id).

Cette approche garantit la traçabilité complète des modifications, depuis le code jusqu'à la persistance en base de données, permettant une vérification visuelle directe des relations stockées.`
            : `<strong>PROFILE UPDATE AND DATABASE VERIFICATION</strong>

<strong><em>Objective :</em></strong> Apply user profile modifications and verify their persistence in the MySQL database.

<strong>4. USER PROFILE UPDATE</strong>

<strong><em>What the code does:</em></strong> Updates user personal information (first name, last name, email, children, etc.) with the provided new data.

<strong><em>Prisma:</em></strong> Uses <strong>update</strong> to apply changes to the <strong>profile</strong> table, modifying provided fields without touching others.

<strong><em>Capture:</em></strong> Shows <strong>updatedProfile</strong>, which applies profile information updates.

<strong>5. RETURNS THE PROFILE</strong>

After successful update, the service returns the updated profile (<strong>return updatedProfile</strong>) for client-side confirmation.

<strong>6. DATABASE VERIFICATION</strong>

<strong><em>What the capture shows:</em></strong> Updated relationships between user and disciplines directly in the MySQL database to verify everything is properly recorded.

<strong><em>Prisma:</em></strong> Saves all modifications to the <strong>UserHasDisciplines</strong> table, ensuring relationships are properly stored.

<strong><em>Capture:</em></strong> MySQL view showing the <strong>UserHasDisciplines</strong> table with updated user-discipline relationships (user_id → discipline_id).

This approach ensures complete modification traceability, from code to database persistence, allowing direct visual verification of stored relationships.`,
          language: "typescript",
          image: "/assets/eduka/back-end/Uptade.png"
        },
        {
          title: language === "fr" ? "Contrôleur et Authentification JWT" : "Controller and JWT Authentication",
          description: language === "fr"
            ? "Gestion des requêtes HTTP avec authentification JWT via les guards NestJS"
            : "HTTP request management with JWT authentication via NestJS guards",
          category: "backend" as const,
          code: language === "fr"
            ? `<strong>CONTRÔLEUR ET AUTHENTIFICATION JWT</strong>

<strong><em>Objectif :</em></strong> Gérer la mise à jour du profil utilisateur via une requête <strong>PUT /user/:id</strong> en utilisant un garde JWT pour authentifier l'utilisateur et valider le token avant d'agir.

<strong>STRUCTURE DU CONTRÔLEUR :</strong>

<strong><em>Imports essentiels :</em></strong>
• <strong>@nestjs/common</strong> : Controller, Get, Put, Delete, Param, Body, UseGuards
• <strong>ProfileService</strong> : Service contenant la logique métier
• <strong>CreateUpdateProfileDto</strong> : DTO de validation des données
• <strong>JwtAuthGuard</strong> : Guard d'authentification JWT

<strong>ROUTE PROTÉGÉE PAR JWT :</strong>

<strong>@UseGuards(JwtAuthGuard)</strong> : Protège la route avec authentification JWT obligatoire

<strong>@Put('update/:id')</strong> : Définit la route PUT pour la mise à jour

<strong><em>Paramètres :</em></strong>
• <strong>@Param('id')</strong> : Extrait l'ID utilisateur depuis l'URL
• <strong>@Body()</strong> : Récupère les données du profil à mettre à jour (validées par le DTO)

<strong>FLUX D'AUTHENTIFICATION :</strong>

<strong>1. Le client envoie une requête PUT</strong> avec un token JWT dans l'en-tête Authorization

<strong>2. Le JwtAuthGuard vérifie la validité du token</strong> avant que la méthode du contrôleur soit exécutée

<strong>3. L'ID utilisateur est extrait</strong> depuis les paramètres d'URL et vérifié

<strong>4. Le service est appelé</strong> avec <strong>this.profileService.updateProfile(profileId, updateProfileDto)</strong> pour effectuer la mise à jour

Le contrôleur agit comme un point d'entrée sécurisé, déléguant la logique métier au service tout en garantissant l'authentification via JWT.`
            : `<strong>CONTROLLER AND JWT AUTHENTICATION</strong>

<strong><em>Objective :</em></strong> Handle user profile update via a <strong>PUT /user/:id</strong> request using a JWT guard to authenticate the user and validate the token before acting.

<strong>CONTROLLER STRUCTURE:</strong>

<strong><em>Essential imports:</em></strong>
• <strong>@nestjs/common</strong> : Controller, Get, Put, Delete, Param, Body, UseGuards
• <strong>ProfileService</strong> : Service containing business logic
• <strong>CreateUpdateProfileDto</strong> : DTO for data validation
• <strong>JwtAuthGuard</strong> : JWT authentication guard

<strong>JWT PROTECTED ROUTE:</strong>

<strong>@UseGuards(JwtAuthGuard)</strong> : Protects the route with mandatory JWT authentication

<strong>@Put('update/:id')</strong> : Defines the PUT route for update

<strong><em>Parameters:</em></strong>
• <strong>@Param('id')</strong> : Extracts user ID from URL
• <strong>@Body()</strong> : Retrieves profile data to update (validated by DTO)

<strong>AUTHENTICATION FLOW:</strong>

<strong>1. Client sends a PUT request</strong> with a JWT token in the Authorization header

<strong>2. JwtAuthGuard verifies token validity</strong> before the controller method is executed

<strong>3. User ID is extracted</strong> from URL parameters and verified

<strong>4. Service is called</strong> with <strong>this.profileService.updateProfile(profileId, updateProfileDto)</strong> to perform the update

The controller acts as a secure entry point, delegating business logic to the service while ensuring authentication via JWT.`,
          language: "typescript",
          image: "/assets/eduka/back-end/Controller.png"
        },
        {
          title: language === "fr" ? "Test API avec Postman" : "API Testing with Postman",
          description: language === "fr"
            ? "Vérification de la modification du profil utilisateur via Postman"
            : "User profile update verification via Postman",
          category: "backend" as const,
          code: language === "fr"
            ? `<strong>TEST API AVEC POSTMAN</strong>

<strong><em>Objectif :</em></strong> Tester la requête <strong>PUT /user/:id</strong> pour modifier un profil utilisateur et valider la réponse du serveur.

<strong>CONFIGURATION DE LA REQUÊTE :</strong>

• <strong>Méthode</strong> : PUT
• <strong>Headers</strong> : Authorization avec token JWT
• <strong>Body</strong> : Données du profil (firstname, lastname, email, children, disciplines)

<strong>RÉPONSE DU SERVEUR :</strong>

La réponse affiche un code <strong>200 OK</strong> en vert, confirmant le succès de la modification. Le profil mis à jour est retourné avec les nouvelles données et relations actualisées.

Postman permet de tester l'API directement sans interface front-end, facilitant le débogage et la validation des endpoints.`
            : `<strong>API TESTING WITH POSTMAN</strong>

<strong><em>Objective :</em></strong> Test the <strong>PUT /user/:id</strong> request to modify a user profile and validate the server response.

<strong>REQUEST CONFIGURATION:</strong>

• <strong>Method</strong> : PUT
• <strong>Headers</strong> : Authorization with JWT token
• <strong>Body</strong> : Profile data (firstname, lastname, email, children, disciplines)

<strong>SERVER RESPONSE:</strong>

The response displays a <strong>200 OK</strong> status code in green, confirming successful modification. The updated profile is returned with new data and updated relationships.

Postman allows direct API testing without front-end interface, facilitating debugging and endpoint validation.`,
          language: "typescript",
          image: "/assets/eduka/back-end/Postman.png"
        }
      ],
      deployment: {
        title: language === "fr"
          ? "Déploiement avec Docker et AWS"
          : "Deployment with Docker and AWS",
        description: language === "fr"
          ? "Containerisation de l'application avec Docker et déploiement sur AWS EC2 pour assurer disponibilité et performance en production."
          : "Application containerization with Docker and deployment on AWS EC2 to ensure availability and performance in production.",
        image: "/assets/eduka/deployment-schema.png",
        steps: language === "fr" ? [
          "🎨 Déploiement Front-end sur Vercel\n   • Connecter le repository GitHub\n   • Configuration automatique Next.js\n   • Déploiement continu (CI/CD)\n   • URL de production générée",
          "📦 Containerisation Docker (Backend)\n   • Créer un Dockerfile pour le backend\n   • Inclure Node.js, MySQL et dépendances\n   • Construire l'image Docker",
          "☁️ Publication de l'image\n   • Pousser l'image sur Docker Hub\n   • Versionner l'image (tags)\n   • Rendre accessible pour AWS",
          "🖥️ Configuration AWS EC2\n   • Créer une instance EC2\n   • Installer Docker sur le serveur\n   • Récupérer et exécuter l'image",
          "🌐 Exposition publique\n   • Configurer les groupes de sécurité\n   • Assigner une adresse IP publique\n   • Connecter front-end (Vercel) au backend (AWS)",
          "📊 Tests de performance\n   • Simulation de charge avec JMeter\n   • Monitoring avec AWS CloudWatch\n   • Identifier les goulots d'étranglement",
          "🔔 Surveillance continue\n   • Configuration Kuma Uptime\n   • Alertes en cas de problème\n   • Suivi de la disponibilité 24/7",
        ] : [
          "🎨 Front-end Deployment on Vercel\n   • Connect GitHub repository\n   • Automatic Next.js configuration\n   • Continuous deployment (CI/CD)\n   • Production URL generated",
          "📦 Docker Containerization (Backend)\n   • Create a Dockerfile for backend\n   • Include Node.js, MySQL and dependencies\n   • Build Docker image",
          "☁️ Image Publishing\n   • Push image to Docker Hub\n   • Version the image (tags)\n   • Make accessible for AWS",
          "🖥️ AWS EC2 Configuration\n   • Create EC2 instance\n   • Install Docker on server\n   • Pull and run the image",
          "🌐 Public Exposure\n   • Configure security groups\n   • Assign public IP address\n   • Connect front-end (Vercel) to backend (AWS)",
          "📊 Performance Testing\n   • Load simulation with JMeter\n   • Monitoring with AWS CloudWatch\n   • Identify bottlenecks",
          "🔔 Continuous Monitoring\n   • Kuma Uptime configuration\n   • Alerts for issues\n   • 24/7 availability tracking",
        ],
        conclusion: language === "fr"
          ? "Architecture cloud complète garantissant performance, scalabilité et disponibilité continue. Le monitoring permet d'optimiser les ressources et d'intervenir rapidement en cas d'incident."
          : "Complete cloud architecture ensuring performance, scalability and continuous availability. Monitoring enables resource optimization and quick incident response."
      },
      design: {
        title: language === "fr"
          ? "Processus de Conception"
          : "Design Process",
        description: language === "fr"
          ? "EDUKA a été conçue selon une méthodologie complète combinant UX/UI design et planification projet pour garantir une expérience utilisateur optimale et une réalisation conforme aux objectifs."
          : "EDUKA was designed using a comprehensive methodology combining UX/UI design and project planning to ensure optimal user experience and delivery aligned with project goals.",
        methods: [
          {
            name: language === "fr" ? "Carte Mentale" : "Mind Map",
            description: language === "fr"
              ? "Structuration des idées et organisation des fonctionnalités principales de l'application pour définir le périmètre du projet."
              : "Structuring ideas and organizing main application features to define project scope.",
            image: "/assets/eduka/mindmap.png"
          },
          {
            name: language === "fr" ? "Epic Story & User Stories" : "Epic Story & User Stories",
            description: language === "fr"
              ? "Décomposition des fonctionnalités en épics et user stories pour une planification agile. Chaque story décrit une fonctionnalité du point de vue de l'utilisateur avec critères d'acceptation clairs."
              : "Breaking down features into epics and user stories for agile planning. Each story describes a feature from the user's perspective with clear acceptance criteria.",
            image: "/assets/eduka/epic-story.png"
          },
          {
            name: language === "fr" ? "Wireframes" : "Wireframes",
            description: language === "fr"
              ? "Esquisse des interfaces en wireframes pour définir la structure et la disposition des éléments avant le design visuel."
              : "Sketching interfaces with wireframes to define structure and element layout before visual design.",
            image: "/assets/eduka/wireframes.png"
          },
          {
            name: language === "fr" ? "Méthode MERISE" : "MERISE Method",
            description: language === "fr"
              ? "Modélisation des données et flux de l'application avec les diagrammes de contexte et modèles conceptuels de données (MCD) pour assurer une architecture robuste."
              : "Modeling application data and flows with context diagrams and conceptual data models (CDM) to ensure robust architecture.",
            image: "/assets/eduka/merise.png"
          },
          {
            name: language === "fr" ? "Maquettes Figma" : "Figma Mockups",
            description: language === "fr"
              ? "Conception détaillée des interfaces dans Figma avec design system, composants réutilisables, et prototypage interactif pour valider l'expérience utilisateur."
              : "Detailed interface design in Figma with design system, reusable components, and interactive prototyping to validate user experience.",
            image: "/assets/eduka/figma-mockup.png"
          }
        ]
      },
      gridSize: "md:col-span-2",
    },
    {
      id: "portfolio",
      quote:
        language === "fr"
          ? "Ce portfolio a été entièrement conçu et développé par moi, sans utiliser de template générique. Il reflète ma créativité et mon identité. Réalisé avec React, Next.js et TypeScript, et déployé sur Vercel, il met en avant mes projets, mon parcours et mes compétences. Une intégration avec Nodemailer permet également un contact direct via le formulaire."
          : "This portfolio was entirely designed and developed by me, without using a generic template. It reflects my creativity and identity. Built with React, Next.js, and TypeScript, and deployed on Vercel, it showcases my projects, background, and skills. A Nodemailer integration allows direct contact via the form.",
      name: "Portfolio personnel",
      designation: language === "fr" ? "Design de portfolio" : "Portfolio Design",
      srcs: ["/assets/portfolio/portfolio.png","/assets/portfolio/seo.png"],
      stack: ["Figma", "React", "NextJS", "Tailwind", "TypeScript", "Git", "Vercel"],
      gallery: [
        "/assets/portfolio/portfolio.png",
        "/assets/portfolio/seo.png",
      ],
      features: language === "fr" ? [
        "Design unique et moderne créé sur Figma",
        "Animations fluides avec Framer Motion",
        "Formulaire de contact fonctionnel avec Nodemailer",
        "SEO optimisé avec Next.js 15",
        "Performance optimale (score 100 Lighthouse)",
        "Thème de Noël saisonnier avec effets visuels",
        "Support multilingue (FR/EN)",
        "Déploiement automatique sur Vercel",
      ] : [
        "Unique and modern design created on Figma",
        "Smooth animations with Framer Motion",
        "Functional contact form with Nodemailer",
        "SEO optimized with Next.js 15",
        "Optimal performance (100 Lighthouse score)",
        "Seasonal Christmas theme with visual effects",
        "Multilingual support (FR/EN)",
        "Automatic deployment on Vercel",
      ],
      codeSnippets: [
        {
          title: language === "fr" ? "Hook personnalisé pour le thème de Noël" : "Custom hook for Christmas theme",
          description: language === "fr"
            ? "Hook React qui active automatiquement les décorations de Noël selon la période de l'année"
            : "React hook that automatically enables Christmas decorations based on time of year",
          code: `export const useChristmasTheme = () => {
  const [isChristmas, setIsChristmas] = useState(false);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const startDate = new Date(year, 11, 12); // Dec 12
    const endDate = new Date(year + 1, 0, 3); // Jan 3

    setIsChristmas(now >= startDate && now <= endDate);
  }, []);

  return isChristmas;
};`,
          language: "typescript"
        },
        {
          title: language === "fr" ? "API Route pour l'envoi d'emails" : "API Route for sending emails",
          description: language === "fr"
            ? "Route API Next.js qui gère l'envoi des emails de contact avec Nodemailer"
            : "Next.js API route that handles contact email sending with Nodemailer",
          code: `export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: \`Portfolio Contact: \${name}\`,
    html: \`<p><strong>From:</strong> \${name}</p>
           <p><strong>Email:</strong> \${email}</p>
           <p><strong>Message:</strong> \${message}</p>\`,
  });

  return Response.json({ success: true });
}`,
          language: "typescript"
        }
      ],
      architecture: {
        description: language === "fr"
          ? "Ce portfolio utilise Next.js 15 avec App Router pour un routing moderne et performant. Le design est entièrement personnalisé avec Tailwind CSS, sans dépendance à des templates. Les animations sont gérées par Framer Motion pour une expérience fluide."
          : "This portfolio uses Next.js 15 with App Router for modern and performant routing. The design is fully customized with Tailwind CSS, without relying on templates. Animations are handled by Framer Motion for a smooth experience.",
        points: language === "fr" ? [
          "Next.js 15 avec App Router pour le SSR et SSG",
          "Tailwind CSS pour un design responsive et moderne",
          "Framer Motion pour les animations fluides",
          "TypeScript pour la sécurité du code",
          "Optimisation SEO avec next-sitemap",
          "Déploiement sur Vercel avec CI/CD automatique",
        ] : [
          "Next.js 15 with App Router for SSR and SSG",
          "Tailwind CSS for responsive and modern design",
          "Framer Motion for smooth animations",
          "TypeScript for code safety",
          "SEO optimization with next-sitemap",
          "Deployment on Vercel with automatic CI/CD",
        ]
      },
      gridSize: "md:col-span-1",
    },
    {
      id: "gta-v-fivem",
      quote:
        language === "fr"
          ? "J'ai conçu et géré un serveur GTA V RP en utilisant la plateforme FiveM. Mon objectif était de créer et personnaliser les scripts (en Lua et Vue.js), de les intégrer au serveur, et d'assurer leur bon fonctionnement côté base de données. Ce projet m'a permis de combiner logique back-end et immersion utilisateur dans un univers fictif."
          : "I designed and managed a GTA V RP server using the FiveM platform. My goal was to create and customize scripts (in Lua and Vue.js), integrate them into the server, and ensure proper database operations. This project allowed me to combine back-end logic with user immersion in a fictional world.",
      name: "Serveur GTA V / FIVEM",
      designation: language === "fr" ? "Projet solo" : "Solo project",
      srcs: ["/assets/gta/Gta.webp"],
      stack: ["Figma", "Vue", "Lua", "Tailwind", "Mysql"],
      gallery: [
        "/assets/gta/Gta.webp",
      ],
      features: language === "fr" ? [
        "Système d'économie réaliste avec jobs variés",
        "Interface utilisateur personnalisée avec Vue.js",
        "Système d'inventaire avancé",
        "Intégration de véhicules et garages personnalisés",
        "Système de factions et organisations",
        "Base de données MySQL pour la persistance des données",
        "Scripts Lua optimisés pour les performances",
        "Gestion de permissions et rôles personnalisés",
      ] : [
        "Realistic economy system with various jobs",
        "Custom user interface with Vue.js",
        "Advanced inventory system",
        "Custom vehicles and garages integration",
        "Factions and organizations system",
        "MySQL database for data persistence",
        "Optimized Lua scripts for performance",
        "Custom permissions and roles management",
      ],
      codeSnippets: [
        {
          title: language === "fr" ? "Script Lua pour le système d'inventaire" : "Lua script for inventory system",
          description: language === "fr"
            ? "Gestion de l'inventaire des joueurs avec ajout/suppression d'items"
            : "Player inventory management with add/remove items",
          code: `RegisterNetEvent('inventory:addItem')
AddEventHandler('inventory:addItem', function(itemName, quantity)
    local xPlayer = ESX.GetPlayerFromId(source)
    local item = xPlayer.getInventoryItem(itemName)

    if item.limit ~= -1 and item.count + quantity > item.limit then
        TriggerClientEvent('notification', source, 'error', 'Inventaire plein')
    else
        xPlayer.addInventoryItem(itemName, quantity)
        MySQL.Async.execute('UPDATE users SET inventory = @inventory WHERE identifier = @identifier', {
            ['@inventory'] = json.encode(xPlayer.inventory),
            ['@identifier'] = xPlayer.identifier
        })
        TriggerClientEvent('notification', source, 'success', 'Item ajouté')
    end
end)`,
          language: "lua"
        },
        {
          title: language === "fr" ? "Gestion des événements NUI" : "NUI event handling",
          description: language === "fr"
            ? "Communication entre l'interface et le script Lua via NUI callbacks"
            : "Communication between interface and Lua script via NUI callbacks",
          code: `// Côté JavaScript (NUI)
window.addEventListener('message', (event) => {
  const data = event.data;

  if (data.action === 'openMenu') {
    showPlayerMenu(data.playerData);
  } else if (data.action === 'updateMoney') {
    updatePlayerMoney(data.amount);
  }
});

// Envoyer un événement au client Lua
function sendNUICallback(action, data) {
  fetch(\`https://\${GetParentResourceName()}/\${action}\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}`,
          language: "javascript"
        }
      ],
      architecture: {
        description: language === "fr"
          ? "Le serveur FiveM utilise une architecture client-serveur avec des scripts Lua côté serveur et client, et une interface Vue.js pour les menus UI. Les données sont persistées dans une base MySQL."
          : "The FiveM server uses a client-server architecture with Lua scripts on server and client side, and a Vue.js interface for UI menus. Data is persisted in a MySQL database.",
        points: language === "fr" ? [
          "Scripts Lua pour la logique serveur et client",
          "Interface Vue.js pour les menus et HUD",
          "Base de données MySQL pour la persistance",
          "ESX Framework comme base du serveur RP",
          "NUI (Native UI) pour l'intégration des interfaces web",
          "Optimisation des performances avec threading",
        ] : [
          "Lua scripts for server and client logic",
          "Vue.js interface for menus and HUD",
          "MySQL database for persistence",
          "ESX Framework as RP server base",
          "NUI (Native UI) for web interface integration",
          "Performance optimization with threading",
        ]
      },
      gridSize: "md:col-span-1",
    },
    {
      id: "noteshare",
      quote:
        language === "fr"
          ? "NoteShare est une application de prise de notes collaborative que je développe actuellement. Elle permet d'écrire, partager et collaborer en temps réel dans une interface moderne et intuitive. J'y intègre des fonctionnalités avancées comme les rôles utilisateurs, l'ajout de vidéos et un système de partage sécurisé. Un projet personnel ambitieux pensé comme un vrai SaaS."
          : "NoteShare is a collaborative note-taking app I'm currently developing. It allows users to write, share, and collaborate in real time through a modern, intuitive interface. I'm adding advanced features like user roles, video embeds, and secure sharing. A personal, ambitious project designed like a real SaaS.",
      name: "NoteShare",
      designation: language === "fr" ? "Projet personnel (en cours)" : "Personal project (in progress)",
      srcs: ["/assets/noteshare/1.png","/assets/noteshare/2.png"],
      stack: ["NextJS", "Supabase", "TypeScript", "Tailwind", "shadcn/ui"],
      gallery: [
        "/assets/noteshare/1.png",
        "/assets/noteshare/2.png",
      ],
      features: language === "fr" ? [
        "Édition collaborative en temps réel",
        "Éditeur rich-text avec markdown",
        "Système de permissions par rôle (lecture, écriture, admin)",
        "Partage sécurisé de notes avec liens",
        "Support des médias (images, vidéos, fichiers)",
        "Organisation par dossiers et tags",
        "Mode sombre / clair",
        "Recherche full-text dans les notes",
      ] : [
        "Real-time collaborative editing",
        "Rich-text editor with markdown",
        "Role-based permissions system (read, write, admin)",
        "Secure note sharing with links",
        "Media support (images, videos, files)",
        "Organization by folders and tags",
        "Dark / light mode",
        "Full-text search in notes",
      ],
      codeSnippets: [
        {
          title: language === "fr" ? "Hook pour la synchronisation en temps réel" : "Hook for real-time sync",
          description: language === "fr"
            ? "Hook React utilisant Supabase Realtime pour synchroniser les notes entre utilisateurs"
            : "React hook using Supabase Realtime to sync notes between users",
          code: `export const useRealtimeNote = (noteId: string) => {
  const [note, setNote] = useState<Note | null>(null);
  const supabase = createClient();

  useEffect(() => {
    // Fetch initial note
    const fetchNote = async () => {
      const { data } = await supabase
        .from('notes')
        .select('*')
        .eq('id', noteId)
        .single();
      setNote(data);
    };
    fetchNote();

    // Subscribe to changes
    const channel = supabase
      .channel(\`note:\${noteId}\`)
      .on('postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'notes', filter: \`id=eq.\${noteId}\` },
        (payload) => setNote(payload.new as Note)
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [noteId]);

  return note;
};`,
          language: "typescript"
        },
        {
          title: language === "fr" ? "Composant éditeur de notes" : "Note editor component",
          description: language === "fr"
            ? "Composant React pour l'édition de notes avec sauvegarde automatique"
            : "React component for note editing with auto-save",
          code: `export function NoteEditor({ noteId }: { noteId: string }) {
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const debouncedSave = useDebouncedCallback(async (newContent) => {
    setIsSaving(true);
    await supabase
      .from('notes')
      .update({ content: newContent, updated_at: new Date() })
      .eq('id', noteId);
    setIsSaving(false);
  }, 1000);

  const handleChange = (newContent: string) => {
    setContent(newContent);
    debouncedSave(newContent);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        {isSaving && <Loader2 className="animate-spin" />}
        <span className="text-sm text-gray-500">
          {isSaving ? 'Enregistrement...' : 'Enregistré'}
        </span>
      </div>
      <RichTextEditor value={content} onChange={handleChange} />
    </div>
  );
}`,
          language: "typescript"
        }
      ],
      architecture: {
        description: language === "fr"
          ? "NoteShare est construit avec Next.js 15 et utilise Supabase comme backend (BaaS). Supabase fournit l'authentification, la base de données PostgreSQL et les fonctionnalités temps réel. L'interface utilise shadcn/ui pour des composants modernes et accessibles."
          : "NoteShare is built with Next.js 15 and uses Supabase as backend (BaaS). Supabase provides authentication, PostgreSQL database and real-time features. The interface uses shadcn/ui for modern and accessible components.",
        points: language === "fr" ? [
          "Next.js 15 avec App Router et Server Components",
          "Supabase pour auth, database et realtime",
          "PostgreSQL pour le stockage des données",
          "shadcn/ui pour les composants UI",
          "Tailwind CSS pour le styling",
          "TypeScript pour la sécurité du code",
          "Row Level Security (RLS) pour la sécurité des données",
        ] : [
          "Next.js 15 with App Router and Server Components",
          "Supabase for auth, database and realtime",
          "PostgreSQL for data storage",
          "shadcn/ui for UI components",
          "Tailwind CSS for styling",
          "TypeScript for code safety",
          "Row Level Security (RLS) for data security",
        ]
      },
      gridSize: "md:col-span-2 lg:col-span-1",
    }
  ];
}

export function getProjectById(id: string, language: string): Project | null {
  const projects = getAllProjects(language);
  return projects.find(p => p.id === id) || null;
}
