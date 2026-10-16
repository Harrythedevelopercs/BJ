'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, galleryCategories, type GalleryImageItem } from '@/lib/data';
import { Facebook, X, ZoomIn, Eye } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryImageItem | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-zinc-50 text-gray-900 border-t border-gray-100">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 text-brand-red text-sm font-bold tracking-widest uppercase mb-3">
            <span>FRESH SPREAD EVERYDAY</span>
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-black leading-none uppercase">
            SOUL FOOD <span className="text-brand-red">PHOTO GALLERY</span>
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-xl mx-auto font-body">
            A glimpse into the daily dishes and country comfort cooking prepared hot for our guests.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {galleryCategories.map((cat) => {
            const count =
              cat.id === 'all'
                ? galleryImages.length
                : galleryImages.filter((img) => img.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-heading text-base sm:text-lg uppercase tracking-wider transition-all duration-200 border-2 ${
                  isActive
                    ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/25 scale-105'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-brand-red hover:text-brand-red shadow-sm'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-mono font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Photo Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedPhoto(img)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-md border-2 border-white hover:border-brand-red transition-all duration-300 aspect-[4/3] flex flex-col"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Tag pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-black/75 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider font-body shadow-sm">
                    {img.tag}
                  </span>
                </div>

                {/* Hover overlay with #cb2738 */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-red/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white/80 font-heading text-xs uppercase tracking-widest block mb-1">
                      {img.categoryLabel}
                    </span>
                    <p className="text-white font-heading text-2xl uppercase tracking-wider leading-tight mb-2">
                      {img.title}
                    </p>
                    <div className="flex items-center gap-1.5 text-white/90 text-xs font-body font-semibold">
                      <Eye size={14} />
                      <span>Click to view photo</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Facebook Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-14"
        >
          <a
            href="https://www.facebook.com/p/Bj-buffet-Conyers-100032893822791/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-black hover:bg-brand-red text-white px-8 py-4 rounded-xl font-heading text-xl uppercase tracking-wider transition-all shadow-md hover:scale-105"
          >
            <Facebook size={18} />
            FOLLOW BJ BUFFET ON FACEBOOK
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border-4 border-black relative flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-11 h-11 bg-black/80 hover:bg-brand-red text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Close photo preview"
              >
                <X size={20} />
              </button>

              <div className="relative w-full bg-zinc-950 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[440px]">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-brand-red font-bold text-xs uppercase tracking-widest font-body">
                      {selectedPhoto.categoryLabel}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="text-gray-500 text-xs font-semibold font-body">
                      {selectedPhoto.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl sm:text-4xl text-black uppercase leading-tight">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-body mt-1 max-w-xl">
                    {selectedPhoto.alt}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-3">
                  <span className="bg-brand-red text-white px-4 py-2 rounded-xl font-heading text-base uppercase tracking-wider">
                    BJ BUFFET SPECIAL
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
