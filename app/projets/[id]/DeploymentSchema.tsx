import React from "react";
import { motion } from "motion/react";
import {
  IconBrandGitlab, IconBrandDocker, IconCloud, IconRocket,
  IconBolt, IconCheck, IconSettings, IconCode, IconArrowRight
} from "@tabler/icons-react";

export function FirstDeploymentSchema({ language }: { language: string }) {
  const steps = [
    {
      id: "01",
      icon: <IconCode size={20} />,
      title: language === "fr" ? "Développement" : "Development",
      desc: language === "fr" ? "Git & GitLab" : "Git & GitLab",
      color: "blue"
    },
    {
      id: "02",
      icon: <IconSettings size={20} />,
      title: "CI/CD Pipeline",
      desc: language === "fr" ? "Build & Test" : "Build & Test",
      color: "orange"
    },
    {
      id: "03",
      icon: <IconBrandDocker size={20} />,
      title: "Docker",
      desc: language === "fr" ? "Conteneurisation" : "Containerization",
      color: "cyan"
    },
    {
      id: "04",
      icon: <IconCloud size={20} />,
      title: "AWS EC2",
      desc: language === "fr" ? "Déploiement" : "Deployment",
      color: "green"
    }
  ];

  return (
    <div className="relative rounded-3xl border border-border bg-card p-6 md:p-10 overflow-hidden mb-12 shadow-xl">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-emerald-500/40 opacity-30" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
        {steps.map((step, idx) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center w-full md:w-1/4 p-4 rounded-2xl border border-transparent hover:border-border hover:bg-secondary/50 transition-all duration-300 group"
            >
              <div className={`
                w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                ${step.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : ''}
                ${step.color === 'orange' ? 'bg-orange-500/10 text-orange-400' : ''}
                ${step.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' : ''}
                ${step.color === 'green' ? 'bg-emerald-500/10 text-emerald-400' : ''}
              `}>
                {step.icon}
              </div>
              <h6 className="text-[13px] font-black text-foreground mb-1">{step.title}</h6>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{step.desc}</p>
            </motion.div>
            
            {idx < steps.length - 1 && (
              <div className="hidden md:flex items-center text-muted-foreground/20">
                <IconArrowRight size={20} stroke={3} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export function FeatureDeploymentSchema({ language }: { language: string }) {
  // Keeping it for backward compatibility or providing a simplified version
  return (
    <div className="p-8 rounded-3xl border border-dashed border-border bg-secondary/30 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
        <IconBolt size={14} className="text-emerald-400" />
        <span className="text-[10px] font-black text-emerald-300 uppercase tracking-widest">
          {language === "fr" ? "Flux automatisé" : "Automated flow"}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-sm mx-auto font-medium">
        {language === "fr" 
          ? "Chaque nouvelle fonctionnalité passe par GitLab CI/CD pour être testée et déployée automatiquement sur AWS."
          : "Every new feature goes through GitLab CI/CD to be automatically tested and deployed to AWS."}
      </p>
    </div>
  );
}
