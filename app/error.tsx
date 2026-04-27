"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold text-foreground mb-4">
        Une erreur est survenue
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        {error.message || "Quelque chose s'est mal passé. Veuillez réessayer."}
      </p>
      <button
        onClick={reset}
        className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Réessayer
      </button>
    </main>
  );
}
