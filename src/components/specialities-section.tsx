"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const specialities = [
  {
    name: "Pediatric Physiotherapist",
    image: "/assets/image1.jpg",
  },
  {
    name: "Physiotherapist",
    image: "/assets/image2.jpg",
  },
  {
    name: "Physiotherapy Clinic",
    image: "/assets/image3.jpg",
  },
  {
    name: "Pre And Post Surgery Rehabilitation",
    image: "/assets/image1.jpg",
  },
  {
    name: "Spinal Injury",
    image: "/assets/image2.jpg",
  },
  {
    name: "Pediatric Physiotherapist",
    image: "/assets/image3.jpg",
  },
  {
    name: "Physiotherapist",
    image: "/assets/image1.jpg",
  },
  {
    name: "Physiotherapy Clinic",
    image: "/assets/image2.jpg",
  },
  {
    name: "Pre And Post Surgery Rehabilitation",
    image: "/assets/image3.jpg",
  },
  {
    name: "Spinal Injury",
    image: "/assets/image1.jpg  ",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

export function SpecialitiesSection() {
  return (
    <section className="py-20 bg-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 ">
        </h2>
        <p className="text-center  mb-12 max-w-2xl mx-auto">
         
        </p>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        itemClass="carousel-item-padding-40-px"
      >
        {specialities.map((speciality, index) => (
          <div
            key={index}
            className={`text-center ${index % 2 !== 0 ? "mt-8" : "mb-8"}`}
          >
            <div className="relative aspect-[3/4] w-64 h-auto rounded-lg overflow-hidden mx-auto">
              <Image
                src={speciality.image}
                alt={speciality.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center mt-2 font-semibold">{speciality.name}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
