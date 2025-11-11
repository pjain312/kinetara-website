"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { AppointmentForm } from "@/components/appointment-form";

export function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Show form in center after page loads
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2000); // Show form after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-32 lg:py-52 text-white min-h-screen"
      style={{ backgroundImage: "url('/assets/home-page.png')" }}
      aria-label="Physiotherapist treating patient at best physiotherapy clinic in South Delhi"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Full-width centered content */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Physiotherapy & Pain Relief Experts in South Delhi
            </h1>
            <h2 className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Now open in CR Park – Book your session today & get 20% OFF!
            </h2>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer text-base sm:text-lg px-6 py-6 sm:py-3"
                onClick={() => {
                  setShowForm(true);
                }}
              >
                Book Appointment <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <a href="tel:+918800974721">
                <Button
                  size="lg"
                  variant="secondary"
                  className="cursor-pointer text-base sm:text-lg px-6 py-6 sm:py-3 w-full sm:w-auto"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Centered form overlay */}
      <AppointmentForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title="Book Your Session"
        submitButtonText="Submit & Book Appointment"
      />
    </section>
  );
}

export function SideContactButtons() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-2 z-50">
        <button
          onClick={() => setShowForm(true)}
          className="bg-accent text-accent-foreground p-3 rounded-l-md shadow-lg hover:bg-accent/90"
          aria-label="Book Appointment"
        >
          <ArrowRightIcon className="h-6 w-6" />
        </button>
        <a
          href="tel: +918800974721"
          className="bg-primary p-3 rounded-l-md shadow-lg hover:bg-primary/90"
        >
          <PhoneIcon className="h-6 w-6 text-primary-foreground" />
        </a>
        <Link
          href="https://wa.me/918800974721"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-l-md shadow-lg hover:bg-green-600"
        >
          <FaWhatsapp className="h-6 w-6 text-white" />
        </Link>
      </div>

      {/* Form overlay */}
      <AppointmentForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title="Book Your Session"
        submitButtonText="Submit & Book Appointment"
      />
    </>
  );
}
