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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
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

            {/* Center Logo */}
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
              className="lg:hidden text-white p-2 rounded-xl bg-white/10 hover:bg-brand-red transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer with high-contrast glass effect */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dimming backdrop overlay to prevent bright sections from washing out the drawer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 lg:hidden"
            />

            {/* Drawer with deep crimson glassmorphic styling */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-x-0 top-[60px] z-40 bg-zinc-950/98 bg-gradient-to-b from-[#1e0407] via-[#120204] to-black backdrop-blur-2xl border-b-2 border-brand-red shadow-[0_25px_60px_rgba(0,0,0,0.9)] lg:hidden overflow-hidden"
            >
              {/* Ambient crimson glass glow light */}
              <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-44 bg-brand-red/30 blur-3xl rounded-full" />

              <div className="relative z-10 container-main py-6 flex flex-col gap-1 text-center">
                {/* Header inside drawer */}
                <div className="flex items-center justify-center gap-3 pb-3 mb-2 border-b border-white/10">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md shadow-brand-red/40 shrink-0 bg-white p-0.5">
                    <Image
                      src="/images/logo.png"
                      alt="BJ Buffet Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-brand-red text-[9px] font-heading tracking-widest uppercase block font-bold">
                      SOUTHERN COMFORT
                    </span>
                    <span className="text-white font-heading text-xl tracking-widest uppercase block">
                      BJ BUFFET
                    </span>
                  </div>
                </div>

                {/* Navigation links - crisp white on deep crimson glass */}
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
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-white hover:text-brand-red hover:bg-brand-red/15 py-3 rounded-xl text-lg font-heading tracking-widest uppercase transition-all drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                  >
                    {link.label}
                  </motion.a>
                ))}

                {/* Bottom Phone & CTA */}
                <div className="mt-3 pt-4 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href={`tel:${restaurant.contact.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-black/50 hover:bg-brand-red/25 border border-white/15 hover:border-brand-red/50 text-white font-body font-semibold text-sm py-2.5 rounded-full transition-all mx-4 shadow-inner"
                  >
                    <Phone size={15} className="text-brand-red" />
                    <span>{restaurant.contact.phonePrimary}</span>
                  </a>
                  <a
                    href="#menu"
                    onClick={() => setMobileOpen(false)}
                    className="bg-brand-red hover:bg-brand-red-dark text-white text-center py-3.5 rounded-full font-heading text-lg tracking-wider uppercase mx-4 shadow-lg shadow-brand-red/40 transition-all hover:scale-[1.02]"
                  >
                    Order Online
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
