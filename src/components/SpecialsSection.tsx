'use client';

import { motion } from 'framer-motion';
import { dailySpecials, hours } from '@/lib/data';
import { Clock } from 'lucide-react';

const DAYS_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function SpecialsSection() {
  const todayIdx = new Date().getDay();
  const todayName = DAYS_FULL[todayIdx];

  const specialsWithDay = dailySpecials.map((s, i) => ({
    ...s,
    fullDay: DAYS_FULL[(i + 1) % 7],
  }));

  const orderedSpecials = [
    ...specialsWithDay.slice(0, 6),
    specialsWithDay[6],
  ];

  return (
    <section id="specials" className="py-24 lg:py-32 bg-black text-white relative">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-red text-sm font-bold tracking-widest uppercase mb-3">
            DAILY HOT SPECIALS
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-none uppercase">
            DAILY <span className="text-brand-red">SPECIALS</span>
          </h2>
          <p className="text-white/70 mt-4 text-base sm:text-lg max-w-xl mx-auto font-body">
            Every day of the week features a different Southern favorite on our hot buffet bar.
          </p>
        </motion.div>

        {/* Specials Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-16">
          {orderedSpecials.map((special, i) => {
            const isToday = special.fullDay === todayName;
            return (
              <motion.div
                key={special.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={`relative rounded-2xl p-5 flex flex-col gap-3 transition-all card-hover ${
                  i === 6 ? 'col-span-2 sm:col-span-1' : ''
                } ${
                  isToday
                    ? 'bg-brand-red text-white shadow-2xl shadow-brand-red/50 ring-4 ring-white ring-offset-2 ring-offset-black scale-105 z-10'
                    : 'bg-zinc-900/90 text-white hover:bg-zinc-800 border border-white/10'
                }`}
              >
                {isToday && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-brand-red text-xs font-heading px-3.5 py-1 rounded-full tracking-wider uppercase whitespace-nowrap shadow-lg">
                    TODAY'S SPECIAL
                  </span>
                )}
                <span className={`text-3xl ${isToday ? '' : 'opacity-80'}`}>{special.icon}</span>
                <div>
                  <p className={`font-heading text-base tracking-widest uppercase ${isToday ? 'text-white/80' : 'text-white/50'}`}>
                    {special.day}
                  </p>
                  <p className="font-heading text-xl leading-tight uppercase mt-0.5">
                    {special.name}
                  </p>
                </div>
                <p className={`text-xs leading-relaxed font-body ${isToday ? 'text-white/90' : 'text-white/60'}`}>
                  {special.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Hours Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-zinc-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="flex items-center gap-3 px-8 py-5 border-b border-white/10 bg-zinc-900/60">
            <Clock size={20} className="text-brand-red" />
            <h3 className="text-white font-heading text-2xl tracking-wide uppercase">
              BUFFET HOURS & DAILY SCHEDULE
            </h3>
          </div>
          <div className="divide-y divide-white/10">
            {hours.map((h) => {
              const isToday = h.day === todayName;
              return (
                <div
                  key={h.day}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between px-8 py-4 transition-colors ${
                    isToday ? 'bg-brand-red/20' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                    )}
                    <span className={`font-heading text-xl uppercase tracking-wider ${isToday ? 'text-brand-red' : 'text-white'}`}>
                      {h.day}
                    </span>
                    <span className="text-white/50 text-xs hidden md:inline font-body">
                      ({h.special})
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-1 sm:mt-0">
                    <span className={`font-mono text-sm tracking-wider ${isToday ? 'text-white font-bold' : 'text-white/70'}`}>
                      {h.open} to {h.close}
                    </span>
                    {isToday && (
                      <span className="bg-brand-red text-white text-[11px] font-heading px-2.5 py-0.5 rounded uppercase tracking-wider">
                        OPEN TODAY
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
