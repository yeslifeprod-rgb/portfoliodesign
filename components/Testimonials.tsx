"use client";

import React, { useRef } from "react";
import { useLang } from "@/context/LangContext";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Quote } from "lucide-react";

/* ── Data ── */
interface Testimonial {
  name: string;
  role: { fr: string; en: string };
  company: string;
  text: { fr: string; en: string };
  highlight: { fr: string; en: string };
}

const testimonials: Testimonial[] = [
  {
    name: "Mathis",
    role: { fr: "CTO / Co-fondateur", en: "CTO / Co-founder" },
    company: "Num4",
    text: {
      fr: "On te remercie pour ton investissement. C'est super appréciable, t'as bien fait avancer le projet. T'as fait du très bon taf. Et si t'as besoin d'une reco n'hésite pas.",
      en: "We really appreciate your commitment. You did a great job moving the project forward. Excellent work. And if you ever need a recommendation, don't hesitate.",
    },
    highlight: {
      fr: "très bon taf",
      en: "Excellent work",
    },
  },
  {
    name: "Florian",
    role: { fr: "Fondateur", en: "Founder" },
    company: "LeadFlow AI",
    text: {
      fr: "Sync auto + rappels 24h avant, c'est le genre de feature qui transforme un outil sympa en outil indispensable. Belle exécution !",
      en: "Auto sync + 24h reminders — that's the kind of feature that turns a nice tool into an essential one. Great execution!",
    },
    highlight: {
      fr: "outil indispensable",
      en: "essential one",
    },
  },
];

/* ── Testimonial Card ── */
const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  index: number;
  language: string;
}> = ({ testimonial, index, language }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-200);
    mouseY.set(-200);
  };

  const gradientX = useSpring(mouseX, {
    stiffness: prefersReducedMotion ? 1000 : 300,
    damping: prefersReducedMotion ? 100 : 30,
  });
  const gradientY = useSpring(mouseY, {
    stiffness: prefersReducedMotion ? 1000 : 300,
    damping: prefersReducedMotion ? 100 : 30,
  });
  const gradientBg = useMotionTemplate`radial-gradient(350px circle at ${gradientX}px ${gradientY}px, rgba(23,17,234,0.08), transparent 70%)`;

  const lang = language as "fr" | "en";
  const text = testimonial.text[lang];
  const highlight = testimonial.highlight[lang];

  // Split text around the highlight to render it with emphasis
  const highlightIndex = text.toLowerCase().indexOf(highlight.toLowerCase());
  let before = text;
  let highlighted = "";
  let after = "";
  if (highlightIndex !== -1) {
    before = text.slice(0, highlightIndex);
    highlighted = text.slice(highlightIndex, highlightIndex + highlight.length);
    after = text.slice(highlightIndex + highlight.length);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col h-full"
      initial={
        prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
      }
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={prefersReducedMotion ? {} : { y: -6 }}
      transition={
        prefersReducedMotion
          ? {}
          : {
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.23, 1, 0.32, 1],
            }
      }
    >
      <div className="relative flex flex-col h-full rounded-3xl border border-border/40 bg-card/40 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:bg-card/70 group-hover:shadow-2xl group-hover:shadow-primary/[0.06]">
        {/* Mouse-following gradient glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: gradientBg }}
        />

        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3 + index * 0.15,
            ease: [0.23, 1, 0.32, 1],
          }}
        />

        <div className="relative flex flex-col h-full p-8 sm:p-10">
          {/* Large decorative quote */}
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.15,
                ease: "easeOut",
              }}
            >
              <Quote className="w-10 h-10 text-primary/20 fill-primary/10 group-hover:text-primary/30 group-hover:fill-primary/15 transition-colors duration-500" />
            </motion.div>
          </div>

          {/* Quote text -- the hero */}
          <blockquote className="flex-1 mb-8">
            <p className="font-serif italic text-xl sm:text-2xl lg:text-[1.65rem] text-foreground leading-[1.5] tracking-[-0.01em]">
              <span className="text-muted-foreground/60">&ldquo;</span>
              {highlightIndex !== -1 ? (
                <>
                  {before}
                  <span className="relative inline">
                    <span className="relative z-10 text-primary font-semibold not-italic">
                      {highlighted}
                    </span>
                    <motion.span
                      className="absolute -bottom-0.5 left-0 right-0 h-[6px] bg-primary/10 rounded-full -z-0"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + index * 0.15,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      style={{ originX: 0 }}
                    />
                  </span>
                  {after}
                </>
              ) : (
                text
              )}
              <span className="text-muted-foreground/60">&rdquo;</span>
            </p>
          </blockquote>

          {/* Separator */}
          <motion.div
            className="w-12 h-[1px] bg-gradient-to-r from-primary/40 to-transparent mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.15,
              ease: "easeOut",
            }}
            style={{ originX: 0 }}
          />

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full bg-primary/[0.08] border border-primary/20 flex items-center justify-center text-primary font-bold text-base group-hover:bg-primary/[0.12] group-hover:border-primary/30 transition-all duration-500">
              {testimonial.name.charAt(0)}
              {/* Subtle ring on hover */}
              <span className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/10 scale-110 transition-all duration-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground tracking-tight">
                {testimonial.name}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {testimonial.role[lang]}{" "}
                <span className="text-primary/60">
                  @{testimonial.company}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Main Section ── */
const Testimonials = () => {
  const { language } = useLang();

  return (
    <section
      id="testimonials"
      className="relative bg-background py-24 sm:py-32 overflow-hidden scroll-mt-24"
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(23,17,234,0.05),transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        {/* ── Header ── */}
        <BlurFade delay={0.1} inView>
          <div className="mb-14 md:mb-18">
            {/* Badge pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-1.5 mb-5 backdrop-blur-sm">
              <span className="w-4 h-[2px] rounded-full bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                {language === "fr" ? "Témoignages" : "Testimonials"}
              </span>
            </div>

            {/* Title */}
            <h2
              className="font-serif italic text-4xl sm:text-5xl md:text-6xl font-bold text-foreground"
              style={{ letterSpacing: "-0.015em" }}
            >
              {language === "fr" ? "Ils en " : "What they "}
              <span className="text-primary">
                {language === "fr" ? "parlent" : "say"}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              {language === "fr"
                ? "Des retours concrets de personnes avec qui j'ai collaboré."
                : "Real feedback from people I've worked with."}
            </p>
          </div>
        </BlurFade>

        {/* ── Two-column testimonial cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              testimonial={t}
              index={i}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
