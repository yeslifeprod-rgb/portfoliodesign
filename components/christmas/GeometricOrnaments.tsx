"use client";

import React from "react";
import { motion } from "framer-motion";

interface GeometricOrnamentProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  variant?: "hexagon" | "star" | "diamond" | "circle";
}

/**
 * Ornements géométriques minimalistes
 * Design moderne et élégant
 */
export const GeometricOrnament: React.FC<GeometricOrnamentProps> = ({
  position = "top-right",
  variant = "hexagon",
}) => {
  const positionClasses = {
    "top-left": "top-4 left-4 md:top-8 md:left-8",
    "top-right": "top-4 right-4 md:top-8 md:right-8",
    "bottom-left": "bottom-4 left-4 md:bottom-8 md:left-8",
    "bottom-right": "bottom-4 right-4 md:bottom-8 md:right-8",
  };

  const renderOrnament = () => {
    const size = 80;

    switch (variant) {
      case "hexagon":
        return (
          <motion.svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            {/* Glow background */}
            <motion.path
              d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
              fill="url(#hexGrad)"
              opacity="0.3"
              filter="blur(8px)"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main hexagon */}
            <motion.path
              d="M50 10 L80 27.5 L80 72.5 L50 90 L20 72.5 L20 27.5 Z"
              fill="rgba(255, 255, 255, 0.1)"
              stroke="url(#hexStroke)"
              strokeWidth="2"
              className="backdrop-blur-sm"
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "50px 50px" }}
            />

            {/* Inner decorative lines */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <motion.line
                key={i}
                x1="50"
                y1="50"
                x2={50 + 25 * Math.cos((angle * Math.PI) / 180)}
                y2={50 + 25 * Math.sin((angle * Math.PI) / 180)}
                stroke="url(#lineGrad)"
                strokeWidth="1"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Center circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill="url(#centerGrad)"
              stroke="#2563EB"
              strokeWidth="1.5"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <defs>
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="hexStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="50%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#93C5FD" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DBEAFE" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <radialGradient id="centerGrad">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#2563EB" />
              </radialGradient>
            </defs>
          </motion.svg>
        );

      case "star":
        return (
          <motion.svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            {/* Glow */}
            <motion.path
              d="M50 10 L60 40 L90 40 L67 60 L75 90 L50 70 L25 90 L33 60 L10 40 L40 40 Z"
              fill="url(#starGlow)"
              opacity="0.4"
              filter="blur(12px)"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main star */}
            <motion.path
              d="M50 15 L58 38 L83 38 L63 53 L70 76 L50 61 L30 76 L37 53 L17 38 L42 38 Z"
              fill="rgba(255, 255, 255, 0.1)"
              stroke="url(#starStroke)"
              strokeWidth="2"
              className="backdrop-blur-sm"
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "50px 50px" }}
            />

            {/* Center sparkle */}
            <motion.circle
              cx="50"
              cy="50"
              r="6"
              fill="#FDE68A"
              opacity="0.9"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <defs>
              <radialGradient id="starGlow">
                <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
              </radialGradient>
              <linearGradient id="starStroke">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#FDE68A" />
              </linearGradient>
            </defs>
          </motion.svg>
        );

      case "diamond":
        return (
          <motion.svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            {/* Outer glow */}
            <motion.rect
              x="25"
              y="25"
              width="50"
              height="50"
              fill="url(#diamondGlow)"
              opacity="0.4"
              filter="blur(10px)"
              transform="rotate(45 50 50)"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main diamond */}
            <motion.rect
              x="30"
              y="30"
              width="40"
              height="40"
              fill="rgba(255, 255, 255, 0.08)"
              stroke="url(#diamondStroke)"
              strokeWidth="2"
              className="backdrop-blur-sm"
              transform="rotate(45 50 50)"
              animate={{
                rotate: [45, 405],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner diamond */}
            <motion.rect
              x="40"
              y="40"
              width="20"
              height="20"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="1.5"
              transform="rotate(45 50 50)"
              opacity="0.7"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <defs>
              <radialGradient id="diamondGlow">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.2" />
              </radialGradient>
              <linearGradient id="diamondStroke">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="50%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
          </motion.svg>
        );

      default: // circle
        return (
          <motion.svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            {/* Outer rings */}
            {[70, 55, 40].map((r, i) => (
              <motion.circle
                key={i}
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke={i === 2 ? "#2563EB" : i === 1 ? "#60A5FA" : "#93C5FD"}
                strokeWidth="1.5"
                opacity="0.5"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "50px 50px" }}
              />
            ))}

            {/* Center orb */}
            <motion.circle
              cx="50"
              cy="50"
              r="20"
              fill="url(#orbGrad)"
              filter="blur(0.5px)"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <defs>
              <radialGradient id="orbGrad">
                <stop offset="0%" stopColor="#DBEAFE" />
                <stop offset="100%" stopColor="#2563EB" />
              </radialGradient>
            </defs>
          </motion.svg>
        );
    }
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} pointer-events-none z-10`}
      style={{
        filter: "drop-shadow(0 8px 16px rgba(37, 99, 235, 0.15))",
      }}
    >
      {renderOrnament()}
    </div>
  );
};
