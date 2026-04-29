"use client";

import dynamic from "next/dynamic";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";

const ContactForm = dynamic(() => import("../ContactForm"), { ssr: false });

export function ContactFormPanel({ language }: { language: string }) {
  return (
    <div className="lg:col-span-7">
      <BlurFade delay={0.2} inView>
        <div className="relative">
          <motion.div
            className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-primary/3 blur-2xl pointer-events-none"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

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
            <div className="absolute top-0 left-0 right-0 h-px">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>

            <div className="px-6 sm:px-8 pt-7 pb-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground tracking-tight">
                    {language === "fr" ? "Envoyer un message" : "Send a message"}
                  </h3>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">
                    {language === "fr"
                      ? "Je vous répondrai rapidement."
                      : "I'll get back to you shortly."}
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-medium text-emerald-500">
                    {language === "fr" ? "En ligne" : "Online"}
                  </span>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-6">
              <ContactForm />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px">
              <div className="h-full w-2/3 mx-auto bg-gradient-to-r from-transparent via-border/40 to-transparent" />
            </div>
          </motion.div>

          <motion.p
            className="text-center text-[11px] text-muted-foreground/70 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {language === "fr"
              ? "Vos données ne seront jamais partagées."
              : "Your data will never be shared."}
          </motion.p>
        </div>
      </BlurFade>
    </div>
  );
}
