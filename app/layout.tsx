import type { Metadata } from "next";

import Footer from "~/components/Footer/Footer";
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
        <main className="flex flex-1 flex-col p-5 gap-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
