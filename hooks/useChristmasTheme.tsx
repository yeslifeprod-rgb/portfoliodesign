"use client";

import { useState, useEffect } from "react";

export const useChristmasTheme = () => {
  const [isChristmas, setIsChristmas] = useState(false);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const startDate = new Date(year, 11, 12); // Dec 12
    const endDate = new Date(year + 1, 0, 3); // Jan 3

    setIsChristmas(now >= startDate && now <= endDate);
  }, []);

  return isChristmas;
};
