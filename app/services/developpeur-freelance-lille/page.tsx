import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Développeur Freelance à Lille — Benhouss | React, Next.js, NestJS",
  description:
    "Développeur freelance à Lille disponible immédiatement. Full Stack web et mobile : React, Next.js, NestJS, Ionic, TypeScript. Missions courtes ou longues — Lille ou remote.",
  keywords: [
    "développeur freelance Lille",
    "développeur web freelance Lille",
    "freelance développeur Lille",
    "mission freelance développeur Lille",
    "développeur freelance next.js Lille",
    "développeur freelance react Lille",
    "développeur freelance Hauts-de-France",
    "freelance full stack Lille",
    "développeur freelance disponible Lille",
    "prestataire développeur Lille",
  ],
  alternates: { canonical: "https://www.benhouss.site/services/developpeur-freelance-lille" },
  openGraph: {
    title: "Développeur Freelance à Lille — Benhouss | React, Next.js, NestJS",
    description:
      "Développeur freelance Full Stack basé à Lille. React, Next.js, NestJS, Ionic, TypeScript. Disponible immédiatement — missions Lille ou remote.",
    url: "https://www.benhouss.site/services/developpeur-freelance-lille",
  },
};

const MISSIONS = [
  {
    title: "Développement front-end React / Next.js",
    desc: "Création d'interfaces web modernes, performantes et accessibles. Intégration Figma, Server Components, optimisation Core Web Vitals.",
  },
  {
    title: "Développement back-end NestJS",
    desc: "APIs REST et microservices avec NestJS, Prisma, MySQL et Docker. Authentification JWT, intégration de paiement Stripe.",
  },
  {
    title: "Application mobile Ionic",
    desc: "Applications cross-platform iOS et Android avec Ionic et React. Déploiement sur les stores AppStore et Google Play.",
  },
  {
    title: "Audit & reprise de projet existant",
    desc: "Reprise d'une base de code existante, refactoring, ajout de fonctionnalités, correction de bugs, migration vers une stack moderne.",
  },
];

export default function DeveloppeurFreelanceLillePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <nav className="text-sm text-muted-foreground mb-10">
          <Link href="/" className="hover:text-foreground transition-colors">Portfolio</Link>
          <span className="mx-2">/</span>
          <span>Développeur Freelance Lille</span>
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
          Disponible en freelance — Lille &amp; Remote
        </div>

        <h1 className="text-4xl font-black tracking-tight mb-4">
          Développeur Freelance à Lille
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Développeur <strong className="text-foreground">freelance Full Stack</strong> basé à
          Lille, disponible pour vos missions web et mobile. React, Next.js, NestJS, Ionic,
          TypeScript — missions courtes ou longues, sur site ou en remote.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Types de missions</h2>
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

        <section
          className="rounded-2xl border p-6 mb-12"
          style={{
            borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)",
            background: "color-mix(in srgb, var(--primary) 4%, transparent)",
          }}>
          <h2 className="text-xl font-bold mb-4">Pourquoi travailler avec moi ?</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              { label: "Disponibilité", value: "Immédiate" },
              { label: "Localisation", value: "Lille · Remote France" },
              { label: "Type de mission", value: "Courte · Longue durée" },
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Développeur freelance disponible à Lille</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              En tant que <strong className="text-foreground">développeur freelance à Lille</strong>,
              j'interviens sur vos projets web et mobile de manière autonome. Je m'intègre
              rapidement dans une équipe existante ou travaille en direct avec le client.
            </p>
            <p>
              Disponible sur la <strong className="text-foreground">métropole lilloise</strong> (Lille,
              Roubaix, Tourcoing, Villeneuve d'Ascq) et en full remote. Titulaire du
              titre RNCP Niveau 6, je fournis des livrables de qualité production.
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
            { "@type": "ListItem", position: 2, name: "Développeur Freelance Lille", item: "https://www.benhouss.site/services/developpeur-freelance-lille" },
          ],
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Développeur Freelance à Lille",
          provider: {
            "@type": "Person",
            name: "Benhouss",
            url: "https://www.benhouss.site",
          },
          areaServed: [
            { "@type": "City", name: "Lille" },
            { "@type": "AdministrativeArea", name: "Hauts-de-France" },
          ],
          description: "Missions freelance de développement web et mobile à Lille. React, Next.js, NestJS, Ionic, TypeScript. Disponible immédiatement.",
          serviceType: "Développement Freelance Web & Mobile",
        }) }} />
      </div>
    </main>
  );
}
