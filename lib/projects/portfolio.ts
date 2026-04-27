import type { Project } from "./types";

export function getPortfolioProject(language: string): Project {
  return {
    id: "portfolio",
    quote:
      language === "fr"
        ? "Ce portfolio a été entièrement conçu et développé par moi, sans utiliser de template générique. Il reflète ma créativité et mon identité. Réalisé avec React, Next.js et TypeScript, et déployé sur Vercel, il met en avant mes projets, mon parcours et mes compétences. Une intégration avec Nodemailer permet également un contact direct via le formulaire."
        : "This portfolio was entirely designed and developed by me, without using a generic template. It reflects my creativity and identity. Built with React, Next.js, and TypeScript, and deployed on Vercel, it showcases my projects, background, and skills. A Nodemailer integration allows direct contact via the form.",
    name: "Portfolio personnel",
    designation: language === "fr" ? "Design de portfolio" : "Portfolio Design",
    srcs: ["/assets/portfolio/portfolio.png", "/assets/portfolio/seo.png"],
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
    metrics: language === "fr" ? [
      { label: "Score Lighthouse", value: "100" },
      { label: "SEO optimisé", value: "JSON-LD" },
      { label: "Bilingue", value: "FR/EN" },
      { label: "Composants Magic UI", value: "6+" },
    ] : [
      { label: "Lighthouse Score", value: "100" },
      { label: "SEO Optimized", value: "JSON-LD" },
      { label: "Bilingual", value: "FR/EN" },
      { label: "Magic UI Components", value: "6+" },
    ],
    businessCase: language === "fr" ? {
      problem: "Besoin d'un portfolio unique reflétant ma créativité",
      role: "Design & développement complet",
      result: "Score Lighthouse 100, SEO optimisé, bilingue FR/EN",
    } : {
      problem: "Need for a unique portfolio reflecting my creativity",
      role: "Complete design & development",
      result: "Lighthouse score 100, optimized SEO, bilingual FR/EN",
    },
    gridSize: "md:col-span-1",
    liveUrl: "https://www.benhouss.site",
  };
}
