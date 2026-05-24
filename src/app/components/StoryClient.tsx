"use client";

import { motion } from "motion/react";
import Link from "next/link";

const FADE_IN = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function StoryClient() {
    return (
    <div className="pt-20">
      {/* Editorial Hero */}
      <section className="bg-pale-almond/30 py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4A3728" d="M38.2,-64.1C51.1,-58.5,64.1,-49.5,72.6,-36.8C81.1,-24.2,85.2,-7.9,82.4,7.4C79.6,22.7,69.9,37,58.3,47.8C46.7,58.6,33.1,65.8,18.8,69.5C4.5,73.1,-10.5,73.2,-25,69C-39.5,64.8,-53.4,56.3,-64.2,44.5C-75,32.7,-82.7,17.5,-83.4,1.8C-84.1,-13.9,-77.8,-30.1,-67.6,-43.3C-57.5,-56.4,-43.4,-66.6,-28.9,-71.1C-14.4,-75.6,0.5,-74.4,14.6,-71.4C28.7,-68.4,42,-63.6,38.2,-64.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[12px] uppercase tracking-[0.3em] font-bold text-warm-nude"
          >
            The Beginning
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-taupe-brown leading-tight"
          >
            Yuuma lahir dari <br />
            <span className="italic">pengalaman nyata.</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-px w-24 bg-taupe-brown mx-auto"
          />
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div {...FADE_IN} className="flex-1">
          <div className="rounded-[40px] overflow-hidden shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
              alt="Clinical background" 
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-taupe-brown/10"></div>
          </div>
        </motion.div>
        
        <motion.div {...FADE_IN} className="flex-1 space-y-8">
          <h2 className="text-4xl font-serif text-taupe-brown leading-snug">
            Bukan sekadar skincare, melainkan perawatan berkelanjutan.
          </h2>
          <div className="space-y-6 text-taupe-brown/70 leading-relaxed text-lg font-light">
            <p>
              Berawal dari sebuah klinik kecantikan terkemuka di Indonesia, pendiri kami menyadari satu hal yang hilang: kesenjangan antara perawatan profesional dan rutinitas di rumah.
            </p>
            <p>
              Yuuma lahir untuk menjembatani kesenjangan tersebut. Kami memformulasikan produk dengan standar klinis namun tetap lembut bagi barrier kulit untuk penggunaan harian.
            </p>
            <p className="font-serif italic text-taupe-brown font-medium text-2xl">
              "Yuuma bukan sekadar produk. Yuuma adalah kelanjutan dari perawatan kamu."
            </p>
          </div>
        </motion.div>
      </section>

      {/* Three Pillars */}
      <section className="bg-pale-almond py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { num: "01", title: "Clinically Inspired", desc: "Diformulasikan berdasarkan data klinis dan pengalaman menangani berbagai jenis kulit." },
              { num: "02", title: "Barrier-First", desc: "Prinsip utama kami adalah menjaga dan memperkuat lapisan pertahanan kulit alami anda." },
              { num: "03", title: "Transparent Formulation", desc: "Setiap bahan dipilih dengan teliti tanpa rahasia, murni untuk efektivitas kulit." }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                {...FADE_IN}
                transition={{ delay: i * 0.2 }}
                className="space-y-6 md:border-l border-taupe-brown/10 md:pl-8"
              >
                <span className="text-5xl font-serif italic text-warm-nude opacity-50 block">{pillar.num}</span>
                <h3 className="text-2xl font-serif text-taupe-brown font-semibold">{pillar.title}</h3>
                <p className="text-taupe-brown/70 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-6 max-w-5xl mx-auto font-sans">
        <motion.h2 {...FADE_IN} className="text-4xl font-serif text-center mb-24">Our Milestone</motion.h2>
        <div className="space-y-16">
          {[
            { year: "2018", event: "Clinic Founded", detail: "Klinik kecantikan pertama resmi dibuka di Jakarta." },
            { year: "2020", event: "Formulation Phase", detail: "R&D produk dimulai untuk mengisi celah perawatan di rumah." },
            { year: "2023", event: "Yuuma Launched", detail: "Yuuma Skincare akhirnya hadir untuk semua jenis kulit." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              {...FADE_IN}
              className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-12"
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-3xl font-serif italic text-viridian font-bold">{item.year}</span>
              </div>
              <div className="relative flex-grow pb-8 border-l-2 border-viridian/20 pl-12">
                <div className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-viridian shadow-soft"></div>
                <h4 className="text-xl font-serif font-bold text-taupe-brown mb-2">{item.event}</h4>
                <p className="text-taupe-brown/60 leading-relaxed">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Banner */}
      <section className="bg-warm-nude py-24 px-6 text-center text-background">
        <motion.div {...FADE_IN} className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
            "Kulit sehat adalah investasi terbaik untuk dirimu."
          </h2>
          <Link 
            href="/products"
            className="inline-block bg-background text-warm-nude px-12 py-5 rounded-[100px] font-bold tracking-widest uppercase text-xs hover:bg-taupe-brown hover:text-background transition-all shadow-soft"
          >
            Kenali Produk Kami
          </Link>
        </motion.div>
      </section>
    </div>
  );
}