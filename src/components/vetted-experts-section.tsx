"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const experts = [
  {
    name: "Dr. Palak",
    specialty: "Physiotherapist",
    image: "/assets/doctor1.jpg",
    hoverContent: {
      title: "Dr. Palak – Senior Consultant Physiotherapist",
      social: {
        facebook: "#",
        linkedin: "#",
        google: "#",
      },
    },
  },
  
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function VettedExpertsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          THOROUGHLY VETTED EXPERTS
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Whether you prefer in-clinic sessions or physiotherapy at home, our
          thoroughly vetted and licensed Physiotherapists and Chiropractors are
          committed to delivering the highest standard of care.
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
          {experts.map((expert, index) => (
            <div className="mb-8" key={index}>
              <div className="group relative text-center cursor-pointer rounded-lg overflow-hidden">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-opacity-70 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-50 transition-all duration-300">
                    <p className="text-white font-semibold text-sm">
                      {expert.hoverContent.title}
                    </p>
                    <p className="text-white text-xs mt-2 px-2">
                      {/* {expert.hoverContent.location} */}
                    </p>
                    <div className="flex justify-center space-x-3 mt-4">
                      <a
                        href={expert.hoverContent.social.facebook}
                        className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center"
                      >
                        <FaFacebookF className="text-gray-800" />
                      </a>
                      <a
                        href={expert.hoverContent.social.linkedin}
                        className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center"
                      >
                        <FaLinkedinIn className="text-gray-800" />
                      </a>
                      <a
                        href={expert.hoverContent.social.google}
                        className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center"
                      >
                        <FaGoogle className="text-gray-800" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl text-primary font-semibold mt-4 text-center">
                {expert.name}
              </h3>
              <p className="text-center text-sm">{expert.specialty}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
