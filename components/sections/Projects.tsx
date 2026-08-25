"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

import { cn } from "@/lib/utils";
import { getHomeProjects } from "@/lib/projects";
import type { Project } from "@/lib/projects/types";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/ui/section";
import { useLang } from "@/context/LangContext";

/* Le GIF Hermes fait 360x360 et embarque son propre fond noir (#000000
   déclaré dans l'en-tête du fichier). Il doit donc être contenu, pas rogné,
   sur une surface sombre constante — un token de thème donnerait un cadre
   blanc autour d'un visuel noir en mode sombre. Ce noir appartient à
   l'image, pas à l'habillage : il ne suit volontairement pas le thème. */
const MEDIA_DARK = "#050505";

/** Liens externes réellement présents dans les données du projet. */
function externalLinks(project: Project) {
  const links: { label: string; href: string; icon: React.ElementType }[] = [];

  if (project.liveUrl) {
    links.push({ label: "Site", href: project.liveUrl, icon: ExternalLink });
  }
  if (project.githubUrls?.front) {
    links.push({ label: "Code", href: project.githubUrls.front, icon: Github });
  } else if (project.gitlabUrl) {
    links.push({ label: "Code", href: project.gitlabUrl, icon: Github });
  }

  return links;
}

function ProjectCard({ project }: { project: Project }) {
  const src = project.srcs[0];
  const isContained = src.includes("/hermes/");
  const links = externalLinks(project);
  const stack = project.stack ?? [];
  const shown = stack.slice(0, 3);
  const rest = stack.length - shown.length;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:ring-2 hover:ring-muted">
      <div className="relative shrink-0">
        <Link href={`/projets/${project.id}`} className="block">
          <div
            className="relative h-32 w-full overflow-hidden bg-muted"
            style={isContained ? { backgroundColor: MEDIA_DARK } : undefined}
          >
            {/* Un MP4 rend le même aperçu qu'un GIF pour une fraction du
                poids : les trois GIF de la page pesaient 128 Mo, les MP4
                équivalents 2,5 Mo. */}
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label={`Aperçu animé du projet ${project.name}`}
                className={cn(
                  "h-full w-full transition-transform duration-500 group-hover:scale-[1.03]",
                  isContained ? "object-contain" : "object-cover object-top"
                )}
              />
            ) : (
              <Image
                src={src}
                alt={`Aperçu du projet ${project.name}`}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 380px"
                className={cn(
                  "transition-transform duration-500 group-hover:scale-[1.03]",
                  isContained ? "object-contain" : "object-cover object-top"
                )}
              />
            )}
          </div>
        </Link>

        {links.length > 0 && (
          <div className="absolute right-2 top-2 flex flex-wrap gap-1.5">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} — ${project.name}`}
              >
                <Badge variant="overlay" className="gap-1.5">
                  <Icon className="h-3 w-3" aria-hidden="true" />
                  {label}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 flex-col gap-0.5">
            <h3 className="text-body font-semibold leading-tight text-card-foreground">
              <Link
                href={`/projets/${project.id}`}
                className="transition-colors hover:text-primary"
              >
                {project.name}
              </Link>
            </h3>
            {/* Le template affiche une plage de dates ici. Nos données n'en
                contiennent pas — on montre le contexte réel plutôt que
                d'inventer une période. */}
            <p className="text-caption text-muted-foreground">
              {project.designation}
            </p>
          </div>

          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          />
        </div>

        {/* Récit en deux temps sur la carte : le problème, puis ce qu'il
            est devenu. Le troisième temps (mon rôle) est sur la page projet,
            qui déroule Problème / Mon rôle / Résultat en entier. */}
        {project.businessCase && (
          <dl className="flex flex-1 flex-col gap-1.5 text-caption leading-relaxed">
            <div className="line-clamp-2 text-pretty text-muted-foreground">
              <dt className="inline font-semibold text-foreground">
                Problème.{" "}
              </dt>
              <dd className="inline">{project.businessCase.problem}</dd>
            </div>
            <div className="line-clamp-2 text-pretty text-muted-foreground">
              <dt className="inline font-semibold text-primary">Résultat. </dt>
              <dd className="inline">{project.businessCase.result}</dd>
            </div>
          </dl>
        )}

        {/* Preuve au contact du travail qu'elle commente. */}
        {project.testimonial && (
          <figure className="border-l-2 border-primary/40 pl-2.5">
            <blockquote className="line-clamp-2 text-pretty text-caption italic leading-relaxed text-foreground">
              « {project.testimonial.quote} »
            </blockquote>
            <figcaption className="mt-0.5 text-caption text-muted-foreground">
              {project.testimonial.name} — {project.testimonial.role}
            </figcaption>
          </figure>
        )}

        {shown.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-1 pt-0.5">
            {shown.map((tech) => (
              <li key={tech}>
                <Badge variant="outline" className="h-5 border-border px-1.5">
                  {tech}
                </Badge>
              </li>
            ))}
            {rest > 0 && (
              <li className="self-center px-1 text-caption text-muted-foreground/70">
                +{rest}
              </li>
            )}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const { language } = useLang();
  const projects = getHomeProjects(language);

  return (
    <Section id="projets">
      <SectionHeader
        eyebrow="Mes projets"
        title="Ce qui bloquait, ce que ça a donné"
        description="Quatre projets, racontés simplement : le problème, puis le résultat."
        framed
      />

      {/* Le template utilise max-w-[800px]. On reste sur max-w-content (768px),
          la largeur unique du site — introduire une 2e largeur recréerait le
          désalignement entre sections. */}
      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-fr">
        {/* Pas d'animation par carte : la section entière apparaît déjà
            au défilement, les deux se superposaient. */}
        {projects.map((project) => (
          <li key={project.id} className="h-full">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
