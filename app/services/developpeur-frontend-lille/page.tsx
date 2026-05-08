import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Développeur Front End à Lille — Benhouss | React, Next.js, TypeScript",
  description:
    "Développeur Front End à Lille spécialisé React, Next.js et TypeScript. Interfaces modernes, accessibles et performantes. Disponible en freelance et CDI — Lille ou remote.",
  keywords: [
    "développeur front end Lille",
    "développeur frontend Lille",
    "développeur react Lille",
    "intégrateur web Lille",
    "développeur interface utilisateur Lille",
    "développeur UI Lille",
    "développeur front end freelance",
    "react typescript Lille",
  ],
  alternates: { canonical: "https://www.benhouss.site/services/developpeur-frontend-lille" },
  openGraph: {
    title: "Développeur Front End à Lille — Benhouss | React & Next.js",
    description:
      "Interfaces modernes avec React, Next.js, TypeScript et Tailwind CSS. Freelance & CDI — Lille.",
    url: "https://www.benhouss.site/services/developpeur-frontend-lille",
  },
};

export default function DeveloppeurFrontendLillePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <nav className="text-sm text-muted-foreground mb-10">
          <Link href="/" className="hover:text-foreground transition-colors">Portfolio</Link>
          <span className="mx-2">/</span>
          <span>Développeur Front End Lille</span>
        </nav>

        <h1 className="text-4xl font-black tracking-tight mb-4">
          Développeur Front End à Lille
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Création d'interfaces web <strong className="text-foreground">modernes, accessibles et
          performantes</strong> avec React, Next.js et TypeScript — basé à Lille, disponible en
          freelance et CDI.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Expertise Front End</h2>
          <div className="grid gap-4">
            {[
              {
                title: "Interfaces React & Next.js",
                desc: "Composants React réutilisables, Server Components, Client Components, routing App Router, optimisation des performances (LCP, CLS, FID).",
              },
              {
                title: "TypeScript & qualité du code",
                desc: "Typage strict, interfaces, generics, utilitaires TypeScript pour un code maintenable et sans régression.",
              },
              {
                title: "Design system & Tailwind CSS",
                desc: "Intégration Figma → code, tokens de design, composants accessibles (WCAG 2.1), responsive mobile-first.",
              },
              {
                title: "Animations & interactions",
                desc: "Framer Motion, CSS animations, transitions fluides, micro-interactions pour améliorer l'UX.",
              },
              {
                title: "Optimisation & SEO technique",
                desc: "Core Web Vitals, lazy loading, optimisation des images (next/image), metadata et structured data.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border bg-card/60 p-5"
                style={{ borderColor: "color-mix(in srgb, var(--border) 60%, transparent)" }}>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stack Front End</h2>
          <div className="flex flex-wrap gap-2">
            {["React 18", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "shadcn/ui", "Figma", "Storybook"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">{t}</span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Développeur Front End disponible à Lille</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              En tant que <strong className="text-foreground">développeur front end à Lille</strong>,
              j'interviens sur tout le cycle de développement de l'interface : des maquettes Figma
              à la mise en production. Je maîtrise les patterns modernes React (hooks, context,
              Server Components) et l'écosystème Next.js.
            </p>
            <p>
              Mon approche est centrée sur la <strong className="text-foreground">performance et
              l'accessibilité</strong> : chaque composant est conçu pour être rapide (Core Web
              Vitals), accessible (ARIA, contraste, navigation clavier) et maintenable.
            </p>
            <p>
              Disponible pour des missions dans la <strong className="text-foreground">métropole
              lilloise</strong> (Lille, Roubaix, Tourcoing, Villeneuve d'Ascq) et en full remote.
              Ouvert au freelance et aux opportunités CDI.
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
            { "@type": "ListItem", position: 2, name: "Développeur Front End Lille", item: "https://www.benhouss.site/services/developpeur-frontend-lille" },
          ],
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Développeur Front End à Lille",
            provider: { "@type": "Person", name: "Benhouss", url: "https://www.benhouss.site" },
            areaServed: { "@type": "City", name: "Lille" },
            description: "Développement d'interfaces web modernes avec React, Next.js, TypeScript et Tailwind CSS. Accessible, performant, responsive.",
            serviceType: "Développement Front End",
          }),
        }} />
      </div>
    </main>
  );
}
