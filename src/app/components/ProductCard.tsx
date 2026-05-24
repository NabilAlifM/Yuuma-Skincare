/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Product } from "../constants";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-FAF8F5 rounded-2xl overflow-hidden group border border-transparent hover:border-viridian hover:shadow-soft transition-all duration-500"
    >
      <div className="relative aspect-square overflow-hidden bg-pale-almond/20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="text-[11px] uppercase tracking-widest text-white bg-viridian px-2 py-1 rounded-full font-bold">
            {product.concern.split(" | ")[0]}
          </span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="font-serif text-xl font-medium text-taupe-brown leading-tight">
            {product.name}
          </h3>
          <p className="text-xs text-taupe-brown/50 font-light line-clamp-1">
            {product.description}
          </p>
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <p className="font-sans font-medium text-taupe-brown text-sm">
            {product.price}
          </p>
          <button className="text-[10px] uppercase tracking-wider font-bold text-warm-nude hover:opacity-70 transition-opacity">
            + Quick Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}
