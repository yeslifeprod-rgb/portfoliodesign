import { Entry, ProfileText } from "./cv-entry";
import { SectionTitle } from "./cv-primitives";
import { experiences, hobbies, languages, stackATS, TEXT_DARK, TEXT_LIGHT, TEXT_MID, projets } from "./cv-data";

export function CVContent() {
  return (
    <div
      style={{
        flex: 1,
        padding: "1.2rem 3.8rem 1.05rem",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <section style={{ marginBottom: "0.85rem" }}>
        <SectionTitle>Profil</SectionTitle>
        <p style={{ fontSize: "10px", lineHeight: 1.56, color: TEXT_MID, margin: 0, textAlign: "justify", fontWeight: 400, borderLeft: "3px solid #2563eb", paddingLeft: "10px" }}>
          <ProfileText />
        </p>
      </section>

      <section style={{ marginBottom: "0.9rem" }}>
        <SectionTitle>Expérience professionnelle</SectionTitle>
        {experiences.map((e, i) => <Entry key={i} {...e} />)}
      </section>

      <section style={{ marginBottom: "0.9rem" }}>
        <SectionTitle>Projets personnels</SectionTitle>
        {projets.map((p, i) => <Entry key={i} {...p} />)}
      </section>

      <section style={{ marginBottom: "0.9rem" }}>
        <SectionTitle>Compétences techniques</SectionTitle>
        <div data-cv-skills style={{ borderRadius: "6px", padding: "8px 10px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {stackATS.map((s, i) => (
            <div key={i} style={{ fontSize: "10px", color: TEXT_MID, lineHeight: 1.42, fontWeight: 400 }}>
              <strong style={{ color: TEXT_DARK, marginRight: "5px" }}>{s.cat} :</strong>
              {s.items}
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "0.85rem" }}>
        <SectionTitle>Diplôme</SectionTitle>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
              <h4 style={{ fontSize: "12px", fontWeight: 700, color: TEXT_DARK, margin: 0 }}>
                Concepteur Développeur d'Applications web &amp; mobile
              </h4>
              <span data-cv-keyword style={{ background: "#eff6ff", color: "#1d4ed8", padding: "1px 7px", borderRadius: "999px", fontSize: "9px", fontWeight: 700, whiteSpace: "nowrap" }}>
                RNCP Niv. 6 — Bac+4
              </span>
            </div>
            <p style={{ fontSize: "10px", color: TEXT_LIGHT, margin: 0, fontStyle: "italic", fontWeight: 400, lineHeight: 1.38 }}>
              ALT/BZH, Ille-et-Vilaine (Bretagne)
            </p>
          </div>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "#2563eb", marginLeft: "12px", whiteSpace: "nowrap" }}>
            2024
          </span>
        </div>
      </section>

      <section style={{ marginBottom: 0 }}>
        <SectionTitle>Langues & loisirs</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {languages.map((item) => (
              <div key={item.label} style={{ fontSize: "10px", color: TEXT_MID, lineHeight: 1.42, fontWeight: 400 }}>
                <strong style={{ color: TEXT_DARK, marginRight: "5px" }}>{item.label} :</strong>
                {item.level}
              </div>
            ))}
          </div>
          <div style={{ fontSize: "10px", color: TEXT_MID, lineHeight: 1.42, fontWeight: 400 }}>
            <strong style={{ color: TEXT_DARK, marginRight: "5px" }}>Loisirs :</strong>
            {hobbies.join(" - ")}
          </div>
        </div>
      </section>
    </div>
  );
}
