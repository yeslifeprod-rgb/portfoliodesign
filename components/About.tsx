"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Rocket, CheckCircle } from "lucide-react";
import { useLang } from "@/context/LangContext";

const stats = [
  {
    icon: GraduationCap,
    label: { fr: "Titre RNCP Niv. 6 (Bac+4)", en: "RNCP Level 6 (Bachelor+4)" },
  },
  {
    icon: Briefcase,
    label: {
      fr: "2+ ans d'expériences ",
      en: "2+ years experiences",
    },
  },
  {
    icon: Rocket,
    label: { fr: "Apps en production", en: "Apps in production" },
  },
  {
    icon: CheckCircle,
    label: { fr: "Dispo — Lille · Remote", en: "Available — Lille · Remote" },
    green: true,
  },
];

const About: React.FC = () => {
  const { language } = useLang();

  return (
    <section
      id="about"
      className="relative bg-background py-24 sm:py-32 overflow-hidden scroll-mt-24"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        {/* ── Header ── */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-1.5 mb-5 backdrop-blur-sm">
            <span className="w-4 h-[2px] rounded-full bg-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              {language === "fr" ? "À propos" : "About"}
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-serif italic text-4xl sm:text-5xl md:text-6xl font-bold text-foreground"
            style={{ letterSpacing: "-0.015em" }}
          >
            {language === "fr" ? "Qui " : "Who "}
            <span className="text-primary">
              {language === "fr" ? "suis-je" : "am I"}
            </span>
          </h2>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
          {/* Left: Avatar */}
          <motion.div
            className="relative w-[200px] h-[200px] mx-auto md:mx-0 rounded-2xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/assets/avatar2.png"
              alt="Ilyes Benhouss"
              fill
              className="object-cover"
              sizes="200px"
            />
          </motion.div>

          {/* Right: Bio */}
          <div className="space-y-5">
            <motion.p
              className="text-base sm:text-lg leading-relaxed text-foreground"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {language === "fr"
                ? "Développeur Full Stack basé à Lille, titulaire d'un Titre RNCP Niveau 6 (équivalent Bac+4). J'ai travaillé en startup aux côtés d'un fondateur et CTO, ce qui m'a appris à livrer vite, bien, et avec un vrai impact business."
                : "Full Stack Developer based in Lille, France, holding an RNCP Level 6 degree (Bachelor+4 equivalent). I worked at a startup alongside the founder and CTO, which taught me to ship fast, ship well, and deliver real business impact."}
            </motion.p>

            <motion.p
              className="text-base sm:text-lg leading-relaxed text-foreground"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {language === "fr"
                ? "Je ne construis pas juste du code — je livre des applications en production. Next.js, TypeScript et Node.js sont mes outils du quotidien."
                : "I don't just write code — I ship production applications. Next.js, TypeScript and Node.js are my daily tools."}
            </motion.p>

            <motion.p
              className="text-base sm:text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {language === "fr"
                ? "Disponible maintenant en CDI ou freelance — Lille ou full remote. Je cherche une équipe ambitieuse où je peux avoir un impact concret."
                : "Available now for permanent or freelance roles — Lille or fully remote. Looking for an ambitious team where I can make a real impact."}
            </motion.p>
          </div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          className="mt-14 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label.en}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/40 bg-card/50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
            >
              <stat.icon
                className={`w-4.5 h-4.5 shrink-0 ${
                  stat.green ? "text-emerald-500" : "text-muted-foreground"
                }`}
              />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {stat.label[language]}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;