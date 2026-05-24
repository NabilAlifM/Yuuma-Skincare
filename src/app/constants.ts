/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  concern: string;
  description: string;
  price: string;
  image: string;
  altText: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Facial Wash Brightening",
    category: "Cleanser",
    concern: "Cleansing | Brightening",
    description: "Pembersih wajah lembut dengan Niacinamide, ekstrak Guayava, Papaya & Saxifraga Sarmentosa untuk mengangkat kotoran sekaligus mencerahkan.",
    price: "Rp 89.000",
    image: "/assets/facial-wash.jpeg", // <-- Diubah menjadi /assets/
    altText: "Botol bening Yuuma Skincare Facial Wash Brightening diletakkan di atas batu alam, dikelilingi bunga aster putih segar dengan latar belakang warna terakota yang hangat."
  },
  {
    id: "2",
    name: "Toner Brightening Moisturizer",
    category: "Toner",
    concern: "Hydration | Brightening",
    description: "Toner penyegar dengan Niacinamide, Citrus Extract, dan Sodium Hyaluronate untuk hidrasi mendalam dan mempersiapkan skin barrier.",
    price: "Rp 99.000",
    image: "/assets/toner.png", // <-- Diubah menjadi /assets/
    altText: "Botol putih tinggi Yuuma Skincare Toner Brightening Moisturizer berdiri tegak di atas batu bertekstur coklat, dihiasi bunga aster putih pada latar belakang hangat."
  },
  {
    id: "3",
    name: "Serum Brightening",
    category: "Serum",
    concern: "Dark Spots | Glowing",
    description: "Serum konsentrat tinggi dengan Niacinamide dan Alpinia Katsumadai Seed Extract untuk memudarkan noda hitam dan meratakan warna kulit.",
    price: "Rp 129.000",
    image: "/assets/serum.jpeg", // <-- Diubah menjadi /assets/
    altText: "Botol kaca pipet Yuuma Skincare Serum Brightening ditempatkan di atas batu alam, diapit oleh bunga aster putih dengan pencahayaan natural bernuansa terakota."
  },
  {
    id: "4",
    name: "Night Cream Brightening",
    category: "Moisturizer",
    concern: "Anti-Aging | Brightening",
    description: "Krim malam intensif dengan Niacinamide, Alpha-Arbutin, dan Bakuchiol untuk meregenerasi sel kulit saat kamu tidur.",
    price: "Rp 149.000",
    image: "/assets/night-cream.png", // <-- Diubah menjadi /assets/
    altText: "Botol pump Yuuma Skincare Night Cream Brightening bersandar pada batu alam, dikelilingi rimbunan bunga aster putih di bawah sorotan cahaya hangat."
  },
  {
    id: "5",
    name: "Brightening Morning Duo",
    category: "Sunscreen & Day Cream",
    concern: "UV Protection | Brightening",
    description: "Set perlindungan pagi hari: UV Moist Day Cream & Sunscreen Brightmoist untuk melembapkan sekaligus melindungi dari paparan sinar matahari.",
    price: "Rp 189.000",
    image: "/assets/day-sunscreen-set.jpeg", // <-- Diubah menjadi /assets/
    altText: "Dua jar krim wajah Yuuma Skincare, UV Moist Day Cream dan Sunscreen Brightmoist, disusun bertumpuk di atas batu dengan hiasan bunga aster berlatar belakang hangat bernuansa terakota."
  }
];