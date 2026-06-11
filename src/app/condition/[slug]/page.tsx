import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConditionPage } from "@/components/condition-page";
import {
  CONDITIONS,
  getCondition,
  getConditionPath,
} from "@/lib/conditions";
import { CLINIC_DETAILS } from "@/lib/service-areas";

const SITE_URL = "https://kinetaraphysiotherapy.com";

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CONDITIONS.map((condition) => ({
    slug: condition.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = getCondition(slug);

  if (!condition) {
    return {
      title: "Page Not Found | Kinetara Physiotherapy",
    };
  }

  const title = `${condition.name} Physiotherapy in CR Park, South Delhi | Kinetara`;
  const canonical = `${SITE_URL}${getConditionPath(condition.slug)}`;

  return {
    title,
    description: condition.metaDescription,
    keywords: condition.seoKeywords,
    openGraph: {
      title,
      description: condition.metaDescription,
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

export default async function ConditionTreatmentPage({ params }: PageProps) {
  const { slug } = await params;
  const condition = getCondition(slug);

  if (!condition) {
    notFound();
  }

  const pageUrl = `${SITE_URL}${getConditionPath(condition.slug)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `${condition.name} Physiotherapy — Kinetara`,
    url: pageUrl,
    description: condition.metaDescription,
    about: {
      "@type": "MedicalCondition",
      name: condition.name,
      ...(condition.alternateName && { alternateName: condition.alternateName }),
    },
    provider: {
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: condition.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ConditionPage condition={condition} />
    </>
  );
}
