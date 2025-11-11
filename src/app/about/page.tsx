"use client";

import { AboutHero } from "@/components/about-hero";
import { AboutContent } from "@/components/about-content";
import { Testimonials } from "@/components/testimonials";
import { TherapistTeam } from "@/components/therapist-team";
import { WhyChooseUs } from "@/components/why-choose-us";
import { FasterLastingRecovery } from "@/components/faster-lasting-recovery";
import { AppointmentForm } from "@/components/appointment-form";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Show form in center after page loads
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2000); // Show form after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {/* <AboutHero /> */}
      <AboutContent />
      <WhyChooseUs />
      <TherapistTeam />
      <Testimonials />
      {/* <FasterLastingRecovery /> */}
      
      {/* Auto-opening form overlay */}
      <AppointmentForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title="Book Your Session"
        submitButtonText="Submit & Book Appointment"
      />
    </main>
  );
}
