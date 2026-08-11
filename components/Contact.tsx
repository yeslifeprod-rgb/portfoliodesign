"use client";

import { useLang } from "@/context/LangContext";
import { DotPattern } from "@/components/ui/dot-pattern";
import { motion } from "framer-motion";
import { Linkedin, Gitlab, Github } from "lucide-react";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { ContactFormPanel } from "@/components/contact/ContactFormPanel";
import type { ContactCopy, SocialItem } from "@/components/contact/types";

/* ─── Main Contact Section ─── */
const Contact = () => {
  const { language } = useLang();

  const t = {
    badge: language === "fr" ? "Parlons du problème" : "Let's discuss the issue",
    heading:
      language === "fr"
        ? "Vous avez un bug backend\nou un déploiement bloqué ?"
        : "Do you have a backend bug\nor a blocked deployment?",
    subheading:
      language === "fr"
        ? "Envoyez-moi le message d’erreur, la stack technique et les étapes pour reproduire le problème. Je pourrai vous indiquer rapidement comment je l’aborderais."
        : "Send me the error message, technical stack and reproduction steps. I can quickly explain how I would approach it.",
    email: language === "fr" ? "Écrire un email" : "Send an email",
    responseTime: language === "fr" ? "Échange initial" : "First exchange",
    responseValue: language === "fr" ? "Contexte clair" : "Clear context",
    availability: language === "fr" ? "Disponibilité" : "Availability",
    availabilityValue:
      language === "fr" ? "Missions courtes" : "Short missions",
    connectLabel:
      language === "fr" ? "Ailleurs sur le web" : "Elsewhere on the web",
    orLabel: language === "fr" ? "ou" : "or",
  };

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/yeslifeprod-rgb",
      icon: Github,
      iconClassName: "text-[#181717] dark:text-white",
    },
    {
      label: "GitLab",
      href: "https://gitlab.com/yeslife.prod",
      icon: Gitlab,
      color: "#FC6D26",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ilyes-g-46b0982b8/",
      icon: Linkedin,
      color: "#0A66C2",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* ── Subtle dot pattern background ── */}
      <DotPattern
        width={28}
        height={28}
        cr={0.8}
        className="opacity-[0.03] dark:opacity-[0.05]"
      />

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
          <ContactIntro t={t} socials={socials} />
          <ContactFormPanel language={language} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
