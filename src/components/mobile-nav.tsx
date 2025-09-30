"use client";

import Link from "next/link";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Offerings", href: "/#what-we-treat" },
  // { name: "Our team", href: "/about#our-team" },
  { name: "Why Kinetara", href: "/about#why-choose-us" },
  { name: "FAQ'S", href: "/#faq" },
];

export function MobileNav() {
  return (
    <nav className="bg-primary p-4">
      <ul>
        {navigationItems.map((item) => (
          <li key={item.name} className="py-2">
            <Link
              href={item.href!}
              className="text-white font-medium hover:text-gray-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
