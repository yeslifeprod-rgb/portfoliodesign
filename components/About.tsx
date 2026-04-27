"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Briefcase, Rocket, CheckCircle } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { BlurFade } from "@/components/ui/blur-fade";
import dynamic from "next/dynamic";

const ContributionGraph = dynamic(
  () => import("@/components/ContributionGraph"),
  { ssr: false },
);

const stats = [
  {
    icon: GraduationCap,
    label: { fr: "CDA Bac+4", en: "CDA Bac+4" },
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
    label: { fr: "Disponible", en: "Available" },
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
        <BlurFade inView delay={0}>
          <div className="mb-16 md:mb-20">
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
          </div>
        </BlurFade>

        {/* ── Two-column layout ── */}
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
          {/* Left: Avatar */}
          <BlurFade inView delay={0.1}>
            <div className="relative w-[200px] h-[200px] mx-auto md:mx-0 rounded-2xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5">
              <Image
                src="/assets/avatar2.png"
                alt="Ilyes Benhouss"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </BlurFade>

          {/* Right: Bio */}
          <div className="space-y-5">
            <BlurFade inView delay={0.15}>
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                {language === "fr"
                  ? "Développeur Full Stack basé à Lille, certifié CDA (Bac+4). J'ai travaillé en startup aux côtés d'un fondateur et CTO, ce qui m'a appris à livrer vite, bien, et avec un vrai impact business."
                  : "Full Stack Developer based in Lille, France, with a CDA certification (Bachelor+4). I worked at a startup alongside the founder and CTO, which taught me to ship fast, ship well, and deliver real business impact."}
              </p>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                {language === "fr"
                  ? "Je ne construis pas juste du code — je livre des applications en production. Next.js, TypeScript et Node.js sont mes outils du quotidien."
                  : "I don't just write code — I ship production applications. Next.js, TypeScript and Node.js are my daily tools."}
              </p>
            </BlurFade>

            <BlurFade inView delay={0.25}>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                {language === "fr"
                  ? "Disponible en CDI ou freelance, je cherche une équipe ambitieuse où je peux avoir un impact concret."
                  : "Available for permanent or freelance roles, I'm looking for an ambitious team where I can make a real impact."}
              </p>
            </BlurFade>
          </div>
        </div>

        {/* ── Stats row ── */}
        <BlurFade inView delay={0.3}>
          <div className="mt-14 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
            {stats.map((stat) => (
              <div
                key={stat.label.en}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/40 bg-card/50"
              >
                <stat.icon
                  className={`w-4.5 h-4.5 shrink-0 ${
                    stat.green ? "text-emerald-500" : "text-muted-foreground"
                  }`}
                />
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {stat.label[language]}
                </span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
