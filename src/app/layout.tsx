import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bsananyaconstruction.com"),
  title: "Bsananya Construction Pvt. Ltd. | Construction Company in Ranchi",
  description:
    "Premium residential, commercial, renovation, architectural planning, and civil engineering construction services in Ranchi, Jharkhand.",
  keywords: [
    "Bsananya Construction",
    "construction company Ranchi",
    "residential construction Jharkhand",
    "commercial construction Ranchi",
    "renovation contractor Ranchi"
  ],
  openGraph: {
    title: "Bsananya Construction Pvt. Ltd.",
    description: "Building Dreams. Creating Trust.",
    images: ["/cover-photo.jpg"],
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
