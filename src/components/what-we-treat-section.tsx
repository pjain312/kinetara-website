"use client";

import { FaArrowRight } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";

const treatmentData = {
  title: "WHAT WE TREAT",
  description:
    "We provide specialized physiotherapy treatments for neurological, orthopedic, musculoskeletal, pediatric, geriatric, and sports-related conditions — addressing a wide range of symptoms and recovery needs.",
  sections: [
    {
      title: "Conditions",
      items: [
        "Lumbar Spondylosis",
        "Pes Anserine Bursitis",
        "Quadriceps Muscle Strain",
        "Herniated Disk Or Slipped Disc",
        "Clubfoot Or Congenital Talipes Equinovarus Or Ctev",
        "Shoulder Impingement",
        "Tennis Elbow",
      ],
    },
    {
      title: "Symptoms",
      items: [
        "Muscle Stiffness",
        "Muscle Spasm",
        "Crepitus – Cracking Joints",
        "Numbness And Tingling",
        "Neck Pain",
        "Back Pain",
        "Joint Pain",
      ],
    },
    {
      title: "Therapies Offered",
      items: [
        "Interferential Therapy (Ift)",
        "Chiropractic Therapy",
        "Ultrasound Therapy",
        "Laser Therapy",
        "Cupping Therapy",
        "Dry Needling",
        "Taping",
      ],
    },
    {
      title: "Services Offered",
      items: [
        "Chiropractor Treatment",
        "Sports Physiotherapy",
        "Pediatric Physiotherapy",
        "Home Care Physiotherapy",
        "Neuro Physiotherapy - Rehab",
        "Post-operative Rehab",
        "Geriatric Physiotherapy",
      ],
    },
  ],
};

const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-center mb-3">
    <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
      <FaArrowRight className="text-white text-xs" />
    </div>
    <span className="text-primary">{text}</span>
  </li>
);

export function WhatWeTreatSection() {
  return (
    <section id="what-we-treat" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary ">
          {treatmentData.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
          {treatmentData.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatmentData.sections.map((section, index) => (
            <div key={index} className="bg-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-center text-primary mb-6">
                {section.title}
              </h3>
              <ScrollArea className="h-60">
                <ul className="pr-4">
                  {section.items.map((item, itemIndex) => (
                    <ListItem key={itemIndex} text={item} />
                  ))}
                </ul>
              </ScrollArea>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
