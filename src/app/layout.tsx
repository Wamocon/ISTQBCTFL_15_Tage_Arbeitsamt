import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WAMOCON Academy | ISTQB® Zertifizierung in 15 Tagen – 100% gefördert",
  description:
    "Der sicherste Weg in die IT. Werden Sie in 15 Tagen zum ISTQB® zertifizierten Softwaretester – mit dem DiTeLe Praxis-Simulator. 100% gefördert durch Bildungsgutschein. Über 25 Jahre Expertise.",
  keywords: [
    "ISTQB Zertifizierung",
    "Softwaretester Ausbildung",
    "Bildungsgutschein",
    "Umschulung IT",
    "AZAV zertifiziert",
    "WAMOCON Academy",
    "Software Testing",
    "Qualitätssicherung",
  ],
  openGraph: {
    title: "WAMOCON Academy | ISTQB® in 15 Tagen – 100% gefördert",
    description:
      "Der sicherste Weg in die IT. ISTQB® Zertifizierung mit Praxis-Simulator. 0€ Eigenanteil dank Bildungsgutschein.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
