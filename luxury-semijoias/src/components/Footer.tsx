'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    institucional: [
      { name: 'Sobre Nós', href: '#sobre' },
      { name: 'Nossa História', href: '#historia' },
      { name: 'Sustentabilidade', href: '#sustentabilidade' },
      { name: 'Trabalhe Conosco', href: '#carreiras' },
    ],
    atendimento: [
      { name: 'Central de Ajuda', href: '#ajuda' },
      { name: 'Trocas e Devoluções', href: '#trocas' },
      { name: 'Prazos de Entrega', href: '#entregas' },
      { name: 'Política de Privacidade', href: '#privacidade' },
    ],
    categorias: [
      { name: 'Anéis', href: '#aneis' },
      { name: 'Brincos', href: '#brincos' },
      { name: 'Colares', href: '#colares' },
      { name: 'Pulseiras', href: '#pulseiras' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a href="/" className="text-3xl font-serif font-bold tracking-wider inline-block mb-6">
                LUXE<span className="text-gold">.</span>
              </a>
              <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-sm">
                Semijoias de luxo que combinam elegância, qualidade e sofisticação. 
                Cada peça é cuidadosamente selecionada para realçar sua beleza única.
              </p>

              {/* Newsletter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-widest font-medium mb-4">
                  Newsletter
                </h4>
                <p className="text-gray-400 text-sm mb-4 font-light">
                  Receba novidades e ofertas exclusivas
                </p>
                <form className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gold text-white px-6 py-3 rounded-full font-medium hover:bg-gold-dark transition-colors"
                  >
                    Assinar
                  </button>
                </form>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <h4 className="text-sm uppercase tracking-widest font-medium mb-6 text-gold">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors font-light text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Payment & Security */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 pt-10 mb-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {/* Payment Methods */}
            {['Visa', 'Mastercard', 'Elo', 'Pix', 'Boleto'].map((method) => (
              <div
                key={method}
                className="px-4 py-2 bg-gray-800 rounded-md text-xs font-medium text-gray-400"
              >
                {method}
              </div>
            ))}
          </div>

          {/* Security Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Site Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Compra Protegida</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>Entrega Garantida</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            © {currentYear} LUXE Semijoias. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#termos" className="text-gray-500 hover:text-white transition-colors font-light">
              Termos de Uso
            </a>
            <a href="#privacidade" className="text-gray-500 hover:text-white transition-colors font-light">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
