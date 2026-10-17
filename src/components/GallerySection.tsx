'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, galleryCategories, type GalleryImageItem } from '@/lib/data';
import { Facebook, X, Eye, Plus, ChevronUp } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryImageItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6); // 2 columns x 3 rows on mobile

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const displayedImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(6); // Reset to 6 images (3 rows of 2 cols) on category change
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-zinc-50 text-gray-900 border-t border-gray-100">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
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
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {galleryCategories.map((cat) => {
            const count =
              cat.id === 'all'
                ? galleryImages.length
                : galleryImages.filter((img) => img.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                type="button"
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-heading text-sm sm:text-lg uppercase tracking-wider transition-all duration-200 border-2 ${
                  isActive
                    ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/25 scale-105'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-brand-red hover:text-brand-red shadow-sm'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-mono font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Photo Grid - 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          <AnimatePresence>
            {displayedImages.map((img) => (
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
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                  <span className="bg-black/80 backdrop-blur-sm text-white text-[9px] sm:text-[11px] font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md uppercase tracking-wider font-body shadow-sm">
                    {img.tag}
                  </span>
                </div>

                {/* Hover overlay with #cb2738 */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-red/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-5">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white/80 font-heading text-[10px] sm:text-xs uppercase tracking-widest block mb-0.5">
                      {img.categoryLabel}
                    </span>
                    <p className="text-white font-heading text-base sm:text-2xl uppercase tracking-wider leading-tight mb-1 sm:mb-2 line-clamp-2">
                      {img.title}
                    </p>
                    <div className="flex items-center gap-1 text-white/90 text-[10px] sm:text-xs font-body font-semibold">
                      <Eye size={13} />
                      <span>View photo</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-10 sm:mt-12"
          >
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-full font-heading text-lg sm:text-xl uppercase tracking-wider shadow-lg shadow-brand-red/30 transition-all hover:scale-105 active:scale-95"
            >
              <Plus size={18} />
              <span>LOAD MORE IMAGES</span>
              <span className="text-xs font-mono font-bold bg-white/20 px-2 py-0.5 rounded-full ml-1">
                +{Math.min(6, filteredImages.length - visibleCount)}
              </span>
            </button>
          </motion.div>
        ) : filteredImages.length > 6 ? (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setVisibleCount(6)}
              className="inline-flex items-center justify-center gap-1.5 text-gray-500 hover:text-brand-red font-heading text-sm uppercase tracking-wider transition-colors"
            >
              <span>SHOW LESS</span>
              <ChevronUp size={16} />
            </button>
          </div>
        ) : null}

        {/* Facebook Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12 sm:mt-14"
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
