'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  { id: 1, name: 'Anéis', slug: 'aneis', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80' },
  { id: 2, name: 'Brincos', slug: 'brincos', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { id: 3, name: 'Colares', slug: 'colares', image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=400&q=80' },
  { id: 4, name: 'Pulseiras', slug: 'pulseiras', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80' },
  { id: 5, name: 'Conjuntos', slug: 'conjuntos', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80' },
];

export default function CategoryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-gray-ultra">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Categorias
          </h2>
          <p className="text-gray-600 font-light max-w-md mx-auto">
            Explore nossa curadoria de peças exclusivas
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollBehavior: 'smooth' }}
        >
          {categories.map((category, index) => (
            <motion.a
              key={category.id}
              href={`#${category.slug}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm uppercase tracking-widest font-medium">
                    Ver {category.name}
                  </span>
                </div>
              </div>
              <p className="text-center mt-4 text-sm uppercase tracking-widest font-medium text-gray-700 group-hover:text-gold transition-colors">
                {category.name}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Navigation Arrows - Desktop */}
        <div className="hidden md:flex justify-center gap-4 mt-8">
          <button
            onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
            className="p-3 rounded-full border border-gray-300 hover:border-gold hover:bg-gold hover:text-white transition-all duration-300"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
            className="p-3 rounded-full border border-gray-300 hover:border-gold hover:bg-gold hover:text-white transition-all duration-300"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
