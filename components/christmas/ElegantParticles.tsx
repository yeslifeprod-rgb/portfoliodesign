"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

const Particle: React.FC<ParticleProps> = ({ x, y, size, delay, duration, color }) => {
  return (
    <motion.div
      className="absolute select-none pointer-events-none"
      style={{
        left: x,
        top: y,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 1, 0.6, 0],
        scale: [0, 1, 1.2, 1, 0],
        y: [0, -40, -100, -180],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    >
      {/* Glow externe */}
      <div
        className="absolute rounded-full"
        style={{
          width: `${size * 3}px`,
          height: `${size * 3}px`,
          left: `${-size}px`,
          top: `${-size}px`,
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
          filter: "blur(8px)",
        }}
      />

      {/* Particule glassmorphism */}
      <div
        className="rounded-full backdrop-blur-sm"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `linear-gradient(135deg, ${color}dd 0%, ${color}aa 100%)`,
          boxShadow: `
            0 0 ${size * 2}px ${color}bb,
            inset 0 0 ${size / 2}px rgba(255, 255, 255, 0.4),
            0 ${size / 4}px ${size / 2}px rgba(0, 0, 0, 0.1)
          `,
          border: `1px solid ${color}33`,
        }}
      >
        {/* Reflet */}
        <div
          className="rounded-full"
          style={{
            width: `${size / 2}px`,
            height: `${size / 2}px`,
            marginLeft: `${size / 4}px`,
            marginTop: `${size / 4}px`,
            background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 60%)",
          }}
        />
      </div>
    </motion.div>
  );
};

/**
 * Particules lumineuses élégantes avec glassmorphism
 * Design sophistiqué et moderne
 */
export const ElegantParticles: React.FC = () => {
  const particles = useMemo(() => {
    const colors = [
      "#93C5FD", // Bleu clair
      "#DBEAFE", // Bleu très pâle
      "#E0F2FE", // Cyan pâle
      "#F0F9FF", // Bleu glacé
      "#FFF7ED", // Blanc chaud
    ];

    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${70 + Math.random() * 30}%`,
      size: 8 + Math.random() * 12,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
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
          color={particle.color}
        />
      ))}
    </div>
  );
};
