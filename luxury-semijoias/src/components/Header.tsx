'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Coleção', href: '#colecao' },
    { name: 'Anéis', href: '#aneis' },
    { name: 'Brincos', href: '#brincos' },
    { name: 'Colares', href: '#colares' },
    { name: 'Pulseiras', href: '#pulseiras' },
  ];

  return (
    <>
      {/* Top Banner */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gold text-white text-center text-xs sm:text-sm py-2 px-4 overflow-hidden"
      >
        <p className="font-light tracking-wide">
          Frete grátis em compras acima de R$ 250 ✨
        </p>
      </motion.div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <a href="/" className="text-xl sm:text-2xl font-serif font-bold tracking-wider">
                LUXE<span className="text-gold">.</span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-xs sm:text-sm uppercase tracking-widest hover:text-gold transition-colors duration-200 font-light"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search Bar - Desktop */}
              <div className="hidden md:flex items-center relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-40 lg:w-48 pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs sm:text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <Search className="w-4 h-4 absolute left-3 text-gray-400" />
              </div>

              {/* Cart Icon */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={openCart}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Sacola"
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-medium"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.button>

              {/* Profile Icon */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block"
                aria-label="Perfil"
              >
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <nav className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base uppercase tracking-widest hover:text-gold transition-colors font-light"
                  >
                    {link.name}
                  </a>
                ))}
                {/* Mobile Search */}
                <div className="relative pt-4">
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                  <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
