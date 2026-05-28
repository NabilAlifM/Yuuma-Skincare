"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
      isScrolled ? "bg-background border-b border-pale-almond py-4 shadow-soft" : "bg-transparent py-6"
    }`}
  >
    <div className="max-w-360 mx-auto px-10 flex items-center justify-between">
      
      {/* Logo — perlebar container */}
      <Link href="/" className="shrink-0 flex items-center">
  <div className="w-32 md:w-40 h-12 relative overflow-hidden">
    <Image 
      src="/assets/yuuma.png" 
      alt="Yuuma Skincare Logo" 
      fill
      priority 
      className="object-contain scale-[2.5] origin-[64%_50%]"
    />
  </div>
</Link>

        {/* Desktop Links (DENGAN EFEK ANIMATED UNDERLINE) */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            
            return (
              <Link
                key={link.name}
                href={link.path}
                className="relative group text-[11px] tracking-[0.2em] uppercase font-medium"
              >
                {/* Teks Menu */}
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? "text-viridian" : "text-taupe-brown/80 group-hover:text-viridian"
                  }`}
                >
                  {link.name}
                </span>

                {/* Garis Bawah (Animated Underline) */}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-viridian transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-10">
          <a
            href={`https://wa.me/6208170877123?text=${encodeURIComponent("Halo Yuuma! Saya tertarik untuk konsultasi mengenai produk skincare. Boleh dibantu? 🌿")}`}
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
              className="text-lg font-serif text-taupe-brown hover:text-viridian border-b border-pale-almond pb-2 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className="bg-viridian text-ivory-cream px-6 py-4 rounded-[100px] text-center font-medium shadow-sm active:bg-moss-green"
          >
            Explore Products
          </Link>
        </motion.div>
      )}
    </nav>
  );
}