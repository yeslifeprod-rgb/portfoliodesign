"use client";

import { Bug, LockKeyhole, Database, Container, TestTube2 } from "lucide-react";
import { useLang } from "@/context/LangContext";

const items = [
  { icon: Bug, fr: ["Correction d’API NestJS", "Diagnostic et correction d’erreurs 400, 401, 403 ou 500 dans des API REST."], en: ["NestJS API fixes", "Diagnose and fix 400, 401, 403 or 500 errors in REST APIs."] },
  { icon: LockKeyhole, fr: ["Authentification et autorisation", "JWT, rôles utilisateurs, permissions et sécurisation des endpoints."], en: ["Authentication and authorization", "JWT, user roles, permissions and endpoint security."] },
  { icon: Database, fr: ["PostgreSQL et Prisma", "Modèles de données, migrations, requêtes, relations et erreurs de base de données."], en: ["PostgreSQL and Prisma", "Data models, migrations, queries, relations and database errors."] },
  { icon: Container, fr: ["Dockerisation", "Dockerfile, Docker Compose, PostgreSQL local, variables d’environnement et environnement reproductible."], en: ["Containerization", "Dockerfile, Docker Compose, local PostgreSQL, environment variables and reproducible environments."] },
  { icon: TestTube2, fr: ["Tests et documentation", "Tests unitaires, tests e2e, Swagger/OpenAPI et documentation claire pour la maintenance."], en: ["Testing and documentation", "Unit tests, e2e tests, Swagger/OpenAPI and clear maintenance documentation."] },
] as const;

export default function Services() {
  const { language } = useLang();
  const fr = language === "fr";
  return (
    <section id="services" className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{fr ? "Mes interventions" : "What I can help with"}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">{fr ? "Un renfort backend sur un périmètre précis." : "Backend support on a clearly defined scope."}</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, fr: frCopy, en: enCopy }) => {
            const [title, body] = fr ? frCopy : enCopy;
            return <article key={title} className="rounded-2xl border border-border bg-card p-5"><Icon className="h-5 w-5 text-primary" /><h3 className="mt-5 text-base font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}
