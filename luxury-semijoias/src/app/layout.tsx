import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/hooks/useCart';
import Header from '@/components/Header';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'LUXE - Semijoias de Luxo',
  description: 'Descubra nossa coleção exclusiva de semijoias banhadas em ouro 18k e ródio. Elegância e sofisticação para realçar sua beleza.',
  keywords: ['semijoias', 'joias', 'ouro 18k', 'luxo', 'colares', 'brincos', 'aneis', 'pulseiras'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <CartProvider>
          <Header />
          <CartDrawer />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
