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
            <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-md flex items-center space-x-3">
              <div className="text-lg md:text-3xl font-bold text-primary">
                15+
              </div>
              <p className="text-muted-foreground">Years Of Experience</p>
            </div>
          </div>
          <div>
            <span className="bg-primary-foreground text-primary px-4 py-2 rounded-full text-sm font-semibold">
              About Us
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary mt-4">
              We Are The Best For
              <span className="text-primary/70"> Physiotherapy</span>
            </h2>
            <div className="text-gray-600 text-lg space-y-4 mt-6">
              <p>
                CB Physiotherapy is India&#39;s fastest growing Delivery Network
                for Physiotherapy & Chiropractors services. At CB Physiotherapy,
                we are committed to increase access to quality physio care
                through ultra-modern clinics and high-skilled practitioners. Our
                integrated / multi-therapy approach helps keep a strong focus on
                patient needs and deliver the highest level of patient centric
                care with better outcomes
              </p>
              <p>
                We serve a wide range of patients offering treatment at clinic
                as well as at the comfort of their homes. We make sure that our
                clinics are not only equipped with the latest equipment’s but
                also provide clean, energetic and uplifting atmospheres for
                better healing. For Home Care, our well-established processes
                ensure delivery of high-quality treatment with superior patient
                service.
              </p>
              <p>
                Rather than transactional engagement with patients, we are
                committed to partner with our patients in their journey of
                healing
              </p>
              <p>
                We work with you through your healing from start to finish
                providing a robust program involving combination of multiple
                therapies / modalities. Also, after treatment is over, we
                provide support / guidance to prevent injury from repeating /
                pain from returning. The happiness on our patient’s faces is
                what keeps us going.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
