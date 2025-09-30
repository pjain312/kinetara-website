"use client";

import {
  Briefcase,
  Calendar,
  MessageSquare,
  Plus,
  Headphones,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    icon: <Plus size={32} />,
    title: "+ 500 Practitioners",
    description:""
  },
  {
    icon: <Briefcase size={32} />,
    title: "Integrated Approach",
    description:
      "Our integrated / multi-therapy approach enables us take a holistic view of patient needs and provide and outcome-based treatment.",
  },
  {
    icon: <Calendar size={32} />,
    title: "Treatment Scheduling",
    description:
      "Instant confirmation of clinic appointment & home visit is confirmed within 30 mins. We try our best to not change a physio for ongoing treatments.",
  },
  {
    icon: <Headphones size={32} />,
    title: "Always Listening",
    description:
      "Continuous monitoring of treatment progress with feedback & Counseling calls. Pro-active grievance redressal to ensure a smooth path to your recovery.",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Payments",
    description:
      "Transparent Pricing with friendly packages for long term treatments. Option to pay through cash, card or online withinsurance re-imbursement friendly billing.",
  },
  {
    icon: <MessageSquare size={32} />,
    title: "12*7 Support",
    description:
      "Help is just a text Away. 12*7 support on WhatsApp for any query or concern for your new appointments sorfor an ongoing physio treatment.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* <span className="text-sm font-semibold text-gray-500 bg-gray-100 rounded-full px-4 py-2">
            Treatment That Blends Competence With Compassion
          </span> */}
          <h2 className="text-4xl font-bold text-gray-800 mt-4">
            Why Choose Kinetara
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center h-16 w-16 bg-white rounded-full shadow-md mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
