"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";
import { PRODUCTS } from "@/app/constants";
import ProductCard from "../components/ProductCard";
import { Search, MapPin, BadgeCheck, FlaskConical } from "lucide-react";

export default function ProductsClient() {
    const [filter, setFilter] = useState("All");
          const categories = ["All", "Cleanser", "Moisturizer", "Serum", "Sunscreen", "Treatment"];
        
          const filteredProducts = filter === "All" 
            ? PRODUCTS 
            : PRODUCTS.filter(p => p.category === filter);
        
          return (
            <div className="pt-20">
              {/* Header */}
              <section className="bg-background py-24 px-6 text-center border-b border-pale-almond">
                <div className="max-w-4xl mx-auto space-y-6">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs uppercase tracking-[0.3em] font-bold text-viridian"
                  >
                    Clinical Routine
                  </motion.p>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-serif text-taupe-brown"
                  >
                    Our Products
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-taupe-brown/60 font-light"
                  >
                    Diformulasikan khusus untuk menjaga barrier kulit di iklim tropis Indonesia.
                  </motion.p>
                </div>
              </section>
        
              {/* Filter Bar */}
              <section className="sticky top-[80px] z-40 bg-background/80 backdrop-blur-md py-6 px-6 border-b border-pale-almond">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
                  <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2 md:pb-0">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`flex-shrink-0 px-8 py-2.5 rounded-[100px] text-sm font-medium transition-all ${
                          filter === cat 
                            ? "bg-viridian text-background shadow-md shadow-viridian/20" 
                            : "bg-pale-almond/50 text-taupe-brown hover:bg-pale-almond"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  <div className="hidden md:flex items-center space-x-2 bg-pale-almond/30 border border-taupe-brown/5 rounded-full px-4 py-2 text-taupe-brown/50">
                    <Search size={16} />
                    <input type="text" placeholder="Search products..." className="bg-transparent border-none outline-none text-sm w-48 text-taupe-brown" />
                  </div>
                </div>
              </section>
        
              {/* Product Grid */}
              <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                
                {filteredProducts.length === 0 && (
                  <div className="py-32 text-center space-y-4">
                    <Search size={48} className="mx-auto text-pale-almond" />
                    <h3 className="font-serif text-2xl text-taupe-brown">Produk tidak ditemukan</h3>
                    <p className="text-taupe-brown/60">Coba pilih kategori lain yang anda butuhkan.</p>
                  </div>
                )}
              </section>
        
              {/* Quiz Banner */}
              <section className="px-6 mb-24">
                <div className="max-w-7xl mx-auto bg-pale-almond rounded-[32px] p-12 md:p-24 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none transform scale-150 rotate-12">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#4A3728" d="M38.2,-64.1C51.1,-58.5,64.1,-49.5,72.6,-36.8C81.1,-24.2,85.2,-7.9,82.4,7.4C79.6,22.7,69.9,37,58.3,47.8C46.7,58.6,33.1,65.8,18.8,69.5C4.5,73.1,-10.5,73.2,-25,69C-39.5,64.8,-53.4,56.3,-64.2,44.5C-75,32.7,-82.7,17.5,-83.4,1.8C-84.1,-13.9,-77.8,-30.1,-67.6,-43.3C-57.5,-56.4,-43.4,-66.6,-28.9,-71.1C-14.4,-75.6,0.5,-74.4,14.6,-71.4C28.7,-68.4,42,-63.6,38.2,-64.1Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  
                  <div className="max-w-2xl relative z-10 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-serif text-taupe-brown">Belum tahu kulitmu <br />butuh apa?</h2>
                    <p className="text-lg text-taupe-brown/70 leading-relaxed font-light">
                      Konsultasikan masalah kulitmu dan temukan rutinitas yang paling tepat hanya dalam 2 menit.
                    </p>
                    <button className="bg-taupe-brown text-background px-10 py-5 rounded-[100px] font-bold text-xs uppercase tracking-widest hover:bg-warm-nude transition-all shadow-soft transform-gpu active:scale-95">
                      Cari Tahu Sekarang
                    </button>
                  </div>
                </div>
              </section>
        
              {/* Reassurance Strip */}
              <section className="border-t border-pale-almond py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center space-y-3">
                      <BadgeCheck className="text-viridian" size={32} />
                      <h4 className="font-serif text-xl font-bold">BPOM Registered</h4>
                      <p className="text-sm text-taupe-brown/50 uppercase tracking-widest font-semibold">100% Certified Safe</p>
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                      <FlaskConical className="text-warm-nude" size={32} />
                      <h4 className="font-serif text-xl font-bold">Dermatologist Tested</h4>
                      <p className="text-sm text-taupe-brown/50 uppercase tracking-widest font-semibold">Clinically Proven</p>
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                      <MapPin className="text-taupe-brown" size={32} />
                      <h4 className="font-serif text-xl font-bold">Tropical Formulation</h4>
                      <p className="text-sm text-taupe-brown/50 uppercase tracking-widest font-semibold">Dibuat untuk Indonesia</p>
                    </div>
                </div>
              </section>
            </div>
          );
}