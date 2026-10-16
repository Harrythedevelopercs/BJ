'use client';

import { motion } from 'framer-motion';
import { deliveryPlatforms } from '@/lib/data';

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-24 lg:py-32 bg-brand-red relative overflow-hidden text-white border-y-4 border-black">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-white/80 text-xs sm:text-sm font-heading tracking-widest uppercase mb-3 bg-black/30 px-4 py-1.5 rounded-full border border-white/20">
            ORDER ONLINE FOR DELIVERY
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-none uppercase">
            DELIVERY TO YOUR DOOR
          </h2>
          <p className="text-white/90 mt-4 text-base sm:text-lg max-w-xl mx-auto font-body">
            Order your favorite Southern plates directly to your home or office through DoorDash, Uber Eats, and Grubhub.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {deliveryPlatforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="flex flex-col items-center gap-3 bg-white text-black rounded-3xl p-7 shadow-2xl transition-all group hover:bg-black hover:text-white border-2 border-black"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform">{platform.emoji}</span>
              <span className="font-heading text-2xl tracking-wide uppercase">{platform.name}</span>
              <span className="text-xs font-heading tracking-widest uppercase text-brand-red group-hover:text-white transition-colors">
                ORDER NOW →
              </span>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/60 text-xs mt-10 font-body"
        >
          * Delivery pricing, delivery radius, and driver fees set directly by each delivery provider.
        </motion.p>
      </div>
    </section>
  );
}
