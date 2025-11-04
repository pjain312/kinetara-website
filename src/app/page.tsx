import { HeroSection } from "@/components/hero-section";
import { OfferingsSection } from "@/components/offerings-section";
import { RecoverySection } from "@/components/recovery-section";
import { SpecialitiesSection } from "@/components/specialities-section";
import { VettedExpertsSection } from "@/components/vetted-experts-section";
import { AdvancedPhysiotherapyClinicsSection } from "@/components/advanced-physiotherapy-clinics-section";
import { WhatWeTreatSection } from "@/components/what-we-treat-section";
import FAQSection from "@/components/faq-section";

export const metadata = {
  title: "Kinetara Physiotherapy Clinic in CR Park, near Greater Kailash (GK) South Delhi | Expert Physiotherapists",
  description:
    "Visit Kinetara Physiotherapy Clinic in CR Park, near Greater Kailash (GK) South Delhi for expert care in pain management, sports injury rehab, spine therapy, pelvic floor and post-surgery recovery.",
  keywords: [
    "physiotherapy clinic CR Park",
    "physiotherapy clinic in GK1",
    "physiotherapy clinic in GK2",
    "physiotherapy clinic in Alaknanda",
    "physiotherapy clinic in Govindpuri",
    "South Delhi physiotherapist",
    "sports injury rehab Delhi",
    "pain management physiotherapy",
    "back pain treatment CR Park",
  ],
  openGraph: {
    title: "Kinetara Physiotherapy Clinic - CR Park, near Greater Kailash (GK) , South Delhi",
    description:
      "Trusted physiotherapy clinic in CR Park, near Greater Kailash (GK), South Delhi offering expert care for pain relief, rehabilitation and movement restoration.",
    url: "https://kinetaraphysiotherapy.com",
    siteName: "Kinetara Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://kinetaraphysiotherapy.com/",
  },
};

export default function HomePage() {
  return (
    <>
     <head>
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physiotherapy",
              "name": "Kinetara Physiotherapy Clinic",
              "image": "https://kinetaraphysiotherapy.com/android-chrome-512x512.png",
              "@id": "https://kinetaraphysiotherapy.com",
              "url": "https://kinetaraphysiotherapy.com",
              "telephone": "+91-8800974721",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "D-584, LGF, CR Park, Greater Kailash (GK)",
                "addressLocality": "CR Park, Greater Kailash (GK), South Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110019",
                "addressCountry": "IN",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.538845,
                "longitude": 77.253804,
              },
              "areaServed": {
                "@type": "Place",
                "name": "South Delhi, CR Park, Greater Kailash (GK1, GK2)"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "sameAs": [
                "https://www.instagram.com/kinetara.physiotherapy/",
                "https://www.facebook.com/kinetaraphysiotherapy/",
                "https://www.linkedin.com/company/kinetara/",
                "https://wap.justdial.com/el?source=77&user_type=&docid=011PXX11.XX11.250930122348.Q5R7"
              ],
            }),
          }}
        />
      </head>
    <main>
      <HeroSection />
      <OfferingsSection />
      {/* <RecoverySection /> */}
      {/* <SpecialitiesSection /> */}
      {/* <VettedExpertsSection /> */}
      <AdvancedPhysiotherapyClinicsSection />
      <WhatWeTreatSection />
      <FAQSection />
    </main>
    </>
  );
}
