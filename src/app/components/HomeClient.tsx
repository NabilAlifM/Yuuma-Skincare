"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/app/constants";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
import Image from "next/image";

const FADE_IN = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function HomeClient() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col md:grid md:grid-cols-12 items-center px-10 py-12 max-w-360 mx-auto gap-12">
        <motion.div 
          className="md:col-span-7 space-y-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <h1 className="text-[72px] md:text-[100px] font-serif text-taupe-brown leading-[0.85] tracking-tight">
              Your Skin,<br />
              <span className="italic text-warm-nude text-[72px]">Your Story.</span>
            </h1>
            <p className="text-xl text-taupe-brown/70 max-w-lg font-light leading-relaxed">
              Skincare yang lahir dari klinik. <br />
              Dibuat untuk membantu perjalanan kulitmu <br />menemukan rasa nyaman yang nyata.
            </p>
          </div>
          <div className="flex gap-6">
            <Link 
              href="/products"
              className="bg-taupe-brown text-white px-10 py-4 rounded-full text-[12px] uppercase tracking-widest font-semibold hover:bg-moss-green transition-all shadow-soft"
            >
              Explore Products
            </Link>
            <Link 
              href="/story"
              className="border border-taupe-brown text-taupe-brown px-10 py-4 rounded-full text-[12px] uppercase tracking-widest font-semibold hover:bg-pale-almond transition-all"
            >
              Our Journey
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="md:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-150 md:h-125 group">
            <Image 
  src="/assets/setproduct.png" 
  alt="Soft skincare mood" 
  fill
  priority
  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
style={{ objectPosition: "center 70%" }}
/>
          </div>
        </motion.div>
      </section>

      {/* Brand Value Strip */}
<section className="bg-background py-16 px-10 border-y border-pale-almond">
  <div className="max-w-360 mx-auto flex flex-wrap justify-between gap-12">
    {[
      { label: "BPOM Registered" },
      { label: "Clinically Tested" },
      { label: "Barrier-First Formula" },
      { label: "Tropical Skin Solution" }
    ].map((val, i) => (
      <motion.div 
        key={i}
        className="flex items-center space-x-3 opacity-90" // Sedikit dinaikkan opacity-nya agar lebih mewah
      >
        <div className="w-5 h-5 rounded-full border border-viridian text-viridian flex items-center justify-center text-[11px] font-bold shrink-0">
          ✓
        </div>
        <span className="text-[14px] uppercase tracking-[0.2em] font-semibold text-taupe-brown">
          {val.label}
        </span>
      </motion.div>
    ))}
  </div>
</section>

      {/* Brand Story Teaser */}
<section className="bg-background py-32 px-10">
  <div className="max-w-4xl mx-auto relative">
    
    {/* Bunga kiri atas — keluar dari border card */}
    <div className="absolute -top-16 -left-16 w-40 h-40 z-20 pointer-events-none">
      <Image
        src="/assets/flower-left.png"
        alt="decorative flower"
        fill
        className="object-contain drop-shadow-lg"
      />
    </div>

    {/* Bunga kanan bawah — keluar dari border card */}
    <div className="absolute -bottom-16 -right-16 w-40 h-40 z-20 pointer-events-none rotate-180">
      <Image
        src="/assets/flower-right.png"
        alt="decorative flower"
        fill
        className="object-contain drop-shadow-lg"
      />
    </div>

    {/* Card utama */}
    <div className="p-12 md:p-20 bg-taupe-brown rounded-[3rem] relative overflow-visible text-center z-10">
  {/* Tambahkan flex flex-col items-center di sini */}
  <div className="relative z-10 space-y-8 flex flex-col items-center">
    
    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-pale-almond">
      The Philosophy
    </p>
    
    <h2 className="text-4xl md:text-5xl font-serif italic leading-tight text-pale-almond">
      &quot;Bukan tentang sempurna. <br />
      Tentang nyaman dengan dirimu sendiri.&quot;
    </h2>
    
    <p className="text-lg text-pale-almond/80 leading-relaxed max-w-xl font-light">
      Yuuma lahir dari pengalaman klinik kecantikan bertahun-tahun. Kami percaya kesehatan kulit adalah investasi emosional terdalam bagi setiap orang.
    </p>
    
    <Link 
      href="/story" 
      className="inline-block text-[11px] text-pale-almond uppercase tracking-widest font-bold border-b-2 border-warm-nude pb-1 hover:text-warm-nude transition-all"
    >
      Read Our Origin Story
    </Link>
    
  </div>
  
  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-viridian opacity-10 rounded-full blur-[80px]"></div>
</div>

  </div>
</section>

      {/* Featured Products */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div {...FADE_IN}>
            <p className="text-viridian font-bold text-[10px] uppercase tracking-widest mb-2">
              Editor&apos;s Choice
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-taupe-brown">Our Favorites</h2>
          </motion.div>
          <motion.div {...FADE_IN}>
            <Link href="/products" className="text-taupe-brown font-medium hover:text-warm-nude flex items-center space-x-2">
              <span>View All Products</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Skin Concerns Section */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...FADE_IN} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-taupe-brown mb-4">Focus by Concern</h2>
            <p className="text-taupe-brown/60">Pilih perawatan yang sesuai dengan kebutuhan unik kulitmu.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Acne Control", color: "bg-viridian/10" },
              { name: "Barrier Repair", color: "bg-warm-nude/10" },
              { name: "Hydration", color: "bg-pale-almond" },
              { name: "Anti-Aging", color: "bg-taupe-brown/5" }
            ].map((concern, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, backgroundColor: "rgba(217, 184, 167, 0.2)" }}
                className={`${concern.color} p-10 rounded-xl text-center cursor-pointer transition-all border border-transparent hover:border-warm-nude/30 flex items-center justify-center`}
              >
                <span className="font-serif text-xl font-medium text-taupe-brown">{concern.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Strip */}
      <section className="bg-pale-almond/50 py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.h2 {...FADE_IN} className="text-3xl md:text-4xl font-serif text-center text-taupe-brown">
            Kulit Sehat, Cerita Nyata
          </motion.h2>

          {/* Label Before / After */}
          <motion.div {...FADE_IN} className="relative max-w-4xl mx-auto">
  <motion.div 
    className="rounded-3xl overflow-hidden shadow-xl cursor-crosshair"
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.4 }}
  >
    <Image
      src="/assets/beforeafter.png"
      alt="Before and after menggunakan Yuuma Skincare"
      width={1200}
      height={675}
      className="w-full object-cover transition-all duration-700 hover:brightness-110 hover:saturate-125"
    />
  </motion.div>

      {/* Label Before */}
      <motion.div 
        className="absolute top-4 left-6 bg-background/80 backdrop-blur-sm px-4 py-1.5 rounded-full"
        whileHover={{ opacity: 0 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-taupe-brown/60">
          Sebelum
        </span>
      </motion.div>

      {/* Label After */}
      <motion.div 
        className="absolute top-4 right-6 bg-background/80 backdrop-blur-sm px-4 py-1.5 rounded-full"
        whileHover={{ opacity: 0 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-viridian">
          Sesudah
        </span>
      </motion.div>

      {/* Overlay hint — muncul saat hover */}
      <div className="absolute inset-0 rounded-3xl bg-taupe-brown/0 hover:bg-taupe-brown/5 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 hover:opacity-100">
        <span className="bg-background/90 backdrop-blur-sm px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-taupe-brown">
          ✦ Hasil Nyata 30 Hari
        </span>
      </div>

      <p className="text-center text-xs text-taupe-brown/40 mt-4 font-light tracking-wide">
        Hasil nyata pengguna Yuuma Skincare &bull; 30 hari pemakaian rutin
      </p>
    </motion.div>
        </div>
      </section>
    </div>
  );
}