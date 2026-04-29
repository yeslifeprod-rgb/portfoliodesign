"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";
import { StatBadge } from "./StatBadge";
import { SocialLink } from "./SocialLink";
import type { ContactCopy, SocialItem } from "./types";

export function ContactIntro({
  t,
  socials,
}: {
  t: ContactCopy;
  socials: SocialItem[];
}) {
  return (
    <div className="lg:col-span-5 flex flex-col gap-8">
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

      <BlurFade delay={0.1} inView>
        <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1]">
          {t.heading.split("\n").map((line, i) => (
            <span key={i}>
              {i === 1 && (
                <span
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(148deg, #0b05e7 0%, #2563eb 38%, #67e8f9 72%, #ffffff 100%)",
                  }}
                >
                  {line}
                </span>
              )}
              {i === 0 && line}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>
      </BlurFade>

      <BlurFade delay={0.15} inView>
        <p className="text-base text-muted-foreground leading-relaxed max-w-md">
          {t.subheading}
        </p>
      </BlurFade>

      <motion.div
        className="h-px w-full bg-gradient-to-r from-border/60 via-border/30 to-transparent"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: [0.23, 1, 0.32, 1],
        }}
      />

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
  );
}
