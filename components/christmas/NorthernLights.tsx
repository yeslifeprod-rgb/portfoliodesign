"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Aurore boréale élégante et subtile
 * Design sophistiqué avec palette harmonieuse
 */
export const NorthernLights: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[1]"
      aria-hidden="true"
    >
      {/* Première vague - Bleu principal du site */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(37, 99, 235, 0.08) 0%, transparent 50%)",
          filter: "blur(40px)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.08, 1],
          x: [-30, 40, -30],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Deuxième vague - Bleu clair */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "radial-gradient(ellipse at 70% 30%, rgba(96, 165, 250, 0.06) 0%, transparent 55%)",
          filter: "blur(50px)",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.12, 1],
          x: [40, -50, 40],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Troisième vague - Blanc glacé */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(219, 234, 254, 0.05) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.15, 1],
          x: [-20, 30, -20],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />
    </div>
  );
};
