import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Star, Award, Stethoscope, MapPin, BadgeCheck, Sparkles } from "lucide-react";
import {
  PHYSIOTHERAPISTS,
  type Physiotherapist,
  getPhysiotherapistPath,
} from "@/lib/physiotherapists";
import { CLINIC_DETAILS } from "@/lib/service-areas";
import { PhysiotherapistCTA } from "@/components/physiotherapist-cta";
import { LocationFAQSection } from "@/components/location-faq-section";

function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-2xl sm:text-3xl font-bold text-primary mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}

export function PhysiotherapistPage({ doctor }: { doctor: Physiotherapist }) {
  const otherDoctors = PHYSIOTHERAPISTS.filter((pt) => pt.slug !== doctor.slug);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-foreground via-white to-blue-50 py-16 md:py-24">
        {/* Decorative accents */}
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Portrait */}
            <div className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/25 to-primary/5 -rotate-2"
              />
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 768px) 320px, 384px"
                  className="rounded-2xl object-cover shadow-2xl"
                  priority
                />
                {/* Floating experience badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg px-5 py-2.5 flex items-center gap-2 whitespace-nowrap">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    {doctor.experience} of experience
                  </span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="text-center md:text-left mt-6 md:mt-0">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full px-4 py-1.5">
                  <BadgeCheck className="h-4 w-4" />
                  {doctor.role}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white text-gray-600 text-sm font-medium rounded-full px-4 py-1.5 shadow-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  Kinetara · CR Park, South Delhi
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-primary">
                {doctor.name}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                {doctor.intro}
              </p>
              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                {doctor.specializations.slice(0, 3).map((spec) => (
                  <span
                    key={spec}
                    className="bg-white rounded-full px-4 py-1.5 text-sm font-medium text-primary shadow-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
                <div className="bg-white/70 backdrop-blur rounded-2xl px-4 py-3 text-center shadow-sm">
                  <p className="text-xl sm:text-2xl font-bold text-primary">
                    {doctor.experience.replace(" years", "")}
                  </p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Years of practice</p>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-2xl px-4 py-3 text-center shadow-sm">
                  <p className="text-xl sm:text-2xl font-bold text-primary">
                    {doctor.qualifications.length}
                  </p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Certifications</p>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-2xl px-4 py-3 text-center shadow-sm">
                  <p className="text-xl sm:text-2xl font-bold text-primary">
                    {doctor.specializations.length}
                  </p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Specialities</p>
                </div>
              </div>

              <div className="mt-8">
                <PhysiotherapistCTA doctorName={doctor.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading>About {doctor.name.split(" ").slice(0, 2).join(" ")}</SectionHeading>
          <p className="text-gray-600 text-lg leading-relaxed">{doctor.bio}</p>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading className="text-center">Areas of specialisation</SectionHeading>
          <p className="text-center text-muted-foreground mb-8">
            {doctor.name} focuses on evidence-based treatment for the following areas.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {doctor.specializations.map((spec) => (
              <li key={spec} className="flex items-center">
                <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  <FaArrowRight className="text-white text-xs" />
                </div>
                <span className="text-primary font-medium">{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conditions treated */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
              <Stethoscope className="h-6 w-6 text-primary" />
            </div>
            <div>
              <SectionHeading className="mb-2">Conditions treated</SectionHeading>
              <p className="text-muted-foreground">
                Patients visit {doctor.name.split(" ").slice(0, 2).join(" ")} for a wide range of musculoskeletal and rehabilitation needs.
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {doctor.conditionsTreated.map((condition) => (
              <li key={condition} className="flex items-center">
                <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  <FaArrowRight className="text-white text-xs" />
                </div>
                <span className="text-gray-700 font-medium">{condition}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading>Treatment techniques</SectionHeading>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {doctor.techniques.map((technique) => (
              <li
                key={technique}
                className="bg-white rounded-xl px-5 py-4 text-gray-700 font-medium shadow-sm"
              >
                {technique}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <SectionHeading className="mb-2">Qualifications & certifications</SectionHeading>
              <ul className="space-y-2">
                {doctor.qualifications.map((qual) => (
                  <li key={qual} className="text-gray-600 leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {qual}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {doctor.reviews.length > 0 && (
        <section className="py-16 bg-primary-foreground">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading className="text-center">Patient reviews</SectionHeading>
            <p className="text-center text-muted-foreground mb-8">
              What patients say about treatment with {doctor.name.split(" ").slice(0, 2).join(" ")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctor.reviews.map((review) => (
                <div
                  key={review.name}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
                >
                  <h3 className="font-bold text-lg">{review.name}</h3>
                  <div className="flex items-center my-2">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                  </div>
                  <h4 className="font-semibold text-sm text-primary/80 mb-2">
                    {review.title}
                  </h4>
                  <p className="text-gray-600 text-sm flex-grow">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other doctors */}
      <section className="py-16 bg-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading className="text-center">Meet our other physiotherapists</SectionHeading>
          <div className="flex flex-wrap justify-center gap-3">
            {otherDoctors.map((other) => (
              <Link
                key={other.slug}
                href={getPhysiotherapistPath(other.slug)}
                className="bg-white rounded-full px-5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-colors"
              >
                {other.name} — {other.specializations[0]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Book a session with {doctor.name.split(" ").slice(0, 2).join(" ")}
          </h2>
          <p className="text-primary-foreground/90 mb-8">
            Visit Kinetara, {CLINIC_DETAILS.address} — open {CLINIC_DETAILS.hours}.
          </p>
          <PhysiotherapistCTA doctorName={doctor.name} />
        </div>
      </section>
    </main>
  );
}
