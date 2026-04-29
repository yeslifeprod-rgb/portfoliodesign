"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Briefcase, Rocket, CheckCircle } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { BlurFade } from "@/components/ui/blur-fade";

const stats = [
  {
    icon: GraduationCap,
    label: { fr: "Titre RNCP niv. 6 (Bac+4)", en: "RNCP Level 6 (Bachelor+4)" },
  },
  {
    icon: Briefcase,
    label: {
      fr: "2+ ans d’expérience",
      en: "2+ years of experience",
    },
  },
  {
    icon: Rocket,
    label: { fr: "Applications en production", en: "Apps in production" },
  },
  {
    icon: CheckCircle,
    label: {
      fr: "Disponible — Lille · Remote",
      en: "Available — Lille · Remote",
    },
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
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-1.5 mb-5 backdrop-blur-sm">
              <span className="w-4 h-[2px] rounded-full bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                {language === "fr" ? "À propos" : "About"}
              </span>
            </div>

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

        {/* ── Layout ── */}
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
          {/* Avatar */}
          <BlurFade inView delay={0.1}>
            <div className="relative w-[200px] h-[200px] mx-auto md:mx-0 rounded-2xl overflow-hidden border border-border/50 shadow-lg">
              <Image
                src="/assets/avatar2.png"
                alt="Benhouss"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </BlurFade>

          {/* Bio */}
          <div className="space-y-5">
            <BlurFade inView delay={0.15}>
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                {language === "fr"
                  ? "Je m'appelle Ilyes, Concepteur Développeur d'Applications (Bac+4) et développeur full stack basé à Lille. Mon expérience en startup aux côtés d'un fondateur et d'un CTO m'a forgé une solide culture produit et technique."
                  : "My name is Ilyes, an Application Designer Developer (Bachelor+4) and full stack developer based in Lille, France. My startup experience alongside a founder and a CTO has forged a strong product and technical culture."}
              </p>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                {language === "fr"
                  ? "Je ne me contente pas d'écrire des lignes de code — je conçois et livre des applications web et mobiles de A à Z : architecture, UX/UI, développement, tests et déploiement."
                  : "I don't just write lines of code — I design and deliver web and mobile applications end-to-end: architecture, UX/UI, development, testing, and deployment."}
              </p>
            </BlurFade>

            <BlurFade inView delay={0.25}>
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                {language === "fr"
                  ? "Spécialisé en Next.js, TypeScript et Node.js, je conçois des architectures robustes et je produis un code maintenable, scalable et performant pour accompagner la croissance de vos projets."
                  : "Specializing in Next.js, TypeScript, and Node.js, I design robust architectures and write maintainable, scalable, and performant code to support the growth of your projects."}
              </p>
            </BlurFade>

            <BlurFade inView delay={0.3}>
              <p className="text-sm text-muted-foreground">
                {language === "fr"
                  ? "Disponible en CDI ou freelance — Lille ou full remote."
                  : "Available for full-time or freelance — Lille or fully remote."}
              </p>
            </BlurFade>
          </div>
        </div>

        {/* Stats */}
        <BlurFade inView delay={0.35}>
          <div className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
            {stats.map((stat) => (
              <div
                key={stat.label.en}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/40 bg-card/50"
              >
                <stat.icon
                  className={`w-4 h-4 ${
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
