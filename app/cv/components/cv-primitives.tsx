import type React from "react";
import { BLUE_1, BLUE_2, BLUE_3, GRAD_H, TEXT_DARK } from "./cv-data";

export function Divider() {
  return (
    <div
      aria-hidden
      style={{
        height: "3px",
        background: `linear-gradient(to right, ${BLUE_1}, ${BLUE_2} 55%, ${BLUE_3})`,
        borderRadius: "999px",
        margin: "6px 0 10px",
      }}
    />
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3
        style={{
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          margin: 0,
          fontFamily: "var(--font-sans)",
          color: BLUE_2,
        }}
      >
        {children}
      </h3>
      <Divider />
    </>
  );
}

export function formatText(text: string) {
  const parts = text.split("**");
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return <strong key={i} style={{ color: TEXT_DARK, fontWeight: 700 }}>{part}</strong>;
    }
    const subParts = part.split("*");
    return subParts.map((subPart, j) => {
      if (j % 2 === 1) {
        return <em key={j} style={{ fontStyle: "italic" }}>{subPart}</em>;
      }
      return subPart;
    });
  });
}

export { GRAD_H };

