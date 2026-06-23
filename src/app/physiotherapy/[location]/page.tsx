import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/hero-section";
import { OfferingsSection } from "@/components/offerings-section";
import { AdvancedPhysiotherapyClinicsSection } from "@/components/advanced-physiotherapy-clinics-section";
import { WhatWeTreatSection } from "@/components/what-we-treat-section";
import { LaunchWeekOfferSection } from "@/components/launch-week-offer-section";
import { TherapistTeam } from "@/components/therapist-team";
import { LocationContactSection } from "@/components/location-contact-section";
import { LocationIntroSection } from "@/components/location-intro-section";
import { LocationFAQSection } from "@/components/location-faq-section";
import {
  SERVICE_AREAS,
  getServiceArea,
  getServiceAreaPath,
  CLINIC_DETAILS,
} from "@/lib/service-areas";

const SITE_URL = "https://kinetaraphysiotherapy.com";

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ location: string }>;
};

export function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({
    location: area.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location } = await params;
  const area = getServiceArea(location);

  if (!area) {
    return {
      title: "Page Not Found | Kinetara Physiotherapy",
    };
  }

  const title = `Best Physiotherapy Clinic Near ${area.displayName} | Kinetara CR Park`;
  const canonical = `${SITE_URL}${getServiceAreaPath(area.slug)}`;

  return {
    title,
    description: area.metaDescription,
    keywords: [
      `physiotherapy clinic near ${area.name}`,
      `physiotherapy clinic in ${area.name}`,
      `physiotherapy near ${area.name}`,
      `physiotherapy in ${area.name}`,
      `physiotherapy ${area.name}`,
      `best physiotherapist near ${area.name}`,
      `best physiotherapist in ${area.name}`,
      `back pain treatment ${area.name}`,
      `sports injury rehab ${area.name}`,
      "physiotherapy CR Park",
      "Kinetara physiotherapy",
    ],
    openGraph: {
      title,
      description: area.metaDescription,
      url: canonical,
      siteName: "Kinetara Physiotherapy",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical,
    },
  };
}

export default async function PhysiotherapyLocationPage({ params }: PageProps) {
  const { location } = await params;
  const area = getServiceArea(location);

  if (!area) {
    notFound();
  }

  const pageUrl = `${SITE_URL}${getServiceAreaPath(area.slug)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Kinetara Physiotherapy — Near ${area.displayName}`,
    image: `${SITE_URL}/android-chrome-512x512.png`,
    url: pageUrl,
    telephone: CLINIC_DETAILS.phone.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC_DETAILS.address,
      addressLocality: "CR Park, South Delhi",
      addressRegion: "Delhi",
      postalCode: "110019",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Place",
      name: area.displayName,
    },
    openingHours: "Mo-Su 08:00-19:00",
    description: area.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HeroSection
          locationName={area.displayName}
          subtitle={area.heroSubtitle}
        />
        <LocationIntroSection area={area} />
        <OfferingsSection />
        <AdvancedPhysiotherapyClinicsSection />
        <WhatWeTreatSection />
        <LaunchWeekOfferSection />
        <TherapistTeam />
        <LocationContactSection />
        <LocationFAQSection areaName={area.displayName} faqs={area.faqs} />
      </main>
    </>
  );
}
