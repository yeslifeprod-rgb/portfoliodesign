"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { TechBadges } from "./TechBadges";

interface ProjectRowProps {
  project: {
    id: string;
    name: string;
    designation: string;
    srcs: string[];
    stack?: string[];
    liveUrl?: string;
  };
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project, index, isHovered, onHover }) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <BlurFade inView delay={index * 0.08}>
      <Link
        href={`/projets/${project.id}`}
        onMouseEnter={() => onHover(project.id)}
        onMouseLeave={() => onHover(null)}
        className="group block"
      >
        <motion.div
          className="relative py-6 px-4 sm:px-6 border-b border-border/30"
          animate={{ backgroundColor: isHovered ? "rgba(71,215,255,0.04)" : "transparent" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-primary"
            initial={false}
            animate={{ scaleY: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ originY: 0.5 }}
          />

          <div className="flex items-center gap-4 sm:gap-6">
            <motion.span
              className="text-sm font-mono tabular-nums w-8 shrink-0"
              animate={{ color: isHovered ? "var(--primary)" : "var(--muted-foreground)", opacity: isHovered ? 1 : 0.4 }}
            >
              {number}
            </motion.span>

            <div className="flex-1 min-w-0">
              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight"
                animate={{ x: isHovered ? 8 : 0, color: isHovered ? "var(--primary)" : "var(--foreground)" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {project.name}
              </motion.h3>

              <motion.div
                className="flex items-center gap-2 mt-1"
                animate={{ x: isHovered ? 8 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.02 }}
              >
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  {project.designation}
                </p>
                {project.liveUrl && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-500 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                )}
              </motion.div>

              <AnimatePresence>
                {isHovered && project.stack && (
                  <motion.div animate={{ x: 8 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                    <TechBadges stack={project.stack} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {project.srcs[0] && (
              <motion.div
                className="shrink-0 rounded-xl overflow-hidden border border-border/50 shadow-sm bg-muted"
                style={{ width: 120, height: 72 }}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  borderColor: isHovered ? "rgba(71,215,255,0.35)" : "rgba(var(--border),0.5)",
                  boxShadow: isHovered ? "0 8px 24px rgba(0,0,0,0.12)" : "0 1px 4px rgba(0,0,0,0.06)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.srcs[0]}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            )}

            <motion.div
              className="shrink-0 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white text-muted-foreground transition-colors duration-300"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </BlurFade>
  );
};
