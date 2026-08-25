import type { Metadata } from "next";

/**
 * Variante de CV destinée à une candidature précise.
 *
 * Hors index — elle n'a pas vocation à être trouvée par recherche — et
 * canonical propre : sans cela elle héritait celui de `app/cv/layout.tsx`
 * et se déclarait comme un doublon de la page CV principale.
 *
 * Les métadonnées vivent ici et non dans page.tsx, celle-ci étant un
 * composant client.
 */
export const metadata: Metadata = {
  title: "CV — Technicien Helpdesk",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.benhouss.site/cv/toyota-helpdesk" },
};

export default function ToyotaHelpdeskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
