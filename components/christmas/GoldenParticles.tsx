"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
}

const Particle: React.FC<ParticleProps> = ({ x, y, size, delay, duration }) => {
  const drift = (Math.random() - 0.5) * 100; // Dérive horizontale

  return (
    <motion.div
      className="absolute select-none pointer-events-none"
      style={{
        left: x,
        top: y,
      }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 0.9, 1, 0.8, 0],
        scale: [0, 1.2, 1, 0.8, 0],
        y: [0, -50, -120, -200],
        x: [0, drift * 0.3, drift * 0.6, drift],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    >
      {/* Halo de lumière */}
      <motion.div
        className="absolute inset-0"
        style={{
          width: `${size * 3}px`,
          height: `${size * 3}px`,
          left: `${-size}px`,
          top: `${-size}px`,
          background: "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 1,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Particule principale */}
      <div
        className="rounded-full bg-gradient-to-br from-yellow-100 via-amber-300 to-yellow-500"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: `
            0 0 ${size}px rgba(251, 191, 36, 0.8),
            0 0 ${size * 2}px rgba(251, 191, 36, 0.6),
            0 0 ${size * 3}px rgba(251, 191, 36, 0.4),
            inset 0 0 ${size / 2}px rgba(255, 255, 255, 0.6)
          `,
        }}
      />
    </motion.div>
  );
};

/**
 * Composant de particules dorées qui montent
 * Effet spectaculaire et festif pour la section Stack
 */
export const GoldenParticles: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${60 + Math.random() * 40}%`, // Apparaissent en bas
      size: 6 + Math.random() * 10, // Entre 6px et 16px
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 3, // Entre 4 et 7 secondes
    }));
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          size={particle.size}
          delay={particle.delay}
          duration={particle.duration}
        />
      ))}
    </div>
  );
};
