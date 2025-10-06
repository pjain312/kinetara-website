"use client";

import Image from "next/image";

const team = [
  {
    name: "Dr. Palak Jain PT",
    role: "Founder | HOD",
    avatar: "/assets/team-member-1.jpeg",
    experience: "7+ years",
    qualification: "BPT, MPT- Ortho, MIAP, Certified Orthopaedic Manual Therapist (COMT), Certified Therapeutic Taping Practitioner (CKTP), IASTM Practitioner, Certified Cupping Therapist (CCT), Certified Pregnancy & Pelvic Floor Specialist."
  },
  {
    name: "Dr. Ammar Ali Khan PT",
    role: "Sr. Physiotherapist",
    avatar: "/assets/team-member-2.jpeg",
    experience: "3+ years",
    qualification: "BPT, MIAP, Certified Dry Needling Therapist (CDNT), Certified Cupping Therapist (CCT), Certified Therapeutic Taping Practitioner (CKTP)"
  },

  
];

export function TherapistTeam() {
  return (
    <section className="py-20" id="our-team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mt-4">
            Your Recovery Partners — Skilled, Trusted, Proven
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
              <p className="text-gray-600 font-medium mb-1">{member.role}</p>
              <p className="text-blue-600 font-medium text-sm mb-2">{member.experience} of experience</p>
              {member.qualification && (
                <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                  {member.qualification}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
