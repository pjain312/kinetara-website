import { HeroSection } from "@/components/hero-section";
import { OfferingsSection } from "@/components/offerings-section";
import { RecoverySection } from "@/components/recovery-section";
import { SpecialitiesSection } from "@/components/specialities-section";
import { VettedExpertsSection } from "@/components/vetted-experts-section";
import { AdvancedPhysiotherapyClinicsSection } from "@/components/advanced-physiotherapy-clinics-section";
import { WhatWeTreatSection } from "@/components/what-we-treat-section";
import FAQSection from "@/components/faq-section";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
    <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kinetara",
              "url": "https://www.kinetaraphysiotherapy.com",
              "logo": "https://www.kinetaraphysiotherapy.com/logo.png"
            })
          }}
        />
      </Head>
    <main>
      <HeroSection />
      <OfferingsSection />
      <RecoverySection />
      {/* <SpecialitiesSection /> */}
      {/* <VettedExpertsSection /> */}
      {/* <AdvancedPhysiotherapyClinicsSection /> */}
      <WhatWeTreatSection />
      <FAQSection />
    </main>
    </>
  );
}
