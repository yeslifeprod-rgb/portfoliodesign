"use client";

import { motion } from "motion/react";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-8 mb-12">
      <h2 className="text-xs font-black uppercase tracking-[0.4em] text-black whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-[1px] bg-border" />
    </div>
  );
}

export function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
