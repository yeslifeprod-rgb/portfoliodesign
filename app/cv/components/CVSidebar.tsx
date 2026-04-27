import { Heart, Languages, Layers, Star } from "lucide-react";
import { STACK, SOFT_SKILLS, LANGUES, LOISIRS } from "../data";
import type { ReactNode } from "react";

function SideLabel({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-red-500 shrink-0">{icon}</span>
      <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-zinc-400">{label}</span>
    </div>
  );
}

export function CVSidebar() {
  return (
    <aside
      className="flex flex-col shrink-0"
      style={{ width: 210, borderRight: "1px solid rgba(0,0,0,0.07)" }}
    >
      {/* Stack */}
      <div className="px-5 py-5" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <SideLabel icon={<Layers className="h-3 w-3" />} label="Stack" />
        <div className="space-y-3.5">
          {Object.entries(STACK).map(([groupLabel, items]) => (
            <div key={groupLabel}>
              <p className="text-[7.5px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-1.5">
                {groupLabel}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1 px-2 py-0.5 rounded"
                      style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(0,0,0,0.09)" }}
                    >
                      <Icon style={{ color: tech.color }} className="h-2.5 w-2.5 shrink-0" />
                      <span className="text-zinc-700 text-[9px]">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="px-5 py-5" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <SideLabel icon={<Star className="h-3 w-3" />} label="Soft Skills" />
        <div className="flex flex-wrap gap-1.5">
          {SOFT_SKILLS.map((s) => (
            <span
              key={s}
              className="text-zinc-600 text-[9px] px-2 py-0.5 rounded-full"
              style={{ background: "rgba(225,29,72,0.07)", border: "1px solid rgba(225,29,72,0.18)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Langues */}
      <div className="px-5 py-5" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <SideLabel icon={<Languages className="h-3 w-3" />} label="Langues" />
        <div className="space-y-2">
          {LANGUES.map(({ flag, lang, level }) => (
            <div key={lang} className="flex items-center justify-between">
              <span className="text-zinc-700 text-[9.5px] font-medium">{flag} {lang}</span>
              <span
                className="text-[8.5px] px-1.5 py-0.5 rounded font-semibold"
                style={{ background: "rgba(225,29,72,0.1)", color: "#e11d48", border: "1px solid rgba(225,29,72,0.2)" }}
              >
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Loisirs */}
      <div className="px-5 py-5">
        <SideLabel icon={<Heart className="h-3 w-3" />} label="Loisirs" />
        <div className="space-y-1.5">
          {LOISIRS.map((l) => (
            <div key={l} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full shrink-0" style={{ background: "#e11d48" }} />
              <span className="text-zinc-500 text-[9.5px]">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
