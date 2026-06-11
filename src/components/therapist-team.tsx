"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { AppointmentForm } from "@/components/appointment-form";
import { PHYSIOTHERAPISTS, getPhysiotherapistPath } from "@/lib/physiotherapists";

export function TherapistTeam() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="py-20" id="our-team">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mt-4">
              Meet Your Physiotherapy Experts
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {PHYSIOTHERAPISTS.map((member) => (
              <Link
                key={member.slug}
                href={"/"}
                className="text-center group"
              >
                <div className="relative w-[240px] h-[320px] mx-auto mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="240px"
                    className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium mb-1">{member.role}</p>
                <p className="text-blue-600 font-medium text-sm mb-2">
                  {member.experience} of experience
                </p>
                <p className="text-primary text-sm font-medium mb-2">
                  {member.specializations[0]}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                  {member.qualifications.slice(0, 2).join(" · ")}
                </p>
                <span className="inline-flex items-center text-primary text-sm font-semibold mt-3 group-hover:underline">
                  View profile <ArrowRightIcon className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
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
