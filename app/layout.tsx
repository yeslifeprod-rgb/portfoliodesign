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
    "Développeur Full Stack à Lille spécialisé en React, Next.js, Nuxt.js, Node.js et TypeScript. Création d'applications web et mobile performantes. Disponible en freelance et CDI.",
  keywords: [
    "développeur full stack lille",
    "développeur react lille",
    "développeur next.js",
    "développeur web lille",
    "développeur freelance lille",
    "react",
    "next.js",
    "nuxt.js",
    "node.js",
    "typescript",
    "tailwind css",
    "docker",
    "supabase",
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
    title: "Benhouss — Développeur Full Stack Lille",
    description:
      "Développeur Full Stack à Lille. React, Next.js, Node.js, TypeScript. Applications web et mobile performantes.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Benhouss — Développeur Full Stack Lille",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benhouss — Développeur Full Stack Lille",
    description:
      "Développeur Full Stack à Lille. React, Next.js, Node.js, TypeScript. Disponible en freelance.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fr-FR": SITE_URL,
      "en-US": `${SITE_URL}/en`,
    },
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
        {/* JSON-LD: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Benhouss",
              jobTitle: "Développeur Full Stack Next.js",
              description:
                "Développeur Full Stack à Lille spécialisé en React, Next.js, Node.js et TypeScript. Création d'applications web et mobile performantes.",
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
                addressCountry: "FR",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "Nuxt.js",
                "Vue.js",
                "Node.js",
                "NestJS",
                "TypeScript",
                "Tailwind CSS",
                "Docker",
                "Supabase",
                "MongoDB",
                "MySQL",
                "Prisma",
              ],
            }),
          }}
        />
        {/* JSON-LD: WebSite (for Google Sitelinks Search Box) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Benhouss",
              url: "https://www.benhouss.site",
              description:
                "Portfolio de Benhouss, développeur Full Stack à Lille.",
              inLanguage: ["fr-FR", "en-US"],
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


