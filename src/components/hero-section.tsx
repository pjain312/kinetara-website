import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center py-52 text-white"
      style={{ backgroundImage: "url('/assets/bg-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto flex justify-center px-4 relative">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Precision Care for
            <br />
            Pain-Free Mobility
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl">
            Transforming physiotherapy with AI-powered diagnosis and
            personalized treatment pathways --- delivering effective pain-relief
            & mobility care across Clinics, Homes & Tele-Rehab.
          </p>
          <div className="mt-8 flex space-x-4">
            <Button
              size="lg"
              className="bg-accent cursor-pointer text-accent-foreground hover:bg-accent/90"
            >
              Request Callback <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="secondary" className="cursor-pointer">
              Book Appointment <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SideContactButtons() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-2 z-50">
      <a
        href="tel:+1234567890"
        className="bg-primary p-3 rounded-l-md shadow-lg hover:bg-primary/90"
      >
        <PhoneIcon className="h-6 w-6 text-primary-foreground" />
      </a>
      <Link
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-l-md shadow-lg hover:bg-green-600"
      >
        <FaWhatsapp className="h-6 w-6 text-white" />
      </Link>
    </div>
  );
}
