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
              <h3 className="text-xl font-bold mb-2">Next-Gen Physiotherapy Center</h3>
              <p className="text-white/80">
                Experience advanced rehabilitation in state-of-the-art facilities powered by modern equipment, 
                innovative techniques, and expert clinical care.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 ">
            <div className="bg-white/10 p-4 rounded-lg">
              <HomeIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Physiotherapy Beyond the Clinic</h3>
              <p className="text-white/80">
                Receive personalized physiotherapy in the comfort of your home — guided by Kinetara’s 
                trusted professionals for safe, effective recovery.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 ">
            <div className="bg-white/10 p-4 rounded-lg">
              <LaptopIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Connected Recovery Programs</h3>
              <p className="text-white/80">
                Stay on track with interactive, remote physiotherapy sessions designed 
                for continuous support, progress monitoring, and expert feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
