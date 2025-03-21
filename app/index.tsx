"use client";

import { Metadata } from "next";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/Experiences";
import ContactSection from "@/components/Contact";

import { Projects } from "@/components/Projects";
import Hero from "@/components/Home";


export const metadata: Metadata = {
  title: "Ilyes Ghardi – Développeur Fullstack",
  description: "Portfolio de Ilyes Ghardi, développeur fullstack. Projets, compétences et parcours dans le développement web et mobile.",
  keywords: [
    "Ilyes Ghardi",
    "développeur web",
    "fullstack",
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "Prisma",
    "MySQL",
    "Tailwind CSS",
    "Figma",
    "Cypress",
    "Jest",
    "Docker",
    "MongoDB"
  ],
  authors: [{ name: "Ilyes Ghardi" }],
  openGraph: {
    title: "Ilyes Ghardi – Développeur Fullstack",
    description: "Projets et compétences en développement web et mobile avec les stacks modernes.",
    url: "https://tonportfolio.com",
    siteName: "Portfolio Ilyes Ghardi",
    images: [
      {
        url: "https://tonportfolio.com/assets/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio Ilyes Ghardi",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Stack />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
