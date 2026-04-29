"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { BlurFade } from "@/components/ui/blur-fade";
import { BenhoussHandwriting } from "@/components/BenhoussHandwriting";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { HyperText } from "@/components/ui/hyper-text";

const Hero = () => {
  const { language } = useLang();
  const prefersReducedMotion = useReducedMotion();
  const heroPrimaryGradient = "linear-gradient(148deg, #0b05e7 0%, #1d4ed8 40%, #4bdfff 100%)";
  const heroPrimaryShadow = "0 1px 2px rgba(11, 5, 231, 0.12)";
  const heroPrimaryHoverShadow = "0 6px 32px rgba(75, 223, 255, 0.4)";

  return (
    <div className="relative">
      {/* SEO — h1 indexable, visuellement masqué car BenhoussHandwriting le remplace */}
      <h1 className="sr-only">
        Benhouss — Développeur Full Stack Web &amp; Mobile, Lille
      </h1>

      <div className="group/hero relative min-h-screen overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              background:
                "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              background:
                "linear-gradient(135deg, #040814 0%, #08111f 38%, #0b1324 68%, #030712 100%)",
            }}
          />
          <StripedPattern
            aria-hidden="true"
            width={16}
            height={16}
            className="absolute inset-0 h-full w-full text-[color:rgba(11,5,231,0.06)] opacity-100 [mask-image:radial-gradient(560px_circle_at_center,white,transparent)] sm:text-[color:rgba(11,5,231,0.08)] dark:text-white/[0.12]"
          />
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 54%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-100"
            style={{
              background: `
                radial-gradient(circle at 16% 18%, rgba(255,255,255,0) 0%, transparent 28%),
                radial-gradient(circle at 80% 16%, rgba(255,255,255,0) 0%, transparent 22%),
                radial-gradient(circle at 52% 70%, rgba(255,255,255,0) 0%, transparent 38%)
              `,
            }}
          />
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0) 0%, transparent 34%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-100"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in srgb, white 0%, transparent) 0%, transparent 18%, transparent 74%, color-mix(in srgb, white 0%, transparent) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-100 mix-blend-soft-light dark:mix-blend-screen"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 48%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.14)_100%)]" />
        </div>

        <section
          className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-5 px-6"
          role="banner"
        >
          {/* Avatar — float + glow gradient en un seul motion.div pour éviter double repaint GPU */}
          <BlurFade delay={0.1} inView>
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/assets/avatar.png"
                alt="Benhouss — Développeur Full Stack Lille"
                width={280}
                height={280}
                className="w-44 h-44 sm:w-56 sm:h-56 object-contain"
                priority
              />
            </motion.div>
          </BlurFade>

          {/* Benhouss — handwriting SVG (visuel uniquement, h1 sr-only assure le SEO) */}
          <BenhoussHandwriting
            size={80}
            duration={1.2}
            strokeWidth={2.5}
            strokeColor="currentColor"
            loop
            className="text-foreground"
          />

          {/* Subtitle — word-by-word stagger */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 max-w-md">
            {(language === "fr"
              ? ["Développeur", "Full Stack", "d'applications web et mobiles"]
              : ["Full Stack", "Web", "Developer"]
            ).map((word, i) => (
              <BlurFade key={word + i} delay={0.25 + i * 0.07} inView>
                <span
                  className={`text-base sm:text-lg leading-relaxed ${
                    word === "Full Stack"
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                >
                  {word}
                </span>
              </BlurFade>
            ))}
          </div>

          {/* Tagline */}
          <BlurFade delay={0.55} inView>
            <HyperText
              as="p"
              className="text-xs sm:text-sm text-muted-foreground/80 tracking-wide text-center"
              startOnView
              duration={1200}
              animateOnHover={false}
            >
              {language === "fr"
                ? "Next.js · TypeScript · Node.js"
                : "Next.js · TypeScript · Node.js"}
            </HyperText>
          </BlurFade>

          {/* Value proposition */}
          <BlurFade delay={0.65} inView>
            <p className="text-sm sm:text-base text-muted-foreground/60 text-center max-w-sm">
              {language === "fr"
                ? "Je transforme des idées en applications déployées et utilisées."
                : "I turn ideas into deployed, production-ready applications."}
            </p>
          </BlurFade>

          {/* Disponible + Localisation */}
          <BlurFade delay={0.45} inView>
            <div className="flex items-center gap-3 text-xs text-muted-foreground/70 tracking-wide uppercase">
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-medium text-emerald-400 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <AnimatedShinyText className="!text-emerald-400">
                  {language === "fr"
                    ? "Disponible maintenant"
                    : "Available now"}
                </AnimatedShinyText>
              </div>
              <span className="w-px h-3.5 bg-muted-foreground/20" />
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-muted-foreground/70" />
                Lille · Remote
              </span>
            </div>
          </BlurFade>

          {/* CTAs — focus-visible pour l'accessibilité clavier */}
          <BlurFade delay={0.75} inView>
            <div className="flex items-center gap-3 mt-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/#projets"
                  className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4bdfff] focus-visible:ring-offset-2"
                  style={{
                    background: heroPrimaryGradient,
                    boxShadow: heroPrimaryShadow,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      heroPrimaryHoverShadow)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      heroPrimaryShadow)
                  }
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <span className="relative z-10">
                    {language === "fr"
                      ? "Découvrir mes projets"
                      : "Explore my work"}
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  style={{
                    border: "1px solid color-mix(in srgb, var(--foreground) 12%, transparent)",
                    background: "transparent",
                    color: "var(--primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "color-mix(in srgb, var(--primary) 22%, transparent)";
                    e.currentTarget.style.background = "color-mix(in srgb, var(--primary) 4%, transparent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "color-mix(in srgb, var(--foreground) 12%, transparent)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span>
                    {language === "fr" ? "Me contacter" : "Get in touch"}
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </section>
      </div>
    </div>
  );
};

export default Hero;
