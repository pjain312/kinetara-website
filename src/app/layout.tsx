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
  icons: {
    icon: "/favicon.ico",            // your favicon (ICO or PNG)
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",  // for Apple devices
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  other: {
    "facebook-domain-verification": "bmsrzhokqm7u2pajz67c2i0xsqqu17",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kinetara",
              "url": "https://www.kinetaraphysiotherapy.com",
              "logo": "https://www.kinetaraphysiotherapy.com/android-chrome.png",
              "sameAs": [
                    "https://www.facebook.com/kinetaraphysiotherapy/",
                    "https://www.instagram.com/kinetara.physiotherapy/",
              ]
            })
          }}
        />
      </head>
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
