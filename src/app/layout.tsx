import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/react";
// @ts-ignore: CSS import types may not be declared in this project setup
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Yuuma Skincare", template: "%s | Yuuma Skincare" },
  description: "Premium Indonesian skincare born from clinical expertise. Your Skin, Your Story.",
  openGraph: {
    siteName: "Yuuma Skincare",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${cormorant.variable} ${jost.variable}`}>
      {/* PERBAIKAN 3: Memindahkan class antialiased ke body untuk font yang lebih clean/halus */}
      <body className="flex flex-col min-h-screen antialiased">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}