"use client";

import { useCallback } from "react";
import { getCalApi } from "@calcom/embed-react";

/**
 * Ouvre la prise de rendez-vous Cal.com.
 *
 * Extrait de Contact.tsx pour que le hero, le CTA mobile et le footer
 * déclenchent exactement la même action — un seul chemin de conversion.
 * Le thème était forcé à "light" : il suit maintenant celui du site.
 */
export function useBooking() {
  const calUrl = process.env.NEXT_PUBLIC_CAL_URL;

  const openBooking = useCallback(async () => {
    if (!calUrl) return;

    const cal = await getCalApi();
    const isDark = document.documentElement.classList.contains("dark");

    cal("modal", {
      calLink: calUrl.replace(/^https?:\/\/cal\.com\//, ""),
      config: {
        layout: "month_view",
        theme: isDark ? "dark" : "light",
        hideEventTypeDetails: "true",
      },
    });
  }, [calUrl]);

  return { openBooking, isBookingEnabled: Boolean(calUrl) };
}
