import Head from "next/head";
import { Projects } from "@/components/Projects";
import Stack from "@/components/Stack";
import ExperienceSection from "@/components/Experiences";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ilyes – Développeur Fullstack à Lille</title>
        <meta
          name="description"
          content="Développeur fullstack à Lille, je conçois des sites modernes et performants avec React, Next.js, NestJS et TypeScript."
        />
        <meta
          name="keywords"
          content="développeur à Lille, développeur fullstack Lille, développeur web Lille, React, Next.js, NestJS, TypeScript, Prisma, Tailwind CSS, Supabase"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ilyes – Développeur à Lille" />

        {/* Open Graph */}
        <meta property="og:title" content="Ilyes – Développeur Fullstack à Lille" />
        <meta
          property="og:description"
          content="Portfolio de Ilyes, développeur fullstack à Lille : React, Next.js, NestJS, TypeScript, Tailwind CSS."
        />
        <meta property="og:url" content="https://ilyesportfolio-v.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ilyesportfolio-v.vercel.app/assets/og-cover.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ilyes – Développeur Fullstack à Lille" />
        <meta name="twitter:description" content="Découvrez le travail de Ilyes, développeur web à Lille." />
        <meta name="twitter:image" content="https://ilyesportfolio-v.vercel.app/assets/og-cover.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://ilyesportfolio-v.vercel.app/" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ilyes",
              jobTitle: "Développeur Web Fullstack",
              url: "https://ilyesportfolio-v.vercel.app",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lille",
                addressCountry: "FR",
              },
              knowsAbout: [
                "Développement web",
                "React",
                "Next.js",
                "NestJS",
                "TypeScript",
                "Tailwind CSS",
                "Supabase",
                "Prisma",
              ],
            }),
          }}
        />
      </Head>

      <main>
        <section className="px-4 py-12 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Ilyes – Développeur Fullstack à Lille</h1>
          <p className="text-lg mb-6">
            Développeur fullstack à Lille, je conçois des applications performantes, modernes et responsives avec React, Next.js et TypeScript.
          </p>
          <p className="text-lg mb-6">
            Je travaille en équipe, en local ou à distance, pour créer des plateformes solides, esthétiques et bien codées.
          </p>
          <p className="text-lg mb-10">Vous avez un projet ? Parlons-en.</p>
        </section>

        <Projects />
        <Stack />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
