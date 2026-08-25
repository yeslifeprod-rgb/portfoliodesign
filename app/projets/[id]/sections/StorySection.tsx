"use client";

import type { Project } from "@/lib/projects";
import { FadeIn, SectionHeading } from "./_shared";

interface Props {
  story: NonNullable<Project["story"]>;
  language: string;
}

export function StorySection({ story, language }: Props) {
  return (
    <FadeIn delay={0.15}>
      <section className="mb-32" aria-labelledby="project-story-heading">
        <SectionHeading>
          {language === "fr" ? "L'histoire du projet" : "The project story"}
        </SectionHeading>
        <div className="max-w-2xl">
          <h2
            id="project-story-heading"
            className="mb-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {story.title}
          </h2>
          <div className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
