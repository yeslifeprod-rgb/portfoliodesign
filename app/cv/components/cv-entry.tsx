import { BLUE_2, GRAD_H, TEXT_DARK, TEXT_LIGHT, TEXT_MID } from "./cv-data";
import { formatText } from "./cv-primitives";

export function ProfileText() {
  return (
    <>
      Développeur <strong style={{ color: TEXT_DARK }}>fullstack JavaScript / TypeScript</strong>, je conçois des interfaces <strong style={{ color: TEXT_DARK }}>React et Vue.js</strong> ainsi que des services <strong style={{ color: TEXT_DARK }}>Node.js / NestJS</strong>. Chez <strong style={{ color: TEXT_DARK }}>ALT Incubateur</strong>, j'ai développé EDUKA en équipe de 4, avec <strong style={{ color: TEXT_DARK }}>JWT</strong>, <strong style={{ color: TEXT_DARK }}>MySQL</strong>, <strong style={{ color: TEXT_DARK }}>Docker</strong>, <strong style={{ color: TEXT_DARK }}>Jest/Cypress</strong>, RGPD et recommandations <strong style={{ color: TEXT_DARK }}>OWASP</strong>.{" "}
      Sur mon temps libre, je développe <strong style={{ color: TEXT_DARK }}>Teamsfinder</strong>, un SaaS en production basé sur <strong style={{ color: TEXT_DARK }}>React, GraphQL, Supabase et Stripe</strong>. Disponible pour un <strong style={{ color: TEXT_DARK }}>CDI à Lille</strong>, je souhaite mettre cette expérience au service de projets bancaires fiables et sécurisés.
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
