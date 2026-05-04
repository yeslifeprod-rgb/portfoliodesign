"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Home, User, FolderOpen, Layers, Briefcase, Mail } from "lucide-react";
import { navLinks } from "@/lib/navigation";

const SECTION_IDS = ["home", "about", "projets", "stack", "experience", "contact"];

const NAV_ICONS: Record<string, React.ElementType> = {
  "#home": Home,
  "#about": User,
  "#projets": FolderOpen,
  "#stack": Layers,
  "#experience": Briefcase,
  "#contact": Mail,
};

/* ─── useActiveSection ────────────────────────────────── */
function useActiveSection(): string {
  const [active, setActive] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") { setActive(""); return; }

    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) visible.set(id, e.intersectionRatio);
            else visible.delete(id);
          });
          let best = "", bestR = 0;
          visible.forEach((r, s) => { if (r > bestR) { bestR = r; best = s; } });
          if (best) setActive(best);
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75], rootMargin: "-10% 0px -10% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  return active;
}

/* ─── Scroll progress ─────────────────────────────────── */
const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) setProgress(window.scrollY / h);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <motion.div
        className="h-full gradient-bar origin-left"
        style={{ scaleX: progress }}
        initial={{ scaleX: 0 }}
      />
    </div>
  );
};

/* ─── Floating Pill Navbar ────────────────────────────── */
const FloatingNav: React.FC<{
  navigation: { label: string; href: string }[];
  activeSection: string;
  language: string;
  setLanguage: (l: "fr" | "en") => void;
}> = ({ navigation, activeSection, language, setLanguage }) => {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const scrollDelta = useRef(0);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      // Hysteresis: need 15px of consistent scroll to trigger
      if (delta > 0) {
        scrollDelta.current = Math.max(0, scrollDelta.current + delta);
        if (scrollDelta.current > 15 && y > 100) setVisible(false);
      } else {
        scrollDelta.current = Math.min(0, scrollDelta.current + delta);
        if (scrollDelta.current < -15) setVisible(true);
      }

      lastY.current = y;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleLang = useCallback(() => {
    setLanguage(language === "fr" ? "en" : "fr");
  }, [language, setLanguage]);

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 z-50"
      initial={{ opacity: 0, y: 40, x: "-50%" }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 40,
        x: "-50%",
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Navigation principale"
    >
      <div className="flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-card/80 dark:bg-card/90 backdrop-blur-2xl border border-black/[0.08] dark:border-white/10 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.04),0_12px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_2px_4px_rgba(0,0,0,0.2),0_12px_24px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 dark:ring-white/[0.04]">
        {/* Nav links — labels on desktop, icons on mobile */}
        {navigation.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;
          const Icon = NAV_ICONS[item.href] ?? Home;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-2 py-2 md:px-3.5 md:py-2 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {/* Active pill */}
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-primary/15 dark:bg-primary/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              {/* Mobile: icon only */}
              <span
                className={`relative z-10 flex items-center justify-center md:hidden ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-[18px] h-[18px]" />
              </span>

              {/* Desktop: text label */}
              <span
                className={`relative z-10 hidden md:inline ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Separator */}
        <div className="w-px h-4 mx-0.5 bg-border/40 dark:bg-white/[0.06] flex-shrink-0" />

        {/* CV Page Link */}
        <Link
          href="/cv"
          className="flex items-center justify-center px-3 h-9 rounded-full text-xs font-black tracking-widest text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          aria-label={language === "fr" ? "Voir mon CV" : "View my CV"}
        >
          CV
        </Link>

        {/* Theme toggle */}
        <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted/50 dark:hover:bg-white/[0.06] transition-colors duration-200">
          <AnimatedThemeToggler className="w-full h-full rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200" />
        </div>
      </div>
    </motion.nav>
  );
};

/* ─── Main Navbar ─────────────────────────────────────── */
const Navbar: React.FC = () => {
  const { language, setLanguage } = useLang();
  const activeSection = useActiveSection();

  const navigation = useMemo(
    () => navLinks.map((item) => ({ label: item.label[language], href: item.href })),
    [language]
  );

  return (
    <>
      <ScrollProgress />
      <FloatingNav
        navigation={navigation}
        activeSection={activeSection}
        language={language}
        setLanguage={setLanguage}
      />
    </>
  );
};

export default Navbar;
