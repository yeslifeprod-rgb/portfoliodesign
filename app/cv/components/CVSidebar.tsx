import { Languages, Layers, Star, Smile } from "lucide-react";
import { STACK, SOFT_SKILLS, LANGUES, LOISIRS } from "../data";
import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";

function SideLabel({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 mb-2.5">
      <span style={{ color: "#e11421" }}>{icon}</span>
      <span className="text-[8px] font-bold uppercase tracking-[0.22em]" style={{ color: "#e11421" }}>
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return <div className="h-px my-4" style={{ background: "rgba(225,29,72,0.08)" }} />;
}

export function CVSidebar() {
  return (
    <aside
      className="flex flex-col shrink-0"
      style={{ width: 200, borderRight: "1px solid rgba(0,0,0,0.07)", background: "#fafafa" }}
    >
      <div className="px-5 py-5">

        {/* Stack */}
        <SideLabel icon={<Layers className="h-3 w-3" />} label="Stack" />
        <div className="space-y-3">
          {Object.entries(STACK).map(([groupLabel, items]) => (
            <div key={groupLabel}>
              <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-1.5">
                {groupLabel}
              </p>
              <div className="flex flex-wrap gap-1">
                {items.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white"
                      style={{ border: `1px solid ${tech.color}28` }}
                    >
                      <Icon style={{ color: tech.color }} className="h-2.5 w-2.5 shrink-0" />
                      <span className="text-zinc-600 text-[8px]">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* Soft Skills */}
        <SideLabel icon={<Star className="h-3 w-3" />} label="Soft Skills" />
        <div className="flex flex-wrap gap-1">
          {SOFT_SKILLS.map((s) => (
            <Badge
              key={s}
              variant="outline"
              className="text-[7.5px] px-2 py-0 font-semibold rounded-full"
              style={{ color: "#e11421", borderColor: "rgba(225,29,72,0.25)", background: "#fff5f5" }}
            >
              {s}
            </Badge>
          ))}
        </div>

        <Divider />

        {/* Langues */}
        <SideLabel icon={<Languages className="h-3 w-3" />} label="Langues" />
        <div className="space-y-2">
          {LANGUES.map(({ flag, lang, level }) => (
            <div key={lang} className="flex items-center justify-between">
              <span className="text-zinc-600 text-[9px] font-medium">{flag} {lang}</span>
              <span
                className="text-[7.5px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(225,29,72,0.08)", color: "#e11421", border: "1px solid rgba(225,29,72,0.18)" }}
              >
                {level}
              </span>
            </div>
          ))}
        </div>

        <Divider />

        {/* Loisirs — illustrated cards */}
        <SideLabel icon={<Smile className="h-3 w-3" />} label="Loisirs" />
        <div className="flex flex-col gap-1.5">
          {LOISIRS.map(({ emoji, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-white"
              style={{ border: `1px solid ${color}22` }}
            >
              <span
                className="flex items-center justify-center w-6 h-6 rounded-md text-sm shrink-0"
                style={{ background: `${color}12` }}
              >
                {emoji}
              </span>
              <span className="text-[9px] font-medium text-zinc-600">{label}</span>
              <span
                className="ml-auto h-1.5 w-1.5 rounded-full shrink-0"
                style={{ background: color }}
              />
            </div>
          ))}
        </div>

      </div>
    </aside>
  );
}
