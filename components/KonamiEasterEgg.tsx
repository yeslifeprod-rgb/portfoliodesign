"use client";

import { useEffect, useRef, useCallback } from "react";
import confetti from "canvas-confetti";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export const KonamiEasterEgg = () => {
  const indexRef = useRef(0);
  const activatedRef = useRef(false);

  const fireConfetti = useCallback(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#0403e7", "#2563eb", "#0ea5e9", "#47deff", "#06b6d4", "#38bdf8"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
        zIndex: 99999,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
        zIndex: 99999,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    // Big initial burst
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors,
      zIndex: 99999,
      startVelocity: 45,
      gravity: 0.8,
      scalar: 1.2,
    });

    frame();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const expected = KONAMI_CODE[indexRef.current];

      if (e.key === expected) {
        indexRef.current++;

        if (indexRef.current === KONAMI_CODE.length) {
          indexRef.current = 0;

          if (!activatedRef.current) {
            activatedRef.current = true;
            fireConfetti();

            // Allow re-triggering after cooldown
            setTimeout(() => {
              activatedRef.current = false;
            }, 4000);
          }
        }
      } else {
        indexRef.current = 0;
        // Check if the failed key is actually the start of the sequence
        if (e.key === KONAMI_CODE[0]) {
          indexRef.current = 1;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fireConfetti]);

  return null;
};
