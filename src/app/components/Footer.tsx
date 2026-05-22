/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-warm-white border-t border-cream-beige pt-20">
      <div className="max-w-[1440px] mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-16 pb-20">
        <div className="space-y-8">
          <h2 className="text-4xl font-serif font-light text-deep-brown tracking-tighter">Yuuma</h2>
          <p className="text-sm text-deep-brown/60 leading-relaxed font-light italic">
            "Your Skin, Your Story."
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-deep-brown/60 hover:text-nude-pink transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-deep-brown/60 hover:text-nude-pink transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-deep-brown/60 hover:text-nude-pink transition-colors"><Twitter size={18} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-nude-pink mb-8">Navigation</h3>
          <ul className="space-y-4 text-sm font-light text-deep-brown/80">
            <li><Link to="/" className="hover:text-nude-pink transition-colors">Home</Link></li>
            <li><Link to="/story" className="hover:text-nude-pink transition-colors">Our Story</Link></li>
            <li><Link to="/products" className="hover:text-nude-pink transition-colors">Products</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-nude-pink mb-8">Customer Care</h3>
          <ul className="space-y-4 text-sm font-light text-deep-brown/80">
            <li><a href="#" className="hover:text-nude-pink transition-colors">Shipping Info</a></li>
            <li><a href="#" className="hover:text-nude-pink transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-nude-pink transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-nude-pink mb-8">Newsletter</h3>
          <p className="text-sm text-deep-brown/60 mb-6 font-light">Join our skin diary for clinical tips and product news.</p>
          <div className="flex border-b border-deep-brown pb-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent flex-grow text-sm outline-none placeholder:text-deep-brown/30" 
            />
            <button className="text-[10px] uppercase tracking-widest font-bold text-deep-brown hover:text-nude-pink transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Trust Bar Section */}
      <div className="bg-warm-white border-t border-cream-beige py-6 px-10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            <div className="flex gap-2 items-center opacity-70">
              <div className="w-4 h-4 rounded-full border border-deep-brown flex items-center justify-center text-[7px] font-bold">✓</div>
              <span className="text-[10px] uppercase tracking-widest font-semibold">BPOM Registered</span>
            </div>
            <div className="flex gap-2 items-center opacity-70">
              <div className="w-4 h-4 rounded-full border border-deep-brown flex items-center justify-center text-[7px] font-bold">✓</div>
              <span className="text-[10px] uppercase tracking-widest font-semibold">Clinically Tested</span>
            </div>
            <div className="flex gap-2 items-center opacity-70">
              <div className="w-4 h-4 rounded-full border border-deep-brown flex items-center justify-center text-[7px] font-bold">✓</div>
              <span className="text-[10px] uppercase tracking-widest font-semibold">Tropical Skin Solution</span>
            </div>
          </div>
          <div className="md:ml-auto text-[9px] uppercase tracking-widest opacity-40 font-medium">
            &copy; {new Date().getFullYear()} Yuuma Skincare. Indonesian clinical heritage.
          </div>
        </div>
      </div>
    </footer>
  );
}
