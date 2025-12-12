"use client";

import React from "react";
import { motion } from "framer-motion";

interface SnowmanProps {
  size?: number;
}

/**
 * Bonhomme de neige SVG animé professionnel
 */
export const Snowman: React.FC<SnowmanProps> = ({ size = 100 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      {/* Ombre */}
      <ellipse
        cx="100"
        cy="235"
        rx="70"
        ry="12"
        fill="black"
        opacity="0.15"
      />

      {/* Boule du bas */}
      <motion.circle
        cx="100"
        cy="190"
        r="45"
        fill="#FFFFFF"
        stroke="#E8F4F8"
        strokeWidth="3"
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Boule du milieu */}
      <motion.circle
        cx="100"
        cy="130"
        r="35"
        fill="#FFFFFF"
        stroke="#E8F4F8"
        strokeWidth="3"
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 3,
          delay: 0.1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tête */}
      <motion.circle
        cx="100"
        cy="80"
        r="28"
        fill="#FFFFFF"
        stroke="#E8F4F8"
        strokeWidth="3"
        animate={{
          y: [0, -3, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 3,
          delay: 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "100px 80px" }}
      />

      {/* Chapeau */}
      <motion.g
        animate={{
          y: [0, -3, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 3,
          delay: 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "100px 50px" }}
      >
        {/* Bord du chapeau */}
        <ellipse
          cx="100"
          cy="55"
          rx="35"
          ry="8"
          fill="#1A1A1A"
        />
        {/* Haut du chapeau */}
        <rect
          x="78"
          y="25"
          width="44"
          height="30"
          fill="#1A1A1A"
          rx="4"
        />
        {/* Ruban du chapeau */}
        <rect
          x="78"
          y="48"
          width="44"
          height="7"
          fill="#DC143C"
          rx="2"
        />
      </motion.g>

      {/* Yeux */}
      <motion.circle
        cx="90"
        cy="75"
        r="4"
        fill="#1A1A1A"
        animate={{
          scale: [1, 0.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
      <motion.circle
        cx="110"
        cy="75"
        r="4"
        fill="#1A1A1A"
        animate={{
          scale: [1, 0.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />

      {/* Nez carotte */}
      <motion.path
        d="M100 82 L125 85 L100 88 Z"
        fill="#FF6B35"
        animate={{
          x: [0, 2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sourire */}
      <path
        d="M85 92 Q100 100 115 92"
        stroke="#1A1A1A"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Boutons */}
      {[130, 145, 160].map((cy, i) => (
        <motion.circle
          key={i}
          cx="100"
          cy={cy}
          r="5"
          fill="#1A1A1A"
          animate={{
            y: [0, -3, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            delay: 0.1 + i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bras gauche (branche) */}
      <motion.g
        animate={{
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "65px 130px" }}
      >
        <path
          d="M65 130 L30 110"
          stroke="#8B4513"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M45 120 L35 115"
          stroke="#8B4513"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M40 115 L30 105"
          stroke="#8B4513"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Bras droit (branche) */}
      <motion.g
        animate={{
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "135px 130px" }}
      >
        <path
          d="M135 130 L170 110"
          stroke="#8B4513"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M155 120 L165 115"
          stroke="#8B4513"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M160 115 L170 105"
          stroke="#8B4513"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Flocons autour */}
      {[...Array(5)].map((_, i) => (
        <motion.text
          key={i}
          x={60 + i * 25}
          y={30 + (i % 2) * 20}
          fontSize="16"
          fill="#87CEEB"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, 30, 60],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❅
        </motion.text>
      ))}
    </motion.svg>
  );
};
