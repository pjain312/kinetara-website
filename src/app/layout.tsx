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
       <link rel="canonical" href="https://kinetaraphysiotherapy.com/" />
       <meta property="og:image" content="https://kinetaraphysiotherapy.com/android-chrome-512x512.png" />
       <meta name="twitter:image" content="https://kinetaraphysiotherapy.com/android-chrome-512x512.png" />
       <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N35LGXER7J"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N35LGXER7J');
            `,
          }}
        />
       <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MW5PD2M9');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kinetara",
              "url": "https://kinetaraphysiotherapy.com",
              "logo": "https://kinetaraphysiotherapy.com/android-chrome-512x512.png",
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MW5PD2M9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        {children}
        <SideContactButtons />
        <Footer />
      </body>
    </html>
  );
}
