import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — GHARDI ILYES | Concepteur-Développeur d'applications Lille",
  description:
    "CV de Ghardi Ilyes, concepteur-développeur d'applications web et mobiles à Lille. Expérience React, Node.js, NestJS, API REST, Docker, Cypress et Jest. Disponible en CDI.",
  keywords: [
    "CV concepteur développeur applications Lille",
    "CV React Node.js NestJS TypeScript",
    "concepteur développeur CDI Lille",
    "développeur API REST PostgreSQL Docker Lille",
    "développeur web SaaS Node.js React Lille",
    "RNCP Niveau 6 développeur",
  ],
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "CV GHARDI ILYES — Concepteur-Développeur d'applications Lille",
    description:
      "CV de Ghardi Ilyes. React, Node.js, NestJS, TypeScript, API REST, MySQL, Docker et tests. Disponible en CDI dans la métropole lilloise.",
    url: "https://www.benhouss.site/cv",
    type: "profile",
  },
  alternates: {
    canonical: "https://www.benhouss.site/cv",
  },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  // Inherits Inter via var(--font-sans) set in globals.css + root layout
  return <div style={{ fontFamily: "var(--font-sans)" }}>{children}</div>;
}
