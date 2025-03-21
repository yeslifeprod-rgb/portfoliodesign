import "./globals.css";
import { LangProvider } from "@/context/LangContext";

export const metadata = {
  title: "Portfolio",
  description: "Développeur Fullstack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
