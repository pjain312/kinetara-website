import Image from "next/image";

export function AboutContent() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/assets/about-photo.jpeg"
              alt="physiotherapy clinic in South Delhi, CR Park"
              width={400}
              height={300}
              className="rounded-lg shadow-lg object-cover w-full h-[600px]"
            />
          </div>
          <div>
            <h4 className="text-2xl md:text-4xl lg:text-4xl font-bold text-primary">
              Welcome to Kinetara - The Next-Gen Physiotherapy
            </h4>
            <div className="text-gray-600 text-lg space-y-4 mt-6">
              <p>
                At Kinetara, we believe recovery is more than just treatment – it’s a journey towards
                strength, confidence, and lasting wellness. Founded with a vision to redefine physiotherapy,
                Kinetara combines clinical expertise, advanced technology, and personalized care to help you heal
                faster and prevent future setbacks.
              </p>
              <p>
                Our approach goes beyond quick fixes. Every recovery plan begins with a detailed
                root-cause assessment, ensuring that we don’t just manage your symptoms, but address 
                the underlying issue. With evidence-based therapies, modern equipment, and compassionate 
                guidance, we partner with you from the very first session until you’re back to living life 
                without limitations.

              </p>
              <p>
                Whether you’re overcoming pain, recovering from an injury, or enhancing performance, Kinetara is 
                your trusted partner in lasting recovery. Because at Kinetara, it’s not just about feeling better 
                today — it’s about moving stronger tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
