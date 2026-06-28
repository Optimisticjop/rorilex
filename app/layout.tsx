import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    default: "Rorilex Technical Solutions Ltd",
    template: "%s | Rorilex",
  },

  icons: {
  icon: "/lex.png",
  shortcut: "/lex.png",
  apple: "/lex.png",
},

  description:
    "Engineering, procurement, industrial maintenance and technical support services in Ghana.",

  keywords: [
    "Industrial Services Ghana",
    "Engineering Ghana",
    "Procurement (PPE's)",
    "Industrial Maintenance",
    "Technical Support",
    "Rorilex",
  ],

  openGraph: {
    title: "Rorilex Technical Solutions Ltd",
    description: "Industrial engineering and technical solutions provider.",
    images: ["/og-image.jpg"],
  },

  twitter: {
    card: "summary_large_image",
  },
};