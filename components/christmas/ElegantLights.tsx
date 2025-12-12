"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface LightProps {
  color: string;
  delay: number;
  index: number;
}

const Light: React.FC<LightProps> = ({ color, delay, index }) => {
  return (
    <motion.div
      className="relative"
      style={{
        width: "20px",
        height: "20px",
      }}
      initial={{ opacity: 0.7 }}
      animate={{
        opacity: [0.7, 1, 0.7],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Glow large et doux */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${color}60 0%, ${color}20 40%, transparent 70%)`,
          transform: "scale(4)",
          filter: "blur(12px)",
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [4, 4.5, 4],
        }}
        transition={{
          duration: 2,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lumière principale glassmorphism */}
      <div
        className="w-full h-full rounded-full relative z-10 backdrop-blur-sm"
        style={{
          background: `linear-gradient(135deg, ${color}f0 0%, ${color}c0 100%)`,
          boxShadow: `
            0 0 20px ${color}dd,
            0 0 40px ${color}88,
            0 0 60px ${color}44,
            inset 0 -3px 6px rgba(0, 0, 0, 0.15),
            inset 0 3px 6px rgba(255, 255, 255, 0.4)
          `,
          border: `1.5px solid ${color}44`,
        }}
      >
        {/* Reflet lumineux supérieur */}
        <div
          className="absolute top-1 left-1 w-2 h-2 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9) 0%, transparent 70%)",
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)",
          }}
        />

        {/* Petit reflet secondaire */}
        <div
          className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
          style={{
            background: "rgba(255, 255, 255, 0.5)",
            filter: "blur(0.5px)",
          }}
        />
      </div>

      {/* Fil de connexion élégant */}
      {index > 0 && (
        <motion.div
          className="absolute top-1/2 right-full h-[1.5px]"
          style={{
            width: "50px",
            transform: "translateY(-50%)",
            background: "linear-gradient(to right, rgba(148, 163, 184, 0.15), rgba(148, 163, 184, 0.4), rgba(148, 163, 184, 0.15))",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
};

interface ElegantLightsProps {
  count?: number;
  className?: string;
}

/**
 * Guirlandes lumineuses élégantes
 * Palette harmonieuse et design sophistiqué
 */
export const ElegantLights: React.FC<ElegantLightsProps> = ({
  count = 12,
  className = "",
}) => {
  const lights = useMemo(() => {
    // Palette cohérente avec le design : bleus, blancs, touches dorées
    const colors = [
      "#2563EB", // Bleu principal du site
      "#60A5FA", // Bleu clair
      "#DBEAFE", // Bleu pâle
      "#F0F9FF", // Bleu glacé
      "#FFF7ED", // Blanc chaud
      "#FDE68A", // Or doux
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      delay: (i * 0.2) % 2,
    }));
  }, [count]);

  return (
    <div
      className={`flex items-center gap-[50px] ${className}`}
      aria-hidden="true"
    >
      {lights.map((light, index) => (
        <Light
          key={light.id}
          color={light.color}
          delay={light.delay}
          index={index}
        />
      ))}
    </div>
  );
};
