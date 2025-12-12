"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface StarProps {
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
}

const Star: React.FC<StarProps> = ({ x, y, size, delay, duration }) => {
  const glowIntensity = 15 + Math.random() * 15; // Variation du glow

  return (
    <motion.div
      className="absolute select-none pointer-events-none"
      style={{
        left: x,
        top: y,
        fontSize: `${size}px`,
        filter: `drop-shadow(0 0 ${glowIntensity}px rgba(250, 204, 21, 0.8))`,
      }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0.9, 1, 0],
        scale: [0, 1.3, 1, 1.2, 0],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.span
        className="inline-block"
        style={{
          textShadow: `
            0 0 10px rgba(250, 204, 21, 1),
            0 0 20px rgba(250, 204, 21, 0.8),
            0 0 30px rgba(250, 204, 21, 0.6)
          `,
          color: "rgba(250, 204, 21, 0.9)",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.5,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.span>
    </motion.div>
  );
};

/**
 * Composant d'étoiles scintillantes amélioré
 * Effet magique et élégant pour la section Home
 */
export const StarryBackground: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: 14 + Math.random() * 14, // Entre 14px et 28px
      delay: Math.random() * 8,
      duration: 2.5 + Math.random() * 4, // Entre 2.5 et 6.5 secondes
    }));
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {stars.map((star) => (
        <Star
          key={star.id}
          x={star.x}
          y={star.y}
          size={star.size}
          delay={star.delay}
          duration={star.duration}
        />
      ))}
    </div>
  );
};
