import HeroSection from '@/components/HeroSection';
import CategoryCarousel from '@/components/CategoryCarousel';
import ProductShowcase from '@/components/ProductShowcase';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryCarousel />
      <ProductShowcase />
      <FeaturesSection />
      <Footer />
    </>
  );
}
