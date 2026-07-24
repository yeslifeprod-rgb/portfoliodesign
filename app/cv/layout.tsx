import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — GHARDI ILYES | Concepteur développeur Fullstack",
  description:
    "CV de Ghardi Ilyes, concepteur développeur fullstack à Lille. Expérience React, TypeScript, Node.js, SQL, Docker, CI/CD, Jest et Cypress. Disponible en CDI.",
  keywords: [
    "CV concepteur développeur fullstack Lille",
    "CV React TypeScript Node.js Docker CI/CD",
    "développeur fullstack CDI industrie",
    "architecture logicielle frontend backend",
    "développeur web mobile SaaS Lille",
    "RNCP Niveau 6 développeur",
  ],
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "CV GHARDI ILYES — Concepteur développeur Fullstack",
    description:
      "CV de Ghardi Ilyes. React, TypeScript, Node.js, Docker, CI/CD, SQL, Cypress et Jest. Disponible en CDI à Lille.",
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
