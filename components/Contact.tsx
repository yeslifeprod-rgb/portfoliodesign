"use client";

import { useLang } from "@/context/LangContext";
import { DotPattern } from "@/components/ui/dot-pattern";
import { motion } from "framer-motion";
import { Linkedin, Gitlab } from "lucide-react";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { ContactFormPanel } from "@/components/contact/ContactFormPanel";
import type { ContactCopy, SocialItem } from "@/components/contact/types";

/* ─── Main Contact Section ─── */
const Contact = () => {
  const { language } = useLang();

  const t = {
    badge: language === "fr" ? "Collaborons" : "Let's collaborate",
    heading:
      language === "fr"
        ? "Transformons votre\nvision en réalité."
        : "Let's turn your\nvision into reality.",
    subheading:
      language === "fr"
        ? "Que ce soit un nouveau produit, une refonte complète, ou un projet ambitieux, je suis prêt à en discuter."
        : "Whether it's a new product, a complete redesign, or an ambitious project, I'm ready to discuss.",
    email: language === "fr" ? "Écrire un email" : "Send an email",
    responseTime: language === "fr" ? "Temps de réponse" : "Response time",
    responseValue: language === "fr" ? "< 24h" : "< 24h",
    availability: language === "fr" ? "Disponibilité" : "Availability",
    availabilityValue:
      language === "fr" ? "Freelance & CDI" : "Freelance & Full-time",
    connectLabel:
      language === "fr" ? "Ailleurs sur le web" : "Elsewhere on the web",
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
