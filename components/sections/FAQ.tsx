"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import { faqItems } from "@/lib/content/faq";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/ui/section";

export default function FAQ() {
  // Tout replié au départ : la section reste discrète et le visiteur
  // n'ouvre que l'objection qui le concerne.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Les questions utiles avant de commencer"
        description="Des réponses directes sur la façon de travailler, le périmètre et la première étape."
        framed
      />

      <div className="mt-7 space-y-2">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;

          return (
            <div key={item.question} className="rounded-lg border border-border/70 bg-card/50 px-4">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-body font-medium leading-snug text-foreground">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  >
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-start gap-2 pb-4 pr-10">
                      <Badge variant="accent" className="mt-0.5 shrink-0 rounded-full px-2 py-0 text-[10px]">
                        Réponse
                      </Badge>
                      <p className="max-w-2xl text-pretty text-small text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
