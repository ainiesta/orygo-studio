import type { Metadata } from "next";
import { Source_Sans_3, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orygo Studio — Producto digital con alma",
  description:
    "Consultora especializada en producto digital. Te ayudamos a construir, mejorar y lanzar productos digitales. Usamos la IA, pero quien piensa siempre es alguien de carne y hueso.",
  openGraph: {
    title: "Orygo Studio",
    description: "Producto digital con alma.",
    url: "https://orygo.studio",
    siteName: "Orygo Studio",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sourceSans.variable} ${cormorant.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
