"use client";

import { AppointmentForm } from "@/components/appointment-form";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const experts = [
  {
    name: "Dr. Palak Jain PT",
    specialty: "Founder | HOD",
    image: "/assets/team-member-1.jpeg",
    hoverContent: {
      title: "Dr. Palak Jain PT – Founder | HOD (7+ years of experience)",
      social: {
        facebook: "#",
        linkedin: "#",
        google: "#",
      },
    },
  },
  {
    name: "Dr. Ammar Ali Khan PT",
    specialty: "Sr. Physiotherapist",
    image: "/assets/team-member-2.jpeg",
    hoverContent: {
      title: "Dr. Ammar Ali Khan PT – Sr. Physiotherapist (3+ years of experience)",
      social: {
        facebook: "#",
        linkedin: "#",
        google: "#",
      },
    },
  },
  
];


export function VettedExpertsSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Meet Our Physiotherapy Experts
          </h2>
          {/* <p className="text-center mb-12 max-w-3xl mx-auto">
            Whether you prefer in-clinic sessions or physiotherapy at home, our
            thoroughly vetted and licensed Physiotherapists and Chiropractors are
            committed to delivering the highest standard of care.
          </p> */}
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {experts.map((expert, index) => (
              <div className="mb-8 flex flex-col items-center" key={index}>
                <div className="group relative text-center cursor-pointer rounded-lg overflow-hidden w-64">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-opacity-70 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-50 transition-all duration-300">
                      <p className="text-white font-semibold text-sm">
                        {expert.hoverContent.title}
                      </p>
                      <p className="text-white text-xs mt-2 px-2">
                        {/* {expert.hoverContent.location} */}
                      </p>
                      {/* <div className="flex justify-center space-x-3 mt-4">
                        <a
                          href={expert.hoverContent.social.facebook}
                          className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center"
                        >
                          <FaFacebookF className="text-gray-800" />
                        </a>
                        <a
                          href={expert.hoverContent.social.linkedin}
                          className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center"
                        >
                          <FaLinkedinIn className="text-gray-800" />
                        </a>
                        <a
                          href={expert.hoverContent.social.google}
                          className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center"
                        >
                          <FaGoogle className="text-gray-800" />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl text-primary font-semibold mt-4 text-center">
                  {expert.name}
                </h3>
                <p className="text-center text-sm">{expert.specialty}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12">
          <div className="text-center">
            <p className="text-muted-foreground mb-6 text-lg">
              Schedule a session with our experts today.
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
        title="Book Your Session"
        submitButtonText="Submit & Book Appointment"
      />
    </>
  );
}
