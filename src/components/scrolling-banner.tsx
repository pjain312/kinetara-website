"use client";
import { Sparkles } from "lucide-react";

const bannerItems = [
  "Appointment: +91 9821966696",
  "Working Hours : Sun to Sat : 8:00 AM To 8:00 PM",
  "Emergency No. : 011 4084 6393",
  "For any additional info, email us at info@cbphysiotherapy.com",
];

export function ScrollingBanner() {
  return (
    <div className="bg-primary-foreground text-primary py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...bannerItems, ...bannerItems].map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-8 text-sm font-medium">{item}</span>
            {index % bannerItems.length < bannerItems.length - 1 && (
              <Sparkles
                className="text-primary-foreground fill-primary"
                size={20}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
