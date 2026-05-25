'use client';

import { motion } from 'framer-motion';
import { Shield, Gem, Heart, Gift, Truck, Clock } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Banho em Ouro 18k e Ródio',
    description: 'Acabamento premium com dupla camada para maior durabilidade e brilho intenso.',
  },
  {
    icon: Shield,
    title: 'Garantia de 1 Ano',
    description: 'Confiança total na qualidade das nossas peças com garantia estendida.',
  },
  {
    icon: Heart,
    title: 'Níquel Free',
    description: 'Peças antialérgicas, seguras para peles sensíveis. Conforto garantido.',
  },
  {
    icon: Gift,
    title: 'Embalagem Premium',
    description: 'Cada peça chega em uma caixa elegante, perfeita para presentear.',
  },
  {
    icon: Truck,
    title: 'Frete Grátis',
    description: 'Entrega gratuita para todo o Brasil em compras acima de R$ 250.',
  },
  {
    icon: Clock,
    title: 'Entrega Rápida',
    description: 'Receba seu pedido em até 5 dias úteis nas principais capitais.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-ultra">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
            Por que escolher a LUXE
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4">
            Diferenciais Exclusivos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
