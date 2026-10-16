'use client';

import { motion } from 'framer-motion';
import { restaurant, stats } from '@/lib/data';
import { CheckCircle } from 'lucide-react';

const services = [
  'All-You-Can-Eat Buffet (Dine-In)',
  'Daily Rotating Hot Meat Specials',
  'Fresh Salad Bar & Cold Deli Bar',
  'To-Go Plates (Carryout)',
  'Online Delivery via DoorDash, Uber Eats',
  'Sunday Soul Food Special',
  'Family-Friendly Seating',
  'Senior & Kids Discounts',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white text-gray-900">
      <div className="container-main">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT - Image collage (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main image with clean border */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-square">
              <img
                src="/images/bj-interior.jpg"
                alt="BJ Buffet fresh hot steam table buffet bar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating rating badge in red/white - Centered at bottom of photo card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl px-6 py-3.5 border-2 border-brand-red flex items-center justify-center gap-3.5 whitespace-nowrap z-20"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-red text-white flex items-center justify-center font-heading text-2xl shadow-md shadow-brand-red/30 shrink-0">
                4.1★
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="font-heading text-base sm:text-lg uppercase text-black leading-none tracking-wide">Google Rating</p>
                <p className="text-xs text-gray-500 font-semibold mt-1 leading-none">365+ Verified Reviews</p>
              </div>
            </motion.div>

            {/* Clean, Simple Official Brand Logo Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -top-5 -left-4 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white p-1"
            >
              <img
                src="/images/logo.png"
                alt="BJ Buffet Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT - Text content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="inline-block text-brand-red text-sm font-bold tracking-widest uppercase mb-2">
                WELCOME TO BJ BUFFET
              </span>
              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-black leading-[0.95] uppercase">
                REAL SOUTHERN <span className="text-brand-red">HOME COOKING</span> EVERY SINGLE DAY
              </h2>
            </motion.div>

            <motion.p
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-gray-700 text-lg leading-relaxed font-body"
            >
              {restaurant.description}
            </motion.p>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-gray-500 leading-relaxed font-body text-base"
            >
              Located conveniently behind the Truist Bank building on Highway 138 SE in Conyers, GA. We believe in good hospitality, hot home-cooked dishes, and generous portions for every guest.
            </motion.p>

            {/* Services checklist */}
            <motion.ul
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1"
            >
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <CheckCircle size={18} className="text-brand-red shrink-0" />
                  {s}
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl font-heading text-xl uppercase tracking-wider transition-all shadow-lg shadow-brand-red/30 hover:-translate-y-1 mt-2"
              >
                EXPLORE OUR MENU →
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats row with pure white and red contrast */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-8 text-center border-2 border-gray-100 hover:border-brand-red transition-all shadow-sm hover:shadow-xl hover:shadow-brand-red/10 card-hover group"
            >
              <p className="font-heading text-5xl sm:text-6xl text-brand-red group-hover:scale-105 transition-transform">
                {stat.value}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider mt-2 font-heading">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
