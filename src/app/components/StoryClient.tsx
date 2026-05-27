"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

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
<section className="py-32 px-6 relative overflow-hidden min-h-125 flex items-center justify-center">
  
  {/* Background Image */}
  <Image
    src="/assets/banner.png"
    alt="Yuuma banner"
    fill
    priority
    className="object-cover object-center"
  />

  {/* Overlay */}
<div className="absolute inset-0 bg-black/40" />

{/* Konten teks */}
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
    transition={{ delay: 0.2, duration: 1 }}
    className="text-5xl md:text-7xl font-serif text-ivory-cream/80 leading-tight"
  >
    Yuuma lahir dari <br />
    <span className="italic">pengalaman nyata.</span>
  </motion.h1>
  <motion.div 
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="h-px w-24 bg-taupe-brown/30 mx-auto"
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
              className="w-full h-150 object-cover group-hover:scale-105 transition-transform duration-1000"
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
              <div className="shrink-0 w-24 text-right">
                <span className="text-3xl font-serif italic text-viridian font-bold">{item.year}</span>
              </div>
              <div className="relative grow pb-8 border-l-2 border-viridian/20 pl-12">
                <div className="absolute top-2 -left-2.25 w-4 h-4 rounded-full bg-viridian shadow-soft"></div>
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