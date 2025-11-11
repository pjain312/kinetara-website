"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon, X, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

interface AppointmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  submitButtonText?: string;
}

export function AppointmentForm({
  isOpen,
  onClose,
  title = "Book Your Session",
  submitButtonText = "Submit & Book Appointment",
}: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    concern: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        phone: "",
        concern: "",
      });
      
      // Close form after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send email. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 animate-in fade-in duration-300"
        onClick={onClose}
      />
      {/* Form */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
        <form
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-2xl w-full max-w-md relative"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Close form"
          >
            <X className="h-5 w-5" />
          </button>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            {title}
          </h3>
          
          {submitStatus === "success" ? (
            <div className="text-center py-8">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Appointment Request Sent!
              </p>
              <p className="text-sm text-gray-600">
                We'll contact you soon to confirm your appointment.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3">
                  <p className="text-sm text-red-800">{errorMessage}</p>
                </div>
              )}
              <div>
                <label htmlFor="form-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  id="form-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-white text-gray-900 border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="form-phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <Input
                  id="form-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-white text-gray-900 border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="form-concern" className="block text-sm font-medium text-gray-700 mb-2">
                  Concern
                </label>
                <textarea
                  id="form-concern"
                  name="concern"
                  required
                  rows={3}
                  placeholder="Tell us about your concern"
                  value={formData.concern}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white text-gray-900 border-gray-300 focus:border-primary focus:ring-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg py-6 sm:py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    {submitButtonText} <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

