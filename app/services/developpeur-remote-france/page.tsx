import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Développeur Freelance Remote France — Benhouss | React, Next.js, NestJS",
  description:
    "Développeur freelance full stack disponible en remote partout en France. React, Next.js, NestJS, Ionic, TypeScript. Basé à Lille, j'interviens à Paris, Lyon, Marseille, Toulouse, Bordeaux, Nantes et partout en France.",
  keywords: [
    "développeur remote France",
    "développeur freelance remote France",
    "développeur full stack remote",
    "développeur next.js remote France",
    "développeur freelance Paris",
    "développeur freelance Lyon",
    "développeur freelance Marseille",
    "développeur freelance Toulouse",
    "développeur freelance Bordeaux",
    "développeur freelance Nantes",
    "développeur freelance Strasbourg",
    "développeur freelance Montpellier",
    "développeur freelance Nice",
    "développeur freelance Rennes",
    "développeur freelance Grenoble",
    "développeur freelance Toulon",
    "développeur freelance Dijon",
    "développeur freelance Reims",
    "développeur freelance Rouen",
    "développeur freelance Nancy",
    "développeur web remote",
    "prestataire développeur remote",
  ],
  alternates: { canonical: "https://www.benhouss.site/services/developpeur-remote-france" },
  openGraph: {
    title: "Développeur Freelance Remote France — Benhouss | React, Next.js, NestJS",
    description:
      "Développeur freelance full stack en remote partout en France. React, Next.js, NestJS, Ionic, TypeScript. Basé à Lille.",
    url: "https://www.benhouss.site/services/developpeur-remote-france",
  },
};

const VILLES = [
  "Paris", "Lyon", "Marseille", "Toulouse", "Bordeaux",
  "Nantes", "Strasbourg", "Montpellier", "Nice", "Rennes",
  "Grenoble", "Toulon", "Dijon", "Reims", "Rouen",
  "Nancy", "Metz", "Clermont-Ferrand", "Le Havre", "Angers",
  "Saint-Étienne", "Villeurbanne", "Brest", "Limoges", "Tours",
];

const MISSIONS = [
  {
    title: "Développement front-end React / Next.js",
    desc: "Interfaces web modernes, performantes et accessibles. App Router, Server Components, optimisation Core Web Vitals, intégration Figma.",
  },
  {
    title: "Développement back-end NestJS",
    desc: "APIs REST et microservices avec NestJS, Prisma, MySQL et Docker. Authentification JWT, intégration Stripe.",
  },
  {
    title: "Application mobile Ionic",
    desc: "Applications cross-platform iOS et Android avec Ionic et React.",
  },
  {
    title: "Reprise & audit de projet",
    desc: "Reprise d'une base existante, refactoring, ajout de fonctionnalités, migration vers une stack moderne.",
  },
];

export default function DeveloppeurRemoteFrancePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <nav className="text-sm text-muted-foreground mb-10">
          <Link href="/" className="hover:text-foreground transition-colors">Portfolio</Link>
          <span className="mx-2">/</span>
          <span>Développeur Remote France</span>
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
          Disponible en full remote — toute la France
        </div>

        <h1 className="text-4xl font-black tracking-tight mb-4">
          Développeur Freelance<br />
          <span style={{ color: "var(--primary)" }}>Remote partout en France</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Développeur <strong className="text-foreground">Full Stack freelance</strong> basé à
          Lille, disponible en full remote pour toute la France. React, Next.js, NestJS, Ionic,
          TypeScript — je m'intègre dans votre équipe à distance, quelle que soit votre ville.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Missions proposées en remote</h2>
          <div className="grid gap-4">
            {MISSIONS.map((m) => (
              <div key={m.title} className="rounded-xl border bg-card/60 p-5"
                style={{ borderColor: "color-mix(in srgb, var(--border) 60%, transparent)" }}>
                <h3 className="font-semibold mb-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Ionic", "NestJS", "Node.js", "Prisma", "MySQL", "MongoDB", "Supabase", "Stripe", "Docker", "Vercel", "Figma"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">{t}</span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Disponible depuis toutes les villes de France</h2>
          <p className="text-muted-foreground mb-6">
            En full remote, la localisation ne compte pas. Que votre entreprise soit à{" "}
            <strong className="text-foreground">Paris, Lyon, Marseille, Toulouse, Bordeaux</strong> ou
            dans n'importe quelle autre ville, je m'adapte à vos horaires et vos outils
            (Slack, Notion, Jira, Linear, GitHub).
          </p>
          <div className="flex flex-wrap gap-2">
            {VILLES.map((v) => (
              <span key={v}
                className="px-3 py-1.5 rounded-full text-sm font-medium"
                style={{
                  background: "color-mix(in srgb, var(--primary) 8%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
                  color: "var(--primary)",
                }}>
                {v}
              </span>
            ))}
          </div>
        </section>

        <section
          className="rounded-2xl border p-6 mb-12"
          style={{
            borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)",
            background: "color-mix(in srgb, var(--primary) 4%, transparent)",
          }}>
          <h2 className="text-xl font-bold mb-4">Conditions</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              { label: "Format", value: "Full remote · Présentiel Lille" },
              { label: "Disponibilité", value: "Immédiate" },
              { label: "Type de mission", value: "Freelance · CDI remote" },
              { label: "Expérience", value: "2+ ans" },
              { label: "Diplôme", value: "RNCP Niveau 6 (Bac+4)" },
              { label: "Réponse", value: "Sous 24h" },
            ].map((item) => (
              <div key={item.label}
                className="flex flex-col gap-0.5 p-3 rounded-xl bg-card/60"
                style={{ border: "1px solid color-mix(in srgb, var(--border) 50%, transparent)" }}>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</span>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
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
            { "@type": "ListItem", position: 2, name: "Développeur Remote France", item: "https://www.benhouss.site/services/developpeur-remote-france" },
          ],
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Développeur Freelance Remote France",
          provider: {
            "@type": "Person",
            name: "Benhouss",
            url: "https://www.benhouss.site",
          },
          areaServed: { "@type": "Country", name: "France" },
          description: "Développement web et mobile en full remote pour toute la France. React, Next.js, NestJS, Ionic, TypeScript. Basé à Lille.",
          serviceType: "Développement Freelance Remote",
        }) }} />
      </div>
    </main>
  );
}
