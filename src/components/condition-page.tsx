import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MapPin } from "lucide-react";
import {
  CONDITIONS,
  type Condition,
  getConditionPath,
} from "@/lib/conditions";
import {
  CLINIC_DETAILS,
  getServiceAreaByName,
  getServiceAreaPath,
} from "@/lib/service-areas";
import { ConditionCTA } from "@/components/condition-cta";
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start">
          <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
            <FaArrowRight className="text-white text-xs" />
          </div>
          <span className="text-gray-700 font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ConditionPage({ condition }: { condition: Condition }) {
  const otherConditions = CONDITIONS.filter((c) => c.slug !== condition.slug);

  return (
    <main>
      {condition.heroImage ? (
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
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
              <div className="text-center md:text-left order-2 md:order-1">
                <p className="inline-block bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide rounded-full px-4 py-1.5 mb-4">
                  Condition · Physiotherapy Treatment
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-primary">
                  {condition.name} Physiotherapy in CR Park, South Delhi
                </h1>
                <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                  {condition.intro}
                </p>
                <div className="mt-8">
                  <ConditionCTA conditionName={condition.name} />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative mx-auto max-w-md md:max-w-none">
                  <div
                    aria-hidden
                    className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 rotate-2"
                  />
                  <div className="relative bg-white rounded-2xl shadow-xl p-4 sm:p-6">
                    <Image
                      src={condition.heroImage}
                      alt={`${condition.name}${condition.alternateName ? ` (${condition.alternateName})` : ""} — anatomical illustration`}
                      width={1024}
                      height={792}
                      priority
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="relative bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wide mb-3">
                Condition · Physiotherapy Treatment
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {condition.name} Physiotherapy in CR Park, South Delhi
              </h1>
              <p className="mt-6 text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
                {condition.intro}
              </p>
              <div className="mt-8">
                <ConditionCTA conditionName={condition.name} />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading>What is {condition.name}?</SectionHeading>
          <p className="text-gray-600 text-lg leading-relaxed">{condition.whatIs}</p>
        </div>
      </section>

      <section className="py-16 bg-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading>Symptoms</SectionHeading>
          <BulletList items={condition.symptoms} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading>Stages of recovery</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {condition.recoveryStages.map((stage, index) => (
              <div
                key={stage.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-primary">{stage.title}</h3>
                </div>
                <ul className="space-y-2">
                  {stage.points.map((point) => (
                    <li key={point} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {condition.treatmentApproach && condition.treatmentApproach.length > 0 && (
        <section className="py-16 bg-primary-foreground">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading>Why choose Kinetara</SectionHeading>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {condition.treatmentIntro ??
                "At Kinetara, your treatment plan may combine the following evidence-based techniques, tailored to your assessment."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {condition.treatmentApproach.map((treatment) => (
                <div
                  key={treatment.title}
                  className="bg-white rounded-xl p-5 shadow-sm"
                >
                  <h4 className="font-semibold text-primary mb-1">
                    {treatment.title}
                  </h4>
                  {treatment.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {treatment.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
            {condition.treatmentClosing && (
              <p className="text-muted-foreground mt-8 leading-relaxed">
                {condition.treatmentClosing}
              </p>
            )}
          </div>
        </section>
      )}

      <section
        className={`py-16 ${
          condition.treatmentApproach?.length ? "bg-white" : "bg-primary-foreground"
        }`}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading>Exercises</SectionHeading>
          <p className="text-muted-foreground mb-6">
            Your physiotherapist at Kinetara will prescribe exercises tailored to your stage of recovery.
          </p>
          <BulletList items={condition.exercises} />
        </div>
      </section>

      <LocationFAQSection
        areaName={condition.name}
        faqs={condition.faqs}
        title={`FAQs — ${condition.name} Physiotherapy`}
        subtitle={`Common questions about ${condition.name.toLowerCase()} treatment at Kinetara, CR Park.`}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <SectionHeading className="mb-2">Areas served</SectionHeading>
              <p className="text-muted-foreground mb-4">
                We treat patients with {condition.name.toLowerCase()} from across South Delhi. Our clinic is at{" "}
                {CLINIC_DETAILS.address}.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {condition.areasServed.map((area) => {
              const serviceArea = getServiceAreaByName(area);

              return serviceArea ? (
                <Link
                  key={area}
                  href={getServiceAreaPath(serviceArea.slug)}
                  className="bg-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-primary/15 hover:shadow-md transition-all duration-200"
                >
                  {area}
                </Link>
              ) : (
                <span
                  key={area}
                  className="bg-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold text-primary shadow-sm"
                >
                  {area}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {otherConditions.length > 0 && (
        <section className="py-16 bg-primary-foreground">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading className="text-center">Other conditions we treat</SectionHeading>
            <div className="flex flex-wrap justify-center gap-3">
              {otherConditions.map((other) => (
                <Link
                  key={other.slug}
                  href={getConditionPath(other.slug)}
                  className="bg-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-colors"
                >
                  {other.name} physiotherapy
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Start your {condition.name.toLowerCase()} recovery today
          </h2>
          <p className="text-primary-foreground/90 mb-8">
            Book a session at Kinetara, {CLINIC_DETAILS.address} — open {CLINIC_DETAILS.hours}.
          </p>
          <ConditionCTA conditionName={condition.name} />
        </div>
      </section>
    </main>
  );
}
