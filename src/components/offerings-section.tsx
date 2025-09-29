import { BriefcaseMedicalIcon, HomeIcon, LaptopIcon } from "lucide-react";

export function OfferingsSection() {
  return (
    <section className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-left md:items-center md:justify-center">
          <div className="flex items-start space-x-4 ">
            <div className="bg-white/10 p-4 rounded-lg">
              <BriefcaseMedicalIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Advanced Clinics</h3>
              <p className="text-white/80">
                Modern Infrastructure, Latest Technology & Top Physiotherapy
                Experts
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 ">
            <div className="bg-white/10 p-4 rounded-lg">
              <HomeIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Professional Home Care</h3>
              <p className="text-white/80">
                Physiotherapy at home with expert oversight & Strong quality
                checks
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 ">
            <div className="bg-white/10 p-4 rounded-lg">
              <LaptopIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Tele / Remote Rehab</h3>
              <p className="text-white/80">
                Personalized Physio exercises at home with Continuous guidance &
                mentoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
