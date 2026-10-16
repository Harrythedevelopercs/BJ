import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import MarqueeBand from '@/components/MarqueeBand';
import AboutSection from '@/components/AboutSection';
import SpecialsSection from '@/components/SpecialsSection';
import FoodOrderSection from '@/components/FoodOrderSection';
import PricingSection from '@/components/PricingSection';
import ReviewsSection from '@/components/ReviewsSection';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';
import DeliverySection from '@/components/DeliverySection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSlider />
      <MarqueeBand />
      <AboutSection />
      <SpecialsSection />
      <FoodOrderSection />
      <PricingSection />
      <ReviewsSection />
      <GallerySection />
      <LocationSection />
      <DeliverySection />
      <Footer />
    </main>
  );
}
