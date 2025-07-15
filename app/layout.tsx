import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Benhouss - Développeur Full Stack Lille | React, Next.js, Nuxt.js | Développeur Web Lille",
  description: "Développeur Full Stack à Lille spécialisé en React, Next.js, Nuxt.js, Node.js, Docker et Supabase. Développement web moderne, création d'applications performantes et responsive. Développeur React Lille disponible pour vos projets.",
  keywords: "développeur full stack lille, développeur react lille, développeur web lille, développeur nextjs lille, développeur nuxt lille, développeur javascript lille, next.js lille, nuxt.js lille, react lille, docker lille, supabase lille, développeur freelance lille, création site web lille, développement web lille, TypeScript lille, Node.js lille, Lille, Nord, France",
  author: "Benhouss",
  robots: "index, follow",
  openGraph: {
    title: "Benhouss - Développeur Full Stack Lille | React, Next.js, Nuxt.js",
    description: "Développeur Full Stack à Lille spécialisé en React, Next.js, Nuxt.js, Node.js, Docker et Supabase. Développement web moderne et création d'applications performantes.",
    type: "website",
    locale: "fr_FR",
    siteName: "Portfolio Benhouss - Développeur Web Lille",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benhouss - Développeur React Lille | Next.js, Nuxt.js",
    description: "Développeur Full Stack à Lille spécialisé en React, Next.js, Nuxt.js, Docker, Supabase. Développement web moderne.",
  },
  alternates: {
    canonical: "https://www.benhouss.site",
    languages: {
      'fr-FR': 'https://www.benhouss.site',
      'en-US': 'https://www.benhouss.site/en',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Benhouss",
              "jobTitle": "Développeur Full Stack",
              "description": "Développeur Full Stack expérimenté spécialisé en React, Node.js, React Native et TypeScript",
              "url": "https://www.benhouss.site",
              "sameAs": [
                "https://linkedin.com/in/votre-profil",
                "https://github.com/votre-username"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lille",
                "addressCountry": "FR"
              },
              "knowsAbout": [
                "React",
                "Node.js",
                "React Native",
                "TypeScript",
                "JavaScript",
                "Full Stack Development",
                "Web Development",
                "Mobile Development"
              ]
            })
          }}
        />
      </head>
      <body className={dmSans.className}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}


