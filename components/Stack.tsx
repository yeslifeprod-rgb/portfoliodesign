"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiPrisma, SiMongodb, SiMysql,
  SiDocker, SiGit, SiJest, SiCypress, SiFigma, SiIonic,
  SiVercel, SiFramer, SiVuedotjs, SiNuxt, SiStripe,
  SiNotion, SiTrello, SiJetbrains,
} from "react-icons/si";
import { FaPenFancy } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";
import { Brain, Bot, Workflow } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { DotPattern } from "@/components/ui/dot-pattern";

/* ── Data ── */
interface Tech {
  Icon: React.ElementType;
  name: string;
  color: string;
}

interface Category {
  label: { fr: string; en: string };
  accentColor: string;
  items: Tech[];
}

const stack: Category[] = [
  {
    label: { fr: "Frontend", en: "Frontend" },
    accentColor: "#61DAFB",
    items: [
      { Icon: SiReact,       name: "React",         color: "#61DAFB" },
      { Icon: SiNextdotjs,   name: "Next.js",       color: "#888888" },
      { Icon: SiTypescript,  name: "TypeScript",    color: "#3178C6" },
      { Icon: SiTailwindcss, name: "Tailwind",      color: "#06B6D4" },
      { Icon: SiIonic,       name: "Ionic",         color: "#3880FF" },
      { Icon: SiFramer,      name: "Framer Motion", color: "#BB4B96" },
      { Icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
      { Icon: SiNuxt,     name: "Nuxt",   color: "#00DC82" },
    ],
  },
  {
    label: { fr: "Backend & BDD", en: "Backend & DB" },
    accentColor: "#339933",
    items: [
      { Icon: SiNodedotjs,    name: "Node.js",  color: "#339933" },
      { Icon: SiNestjs,       name: "NestJS",   color: "#E0234E" },
      { Icon: SiPrisma,       name: "Prisma",   color: "#5A67D8" },
      { Icon: SiMysql,        name: "MySQL",    color: "#4479A1" },
      { Icon: SiMongodb,      name: "MongoDB",  color: "#47A248" },
      { Icon: RiSupabaseLine, name: "Supabase", color: "#3ECF8E" },
      { Icon: SiStripe,       name: "Stripe",   color: "#635BFF" },
    ],
  },
  {
    label: { fr: "DevOps & Outils", en: "DevOps & Tools" },
    accentColor: "#F05032",
    items: [
      { Icon: SiGit,     name: "Git",     color: "#F05032" },
      { Icon: SiVercel,  name: "Vercel",  color: "#888888" },
      { Icon: SiDocker,  name: "Docker",  color: "#2496ED" },
      { Icon: SiJest,    name: "Jest",    color: "#C21325" },
      { Icon: SiCypress, name: "Cypress", color: "#69D3A7" },
    ],
  },
  {
    label: { fr: "Design", en: "Design" },
    accentColor: "#F24E1E",
    items: [
      { Icon: SiFigma,          name: "Figma",      color: "#F24E1E" },
      { Icon: FaPenFancy, name: "Excalidraw", color: "#6965DB" },
    ],
  },
  {
    label: { fr: "Gestion de projet", en: "Project Management" },
    accentColor: "#0052CC",
    items: [
      { Icon: SiNotion,     name: "Notion",    color: "#ABABAB" },
      { Icon: SiTrello,     name: "Trello",    color: "#0052CC" },
      { Icon: SiJetbrains,  name: "YouTrack",  color: "#A0A0A0" },
      { Icon: Workflow,     name: "Méthode Agile", color: "#22D3EE" },
    ],
  },
  
];

/* ── Tech item ── */
const TechItem: React.FC<{ tech: Tech; index: number }> = ({ tech, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.1 + index * 0.05,
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-2.5 w-[72px] cursor-default select-none group"
    >
      {/* Icon */}
      <motion.div
        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
        style={{
          background: `${tech.color}12`,
          boxShadow: hovered ? `0 0 24px ${tech.color}30, 0 0 48px ${tech.color}10` : "none",
          borderWidth: 1,
          borderColor: hovered ? `${tech.color}50` : `${tech.color}15`,
        }}
        animate={hovered ? { rotate: [0, -3, 3, -1, 0] } : {}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <tech.Icon
          className="w-5 h-5 transition-all duration-300"
          style={{
            color: tech.color,
            filter: hovered ? `drop-shadow(0 0 8px ${tech.color}80)` : "none",
          }}
        />
      </motion.div>
      {/* Name */}
      <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
        {tech.name}
      </span>
    </motion.div>
  );
};

/* ── Main ── */
const Stack: React.FC = () => {
  const { language } = useLang();

  return (
    <section id="stack" className="relative bg-background py-24 sm:py-32 overflow-hidden">
      {/* Subtle dot pattern background */}
      <DotPattern width={28} height={28} cr={0.8} className="opacity-[0.03] dark:opacity-[0.05]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          {/* Badge pill */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-1.5 mb-5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="w-4 h-[2px] rounded-full bg-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              {language === "fr" ? "Technologies" : "Technologies"}
            </span>
          </motion.div>

          <motion.h2
            className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
            style={{ letterSpacing: "-0.015em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            {language === "fr" ? "" : "My "}
            <span className="relative inline-block text-primary">
              Stack
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-red-400 to-primary rounded-full origin-left"
              />
            </span>
          </motion.h2>
          <motion.div
            className="mt-3 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-sm text-muted-foreground">
              {language === "fr"
                ? "Les technologies que j'utilise au quotidien"
                : "The technologies I use every day"}
            </p>
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary tabular-nums">
              {stack.reduce((acc, cat) => acc + cat.items.length, 0)}
            </span>
          </motion.div>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {stack.map((cat, ci) => (
            <div key={cat.label.en}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <motion.span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: cat.accentColor }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ci * 0.06, type: "spring" }}
                />
                <motion.span
                  className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: ci * 0.06, ease: [0.23, 1, 0.32, 1] }}
                >
                  {cat.label[language as "fr" | "en"]}
                </motion.span>
                <motion.div
                  className="flex-1 h-px bg-border"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + ci * 0.06, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.span
                  className="text-[10px] font-mono text-muted-foreground/70 tabular-nums"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + ci * 0.06 }}
                >
                  {String(cat.items.length).padStart(2, "0")}
                </motion.span>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-x-4 gap-y-4">
                {cat.items.map((tech, ti) => (
                  <TechItem key={tech.name} tech={tech} index={ti} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
