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


// Exemple avec app/layout.tsx
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});
