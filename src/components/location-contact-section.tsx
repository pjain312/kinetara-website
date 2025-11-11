"use client";

import { MapPin, Phone, Globe, Clock, Train } from "lucide-react";
import Link from "next/link";

export function LocationContactSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Visit Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">
                  D-584, CR Park, New Delhi
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                <Train className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Nearest Metro</h3>
                <p className="text-gray-600">
                  Nehru Enclave
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <Link 
                  href="tel:+918800974721"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  +91 88009 74721
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                <Link 
                  href="https://www.kinetaraphysiotherapy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  www.kinetaraphysiotherapy.com
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Opening Hours</h3>
                <p className="text-gray-600">
                  Mon–Sat 9 AM – 6 PM
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1234567890123!2d77.253804!3d28.538845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a8b8b8b8b9%3A0x8b8b8b8b8b8b8b8b!2sD-548%2C%20CR%20Park%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kinetara Physiotherapy Clinic Location"
            />
          </div>
        </div>

        {/* Map Link */}
        <div className="text-center mt-8">
          <Link
            href="https://maps.app.goo.gl/i3vgVT1KAvkmWSBy9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Get Directions on Google Maps
          </Link>
        </div>
      </div>
    </section>
  );
}

