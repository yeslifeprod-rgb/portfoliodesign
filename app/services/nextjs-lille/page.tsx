import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Développeur Next.js à Lille — Benhouss | Applications Web Performantes",
  description:
    "Développeur Next.js à Lille, disponible en freelance et CDI. Création d'applications web performantes avec Next.js App Router, SSR, ISR, React et TypeScript. Contactez-moi.",
  keywords: [
    "développeur next.js lille",
    "next.js lille freelance",
    "développeur next.js freelance",
    "application web next.js",
    "développeur react next.js lille",
    "next.js app router",
    "développeur web performant lille",
  ],
  alternates: { canonical: "https://www.benhouss.site/services/nextjs-lille" },
  openGraph: {
    title: "Développeur Next.js à Lille — Benhouss",
    description:
      "Applications web performantes avec Next.js. Basé à Lille, disponible en freelance ou CDI.",
    url: "https://www.benhouss.site/services/nextjs-lille",
  },
};

export default function NextjsLillePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-10">
          <Link href="/" className="hover:text-foreground transition-colors">Portfolio</Link>
          <span className="mx-2">/</span>
          <span>Développeur Next.js Lille</span>
        </nav>

        {/* H1 — exact match keyword */}
        <h1 className="text-4xl font-black tracking-tight mb-4">
          Développeur Next.js à Lille
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Création d'applications web modernes et performantes avec{" "}
          <strong className="text-foreground">Next.js</strong>, basé à Lille — disponible en freelance et CDI.
        </p>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ce que je propose</h2>
          <div className="grid gap-4">
            {[
              {
                title: "Applications web Next.js (App Router)",
                desc: "Développement full-stack avec Next.js 15, App Router, Server Components, SSR et ISR pour des performances optimales et un SEO natif.",
              },
              {
                title: "Interfaces React + TypeScript",
                desc: "Composants réutilisables, accessibles et maintenables. Tailwind CSS, Framer Motion, shadcn/ui.",
              },
              {
                title: "API Routes & intégrations",
                desc: "Backend Next.js (Route Handlers), connexion à Supabase, Prisma, Stripe, et services tiers.",
              },
              {
                title: "Déploiement Vercel / optimisation",
                desc: "Mise en production, configuration des environnements, optimisation des Core Web Vitals et du LCP.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-xl border bg-card/60 p-5"
                style={{ borderColor: "color-mix(in srgb, var(--border) 60%, transparent)" }}
              >
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stack Next.js utilisé</h2>
          <p className="text-muted-foreground mb-4">
            En tant que développeur Next.js à Lille, j'interviens sur des projets
            complets : de la conception à la mise en production. Mon stack habituel :
          </p>
          <div className="flex flex-wrap gap-2">
            {["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "Vercel", "Framer Motion"].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Pourquoi */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Pourquoi choisir un développeur Next.js à Lille ?</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Next.js est aujourd'hui le framework React de référence pour créer des applications web
              performantes, indexables par Google et maintenables sur le long terme. Avec le{" "}
              <strong className="text-foreground">App Router</strong> introduit en Next.js 13+,
              les Server Components permettent un rendu hybride (SSR + CSR) qui réduit
              drastiquement le temps de chargement.
            </p>
            <p>
              Basé à <strong className="text-foreground">Lille (59)</strong>, je suis disponible
              pour des missions en présentiel dans la métropole lilloise (Roubaix, Tourcoing,
              Villeneuve d'Ascq) ou en full remote. Je travaille en freelance et suis également
              ouvert aux opportunités CDI.
            </p>
            <p>
              Titulaire du <strong className="text-foreground">titre RNCP Niveau 6 — Concepteur
              Développeur d'Applications</strong>, j'ai livré des projets Next.js en production
              en production (Num4, Plaine Images) et contribué à des applications open source.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
            style={{ background: "var(--primary)", boxShadow: "0 4px 20px color-mix(in srgb, var(--primary) 30%, transparent)" }}
          >
            Me contacter
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-secondary text-secondary-foreground"
          >
            Voir mon portfolio
          </Link>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Portfolio", item: "https://www.benhouss.site" },
            { "@type": "ListItem", position: 2, name: "Développeur Next.js Lille", item: "https://www.benhouss.site/services/nextjs-lille" },
          ],
        }) }} />

        {/* JSON-LD Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Développeur Next.js à Lille",
              provider: {
                "@type": "Person",
                name: "Benhouss",
                url: "https://www.benhouss.site",
              },
              areaServed: { "@type": "City", name: "Lille" },
              description:
                "Création d'applications web performantes avec Next.js App Router, React et TypeScript. Basé à Lille, disponible en freelance ou CDI.",
              serviceType: "Développement Web Next.js",
            }),
          }}
        />
      </div>
    </main>
  );
}
