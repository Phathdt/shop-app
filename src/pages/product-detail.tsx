import { useParams } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { ProductBreadcrumb } from "@/components/product-detail/product-breadcrumb"
import { ProductImageGallery } from "@/components/product-detail/product-image-gallery"
import { ProductInfoSection } from "@/components/product-detail/product-info-section"
import { ProductTabsSection } from "@/components/product-detail/product-tabs-section"
import { RelatedProductsCarousel } from "@/components/product-detail/related-products-carousel"
import { RecentlyViewedProducts } from "@/components/product-detail/recently-viewed-products"
import { mockProduct, relatedProducts } from "@/data/product-detail-mock-data"

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  // In a real app, fetch product by slug. Using mock data for now.
  const product = { ...mockProduct, slug: slug ?? mockProduct.slug }

  // Simulate recently viewed with a subset of related products
  const recentlyViewed = relatedProducts.slice(0, 4)

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
      {/* Breadcrumb */}
      <ProductBreadcrumb
        category={product.category}
        productName={product.name}
      />

      {/* Main product section: two-column layout */}
      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <ProductImageGallery images={product.images} />
        <ProductInfoSection product={product} />
      </div>

      {/* Tabs section */}
      <Separator className="my-10" />
      <ProductTabsSection product={product} />

      {/* Related products */}
      <Separator className="my-10" />
      <RelatedProductsCarousel products={relatedProducts} />

      {/* Recently viewed */}
      <Separator className="my-10" />
      <RecentlyViewedProducts products={recentlyViewed} />
    </div>
  )
}
