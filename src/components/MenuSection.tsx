'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories } from '@/lib/data';
import { Flame } from 'lucide-react';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);

  const currentCat = menuCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="menu" className="py-24 lg:py-32 bg-white text-gray-900">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-brand-red text-sm font-bold tracking-widest uppercase mb-3">
            FRESH FROM OUR KITCHEN
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-black leading-none uppercase">
            OUR SOUL FOOD <span className="text-brand-red">BUFFET MENU</span>
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-xl mx-auto font-body">
            Scratch-cooked meats, slow-simmered vegetables, crisp garden salads, and warm homemade desserts.
          </p>
        </motion.div>

        {/* Tab Bar with #cb2738 and White pairing */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-14">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-7 py-3 rounded-xl font-heading text-xl tracking-wider uppercase transition-all ${
                activeTab === cat.id
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30 scale-105'
                  : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-brand-red hover:text-brand-red'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            {currentCat.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-brand-red shadow-sm hover:shadow-2xl transition-all duration-300 card-hover group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.popular && (
                    <div className="absolute top-3 left-3 bg-brand-red text-white text-xs font-heading tracking-wider uppercase px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                      <Flame size={12} />
                      POPULAR
                    </div>
                  )}
                  {/* Price badge */}
                  <div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm text-white font-heading text-base tracking-wider uppercase px-3 py-1 rounded-lg border border-white/20">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl uppercase text-black leading-tight mb-2 group-hover:text-brand-red transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed line-clamp-2 flex-1">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-gray-100">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-brand-red/10 text-brand-red font-semibold font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm mb-4 font-body">
            All hot dishes rotate fresh throughout lunch and dinner services.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl font-heading text-xl uppercase tracking-wider transition-all shadow-lg shadow-brand-red/30 hover:-translate-y-1"
          >
            VIEW BUFFET PRICING →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
