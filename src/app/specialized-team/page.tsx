import type { Metadata } from "next";
import { TeamHero } from "@/components/team-hero";
import { TherapistTeam } from "@/components/therapist-team";

const SITE_URL = "https://kinetaraphysiotherapy.com";

export const metadata: Metadata = {
  title: "Our Physiotherapy Team | Kinetara CR Park, South Delhi",
  description:
    "Meet the expert physiotherapy team at Kinetara, CR Park. Dr. Palak Jain (pelvic floor & spine) and Dr. Iqra Siddiqui (dry needling) — certified specialists in South Delhi.",
  keywords: [
    "physiotherapy team CR Park",
    "best physiotherapist South Delhi",
    "Kinetara team",
    "pelvic floor physiotherapist Delhi",
    "orthopedic physiotherapist GK1/GK2",
    "dry needling physiotherapist CR Park",
    "Hijama therapy",
    "physiotherapy near me"
  ],
  openGraph: {
    title: "Our Physiotherapy Team | Kinetara CR Park",
    description:
      "Meet Kinetara's certified physiotherapists — specialists in spine, pelvic floor, dry needling, and rehabilitation in South Delhi.",
    url: `${SITE_URL}/specialized-team`,
    siteName: "Kinetara Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/specialized-team`,
  },
};

export default function SpecializedTeamPage() {
  return (
    <main>
      <TeamHero />
      <TherapistTeam />
    </main>
  );
}
