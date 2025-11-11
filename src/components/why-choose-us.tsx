"use client";

import {
  Briefcase,
  Goal,
  Handshake,
  Infinity,
  NotebookPen,
  Repeat
} from "lucide-react";

const features = [
  {
    icon:<Goal size={32}/>,
    title: "Root-Cause Focused",
    description:"We don’t just treat symptoms, we identify and resolve the underlying problem."
  },
  {
    icon: <Briefcase size={32} />,
    title: "Expert-Led Care",
    description:
      "Every session is guided by qualified physiotherapists with advanced training and precision. Next-Gen Techniques – We blend proven physiotherapy methods.",
  },
  {
    icon: <NotebookPen size={32} />,
    title: "Personalized Recovery Plans",
    description:
      "No two patients are the same. Your care is tailored to your body, lifestyle, and goals.",
  },
  {
    icon: <Infinity size={32} />,
    title: "Preventive & Long-Term Support",
    description:
      "Beyond recovery, we equip you with strategies to prevent recurrence and stay strong.",
  },
  {
    icon: <Handshake size={32} />,
    title: "Patient-Centered Approach",
    description:
      "We partner with you throughout your healing journey, not just during clinic visits.",
  },
  {
    icon: <Repeat size={32} />,
    title: "Lasting Recovery",
    description:
      "At Kinetara, recovery isn’t temporary — it’s faster, smarter, and lasting.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary-foreground" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-4">
            Why Choose Kinetara
          </h2>
          <span className="text-gray-600">Choosing the right physiotherapy partner can make all the difference in your recovery. At Kinetara, we stand apart because</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-primary rounded-lg p-8 text-white">
              <div className="flex items-center justify-center h-16 w-16 bg-white/20 rounded-full shadow-md mb-6">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
