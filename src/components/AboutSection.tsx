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
            className="lg:col-span-5 relative max-w-[360px] sm:max-w-md lg:max-w-none mx-auto w-full mb-8 sm:mb-10 lg:mb-0"
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

            {/* Floating rating badge in red/white - Perfectly centered on mobile & desktop */}
            <div className="absolute -bottom-6 inset-x-0 flex justify-center z-20 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="pointer-events-auto bg-white rounded-2xl shadow-xl px-4 sm:px-5 py-2.5 sm:py-3 border-2 border-brand-red flex items-center justify-center gap-3 whitespace-nowrap"
              >
                <div className="w-12 h-9 sm:w-12 sm:h-10 rounded-xl bg-brand-red text-white flex items-center justify-center font-heading text-xl sm:text-2xl shadow-md shadow-brand-red/30 shrink-0">
                  4.1★
                </div>
                <div className="flex flex-col items-start justify-center text-left">
                  <p className="font-heading text-sm sm:text-base uppercase text-black leading-none tracking-wide">
                    GOOGLE RATING
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-body font-medium mt-1 leading-none">
                    365+ Verified Reviews
                  </p>
                </div>
              </motion.div>
            </div>

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
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center border-2 border-gray-100 hover:border-brand-red transition-all shadow-sm hover:shadow-xl hover:shadow-brand-red/10 card-hover group"
            >
              <p className="font-heading text-3xl sm:text-4xl lg:text-6xl text-brand-red group-hover:scale-105 transition-transform leading-none whitespace-nowrap text-center">
                {stat.value}
              </p>
              <p className="text-gray-600 text-[11px] sm:text-xs lg:text-sm uppercase tracking-wider mt-2 font-heading text-center leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
