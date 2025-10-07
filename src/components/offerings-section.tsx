import { BriefcaseMedicalIcon, HomeIcon, LaptopIcon } from "lucide-react";

export function OfferingsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
        Our Physiotherapy Services in South Delhi
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
         Expert physiotherapy services in South Delhi (CR Park) for pain management,
         sports injury, neurological rehab, back and neck pain, post surgery rehab, and more.
        </p>
      </div>

      <div className="container mx-auto px-4 bg-primary-foreground text-primary py-12">
        <div className="grid md:grid-cols-3 gap-8 text-left md:items-stretch">
        <article className="flex items-start space-x-4 h-full">
          <div className="bg-white/10 p-4 rounded-lg flex-shrink-0">
            <BriefcaseMedicalIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-xl font-bold mb-2">Next-Gen Physiotherapy Center</h3>
            <p className="text-primary/80 flex-grow">
              Experience modern physiotherapy at Kinetara — a leading physiotherapy clinic in South Delhi.
              Our CR Park center is equipped with advanced rehabilitation machines, expert physiotherapists,
              and evidence-based treatment techniques that help you recover faster, move freely, and live 
              pain-free.
            </p>
          </div>
        </article>

        <article className="flex items-start space-x-4 h-full">
          <div className="bg-white/10 p-4 rounded-lg flex-shrink-0">
            <HomeIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-xl font-bold mb-2">Physiotherapy Beyond Clinic</h3>
            <p className="text-primary/80 flex-grow">
              Can&#39;t visit the clinic? Get professional physiotherapy at home in CR Park and nearby areas.
              Kinetara&#39;s expert physiotherapists bring trusted care to your doorstep — offering customized 
              home sessions for pain relief, post-surgery rehab, elderly mobility, and long-term recovery support.
            </p>
          </div>
        </article>
        
        <article className="flex items-start space-x-4 h-full">
          <div className="bg-white/10 p-4 rounded-lg flex-shrink-0">
            <LaptopIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-xl font-bold mb-2">Connected Recovery Programs</h3>
            <p className="text-primary/80 flex-grow">
              Stay consistent with your recovery from anywhere.
              Our online physiotherapy and virtual rehab programs let you connect
              with certified physiotherapists in South Delhi through live sessions, 
              progress tracking, and personalized exercise plans — ensuring your healing 
              never pauses. 
            </p>
          </div>
        </article>
        </div>
      </div>
    </section>
  );
}
