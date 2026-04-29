"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  IconUsers,
  IconBrandDiscord,
  IconDatabase,
  IconArrowRight,
  IconArrowDown,
  IconBrandNextjs,
  IconDeviceMobile,
  IconServerCog,
  IconApi,
  IconBolt,
  IconShieldLock,
  IconPlayerPlay
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const PARTS_FR = [
  {
    id: "clients",
    title: "1. Interfaces Utilisateurs",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    items: [
      { id: "web", icon: <IconBrandNextjs size={24} />, label: "App Web", desc: "Next.js (SSR)" },
      { id: "mobile", icon: <IconDeviceMobile size={24} />, label: "App Mobile", desc: "Ionic Cross-platform" },
    ]
  },
  {
    id: "core",
    title: "2. Cœur du Système",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    items: [
      { id: "matchmaking", icon: <IconServerCog size={24} />, label: "Matchmaking Engine", desc: "Algorithme de niveau" },
      { id: "database", icon: <IconDatabase size={24} />, label: "Supabase", desc: "Auth & DB temps réel" },
    ]
  },
  {
    id: "integrations",
    title: "3. Écosystème Discord",
    color: "from-[#5865F2]/20 to-[#5865F2]/10",
    border: "border-[#5865F2]/30",
    items: [
      { id: "discord_webhooks", icon: <IconBrandDiscord size={24} />, label: "Annonces", desc: "Webhooks automatisés" },
      { id: "discord_roles", icon: <IconShieldLock size={24} />, label: "Accès VIP", desc: "Channels exclusifs" },
    ]
  }
];

const PARTS_EN = [
  {
    id: "clients",
    title: "1. User Interfaces",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    items: [
      { id: "web", icon: <IconBrandNextjs size={24} />, label: "Web App", desc: "Next.js (SSR)" },
      { id: "mobile", icon: <IconDeviceMobile size={24} />, label: "Mobile App", desc: "Ionic Cross-platform" },
    ]
  },
  {
    id: "core",
    title: "2. System Core",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    items: [
      { id: "matchmaking", icon: <IconServerCog size={24} />, label: "Matchmaking Engine", desc: "Skill algorithm" },
      { id: "database", icon: <IconDatabase size={24} />, label: "Supabase", desc: "Auth & Real-time DB" },
    ]
  },
  {
    id: "integrations",
    title: "3. Discord Ecosystem",
    color: "from-[#5865F2]/20 to-[#5865F2]/10",
    border: "border-[#5865F2]/30",
    items: [
      { id: "discord_webhooks", icon: <IconBrandDiscord size={24} />, label: "Announcements", desc: "Automated Webhooks" },
      { id: "discord_roles", icon: <IconShieldLock size={24} />, label: "VIP Access", desc: "Exclusive Channels" },
    ]
  }
];

export function TeamsFinderSchema({ language }: { language: string }) {
  const [activePart, setActivePart] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const parts = language === "fr" ? PARTS_FR : PARTS_EN;

  const triggerSimulation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const sequence = async () => {
      for (let i = 0; i < parts.length; i++) {
        setActivePart(i);
        // Animate items within the part
        for (const item of parts[i].items) {
          setActiveItem(item.id);
          await new Promise((r) => setTimeout(r, 600));
        }
        setActiveItem(null);
        await new Promise((r) => setTimeout(r, 400));
      }
      setActivePart(null);
      setIsAnimating(false);
    };
    
    sequence();
  };

  return (
    <div className="relative rounded-3xl border border-border bg-background p-6 md:p-10 overflow-hidden mb-12 shadow-sm font-sans">
      {/* Title */}
      <div className="mb-10 text-center">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 mb-2">
          {language === "fr" ? "Architecture Modulaire" : "Modular Architecture"}
        </h3>
        <p className="text-sm text-muted-foreground font-medium max-w-md mx-auto leading-relaxed">
          {language === "fr"
            ? "Une séparation claire entre les interfaces, le moteur de matchmaking temps réel et les intégrations communautaires."
            : "A clear separation between interfaces, the real-time matchmaking engine, and community integrations."}
        </p>
      </div>

      {/* Divided Schema */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8 justify-center items-stretch mb-12">
        {parts.map((part, partIndex) => (
          <React.Fragment key={part.id}>
            <motion.div
              animate={{ 
                opacity: activePart === null || activePart === partIndex ? 1 : 0.4,
                scale: activePart === partIndex ? 1.02 : 1
              }}
              transition={{ duration: 0.4 }}
              className={`flex-1 relative rounded-2xl border ${part.border} bg-gradient-to-br ${part.color} p-5 flex flex-col`}
            >
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-foreground mb-6 text-center border-b border-border/50 pb-3">
                {part.title}
              </h4>
              
              <div className="flex flex-col gap-4 flex-1 justify-center">
                {part.items.map((item) => (
                  <motion.div
                    key={item.id}
                    animate={{
                      scale: activeItem === item.id ? 1.05 : 1,
                      backgroundColor: activeItem === item.id ? "hsl(var(--card))" : "transparent",
                      boxShadow: activeItem === item.id ? "0 10px 30px -10px rgba(0,0,0,0.2)" : "none",
                    }}
                    className={`flex items-center gap-4 p-3 rounded-xl border transition-colors duration-300 ${
                      activeItem === item.id ? "border-primary/50" : "border-border/40"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${activeItem === item.id ? "bg-primary text-primary-foreground" : "bg-background/50 text-muted-foreground"}`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-foreground">{item.label}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Connectors */}
            {partIndex < parts.length - 1 && (
              <div className="hidden md:flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    color: activePart === partIndex ? "hsl(var(--primary))" : "hsl(var(--border))",
                    scale: activePart === partIndex ? 1.2 : 1
                  }}
                >
                  <IconArrowRight size={24} stroke={1.5} />
                </motion.div>
              </div>
            )}
            {partIndex < parts.length - 1 && (
              <div className="flex md:hidden items-center justify-center my-2">
                <motion.div 
                  animate={{ 
                    color: activePart === partIndex ? "hsl(var(--primary))" : "hsl(var(--border))",
                    scale: activePart === partIndex ? 1.2 : 1
                  }}
                >
                  <IconArrowDown size={24} stroke={1.5} />
                </motion.div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Footer / Demo Button */}
      <div className="flex justify-center pt-8 border-t border-border">
        <Button
          onClick={triggerSimulation}
          disabled={isAnimating}
          variant="primary"
          className={`rounded-full px-12 py-7 h-auto transition-all duration-500 font-bold text-[11px] uppercase tracking-[0.2em] shadow-lg
            ${isAnimating
              ? "opacity-50 grayscale cursor-not-allowed"
              : "hover:scale-105 active:scale-95 shadow-primary/20"
            }`}
        >
          <IconPlayerPlay size={14} className="mr-2" />
          {isAnimating
            ? language === "fr" ? "Analyse en cours..." : "Analyzing flow..."
            : language === "fr" ? "Simuler le flux de données" : "Simulate data flow"}
        </Button>
      </div>
    </div>
  );
}
