"use client";
import Link from "next/link";
import { MapPinIcon, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { MobileNav } from "./mobile-nav";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Kinetara Logo" width={100} height={100} />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 font-semibold"
          >
            Home
          </Link>
          <Link
            href="about"
            className="text-primary hover:text-primary/80 font-semibold"
          >
            About Us
          </Link>
          <Link
            href="/#what-we-treat"
            className="text-primary hover:text-primary/80 font-semibold"
          >
            Our Offerings
          </Link>
          <Link
            href="/about#our-team"
            className="text-primary hover:text-primary/80 font-semibold"
          >
            Our team
          </Link>
          <Link
            href="/about#why-choose-us"
            className="text-primary hover:text-primary/80 font-semibold"
          >
            Why Kinetara
          </Link>
          <Link
            href="/about#testimonials"
            className="text-primary hover:text-primary/80 font-semibold"
          >
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <MapPinIcon className="h-6 w-6 text-primary" />
          </Link>
          <Link
            href="https://www.facebook.com/people/Kinetara-Physiotherapy/pfbid02utNCg3n7Sc1jhEqzicU4mwUuwTy5HfmqFDfcDpVvgWA3dpCD3S8pDprd3xS4E6Xnl/?mibextid=wwXIfr&rdid=p8ZNVtivQwBp1s3s&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16p8qbbJjD%2F%3Fmibextid%3DwwXIfr"
            target="_blank"
            className="hover:text-accent"
          >
            <FaFacebookF className="h-6 w-6 text-primary" />
          </Link>
          <Link
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm hover:text-accent"
          >
            <FaWhatsapp className="h-6 w-6 text-primary" />
          </Link>
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && <MobileNav />}
    </header>
  );
}
