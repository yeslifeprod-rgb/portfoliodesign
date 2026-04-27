"use client";

import { motion, AnimatePresence } from "framer-motion";
import { stackIcons } from "@/lib/stackIcons";

interface TechBadgesProps {
  stack: string[];
}

export const TechBadges: React.FC<TechBadgesProps> = ({ stack }) => {
  const visible = stack.slice(0, 6);
  const remaining = Math.max(0, stack.length - 6);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="flex flex-wrap gap-2 pt-3 pb-1">
        {visible.map((tech, i) => {
          const info = stackIcons[tech];
          const Icon = info?.Icon;
          return (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/60 border border-border/50 text-[11px] font-medium text-muted-foreground"
            >
              {Icon && (
                <Icon
                  className="w-3 h-3"
                  style={{ color: info.color === "currentColor" ? undefined : info.color }}
                />
              )}
              {tech}
            </motion.span>
          );
        })}
        {remaining > 0 && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: visible.length * 0.03 }}
            className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-semibold text-primary"
          >
            +{remaining}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};

export { AnimatePresence };
