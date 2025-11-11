"use client";

import { Rating } from "@/components/ui/rating";
import Image from "next/image";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const clinics = [
  {
    name: "Kinetara (CR Park)",
    rating: 5.0,
    specialty: "Physiotherapy",
    address: "D-584, LGF, CR Park, New Delhi - 110019",
    contact: "8800974721",
    hours: "9am To 6pm",
    // linkedin: "#",
    image: "/assets/clinics1.jpg"
  },
  {
    name: "Kinetara (CR Park)",
    rating: 5.0,
    specialty: "Physiotherapy",
    address: "D-584, LGF, CR Park, New Delhi - 110019",
    contact: "8800974721",
    hours: "9am To 6pm",
    // linkedin: "#",
    image: "/assets/clinic5.jpg",
  },
  {
    name: "Kinetara (CR Park)",
    rating: 5.0,
    specialty: "Physiotherapy",
    address: "D-584, LGF, CR Park, New Delhi - 110019",
    contact: "8800974721",
    hours: "9am To 6pm",
    // linkedin: "#",
    image: "/assets/clinic6.jpg",
  },
  {
    name: "Kinetara (CR Park)",
    rating: 5.0,
    specialty: "Physiotherapy",
    address: "D-584, LGF, CR Park, New Delhi - 110019",
    contact: "8800974721",
    hours: "9am To 6pm",
    // linkedin: "#",
    image: "/assets/clinic2.jpg",
  },
  {
    name: "Kinetara (CR Park)",
    rating: 5.0,
    specialty: "Physiotherapy",
    address: "D-584, LGF, CR Park, New Delhi - 110019",
    contact: "8800974721",
    hours: "9am To 6pm",
    // linkedin: "#",
    image: "/assets/clinic3.jpg",
  },
  {
    name: "Kinetara (CR Park)",
    rating: 5.0,
    specialty: "Physiotherapy",
    address: "D-584, LGF, CR Park, New Delhi - 110019",
    contact: "8800974721",
    hours: "9am To 6pm",
    // linkedin: "#",
    image: "/assets/clinic4.jpg",
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#153C33]">
            Redefining Recovery, Movement & Strength.
          </h2>
          <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
            Welcome to Kinetara Physiotherapy — your trusted clinic for pain management, rehabilitation, and recovery in South Delhi.
          </p>
        </div>
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
                  alt={"Kinetara (CR Park)"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold">{"Kinetara - THE NEXT-GEN PHYSIOTHERAPY"}</h3>
                <div className="flex items-center my-2">
                  <Rating value={clinic.rating} readOnly />
                  <span className="ml-2 text-lg">{clinic.rating}</span>
                </div>
                <p className="font-semibold mb-4">
                  Pain Management | Spine and Ortho Rehab | Sports Injury Rehab |
                   Pelvic Floor Rehab | Chiropractic care | Geriatric Rehab | Neuro Rehab |
                   Occupational Therapy</p>
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
                {/* <a href={clinic.linkedin}>
                  <FaLinkedinIn className="text-2xl" />
                </a> */}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
