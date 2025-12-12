"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Effet de givre élégant sur les bords
 * Design subtil et sophistiqué
 */
export const FrostEffect: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[9998]"
      aria-hidden="true"
    >
      {/* Givre en haut */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(219, 234, 254, 0.15) 0%,
              rgba(240, 249, 255, 0.08) 40%,
              transparent 100%
            )
          `,
          backdropFilter: "blur(1px)",
          maskImage: `
            linear-gradient(to bottom, black 0%, transparent 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")
          `,
          maskComposite: "intersect",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cristaux de glace en haut gauche */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`tl-${i}`}
            className="absolute"
            style={{
              left: `${i * 40}px`,
              top: `${i * 30}px`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                d="M15 3 L15 27 M3 15 L27 15 M8 8 L22 22 M22 8 L8 22"
                stroke="rgba(37, 99, 235, 0.3)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="15"
                cy="15"
                r="3"
                fill="none"
                stroke="rgba(96, 165, 250, 0.4)"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Cristaux de glace en haut droite */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`tr-${i}`}
            className="absolute"
            style={{
              right: `${i * 40}px`,
              top: `${i * 30}px`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 1.5 + 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                d="M15 3 L15 27 M3 15 L27 15 M8 8 L22 22 M22 8 L8 22"
                stroke="rgba(37, 99, 235, 0.3)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="15"
                cy="15"
                r="3"
                fill="none"
                stroke="rgba(96, 165, 250, 0.4)"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Vignette glacée sur les côtés */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 40%,
              rgba(219, 234, 254, 0.05) 80%,
              rgba(219, 234, 254, 0.1) 100%
            )
          `,
        }}
      />

      {/* Particules de givre flottantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${5 + (i % 3) * 10}%`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [0, 100, 200],
            x: [0, Math.random() * 50 - 25],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <circle
              cx="10"
              cy="10"
              r="2"
              fill="rgba(147, 197, 253, 0.6)"
              filter="blur(1px)"
            />
            <circle
              cx="10"
              cy="10"
              r="1"
              fill="rgba(255, 255, 255, 0.8)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
