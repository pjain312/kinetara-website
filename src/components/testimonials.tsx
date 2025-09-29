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
    name: "Shikha Gupta",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best Home Service!",
    review:
      "Best physiotherapy services at convenience of home. I had appointed the service for my mother for past 10 weeks and there has been significant improvement in her condition. Therapist is friendly and understanding and adapts to the patients moods.",
  },
  {
    name: "Shikha Gupta",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best Home Service!",
    review:
      "Best physiotherapy services at convenience of home. I had appointed the service for my mother for past 10 weeks and there has been significant improvement in her condition. Therapist is friendly and understanding and adapts to the patients moods.",
  },
  {
    name: "Shikha Gupta",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best Home Service!",
    review:
      "Best physiotherapy services at convenience of home. I had appointed the service for my mother for past 10 weeks and there has been significant improvement in her condition. Therapist is friendly and understanding and adapts to the patients moods.",
  },
  {
    name: "Shikha Gupta",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best Home Service!",
    review:
      "Best physiotherapy services at convenience of home. I had appointed the service for my mother for past 10 weeks and there has been significant improvement in her condition. Therapist is friendly and understanding and adapts to the patients moods.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-primary-foreground py-20 relative" id="testimonials">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <span className="bg-white text-[#153C33] px-3 py-1 rounded-full text-sm font-semibold">
            Happiness On Our Patient&#39;s Faces Is What Drives Us
          </span>
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
                <div className="p-1">
                  <Card className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
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
                      <p className="text-gray-600 text-sm">
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
