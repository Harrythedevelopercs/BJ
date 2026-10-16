'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  Utensils,
  Star,
  MapPin,
  Flame,
  DollarSign,
  ChevronRight,
  ShoppingBag,
  Clock,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import { restaurant } from '@/lib/data';

const NAV_LINKS = [
  {
    label: 'About BJ Buffet',
    href: '#about',
    desc: 'Our story & Southern hospitality',
    icon: Sparkles,
    badge: null,
  },
  {
    label: 'Carryout Menu',
    href: '#menu',
    desc: 'Meats, sides & boxed plates',
    icon: Utensils,
    badge: 'ORDER ONLINE',
    badgeColor: 'bg-brand-red text-white',
  },
  {
    label: 'Daily Specials',
    href: '#specials',
    desc: 'Rotating hot meat favorites',
    icon: Flame,
    badge: 'TODAY',
    badgeColor: 'bg-amber-500 text-black',
  },
  {
    label: 'Buffet Pricing',
    href: '#pricing',
    desc: 'All-you-can-eat dine-in rates',
    icon: DollarSign,
    badge: '$13.99 AYCE',
    badgeColor: 'bg-white/15 text-white',
  },
  {
    label: 'Customer Reviews',
    href: '#reviews',
    desc: 'What Rockdale County diners say',
    icon: Star,
    badge: '4.1★ (365+)',
    badgeColor: 'bg-white/15 text-white',
  },
  {
    label: 'Location & Hours',
    href: '#location',
    desc: '1823 Hwy 138 SE, Conyers, GA',
    icon: MapPin,
    badge: 'OPEN DAILY',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  },
];

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
            ? 'bg-black/98 backdrop-blur-md shadow-2xl border-b border-white/10 py-3'
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

      {/* Colorful Mobile Mega Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[60px] bottom-0 z-40 bg-zinc-950 text-white overflow-y-auto border-t-2 border-brand-red shadow-2xl lg:hidden flex flex-col justify-between"
          >
            {/* Top decorative crimson radial glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[350px] h-[250px] bg-brand-red/25 blur-3xl rounded-full" />

            <div className="relative z-10 px-4 sm:px-6 py-5 flex flex-col gap-4">
              {/* Brand Header Banner Card */}
              <div className="bg-gradient-to-r from-brand-red/20 via-zinc-900 to-zinc-900 border border-brand-red/40 rounded-2xl p-4 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white p-0.5 shadow-md shadow-brand-red/30 shrink-0">
                    <Image
                      src="/images/logo.png"
                      alt="BJ Buffet Logo"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-brand-red text-[10px] font-heading tracking-widest uppercase block font-bold">
                      SOUTHERN COMFORT
                    </span>
                    <span className="text-white font-heading text-xl uppercase tracking-wider block">
                      BJ BUFFET CONYERS
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-heading uppercase px-2.5 py-1 rounded-full tracking-wider shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>OPEN TODAY</span>
                </div>
              </div>

              {/* Navigation Items Grid / Cards with Rich Color */}
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                      onClick={() => setMobileOpen(false)}
                      className="group bg-zinc-900/90 hover:bg-brand-red/15 border border-white/10 hover:border-brand-red rounded-xl p-3.5 flex items-center justify-between transition-all duration-200 active:scale-[0.99]"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-brand-red/15 text-brand-red group-hover:bg-brand-red group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-heading text-lg text-white group-hover:text-brand-red transition-colors uppercase tracking-wider block truncate">
                              {link.label}
                            </span>
                            {link.badge && (
                              <span
                                className={`text-[10px] font-heading uppercase px-2 py-0.5 rounded-md tracking-wider shrink-0 font-bold ${link.badgeColor}`}
                              >
                                {link.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-white/50 font-body truncate mt-0.5">
                            {link.desc}
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        size={18}
                        className="text-white/30 group-hover:text-brand-red group-hover:translate-x-1 transition-all shrink-0 ml-2"
                      />
                    </motion.a>
                  );
                })}
              </div>

              {/* Phone Hotline Callout */}
              <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-red text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-red/30">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading uppercase tracking-widest text-white/50 block">
                      CALL DIRECT TO CONYERS
                    </span>
                    <a
                      href={`tel:${restaurant.contact.phoneRaw}`}
                      className="font-heading text-xl text-white hover:text-brand-red tracking-wider transition-colors block"
                    >
                      {restaurant.contact.phonePrimary}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${restaurant.contact.phoneRaw}`}
                  className="bg-white/10 hover:bg-brand-red text-white text-xs font-heading uppercase px-3 py-1.5 rounded-lg tracking-wider transition-colors shrink-0"
                >
                  CALL NOW
                </a>
              </div>
            </div>

            {/* Bottom Actions with Solid Red Button */}
            <div className="p-4 sm:p-6 bg-black border-t border-white/10 mt-auto flex flex-col gap-3">
              <a
                href="#menu"
                onClick={() => setMobileOpen(false)}
                className="w-full bg-brand-red hover:bg-brand-red-dark text-white py-3.5 rounded-2xl font-heading text-xl tracking-wider uppercase transition-all shadow-xl shadow-brand-red/40 flex items-center justify-center gap-2.5 active:scale-[0.99]"
              >
                <ShoppingBag size={20} />
                <span>ORDER CARRYOUT ONLINE</span>
              </a>

              <div className="flex items-center justify-center gap-3 text-white/50 text-xs font-body text-center">
                <div className="flex items-center gap-1.5">
                  <Clock size={13} className="text-brand-red" />
                  <span>Mon to Sun: 11 AM to 8 PM</span>
                </div>
                <span>·</span>
                <span>Rockdale County, GA</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
