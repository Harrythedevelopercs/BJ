'use client';

import { motion } from 'framer-motion';
import { reviews, restaurant } from '@/lib/data';
import { Star, ExternalLink, Quote } from 'lucide-react';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={14}
          className={n <= rating ? 'text-brand-red fill-brand-red' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>
  );
}

interface ReviewItem {
  id: number;
  author: string;
  badge: string;
  rating: number;
  date: string;
  text: string;
  initials: string;
  favoriteDishes: string[];
}

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <div className="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 bg-white rounded-2xl p-6 sm:p-7 border-2 border-gray-100 hover:border-brand-red shadow-sm hover:shadow-xl transition-all card-hover flex flex-col justify-between gap-4 relative text-left">
      <Quote
        size={36}
        className="text-brand-red/10 absolute top-5 right-5 pointer-events-none"
        fill="currentColor"
      />

      <div>
        {/* Author Info */}
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-11 h-11 rounded-full bg-brand-red text-white flex items-center justify-center font-heading text-lg shrink-0 shadow-md shadow-brand-red/25">
            {review.initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-heading text-lg sm:text-xl text-black leading-tight uppercase truncate">
              {review.author}
            </p>
            <p className="text-gray-400 text-xs font-body truncate">{review.badge}</p>
          </div>
          <div className="shrink-0 text-right">
            <StarRating rating={review.rating} />
            <p className="text-gray-400 text-xs mt-1 font-body">{review.date}</p>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-gray-700 font-body text-sm leading-relaxed italic line-clamp-4">
          "{review.text}"
        </p>
      </div>

      {/* Favorite dishes */}
      {review.favoriteDishes && review.favoriteDishes.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
          {review.favoriteDishes.map((dish) => (
            <span
              key={dish}
              className="text-[11px] bg-brand-red/10 text-brand-red px-2.5 py-0.5 rounded-md font-semibold font-body"
            >
              {dish}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ReviewsSection() {
  // Split reviews into two distinct groups of 4
  const row1 = reviews.slice(0, 4);
  const row2 = reviews.slice(4, 8);

  // Duplicate each row set so each track half has plenty of width for wide screens
  const row1Cards = [...row1, ...row1];
  const row2Cards = [...row2, ...row2];

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-white text-gray-900 overflow-hidden">
      <div className="container-main mb-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-brand-red text-sm font-bold tracking-widest uppercase mb-3">
            CUSTOMER REVIEWS
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-black leading-none uppercase">
            WHAT OUR GUESTS SAY ABOUT <span className="text-brand-red">BJ BUFFET</span>
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-xl mx-auto font-body">
            Real reviews from neighbors, families, and Sunday churchgoers right here in Conyers.
          </p>
        </motion.div>

        {/* Summary Card in #cb2738 and White */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-red rounded-3xl p-8 sm:p-12 text-white shadow-2xl shadow-brand-red/30 flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-black"
        >
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <p className="font-heading text-8xl sm:text-9xl leading-none tracking-tight">
              {restaurant.rating.google}
            </p>
            <div className="flex justify-center md:justify-start gap-1 mt-3 mb-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  size={24}
                  className="text-white fill-white"
                />
              ))}
            </div>
            <p className="text-white/90 font-heading text-lg tracking-wider uppercase">
              {restaurant.rating.reviewCount}+ GOOGLE REVIEWS
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-md">
            <p className="text-white font-body text-xl font-bold leading-relaxed mb-4">
              "Hands down the best homemade fried chicken, collards, and peach cobbler in Rockdale County."
            </p>
            <a
              href={restaurant.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-red px-7 py-3.5 rounded-xl font-heading text-lg uppercase tracking-wider shadow-lg hover:bg-gray-100 transition-all hover:scale-105"
            >
              <ExternalLink size={16} />
              LEAVE A GOOGLE REVIEW
            </a>
          </div>
        </motion.div>
      </div>

      {/* Dual Direction Continuous Carousels */}
      <div className="relative w-full overflow-hidden space-y-6 sm:space-y-8">
        {/* Soft edge fade masks on both sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Carousel 1: Sliding Left */}
        <div className="w-full overflow-hidden py-1">
          <div className="marquee-row-left">
            <div className="flex gap-6 pr-6">
              {row1Cards.map((review, i) => (
                <ReviewCard key={`r1-a-${review.id}-${i}`} review={review} />
              ))}
            </div>
            <div className="flex gap-6 pr-6" aria-hidden="true">
              {row1Cards.map((review, i) => (
                <ReviewCard key={`r1-b-${review.id}-${i}`} review={review} />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel 2: Sliding Right */}
        <div className="w-full overflow-hidden py-1">
          <div className="marquee-row-right">
            <div className="flex gap-6 pr-6">
              {row2Cards.map((review, i) => (
                <ReviewCard key={`r2-a-${review.id}-${i}`} review={review} />
              ))}
            </div>
            <div className="flex gap-6 pr-6" aria-hidden="true">
              {row2Cards.map((review, i) => (
                <ReviewCard key={`r2-b-${review.id}-${i}`} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
