"use client";

import React, { useState, useCallback } from "react";
import { useLang } from "@/context/LangContext";
import { getAllProjects } from "@/lib/projects";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ProjectRow } from "@/components/projects/ProjectRow";
import { MobileProjectCard } from "@/components/projects/MobileProjectCard";

export function Projects() {
  const { language } = useLang();
  const projects = getAllProjects(language);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleHover = useCallback((id: string | null) => {
    setHoveredId(id);
  }, []);

  return (
    <section
      id="projets"
      className="relative bg-background py-24 sm:py-32 overflow-hidden scroll-mt-24"
    >
      <DotPattern width={28} height={28} cr={0.8} className="opacity-[0.03] dark:opacity-[0.05]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <BlurFade inView delay={0}>
          <div className="mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-1.5 mb-5 backdrop-blur-sm">
              <span className="w-4 h-[2px] rounded-full bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                {language === "fr" ? "Projets" : "Projects"}
              </span>
            </div>

            <h2
              className="font-serif italic text-4xl sm:text-5xl md:text-6xl font-bold text-foreground"
              style={{ letterSpacing: "-0.015em" }}
            >
              {language === "fr" ? "Mes " : "Selected "}
              <span className="text-primary">
                {language === "fr" ? "Projets" : "Works"}
              </span>
            </h2>

            <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed">
              {language === "fr"
                ? "De la conception au deploiement, chaque projet raconte une histoire."
                : "From concept to deployment, every project tells a story."}
            </p>
          </div>
        </BlurFade>

        {/* Desktop list */}
        <div className="hidden md:block relative">
          <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredId === project.id}
              onHover={handleHover}
            />
          ))}

          <BlurFade inView delay={projects.length * 0.08 + 0.1}>
            <div className="pt-8 flex items-center gap-3">
              <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              <span className="text-2xl font-bold font-mono text-primary tabular-nums">
                {String(projects.length).padStart(2, "0")}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {language === "fr" ? "projets livrés" : "projects shipped"}
              </span>
            </div>
          </BlurFade>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-6">
          {projects.map((project, index) => (
            <MobileProjectCard
              key={project.id}
              project={project}
              index={index}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
