import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Développeur Ionic à Lille — Benhouss | Application Mobile Cross-Platform",
  description:
    "Développeur Ionic à Lille, spécialisé dans la création d'applications mobiles cross-platform (iOS & Android) avec Ionic et React. Disponible en freelance et CDI.",
  keywords: [
    "développeur ionic lille",
    "développeur ionic",
    "application mobile ionic lille",
    "application mobile cross-platform",
    "développeur mobile lille",
    "ionic react lille",
    "développeur application mobile freelance",
    "ionic capacitor",
  ],
  alternates: { canonical: "https://www.benhouss.site/services/ionic-lille" },
  openGraph: {
    title: "Développeur Ionic à Lille — Applications Mobiles Cross-Platform",
    description:
      "Applications mobiles iOS et Android avec Ionic et React. Basé à Lille, freelance & CDI.",
    url: "https://www.benhouss.site/services/ionic-lille",
  },
};

export default function IonicLillePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <nav className="text-sm text-muted-foreground mb-10">
          <Link href="/" className="hover:text-foreground transition-colors">Portfolio</Link>
          <span className="mx-2">/</span>
          <span>Développeur Ionic Lille</span>
        </nav>

        <h1 className="text-4xl font-black tracking-tight mb-4">
          Développeur Ionic à Lille
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Création d'<strong className="text-foreground">applications mobiles cross-platform</strong>{" "}
          (iOS & Android) avec <strong className="text-foreground">Ionic</strong> et React —
          basé à Lille, disponible en freelance et CDI.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Développement mobile Ionic</h2>
          <div className="grid gap-4">
            {[
              {
                title: "Applications iOS & Android avec Ionic",
                desc: "Une seule base de code pour iOS et Android. Ionic + Capacitor pour accéder aux APIs natives (caméra, GPS, notifications push, stockage).",
              },
              {
                title: "Ionic + React",
                desc: "Combinaison d'Ionic avec React pour des interfaces mobiles performantes et familières aux développeurs web.",
              },
              {
                title: "Intégration backend",
                desc: "Connexion à des APIs REST (NestJS, Node.js), authentification JWT, gestion des états avec React Query ou Zustand.",
              },
              {
                title: "Publication App Store & Google Play",
                desc: "Build, signature et publication des applications sur les stores. Xcode pour iOS, Android Studio pour Android.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border bg-card/60 p-5"
                style={{ borderColor: "color-mix(in srgb, var(--border) 60%, transparent)" }}>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stack mobile</h2>
          <div className="flex flex-wrap gap-2">
            {["Ionic", "Capacitor", "React", "TypeScript", "Xcode", "Android Studio", "NestJS", "JWT"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">{t}</span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Expérience mobile à Lille</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              J'ai développé le front-end mobile d'une{" "}
              <strong className="text-foreground">application de gestion extra-scolaire open source</strong>{" "}
              avec Ionic et React à l'ALT Incubateur (Lille, 2023-2024), en méthode Agile Scrum.
            </p>
            <p>
              J'ai également travaillé sur une application iOS avec Flutter et intégration de
              <strong className="text-foreground"> RevenueCat</strong> pour la gestion des
              abonnements in-app lors de ma mission chez Num4 (Plaine Images, Roubaix).
            </p>
            <p>
              Basé à <strong className="text-foreground">Lille</strong>, je suis disponible pour
              des missions freelance en développement mobile Ionic dans toute la métropole lilloise
              et en remote.
            </p>
          </div>
        </section>

        <div className="flex gap-4 flex-wrap">
          <Link href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
            style={{ background: "var(--primary)", boxShadow: "0 4px 20px color-mix(in srgb, var(--primary) 30%, transparent)" }}>
            Me contacter
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-secondary text-secondary-foreground">
            Voir mon portfolio
          </Link>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Portfolio", item: "https://www.benhouss.site" },
            { "@type": "ListItem", position: 2, name: "Développeur Ionic Lille", item: "https://www.benhouss.site/services/ionic-lille" },
          ],
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Développeur Ionic à Lille — Application Mobile Cross-Platform",
            provider: { "@type": "Person", name: "Benhouss", url: "https://www.benhouss.site" },
            areaServed: { "@type": "City", name: "Lille" },
            description: "Développement d'applications mobiles cross-platform iOS et Android avec Ionic, Capacitor et React.",
            serviceType: "Développement Mobile Ionic",
          }),
        }} />
      </div>
    </main>
  );
}
