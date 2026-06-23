import { FaArrowRight } from "react-icons/fa";
import { Car, Clock, MapPin, Navigation } from "lucide-react";
import type { ServiceArea } from "@/lib/service-areas";

export function LocationIntroSection({ area }: { area: ServiceArea }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
          Physiotherapy for {area.displayName} residents
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">{area.intro}</p>

        <div className="grid grid-cols-2 gap-4 mb-10 max-w-md">
          <div className="bg-primary-foreground rounded-xl px-4 py-4 text-center">
            <Navigation className="h-5 w-5 text-primary mx-auto mb-1" />
            <p className="text-lg font-bold text-primary">{area.distance}</p>
            <p className="text-xs text-gray-500 mt-0.5">Distance from {area.name}</p>
          </div>
          <div className="bg-primary-foreground rounded-xl px-4 py-4 text-center">
            <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
            <p className="text-lg font-bold text-primary">{area.travelTime}</p>
            <p className="text-xs text-gray-500 mt-0.5">Typical travel time</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-primary mb-4">
          Why patients from {area.displayName} choose Kinetara
        </h3>
        <ul className="space-y-3 mb-10">
          {area.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start">
              <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <FaArrowRight className="text-white text-xs" />
              </div>
              <span className="text-gray-700 leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-primary">
                How to reach us from {area.displayName}
              </h3>
            </div>
            <ul className="space-y-3">
              {area.howToReach.map((route) => (
                <li key={route} className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-primary mr-2 mt-1">•</span>
                  {route}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-primary">Parking</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{area.parking}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
