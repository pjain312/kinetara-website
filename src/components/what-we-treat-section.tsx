"use client";

import { FaArrowRight } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";

const treatmentData = {
  title: "WHAT WE OFFER",
  description:
    "We offer comprehensive physiotherapy care tailored to diverse needs —chiropractic care and sports injury rehabilitation to personalized programs in pain management, spine and orthopedic rehab, and pelvic floor therapy. Our specialized treatments are designed to relieve symptoms, restore mobility, and support recovery at every stage of life.",
  sections: [
    // {
    //   title: "Conditions",
    //   items: [
    //     "Lumbar Spondylosis",
    //     "Pes Anserine Bursitis",
    //     "Quadriceps Muscle Strain",
    //     "Herniated Disk Or Slipped Disc",
    //     "Clubfoot Or Congenital Talipes Equinovarus Or Ctev",
    //     "Shoulder Impingement",
    //     "Tennis Elbow",
    //   ],
    // },
    // {
    //   title: "Symptoms",
    //   items: [
    //     "Muscle Stiffness",
    //     "Muscle Spasm",
    //     "Crepitus – Cracking Joints",
    //     "Numbness And Tingling",
    //     "Neck Pain",
    //     "Back Pain",
    //     "Joint Pain",
    //   ],
    // },
    {
      title: "Therapies Offered",
      items: [
        "Interferential Therapy (Ift)",
        "Chiropractic care",
        "Ultrasonic Therapy",
        "Cupping Therapy",
        "Wet Cupping/ Hijama",
        "Wax Bath Therapy",
        "Kinesiology Taping",
        "Dry Needling",
        "Transcutaneous Electrical Nerve Stimulation",
        "Modified Spinal Decompression",
        "Cryotherapy (Cold Therapy)",
        "Sports Massage",
        "Manual Therapy",
        "Myofacial Release",
        "IASTM Therapy",
        "Posture Correction & Ergonomic Training",
        "Strength and Conditioning"
      ],
    },
    {
      title: "Services Offered",
      items: [
        "Chiropractic Care",
        "Sports Injuries Rehabilitation",
        "Pain Management",
        "Spine and Ortho Rehab",
        "Pelvic Floor Rehab",
        "Geriatric Rehab",
        "Neurological Rehab",
        "Pre and Post Surgery Rehab",
        "Occupational therapy"
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
              <ScrollArea className="h-80">
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
