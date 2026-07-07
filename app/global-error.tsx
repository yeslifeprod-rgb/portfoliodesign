"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
        <main className="w-full max-w-lg rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold">Une erreur est survenue</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {error.message || "Le chargement de la page a echoue."}
          </p>
          <button
            onClick={reset}
            className="mt-6 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Reessayer
          </button>
        </main>
      </body>
    </html>
  );
}
