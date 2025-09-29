'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowRight } from 'react-icons/fa';

const locations = [
  'Jammu And Kashmir',
  'Noida',
  'Bangalore',
  'Delhi',
  'Faridabad',
  'Ghaziabad',
  'Gurgaon',
  'Mumbai',
  'Pune',
  'Chennai',
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export function LocationsCarousel() {
  return (
    <section className="py-8 bg-[#E9F3F2]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={false}
          showDots={false}
          className="py-4"
        >
          {locations.map((location, index) => (
            <div key={index} className="px-2">
              <button className="bg-white rounded-full p-3 flex items-center justify-between w-full shadow-md">
                <span className="text-[#153C33] font-semibold text-sm whitespace-nowrap overflow-hidden text-ellipsis pr-2">
                  {location}
                </span>
                <div className="bg-[#153C33] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <FaArrowRight className="text-white text-sm" />
                </div>
              </button>
            </div>
          ))}
        </Carousel>
    </section>
  );
}
