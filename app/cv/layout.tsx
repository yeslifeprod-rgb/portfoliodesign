import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — GHARDI ILYES | Développeur Full Stack Lille",
  description:
    "CV de Ghardi Ilyes, développeur full stack à Lille. Expérience Next.js, TypeScript, Ionic, Prisma, Supabase, Node.js, NestJS, Docker, Cypress et Jest. Disponible en CDI.",
  keywords: [
    "CV développeur full stack Lille",
    "CV Next.js TypeScript Ionic NestJS",
    "développeur full stack CDI Lille",
    "CV React Node.js Prisma Supabase",
    "développeur web mobile SaaS Lille",
    "RNCP Niveau 6 développeur",
  ],
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "CV GHARDI ILYES — Développeur Full Stack Lille",
    description:
      "CV de Ghardi Ilyes. Next.js, TypeScript, Ionic, Prisma, Supabase, React, Node.js, NestJS. Disponible en CDI à Lille.",
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
