import type { Metadata } from "next";

import futura from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "My Canal",
  description: "Tous vos films et séries préférés sont sur myCanal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={futura.className}>{children}</body>
    </html>
  );
}
