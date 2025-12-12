"use client";

import React from "react";
import { motion } from "framer-motion";

interface GiftBoxProps {
  size?: number;
}

/**
 * Cadeau de Noël SVG animé professionnel
 */
export const GiftBox: React.FC<GiftBoxProps> = ({ size = 100 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0, y: -50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
    >
      {/* Ombre */}
      <ellipse
        cx="100"
        cy="185"
        rx="60"
        ry="10"
        fill="black"
        opacity="0.2"
      />

      {/* Boîte principale */}
      <motion.rect
        x="40"
        y="80"
        width="120"
        height="100"
        fill="#E63946"
        rx="8"
        animate={{
          y: [80, 75, 80],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Reflets sur la boîte */}
      <rect
        x="45"
        y="85"
        width="30"
        height="90"
        fill="white"
        opacity="0.1"
        rx="4"
      />

      {/* Ruban vertical */}
      <motion.rect
        x="88"
        y="80"
        width="24"
        height="100"
        fill="#FFD700"
        animate={{
          y: [80, 75, 80],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Couvercle */}
      <motion.rect
        x="35"
        y="60"
        width="130"
        height="25"
        fill="#DC143C"
        rx="6"
        animate={{
          y: [60, 55, 60],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Ruban horizontal sur le couvercle */}
      <motion.rect
        x="35"
        y="68"
        width="130"
        height="10"
        fill="#FFD700"
        rx="2"
        animate={{
          y: [68, 63, 68],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Nœud */}
      <motion.g
        animate={{
          y: [0, -5, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "100px 50px" }}
      >
        {/* Boucle gauche */}
        <path
          d="M80 50 Q70 35 85 25 Q95 20 95 35 Z"
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="2"
        />

        {/* Boucle droite */}
        <path
          d="M120 50 Q130 35 115 25 Q105 20 105 35 Z"
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="2"
        />

        {/* Centre du nœud */}
        <circle
          cx="100"
          cy="50"
          r="12"
          fill="#FFA500"
          stroke="#FF8C00"
          strokeWidth="2"
        />

        {/* Reflet sur le nœud */}
        <circle
          cx="95"
          cy="45"
          r="5"
          fill="white"
          opacity="0.6"
        />

        {/* Rubans qui pendent */}
        <motion.path
          d="M95 62 L90 85 L88 88 L92 85 Z"
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="1"
          animate={{
            d: [
              "M95 62 L90 85 L88 88 L92 85 Z",
              "M95 62 L92 85 L90 88 L94 85 Z",
              "M95 62 L90 85 L88 88 L92 85 Z",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M105 62 L110 85 L112 88 L108 85 Z"
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="1"
          animate={{
            d: [
              "M105 62 L110 85 L112 88 L108 85 Z",
              "M105 62 L108 85 L110 88 L106 85 Z",
              "M105 62 L110 85 L112 88 L108 85 Z",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.g>

      {/* Particules scintillantes autour du cadeau */}
      {[...Array(6)].map((_, i) => (
        <motion.circle
          key={i}
          cx={100 + Math.cos((i * Math.PI) / 3) * 70}
          cy={120 + Math.sin((i * Math.PI) / 3) * 70}
          r="3"
          fill="#FFD700"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.svg>
  );
};
