"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { BlurFade } from "@/components/ui/blur-fade";
import { BenhoussHandwriting } from "@/components/BenhoussHandwriting";
import { Particles } from "@/components/ui/particles";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { HyperText } from "@/components/ui/hyper-text";

const Hero = () => {
  const { language } = useLang();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      <div className="relative min-h-screen overflow-hidden bg-background">
        {/* Gradient orb behind avatar */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-red-500/15 blur-[120px] animate-pulse-slow" />
        </div>

        {/* Particles */}
        {!prefersReducedMotion && (
          <Particles
            className="absolute inset-0"
            quantity={60}
            color="#dc2626"
            size={0.6}
            staticity={40}
            ease={50}
          />
        )}

        <section
          className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-5 px-6"
          role="banner"
        >
          {/* Avatar with red glow + float */}
          <BlurFade delay={0.1} inView>
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
              transition={prefersReducedMotion ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/assets/avatar.png"
                alt="Benhouss — Développeur Full Stack Lille"
                width={280}
                height={280}
                className="w-44 h-44 sm:w-56 sm:h-56 object-contain drop-shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                priority
              />
            </motion.div>
          </BlurFade>

          {/* Benhouss — handwriting stroke animation */}
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

          {/* Tagline — social proof / key metrics */}
          <BlurFade delay={0.65} inView>
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
          <BlurFade delay={0.55} inView>
            <p className="text-sm sm:text-base text-muted-foreground/60 text-center max-w-sm">
              {language === "fr"
                ? "Je transforme des idées en applications déployées et utilisées."
                : "I turn ideas into deployed, production-ready applications."}
            </p>
          </BlurFade>

          {/* Available badge + Location — grouped in a single elegant line */}
          <BlurFade delay={0.45} inView>
            <div className="flex items-center gap-3 text-xs text-muted-foreground/70 tracking-wide uppercase">
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-medium text-emerald-400 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <AnimatedShinyText className="!text-emerald-400">
                  {language === "fr" ? "Disponible" : "Available"}
                </AnimatedShinyText>
              </div>
              <span className="w-px h-3.5 bg-muted-foreground/20" />
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-muted-foreground/70" />
                Lille, France
              </span>
            </div>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={0.75} inView>
            <div className="flex items-center gap-3 mt-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full gap-2 group bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/#projets">
                    {language === "fr"
                      ? "Découvrir mes projets"
                      : "Explore my work"}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <Link href="/#contact">
                    {language === "fr" ? "Me contacter" : "Get in touch"}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </BlurFade>

          {/* Scroll indicator — more subtle */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.div
              className="w-5 h-8 rounded-full border border-muted-foreground/15 flex justify-center pt-1.5"
            >
              <motion.div
                className="w-1 h-1.5 rounded-full bg-muted-foreground/40"
                animate={{ y: [0, 8, 0], opacity: [0.6, 0.15, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

        </section>
      </div>
    </div>
  );
};

export default Hero;
