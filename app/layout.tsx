import "./globals.css";
import type { Metadata } from "next";
import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/Navbar";
import HtmlLangUpdater from "@/components/HtmlLangUpdater";
import { KonamiEasterEgg } from "@/components/KonamiEasterEgg";
import { Inter, Roboto, Azeret_Mono, DM_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

const SITE_URL = "https://www.benhouss.site";
const SITE_NAME = "Benhouss";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
    title: {
    default: "Développeur Node.js/NestJS | API REST, PostgreSQL et Docker",
    template: "%s",
  },
  description:
    "Développeur Node.js et NestJS spécialisé dans la correction d’API REST, PostgreSQL, Prisma, authentification et déploiement Docker pour SaaS et applications web.",
  keywords: [
    // ── Identité & localisation ──
    "développeur Lille",
    "développeur full stack lille",
    "développeur Node.js Lille",
    "développeur NestJS Lille",
    "développeur backend Lille",
    "développeur API REST Lille",
    "développeur Docker Lille",
    "développeur web lille",
    "développeur freelance lille",
    "développeur backend freelance Lille",
    "développeur CDI Lille",
    "développeur full stack CDI Lille",
    "recruter développeur Lille",
    "développeur disponible CDI Hauts-de-France",
    "développeur web freelance Lille",
    "applications web et mobile Lille",
    "RNCP niveau 6 développeur",
    "concepteur développeur d'applications",
    "concepteur développeur d'applications Lille",
    // ── Grandes villes — freelance remote ──
    "développeur freelance Paris",
    "développeur freelance Lyon",
    "développeur freelance Marseille",
    "développeur freelance Toulouse",
    "développeur freelance Bordeaux",
    "développeur freelance Nantes",
    "développeur freelance Strasbourg",
    "développeur freelance Montpellier",
    "développeur freelance Nice",
    "développeur freelance Rennes",
    "développeur freelance Grenoble",
    "développeur freelance Toulon",
    "développeur freelance Dijon",
    "développeur freelance Reims",
    "développeur freelance Rouen",
    "développeur freelance Nancy",
    "développeur remote France",
    "développeur full stack remote France",
    "développeur next.js remote France",
    "développeur freelance remote France",
    // ── Frontend ──
    "développeur react lille",
    "développeur react",
    "développeur next.js",
    "développeur next.js lille",
    "développeur typescript",
    "développeur TypeScript Lille",
    "développeur tailwind css",
    "développeur Ionic",
    "développeur Ionic Lille",
    "développeur mobile Lille",
    "développeur application mobile",
    "développeur front end Lille",
    "développeur frontend Lille",
    "développeur vue.js",
    "développeur nuxt",
    "développeur shadcn/ui",
    // ── Backend & BDD ──
    "développeur NestJS",
    "développeur NestJS Lille",
    "développeur node.js",
    "développeur node.js Lille",
    "développeur prisma",
    "développeur PostgreSQL",
    "développeur mongodb",
    "développeur supabase",
    "intégration stripe développeur",
    "développeur backend Lille",
    // ── DevOps & Outils ──
    "développeur docker",
    "déploiement vercel",
    "tests jest cypress développeur",
    "développeur git github",
    // ── Design & Gestion ──
    "intégration figma développeur",
    "méthode agile scrum développeur",
    // ── Noms bruts (recherches directes) ──
    "react", "next.js", "nestjs", "ionic", "nuxt.js", "vue.js",
    "node.js", "typescript", "tailwind css", "prisma",
    "postgresql", "mysql", "mongodb", "supabase", "stripe", "docker",
    "vercel", "jest", "cypress", "figma", "shadcn/ui",
  ],
  authors: [{ name: "Benhouss", url: SITE_URL }],
  creator: "Benhouss",
  publisher: "Benhouss",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Développeur Node.js/NestJS | API REST, PostgreSQL et Docker",
    description:
      "Correction d’API REST, authentification, PostgreSQL/Prisma et déploiement Docker pour SaaS et applications web.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    // Pas d'alternateLocale — aucune version /en n'existe
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur Node.js/NestJS | API REST, PostgreSQL et Docker",
    description:
      "Développeur Node.js/NestJS à Lille : bugs REST, authentification, PostgreSQL/Prisma, tests et Docker.",
    // Pas d'images statiques — l'OG est générée par opengraph-image.tsx
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "6luvCc6H63u8C_4ZNrCg9NYiObPwK5EHaZlI6prdDBU",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0a0a0a" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
        {/* JSON-LD: @graph — Person, LocalBusiness, WebSite, FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.benhouss.site/#person",
                  name: "Benhouss",
                  jobTitle: "Développeur Node.js et NestJS",
                  description:
                    "Développeur Node.js/NestJS basé à Lille. J’interviens sur les API REST, l’authentification, PostgreSQL/Prisma, les tests et les environnements Docker.",
                  url: "https://www.benhouss.site",
                  image: "https://www.benhouss.site/assets/avatar.png",
                  sameAs: [
                    "https://github.com/yeslifeprod-rgb",
                    "https://www.linkedin.com/in/ilyes-g-46b0982b8/",
                    "https://gitlab.com/yeslife.prod",
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Lille",
                    addressRegion: "Hauts-de-France",
                    postalCode: "59000",
                    addressCountry: "FR",
                  },
                  hasCredential: {
                    "@type": "EducationalOccupationalCredential",
                    name: "Titre RNCP Niveau 6 — Concepteur Développeur d'Applications",
                    credentialCategory: "degree",
                  },
                  knowsAbout: [
                    "Node.js", "NestJS", "TypeScript", "REST API", "PostgreSQL",
                    "Prisma", "Supabase", "Docker", "Docker Compose", "Jest",
                    "Cypress", "Swagger", "Git", "React", "Next.js",
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.benhouss.site/#business",
                  name: "Benhouss — Développeur Node.js/NestJS Lille",
                  url: "https://www.benhouss.site",
                  image: "https://www.benhouss.site/assets/avatar.png",
                  priceRange: "€€",
                  areaServed: [
                    { "@type": "City", name: "Lille" },
                    { "@type": "AdministrativeArea", name: "Hauts-de-France" },
                    { "@type": "Country", name: "France" },
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Lille",
                    addressRegion: "Hauts-de-France",
                    postalCode: "59000",
                    addressCountry: "FR",
                  },
                  founder: { "@id": "https://www.benhouss.site/#person" },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Services backend Node.js/NestJS",
                    itemListElement: [
                      { "@type": "Offer", name: "Correction d’API REST Node.js/NestJS" },
                      { "@type": "Offer", name: "Authentification et autorisation" },
                      { "@type": "Offer", name: "PostgreSQL et Prisma" },
                      { "@type": "Offer", name: "Dockerisation et déploiement" },
                      { "@type": "Offer", name: "Tests et documentation backend" },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.benhouss.site/#website",
                  name: "Benhouss — Développeur Node.js/NestJS Lille",
                  url: "https://www.benhouss.site",
                  inLanguage: "fr-FR",
                  description: "Portfolio de Benhouss, développeur Node.js/NestJS à Lille. API REST, PostgreSQL, Prisma, authentification et Docker.",
                  author: { "@id": "https://www.benhouss.site/#person" },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${roboto.variable} ${azeretMono.variable} ${dmSans.variable} ${inter.className}`}>
        <LangProvider>
          <HtmlLangUpdater />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
          >
            Skip to content
          </a>
          <KonamiEasterEgg />
          <Navbar />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
