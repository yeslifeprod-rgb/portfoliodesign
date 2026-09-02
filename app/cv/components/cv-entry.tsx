import { BLUE_2, GRAD_H, TEXT_DARK, TEXT_LIGHT, TEXT_MID } from "./cv-data";
import { formatText } from "./cv-primitives";

export function ProfileText() {
  return (
    <>
      <strong style={{ color: TEXT_DARK }}>Développeur fullstack</strong> avec <strong style={{ color: TEXT_DARK }}>2 ans de pratique</strong> en développement web et mobile, dont 8 mois chez ALT Incubateur et <strong style={{ color: TEXT_DARK }}>Teamsfinder</strong>, un SaaS personnel en production utilisé par plus de 50 personnes. Je travaille avec <strong style={{ color: TEXT_DARK }}>React, TypeScript, Node.js, API REST, SQL, Docker et AWS EC2</strong>, de la conception des données à la mise en production.{" "}
      Déjà intégré à plusieurs équipes Agile, je porte une attention particulière aux tests, à la qualité du code et à la maintenabilité des applications. Je suis prêt à contribuer dès mon arrivée dans une équipe technique, à prendre en charge des tâches fullstack et à progresser sur l'environnement du projet.
    </>
  );
}

export function Entry({
  title,
  company,
  companyLink,
  type,
  period,
  bullets,
}: {
  title: string;
  company: string;
  companyLink?: string;
  type: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <div data-cv-entry-header style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderRadius: "4px", padding: "3px 7px", marginBottom: "5px" }}>
        <h4 style={{ fontSize: "12.5px", fontWeight: 800, color: TEXT_DARK, margin: 0 }}>
          {companyLink ? (
            <a href={companyLink} data-cv-link target="_blank" rel="noopener noreferrer" style={{ color: BLUE_2, textDecoration: "none" }}>
              {title}
            </a>
          ) : title}
        </h4>
        <span style={{ fontSize: "10.5px", fontWeight: 600, color: BLUE_2, whiteSpace: "nowrap", marginLeft: "8px", fontStyle: "italic" }}>
          {period}
        </span>
      </div>
      <div style={{ borderLeft: "2px solid #bfdbfe", paddingLeft: "9px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", alignItems: "baseline", fontSize: "10.5px", margin: "0 0 5px", fontWeight: 400 }}>
          <span style={{ color: TEXT_LIGHT, fontStyle: "italic" }}>{company}</span>
          {type && (
            <>
              <span style={{ color: "#d1d5db", marginLeft: "2px", marginRight: "2px" }}>—</span>
              <span style={{ color: TEXT_LIGHT }}>{type}</span>
            </>
          )}
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", color: TEXT_MID, fontSize: "10.5px", lineHeight: 1.55, fontWeight: 400 }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ marginBottom: "3px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <span aria-hidden style={{ width: "4px", height: "4px", borderRadius: "50%", background: GRAD_H, marginTop: "7px", flexShrink: 0 }} />
              <span style={{ flex: 1 }}>{formatText(b)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
