'use client';

import { motion } from 'framer-motion';
import { restaurant, hours } from '@/lib/data';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const DAYS_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function LocationSection() {
  const todayName = DAYS_FULL[new Date().getDay()];

  return (
    <section id="location" className="py-24 lg:py-32 bg-black text-white relative">
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
            VISIT US IN CONYERS, GA
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-none uppercase">
            FIND <span className="text-brand-red">BJ BUFFET</span>
          </h2>
          <p className="text-white/70 mt-4 text-base sm:text-lg max-w-xl mx-auto font-body">
            Located on Highway 138 SE, right behind the Truist Bank building and next to the bowling alley.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Address card */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-7 flex flex-col gap-5 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-red/30">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-heading text-xl uppercase tracking-wider mb-1">STREET ADDRESS</p>
                  <p className="text-white/80 font-body text-base leading-relaxed">
                    {restaurant.location.streetAddress}<br />
                    {restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip}
                  </p>
                  <p className="text-brand-red font-semibold text-xs mt-2 font-body">
                    📍 {restaurant.location.landmark}
                  </p>
                </div>
              </div>
              <a
                href={restaurant.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center bg-brand-red hover:bg-brand-red-dark text-white py-4 rounded-xl font-heading text-xl uppercase tracking-wider shadow-lg shadow-brand-red/30 transition-all hover:scale-[1.02]"
              >
                <Navigation size={18} />
                GET DIRECTIONS ON GOOGLE MAPS
              </a>
            </div>

            {/* Phone card */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-7 flex items-center gap-5 shadow-xl">
              <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-red/30">
                <Phone size={22} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-heading text-lg uppercase tracking-wider mb-0.5">TELEPHONE HOTLINE</p>
                <a href={`tel:${restaurant.contact.phoneRaw}`} className="text-white font-heading text-3xl tracking-wider hover:text-brand-red transition-colors block">
                  {restaurant.contact.phonePrimary}
                </a>
                <a href="tel:6788065591" className="text-white/50 text-sm font-mono hover:text-white transition-colors">
                  Secondary line: {restaurant.contact.phoneSecondary}
                </a>
              </div>
            </div>

            {/* Hours list */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-zinc-800/50">
                <Clock size={18} className="text-brand-red" />
                <p className="text-white font-heading text-lg uppercase tracking-wider">DAILY SCHEDULE</p>
              </div>
              <div className="divide-y divide-white/5">
                {hours.map((h) => {
                  const isToday = h.day === todayName;
                  return (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between px-6 py-3.5 ${isToday ? 'bg-brand-red/20' : ''}`}
                    >
                      <div className="flex items-center gap-2.5">
                        {isToday && <span className="w-2 h-2 bg-brand-red rounded-full animate-ping" />}
                        <span className={`font-heading text-base uppercase tracking-wider ${isToday ? 'text-white' : 'text-white/70'}`}>
                          {h.day}
                        </span>
                      </div>
                      <span className={`font-mono text-sm ${isToday ? 'text-brand-red font-bold' : 'text-white/50'}`}>
                        {h.open} to {h.close}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Interactive Google Maps & Street View */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 min-h-[450px] flex relative bg-zinc-900"
          >
            <iframe
              title="BJ Buffet Conyers Google Maps Street View"
              src="https://www.google.com/maps/embed?pb=!4v1792180512866!6m8!1m7!1suLoPQusYme14_dMaEX9YEg!2m2!1d33.64093892763347!2d-84.01568678815164!3f0!4f0!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
