'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Facebook } from 'lucide-react';
import Image from 'next/image';

// 5 authentic Southern home-style dishes - 100% real top-down food photography on ceramic plates
const plates = [
  {
    id: 1,
    headline: 'Daily Buffet Favorites',
    dishName: 'Southern Crispy Fried Chicken',
    description:
      'Crispy on the outside, juicy on the inside, seasoned with our own country recipe and fried fresh all day.',
    tag: '#1 CUSTOMER FAVORITE',
    plateImage:
      'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=90&auto=format&fit=crop',
    cta: 'VIEW BUFFET PRICING',
    ctaLink: '#pricing',
  },
  {
    id: 2,
    headline: 'Daily Buffet Favorites',
    dishName: 'Hickory Smoked BBQ Rib Tips',
    description:
      'Tender pork rib tips slow-smoked and glazed with rich, tangy country barbecue sauce.',
    tag: 'MONDAY & TUESDAY SPECIALTY',
    plateImage:
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=90&auto=format&fit=crop',
    cta: 'EXPLORE FULL MENU',
    ctaLink: '#menu',
  },
  {
    id: 3,
    headline: 'Daily Buffet Favorites',
    dishName: 'Slow-Baked Country Herb Chicken',
    description:
      'Oven-roasted tender chicken seasoned with savory country herbs, served with sweet corn and homestyle sides.',
    tag: 'COMFORT FOOD CLASSIC',
    plateImage:
      'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&q=90&auto=format&fit=crop',
    cta: 'VIEW DAILY SPECIALS',
    ctaLink: '#specials',
  },
  {
    id: 4,
    headline: 'Daily Buffet Favorites',
    dishName: 'Southern Golden Fried Fish',
    description:
      'Crispy cornmeal crusted fish fillets seasoned with classic Southern spices and fried fresh every Friday.',
    tag: 'FRIDAY FISH FEAST',
    plateImage:
      'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=90&auto=format&fit=crop',
    cta: 'ORDER ONLINE NOW',
    ctaLink: '#delivery',
  },
  {
    id: 5,
    headline: 'Daily Buffet Favorites',
    dishName: 'Warm Georgia Peach Cobbler',
    description:
      'Sweet Georgia peaches baked beneath a buttery, flaky golden crust. Made fresh every morning.',
    tag: 'HOMEMADE DESSERT BAR',
    plateImage:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=90&auto=format&fit=crop',
    cta: 'SEE ALL DESSERTS',
    ctaLink: '#menu',
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide
const CIRCLE_CIRCUMFERENCE = 295.3; // 2 * PI * 47

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animFrameRef = useRef<number | null>(null);
  const progressRef = useRef<number>(0);
  const isHoveredRef = useRef<boolean>(false);
  isHoveredRef.current = isHovered;

  const total = plates.length;
  const prevIdx = (active - 1 + total) % total;
  const nextIdx = (active + 1) % total;

  const goTo = useCallback((idx: number) => {
    setActive(idx);
    setProgress(0);
    progressRef.current = 0;
  }, []);

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
    setProgress(0);
    progressRef.current = 0;
  }, [total]);

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
    setProgress(0);
    progressRef.current = 0;
  }, [total]);

  // Smooth circular progress loader timer (5s per slide, auto-advances at 100%)
  useEffect(() => {
    let startTime = Date.now() - (progressRef.current / 100) * SLIDE_DURATION;

    const tick = () => {
      if (isHoveredRef.current) {
        // Paused on hover: keep startTime locked to current progress
        startTime = Date.now() - (progressRef.current / 100) * SLIDE_DURATION;
        animFrameRef.current = requestAnimationFrame(tick);
        return;
      }

      const elapsed = Date.now() - startTime;
      const currentPct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      progressRef.current = currentPct;
      setProgress(currentPct);

      if (currentPct >= 100) {
        progressRef.current = 0;
        setProgress(0);
        setActive((prev) => (prev + 1) % total);
      } else {
        animFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [active, total]);

  const current = plates[active];
  const prevPlate = plates[prevIdx];
  const nextPlate = plates[nextIdx];

  // Calculate stroke dashoffset for the loader (starts from 12 o'clock, fills clockwise)
  const strokeOffset = CIRCLE_CIRCUMFERENCE - (progress / 100) * CIRCLE_CIRCUMFERENCE;

  return (
    <section
      className="relative w-full h-screen max-h-screen min-h-[600px] overflow-hidden bg-black text-white flex flex-col justify-between pt-20 pb-4 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background - Authentic BJ Buffet Hot Steam Table Spread from Google Maps */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-center bg-cover scale-105 transition-all duration-700"
          style={{
            backgroundImage: "url('/images/bj-buffet-hero-bg.jpg')",
            filter: 'blur(2px) brightness(0.55)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/80" />
      </div>

      <div className="container-main relative z-10 flex-1 flex flex-col justify-between items-center py-1">
        
        {/* Top Headline - Chef's Creations style (compact & centered) */}
        <div className="text-center mt-1">
          <motion.div
            key={current.headline}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wider drop-shadow-md">
              {current.headline}
            </h1>
          </motion.div>
        </div>

        {/* 3 Circular Food Plates Carousel - Scaled so entire hero fits on 100% of viewport without scrolling */}
        <div className="relative w-full max-w-4xl my-auto py-2 flex items-center justify-center">
          <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-10 w-full">
            
            {/* LEFT PLATE (Previous Dish - scaled down, subtle dim, clickable) */}
            <div
              onClick={goPrev}
              className="relative hidden sm:block cursor-pointer transition-all duration-300 hover:scale-95 group opacity-60 hover:opacity-85 shrink-0"
              style={{ transform: 'scale(0.82)' }}
              title={`Previous: ${prevPlate.dishName}`}
            >
              <div className="relative w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden border-[5px] lg:border-[6px] border-white/80 shadow-2xl shadow-black/80 bg-zinc-900">
                <Image
                  src={prevPlate.plateImage}
                  alt={prevPlate.dishName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="220px"
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_3px_15px_rgba(0,0,0,0.5)]" />
              </div>
            </div>

            {/* CENTER PLATE (Featured Active Dish - with animated circular progress loader border) */}
            <div className="relative z-20 flex flex-col items-center shrink-0">
              <div className="relative w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] lg:w-[310px] lg:h-[310px] xl:w-[330px] xl:h-[330px]">
                
                {/* Circular Progress Loader Ring (SVG positioned around plate, sweeps 360° clockwise) */}
                <svg
                  className="absolute -inset-3 sm:-inset-3.5 w-[calc(100%+24px)] sm:w-[calc(100%+28px)] h-[calc(100%+24px)] sm:h-[calc(100%+28px)] -rotate-90 pointer-events-none z-30"
                  viewBox="0 0 100 100"
                >
                  {/* Background track circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="2.2"
                  />
                  {/* Active filling progress stroke in #cb2738 */}
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="#cb2738"
                    strokeWidth="3.2"
                    strokeDasharray={CIRCLE_CIRCUMFERENCE}
                    strokeDashoffset={strokeOffset}
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_12px_rgba(203,39,56,0.95)]"
                  />
                </svg>

                {/* Main Porcelain Plate with Real Top-Down Food Photo */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full rounded-full overflow-hidden border-[6px] sm:border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-zinc-900"
                  >
                    <Image
                      src={current.plateImage}
                      alt={current.dishName}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 220px, (max-width: 1024px) 270px, 330px"
                      priority
                    />
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_3px_25px_rgba(0,0,0,0.5)] pointer-events-none" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT PLATE (Next Dish - scaled down, subtle dim, clickable) */}
            <div
              onClick={goNext}
              className="relative hidden sm:block cursor-pointer transition-all duration-300 hover:scale-95 group opacity-60 hover:opacity-85 shrink-0"
              style={{ transform: 'scale(0.82)' }}
              title={`Next: ${nextPlate.dishName}`}
            >
              <div className="relative w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden border-[5px] lg:border-[6px] border-white/80 shadow-2xl shadow-black/80 bg-zinc-900">
                <Image
                  src={nextPlate.plateImage}
                  alt={nextPlate.dishName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="220px"
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_3px_15px_rgba(0,0,0,0.5)]" />
              </div>
            </div>

          </div>
        </div>

        {/* Dish Title & Description beneath the plates (compact, clean, center-aligned) */}
        <div className="text-center max-w-lg mx-auto px-4 min-h-[64px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.dishName}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <span className="text-brand-red text-[11px] font-heading tracking-widest uppercase font-semibold mb-0.5">
                {current.tag}
              </span>
              <h2 className="text-white font-heading text-xl sm:text-2xl lg:text-3xl uppercase tracking-wider mb-0.5">
                {current.dishName}
              </h2>
              <p className="text-white/70 font-body text-xs sm:text-sm leading-relaxed max-w-md line-clamp-2">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Controls Row - Left Year/Tag, Center Prev + Button + Next, Right Social */}
        <div className="w-full flex items-center justify-between pt-3 pb-1 border-t border-white/10 mt-auto">
          
          {/* Bottom Left - Year stamp */}
          <div className="leading-tight text-left">
            <span className="font-heading text-base sm:text-lg text-white tracking-widest block">20</span>
            <span className="font-heading text-base sm:text-lg text-brand-red tracking-widest block">24</span>
          </div>

          {/* Bottom Center - Prev Button + Pill CTA Button + Next Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Prev Button */}
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center transition-all border border-white/20 hover:scale-105 active:scale-95 shadow-md"
              aria-label="Previous plate"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Pill CTA Button in #cb2738 */}
            <a
              href={current.ctaLink}
              className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white px-7 sm:px-8 py-2.5 sm:py-3 rounded-full font-heading text-sm sm:text-base tracking-widest uppercase transition-all shadow-lg shadow-brand-red/40 hover:scale-105 active:scale-95 border border-brand-red"
            >
              {current.cta}
            </a>

            {/* Next Button */}
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center transition-all border border-white/20 hover:scale-105 active:scale-95 shadow-md"
              aria-label="Next plate"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Bottom Right - Social icon */}
          <div className="flex items-center justify-end">
            <a
              href="https://www.facebook.com/p/Bj-buffet-Conyers-100032893822791/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-red text-white/80 hover:text-white flex items-center justify-center transition-all border border-white/20"
              aria-label="Follow BJ Buffet on Facebook"
            >
              <Facebook size={16} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
