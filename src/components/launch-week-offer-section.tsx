"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon, PhoneIcon, CheckCircle2, Loader2, Star, Shield, Sparkles } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export function LaunchWeekOfferSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    concern: "",
    preferredTime: "",
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
        body: JSON.stringify({
          name: formData.name,
          phone: formData.contact,
          concern: `${formData.concern}\nPreferred Time: ${formData.preferredTime}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        contact: "",
        concern: "",
        preferredTime: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send email. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-primary-foreground to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Special Offer – 20% OFF on All Packages!
            </h2>
            <p className="text-lg text-muted-foreground">
              Book your session today and get exclusive discount on all our physiotherapy services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Book Your Appointment
              </h3>
              
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    Appointment Request Sent!
                  </p>
                  <p className="text-sm text-gray-600">
                    We&apos;ll contact you soon to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-3">
                      <p className="text-sm text-red-800">{errorMessage}</p>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="offer-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="offer-name"
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
                    <label htmlFor="offer-contact" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact
                    </label>
                    <Input
                      id="offer-contact"
                      name="contact"
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                      value={formData.contact}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-white text-gray-900 border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="offer-concern" className="block text-sm font-medium text-gray-700 mb-2">
                      Concern
                    </label>
                    <textarea
                      id="offer-concern"
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

                  <div>
                    <label htmlFor="offer-time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="offer-time"
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white text-gray-900 border-gray-300 focus:border-primary focus:ring-primary"
                    >
                      <option value="">Select preferred time</option>
                      <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                      <option value="Afternoon (12pm - 3pm)">Afternoon (12pm - 3pm)</option>
                      <option value="Evening (3pm - 6pm)">Evening (3pm - 6pm)</option>
                      <option value="Flexible">Flexible</option>
                    </select>
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
                        Book Appointment <ArrowRightIcon className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}

              {/* CTAs */}
              <div className="mt-6 space-y-3">
                <a href="tel:+918800974721">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <PhoneIcon className="mr-2 h-5 w-5" />
                    Call +91 88009 74721
                  </Button>
                </a>
                <Link
                  href="https://wa.me/918800974721"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    Message on WhatsApp
                  </Button>
                </Link>
              </div>
            </div>

            {/* Trust Badges Section */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Why Choose Kinetara?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 rounded-full p-3 flex-shrink-0">
                      <Star className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Google Reviews</h4>
                      <p className="text-sm text-gray-600">
                        Rated 5.0/5.0 by our patients. Read authentic reviews from people who&apos;ve experienced our care.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Certified Physiotherapists</h4>
                      <p className="text-sm text-gray-600">
                        All our therapists are licensed, certified, and have years of experience in specialized treatments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Clean Clinic</h4>
                      <p className="text-sm text-gray-600">
                        We maintain the highest standards of hygiene and cleanliness for your safety and comfort.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

