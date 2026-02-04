import { HeroCarousel } from "@/components/home/hero-carousel"
import { CategoriesGrid } from "@/components/home/categories-grid"
import { FeaturedProductsGrid } from "@/components/home/featured-products-grid"
import { PromoBanners } from "@/components/home/promo-banners"
import { NewArrivalsCarousel } from "@/components/home/new-arrivals-carousel"
import { NewsletterSection } from "@/components/home/newsletter-section"

export default function HomePage() {
  return (
    <div>
      <HeroCarousel />
      <CategoriesGrid />
      <FeaturedProductsGrid />

      {/* Promo banners with container */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-7xl">
          <PromoBanners />
        </div>
      </section>

      <NewArrivalsCarousel />
      <NewsletterSection />
    </div>
  )
}
