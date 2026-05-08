import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Développeur à Lille — Benhouss | Full Stack Web & Mobile",
  description:
    "Développeur à Lille disponible en freelance et CDI. Full Stack web et mobile : React, Next.js, NestJS, Ionic, TypeScript. RNCP Niveau 6. Basé à Lille, ouvert au remote.",
  keywords: [
    "développeur Lille",
    "développeur web Lille",
    "développeur full stack Lille",
    "développeur application Lille",
    "développeur web freelance Lille",
    "développeur Hauts-de-France",
    "développeur Roubaix",
    "développeur Tourcoing",
    "développeur Villeneuve d'Ascq",
    "développeur web mobile Lille",
    "développeur disponible Lille",
  ],
  alternates: { canonical: "https://www.benhouss.site/services/developpeur-lille" },
  openGraph: {
    title: "Développeur à Lille — Benhouss | Full Stack Web & Mobile",
    description:
      "Développeur Full Stack basé à Lille. React, Next.js, NestJS, Ionic, TypeScript. Freelance & CDI.",
    url: "https://www.benhouss.site/services/developpeur-lille",
  },
};

const SERVICES = [
  {
    title: "Applications Web — React & Next.js",
    desc: "Sites vitrines, SaaS, dashboards, e-commerce. Interfaces performantes, accessibles et optimisées SEO avec Next.js App Router et React.",
  },
  {
    title: "Applications Mobile — Ionic",
    desc: "Applications cross-platform iOS et Android avec Ionic et React. Une seule codebase pour les deux stores.",
  },
  {
    title: "Back-end & APIs — NestJS",
    desc: "APIs REST et microservices structurés avec NestJS, Prisma et MySQL/MongoDB. Authentification JWT, intégration Stripe.",
  },
  {
    title: "Conception complète — de Figma au déploiement",
    desc: "Prise en charge du projet de A à Z : maquettes, développement, tests (Jest, Cypress), déploiement Vercel/Docker.",
  },
];

export default function DeveloppeurLillePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <nav className="text-sm text-muted-foreground mb-10">
          <Link href="/" className="hover:text-foreground transition-colors">Portfolio</Link>
          <span className="mx-2">/</span>
          <span>Développeur Lille</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          style={{
            background: "color-mix(in srgb, var(--primary) 10%, transparent)",
            border: "1px solid color-mix(in srgb, var(--primary) 25%, transparent)",
            color: "var(--primary)",
          }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "var(--primary)" }} />
            <span className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: "var(--primary)" }} />
          </span>
          Disponible — Lille &amp; Remote
        </div>

        <h1 className="text-4xl font-black tracking-tight mb-4">
          Développeur à Lille
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Développeur <strong className="text-foreground">Full Stack web et mobile</strong> basé à
          Lille. Je conçois et développe des applications React, Next.js, NestJS et Ionic —
          disponible en freelance et CDI, sur site ou en remote.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ce que je développe à Lille</h2>
          <div className="grid gap-4">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-xl border bg-card/60 p-5"
                style={{ borderColor: "color-mix(in srgb, var(--border) 60%, transparent)" }}>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stack technique</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Ionic", "NestJS", "Node.js", "Prisma", "MySQL", "MongoDB", "Docker", "Vercel", "Figma"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">{t}</span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Développeur basé à Lille</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Basé dans la <strong className="text-foreground">métropole lilloise</strong>, j'interviens
              en présentiel à Lille, Roubaix, Tourcoing et Villeneuve d'Ascq, ou en full remote
              sur toute la France.
            </p>
            <p>
              Titulaire du <strong className="text-foreground">titre RNCP Niveau 6 — Concepteur
              Développeur d'Applications</strong>, j'ai 2+ ans d'expérience sur des projets
              web et mobile en production. Je prends en charge le cycle complet : conception,
              développement, tests et déploiement.
            </p>
            <p>
              Disponible immédiatement en <strong className="text-foreground">freelance ou CDI</strong>.
              Je réponds sous 24h.
            </p>
          </div>
        </section>

        <div className="flex gap-4 flex-wrap">
          <Link href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
            style={{ background: "var(--primary)", boxShadow: "0 4px 20px color-mix(in srgb, var(--primary) 30%, transparent)" }}>
            Me contacter
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-secondary text-secondary-foreground">
            Voir mon portfolio
          </Link>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Portfolio", item: "https://www.benhouss.site" },
            { "@type": "ListItem", position: 2, name: "Développeur Lille", item: "https://www.benhouss.site/services/developpeur-lille" },
          ],
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Développeur à Lille — Web & Mobile",
          provider: {
            "@type": "Person",
            name: "Benhouss",
            url: "https://www.benhouss.site",
          },
          areaServed: [
            { "@type": "City", name: "Lille" },
            { "@type": "AdministrativeArea", name: "Hauts-de-France" },
          ],
          description: "Développement d'applications web et mobile à Lille. React, Next.js, NestJS, Ionic, TypeScript. Disponible en freelance et CDI.",
          serviceType: "Développement Web & Mobile",
        }) }} />
      </div>
    </main>
  );
}
