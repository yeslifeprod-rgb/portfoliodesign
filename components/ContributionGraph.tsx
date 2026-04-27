"use client";

import { SiGitlab } from "react-icons/si";

export default function ContributionGraph() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            GitLab · yeslife.prod
          </span>
        </div>
        <a
          href="https://gitlab.com/yeslife.prod"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
        >
          <SiGitlab className="w-4 h-4 text-[#FC6D26] group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
            Voir profil GitLab →
          </span>
        </a>
      </div>
    </div>
  );
}
