"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, Mail } from "lucide-react";
import { SiGithub, SiGitlab } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

import ContactForm from "@/components/sections/ContactForm";
import { Badge } from "@/components/ui/badge";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Section } from "@/components/ui/section";
import { useBooking } from "@/lib/hooks/useBooking";
import { BUTTON_PRIMARY, BUTTON_SECONDARY } from "@/lib/buttonStyles";

/* Couleurs de marque officielles : elles n'appartiennent pas au thème et
   ne doivent donc pas suivre les tokens. Le logo GitHub est noir et bascule
   en blanc sur fond sombre, comme le prévoit sa charte. */
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/yeslifeprod-rgb",
    icon: SiGithub,
    color: "text-[#181717] dark:text-white",
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/yeslife.prod",
    icon: SiGitlab,
    color: "text-[#FC6D26]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ilyes-g-46b0982b8/",
    icon: FaLinkedin,
    color: "text-[#0A66C2]",
  },
];

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { openBooking, isBookingEnabled } = useBooking();

  return (
    <Section id="contact" className="pb-4">
      <div className="relative">
        {/* Label à cheval sur la bordure du cadre. */}
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
          <Badge
            variant="accent"
            className="min-w-32 justify-center rounded-full px-5 py-1.5 text-small"
          >
            Contact
          </Badge>
        </div>

        <div className="relative isolate overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/2 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          >
            <FlickeringGrid
              squareSize={3}
              gridGap={5}
              flickerChance={0.15}
              color="#64748b"
              maxOpacity={0.6}
            />
          </div>

          <h2 className="text-h2 text-balance text-card-foreground">
            Décrivez-moi ce qui bloque
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-pretty text-small text-muted-foreground sm:text-body">
            Le contexte, l&apos;objectif et la stack existante suffisent pour
            démarrer. Je vous réponds sous 24&nbsp;h avec une première étape
            concrète — ou je vous dis franchement si ce n&apos;est pas pour moi.
          </p>

          <div className="mx-auto mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            {isBookingEnabled && (
              <button
                type="button"
                onClick={openBooking}
                className={`${BUTTON_PRIMARY} flex-1`}
              >
                <CalendarDays className="h-4 w-4" />
                Rendez-vous
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            )}

            <button
              type="button"
              aria-expanded={isFormOpen}
              aria-controls="contact-form"
              onClick={() => setIsFormOpen((open) => !open)}
              className={`${BUTTON_SECONDARY} flex-1`}
            >
              <Mail className="h-4 w-4" />
              {isFormOpen ? "Masquer" : "Écrire un message"}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isFormOpen && (
              <motion.div
                id="contact-form"
                role="region"
                aria-label="Formulaire de contact"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden text-left"
              >
                <div className="mx-auto mt-6 max-w-md border-t border-border pt-6">
                  <ContactForm />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* La carte tient lieu de pied de page. Les réseaux y figurent
              car le dock qui les porte est masqué sur mobile. */}
          <footer className="mt-8 flex flex-col items-center justify-between gap-4 pt-1 sm:flex-row">
            <p className="text-caption text-muted-foreground">
              © {new Date().getFullYear()} Benhouss · Lille &amp; remote
            </p>

            <nav aria-label="Réseaux sociaux">
              <ul className="flex items-center gap-2">
                {socials.map(({ label, href, icon: Icon, color }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary/40"
                    >
                      <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </footer>
        </div>
      </div>
    </Section>
  );
}
