"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import { Rating } from "@/components/ui/rating";

const clinics = [
  {
    name: "",
    rating: 5.0,
    specialty: "",
    address: "",
    contact: "",
    hours: "8am To 8pm",
    linkedin: "#",
    image: "/assets/clinic1.jpg",
  },

];

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export function AdvancedPhysiotherapyClinicsSection() {
  return (
    <section className="py-20 bg-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#153C33]">
          ADVANCED PHYSIOTHERAPY CLINICS
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Experience expert physiotherapy at our advanced clinics near you –
          equipped with the latest technologies for spine care, sports injury
          rehabilitation, and chiropractic treatment to ensure effective,
          personalized recovery.
        </p>
      </div>
      <div className="container mx-auto">
        <Carousel
          responsive={responsive}
          showDots={true}
          arrows={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="px-2"
        >
          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-primary text-white rounded-lg overflow-hidden p-8"
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={clinic.image}
                  alt={clinic.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold">{clinic.name}</h3>
                <div className="flex items-center my-2">
                  <Rating value={clinic.rating} readOnly />
                  <span className="ml-2 text-lg">{clinic.rating}</span>
                </div>
                <p className="font-semibold mb-4">{clinic.specialty}</p>
                <div className="flex items-start mb-2">
                  <FaMapMarkerAlt className="mr-2 mt-1" />
                  <p>{clinic.address}</p>
                </div>
                <div className="flex items-center mb-2">
                  <FaPhoneAlt className="mr-2" />
                  <p>Contact Number: {clinic.contact}</p>
                </div>
                <div className="flex items-center mb-4">
                  <FaClock className="mr-2" />
                  <p>Opening Hours - {clinic.hours}</p>
                </div>
                <a href={clinic.linkedin}>
                  <FaLinkedinIn className="text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
