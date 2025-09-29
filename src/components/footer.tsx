import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.png" // Assuming you have a white version of the logo
                alt="Kinetara Logo"
                width={100}
                height={100}
              />
            </div>
            <p className="text-gray-300 max-w-md">
              Kinetara - The Next-Gen Physiotherapy.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://www.facebook.com/people/Kinetara-Physiotherapy/pfbid02utNCg3n7Sc1jhEqzicU4mwUuwTy5HfmqFDfcDpVvgWA3dpCD3S8pDprd3xS4E6Xnl/?mibextid=wwXIfr&rdid=p8ZNVtivQwBp1s3s&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16p8qbbJjD%2F%3Fmibextid%3DwwXIfr"
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

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="flex items-center text-gray-300">
              <FaEnvelope className="mr-3" />
              <Link
                href="mailto:kinetaraphysiotherapy@gmail.com"
                className="hover:text-white"
              >
                kinetaraphysiotherapy@gmail.com
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
