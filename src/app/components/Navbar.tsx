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
        isScrolled ? "bg-warm-white border-b border-cream-beige py-3 shadow-soft" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-serif font-light text-deep-brown tracking-tighter">
          Yuuma
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-[11px] tracking-[0.2em] uppercase hover:text-nude-pink transition-colors font-medium ${
                pathname === link.path ? "text-nude-pink" : "text-deep-brown/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-8">
          <button className="text-deep-brown hover:text-nude-pink transition-colors opacity-80 hover:opacity-100">
            <ShoppingBag size={18} />
          </button>
          <Link
            href="/products"
            className="bg-nude-pink text-white px-8 py-2.5 rounded-full text-[11px] uppercase tracking-widest font-semibold shadow-sm hover:bg-opacity-90 transition-all"
          >
            KONSULTASI SEKARANG
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-deep-brown"
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
          className="absolute top-full left-0 right-0 bg-warm-white shadow-lg md:hidden flex flex-col p-6 space-y-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif text-deep-brown hover:text-nude-pink border-b border-cream-beige pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className="bg-nude-pink text-warm-white px-6 py-4 rounded-[100px] text-center font-medium"
          >
            Shop Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
