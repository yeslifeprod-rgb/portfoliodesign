"use client";

import { useCallback, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate, useSpring, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink, ChevronRight } from "lucide-react";
import { stackIcons } from "@/lib/stackIcons";
import type { Experience, ExperienceType } from "@/lib/data/experiences";

const typeBadgeConfig: Record<ExperienceType, { color: string; fr: string; en: string }> = {
  stage: { color: "bg-blue-500/10 text-blue-500 border-blue-500/20", fr: "Stage", en: "Internship" },
  "immersion-professionnelle": { color: "bg-purple-500/10 text-purple-500 border-purple-500/20", fr: "Immersion Professionnelle", en: "Professional Immersion" },
  formation: { color: "bg-amber-500/10 text-amber-500 border-amber-500/20", fr: "Formation", en: "Training" },
  "projet-perso": { color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20", fr: "Projet perso", en: "Side Project" },
};

interface ExperienceCardProps {
  exp: Experience;
  index: number;
  language: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index, language }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [prefersReducedMotion, mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-200);
    mouseY.set(-200);
  }, [mouseX, mouseY]);

  const gradientX = useSpring(mouseX, { stiffness: prefersReducedMotion ? 1000 : 300, damping: prefersReducedMotion ? 100 : 30 });
  const gradientY = useSpring(mouseY, { stiffness: prefersReducedMotion ? 1000 : 300, damping: prefersReducedMotion ? 100 : 30 });
  const gradientBg = useMotionTemplate`radial-gradient(400px circle at ${gradientX}px ${gradientY}px, rgba(220,38,38,0.06), transparent 70%)`;

  const badgeCfg = typeBadgeConfig[exp.type];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      transition={prefersReducedMotion ? {} : { duration: 0.5, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="relative rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:bg-card/80 group-hover:shadow-lg group-hover:shadow-primary/[0.04]">
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: gradientBg }}
        />
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.23, 1, 0.32, 1] }}
        />

        <div className="relative p-6 sm:p-8">
          <div className="flex items-start gap-4 sm:gap-5 mb-4">
            <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full border-2 border-primary/30 bg-background text-primary font-mono text-sm font-bold group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors duration-300">
              {exp.number}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                  {exp.title}
                </h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${badgeCfg.color}`}>
                  {language === "fr" ? badgeCfg.fr : badgeCfg.en}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Briefcase className="w-3.5 h-3.5 text-primary/60" />
                  {exp.company}
                </span>
                <span className="hidden sm:inline text-muted-foreground/30">|</span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground tracking-wider bg-muted/50 px-2.5 py-1 rounded-full border border-border/50">
                  <Calendar className="w-3 h-3" />
                  {exp.years}
                </span>
              </div>
            </div>
          </div>

          <ul className="space-y-2 mb-5 pl-[3.75rem]">
            {exp.description.map((point, i) => (
              <motion.li
                key={i}
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? {} : { duration: 0.35, delay: 0.2 + i * 0.06, ease: "easeOut" }}
                className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-[7px] shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pl-[3.75rem]">
            {exp.skills.map((skill, i) => {
              const data = stackIcons[skill];
              const Icon = data?.Icon;
              return (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.3 + i * 0.03, ease: "easeOut" }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/60 border text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                  style={{ borderColor: data?.color && data.color !== "currentColor" ? `${data.color}30` : "var(--border)" }}
                >
                  {Icon && <Icon className="w-3 h-3" style={{ color: data.color === "currentColor" ? undefined : data.color }} />}
                  {skill}
                </motion.span>
              );
            })}
          </div>

          {exp.projectLink && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="pl-[3.75rem] mt-4"
            >
              <Link
                href={exp.projectLink.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/[0.06] text-sm font-medium text-primary hover:bg-primary/[0.12] hover:border-primary/50 transition-all duration-300 group/link"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {exp.projectLink.label}
                <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
