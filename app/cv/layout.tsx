import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — GHARDI ILYES | Technicien Helpdesk",
  description:
    "CV de Ghardi Ilyes ciblé pour un poste de Technicien Helpdesk à Valenciennes / Onnaing. Support, diagnostic, tests, documentation et environnements techniques.",
  keywords: [
    "CV technicien helpdesk Valenciennes Onnaing",
    "support informatique diagnostic incidents",
    "Toyota Valenciennes technicien helpdesk",
    "déploiement réseau postes téléphonie imprimantes",
  ],
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "CV GHARDI ILYES — Technicien Helpdesk",
    description:
      "CV de Ghardi Ilyes ciblé pour le support informatique à Valenciennes / Onnaing.",
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
