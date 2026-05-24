"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation"
import { useState, useEffect, use } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // ganti useLocation().pathname

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/story" },
    { name: "Products", path: "/products" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background border-b border-pale-almond py-3 shadow-soft" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-serif font-light text-taupe-brown tracking-tighter">
          Yuuma
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-[11px] tracking-[0.2em] uppercase hover:text-warm-nude transition-colors font-medium ${
                pathname === link.path ? "text-warm-nude" : "text-taupe-brown/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        {/* CTA */}
<div className="hidden md:flex items-center">
  <a
    href={`https://wa.me/6281234567890?text=${encodeURIComponent("Halo Yuuma! Saya tertarik untuk konsultasi mengenai produk skincare. Boleh dibantu? 🌿")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-viridian text-ivory-cream px-8 py-2.5 rounded-full text-[11px] uppercase tracking-widest font-semibold shadow-sm hover:bg-moss-green transition-all"
  >
    KONSULTASI SEKARANG
  </a>
</div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-taupe-brown"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden flex flex-col p-6 space-y-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif text-taupe-brown hover:text-warm-nude border-b border-pale-almond pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className="bg-warm-nude text-background px-6 py-4 rounded-[100px] text-center font-medium"
          >
            Shop Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
