import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Gaegu } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const gaegu = Gaegu({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gaegu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Felipe Min",
  description: "Felipe Min",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${gaegu.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          <div className="container-width py-14 space-y-20">
            {children}
          </div>
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
