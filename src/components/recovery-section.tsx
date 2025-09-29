"use client";
import { FileSearch, BrainCircuit, TrendingUp, Smartphone } from "lucide-react";

const recoverySteps = [
  {
    id: 1,
    icon: FileSearch,
    title: "ASSESS",
    subtitle: "(ROOT-CAUSE)",
    heading: "AI + Physio Precision",
    description:
      "Our Physios uncover the root cause of your problem through advanced AI assessments – so treatments can deliver long-lasting relief & improved function",
    hasRecoveryStep: true,
  },
  {
    id: 2,
    icon: BrainCircuit,
    title: "PLAN",
    subtitle: "(SMART-GOALS)",
    heading: "Personalized Recovery Map",
    description:
      "Your recovery roadmap aligned with your health needs is structured around SMART Goals & Milestones. You'll know exactly what progress to expect, and when",
    titleClass: "font-bold text-lg text-[#153C33]",
    subtitleClass: "font-semibold text-sm text-[#153C33] mb-2",
    headingClass: "font-semibold text-[#153C33] mt-4 mb-2",
    descriptionClass: "text-gray-600 px-2 text-sm",
    hasRecoveryStep: true,
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "TRACK",
    subtitle: "(PROGRESS)",
    heading: "Proof of Recovery",
    description:
      "A data-driven system that measures progress at every milestone— optimizing treatment and keeping you motivated for the road ahead",
    titleClass: "font-bold text-lg text-[#153C33]",
    subtitleClass: "font-semibold text-sm text-[#153C33] mb-2",
    headingClass: "font-semibold text-[#153C33] mt-4 mb-2",
    descriptionClass: "text-gray-600 px-2 text-sm",
    hasRecoveryStep: true,
  },
  {
    id: 4,
    icon: Smartphone,
    title: "ADVANCE",
    subtitle: "(RECOVERY)",
    heading: "Care Beyond Clinic",
    description:
      "With guided exercise programs, adherence tracking and expert follow- ups, you can maintain progress, prevent relapse and keep moving forward",
    titleClass: "font-bold text-lg text-[#153C33]",
    subtitleClass: "font-semibold text-sm text-[#153C33] mb-2",
    headingClass: "font-semibold text-[#153C33] mt-4 mb-2",
    descriptionClass: "text-gray-600 px-2 text-sm",
    hasRecoveryStep: false,
  },
];

export function RecoverySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-shadow-secondary">
          Faster & Lasting Recovery
        </h2>
        <div className="grid md:grid-cols-4 gap-8 md:gap-16 items-start">
          {recoverySteps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className={`text-center ${
                  step.hasRecoveryStep ? "relative recovery-step" : ""
                }`}
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center">
                    <IconComponent className="h-14 w-14 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl">{step.title}</h3>
                <p className="font-semibold text-xl mb-2">{step.subtitle}</p>
                <h4 className="font-semibold font-lg mt-4 mb-2">
                  {step.heading}
                </h4>
                <p className="px-2 text-lg">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
