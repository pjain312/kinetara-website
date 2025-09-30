"use client";
import { Sparkles } from "lucide-react";

const bannerItems = [
  "Working Hours : Sun to Sat : 8:00 AM To 8:00 PM",
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
