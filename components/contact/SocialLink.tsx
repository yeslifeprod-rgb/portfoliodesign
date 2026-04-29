"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function SocialLink({
  href,
  icon: Icon,
  label,
  index,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  index: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card/60 transition-all duration-300"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5 + index * 0.1,
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <Icon className="w-4 h-4 text-primary/80 group-hover:text-primary transition-colors" />
      <span className="font-medium">{label}</span>
      <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200" />
    </motion.a>
  );
}
