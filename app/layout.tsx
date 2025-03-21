import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio | Ilyes",
  description: "Développeur Fullstack - Next.js, React, TypeScript",
  keywords: "Développeur, Fullstack, Next.js, React, TypeScript, SEO",
  authors: [{ name: "Ilyes", url: "https://ilyes-portfolio.com" }],
  openGraph: {
    title: "Portfolio | Ilyes",
    description: "Découvrez mes projets et compétences en développement web.",
    type: "website",
    url: "https://ilyes-portfolio.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio de Ilyes",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
