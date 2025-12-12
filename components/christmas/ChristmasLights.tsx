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
        width: "16px",
        height: "16px",
      }}
      initial={{ opacity: 0.6, y: 0 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        scale: [1, 1.3, 1],
        y: [0, -2, 0],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Halo externe (glow large) */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
          transform: "scale(3)",
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [3, 3.5, 3],
        }}
        transition={{
          duration: 1.5,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lumière principale avec effet néon */}
      <div
        className="w-full h-full rounded-full relative z-10"
        style={{
          backgroundColor: color,
          boxShadow: `
            0 0 15px ${color},
            0 0 30px ${color}bb,
            0 0 45px ${color}88,
            0 0 60px ${color}44,
            inset 0 -2px 4px rgba(0, 0, 0, 0.3)
          `,
        }}
      >
        {/* Reflet lumineux */}
        <div
          className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/80"
          style={{
            boxShadow: "0 0 3px white",
          }}
        />
      </div>

      {/* Fil de connexion avec effet de profondeur */}
      {index > 0 && (
        <motion.div
          className="absolute top-1/2 right-full w-12 h-[2px] bg-gradient-to-r from-gray-600/30 to-gray-700/40"
          style={{
            transform: "translateY(-50%)",
            boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
          }}
          animate={{
            opacity: [0.6, 0.8, 0.6],
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

interface ChristmasLightsProps {
  count?: number;
  className?: string;
}

/**
 * Composant de guirlandes lumineuses de Noël
 * Petites LED colorées avec effet de scintillement
 */
export const ChristmasLights: React.FC<ChristmasLightsProps> = ({
  count = 12,
  className = "",
}) => {
  const lights = useMemo(() => {
    const colors = [
      "#EF4444", // rouge
      "#22C55E", // vert
      "#F59E0B", // or
      "#3B82F6", // bleu
      "#EC4899", // rose
      "#8B5CF6", // violet
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      delay: (i * 0.15) % 2,
    }));
  }, [count]);

  return (
    <div
      className={`flex items-center gap-12 ${className}`}
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
