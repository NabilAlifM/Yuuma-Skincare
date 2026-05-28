"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { PRODUCTS } from "@/app/constants";
import ProductCard from "@/app/components/ProductCard"; // Pastikan path import ini benar
import { Search, MapPin, BadgeCheck, FlaskConical } from "lucide-react";

export default function ProductsClient() {
  const [filter, setFilter] = useState("All");
  
  // 1. State pencarian dipertahankan
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = ["All", "Cleanser", "Moisturizer", "Serum", "Sunscreen", "Treatment"];

  // 2. Fungsi filter yang menggabungkan kategori & pencarian dipertahankan
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

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
      <section className="sticky top-15 md:top-19 z-40 bg-background pt-6 md:pt-8 pb-5 px-6 border-b border-pale-almond">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          
          {/* Tombol Kategori */}
          <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`shrink-0 px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[13px] md:text-sm font-semibold transition-all ${
                  filter === cat 
                    ? "bg-viridian text-background shadow-md" 
                    : "bg-pale-almond/40 text-taupe-brown hover:bg-pale-almond/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Kotak Pencarian (Search Bar) */}
          <div className="hidden md:flex items-center space-x-2 bg-pale-almond/30 border border-taupe-brown/10 rounded-full px-5 py-2.5 focus-within:ring-1 focus-within:ring-viridian transition-all">
            <Search size={16} className="text-taupe-brown/50" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-48 text-taupe-brown placeholder:text-taupe-brown/50 font-medium" 
            />
          </div>

        </div>
      </section>
      {/* Product Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto min-h-[50vh]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Kondisi Jika Produk Tidak Ditemukan dari hasil Pencarian */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <Search size={48} className="mx-auto text-pale-almond mb-4" />
            <h3 className="font-serif text-2xl text-taupe-brown">Produk tidak ditemukan</h3>
            <p className="text-taupe-brown/60">Tidak ada produk yang cocok dengan pencarian &quot;{searchQuery}&quot;.</p>            
            <button 
              onClick={() => { setSearchQuery(""); setFilter("All"); }}
              className="mt-4 px-6 py-2 border border-taupe-brown rounded-full text-sm font-semibold text-taupe-brown hover:bg-pale-almond transition-all"
            >
              Reset Filter
            </button>
          </div>
        )}
      </section>

      {/* Quiz Banner */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto bg-pale-almond rounded-4xl p-12 md:p-24 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none transform scale-150 rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4A3728" d="M38.2,-64.1C51.1,-58.5,64.1,-49.5,72.6,-36.8C81.1,-24.2,85.2,-7.9,82.4,7.4C79.6,22.7,69.9,37,58.3,47.8C46.7,58.6,33.1,65.8,18.8,69.5C4.5,73.1,-10.5,73.2,-25,69C-39.5,64.8,-53.4,56.3,-64.2,44.5C-75,32.7,-82.7,17.5,-83.4,1.8C-84.1,-13.9,-77.8,-30.1,-67.6,-43.3C-57.5,-56.4,-43.4,-66.6,-28.9,-71.1C-14.4,-75.6,0.5,-74.4,14.6,-71.4C28.7,-68.4,42,-63.6,38.2,-64.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          
         <div className="max-w-2xl relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-taupe-brown">
            Belum tahu kulitmu <br />butuh apa?
          </h2>
          <p className="text-lg text-taupe-brown/70 leading-relaxed font-light">
            Konsultasikan masalah kulitmu dan temukan rutinitas yang paling tepat hanya dalam 2 menit.
          </p>
          
          {/* PERBAIKAN: Mengubah button menjadi tag <a> yang mengarah langsung ke WhatsApp */}
          <a
            href={`https://wa.me/6208170877123?text=${encodeURIComponent(
              "Halo Yuuma Skincare! 🌿 Saya ingin konsultasi gratis untuk mencari tahu produk dan rutinitas skincare yang paling tepat untuk jenis kulit saya. Boleh dibantu?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-taupe-brown text-background px-10 py-5 rounded-[100px] font-bold text-xs uppercase tracking-widest hover:bg-warm-nude hover:text-taupe-brown transition-all shadow-soft text-center"
          >
            Cari Tahu Sekarang
          </a>
        </div>
        </div>
      </section>

      {/* Reassurance Strip */}
      <section className="border-t border-pale-almond py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center space-y-3">
              <BadgeCheck className="text-viridian" size={32} />
              <h4 className="font-serif text-xl font-bold">BPOM REGISTERED</h4>
              <p className="text-sm text-taupe-brown/50  tracking-widest font-semibold">100% Certified Safe</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <FlaskConical className="text-viridian" size={32} />
              <h4 className="font-serif text-xl uppercase font-bold">Dermatologist Tested</h4>
              <p className="text-sm text-taupe-brown/50  tracking-widest font-semibold">Clinically Proven</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <MapPin className="text-viridian" size={32} />
              <h4 className="font-serif text-xl uppercase font-bold">Tropical Formulation</h4>
              <p className="text-sm text-taupe-brown/50  tracking-widest font-semibold">Dibuat untuk Indonesia</p>
            </div>
        </div>
      </section>
    </div>
  );
}