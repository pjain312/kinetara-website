"use client";

import { FaArrowRight } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { AppointmentForm } from "@/components/appointment-form";

const treatmentData = {
  title: "WHAT WE OFFER",
  description1:
    "Every treatment plan is tailored to your needs after a detailed assessment.",
  description2:
    " Find the right treatment for you.",
  sections: [
    {
      title: "Advanced Therapies for Faster Recovery",
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
      title: "Our Specialised Treatments",
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
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section id="what-we-treat" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary ">
            {treatmentData.title}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            {treatmentData.description1}
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
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6 text-lg">
              {treatmentData.description2}
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer text-base sm:text-lg px-8 py-6 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              onClick={() => setShowForm(true)}
            >
              Book an Appointment
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      <AppointmentForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title="Book Your Consultation"
        submitButtonText="Submit & Book Appointment"
      />
    </>
  );
}
