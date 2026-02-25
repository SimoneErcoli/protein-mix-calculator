import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MixMaster Pro | Calcolatore Proteico Mix e Boilies",
  description: "Calcolatore avanzato per il valore proteico dei tuoi mix da pesca. Gestisci ingredienti, digeribilità e proprietà leganti in tempo reale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
}
