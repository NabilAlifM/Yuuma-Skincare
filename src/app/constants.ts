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
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Gentle Skin Cleanser",
    category: "Cleanser",
    concern: "Sensitive | All Skin",
    description: "pH balanced cleanser that respects your skin barrier.",
    price: "Rp 129.000",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "2",
    name: "Barrier Repair Serum",
    category: "Serum",
    concern: "Barrier Repair | Hydration",
    description: "Ceramide NP infusion to strengthen skin resilience.",
    price: "Rp 249.000",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "3",
    name: "Luminous Glow Moisturizer",
    category: "Moisturizer",
    concern: "Dullness | Hydration",
    description: "Weightless cream with Niacinamide for instant radiance.",
    price: "Rp 189.000",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "4",
    name: "Calming Sun Shield SPF 50",
    category: "Sunscreen",
    concern: "UV Protection | Calming",
    description: "No white cast, water-based formula for tropical skin.",
    price: "Rp 159.000",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "5",
    name: "Advanced Acne Treatment",
    category: "Treatment",
    concern: "Acne | Oily Skin",
    description: "Targeted spot treatment with Salicylic Acid.",
    price: "Rp 119.000",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "6",
    name: "Hydrating Essence Mist",
    category: "Treatment",
    concern: "Dryness | On-the-go",
    description: "Refreshing mist with hyaluronic acid and rose water.",
    price: "Rp 89.000",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7abe71a0?auto=format&fit=crop&q=80&w=600"
  }
];
