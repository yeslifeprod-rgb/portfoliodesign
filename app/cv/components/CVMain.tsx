import { GraduationCap, Briefcase, User, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CV_EXPERIENCES, CV_FORMATIONS } from "../data";

function SectionTitle({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 mb-3">
      <span style={{ color: "#e11421" }}>{icon}</span>
      <h2
        className="text-[9px] font-bold uppercase tracking-[0.28em] shrink-0"
        style={{ color: "#e11421" }}
      >
        {label}
      </h2>
      <div className="flex-1 h-px" style={{ background: "rgba(225,29,72,0.12)" }} />
    </div>
  );
}

export function CVMain() {
  return (
    <main className="flex flex-col flex-1 min-w-0 px-7 py-5 gap-5">

      {/* À propos */}
      <section>
        <SectionTitle icon={<User className="h-3 w-3" />} label="À propos" />
        <Card
          className="shadow-none rounded-lg border-l-2"
          style={{ borderColor: "rgba(0,0,0,0.07)", borderLeftColor: "#e11421" }}
        >
          <CardContent className="px-4 py-3">
            <p className="text-[10.5px] text-zinc-600 leading-[1.8]" style={{ fontFamily: "var(--font-serif)" }}>
              Diplômé Concepteur d&apos;Applications Web &amp; Mobile (Bac+4), j&apos;ai
              conçu et livré des applications de bout en bout — architecture back-end,
              interfaces React et mobile Ionic. Formé en contexte startup et SaaS,
              je recherche un CDI pour construire des produits qui créent une vraie traction.
            </p>
          </CardContent>
        </Card>
      </section>
      
      {/* Compétences — Ajouté à la demande */}
      <section>
        <SectionTitle icon={<Layers className="h-3 w-3" />} label="Compétences Clés" />
        <div className="grid grid-cols-2 gap-3">
          <Card className="shadow-none rounded-lg border-l-2" style={{ borderColor: "rgba(0,0,0,0.07)", borderLeftColor: "#e11421" }}>
            <CardContent className="px-3 py-2">
              <h3 className="text-[8px] font-bold uppercase tracking-wider text-zinc-400 mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline" className="text-[7.5px] px-1.5 py-0 border-emerald-100 bg-emerald-50/30 text-emerald-700">Nuxt</Badge>
                <Badge variant="outline" className="text-[7.5px] px-1.5 py-0 border-emerald-100 bg-emerald-50/30 text-emerald-700">Vue.js</Badge>
                <Badge variant="outline" className="text-[7.5px] px-1.5 py-0 border-zinc-100 bg-zinc-50/50 text-zinc-600">Next.js</Badge>
                <Badge variant="outline" className="text-[7.5px] px-1.5 py-0 border-zinc-100 bg-zinc-50/50 text-zinc-600">React</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none rounded-lg border-l-2" style={{ borderColor: "rgba(0,0,0,0.07)", borderLeftColor: "#e11421" }}>
            <CardContent className="px-3 py-2">
              <h3 className="text-[8px] font-bold uppercase tracking-wider text-zinc-400 mb-2">Backend & Conception</h3>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline" className="text-[7.5px] px-1.5 py-0 border-blue-100 bg-blue-50/30 text-blue-700">UML</Badge>
                <Badge variant="outline" className="text-[7.5px] px-1.5 py-0 border-red-100 bg-red-50/30 text-red-700">Méthode Merise</Badge>
                <Badge variant="outline" className="text-[7.5px] px-1.5 py-0 border-zinc-100 bg-zinc-50/50 text-zinc-600">Node.js</Badge>
                <Badge variant="outline" className="text-[7.5px] px-1.5 py-0 border-zinc-100 bg-zinc-50/50 text-zinc-600">Prisma</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Expériences */}
      <section>
        <SectionTitle icon={<Briefcase className="h-3 w-3" />} label="Expériences" />
        <div className="flex flex-col gap-2">
          {CV_EXPERIENCES.map((exp, i) => (
            <Card
              key={exp.company}
              className="shadow-none rounded-lg"
              style={{
                border: `1px solid ${i === 0 ? "rgba(225,29,72,0.2)" : "rgba(0,0,0,0.07)"}`,
              }}
            >
              <CardContent className="px-4 py-3">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <div className="flex items-center gap-1.5">
                    {i === 0 && (
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#e11421" }}
                      />
                    )}
                    <span
                      className="text-[11.5px] text-zinc-900 leading-snug"
                      style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                    >
                      {exp.company}
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-[7.5px] px-1.5 py-0 shrink-0 rounded font-semibold"
                    style={
                      i === 0
                        ? { color: "#e11421", borderColor: "rgba(225,29,72,0.3)", background: "#fff5f5" }
                        : { color: "#71717a", borderColor: "rgba(0,0,0,0.1)", background: "transparent" }
                    }
                  >
                    {exp.year}
                  </Badge>
                </div>

                <p className="text-[8.5px] text-zinc-400 italic mb-1.5">{exp.role}</p>

                <ul className="space-y-0.5">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-1.5 items-start text-[9px] text-zinc-600 leading-snug">
                      <span
                        className="mt-[4px] shrink-0 w-1 h-1 rounded-full"
                        style={{ background: i === 0 ? "#e11421" : "#d1d5db" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Formation */}
      <section>
        <SectionTitle icon={<GraduationCap className="h-3 w-3" />} label="Formation" />
        <div className="flex flex-col gap-2">
          {CV_FORMATIONS.map((f) => (
            <Card
              key={f.school}
              className="shadow-none rounded-lg"
              style={{ border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <CardContent className="px-4 py-3 flex items-start gap-3">
                <div
                  className="shrink-0 p-1.5 rounded-md mt-0.5"
                  style={{ background: "rgba(225,29,72,0.07)", border: "1px solid rgba(225,29,72,0.15)" }}
                >
                  <GraduationCap className="h-3 w-3" style={{ color: "#e11421" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <span
                      className="text-[11px] text-zinc-900"
                      style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                    >
                      {f.school}
                    </span>
                    <Badge
                      variant="outline"
                      className="text-[7.5px] px-1.5 py-0 rounded font-semibold text-zinc-500 border-zinc-200"
                    >
                      {f.year}
                    </Badge>
                  </div>
                  <p className="text-[9.5px] text-zinc-600 leading-snug">{f.diploma}</p>
                  <p className="text-[8.5px] text-zinc-400 mt-0.5">{f.place}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}
