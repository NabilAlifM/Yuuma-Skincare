import type { Metadata } from "next";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Heart, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/app/constants";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Yuuma Skincare — Your Skin, Your Story.",
};

const FADE_IN = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col md:grid md:grid-cols-12 items-center px-10 py-12 max-w-[1440px] mx-auto gap-12">
        <motion.div 
          className="md:col-span-7 space-y-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <h1 className="text-[72px] md:text-[100px] font-serif text-deep-brown leading-[0.85] tracking-tight">
              Your Skin,<br />
              <span className="italic text-nude-pink">Your Story.</span>
            </h1>
            <p className="text-xl text-deep-brown/70 max-w-md font-light leading-relaxed">
              Skincare yang lahir dari klinik. <br />
              Dibuat untuk membantu perjalanan kulitmu menemukan rasa nyaman yang nyata.
            </p>
          </div>
          <div className="flex gap-6">
            <Link 
              href="/products"
              className="bg-deep-brown text-white px-10 py-4 rounded-full text-[12px] uppercase tracking-widest font-semibold hover:bg-nude-pink transition-all shadow-soft"
            >
              Explore Products
            </Link>
            <Link 
              href="/story"
              className="border border-deep-brown text-deep-brown px-10 py-4 rounded-full text-[12px] uppercase tracking-widest font-semibold hover:bg-cream-beige transition-all"
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
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfad450216?auto=format&fit=crop&q=80&w=1200" 
              alt="Soft skincare mood" 
              className="w-full h-[650px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>

      {/* Brand Value Strip */}
      <section className="bg-warm-white py-16 px-10 border-y border-cream-beige">
        <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between gap-12">
          {[
            { label: "BPOM Registered" },
            { label: "Clinically Tested" },
            { label: "Barrier-First Formula" },
            { label: "Tropical Skin Solution" }
          ].map((val, i) => (
            <motion.div 
              key={i}
              className="flex items-center space-x-3 opacity-70"
            >
              <div className="w-5 h-5 rounded-full border border-deep-brown flex items-center justify-center text-[8px] font-bold">✓</div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">{val.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="bg-warm-white py-32 px-10">
        <div className="max-w-4xl mx-auto p-12 md:p-20 bg-cream-beige rounded-[3rem] relative overflow-hidden text-center md:text-left">
          <div className="relative z-10 space-y-8">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-nude-pink">The Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-serif italic leading-tight text-deep-brown">
              "Bukan tentang sempurna. <br />
              Tentang nyaman dengan dirimu sendiri."
            </h2>
            <p className="text-lg text-deep-brown/80 leading-relaxed max-w-xl font-light">
              Yuuma lahir dari pengalaman klinik kecantikan bertahun-tahun. Kami percaya kesehatan kulit adalah investasi emosional terdalam bagi setiap orang.
            </p>
            <Link href="/story" className="inline-block text-[11px] uppercase tracking-widest font-bold border-b-2 border-nude-pink pb-1 hover:text-nude-pink transition-all">
              Read Our Origin Story
            </Link>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sage-green opacity-10 rounded-full blur-[80px]"></div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div {...FADE_IN}>
            <p className="text-sage-green font-bold text-[10px] uppercase tracking-widest mb-2">Editor's Choice</p>
            <h2 className="text-4xl md:text-5xl font-serif text-deep-brown">Our Favorites</h2>
          </motion.div>
          <motion.div {...FADE_IN}>
            <Link href="/products" className="text-deep-brown font-medium hover:text-nude-pink flex items-center space-x-2">
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
      <section className="bg-warm-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...FADE_IN} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-deep-brown mb-4">Focus by Concern</h2>
            <p className="text-deep-brown/60">Pilih perawatan yang sesuai dengan kebutuhan unik kulitmu.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Acne Control", color: "bg-sage-green/10" },
              { name: "Barrier Repair", color: "bg-nude-pink/10" },
              { name: "Hydration", color: "bg-cream-beige" },
              { name: "Anti-Aging", color: "bg-deep-brown/5" }
            ].map((concern, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, backgroundColor: "rgba(217, 184, 167, 0.2)" }}
                className={`${concern.color} p-10 rounded-[12px] text-center cursor-pointer transition-all border border-transparent hover:border-nude-pink/30 flex items-center justify-center`}
              >
                <span className="font-serif text-xl font-medium text-deep-brown">{concern.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Strip */}
      <section className="bg-cream-beige/50 py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.h2 {...FADE_IN} className="text-3xl md:text-4xl font-serif text-center text-deep-brown">
            Kulit Sehat, Cerita Nyata
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                {...FADE_IN}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-[8px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
              >
                <img 
                  src={`https://images.unsplash.com/photo-${1550000000000 + i * 1000}?auto=format&fit=crop&q=80&w=600`} 
                  alt="User reviews"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
