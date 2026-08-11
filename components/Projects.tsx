"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { getAllProjects } from "@/lib/projects";

export function Projects() {
  const { language } = useLang();
  const fr = language === "fr";
  const projects = getAllProjects(language).filter((project) =>
    ["eduka", "teamsfinder", "num4"].includes(project.id),
  );

  return (
    <section id="projets" className="bg-muted/20 px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{fr ? "Projets" : "Projects"}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{fr ? "Du code, avec son contexte." : "Code, with its context."}</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            {fr ? "Trois projets réels, présentés avec mon rôle et les décisions techniques que je peux défendre." : "Three real projects, presented with my role and the technical decisions I can explain."}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => {
            const role = project.businessCase?.role ?? project.quote;
            const problem = project.businessCase?.problem ?? project.quote;
            const result = project.features?.slice(0, 2).join(" · ") ?? "";
            const difficulty = project.id === "eduka"
              ? (fr ? "Coordonner les règles métier, les rôles et les parcours web/mobile." : "Coordinate business rules, roles and web/mobile flows.")
              : project.id === "teamsfinder"
                ? (fr ? "Faire dialoguer matchmaking, temps réel et intégration Discord." : "Connect matchmaking, real-time features and Discord integration.")
                : (fr ? "Relier l’expérience web, le paiement iOS et les tests sur appareils." : "Connect the web experience, iOS payments and device testing.");
            return (
              <article key={project.id} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image src={project.srcs[0]} alt={`${project.name} — ${project.designation}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">{project.designation}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
                  <dl className="mt-6 space-y-4 text-sm leading-6">
                    <div><dt className="font-semibold text-foreground">{fr ? "Objectif" : "Goal"}</dt><dd className="text-muted-foreground">{problem}</dd></div>
                    <div><dt className="font-semibold text-foreground">{fr ? "Mon rôle" : "My role"}</dt><dd className="text-muted-foreground">{role}</dd></div>
                    <div><dt className="font-semibold text-foreground">{fr ? "Livraison" : "Delivered"}</dt><dd className="text-muted-foreground">{result}</dd></div>
                    <div><dt className="font-semibold text-foreground">{fr ? "Difficulté" : "Challenge"}</dt><dd className="text-muted-foreground">{difficulty}</dd></div>
                  </dl>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {(project.stack ?? []).slice(0, 7).map((tech) => <span key={tech} className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">{tech}</span>)}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-3 pt-7">
                    {project.liveUrl && <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">{fr ? "Voir la démo" : "View demo"}<ExternalLink className="h-3.5 w-3.5" /></Link>}
                    {project.githubUrls && <><Link href={project.githubUrls.front} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Front <Github className="h-3.5 w-3.5" /></Link><Link href={project.githubUrls.back} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Back <Github className="h-3.5 w-3.5" /></Link></>}
                    <Link href={`/projets/${project.id}`} className="ml-auto inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">{fr ? "Détails" : "Details"}<ArrowUpRight className="h-3.5 w-3.5" /></Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-border bg-card/40 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{fr ? "Projet technique public" : "Public technical project"}</p>
          <h3 className="mt-2 text-xl font-semibold">API NestJS conteneurisée avec Docker</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{fr ? "Exemple public à publier : API REST NestJS avec PostgreSQL, Prisma, authentification, tests, Swagger et Docker Compose. Aucun lien n’est affiché tant qu’un dépôt ou une vidéo réelle n’est pas disponible." : "Public example to publish: a NestJS REST API with PostgreSQL, Prisma, authentication, tests, Swagger and Docker Compose. No link is shown until a real repository or video is available."}</p>
        </div>
      </div>
    </section>
  );
}
