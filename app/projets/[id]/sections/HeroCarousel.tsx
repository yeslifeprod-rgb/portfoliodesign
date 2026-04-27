"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface Props {
  images: string[];
  onZoom: (src: string) => void;
}

export function HeroCarousel({ images, onZoom }: Props) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  if (!images || images.length === 0) return null;

  const go = (next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex(next);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="mt-10 w-full max-w-4xl"
    >
      {/* Main slide */}
      <div
        className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-lg group cursor-zoom-in"
        style={{ aspectRatio: "16/9", maxHeight: 400 }}
        onClick={() => onZoom(images[index])}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? "5%" : "-5%", opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? "-5%" : "5%", opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[index]}
              alt={`Screenshot ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

        {images.length > 1 && (
          <>
            <button
              onClick={e => { e.stopPropagation(); go((index - 1 + images.length) % images.length); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/75 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors z-10 opacity-0 group-hover:opacity-100 duration-200"
            >
              <IconChevronLeft size={14} className="text-foreground" />
            </button>
            <button
              onClick={e => { e.stopPropagation(); go((index + 1) % images.length); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/75 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors z-10 opacity-0 group-hover:opacity-100 duration-200"
            >
              <IconChevronRight size={14} className="text-foreground" />
            </button>
            <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-[10px] font-black tracking-widest pointer-events-none">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 justify-center">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
