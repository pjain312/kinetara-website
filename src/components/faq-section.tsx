"use client";

import { useState } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

const faqData = [
  {
    question: "What conditions do you treat?",
    answer:
      "We help with a wide range of issues, including back and neck pain, sports injuries, post-surgical rehab, joint problems, posture correction, and chronic pain management.",
  },
  {
    question: "Do I need a doctor’s referral to start physiotherapy at Kinetara?",
    answer:
      "No, you can book an appointment directly. If required, we collaborate with your doctor to ensure comprehensive care.",
  },
  {
    question:
      "Will my pain come back after treatment?",
    answer:
      "Our focus is not just on recovery but also on prevention. We educate you, track progress, and provide ongoing support to reduce the chances of relapse.",
  },
  {
    question:
      "Is physiotherapy covered by insurance?",
    answer:
      "Coverage depends on your insurance policy. We can provide the necessary documentation for reimbursement, and our team is happy to guide you.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Any medical reports, prescriptions, or scans related to your condition, along with comfortable clothing for movement-based assessment.",
  },
  {
    question: "Do you offer online/virtual consultations?",
    answer:
      "Yes, for certain cases we provide tele-physiotherapy sessions, including guided assessments, exercise plans, and follow-ups.",
  },
  {
    question: "How soon will I start seeing results?",
    answer:
      "Recovery timelines vary, but many patients notice improvements within the first few sessions. With regular therapy and adherence to your program, results are measurable and lasting.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">FAQ&#39;S</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some frequently asked questions regarding physiotherapy /
            chiropractor services. For more FAQ&#39;s
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
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
