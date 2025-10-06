import { AboutHero } from "@/components/about-hero";
import { AboutContent } from "@/components/about-content";
import { Testimonials } from "@/components/testimonials";
import { TherapistTeam } from "@/components/therapist-team";
import { WhyChooseUs } from "@/components/why-choose-us";
import { FasterLastingRecovery } from "@/components/faster-lasting-recovery";

export default function AboutPage() {
  return (
    <main>
      {/* <AboutHero /> */}
      <AboutContent />
      <WhyChooseUs />
      <TherapistTeam />
      {/* <Testimonials /> */}
      {/* <FasterLastingRecovery /> */}
    </main>
  );
}
