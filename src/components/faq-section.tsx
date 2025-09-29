"use client";

import { useState } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

const faqData = [
  {
    question: "What Is Precision Care For Pain-Free Mobility?",
    answer:
      "Precision Care for Pain-Free Mobility is CB Physiotherapy's technology-driven approach to physiotherapy treatment. It uses AI-powered diagnosis and personalized rehabilitation plans to deliver targeted pain relief and improve mobility. Whether you're visiting one of our advanced physiotherapy clinics, opting for home physiotherapy, or using our tele-rehabilitation services, this approach ensures effective, expert-led care tailored to your specific needs — helping you recover faster and move better.",
  },
  {
    question: "What Are The Services Offered By Cb Physiotherapy In India?",
    answer:
      "CB Physiotherapy offers a wide range of services in India, including but not limited to: musculoskeletal physiotherapy, neurological physiotherapy, sports injury rehabilitation, pediatric physiotherapy, geriatric physiotherapy, and home care physiotherapy.",
  },
  {
    question:
      "Do You Offer Remote Physiotherapy / Virtual Physiotherapy To Overseas Patients.",
    answer:
      "Yes, we offer remote and virtual physiotherapy sessions to overseas patients. Our tele-rehabilitation services allow you to connect with our expert physiotherapists from the comfort of your home, anywhere in the world.",
  },
  {
    question:
      "How Do I Book An Appointment For Clinic Or Home Physiotherapy Services?",
    answer:
      "You can book an appointment through our website, by calling our central helpline, or by using our mobile app. We offer flexible scheduling for both in-clinic and home physiotherapy sessions.",
  },
  {
    question: "What Conditions Do You Treat At Cb Physiotherapy?",
    answer:
      "We treat a wide variety of conditions, including back pain, neck pain, joint pain, arthritis, sports injuries, post-operative conditions, neurological disorders like stroke and Parkinsons, and pediatric conditions like developmental delays.",
  },
  {
    question: "Are Your Physiotherapists Certified And Experienced?",
    answer:
      "All our physiotherapists are certified, highly experienced, and undergo regular training to stay updated with the latest advancements in physiotherapy. We pride ourselves on having a team of expert and dedicated professionals.",
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
