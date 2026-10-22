import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/products/recently-launched";


export default function page () {
  
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <RecentlyLaunchedProducts />
    </main>
  );
}