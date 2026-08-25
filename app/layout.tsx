import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/layout/Navbar";
import HtmlLangUpdater from "@/components/layout/HtmlLangUpdater";
import { KonamiEasterEgg } from "@/components/layout/KonamiEasterEgg";
import {
  DM_Sans,
  Inter,
  JetBrains_Mono,
  Noto_Serif_Georgian,
} from "next/font/google";
import { faqItems } from "@/lib/content/faq";
// Mesure d'audience sans cookie : aucune bannière de consentement requise.
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Polices alignées sur les déclarations de app/globals.css.
// Auparavant next/font chargeait Poppins / Instrument Serif / Azeret Mono
// et écrasait --font-sans / --font-serif / --font-mono sur <body>,
// rendant les valeurs du thème inopérantes.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Police d'affichage déclarée par app/globals.css (--font-display).
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const notoSerifGeorgian = Noto_Serif_Georgian({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const SITE_URL = "https://www.benhouss.site";
const SITE_NAME = "Benhouss";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
    title: {
    default: "Développeur full stack web & mobile à Lille — Benhouss",
    template: "%s",
  },
  description:
    "Je développe les fonctionnalités qui bloquent votre application web ou mobile. React, Next.js, NestJS, Ionic. Premier échange gratuit, réponse sous 24 h.",
  // Google ignore cette balise depuis 2009. Conservée en version courte
  // pour les moteurs qui la lisent encore (Bing, Qwant), sans accumulation.
  keywords: [
    "développeur full stack Lille",
    "développeur freelance Lille",
    "développeur React Next.js",
    "développeur NestJS",
    "développeur application mobile Ionic",
    "développeur web remote France",
    "création application web sur mesure",
    "développeur API REST",
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
    title: "Développeur full stack web & mobile à Lille — Benhouss",
    description:
      "Je développe les fonctionnalités qui bloquent votre application. React, Next.js, NestJS, Ionic. Premier échange gratuit.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    // Pas d'alternateLocale — aucune version /en n'existe
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur full stack web & mobile à Lille — Benhouss",
    description:
      "Je développe les fonctionnalités qui bloquent votre application. Premier échange gratuit.",
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
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fafafa" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0a0a0a" />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            // Choix explicite s'il existe, sinon la préférence système.
            // Avant : tout visiteur arrivait en clair, même en mode sombre OS,
            // alors que <meta name="theme-color"> annonçait l'inverse.
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
        {/* JSON-LD: @graph — Person, LocalBusiness, WebSite, FAQPage */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.benhouss.site/#person",
                  name: "Benhouss",
                  jobTitle: "Développeur Full Stack React, Vue, Next.js et Node.js/NestJS",
                  description:
                    "Concepteur Développeur d'Applications full stack basé à Lille (RNCP Niveau 6). Je conçois des interfaces React/Vue/Next.js, des APIs Node.js/NestJS et des environnements Docker.",
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
                    "React", "Vue.js", "Next.js", "TypeScript", "Node.js", "NestJS",
                    "Prisma", "PostgreSQL", "MySQL", "Docker", "REST API",
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
                    name: "Services de développement full stack web & mobile",
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
                  description: "Portfolio de Benhouss, développeur full stack React, Vue, Next.js et Node.js/NestJS à Lille. API REST, Docker et applications web/mobile.",
                  author: { "@id": "https://www.benhouss.site/#person" },
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.benhouss.site/#faq",
                  // Généré depuis lib/faq.ts, la même source que la FAQ affichée.
                  mainEntity: faqItems.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: item.answer,
                    },
                  })),
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSerifGeorgian.variable} ${dmSans.variable} ${jetBrainsMono.variable} font-sans`}
      >
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
          <Analytics />
          <SpeedInsights />
        </LangProvider>
      </body>
    </html>
  );
}
