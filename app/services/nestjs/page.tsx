import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Développeur NestJS — Benhouss | APIs REST & Microservices",
  description:
    "Développeur NestJS spécialisé dans la création d'APIs REST et microservices avec NestJS, Prisma, MySQL, JWT et Docker. Disponible en freelance et CDI — Lille ou remote.",
  keywords: [
    "développeur nestjs",
    "développeur nestjs freelance",
    "développeur nestjs lille",
    "api rest nestjs",
    "microservices nestjs",
    "nestjs prisma mysql",
    "backend nodejs nestjs",
    "développeur backend lille",
  ],
  alternates: { canonical: "https://www.benhouss.site/services/nestjs" },
  openGraph: {
    title: "Développeur NestJS — Benhouss | APIs & Microservices",
    description:
      "APIs REST et microservices avec NestJS, Prisma, MySQL, Docker. Freelance & CDI — Lille ou remote.",
    url: "https://www.benhouss.site/services/nestjs",
  },
};

export default function NestjsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <nav className="text-sm text-muted-foreground mb-10">
          <Link href="/" className="hover:text-foreground transition-colors">Portfolio</Link>
          <span className="mx-2">/</span>
          <span>Développeur NestJS</span>
        </nav>

        <h1 className="text-4xl font-black tracking-tight mb-4">
          Développeur NestJS
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Conception et développement d'<strong className="text-foreground">APIs REST</strong> et
          d'architectures <strong className="text-foreground">microservices</strong> avec NestJS —
          disponible en freelance et CDI, Lille ou full remote.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Services NestJS</h2>
          <div className="grid gap-4">
            {[
              {
                title: "API REST avec NestJS",
                desc: "Développement d'APIs robustes avec NestJS : controllers, services, DTOs, validation, guards JWT et gestion des erreurs.",
              },
              {
                title: "Architecture microservices",
                desc: "Découpage en microservices, communication inter-services, gestion des queues (Bull) et patterns CQRS.",
              },
              {
                title: "ORM Prisma + MySQL / PostgreSQL",
                desc: "Modélisation de la base de données, migrations, relations complexes et optimisation des requêtes avec Prisma.",
              },
              {
                title: "Sécurité & authentification",
                desc: "Authentification JWT, bcrypt, guards, refresh tokens, OAuth2 et gestion des rôles / permissions.",
              },
              {
                title: "Tests & CI/CD",
                desc: "Tests unitaires Jest, tests e2e, Dockerfile, Docker Compose et pipelines CI/CD.",
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stack backend NestJS</h2>
          <div className="flex flex-wrap gap-2">
            {["NestJS", "Node.js", "TypeScript", "Prisma", "MySQL", "PostgreSQL", "JWT", "bcrypt", "Docker", "Jest", "Cypress"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Expérience NestJS en production</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              J'ai migré une application monolithique Node.js vers une{" "}
              <strong className="text-foreground">architecture microservices NestJS</strong> lors de
              mon expérience à l'ALT Incubateur (2023-2024), avec MySQL, Prisma et Docker pour
              containeriser l'environnement.
            </p>
            <p>
              NestJS permet de structurer le code backend de manière scalable grâce à ses modules,
              providers et injection de dépendances inspirés d'Angular. C'est le choix idéal pour
              des projets qui ont vocation à grossir.
            </p>
            <p>
              Je suis disponible pour des missions <strong className="text-foreground">freelance NestJS</strong>{" "}
              et des postes CDI — à Lille (Hauts-de-France) ou en full remote sur toute la France.
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
            { "@type": "ListItem", position: 2, name: "Développeur NestJS", item: "https://www.benhouss.site/services/nestjs" },
          ],
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Développeur NestJS — APIs REST & Microservices",
            provider: { "@type": "Person", name: "Benhouss", url: "https://www.benhouss.site" },
            description: "Développement d'APIs REST et architectures microservices avec NestJS, Prisma, MySQL, JWT et Docker.",
            serviceType: "Développement Backend NestJS",
          }),
        }} />
      </div>
    </main>
  );
}
