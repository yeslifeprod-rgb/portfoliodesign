import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions légales — Benhouss",
  description:
    "Mentions légales du site benhouss.site : éditeur, hébergeur, propriété intellectuelle et données personnelles.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.benhouss.site/mentions-legales" },
};

/**
 * ⚠️ À COMPLÉTER AVANT MISE EN LIGNE.
 *
 * Les valeurs marquées « À COMPLÉTER » sont des informations juridiques
 * que seul l'éditeur du site détient. Elles ne peuvent pas être devinées :
 * un SIREN ou une adresse inexacts sur une page de mentions légales sont
 * pires que leur absence.
 *
 * L'article 6-III de la LCEN impose, pour un site professionnel :
 * nom, adresse, e-mail, statut et numéro d'immatriculation (RCS/SIREN),
 * numéro de TVA le cas échéant, et l'identité de l'hébergeur.
 */
const TODO = "À COMPLÉTER";

const sections = [
  {
    title: "Éditeur du site",
    rows: [
      ["Nom", "Benhouss"],
      ["Statut juridique", TODO],
      ["Adresse", TODO],
      ["SIREN / SIRET", TODO],
      ["Numéro de TVA intracommunautaire", `${TODO} (ou « non applicable »)`],
      ["Contact", TODO],
      ["Directeur de la publication", "Benhouss"],
    ],
  },
  {
    title: "Hébergeur",
    rows: [
      ["Société", "Vercel Inc."],
      ["Adresse", "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis"],
      ["Site", "vercel.com"],
    ],
  },
];

export default function MentionsLegales() {
  return (
    <main className="px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-content">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-caption text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Retour au portfolio
        </Link>

        <h1 className="mt-6 text-h1 text-foreground">Mentions légales</h1>

        {sections.map((section) => (
          <section key={section.title} className="mt-10">
            <h2 className="text-h3 text-foreground">{section.title}</h2>
            <dl className="mt-4 divide-y divide-border border-y border-border">
              {section.rows.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-4"
                >
                  <dt className="text-caption font-medium text-foreground">
                    {label}
                  </dt>
                  <dd
                    className={
                      value.startsWith(TODO)
                        ? "text-caption font-medium text-destructive"
                        : "text-caption text-muted-foreground"
                    }
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}

        <section className="mt-10">
          <h2 className="text-h3 text-foreground">Propriété intellectuelle</h2>
          <p className="mt-3 text-pretty text-small text-muted-foreground">
            L&apos;ensemble des contenus de ce site — textes, visuels, code et
            captures de projets — est protégé par le droit d&apos;auteur. Toute
            reproduction sans autorisation préalable est interdite. Les marques
            et logos des technologies et des clients cités appartiennent à leurs
            détenteurs respectifs.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-h3 text-foreground">Données personnelles</h2>
          <p className="mt-3 text-pretty text-small text-muted-foreground">
            Les informations transmises via le formulaire de contact (nom,
            adresse e-mail, message) servent uniquement à répondre à votre
            demande. Elles ne sont ni revendues ni transmises à des tiers.
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification et de suppression, exerçable via le formulaire de
            contact.
          </p>
          <p className="mt-3 text-pretty text-small text-muted-foreground">
            La mesure d&apos;audience est assurée par Vercel Analytics, qui
            n&apos;utilise ni cookie ni identifiant persistant et ne collecte
            aucune donnée personnelle. Aucun bandeau de consentement n&apos;est
            donc nécessaire.
          </p>
        </section>
      </div>
    </main>
  );
}
