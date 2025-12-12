"use client";

import { useState, useEffect } from "react";

/**
 * Hook pour détecter si on est dans la période de Noël
 * Actif du 12 décembre 2025 au 3 janvier 2026
 */
export const useChristmasTheme = (): boolean => {
  const [isChristmasTime, setIsChristmasTime] = useState(false);

  useEffect(() => {
    const checkChristmasPeriod = () => {
      const now = new Date();
      const startDate = new Date(2025, 11, 12, 0, 0, 0); // 12 décembre 2025 à 00:00
      const endDate = new Date(2026, 0, 3, 23, 59, 59); // 3 janvier 2026 à 23:59:59

      // Actif du 12 décembre 2025 au 3 janvier 2026
      setIsChristmasTime(now >= startDate && now <= endDate);
    };

    checkChristmasPeriod();

    // Vérifier toutes les heures au cas où la page reste ouverte longtemps
    const interval = setInterval(checkChristmasPeriod, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return isChristmasTime;
};
