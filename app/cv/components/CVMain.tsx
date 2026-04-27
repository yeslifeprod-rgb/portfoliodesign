import { GraduationCap } from "lucide-react";
import { CV_EXPERIENCES, CV_FORMATIONS } from "../data";

function MainHeading({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="inline-block h-[2px] w-5 rounded-full shrink-0" style={{ background: "#e11d48" }} />
      <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 shrink-0">{label}</h2>
      <span className="flex-1 h-px" style={{ background: "rgba(225,29,72,0.12)" }} />
    </div>
  );
}

export function CVMain() {
  return (
    <main className="flex flex-col flex-1 min-w-0 px-8 py-6 space-y-6">

      {/* À propos */}
      <section>
        <MainHeading label="À propos" />
        <div
          className="rounded-lg px-4 py-3.5"
          style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(0,0,0,0.07)", borderLeft: "3px solid #e11d48" }}
        >
          <p
            className="text-[11px] text-zinc-600 leading-[1.85]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Diplômé Concepteur d&apos;Applications Web &amp; Mobile (Bac+4), j&apos;ai
            conçu et livré des applications de bout en bout — architecture back-end,
            interfaces React et mobile Ionic. Formé en contexte startup et SaaS,
            je recherche un CDI pour construire des produits qui créent une vraie traction.
          </p>
        </div>
      </section>

      {/* Expériences */}
      <section>
        <MainHeading label="Expériences" />
        <div className="space-y-3">
          {CV_EXPERIENCES.map((exp, i) => (
            <div key={exp.company} className="flex gap-3">
              <div className="flex flex-col items-center shrink-0" style={{ width: 18 }}>
                <div
                  className="rounded-full shrink-0"
                  style={{
                    width: 9, height: 9, marginTop: 5,
                    background: i === 0 ? "#e11d48" : "#fff",
                    border: "2px solid #e11d48",
                    boxShadow: i === 0 ? "0 0 0 3px rgba(225,29,72,0.12)" : "none",
                  }}
                />
                {i < CV_EXPERIENCES.length - 1 && (
                  <div
                    className="flex-1 mt-1"
                    style={{
                      width: 1, minHeight: 28,
                      background: "linear-gradient(180deg, rgba(225,29,72,0.35) 0%, rgba(225,29,72,0.04) 100%)",
                    }}
                  />
                )}
              </div>
              <div
                className="flex-1 rounded-lg px-4 py-3 mb-0.5"
                style={{
                  background: i === 0 ? "rgba(225,29,72,0.03)" : "rgba(255,255,255,0.7)",
                  border: `1px solid ${i === 0 ? "rgba(225,29,72,0.15)" : "rgba(0,0,0,0.07)"}`,
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <span
                    className="text-[12.5px] text-zinc-900"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                  >
                    {exp.company}
                  </span>
                  <span
                    className="text-[8.5px] font-bold px-2 py-0.5 rounded shrink-0"
                    style={{ background: "rgba(225,29,72,0.08)", color: "#e11d48", border: "1px solid rgba(225,29,72,0.18)" }}
                  >
                    {exp.year}
                  </span>
                </div>
                <p className="text-[9px] text-zinc-400 italic mb-1.5">{exp.role}</p>
                <ul className="space-y-0.5">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-1.5 text-[9.5px] text-zinc-600 leading-snug">
                      <span className="mt-0.5 text-[#e11d48] font-bold shrink-0">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formation */}
      <section>
        <MainHeading label="Formation" />
        <div className="space-y-2.5">
          {CV_FORMATIONS.map((f) => (
            <div
              key={f.school}
              className="flex gap-3 items-start rounded-lg px-4 py-3"
              style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div
                className="shrink-0 flex items-center justify-center rounded mt-0.5"
                style={{ background: "rgba(225,29,72,0.08)", border: "1px solid rgba(225,29,72,0.18)", padding: "3px 7px" }}
              >
                <GraduationCap className="h-3 w-3 shrink-0" style={{ color: "#e11d48" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <span
                    className="text-[11.5px] text-zinc-900"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                  >
                    {f.school}
                  </span>
                  <span
                    className="text-[8px] font-semibold px-1.5 py-0.5 rounded"
                    style={{ background: "rgba(225,29,72,0.08)", color: "#e11d48" }}
                  >
                    {f.year}
                  </span>
                </div>
                <p className="text-[10px] text-zinc-600">{f.diploma}</p>
                <p className="text-[9px] text-zinc-400 mt-0.5">{f.place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
