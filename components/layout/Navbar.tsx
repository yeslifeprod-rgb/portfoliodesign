"use client";

import React, { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FolderOpen, Home, Layers, Mail, Moon, Sun } from "lucide-react";

import { FloatingDock } from "@/components/ui/floating-dock";
import { navLinks } from "@/lib/content/navigation";
import { useTheme } from "@/lib/hooks/useTheme";

const SECTION_IDS = ["home", "projets", "services", "faq", "contact"];

const NAV_ICONS: Record<string, React.ElementType> = {
  "#home": Home,
  "#projets": FolderOpen,
  "#services": Layers,
  "#contact": Mail,
};

const GLYPH = "h-full w-full p-[22%]";

/* ─── useActiveSection ────────────────────────────────── */
function useActiveSection(): string {
  const [active, setActive] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }

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
          let best = "";
          let bestR = 0;
          visible.forEach((r, s) => {
            if (r > bestR) {
              bestR = r;
              best = s;
            }
          });
          if (best) setActive(best);
        },
        {
          threshold: [0, 0.1, 0.25, 0.5, 0.75],
          rootMargin: "-10% 0px -10% 0px",
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  return active;
}

/* ─── Barre de progression ────────────────────────────── */
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
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px]">
      <motion.div
        className="h-full origin-left bg-primary"
        style={{ scaleX: progress }}
        initial={{ scaleX: 0 }}
      />
    </div>
  );
};

/* ─── Navigation mobile ───────────────────────────────────
   Barre fixée en bas de l'écran, à la place du menu burger.
   Elle absorbe l'appel à l'action : sans cela deux barres se
   superposeraient en bas de l'écran. */
const MobileNav: React.FC<{ activeSection: string }> = ({ activeSection }) => (
  <nav
    aria-label="Navigation"
    className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
  >
    <ul className="flex items-stretch justify-around">
      {navLinks.map(({ label, href }) => {
        const Icon = NAV_ICONS[href] ?? Home;
        const sectionId = href.replace("#", "");
        const isActive = href.startsWith("#") && activeSection === sectionId;

        return (
          <li key={href} className="flex-1">
            <a
              href={href}
              aria-current={isActive ? "true" : undefined}
              className={`flex flex-col items-center gap-1 py-2.5 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="text-[10px] font-medium leading-none">
                {label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
);

/* ─── Navbar ──────────────────────────────────────────── */
const Navbar: React.FC = () => {
  const activeSection = useActiveSection();
  const { isDark, toggleTheme } = useTheme();

  const items = useMemo(
    () => [
      ...navLinks.map((item) => {
        const Icon = NAV_ICONS[item.href] ?? Home;
        const sectionId = item.href.replace("#", "");

        return {
          title: item.label,
          href: item.href,
          active: item.href.startsWith("#") && activeSection === sectionId,
          icon: <Icon className={GLYPH} />,
        };
      }),
      {
        // Seul élément non navigant du dock : l'ancre est neutralisée et
        // sert d'origine au cercle de transition du thème.
        title: isDark ? "Thème clair" : "Thème sombre",
        href: "#",
        onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
          event.preventDefault();
          void toggleTheme(event.currentTarget);
        },
        icon: isDark ? <Sun className={GLYPH} /> : <Moon className={GLYPH} />,
      },
    ],
    [activeSection, isDark, toggleTheme]
  );

  return (
    <>
      <ScrollProgress />

      {/* Le dock reste desktop : sur mobile, le menu burger le remplace. */}
      <nav aria-label="Navigation principale">
        <FloatingDock
          items={items}
          desktopClassName="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
          mobileClassName="hidden"
        />
      </nav>

      <MobileNav activeSection={activeSection} />
    </>
  );
};

export default Navbar;
