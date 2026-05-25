'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '@/types';

const products: Product[] = [
  {
    id: 1,
    name: 'Colar Golden Drop',
    price: 289.90,
    originalPrice: 349.90,
    image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1602751584552-8ba43d5c38f4?w=600&q=80',
    category: 'Colares',
    tag: 'bestseller',
    description: 'Colar delicado com pingente em gota banhado a ouro 18k',
    materials: ['Ouro 18k', 'Zircônia'],
  },
  {
    id: 2,
    name: 'Brincos Aurora',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1635767798638-3e252a01d71f?w=600&q=80',
    category: 'Brincos',
    tag: 'new',
    description: 'Brincos de argola com detalhes em cristais',
    materials: ['Prata 925', 'Cristais'],
  },
  {
    id: 3,
    name: 'Anel Eternity',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a9a1?w=600&q=80',
    category: 'Anéis',
    description: 'Anel fino com micro zircônias cravejadas',
    materials: ['Ouro 18k', 'Zircônia Cúbica'],
  },
  {
    id: 4,
    name: 'Pulseira Luna',
    price: 249.90,
    originalPrice: 299.90,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    category: 'Pulseiras',
    tag: 'sale',
    description: 'Pulseira delicada com fecho especial',
    materials: ['Ouro 18k', 'Ródio'],
  },
  {
    id: 5,
    name: 'Conjunto Royal',
    price: 549.90,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    category: 'Conjuntos',
    tag: 'bestseller',
    description: 'Conjunto completo com colar, brincos e pulseira',
    materials: ['Ouro 18k', 'Pérolas'],
  },
  {
    id: 6,
    name: 'Colar Infinity',
    price: 329.90,
    image: 'https://images.unsplash.com/photo-1601121141461-6ac6d28bc2ef?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1589128777078-ce5e25c82640?w=600&q=80',
    category: 'Colares',
    tag: 'new',
    description: 'Colar com símbolo do infinito em ouro 18k',
    materials: ['Ouro 18k'],
  },
  {
    id: 7,
    name: 'Brincos Pendentes Diamond',
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&q=80',
    category: 'Brincos',
    description: 'Brincos longos com cristais premium',
    materials: ['Prata 925', 'Cristais Swarovski'],
  },
  {
    id: 8,
    name: 'Anel Solitário Gold',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a9a1?w=600&q=80',
    category: 'Anéis',
    tag: 'bestseller',
    description: 'Anel clássico com pedra central destacada',
    materials: ['Ouro 18k', 'Zircônia'],
  },
];

export default function ProductShowcase() {
  return (
    <section id="colecao" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-xs sm:text-sm font-medium">
            Coleção Exclusiva
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
            Nossas Peças
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light max-w-2xl mx-auto px-4">
            Cada peça é cuidadosamente selecionada para oferecer o máximo 
            de elegância e sofisticação.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <button className="group inline-flex items-center gap-2 sm:gap-3 border-2 border-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base tracking-wide hover:bg-black hover:text-white transition-all duration-300">
            Ver Coleção Completa
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
