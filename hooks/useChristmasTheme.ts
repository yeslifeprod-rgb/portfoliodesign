"use client";

import { useState, useEffect } from "react";

/**
 * Hook pour détecter si on est dans la période de Noël
 * Actif du 1er novembre au 3 janvier 2025
 */
export const useChristmasTheme = (): boolean => {
  const [isChristmasTime, setIsChristmasTime] = useState(false);

  useEffect(() => {
    const checkChristmasPeriod = () => {
      const now = new Date();
      const endDate = new Date(2025, 0, 3, 23, 59, 59); // 3 janvier 2025 à 23:59:59

      // Actif jusqu'au 3 janvier 2025
      setIsChristmasTime(now <= endDate);
    };

    checkChristmasPeriod();

    // Vérifier toutes les heures au cas où la page reste ouverte longtemps
    const interval = setInterval(checkChristmasPeriod, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return isChristmasTime;
};
