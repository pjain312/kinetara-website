import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhysiotherapistPage } from "@/components/physiotherapist-page";
import {
  PHYSIOTHERAPISTS,
  getPhysiotherapist,
  getPhysiotherapistPath,
} from "@/lib/physiotherapists";
import { CLINIC_DETAILS } from "@/lib/service-areas";

const SITE_URL = "https://kinetaraphysiotherapy.com";

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PHYSIOTHERAPISTS.map((doctor) => ({
    slug: doctor.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getPhysiotherapist(slug);

  if (!doctor) {
    return {
      title: "Page Not Found | Kinetara Physiotherapy",
    };
  }

  const title = `${doctor.name} — ${doctor.specializations[0]} | Kinetara CR Park`;
  const canonical = `${SITE_URL}${getPhysiotherapistPath(doctor.slug)}`;

  return {
    title,
    description: doctor.metaDescription,
    keywords: doctor.seoKeywords,
    openGraph: {
      title,
      description: doctor.metaDescription,
      url: canonical,
      siteName: "Kinetara Physiotherapy",
      locale: "en_IN",
      type: "profile",
      images: [{ url: `${SITE_URL}${doctor.image}` }],
    },
    alternates: {
      canonical,
    },
  };
}

export default async function PhysiotherapistProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getPhysiotherapist(slug);

  if (!doctor) {
    notFound();
  }

  const pageUrl = `${SITE_URL}${getPhysiotherapistPath(doctor.slug)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    image: `${SITE_URL}${doctor.image}`,
    url: pageUrl,
    jobTitle: doctor.role,
    description: doctor.metaDescription,
    medicalSpecialty: doctor.specializations,
    worksFor: {
      "@type": "MedicalBusiness",
      name: "Kinetara Physiotherapy",
      url: SITE_URL,
      telephone: CLINIC_DETAILS.phone.replace(/\s/g, ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC_DETAILS.address,
        addressLocality: "CR Park, South Delhi",
        addressRegion: "Delhi",
        postalCode: "110019",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PhysiotherapistPage doctor={doctor} />
    </>
  );
}
