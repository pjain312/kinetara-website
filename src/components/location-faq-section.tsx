"use client";

import { useState } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import type { ServiceAreaFAQ } from "@/lib/service-areas";

export function LocationFAQSection({
  areaName,
  faqs,
  title,
  subtitle,
}: {
  areaName: string;
  faqs: ServiceAreaFAQ[];
  title?: string;
  subtitle?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {title ?? `FAQs — Physiotherapy near ${areaName}`}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle ??
              `Common questions from patients visiting us from ${areaName} and nearby areas.`}
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <h3 className="font-bold text-primary text-lg pr-4">
                  {faq.question}
                </h3>
                <div className="bg-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {openIndex === index ? (
                    <FaArrowDown className="text-primary text-sm" />
                  ) : (
                    <FaArrowRight className="text-primary text-sm" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
