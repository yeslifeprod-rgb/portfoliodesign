"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { ExperienceCard } from "@/components/ExperienceCard";
import { getExperiences } from "@/lib/data/experiences";

const Experiences = () => {
  const { language } = useLang();
  const experiences = useMemo(() => getExperiences(language), [language]);

  return (
    <section
      id="experience"
      className="relative bg-background py-24 sm:py-32 overflow-hidden scroll-mt-24"
    >
      <InteractiveGridPattern
        width={50}
        height={50}
        squares={[30, 20]}
        className="absolute inset-0 z-[1] h-full w-full opacity-40 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
        squaresClassName="hover:fill-primary/15 stroke-transparent transition-all duration-500"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div
          className="mb-14 md:mb-18"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-1.5 mb-5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              {language === "fr" ? "Parcours" : "Experience"}
            </span>
          </div>

          <h2
            className="font-serif italic text-4xl sm:text-5xl md:text-6xl font-bold text-foreground"
            style={{ letterSpacing: "-0.015em" }}
          >
            {language === "fr" ? "Mon " : "My "}
            <motion.span
              className="text-primary inline-block"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            >
              {language === "fr" ? "Parcours" : "Journey"}
            </motion.span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {language === "fr"
              ? "De la curiosité au code. Chaque étape a forgé le développeur que je suis."
              : "From curiosity to code. Every step shaped the developer I am today."}
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} language={language} />
          ))}
        </div>
      </div>

      {/* Fondu vers Testimonials section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-20" />
    </section>
  );
};

export default Experiences;
