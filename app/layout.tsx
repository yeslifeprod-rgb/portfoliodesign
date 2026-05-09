import "./globals.css";
import type { Metadata } from "next";
import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/Navbar";
import HtmlLangUpdater from "@/components/HtmlLangUpdater";
import { KonamiEasterEgg } from "@/components/KonamiEasterEgg";
import { Inter, Roboto, Azeret_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
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
    default: "Benhouss — Développeur Full Stack Lille | React, Next.js, Node.js",
    template: "%s | Benhouss",
  },
  description:
    "Benhouss — Concepteur Développeur d'Applications Full Stack basé à Lille (RNCP Niv. 6). Spécialisé React, Next.js, NestJS, Ionic, Node.js, TypeScript. Création d'applications web et mobile. Freelance & CDI — Lille ou remote.",
  keywords: [
    // ── Identité & localisation ──
    "développeur Lille",
    "développeur full stack lille",
    "développeur web lille",
    "développeur freelance lille",
    "développeur full stack freelance",
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
    "framer motion développeur",
    // ── Backend & BDD ──
    "développeur NestJS",
    "développeur NestJS Lille",
    "développeur node.js",
    "développeur node.js Lille",
    "développeur prisma",
    "développeur mysql",
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
    "mysql", "mongodb", "supabase", "stripe", "docker",
    "vercel", "jest", "cypress", "figma", "framer motion",
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
    title: "Benhouss — Concepteur Développeur d'Applications Full Stack Lille",
    description:
      "Développeur Full Stack à Lille. React, Next.js, NestJS, Ionic, Node.js, TypeScript. RNCP Niv. 6. Freelance & CDI.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    // Pas d'alternateLocale — aucune version /en n'existe
  },
  twitter: {
    card: "summary_large_image",
    title: "Benhouss — Concepteur Développeur d'Applications Full Stack Lille",
    description:
      "Développeur Full Stack à Lille. Next.js, NestJS, Ionic, React, TypeScript. RNCP Niv. 6. Freelance & CDI.",
    // Pas d'images statiques — l'OG est générée par opengraph-image.tsx
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "45cdcd59b8daf8eb",
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
                  alternateName: "Ilyes Ghardi",
                  jobTitle: "Concepteur Développeur d'Applications Full Stack",
                  description:
                    "Concepteur Développeur d'Applications Full Stack basé à Lille (RNCP Niveau 6). Spécialisé Next.js, NestJS, Ionic, React, Node.js, TypeScript. Disponible en freelance et CDI.",
                  url: "https://www.benhouss.site",
                  image: "https://www.benhouss.site/assets/avatar.png",
                  sameAs: [
                    "https://github.com/Yesdevjr",
                    "https://linkedin.com/in/benhouss",
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
                    "React", "Next.js", "TypeScript", "Tailwind CSS",
                    "Ionic", "Framer Motion", "Vue.js", "Nuxt.js",
                    "Node.js", "NestJS", "Prisma", "MySQL",
                    "MongoDB", "Supabase", "Stripe",
                    "Git", "Vercel", "Docker", "Jest", "Cypress",
                    "Figma", "Excalidraw", "Agile Scrum", "Microservices", "REST API",
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.benhouss.site/#business",
                  name: "Benhouss — Développeur Full Stack Lille",
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
                    name: "Services de développement web & mobile",
                    itemListElement: [
                      { "@type": "Offer", name: "Développement Next.js à Lille", areaServed: "Lille" },
                      { "@type": "Offer", name: "Développement NestJS — APIs REST & Microservices" },
                      { "@type": "Offer", name: "Développement Application Mobile Ionic", areaServed: "Lille" },
                      { "@type": "Offer", name: "Conception et développement d'applications Full Stack", areaServed: "Lille" },
                      { "@type": "Offer", name: "Développement Front End React/Next.js", areaServed: "Lille" },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.benhouss.site/#website",
                  name: "Benhouss — Développeur Full Stack Lille",
                  url: "https://www.benhouss.site",
                  inLanguage: "fr-FR",
                  description: "Portfolio de Benhouss, concepteur développeur d'applications Full Stack à Lille.",
                  author: { "@id": "https://www.benhouss.site/#person" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://www.benhouss.site/?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.benhouss.site/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Êtes-vous disponible en freelance à Lille ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oui, disponible en freelance et CDI, basé à Lille (59) avec possibilité de full remote.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Quelles technologies maîtrisez-vous ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Next.js, React, NestJS, Ionic, Node.js, TypeScript, Prisma, MySQL, MongoDB, Docker, Tailwind CSS, Framer Motion, Vercel, Git, Jest, Cypress, Figma.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Êtes-vous certifié Concepteur Développeur d'Applications ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oui, titulaire du titre RNCP Niveau 6 — Concepteur Développeur d'Applications (Bac+4), obtenu à l'ALT Incubateur de Lille.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Développez-vous des applications mobiles avec Ionic ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oui, j'ai développé des applications mobiles cross-platform avec Ionic et React, notamment pour une application open source de gestion extra-scolaire.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Êtes-vous disponible pour un CDI à Lille ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oui, ouvert aux opportunités CDI à Lille ou full remote. 2+ ans d'expérience, je cherche une équipe ambitieuse.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${roboto.variable} ${azeretMono.variable} ${inter.className}`}>
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


