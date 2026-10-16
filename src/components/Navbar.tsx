'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import { restaurant } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between">
            {/* Left Nav Links */}
            <div className="hidden lg:flex items-center gap-8 flex-1">
              <a
                href="#about"
                className="nav-link-anim text-white/90 hover:text-white text-sm font-heading tracking-widest uppercase transition-colors"
              >
                About
              </a>
              <a
                href="#menu"
                className="nav-link-anim text-white/90 hover:text-white text-sm font-heading tracking-widest uppercase transition-colors"
              >
                Menu
              </a>
              <a
                href="#specials"
                className="nav-link-anim text-white/90 hover:text-white text-sm font-heading tracking-widest uppercase transition-colors"
              >
                Specials
              </a>
            </div>

            {/* Center Logo - Plates of Perfection style with authentic brand badge */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group px-4">
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-md shadow-brand-red/40 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="BJ Buffet Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <div className="flex items-center text-brand-red text-[9px] sm:text-[10px] font-heading tracking-widest uppercase">
                  <span>SOUTHERN COMFORT</span>
                </div>
                <span className="text-white font-heading text-xl sm:text-2xl tracking-widest uppercase leading-none mt-0.5 group-hover:text-brand-red transition-colors">
                  BJ BUFFET
                </span>
              </div>
            </a>

            {/* Right Nav Links & CTA */}
            <div className="hidden lg:flex items-center justify-end gap-6 flex-1">
              <a
                href="#pricing"
                className="nav-link-anim text-white/90 hover:text-white text-sm font-heading tracking-widest uppercase transition-colors"
              >
                Pricing
              </a>
              <a
                href="#location"
                className="nav-link-anim text-white/90 hover:text-white text-sm font-heading tracking-widest uppercase transition-colors"
              >
                Location
              </a>
              <a
                href="#menu"
                className="bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2 rounded-full font-heading text-sm tracking-wider uppercase transition-all shadow-md shadow-brand-red/30 hover:scale-105"
              >
                Order Online
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[70px] z-40 bg-black/98 backdrop-blur-md border-b border-brand-red/30 shadow-2xl lg:hidden"
          >
            <div className="container-main py-6 flex flex-col gap-2 text-center">
              <div className="flex items-center justify-center gap-3 pb-3 mb-2 border-b border-white/10">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md shadow-brand-red/40 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="BJ Buffet Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-brand-red text-[9px] font-heading tracking-widest uppercase block">SOUTHERN COMFORT</span>
                  <span className="text-white font-heading text-xl tracking-widest uppercase block">BJ BUFFET</span>
                </div>
              </div>
              {[
                { label: 'About', href: '#about' },
                { label: 'Menu', href: '#menu' },
                { label: 'Daily Specials', href: '#specials' },
                { label: 'Buffet Pricing', href: '#pricing' },
                { label: 'Guest Reviews', href: '#reviews' },
                { label: 'Location & Hours', href: '#location' },
              ].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-white hover:text-brand-red hover:bg-white/5 py-3 rounded-lg text-base font-heading tracking-widest uppercase transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`tel:${restaurant.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 text-white font-body font-semibold text-sm"
                >
                  <Phone size={15} className="text-brand-red" />
                  {restaurant.contact.phonePrimary}
                </a>
                <a
                  href="#menu"
                  onClick={() => setMobileOpen(false)}
                  className="bg-brand-red text-white text-center py-3 rounded-full font-heading text-lg tracking-wider uppercase mx-6"
                >
                  Order Online
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
