'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] sm:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&q=80"
            alt="Luxury Jewelry Collection"
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl sm:max-w-2xl text-white"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 font-light"
          >
            Nova Coleção 2024
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight mb-4 sm:mb-6"
          >
            Elegância <br />
            <span className="text-gold-light">Atemporal</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm sm:text-lg md:text-xl font-light mb-6 sm:mb-8 md:mb-10 text-gray-100 max-w-sm sm:max-w-lg"
          >
            Descubra peças exclusivas banhadas em ouro 18k e ródio, 
            criadas para realçar sua beleza natural.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a
              href="#colecao"
              className="group inline-flex items-center gap-2 sm:gap-3 bg-white text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base tracking-wide hover:bg-gold hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Conhecer Coleção
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-1.5 sm:w-1.5 sm:h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-36 h-36 sm:w-48 sm:h-48 bg-gold-light/10 rounded-full blur-3xl" />
    </section>
  );
}
