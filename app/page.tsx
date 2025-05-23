import { HeroSection } from "@/components/hero-section"
import { CategoryShowcase } from "@/components/category-showcase"
import { FeaturedProducts } from "@/components/featured-products"
import { PromoSection } from "@/components/promo-section"
import { PopularProducts } from "@/components/popular-products"
import { GreetingBanner } from "@/components/greeting-banner"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <GreetingBanner />
      <HeroSection />
      <CategoryShowcase />
      <FeaturedProducts />
      <PromoSection />
      <PopularProducts />
    </div>
  )
}
