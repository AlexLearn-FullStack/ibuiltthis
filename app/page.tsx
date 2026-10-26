import { Suspense } from "react";
import HeroSection from "@/components/landing-page/hero-section";
import FeaturedProducts from "@/components/landing-page/featured-products";
import RecentlyLaunchedProducts from "@/components/products/recently-launched";
import RecentlyLaunchedFallback from "@/components/fallbacks/recently-launched-fallback";


export default function page () {
  
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <Suspense fallback={<RecentlyLaunchedFallback />}>
        <RecentlyLaunchedProducts />
      </Suspense>
    </main>
  );
}