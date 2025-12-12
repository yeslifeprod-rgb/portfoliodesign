"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface ShootingStarProps {
  delay: number;
  duration: number;
  startX: number;
  startY: number;
  angle: number;
}

const ShootingStar: React.FC<ShootingStarProps> = ({
  delay,
  duration,
  startX,
  startY,
  angle,
}) => {
  const endX = startX + Math.cos(angle) * 800;
  const endY = startY + Math.sin(angle) * 800;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${startX}px`,
        top: `${startY}px`,
      }}
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: endX - startX,
        y: endY - startY,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 8 + Math.random() * 12,
        ease: "easeOut",
      }}
    >
      {/* Traînée de l'étoile */}
      <div
        className="relative"
        style={{
          width: "100px",
          height: "2px",
          background: "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.9), transparent)",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(147, 197, 253, 0.6)",
          transform: `rotate(${(angle * 180) / Math.PI}deg)`,
          transformOrigin: "right center",
        }}
      >
        {/* Tête de l'étoile */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"
          style={{
            boxShadow: `
              0 0 10px rgba(255, 255, 255, 1),
              0 0 20px rgba(147, 197, 253, 0.8),
              0 0 30px rgba(147, 197, 253, 0.6)
            `,
          }}
        />
      </div>
    </motion.div>
  );
};

/**
 * Composant d'étoiles filantes
 * Étoiles qui traversent l'écran de manière aléatoire
 */
export const ShootingStars: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      delay: i * 4 + Math.random() * 3,
      duration: 1.5 + Math.random() * 1,
      startX: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
      startY: Math.random() * 300, // Apparaissent dans le tiers supérieur
      angle: (Math.PI / 6) + Math.random() * (Math.PI / 3), // Entre 30° et 90°
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[9998]"
      aria-hidden="true"
    >
      {stars.map((star) => (
        <ShootingStar
          key={star.id}
          delay={star.delay}
          duration={star.duration}
          startX={star.startX}
          startY={star.startY}
          angle={star.angle}
        />
      ))}
    </div>
  );
};
