import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaEnvelope, FaLinkedin, FaPhoneAlt} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/white-logo.png" // Assuming you have a white version of the logo
                alt="Kinetara Logo"
                width={120}
                height={120}
              />
            </div>
            {/* <p className="text-gray-300 max-w-md">
              Kinetara - The Next-Gen Physiotherapy.
            </p> */}
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://www.facebook.com/kinetaraphysiotherapy/"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://www.instagram.com/kinetara.physiotherapy/"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.linkedin.com/company/kinetara/"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="mailto:kinetaraphysiotherapy@gmail.com"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <FaEnvelope />
              </Link>
            </div>
          </div>

          {/* More Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">More Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#what-we-treat" className="text-gray-300 hover:text-white">
                  Our Offerings
                </Link>
              </li>
              <li>
                <Link href="/about#why-choose-us" className="text-gray-300 hover:text-white">
                  Why Kinetara
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Also Listed On</h3>
            <div className="flex items-center text-gray-300">
              <Link
                href="https://www.justdial.com/Delhi/Kinetara-The-Next-Gen-Physiotherapy-Axis-Bank-Cr-Park-C-R-Park/011PXX11-XX11-250930122348-Q5R7_BZDET?catid=&checkin=&checkout=&vpfs=&stxt=Kinetara%20The%20Next%20Gen%20Physiotherapy%20Axis%20Bank%20Cr%20Park%20C%20R%20Park&nid=&stype=category_list&search=Kinetara-The-Next-Gen-Physiotherapy-Axis-Bank-Cr-Park-C-R-Park&area=Axis%20Bank%20Cr%20Park%20C%20R%20Park&type=Physiotherapy%20Centres&totalJdReviews=undefined&bdmsgtype=&bdcaptiontype=&bdpage=rsltpge&slectedDimgTag=&show_open_abd=0&isb2b=&thumbnail_tag=&jdmartId="
                className="hover:text-white"
                target="_blank"
              >
                Just Dial
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>Copyright 2025 Kinetara. All Rights Reserved.</p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Terms And Conditions
            </Link>
            <Link href="/#faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
