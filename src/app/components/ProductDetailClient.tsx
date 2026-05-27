"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Leaf, Sparkles, ShieldCheck, MessageCircle } from "lucide-react";
import type { Product } from "@/app/constants";

const WA_NUMBER = "6282111544412"; // ganti dengan nomor asli

// Map manfaat berdasarkan concern produk
const BENEFIT_MAP: Record<string, string[]> = {
  "Cleansing | Brightening": [
    "Membersihkan kotoran & sisa makeup secara lembut",
    "Mencerahkan kulit kusam secara bertahap",
    "Menjaga kelembapan alami kulit",
    "Cocok untuk kulit sensitif & kombinasi",
  ],
  "Hydration | Brightening": [
    "Menghidrasi kulit secara mendalam",
    "Menyeimbangkan kadar air di kulit",
    "Mencerahkan dan meratakan warna kulit",
    "Mempersiapkan skin barrier sebelum serum",
  ],
  "Dark Spots | Glowing": [
    "Memudarkan noda hitam & bekas jerawat",
    "Meratakan warna kulit tidak merata",
    "Memberikan efek glowing alami",
    "Meningkatkan produksi kolagen kulit",
  ],
  "Anti-Aging | Brightening": [
    "Meregenerasi sel kulit saat tidur",
    "Mengurangi tanda-tanda penuaan dini",
    "Mencerahkan dan melembapkan secara intensif",
    "Mengencangkan tekstur kulit",
  ],
  "UV Protection | Brightening": [
    "Melindungi dari paparan sinar UV A & B",
    "Melembapkan kulit sepanjang hari",
    "Mencerahkan dan meratakan warna kulit",
    "Formula ringan, tidak meninggalkan white cast",
  ],
};

// Map bahan-bahan key aktif berdasarkan produk
const INGREDIENT_MAP: Record<string, { name: string; benefit: string }[]> = {
  "1": [
    { name: "Niacinamide 4%", benefit: "Mencerahkan & mengecilkan pori" },
    { name: "Guayava Extract", benefit: "Antioksidan alami tropis" },
    { name: "Papaya Extract", benefit: "Eksfoliasi enzim lembut" },
    { name: "Saxifraga Sarmentosa", benefit: "Menenangkan kulit iritasi" },
  ],
  "2": [
    { name: "Niacinamide", benefit: "Mencerahkan & barrier repair" },
    { name: "Citrus Extract", benefit: "Antioksidan & vitamin C alami" },
    { name: "Sodium Hyaluronate", benefit: "Hidrasi mendalam hingga lapisan dermis" },
    { name: "Allantoin", benefit: "Menenangkan & regenerasi kulit" },
  ],
  "3": [
    { name: "Niacinamide 10%", benefit: "Depigmentasi intensif" },
    { name: "Alpinia Katsumadai Seed Extract", benefit: "Anti-inflamasi & brightening" },
    { name: "Alpha Arbutin", benefit: "Menghambat produksi melanin" },
    { name: "Peptide Complex", benefit: "Anti-aging & elastisitas kulit" },
  ],
  "4": [
    { name: "Niacinamide", benefit: "Mencerahkan overnight" },
    { name: "Alpha-Arbutin", benefit: "Memudarkan hiperpigmentasi" },
    { name: "Bakuchiol", benefit: "Alternatif retinol alami" },
    { name: "Ceramide Complex", benefit: "Merestorasi barrier kulit" },
  ],
  "5": [
    { name: "SPF 35 PA+++", benefit: "Proteksi UV A & B broadspectrum" },
    { name: "Niacinamide", benefit: "Brightening & barrier support" },
    { name: "Hyaluronic Acid", benefit: "Hidrasi tahan lama" },
    { name: "Zinc Oxide", benefit: "Physical filter lembut di kulit" },
  ],
};

interface Props {
  product: Product;
}

export default function ProductDetailClient({ product }: Props) {
  const benefits = BENEFIT_MAP[product.concern] ?? [];
  const ingredients = INGREDIENT_MAP[product.id] ?? [];

  const waMessage = encodeURIComponent(
    `Halo Yuuma! Saya tertarik dengan produk *${product.name}* (${product.price}). Boleh tanya-tanya lebih lanjut tentang produk ini? Terima kasih!`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  return (
    <div className="pt-20 min-h-screen bg-background">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-4">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-taupe-brown/50 hover:text-taupe-brown transition-colors text-sm font-medium group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Produk
        </Link>
      </div>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Kiri — Gambar Produk */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="sticky top-28"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden bg-pale-almond/40 aspect-square group shadow-xl">
              <Image
                src={product.image}
                alt={product.altText}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Badge kategori di atas foto */}
              <div className="absolute top-5 left-5 bg-background/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <span className="text-[10px] uppercase tracking-widest font-bold text-viridian">
                  {product.category}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Kanan — Detail Produk */}
 <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, delay: 0.1 }}
  className="space-y-8"
>
  {/* Nama & Harga */}
  <div className="space-y-3 pb-6 border-b border-pale-almond">
    <p className="text-[11px] uppercase tracking-[0.25em] text-warm-nude font-medium">
      {product.concern}
    </p>
    <h1 className="text-4xl md:text-5xl font-serif text-taupe-brown leading-tight font-semibold">
      {product.name}
    </h1>
    <p className="text-2xl font-sans text-taupe-brown font-medium tracking-wide">
      {product.price}
    </p>
  </div>

  {/* Deskripsi */}
  <div className="space-y-2">
    <p className="text-taupe-brown/60 leading-relaxed text-base font-light">
      {product.description}
    </p>
  </div>

  {/* Manfaat */}
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <Sparkles size={16} className="text-viridian" />
      <h3 className="text-xl uppercase tracking-widest font-bold text-taupe-brown">
        Manfaat Produk
      </h3>
    </div>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3 text-taupe-brown/80 text-sm font-light leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-viridian flex-shrink-0" />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bahan Aktif */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf size={16} className="text-viridian" />
                <h3 className="text-[11px] uppercase tracking-widest font-bold text-taupe-brown">
                  Bahan Aktif Utama
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ingredients.map((ing, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="bg-pale-almond/40 border border-pale-almond rounded-2xl px-4 py-3 space-y-0.5"
                  >
                    <p className="text-sm font-semibold text-taupe-brown">{ing.name}</p>
                    <p className="text-xs text-taupe-brown/60 font-light">{ing.benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Garansi / Badge */}
            <div className="flex items-center gap-2 text-taupe-brown/50 text-xs">
              <ShieldCheck size={14} className="text-viridian" />
              <span>BPOM Registered · Dermatologist Tested · Halal Certified</span>
            </div>

            {/* Tombol WA */}
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full bg-viridian text-ivory-cream py-5 rounded-full text-[12px] uppercase tracking-widest font-bold hover:bg-moss-green transition-all shadow-lg"
            >
              <MessageCircle size={18} />
              Tanya via WhatsApp
            </motion.a>

            <p className="text-center text-xs text-taupe-brown/40 -mt-4">
              Respon cepat · Konsultasi gratis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-pale-almond" />
      </div>

      {/* Produk Lainnya */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-10">
        <h2 className="text-3xl font-serif text-taupe-brown">Produk Lainnya</h2>
        <RelatedProducts currentId={product.id} />
      </section>
    </div>
  );
}

// Komponen produk terkait
import { PRODUCTS } from "@/app/constants";

function RelatedProducts({ currentId }: { currentId: string }) {
  const related = PRODUCTS.filter((p) => p.id !== currentId).slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {related.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <Link href={`/products/${p.id}`} className="group block space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-pale-almond/30">
              <Image
                src={p.image}
                alt={p.altText}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-viridian font-semibold">
                {p.category}
              </p>
              <h4 className="font-serif text-taupe-brown text-lg group-hover:text-warm-nude transition-colors">
                {p.name}
              </h4>
              <p className="text-taupe-brown/60 text-sm font-medium">{p.price}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}