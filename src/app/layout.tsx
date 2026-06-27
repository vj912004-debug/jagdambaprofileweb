import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shree Jagdamba Steel Profile | Steel Plates & CNC Cutting",
  description:
    "MS & SS plate stockist, fiber laser cutting, CNC profile cutting, and steel trading. 2000-3000 ton ready stock. Pan India delivery from Vadodara, Gujarat.",
  keywords: [
    "steel plates",
    "CNC profile cutting",
    "laser cutting",
    "Vadodara",
    "Gujarat",
    "steel trading",
    "Jagdamba Steel",
  ],
  openGraph: {
    title: "Shree Jagdamba Steel Profile",
    description:
      "STRENGTH. QUALITY. TRUST. — Your steel partner for stock, cutting & dispatch.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
