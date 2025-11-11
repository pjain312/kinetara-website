"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Samriti Gupta",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best physiotherapy clinic for Knee Pain!",
    review:
      "I first consulted Dr. Palak Jain (PT) due to knee pain. However, she expertly assessed the issue being related to overall muscle weakness throughout my body, likely due to hormonal changes and menopause, rather than just a localized knee problem. Her advice and treatment plan was very effective and genuine. Since then, I’ve continued consulting her. Most appreciable is her focus on quality care without any commercialization.",
  },
  {
    name: "Rohit Aggarwal",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Treatment for Neck Torticollis",
    review:
      "This centre is headed by Dr. Palak, a highly experienced doctor who has completed numerous expert courses. I visited her for my neck torticollis. She first requested an X-ray and then guided me through a 30-day course. I feel much more relaxed now and can completely trust her expertise.",
  },
  {
    name: "Himanshu Negi",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best Treatment for Back Pain",
    review:"Dr. Ammar is an amazing physiotherapist! Very friendly, patient, and effective with his treatments. Kinetra provides great service overall."  
  },
  {
    name: "Surendra Vaidh",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best Physiotherapy clinic for Dry Needling in South Delhi!",
    review:
      "Dr. Ammar is an excellent physiotherapist! The dry needling treatment really helped relieve my pain, and he explained everything clearly. Highly recommend!",
  },
];

export function Testimonials() {
  return (
    <section className="bg-primary-foreground py-20 relative" id="testimonials">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          {/* <span className="bg-white text-[#153C33] px-3 py-1 rounded-full text-sm font-semibold">
            Happiness On Our Patient&#39;s Faces Is What Drives Us
          </span> */}
          <h2 className="text-4xl font-bold text-[#153C33] mt-4">
            What Patients <span className="text-primary/80">Says</span> About us
          </h2>
        </div>
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center mb-4">
                        {/* <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        /> */}
                        <div className="ml-4">
                          <h3 className="font-bold text-lg">
                            {testimonial.name}
                          </h3>
                          <div className="flex items-center">
                            {Array(testimonial.rating)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-5 w-5 text-yellow-400 fill-current"
                                />
                              ))}
                          </div>
                        </div>
                      </div>
                      <h4 className="font-bold text-md text-primary/80 mb-2">
                        {testimonial.title}
                      </h4>
                      <p className="text-gray-600 text-sm flex-grow">
                        {testimonial.review}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
