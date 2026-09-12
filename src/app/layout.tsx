import type { Metadata } from "next";
import { Jost, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const jost = Jost({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://threefifteenaspen.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ThreeFifteen | 315 E. Hyman Ave, Aspen",
    template: "%s | ThreeFifteen Aspen",
  },
  description:
    "News. Art. Coffee. Food. Vintage. Tattoos. Ideas. Community. ThreeFifteen is a reactivated downtown Aspen building at 315 E. Hyman Ave, home to Aspen Daily News, Aspen Arts Club, Eddy's Marketplace, Mischief Vintage, Tattoo Aspen, and The Grove.",
  keywords: [
    "ThreeFifteen Aspen",
    "315 E Hyman Ave",
    "Aspen Daily News",
    "Aspen Arts Club",
    "Eddy's Marketplace",
    "Mischief Vintage",
    "Tattoo Aspen",
    "Aspen event space",
    "downtown Aspen Colorado",
  ],
  openGraph: {
    title: "ThreeFifteen | 315 E. Hyman Ave, Aspen",
    description:
      "News. Art. Coffee. Food. Vintage. Tattoos. Ideas. Community. A newly activated community hub in downtown Aspen.",
    url: siteUrl,
    siteName: "ThreeFifteen Aspen",
    images: ["/images/building-exterior-snow.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThreeFifteen | 315 E. Hyman Ave, Aspen",
    description: "News. Art. Coffee. Food. Vintage. Tattoos. Ideas. Community.",
    images: ["/images/building-exterior-snow.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-black">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
