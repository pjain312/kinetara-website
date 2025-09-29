import Image from "next/image";

export function AboutContent() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/assets/about.jpg"
              alt="Physiotherapy session"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div>
            <h4 className="text-2xl md:text-4xl lg:text-4xl font-bold text-primary mt-4">
              Welcome to Kinetara - The Next-Gen Physiotherapy
            </h4>
            <div className="text-gray-600 text-lg space-y-4 mt-6">
              <p>
                At Kinetara, we are a multispecialty physiotherapy clinic dedicated
                to helping patients recover, heal, and achieve long-term wellness. 
                We provide specialized care for musculoskeletal and neuromuscular conditions,
                sports injuries, and cardiac rehabilitation.
                Our philosophy is simple: we treat the person as a whole, not just the symptoms.
                By addressing the root cause of the problem, we ensure lasting results and improved
                quality of life.
              </p>
              <p>
                We ensure our clinics are equipped with the latest technology while maintaining a clean,
                positive, uplifting atmosphere to support faster and better recovery.
                With one of the most advanced physiotherapy setups in Delhi and a team of highly
                qualified specialists across different domains, Kinetara offers expert-driven,
                evidence-based treatments tailored to each individual. This makes us a trusted choice 
                for patients seeking effective and compassionate physiotherapy care.
              </p>
              <p>
                At Kinetara, we believe in building partnerships with our patients rather than
                limiting interactions to transactional care. We walk alongside you on your journey
                to recovery — from the very first session through to complete healing — with a 
                comprehensive program that combines multiple therapies and treatment modalities.
                Even after your treatment is complete, we continue to provide guidance and preventive
                care to help you avoid recurring pain or injuries. The smiles and relief we see on 
                our patients’ faces are our greatest motivation and the true measure of our success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
