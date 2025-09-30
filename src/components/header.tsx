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
          {/* <Link
            href="/about#our-team"
            className="text-primary hover:text-primary/80 font-semibold"
          >
            Our team
          </Link> */}
          <Link
            href="/about"
            className="text-primary hover:text-primary/80 font-semibold"
          >
            Why Kinetara
          </Link>
          {/* <Link
            href="/about#testimonials"
            className="text-primary hover:text-primary/80 font-semibold"
          >
            Testimonials
          </Link> */}
           <Link
            href="/#faq"
            className="text-primary hover:text-primary/80 font-semibold"
          >
            FAQ&#39;S
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <MapPinIcon className="h-6 w-6 text-primary" />
          </Link>
          <Link
            href="https://www.facebook.com/kinetaraphysiotherapy/"
            target="_blank"
            className="hover:text-accent"
          >
            <FaFacebookF className="h-6 w-6 text-primary" />
          </Link>
          <Link
            href="https://wa.me/8800974721"
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
