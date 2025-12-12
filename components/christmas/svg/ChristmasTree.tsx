"use client";

import React from "react";
import { motion } from "framer-motion";

interface ChristmasTreeProps {
  size?: number;
}

/**
 * Sapin de Noël SVG animé professionnel
 */
export const ChristmasTree: React.FC<ChristmasTreeProps> = ({ size = 100 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      {/* Tronc */}
      <rect
        x="85"
        y="190"
        width="30"
        height="50"
        fill="#8B4513"
        rx="4"
      />

      {/* Feuillage - Partie basse */}
      <motion.path
        d="M100 190 L40 190 L70 140 L50 140 L100 80 L150 140 L130 140 L160 190 Z"
        fill="#2D5016"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Feuillage - Partie moyenne */}
      <motion.path
        d="M100 140 L50 140 L80 90 L60 90 L100 30 L140 90 L120 90 L150 140 Z"
        fill="#3A6B1F"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 3, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Feuillage - Sommet */}
      <motion.path
        d="M100 90 L70 90 L100 40 L130 90 Z"
        fill="#4A8229"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Étoile du sommet */}
      <motion.g
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "100px 25px" }}
      >
        <path
          d="M100 10 L105 20 L116 22 L108 30 L110 41 L100 36 L90 41 L92 30 L84 22 L95 20 Z"
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="2"
        />
        {/* Glow de l'étoile */}
        <circle
          cx="100"
          cy="25"
          r="12"
          fill="#FFD700"
          opacity="0.3"
          filter="blur(4px)"
        />
      </motion.g>

      {/* Boules de Noël */}
      {[
        { cx: 80, cy: 100, color: "#FF0000" },
        { cx: 120, cy: 110, color: "#0066FF" },
        { cx: 100, cy: 130, color: "#FFD700" },
        { cx: 70, cy: 160, color: "#FF69B4" },
        { cx: 130, cy: 165, color: "#00FF88" },
      ].map((ball, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={ball.cx}
            cy={ball.cy}
            r="8"
            fill={ball.color}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Reflet sur la boule */}
          <circle
            cx={ball.cx - 2}
            cy={ball.cy - 2}
            r="3"
            fill="white"
            opacity="0.6"
          />
          {/* Glow */}
          <motion.circle
            cx={ball.cx}
            cy={ball.cy}
            r="12"
            fill={ball.color}
            opacity="0.2"
            filter="blur(4px)"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.g>
      ))}
    </motion.svg>
  );
};
