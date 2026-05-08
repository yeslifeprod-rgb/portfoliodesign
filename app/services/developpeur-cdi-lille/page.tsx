import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Développeur Full Stack CDI Lille — Benhouss | Next.js · NestJS · Ionic",
  description:
    "Développeur Full Stack disponible en CDI à Lille. RNCP Niveau 6, 2+ ans d'expérience. Next.js, NestJS, Ionic, React, TypeScript. Je cherche une équipe ambitieuse.",
  keywords: [
    "développeur CDI Lille",
    "développeur full stack CDI Lille",
    "développeur Next.js CDI Lille",
    "développeur web CDI Lille",
    "recruter développeur Lille",
    "développeur disponible CDI",
    "développeur React CDI Hauts-de-France",
    "développeur CDI Lille disponible",
    "concepteur développeur applications CDI",
    "développeur RNCP CDI Lille",
  ],
  alternates: { canonical: "https://www.benhouss.site/services/developpeur-cdi-lille" },
  openGraph: {
    title: "Développeur Full Stack disponible en CDI à Lille — Benhouss",
    description:
      "RNCP Niv. 6 · Next.js · NestJS · Ionic · 2+ ans d'expérience. Disponible immédiatement en CDI à Lille ou remote.",
    url: "https://www.benhouss.site/services/developpeur-cdi-lille",
  },
};

const STACK: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Ionic", "Framer Motion", "Vue.js", "Nuxt"],
  },
  {
    category: "Backend & BDD",
    items: ["Node.js", "NestJS", "Prisma", "MySQL", "MongoDB", "Supabase", "Stripe"],
  },
  {
    category: "DevOps & Outils",
    items: ["Git", "Vercel", "Docker", "Jest", "Cypress"],
  },
  {
    category: "Design & Méthodes",
    items: ["Figma", "Excalidraw", "Agile Scrum", "Notion", "Trello"],
  },
];

const EXPERIENCES = [
  {
    role: "Développeur Full Stack",
    company: "Num4 — Plaine Images, Roubaix",
    period: "2025",
    highlights: [
      "Développement front et back avec Next.js",
      "Intégration paiement iOS via RevenueCat",
      "Collaboration directe avec le fondateur et CTO",
    ],
  },
  {
    role: "Concepteur Développeur d'Applications",
    company: "ALT Incubateur, Lille",
    period: "2023 – 2024",
    highlights: [
      "Application open source : React, Ionic, NestJS, MySQL",
      "Migration vers microservices + containerisation Docker",
      "Méthode Agile Scrum, tests Jest & Cypress",
      "Obtention du titre RNCP Niveau 6",
    ],
  },
];

const ATOUTS = [
  {
    icon: "⚡",
    title: "Opérationnel dès le premier jour",
    desc: "Stack moderne maîtrisée (Next.js, NestJS, Ionic). 2+ ans d'expérience, je ship vite et bien.",
  },
  {
    icon: "🏗️",
    title: "Vision produit + technique",
    desc: "Travail aux côtés de CTO et fondateurs. Je comprends les enjeux business autant que les choix techniques.",
  },
  {
    icon: "📜",
    title: "RNCP Niveau 6 — Bac+4",
    desc: "Titre Concepteur Développeur d'Applications reconnu par l'État. Formation complète full stack web & mobile.",
  },
  {
    icon: "🔄",
    title: "Full Stack web & mobile",
    desc: "Front-end React/Next.js, back-end NestJS, mobile Ionic. Un seul développeur pour couvrir l'ensemble du produit.",
  },
];

export default function DeveloppeurCDILillePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b"
        style={{ borderColor: "color-mix(in srgb, var(--border) 40%, transparent)" }}>

        {/* Background orb */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px]"
          style={{ background: "color-mix(in srgb, var(--primary) 10%, transparent)" }} />

        <div className="max-w-3xl mx-auto px-6 py-20">

          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-10">
            <Link href="/" className="hover:text-foreground transition-colors">Portfolio</Link>
            <span className="mx-2">/</span>
            <span>Développeur CDI Lille</span>
          </nav>

          {/* Availability badge */}
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
            Disponible en CDI — Lille &amp; Remote
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Développeur Full Stack<br />
            <span style={{ color: "var(--primary)" }}>disponible en CDI à Lille</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl">
            RNCP Niv. 6 · 2+ ans d'expérience · Next.js · NestJS · Ionic.
            Je cherche une équipe ambitieuse où chaque ligne de code a un impact réel.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all"
              style={{
                background: "var(--primary)",
                boxShadow: "0 4px 20px color-mix(in srgb, var(--primary) 35%, transparent)",
              }}>
              Me contacter
            </Link>
            <Link href="/cv"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-secondary text-secondary-foreground">
              Voir mon CV
            </Link>
            <a href="https://www.linkedin.com/in/ilyes-g-46b0982b8/"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm"
              style={{
                border: "1px solid color-mix(in srgb, var(--border) 70%, transparent)",
                color: "var(--muted-foreground)",
              }}>
              LinkedIn →
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-20">

        {/* ── Ce que j'apporte ─────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Ce que j'apporte à votre équipe</h2>
          <p className="text-muted-foreground mb-8">
            Vous cherchez un développeur Full Stack fiable et autonome à Lille ?
            Voici pourquoi je corresponds à ce que vous recherchez.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {ATOUTS.map((a) => (
              <div key={a.title}
                className="rounded-xl border bg-card/50 p-5"
                style={{ borderColor: "color-mix(in srgb, var(--border) 55%, transparent)" }}>
                <div className="text-2xl mb-3">{a.icon}</div>
                <h3 className="font-semibold mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stack ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Stack technique complète</h2>
          <p className="text-muted-foreground mb-6">
            Technologies maîtrisées et utilisées en production.
          </p>
          <div className="space-y-4">
            {STACK.map((cat) => (
              <div key={cat.category}>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  {cat.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((t) => (
                    <span key={t}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Expériences ──────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Expériences professionnelles</h2>
          <div className="space-y-6">
            {EXPERIENCES.map((e) => (
              <div key={e.company}
                className="rounded-xl border bg-card/50 p-6"
                style={{ borderColor: "color-mix(in srgb, var(--border) 55%, transparent)" }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-bold text-base">{e.role}</h3>
                    <p className="text-sm text-muted-foreground">{e.company}</p>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full shrink-0"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 10%, transparent)",
                      color: "var(--primary)",
                    }}>
                    {e.period}
                  </span>
                </div>
                <ul className="space-y-1">
                  {e.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground flex gap-2">
                      <span style={{ color: "var(--primary)" }}>›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Situation recherchée ─────────────────────────── */}
        <section
          className="rounded-2xl border p-8"
          style={{ borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)",
            background: "color-mix(in srgb, var(--primary) 4%, transparent)" }}>
          <h2 className="text-2xl font-bold mb-6">Ma situation recherchée</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            {[
              { label: "Type de contrat", value: "CDI (prioritaire) · Freelance" },
              { label: "Localisation", value: "Lille · Hauts-de-France · Full remote" },
              { label: "Disponibilité", value: "Immédiate" },
              { label: "Domaines", value: "Web · Mobile · SaaS · Startup" },
              { label: "Rôle recherché", value: "Développeur Full Stack · Front End · Back End" },
              { label: "Expérience", value: "2+ ans d'expérience" },
            ].map((item) => (
              <div key={item.label}
                className="flex flex-col gap-0.5 p-4 rounded-xl bg-card/60"
                style={{ border: "1px solid color-mix(in srgb, var(--border) 50%, transparent)" }}>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </span>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA recruteur ────────────────────────────────── */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-3">Vous recrutez ?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Envoyez-moi un message via le formulaire, par email ou sur LinkedIn.
            Je réponds sous 24h.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white"
              style={{
                background: "var(--primary)",
                boxShadow: "0 4px 20px color-mix(in srgb, var(--primary) 35%, transparent)",
              }}>
              Envoyer un message
            </Link>
            <Link href="/cv"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium bg-secondary text-secondary-foreground">
              Télécharger le CV
            </Link>
          </div>
        </section>

      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Portfolio", item: "https://www.benhouss.site" },
          { "@type": "ListItem", position: 2, name: "Développeur CDI Lille", item: "https://www.benhouss.site/services/developpeur-cdi-lille" },
        ],
      }) }} />

      {/* JSON-LD — Person cherchant un CDI (JobDemand) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Benhouss",
          jobTitle: "Concepteur Développeur d'Applications Full Stack",
          url: "https://www.benhouss.site",
          image: "https://www.benhouss.site/assets/avatar.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lille",
            addressRegion: "Hauts-de-France",
            addressCountry: "FR",
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: "Titre RNCP Niveau 6 — Concepteur Développeur d'Applications",
          },
          seeks: {
            "@type": "JobDemand",
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lille",
                addressRegion: "Hauts-de-France",
                addressCountry: "FR",
              },
            },
            employmentType: "FULL_TIME",
            description:
              "Développeur Full Stack disponible en CDI à Lille ou full remote. React, Next.js, NestJS, Ionic, Node.js, TypeScript. 2+ ans d'expérience.",
          },
          knowsAbout: [
            "React", "Next.js", "TypeScript", "Tailwind CSS", "Ionic", "Framer Motion",
            "Vue.js", "Nuxt", "Node.js", "NestJS", "Prisma", "MySQL", "MongoDB",
            "Supabase", "Stripe", "Git", "Vercel", "Docker", "Jest", "Cypress",
            "Figma", "Agile Scrum",
          ],
        }),
      }} />
    </main>
  );
}
