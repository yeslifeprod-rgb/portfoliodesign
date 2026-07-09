import { BLUE_2, GRAD_H, TEXT_DARK, TEXT_LIGHT, TEXT_MID } from "./cv-data";
import { formatText } from "./cv-primitives";

export function ProfileText() {
  return (
    <>
      Développeur <strong style={{ color: TEXT_DARK }}>Fullstack</strong> <strong style={{ color: TEXT_DARK }}>Node.js</strong> / <strong style={{ color: TEXT_DARK }}>Vue.js</strong>, engagé sur le <strong style={{ color: TEXT_DARK }}>Build</strong> et du <strong style={{ color: TEXT_DARK }}>Run</strong> de <strong style={{ color: TEXT_DARK }}>produits digitaux</strong>, de <strong style={{ color: TEXT_DARK }}>front</strong> et de <strong style={{ color: TEXT_DARK }}>back</strong>.{" "}
      Au sein d'une <strong style={{ color: TEXT_DARK }}>équipe agile pluridisciplinaire</strong> en <strong style={{ color: TEXT_DARK }}>feature team</strong>, j'ai conçu et livré des <strong style={{ color: TEXT_DARK }}>API</strong> REST avec <strong style={{ color: TEXT_DARK }}>Node.js</strong>, <strong style={{ color: TEXT_DARK }}>NestJS</strong> et <strong style={{ color: TEXT_DARK }}>Prisma</strong>, garant de la qualité via <strong style={{ color: TEXT_DARK }}>Jest</strong> et <strong style={{ color: TEXT_DARK }}>Cypress</strong>.{" "}
      Rigoureux sur la <strong style={{ color: TEXT_DARK }}>documentation</strong>, la <strong style={{ color: TEXT_DARK }}>Code review</strong>, l'<strong style={{ color: TEXT_DARK }}>observabilité</strong> et le <strong style={{ color: TEXT_DARK }}>monitoring</strong>, j'interviens de bout en bout du développement jusqu'à la mise en production.{" "}
      Fort d'une <strong style={{ color: TEXT_DARK }}>expérience technique réussie</strong> intégrant une réelle <strong style={{ color: TEXT_DARK }}>dimension fonctionnelle</strong>, je fais preuve de <strong style={{ color: TEXT_DARK }}>capacité d'écoute</strong>, de <strong style={{ color: TEXT_DARK }}>force de proposition</strong> et d'<strong style={{ color: TEXT_DARK }}>ouverture d'esprit</strong>, avec l'envie de <strong style={{ color: TEXT_DARK }}>transmettre les connaissances</strong> et d'être <strong style={{ color: TEXT_DARK }}>initiateur de sujets techniques novateurs</strong>.{" "}
      Recherche un CDI <strong style={{ color: TEXT_DARK }}>Développeur Fullstack Node.js / Vue.js</strong>.
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
    <div style={{ marginBottom: "9px" }}>
      <div data-cv-entry-header style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderRadius: "4px", padding: "3px 7px", marginBottom: "4px" }}>
        <h4 style={{ fontSize: "12px", fontWeight: 800, color: TEXT_DARK, margin: 0 }}>{title}</h4>
        <span style={{ fontSize: "10px", fontWeight: 600, color: BLUE_2, whiteSpace: "nowrap", marginLeft: "8px" }}>
          {period}
        </span>
      </div>
      <div style={{ borderLeft: "2px solid #bfdbfe", paddingLeft: "8px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", alignItems: "baseline", fontSize: "10px", margin: "0 0 4px", fontWeight: 400 }}>
          <span style={{ color: TEXT_LIGHT, fontStyle: "italic" }}>{company}</span>
          {companyLink && (
            <>
              <span style={{ color: TEXT_LIGHT }}>-</span>
              <a href={companyLink} data-cv-link target="_blank" rel="noopener noreferrer" style={{ color: BLUE_2, textDecoration: "underline", fontWeight: 400 }}>
                {companyLink}
              </a>
            </>
          )}
          {type && (
            <>
              <span style={{ color: "#d1d5db", marginLeft: "2px", marginRight: "2px" }}>—</span>
              <span style={{ color: TEXT_LIGHT }}>{type}</span>
            </>
          )}
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", color: TEXT_MID, fontSize: "10px", lineHeight: 1.52, fontWeight: 400 }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ marginBottom: "2px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <span aria-hidden style={{ width: "4px", height: "4px", borderRadius: "50%", background: GRAD_H, marginTop: "6.5px", flexShrink: 0 }} />
              <span style={{ flex: 1 }}>{formatText(b)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
