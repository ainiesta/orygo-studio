import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-sans",
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
    <html lang="es" className={sourceSans.variable}>
      <body>{children}</body>
    </html>
  );
}
