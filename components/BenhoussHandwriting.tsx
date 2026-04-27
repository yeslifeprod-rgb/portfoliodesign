"use client";

import { useState, startTransition } from "react";
import { motion } from "motion/react";

interface BenhoussHandwritingProps {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  strokeColor?: string;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
}

const initialProps = { pathLength: 0, opacity: 0 };
const animateProps = { pathLength: 1, opacity: 1 };

// "B" — hand-drawn bezier curves
const PATH_B =
  "M 5.671 37.025 C 5.671 7.396 28.037 -8.86 36.671 5.025 C 45.305 18.91 21.171 37 21.171 37 C 21.171 37 41.179 44.088 14.671 63.5 C -11.836 82.912 5.671 47.5 5.671 47.5";

// "enhou" — hand-drawn, ends at 100.5
const PATH_ENHOU =
  "M 26.5 51.5 C 31.5 56.5 51.625 55.73 56.5 53.235 C 58.938 51.988 56.859 43.756 46.5 44.257 C 36.141 44.758 48.5 55.228 51 57.728 C 67 72.622 72 61.929 66 60.211 C 63 59.352 63.375 55.615 65 53.211 C 66.625 50.807 68.5 48.735 68.5 48.735 C 68.5 48.735 78 39.26 78 47.735 C 78 56.21 76.5 57.707 76.5 62.211 C 76.5 66.715 82.045 65.661 84 62.711 C 85.955 59.761 110.835 26.239 94.5 32.211 C 78.165 38.183 88.813 61.432 91 64.5 C 93.187 67.568 88.43 53.406 95 52.5 C 101.57 51.594 100.5 64.5 100.5 64.5";

// First "s" — connects from enhou
const PATH_S1 =
  "M 100.5 63.569 C 100.5 63.569 112.595 67.627 106.5 64 C 100.405 60.373 103.115 48.415 111.5 49.5 C 115.692 50.042 119.894 60.94 108 65";

// Connector between s letters
const PATH_CONN =
  "M 118.5 49 C 118.5 54.41 114.712 57.375 116.462 61 C 117.337 62.813 117.767 63.578 119 64 C 120.233 64.422 122.267 64.502 123.5 64 C 125.966 62.997 129.148 60.296 129 57 C 128.852 53.704 128.375 50.813 127.5 49";

// Second "s"
const PATH_S2 =
  "M 148 46.5 C 141.938 47.817 129.318 51.909 139.5 53 C 144.591 53.546 145.215 57.391 142.5 60.5 C 139.785 63.609 134.231 64.861 126 62.634";

// Third mark (rightmost)
const PATH_S3 =
  "M 161 45.5 C 153.77 46.736 139.443 51.086 151.586 52.111 C 157.658 52.623 159.46 56.378 157.379 58.25 C 155.299 60.122 148.613 60.583 140 62.5";

export function BenhoussHandwriting({
  size = 80,
  duration = 1,
  strokeWidth = 2.5,
  strokeColor = "currentColor",
  autoPlay = true,
  loop = false,
  className = "",
}: BenhoussHandwritingProps) {
  const calc = (x: number) => x * duration;
  const [animationKey, setAnimationKey] = useState(0);

  const handleAnimationComplete = () => {
    if (loop && typeof window !== "undefined") {
      setTimeout(() => {
        startTransition(() => {
          setAnimationKey((prev) => prev + 1);
        });
      }, 1000);
    }
  };

  const initial = autoPlay ? initialProps : animateProps;
  const animate = animateProps;

  return (
    <div
      className={`flex justify-center items-center ${className}`}
      style={{ width: "100%", height: "auto" }}
    >
      <motion.svg
        key={animationKey}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-15 -12 182 100"
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        style={{
          width: "auto",
          height: `${size}px`,
          display: "block",
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <title>Benhouss</title>

        {/* "B" */}
        <motion.path
          d={PATH_B}
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initial}
          animate={animate}
          transition={{
            duration: calc(0.8),
            ease: "easeInOut",
            opacity: { duration: 0.3 },
          }}
        />

        {/* "enhou" */}
        <motion.path
          d={PATH_ENHOU}
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initial}
          animate={animate}
          transition={{
            duration: calc(2.2),
            ease: "easeInOut",
            delay: calc(0.7),
            opacity: { duration: 0.4, delay: calc(0.7) },
          }}
        />

        {/* First "s" */}
        <motion.path
          d={PATH_S1}
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initial}
          animate={animate}
          transition={{
            duration: calc(0.5),
            ease: "easeInOut",
            delay: calc(2.6),
            opacity: { duration: 0.2, delay: calc(2.6) },
          }}
        />

        {/* Connector */}
        <motion.path
          d={PATH_CONN}
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initial}
          animate={animate}
          transition={{
            duration: calc(0.4),
            ease: "easeInOut",
            delay: calc(2.9),
            opacity: { duration: 0.2, delay: calc(2.9) },
          }}
        />

        {/* Second "s" */}
        <motion.path
          d={PATH_S2}
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initial}
          animate={animate}
          transition={{
            duration: calc(0.5),
            ease: "easeInOut",
            delay: calc(3.2),
            opacity: { duration: 0.2, delay: calc(3.2) },
          }}
        />

        {/* Third mark */}
        <motion.path
          d={PATH_S3}
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initial}
          animate={animate}
          transition={{
            duration: calc(0.5),
            ease: "easeInOut",
            delay: calc(3.5),
            opacity: { duration: 0.2, delay: calc(3.5) },
          }}
          onAnimationComplete={handleAnimationComplete}
        />
      </motion.svg>
    </div>
  );
}
