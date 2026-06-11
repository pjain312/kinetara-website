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
    name: "Ayushi Gupta",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Neck and Shoulder Pain Treatment",
    review:"I was recommended Kinetara by a friend when I had been dealing with persistent neck and shoulder pain that eventually started radiating to my hands and head, along with numbness, for quite some time. On my doctor’s advice, I opted for physiotherapy, and choosing Kinetara turned out to be the right decision. I couldn’t be happier with the treatment I received from Dr. Palak Jain. What truly stands out is her attention to detail, patient care, and genuine concern for her patients. She explains everything clearly, is extremely patient, and truly cares about her patients’ progress, making the entire treatment process reassuring and effective. I highly recommend Kinetara and Dr. Palak Jain to anyone looking for professional and compassionate physiotherapy care. 😊🌿"
  },
  {
    name: "Benu Gupta",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best Physiotherapy for Leg Pain",
    review:"I had an amazing and a very relaxing experience at Kinetara during my treatment for pain in my hip and leg. Dr. Palak is very knowledgeable and made me feel very comfortable throughout the treatment and helped me get over the pain. I would definitely recommend Kinetara for any physiotherapy needs."
  },
  {
    name: "Shreya Gandhi",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Neck and Upper Back Pain Physiotherapy",
    review:"My experience of physiotherapy with Dr. Palak Jain has been tremendous. She understood the right pain points of my upper back & neck pain and helped me with the right set of exercises to strengthen & relax my muscles. With a lot of patience & calm, she has provided 3 sessions to me."
  },
  {
    name: "Shristy Lama",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best Physiotherapy Clinic for Cervical Pain",
    review:"I had a wonderful experience at Kinetara with Dr. Palak. I went in with a serious cervical issue and severe headaches. She carefully assessed my condition step by step and explained everything clearly, which made me feel very comfortable and confident in the treatment. What really stood out was her approach—she checked in with me during every session to make sure I was comfortable and that the treatment was working well. After just one session, my headache was significantly relieved, and after completing five days of sessions, my cervical pain is completely gone. Dr. Palak is not only highly skilled but also extremely kind, patient, and supportive. I truly appreciate her care and dedication. I would highly recommend Kinetara to anyone dealing with similar issues. I went seeing the google reviews, so if this could help anyone gain more trust. Just give it a try😊"
  },
  {
    name: "Nandita Guha Mazumdar",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best Physiotherapy Clinic for Lower Back Pain",
    review:"Dr. Palak Jain is very good Physiotherapist, I have seen. She really works hard and gives her 💯 to the patient."
  },
  {
    name: "Tamali Chakraborty",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best Physiotherapy for Sciatica Pain",
    review:"The experience was great and Dr. Palak had really taken care of the problem and helped in recovering early."
  },
  {
    name: "Surendra Vaidh",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best Physiotherapy clinic for Dry Needling in South Delhi!",
    review:
      "Dr. Ammar is an excellent physiotherapist! The dry needling treatment really helped relieve my pain, and he explained everything clearly. Highly recommend!",
  },
  {
    name: "Ramya Madhavan",
    image: "/assets/avatar.png",
    rating: 5,
    title: "Best Physiotherapy near me",
    review:
      "I have been seeing the doctor for approx. six weeks for multiple issues, including an injury. Dr Palak Jain is committed to your immediate relief as well as in time recovery. Her consultants are clear and comprehensive. Her sessions last as long as is required for her to be satisfied that you have had immediate improvement, and following the sessions, she suggests a curated set of exercises for you to continue on your own [a refreshing change from physios who insist on medications, repeated scans, regular sessions, etc]. She is one of those rare doctors who is rigorous and responsive throughout - and also so warm that you soon feel she's family. My sessions with Dr Ammar and Dr Iqra have been of a similar standard. Kinetara has led to lasting improvements in my quality of life. Both my parents and husband have since had comprehensive consultations with Dr Palak Jain, and my mother and husband have had a series of sessions that, in both cases, have led to immense improvement in their condition. I'm so grateful, and will be recommending this clinic to everyone I know!",
  },
  {
    name: "Ekta Sachdeva",
    image: "/assets/avatar.png",
    title: "Neck and Shoulder Pain Treatment",
    review:
      "I am extremely satisfied with the physiotherapy care I received at Kinetara under the guidance of Dr. Palak. I approached her for degenerative knee-related issues that were significantly affecting my daily activities. Dr. Palak conducted a thorough assessment of my condition and designed a personalized treatment plan with a strong focus on functional manual therapy and leg-strengthening exercises. Her systematic approach addressed not only pain relief but also the underlying factors contributing to my discomfort. Over the course of the therapy, I have experienced nearly 70% relief from pain and discomfort. The muscle-strengthening program has helped reduce the load on my knee, leading to noticeable improvements in walking, climbing stairs, balance, and overall mobility. I sincerely appreciate Dr. Palak’s expertise, dedication, and encouragement throughout my recovery journey. Her guidance has made a significant difference in my quality of life. Thank you, Dr. Palak, for your excellent care and support.",
    rating: 5,
  },
  {
    name: "Divya Kapoor",
    image: "/assets/avatar.png",
    title: "Neck and Shoulder Pain Treatment",
    review:
      "I had an extremely positive physiotherapy experience with Dr. Palak Jain. She’s knowledgeable, understanding, accommodating and a kind hearted person. She carefully understood my concerns, explained the treatment plan clearly, and tailored the exercises to my needs. I noticed a real improvement in my mobility and pain levels within a few sessions. Very professional and supportive. Thank you!",
    rating: 5,
  },
];

export function Testimonials({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-primary-foreground py-20 relative" id="testimonials">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#153C33] mt-4">
            {title ?? (
              <>
                What Patients <span className="text-primary/80">Says</span> About us
              </>
            )}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">{subtitle}</p>
          )}
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
