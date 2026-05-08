import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concepteur Développeur d'Applications à Lille — Benhouss | RNCP Niv. 6",
  description:
    "Concepteur Développeur d'Applications Full Stack à Lille, titulaire du titre RNCP Niveau 6 (Bac+4). De la conception UX au déploiement, je prends en charge vos projets web et mobile.",
  keywords: [
    "concepteur développeur d'applications Lille",
    "concepteur développeur d'applications",
    "CDA Lille",
    "RNCP niveau 6 Lille",
    "développeur full stack Lille",
    "conception application web Lille",
    "développeur freelance RNCP Lille",
    "chef de projet technique Lille",
  ],
  alternates: { canonical: "https://www.benhouss.site/services/concepteur-application-lille" },
  openGraph: {
    title: "Concepteur Développeur d'Applications à Lille — Benhouss | RNCP Niv. 6",
    description:
      "RNCP Niv. 6 — Conception et développement d'applications web & mobile à Lille. Freelance & CDI.",
    url: "https://www.benhouss.site/services/concepteur-application-lille",
  },
};

export default function ConcepteurApplicationLillePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <nav className="text-sm text-muted-foreground mb-10">
          <Link href="/" className="hover:text-foreground transition-colors">Portfolio</Link>
          <span className="mx-2">/</span>
          <span>Concepteur Développeur d'Applications Lille</span>
        </nav>

        {/* RNCP badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          style={{ background: "color-mix(in srgb, var(--primary) 10%, transparent)", border: "1px solid color-mix(in srgb, var(--primary) 25%, transparent)", color: "var(--primary)" }}>
          ★ RNCP Niveau 6 — Bac+4
        </div>

        <h1 className="text-4xl font-black tracking-tight mb-4">
          Concepteur Développeur d'Applications à Lille
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Titulaire du <strong className="text-foreground">titre RNCP Niveau 6 — Concepteur Développeur
          d'Applications</strong>, je prends en charge vos projets de A à Z : conception, développement,
          tests et déploiement.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">De la conception au déploiement</h2>
          <div className="grid gap-4">
            {[
              {
                title: "Conception & architecture",
                desc: "Analyse des besoins, maquettes Figma, architecture technique (front/back/base de données), choix des technologies adaptées.",
              },
              {
                title: "Développement Full Stack",
                desc: "Front-end React/Next.js, back-end NestJS/Node.js, base de données Prisma + MySQL/PostgreSQL.",
              },
              {
                title: "Application mobile",
                desc: "Applications cross-platform avec Ionic (iOS + Android) ou Flutter, connectées à votre API.",
              },
              {
                title: "Tests & qualité",
                desc: "Tests unitaires Jest, tests e2e Cypress, revue de code, CI/CD et documentation technique.",
              },
              {
                title: "Déploiement & maintenance",
                desc: "Mise en production sur Vercel, Docker, VPS. Monitoring, corrections de bugs et évolutions.",
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
          <h2 className="text-2xl font-bold mb-4">Certification & formation</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Le titre <strong className="text-foreground">RNCP Niveau 6 — Concepteur Développeur
              d'Applications</strong> est une certification professionnelle reconnue par l'État
              (équivalent Bac+4). Il valide la capacité à concevoir, développer et déployer des
              applications web et mobile de A à Z.
            </p>
            <p>
              Obtenu à l'<strong className="text-foreground">ALT Incubateur</strong> (Lille, 2024),
              ce titre couvre la conception UX/UI, le développement front-end et back-end, la
              gestion de projet Agile, les tests et la sécurité des applications.
            </p>
            <p>
              Fort de 2+ ans d'expérience, je suis opérationnel immédiatement sur des
              projets <strong className="text-foreground">web et mobile à Lille</strong> en
              freelance ou CDI.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies maîtrisées</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "NestJS", "Ionic", "TypeScript", "Prisma", "MySQL", "Docker", "Figma", "Agile Scrum", "Jest", "Cypress"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">{t}</span>
            ))}
          </div>
        </section>

        <div className="flex gap-4 flex-wrap">
          <Link href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
            style={{ background: "var(--primary)", boxShadow: "0 4px 20px color-mix(in srgb, var(--primary) 30%, transparent)" }}>
            Me contacter
          </Link>
          <Link href="/cv" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-secondary text-secondary-foreground">
            Voir mon CV
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm">
            Portfolio →
          </Link>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Portfolio", item: "https://www.benhouss.site" },
            { "@type": "ListItem", position: 2, name: "Concepteur Développeur d'Applications Lille", item: "https://www.benhouss.site/services/concepteur-application-lille" },
          ],
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Concepteur Développeur d'Applications à Lille",
            provider: {
              "@type": "Person",
              name: "Benhouss",
              url: "https://www.benhouss.site",
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: "Titre RNCP Niveau 6 — Concepteur Développeur d'Applications",
              },
            },
            areaServed: { "@type": "City", name: "Lille" },
            description: "Conception et développement d'applications web et mobile de A à Z. RNCP Niveau 6.",
            serviceType: "Conception et Développement d'Applications",
          }),
        }} />
      </div>
    </main>
  );
}
