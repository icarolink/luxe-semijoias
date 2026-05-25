'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ShoppingBag, Heart } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const tagColors = {
    new: 'bg-blue-500',
    bestseller: 'bg-gold',
    sale: 'bg-red-500',
  };

  const tagLabels = {
    new: 'Novo',
    bestseller: 'Mais Vendido',
    sale: 'Oferta',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg">
        {/* Tag */}
        {product.tag && (
          <span
            className={`absolute top-2 sm:top-3 left-2 sm:left-3 z-20 px-2 sm:px-3 py-1 text-xs font-medium text-white uppercase tracking-wider rounded-sm ${tagColors[product.tag]}`}
          >
            {tagLabels[product.tag]}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          className="absolute top-2 sm:top-3 right-2 sm:right-3 z-20 p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
          aria-label="Adicionar aos favoritos"
        >
          <Heart className="w-4 h-4 text-gray-700 hover:text-red-500 transition-colors" />
        </button>

        {/* Images */}
        <AnimatePresence mode="wait">
          {isHovered && product.hoverImage ? (
            <motion.img
              key="hover"
              src={product.hoverImage}
              alt={product.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          ) : (
            <motion.img
              key="main"
              src={product.image}
              alt={product.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          )}
        </AnimatePresence>

        {/* Quick Actions Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 z-20 flex gap-1.5 sm:gap-2"
        >
          <button
            onClick={() => addItem(product)}
            className="flex-1 bg-white text-black py-2 sm:py-3 px-3 sm:px-4 rounded-md font-medium text-xs sm:text-sm uppercase tracking-wide hover:bg-gold hover:text-white transition-colors duration-300 flex items-center justify-center gap-1 sm:gap-2 shadow-lg"
          >
            <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Adicionar</span>
          </button>
          <button
            className="p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-md hover:bg-white transition-colors"
            aria-label="Visualização rápida"
          >
            <Eye className="w-4 h-5 sm:w-5 sm:h-5 text-gray-700" />
          </button>
        </motion.div>

        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
        )}
      </div>

      {/* Product Info */}
      <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
        <p className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</p>
        <h3 className="font-serif text-base sm:text-lg font-medium text-gray-900 group-hover:text-gold transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-lg font-semibold text-gray-900">
            R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-xs sm:text-sm text-gray-500 line-through">
              R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
