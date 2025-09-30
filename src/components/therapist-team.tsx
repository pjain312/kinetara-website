"use client";

import Image from "next/image";

const team = [
  {
    name: "Dr. Palak",
    role: "Founder",
    avatar: "/assets/team-member1.jpg",
  },
  
];

export function TherapistTeam() {
  return (
    <section className="py-20" id="our-team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-4">
            Our Dedicated & Experienced Therapist Team
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-[240px] h-[320px] mx-auto mb-4">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="240px"
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
