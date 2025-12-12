"use client";

import React from "react";
import { useChristmasTheme } from "@/hooks/useChristmasTheme";
import { NorthernLights } from "./NorthernLights";

/**
 * Wrapper pour les effets globaux de Noël
 * Design élégant et sophistiqué
 */
export const ChristmasWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isChristmas = useChristmasTheme();

  return (
    <>
      {isChristmas && <NorthernLights />}
      {children}
    </>
  );
};
