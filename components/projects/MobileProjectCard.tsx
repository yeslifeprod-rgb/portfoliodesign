"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Safari } from "@/components/ui/safari";
import { stackIcons } from "@/lib/stackIcons";

interface MobileProjectCardProps {
  project: {
    id: string;
    name: string;
    designation: string;
    srcs: string[];
    stack?: string[];
    quote: string;
    liveUrl?: string;
  };
  index: number;
  language: string;
}

export const MobileProjectCard: React.FC<MobileProjectCardProps> = ({ project, index, language }) => {
  const number = String(index + 1).padStart(2, "0");
  const containerRef = useRef<HTMLDivElement>(null);
  const [gifSrc, setGifSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !project.srcs[0]) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGifSrc(project.srcs[0]);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [project.srcs]);

  return (
    <BlurFade inView delay={index * 0.1}>
      <div ref={containerRef}>
        <Link
          href={`/projets/${project.id}`}
          className="group block rounded-2xl overflow-hidden border border-border/40 bg-card/50 hover:border-primary/30 transition-all duration-300"
        >
          <div className="relative rounded-xl overflow-hidden">
            <Safari
              imageSrc={gifSrc}
              url={`benhouss.site/projets/${project.id}`}
              mode="simple"
              className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute top-3 left-3 z-20 inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/90 text-white text-xs font-bold shadow-lg">
              {number}
            </span>
          </div>

          <div className="p-5">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                {project.designation}
              </p>
              {project.liveUrl && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-500 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-3 line-clamp-2 leading-relaxed">
              {project.quote}
            </p>

            {project.stack && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.stack.slice(0, 4).map((tech) => {
                  const info = stackIcons[tech];
                  const Icon = info?.Icon;
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted/60 border border-border/50 text-[10px] font-medium text-muted-foreground"
                    >
                      {Icon && <Icon className="w-2.5 h-2.5" style={{ color: info.color === "currentColor" ? undefined : info.color }} />}
                      {tech}
                    </span>
                  );
                })}
                {project.stack.length > 4 && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-semibold text-primary">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>
            )}

            <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
              {language === "fr" ? "Voir le projet" : "View project"}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </Link>
      </div>
    </BlurFade>
  );
};
