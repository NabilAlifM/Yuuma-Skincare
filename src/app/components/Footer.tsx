/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Link from "next/link"
import { IoLogoInstagram, IoLogoWhatsapp,  } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-background border-t border-pale-almond pt-20">
      <div className="max-w-360 mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-16 pb-20">
        <div className="space-y-8">
          <h2 className="text-4xl font-serif font-light text-taupe-brown tracking-tighter">Yuuma</h2>
          <p className="...">&quot;Your Skin, Your Story.&quot;</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-taupe-brown/60 hover:text-warm-nude transition-colors"><IoLogoInstagram size={18} /></Link>
            <Link href="#" className="text-taupe-brown/60 hover:text-warm-nude transition-colors"><IoLogoWhatsapp size={18} /></Link>
            <Link href="#" className="text-taupe-brown/60 hover:text-warm-nude transition-colors"><FaTiktok size={18} /></Link>

          </div>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-warm-nude mb-8">Navigation</h3>
          <ul className="space-y-4 text-sm font-light text-taupe-brown/80">
            <li><Link href="/" className="hover:text-warm-nude transition-colors">Home</Link></li>
            <li><Link href="/story" className="hover:text-warm-nude transition-colors">Our Story</Link></li>
            <li><Link href="/products" className="hover:text-warm-nude transition-colors">Products</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-warm-nude mb-8">Customer Care</h3>
          <ul className="space-y-4 text-sm font-light text-taupe-brown/80">
            <li><Link href="#" className="hover:text-warm-nude transition-colors">Shipping Info</Link></li>
            <li><Link href="#" className="hover:text-warm-nude transition-colors">FAQ</Link></li>
            <li><Link href="#" className="hover:text-warm-nude transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-warm-nude mb-8">Newsletter</h3>
          <p className="text-sm text-taupe-brown/60 mb-6 font-light">Join our skin diary for clinical tips and product news.</p>
          <div className="flex border-b border-taupe-brown pb-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent grow text-sm outline-none placeholder:text-taupe-brown/30" 
            />
            <Link href="#" className="text-[10px] uppercase tracking-widest font-bold text-taupe-brown hover:text-warm-nude transition-colors">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
      
      {/* Trust Bar Section */}
      <div className="bg-background border-t border-pale-almond py-6 px-10">
        <div className="max-w-360 mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            <div className="flex gap-2 items-center opacity-70">
              <div className="w-4 h-4 rounded-full border border-taupe-brown flex items-center justify-center text-[7px] font-bold">✓</div>
              <span className="text-[10px] uppercase tracking-widest font-semibold">BPOM Registered</span>
            </div>
            <div className="flex gap-2 items-center opacity-70">
              <div className="w-4 h-4 rounded-full border border-taupe-brown flex items-center justify-center text-[7px] font-bold">✓</div>
              <span className="text-[10px] uppercase tracking-widest font-semibold">Clinically Tested</span>
            </div>
            <div className="flex gap-2 items-center opacity-70">
              <div className="w-4 h-4 rounded-full border border-taupe-brown flex items-center justify-center text-[7px] font-bold">✓</div>
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
