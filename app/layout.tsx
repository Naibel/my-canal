import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({
  src: [
    {
      path: "../public/fonts/futura/Futura-Book-font.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/futura/Futura-Book-Italic-font.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/futura/Futura-Heavy-font.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/futura/Futura-Heavy-Italic-font.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/futura/Futura-Bold-Italic-font.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

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
