"use client";

import React from "react";
import { ChristmasTree } from "./svg/ChristmasTree";
import { GiftBox } from "./svg/GiftBox";
import { Snowman } from "./svg/Snowman";

interface SectionDecorationsProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  decoration?: "snowman" | "gift" | "tree";
}

/**
 * Composant de décorations SVG pour les coins des sections
 * Illustrations animées professionnelles
 */
export const SectionDecorations: React.FC<SectionDecorationsProps> = ({
  position = "top-right",
  decoration = "tree",
}) => {
  const positionClasses = {
    "top-left": "top-2 left-2 md:top-4 md:left-4",
    "top-right": "top-2 right-2 md:top-4 md:right-4",
    "bottom-left": "bottom-2 left-2 md:bottom-4 md:left-4",
    "bottom-right": "bottom-2 right-2 md:bottom-4 md:right-4",
  };

  const DecorationComponent = {
    snowman: Snowman,
    gift: GiftBox,
    tree: ChristmasTree,
  }[decoration];

  return (
    <div
      className={`absolute ${positionClasses[position]} pointer-events-none z-10`}
      style={{
        filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))",
      }}
    >
      <DecorationComponent size={80} />
    </div>
  );
};

/**
 * Décorations multiples pour une section complète
 */
export const FullSectionDecorations: React.FC = () => {
  return (
    <>
      <SectionDecorations position="top-left" decoration="snowman" />
      <SectionDecorations position="top-right" decoration="reindeer" />
      <SectionDecorations position="bottom-left" decoration="gift" />
      <SectionDecorations position="bottom-right" decoration="tree" />
    </>
  );
};
