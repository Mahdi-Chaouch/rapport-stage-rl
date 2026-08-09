import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RALPH LAUREN — Rapport de Stage Interactif | Direction Merchandising",
  description: "Rapport de stage d'exception pour Ralph Lauren Flagship Saint-Germain. Éditorial interactif de mode, analyse stratégique, carnet de bord et retour d'expérience.",
  keywords: ["Ralph Lauren", "Rapport de stage", "Luxury Fashion", "Visual Merchandising", "Fashion Editorial", "Next.js"],
  authors: [{ name: "Éléonore de Saint-Germain" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="bg-[#050505] text-[#F4F4F5] font-sans antialiased min-h-screen relative bg-grain selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
