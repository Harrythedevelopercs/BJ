'use client';

import { motion } from 'framer-motion';
import { buffetPricing, toGoPlates } from '@/lib/data';
import { Check, Star } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-zinc-50 text-gray-900 border-t border-gray-100">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-brand-red text-sm font-bold tracking-widest uppercase mb-3">
            ALL YOU CAN EAT
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-black leading-none uppercase">
            BUFFET <span className="text-brand-red">PRICING</span>
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-xl mx-auto font-body">
            Enjoy full access to our hot meat stations, country vegetables, salad bar, and desserts.
          </p>
        </motion.div>

        {/* Buffet Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {buffetPricing.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-5 card-hover w-full ${
                tier.popular
                  ? 'bg-brand-red text-white shadow-2xl shadow-brand-red/40 ring-4 ring-black lg:scale-105 z-10'
                  : 'bg-white text-gray-900 shadow-sm border-2 border-gray-200 hover:border-brand-red'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-red text-xs font-heading px-4 py-1.5 rounded-full tracking-wider uppercase flex items-center gap-1.5 shadow-xl whitespace-nowrap">
                  <Star size={12} fill="#cb2738" />
                  MOST POPULAR VALUE
                </div>
              )}

              <div>
                <p className={`font-heading text-base uppercase tracking-widest ${tier.popular ? 'text-white/80' : 'text-gray-400'}`}>
                  {tier.tier}
                </p>
                <p className={`font-heading text-6xl leading-none mt-1 ${tier.popular ? 'text-white' : 'text-brand-red'}`}>
                  {tier.price}
                </p>
                <p className={`text-xs mt-1 font-semibold uppercase tracking-wider ${tier.popular ? 'text-white/80' : 'text-gray-500'}`}>
                  {tier.note}
                </p>
              </div>

              <p className={`text-sm leading-relaxed font-body ${tier.popular ? 'text-white/90' : 'text-gray-600'}`}>
                {tier.description}
              </p>

              <ul className="flex flex-col gap-2.5 mt-auto pt-4 border-t border-white/20">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm font-body">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${tier.popular ? 'text-white' : 'text-brand-red'}`}
                    />
                    <span className={tier.popular ? 'text-white/95 font-medium' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#location"
                className={`mt-6 text-center py-3.5 rounded-xl font-heading text-xl uppercase tracking-wider transition-all shadow-md ${
                  tier.popular
                    ? 'bg-white text-brand-red hover:bg-gray-100 hover:scale-[1.02]'
                    : 'bg-brand-red text-white hover:bg-brand-red-dark hover:scale-[1.02]'
                }`}
              >
                Dine In Today
              </a>
            </motion.div>
          ))}
        </div>

        {/* To-Go Plates */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="text-center mb-10">
            <span className="inline-block text-brand-red text-sm font-bold tracking-widest uppercase mb-2">
              CARRYOUT COUNTER
            </span>
            <h3 className="font-heading text-4xl sm:text-5xl text-black leading-none uppercase">
              TO-GO <span className="text-brand-red">PLATES</span>
            </h3>
            <p className="text-gray-500 mt-2 font-body text-base">Boxed fresh hot meals packed ready for takeaway</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {toGoPlates.map((plate, i) => (
              <motion.div
                key={plate.name}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`bg-white rounded-2xl p-6 border-2 transition-all card-hover flex flex-col justify-between ${
                  plate.popular ? 'border-brand-red shadow-lg shadow-brand-red/10' : 'border-gray-200 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-heading text-black text-xl uppercase leading-tight">{plate.name}</h4>
                    {plate.popular && (
                      <span className="text-[10px] bg-brand-red text-white font-heading px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                        BEST VALUE
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">{plate.description}</p>
                </div>
                <p className="font-heading text-4xl text-brand-red leading-none pt-2 border-t border-gray-100">{plate.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
