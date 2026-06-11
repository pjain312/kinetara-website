"use client";

import { AppointmentForm } from "@/components/appointment-form";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PHYSIOTHERAPISTS, getPhysiotherapistPath } from "@/lib/physiotherapists";

export function VettedExpertsSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Meet Our Physiotherapy Experts
          </h2>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {PHYSIOTHERAPISTS.map((expert) => (
              <div className="mb-8 flex flex-col items-center" key={expert.slug}>
                <Link
                  href={getPhysiotherapistPath(expert.slug)}
                  className="group relative text-center cursor-pointer rounded-lg overflow-hidden w-64"
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-opacity-70 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-50 transition-all duration-300">
                      <p className="text-white font-semibold text-sm">
                        {expert.name} — {expert.role} ({expert.experience} of experience)
                      </p>
                      <p className="text-white text-xs mt-2 px-2">
                        {expert.specializations[0]}
                      </p>
                    </div>
                  </div>
                </Link>
                <h3 className="text-xl text-primary font-semibold mt-4 text-center">
                  <Link href={getPhysiotherapistPath(expert.slug)} className="hover:underline">
                    {expert.name}
                  </Link>
                </h3>
                <p className="text-center text-sm">{expert.role}</p>
                <Link
                  href={getPhysiotherapistPath(expert.slug)}
                  className="text-primary text-sm font-medium mt-2 hover:underline"
                >
                  View profile →
                </Link>
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
