"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";

export function StatBadge({
  icon: Icon,
  label,
  value,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <BlurFade delay={delay} inView>
      <motion.div
        className="flex items-center gap-3 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md px-4 py-3 cursor-default"
        whileHover={{ y: -2, borderColor: "rgba(71, 215, 255, 0.4)" }}
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
}
