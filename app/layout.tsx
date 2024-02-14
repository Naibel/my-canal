import type { Metadata } from "next";

import NavBar from "~/components/NavBar/NavBar";

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
      <body className={futura.className}>
        <NavBar />
        {children}
        <footer className="bg-black px-5 py-3 uppercase font-semibold italic">
          Made by Dorian Belhaj - 2024
        </footer>
      </body>
    </html>
  );
}
