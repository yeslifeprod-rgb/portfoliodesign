"use client";

import dynamic from "next/dynamic";
import { useLang } from "@/context/LangContext";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Clock,
  Zap,
  Linkedin,
  Gitlab,
} from "lucide-react";

const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

/* ─── Stat badge ─── */
const StatBadge = ({
  icon: Icon,
  label,
  value,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  delay: number;
}) => (
  <BlurFade delay={delay} inView>
    <motion.div
      className="flex items-center gap-3 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md px-4 py-3 cursor-default"
      whileHover={{ y: -2, borderColor: "rgba(220, 38, 38, 0.3)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.div
        className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary"
        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <Icon className="w-4 h-4" />
      </motion.div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/70 font-medium">
          {label}
        </p>
        <p className="text-sm font-semibold text-foreground">{value}</p>
      </div>
    </motion.div>
  </BlurFade>
);

/* ─── Social link ─── */
const SocialLink = ({
  href,
  icon: Icon,
  label,
  index,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  index: number;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card/60 transition-all duration-300"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5 + index * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.97 }}
  >
    <Icon className="w-4 h-4 text-primary/80 group-hover:text-primary transition-colors" />
    <span className="font-medium">{label}</span>
    <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200" />
  </motion.a>
);

/* ─── Main Contact Section ─── */
const Contact = () => {
  const { language } = useLang();

  const t = {
    badge: language === "fr" ? "Collaborons" : "Let's collaborate",
    heading:
      language === "fr"
        ? "Transformons votre\nvision en realite."
        : "Let's turn your\nvision into reality.",
    subheading:
      language === "fr"
        ? "Que ce soit un nouveau produit, une refonte complete, ou un projet ambitieux, je suis pret a en discuter."
        : "Whether it's a new product, a complete redesign, or an ambitious project, I'm ready to discuss.",
    email: language === "fr" ? "Ecrire un email" : "Send an email",
    responseTime:
      language === "fr" ? "Temps de reponse" : "Response time",
    responseValue: language === "fr" ? "< 24h" : "< 24h",
    availability: language === "fr" ? "Disponibilite" : "Availability",
    availabilityValue:
      language === "fr" ? "Freelance & CDI" : "Freelance & Full-time",
    connectLabel: language === "fr" ? "Ailleurs sur le web" : "Elsewhere on the web",
    orLabel: language === "fr" ? "ou" : "or",
  };

  const socials = [
    {
      label: "GitLab",
      href: "https://gitlab.com/yeslife.prod",
      icon: Gitlab,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ilyes-g-46b0982b8/",
      icon: Linkedin,
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* ── Subtle dot pattern background ── */}
      <DotPattern width={28} height={28} cr={0.8} className="opacity-[0.03] dark:opacity-[0.05]" />

      {/* ── Top separator ── */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent z-[2]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* ── LEFT COLUMN: Copy + trust signals ── */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Badge */}
            <BlurFade inView>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {t.badge}
                </span>
              </div>
            </BlurFade>

            {/* Heading */}
            <BlurFade delay={0.1} inView>
              <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1]">
                {t.heading.split("\n").map((line, i) => (
                  <span key={i}>
                    {i === 1 && (
                      <span className="bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent">
                        {line}
                      </span>
                    )}
                    {i === 0 && line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h2>
            </BlurFade>

            {/* Subheading */}
            <BlurFade delay={0.15} inView>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                {t.subheading}
              </p>
            </BlurFade>


            {/* Divider */}
            <motion.div
              className="h-px w-full bg-gradient-to-r from-border/60 via-border/30 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
            />

            {/* Trust signals / stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <StatBadge
                icon={Clock}
                label={t.responseTime}
                value={t.responseValue}
                delay={0.25}
              />
              <StatBadge
                icon={Zap}
                label={t.availability}
                value={t.availabilityValue}
                delay={0.3}
              />
            </div>

            {/* Social links */}
            <BlurFade delay={0.35} inView>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70 font-medium mb-3">
                {t.connectLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map((s, i) => (
                  <SocialLink key={s.label} {...s} index={i} />
                ))}
              </div>
            </BlurFade>
          </div>

          {/* ── RIGHT COLUMN: Form ── */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.2} inView>
              <div className="relative">
                {/* Glow behind card */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-primary/3 blur-2xl pointer-events-none"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Form card */}
                <motion.div
                  className="relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl shadow-2xl shadow-black/5 dark:shadow-black/20 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1],
                    delay: 0.15,
                  }}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px">
                    <div className="h-full w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  </div>

                  {/* Card header */}
                  <div className="px-6 sm:px-8 pt-7 pb-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground tracking-tight">
                          {language === "fr"
                            ? "Envoyer un message"
                            : "Send a message"}
                        </h3>
                        <p className="text-xs text-muted-foreground/70 mt-0.5">
                          {language === "fr"
                            ? "Je vous repondrai rapidement."
                            : "I'll get back to you shortly."}
                        </p>
                      </div>

                      {/* Status indicator */}
                      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-medium text-emerald-500">
                          {language === "fr" ? "En ligne" : "Online"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Form body */}
                  <div className="px-6 sm:px-8 py-6">
                    <ContactForm />
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px">
                    <div className="h-full w-2/3 mx-auto bg-gradient-to-r from-transparent via-border/40 to-transparent" />
                  </div>
                </motion.div>

                {/* Helper text below card */}
                <motion.p
                  className="text-center text-[11px] text-muted-foreground/70 mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  {language === "fr"
                    ? "Vos donnees ne seront jamais partagees."
                    : "Your data will never be shared."}
                </motion.p>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
