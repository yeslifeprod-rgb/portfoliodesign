"use client";

import { ProjectsCarousel } from "./ProjectsCarousel";
import { useLang } from "@/context/LangContext";

export function Projects() {
  const { language } = useLang();

  const projects = [
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
      codeSnippets: [
        {
          title: language === "fr" ? "Hook personnalisé pour la gestion des trajets" : "Custom hook for ride management",
          description: language === "fr"
            ? "Ce hook React personnalisé gère l'état et la logique des trajets de covoiturage"
            : "This custom React hook manages the state and logic for carpool rides",
          code: `const useRides = () => {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRides = async (eventId: string) => {
    setLoading(true);
    const data = await api.getRides(eventId);
    setRides(data);
    setLoading(false);
  };

  const createRide = async (rideData) => {
    const newRide = await api.createRide(rideData);
    setRides([...rides, newRide]);
    return newRide;
  };

  return { rides, loading, fetchRides, createRide };
};`,
          language: "typescript"
        },
        {
          title: language === "fr" ? "Service d'authentification (NestJS)" : "Authentication service (NestJS)",
          description: language === "fr"
            ? "Service backend pour gérer l'authentification des utilisateurs avec JWT"
            : "Backend service to handle user authentication with JWT",
          code: `@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}`,
          language: "typescript"
        }
      ],
      architecture: {
        description: language === "fr"
          ? "EDUKA suit une architecture moderne basée sur le principe de séparation des responsabilités. Le frontend React communique avec une API REST NestJS, qui elle-même interagit avec une base de données MySQL via Prisma ORM. L'application est déployée sur Vercel pour le frontend et utilise Docker pour le backend."
          : "EDUKA follows a modern architecture based on the separation of concerns principle. The React frontend communicates with a NestJS REST API, which interacts with a MySQL database via Prisma ORM. The application is deployed on Vercel for the frontend and uses Docker for the backend.",
        points: language === "fr" ? [
          "Frontend React avec TypeScript pour un code type-safe",
          "API REST avec NestJS, suivant les bonnes pratiques",
          "Base de données MySQL avec Prisma pour la gestion des données",
          "Authentification JWT pour sécuriser les endpoints",
          "Tests E2E avec Cypress et tests unitaires avec Jest",
          "CI/CD avec GitHub Actions pour le déploiement automatique",
        ] : [
          "React frontend with TypeScript for type-safe code",
          "REST API with NestJS, following best practices",
          "MySQL database with Prisma for data management",
          "JWT authentication to secure endpoints",
          "E2E tests with Cypress and unit tests with Jest",
          "CI/CD with GitHub Actions for automatic deployment",
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

  return <ProjectsCarousel projects={projects} />;
}
