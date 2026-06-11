"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";
import { AppointmentForm } from "@/components/appointment-form";
import { CLINIC_DETAILS } from "@/lib/service-areas";

export function ConditionCTA({ conditionName }: { conditionName: string }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer text-base sm:text-lg px-6 py-6 sm:py-3"
          onClick={() => setShowForm(true)}
        >
          Book {conditionName} Treatment <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Button>
        <a href={CLINIC_DETAILS.phoneHref}>
          <Button
            size="lg"
            variant="secondary"
            className="cursor-pointer text-base sm:text-lg px-6 py-6 sm:py-3 w-full sm:w-auto"
          >
            <PhoneIcon className="mr-2 h-5 w-5" />
            Call {CLINIC_DETAILS.phone}
          </Button>
        </a>
      </div>

      <AppointmentForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title={`Book Your ${conditionName} Consultation`}
        submitButtonText="Submit & Book Appointment"
      />
    </>
  );
}
