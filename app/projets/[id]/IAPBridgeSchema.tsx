import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  IconDeviceMobile, IconBrandApple, IconServer, IconArrowRight, IconCreditCard, IconPlayerPlay, IconDatabase, IconCoins, IconCreditCardPay
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function IAPBridgeSchema({ language }: { language: string }) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      id: "01",
      icon: <IconDeviceMobile size={22} />,
      title: language === "fr" ? "L'App" : "The App",
      desc: "Flutter / Next.js",
    },
    {
      id: "02",
      icon: <IconBrandApple size={22} />,
      title: language === "fr" ? "Paywall Natif" : "Native Paywall",
      desc: language === "fr" ? "Achat iOS" : "iOS Purchase",
    },
    {
      id: "03",
      icon: <IconCreditCard size={22} />,
      title: "RevenueCat",
      desc: "Validation",
    },
    {
      id: "04",
      icon: <IconDatabase size={22} />,
      title: "Serveur",
      desc: "Points Sync",
    }
  ];

  const triggerSimulation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const sequence = async () => {
        for (let i = 0; i < steps.length; i++) {
            setActiveStep(i);
            await new Promise(r => setTimeout(r, 800));
        }
        setActiveStep(null);
        setIsAnimating(false);
    };
    
    sequence();
  };

  return (
    <div className="relative rounded-3xl border border-border bg-background p-8 md:p-12 overflow-hidden mb-12 shadow-sm font-sans">
      
      {/* Title */}
      <div className="mb-12 text-center">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 mb-2">
            {language === "fr" ? "Système d'achat intégré" : "Integrated Purchase System"}
        </h3>
        <p className="text-sm text-muted-foreground font-medium max-w-sm mx-auto leading-relaxed">
            {language === "fr" 
                ? "Expérience d'achat native iOS synchronisée avec la base de données."
                : "Native iOS purchase experience synchronized with the database."}
        </p>
      </div>

      {/* Simple Step Flow */}
      <div className="relative mb-16 max-w-2xl mx-auto">
        <div className="absolute top-[3rem] left-[10%] right-[10%] h-[1px] bg-border/50 hidden md:block" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 relative">
            {steps.map((step, idx) => (
            <React.Fragment key={step.id}>
                <motion.div
                animate={{ 
                    y: activeStep === idx ? -8 : 0,
                }}
                className="flex flex-col items-center text-center relative z-10 w-32"
                >
                <div className={`
                    w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-5 transition-all duration-500 border
                    ${activeStep === idx 
                        ? 'bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20' 
                        : 'bg-card text-muted-foreground border-border shadow-sm'}
                `}>
                    {step.icon}
                </div>
                <h6 className="text-[13px] font-bold text-foreground mb-1 tracking-tight">{step.title}</h6>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest">{step.desc}</p>

                {/* Animated Indicator */}
                <AnimatePresence>
                  {activeStep === idx && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute top-0 right-3 w-5 h-5 rounded-full bg-primary border-[3px] border-background shadow-lg shadow-primary/40 flex items-center justify-center"
                    >
                        <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                    </motion.div>
                  )}
                </AnimatePresence>
                </motion.div>
                
                {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center text-border h-20">
                    <IconArrowRight size={20} stroke={2} />
                </div>
                )}
            </React.Fragment>
            ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-10 border-t border-border">
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
                <IconCoins size={16} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Points System</span>
            </div>
            <div className="flex items-center gap-3">
                <IconCreditCard size={16} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Achat Natif</span>
            </div>
        </div>

        <Button 
            onClick={triggerSimulation}
            disabled={isAnimating}
            variant="primary"
            className={`
                rounded-full px-12 py-7 h-auto transition-all duration-500 font-bold text-[11px] uppercase tracking-[0.2em] shadow-lg
                ${isAnimating 
                    ? 'opacity-50 grayscale cursor-not-allowed' 
                    : 'hover:scale-105 active:scale-95 shadow-primary/20'}
            `}
        >
            {isAnimating 
                ? (language === "fr" ? "Traitement..." : "Processing...") 
                : (language === "fr" ? "Lancer la démo" : "Start Demo")}
        </Button>
      </div>
    </div>
  );
}
