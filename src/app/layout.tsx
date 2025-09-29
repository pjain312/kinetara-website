import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SideContactButtons } from "@/components/hero-section";

export const metadata: Metadata = {
  title: "Kinetara",
  description: "Kinetara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <Header />
        {children}
        <SideContactButtons />
        <Footer />
      </body>
    </html>
  );
}
