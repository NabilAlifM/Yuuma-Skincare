# 🌿 Yuuma Skincare — Company Profile Website

> **"Your Skin, Your Story."**  
> Website company profile premium untuk brand skincare klinis asal Indonesia, dibangun dengan performa tinggi dan SEO-first approach.

---

## 📖 Pengenalan Proyek

**Yuuma Skincare** adalah brand skincare premium Indonesia yang lahir dari pengalaman klinik kecantikan. Website ini dibangun sebagai company profile digital yang merepresentasikan identitas brand — klinis, hangat, dan personal.

- 🏥 Brand berbasis pengalaman klinik kecantikan bertahun-tahun
- 🌴 Diformulasikan khusus untuk iklim tropis Indonesia
- 🎨 Desain mengikuti sistem **60-30-10** color rule (Ivory Cream · Taupe Brown · Viridian)
- 📱 Fully responsive — mobile, tablet, dan desktop
- ⚡ Dioptimalkan untuk **Core Web Vitals** dan deployment di **Vercel**

---

## 🛠️ Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** — App Router, Server Components, File-based routing
- **[React 19](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety

### Styling
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS framework
- **Custom Design System** — CSS variables berbasis brand Yuuma Skincare
- **Google Fonts via `next/font`** — Cormorant Garamond (serif) + Jost (sans-serif)

### Animasi
- **[Motion (motion/react)](https://motion.dev/)** — Page transitions & scroll animations

### Icons
- **[Lucide React](https://lucide.dev/)** — Icon library
- **[React Icons](https://react-icons.github.io/react-icons/)** — Social media icons (Instagram, WhatsApp, TikTok)

### SEO & Performance
- **Next.js Metadata API** — Title, description, Open Graph per halaman
- **`next/image`** — Lazy loading, WebP/AVIF otomatis, responsive images
- **`next/font`** — Font optimization, zero FOUT
- **Sitemap & Robots** — Auto-generated via Next.js
- **`@vercel/analytics`** — Core Web Vitals monitoring

### Deployment
- **[Vercel](https://vercel.com/)** — Hosting & CI/CD

---

## ✨ Key Features

### Halaman
- 🏠 **Home** — Hero section, brand values, story teaser, featured products, skin concerns, before-after testimonial
- 📖 **Our Story** — Editorial hero dengan banner image, origin story, three pillars, milestone timeline, closing CTA
- 🛍️ **Products** — Filter by category, search bar sticky, product grid
- 🔍 **Product Detail** — Gambar produk, manfaat, bahan aktif, tombol WhatsApp per produk

### Fitur Teknis
- ✅ **Page Transitions** — Smooth fade via `template.tsx` + Motion
- ✅ **Sticky Filter Bar** — Produk filter mengikuti scroll navbar
- ✅ **WhatsApp Integration** — CTA langsung ke WA dengan pesan prefix otomatis
- ✅ **Dynamic Metadata** — SEO title & description unik per halaman
- ✅ **Static Params** — Product detail di-generate secara statis (`generateStaticParams`)
- ✅ **Hover Animations** — Zoom image, scale card, animated underline navbar
- ✅ **Active Link Indicator** — Animated underline pada nav link aktif
- ✅ **Mobile Menu** — Hamburger menu dengan animasi slide
- ✅ **Related Products** — Rekomendasi produk lain di halaman detail
- ✅ **Before-After Section** — Testimonial visual dengan hover effect

---

## 🗂️ Struktur Folder

```
yuuma-skincare/
├── public/
│   └── assets/              # Gambar produk, logo, banner
├── src/
│   └── app/
│       ├── components/      # Shared components
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   ├── HomeClient.tsx
│       │   ├── StoryClient.tsx
│       │   ├── ProductsClient.tsx
│       │   ├── ProductDetailClient.tsx
│       │   └── ProductCard.tsx
│       ├── products/
│       │   ├── page.tsx         # Halaman daftar produk
│       │   └── [id]/
│       │       └── page.tsx     # Halaman detail produk
│       ├── story/
│       │   └── page.tsx         # Halaman Our Story
│       ├── constants.ts         # Data produk
│       ├── globals.css          # Design system & Tailwind config
│       ├── layout.tsx           # Root layout + font + metadata
│       ├── page.tsx             # Halaman Home
│       ├── template.tsx         # Page transition wrapper
│       ├── sitemap.ts           # Auto sitemap
│       └── robots.ts            # Crawler rules
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Setup & Instalasi

### Prerequisites
- **Node.js** v18 atau lebih baru
- **npm** v9 atau lebih baru

### Langkah Instalasi

**1. Clone repository**
```bash
git clone https://github.com/username/yuuma-skincare.git
cd yuuma-skincare
```

**2. Install dependencies**
```bash
npm install
```

**3. Jalankan development server**
```bash
npm run dev
```

**4. Buka di browser**
```
http://localhost:3000
```

### Scripts yang Tersedia
- `npm run dev` — Development server dengan hot reload
- `npm run build` — Build untuk production
- `npm run start` — Jalankan production build
- `npm run lint` — TypeScript type check

---

## ⚙️ Konfigurasi

### Nomor WhatsApp
Ganti nomor WA di dua tempat:

```tsx
// src/app/components/Navbar.tsx
href={`https://wa.me/6281234567890?text=...`}

// src/app/components/ProductDetailClient.tsx
const WA_NUMBER = "6281234567890";
```

### Domain untuk Sitemap & Robots
```ts
// src/app/sitemap.ts & robots.ts
url: "https://yuuma.id"  // ganti dengan domain asli
```

### Gambar Eksternal (jika pakai CDN)
```ts
// next.config.ts
remotePatterns: [
  { protocol: "https", hostname: "your-cdn.com" }
]
```

---

## 🎨 Design System

| Token | Nilai | Penggunaan |
|---|---|---|
| `--background` | `#FBF8F3` Ivory Cream | 60% — Background utama |
| `--foreground` | `#7C6658` Taupe Brown | 30% — Teks & elemen struktural |
| `--accent` | `#5b8266` Viridian | 10% — CTA, highlight, aksen |
| `--color-pale-almond` | `#E8DDD0` | Card, section alternatif |
| `--color-warm-nude` | `#A98E79` | Hover, label sekunder |
| `--color-moss-green` | `#859064` | Hover state CTA |

### Font
- **Display/Heading** — Cormorant Garamond (Serif) — `font-serif`
- **Body/UI** — Jost (Sans-Serif) — `font-sans`

---

## 📦 Deployment ke Vercel

**1. Push ke GitHub**
```bash
git add .
git commit -m "initial commit"
git push origin main
```

**2. Import di Vercel**
- Buka [vercel.com](https://vercel.com) → **New Project**
- Import repository dari GitHub
- Vercel otomatis mendeteksi Next.js — klik **Deploy**

**3. Custom Domain** *(opsional)*
- Di Vercel dashboard → **Settings** → **Domains**
- Tambahkan domain `yuuma.id`

---

## 📋 Manfaat Pendekatan Teknis

- 🚀 **Performa tinggi** — Server Components meminimalkan JavaScript yang dikirim ke browser
- 🔍 **SEO optimal** — Metadata unik per halaman, sitemap otomatis, structured data-friendly
- 🖼️ **Image optimization** — `next/image` otomatis convert ke WebP/AVIF dan lazy load
- 🔤 **Zero FOUT** — `next/font` host font di Vercel, tidak ada flash of unstyled text
- 📱 **Mobile-first** — Layout responsive dengan Tailwind breakpoints
- ⚡ **Fast navigation** — Client-side routing dengan prefetch otomatis
- 🔒 **Type-safe** — TypeScript di seluruh codebase mencegah runtime error

---

## 👤 Credits

Dibangun untuk **Yuuma Skincare** — Premium Indonesian skincare born from clinical expertise.

- Design System: Berdasarkan brief brand Yuuma Skincare
- Photography: Aset produk Yuuma Skincare
- AI Image: Generated via Neo Banana

---

*© 2025 Yuuma Skincare. Indonesian clinical heritage.*
