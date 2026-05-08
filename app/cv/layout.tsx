import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — Benhouss | Concepteur Développeur d'Applications Full Stack Lille",
  description:
    "CV de Benhouss — Concepteur Développeur d'Applications Full Stack à Lille (RNCP Niv. 6). Expériences en Next.js, NestJS, Ionic, React, Node.js, TypeScript. Disponible en freelance & CDI.",
  keywords: [
    "CV développeur full stack Lille",
    "CV Next.js NestJS Ionic",
    "concepteur développeur d'applications CV",
    "développeur React Lille CV",
    "RNCP niveau 6 concepteur développeur",
  ],
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "CV Benhouss — Développeur Full Stack Lille",
    description:
      "CV complet de Benhouss. Next.js, NestJS, Ionic, React, TypeScript. RNCP Niv. 6. Freelance & CDI.",
    url: "https://www.benhouss.site/cv",
  },
  alternates: {
    canonical: "https://www.benhouss.site/cv",
  },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
