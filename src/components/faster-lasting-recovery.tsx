"use client";

import { Target, Brain, ClipboardCheck, TrendingUp } from "lucide-react";

const recoverySteps = [
  {
    icon: <Target size={40} className="text-primary" />,
    title: "ASSESS",
    subtitle: "(ROOT-CAUSE)",
    heading: "AI + Physio Precision",
    description:
      "Our Physios uncover the root cause of your problem through advanced AI assessments – so treatments can deliver long-lasting relief & improved function",
  },
  {
    icon: <Brain size={40} className="text-primary" />,
    title: "PLAN",
    subtitle: "(SMART-GOALS)",
    heading: "Personalized Recovery Map",
    description:
      "Your recovery roadmap aligned with your health needs is structured around SMART Goals & Milestones. You’ll know exactly what progress to expect, and when",
  },
  {
    icon: <ClipboardCheck size={40} className="text-primary" />,
    title: "TRACK",
    subtitle: "(PROGRESS)",
    heading: "Proof of Recovery",
    description:
      "A data-driven system that measures progress at every milestone—optimizing treatment and keeping you motivated for the road ahead",
  },
  {
    icon: <TrendingUp size={40} className="text-primary" />,
    title: "ADVANCE",
    subtitle: "(RECOVERY)",
    heading: "Care Beyond Clinic",
    description:
      "With guided exercise programs, adherence tracking and expert follow-ups, you can maintain progress, prevent relapse and keep moving forward",
  },
];

export function FasterLastingRecovery() {
  return (
    <section className="bg-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary">
            Faster & Lasting Recovery
          </h2>
        </div>
        <div className="flex flex-wrap items-start justify-center">
          {recoverySteps.map((step, index) => (
            <div key={index} className="flex">
              <div className="flex flex-col items-center text-center max-w-[240px] mx-4 mb-8">
                <div className="flex items-center justify-center w-28 h-28 bg-white rounded-full border-4 border-primary mb-6">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold uppercase text-primary">
                  {step.title}
                </h3>
                <p className="text-sm font-semibold text-primary mb-4">
                  {step.subtitle}
                </p>
                <h4 className="text-base font-bold text-primary mb-3">
                  {step.heading}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < recoverySteps.length - 1 && (
                <div className="hidden md:flex items-center self-start mt-12 mx-4">
                  <svg
                    width="86"
                    height="14"
                    viewBox="0 0 86 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7C28.6667 7 57.3333 7 85 7"
                      stroke="#153C33"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M78 1L85 7L78 13"
                      stroke="#153C33"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
