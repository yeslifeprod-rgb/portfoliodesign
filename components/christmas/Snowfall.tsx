"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface SnowflakeProps {
  delay: number;
  duration: number;
  left: string;
  size: number;
  blur: number;
  swingAmplitude: number;
}

const Snowflake: React.FC<SnowflakeProps> = ({
  delay,
  duration,
  left,
  size,
  blur,
  swingAmplitude
}) => {
  const rotationSpeed = 360 / duration;

  return (
    <motion.div
      className="absolute select-none pointer-events-none"
      style={{
        left,
        top: "-30px",
        fontSize: `${size}px`,
        filter: `blur(${blur}px)`,
        textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
      }}
      initial={{ y: -30, opacity: 0, rotate: 0 }}
      animate={{
        y: ["0vh", "105vh"],
        opacity: [0, 0.8, 0.9, 0.7, 0],
        x: [
          0,
          swingAmplitude * Math.sin(0),
          swingAmplitude * Math.sin(Math.PI / 2),
          swingAmplitude * Math.sin(Math.PI),
          swingAmplitude * Math.sin(3 * Math.PI / 2),
          0,
        ],
        rotate: [0, rotationSpeed * duration],
        scale: [0.8, 1, 1.1, 1, 0.9],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="inline-block" style={{
        color: `rgba(255, 255, 255, ${0.4 + Math.random() * 0.4})`
      }}>
        ❄
      </span>
    </motion.div>
  );
};

/**
 * Composant de neige qui tombe amélioré
 * Effet spectaculaire mais élégant avec 50 flocons variés
 */
export const Snowfall: React.FC = () => {
  const snowflakes = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const size = 10 + Math.random() * 20; // Entre 10px et 30px
      return {
        id: i,
        delay: Math.random() * 15,
        duration: 10 + Math.random() * 15, // Entre 10 et 25 secondes
        left: `${Math.random() * 100}%`,
        size,
        blur: size > 20 ? 0.5 : 0, // Flocons plus gros légèrement floutés (effet de profondeur)
        swingAmplitude: 20 + Math.random() * 60, // Amplitude du balancement
      };
    });
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]"
      aria-hidden="true"
    >
      {snowflakes.map((flake) => (
        <Snowflake
          key={flake.id}
          delay={flake.delay}
          duration={flake.duration}
          left={flake.left}
          size={flake.size}
          blur={flake.blur}
          swingAmplitude={flake.swingAmplitude}
        />
      ))}
    </div>
  );
};
