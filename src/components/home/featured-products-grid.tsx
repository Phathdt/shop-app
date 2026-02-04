import { Link } from "react-router-dom"
import { ProductCard } from "./product-card"

const featuredProducts = [
  {
    name: "Wireless Noise-Cancelling Headphones",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    image: "bg-gradient-to-br from-violet-400 to-violet-600",
    slug: "wireless-noise-cancelling-headphones",
  },
  {
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    rating: 4.2,
    image: "bg-gradient-to-br from-sky-400 to-sky-600",
    slug: "premium-cotton-tshirt",
  },
  {
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    image: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    slug: "smart-fitness-watch",
  },
  {
    name: "Leather Crossbody Bag",
    price: 59.99,
    rating: 4.3,
    image: "bg-gradient-to-br from-amber-400 to-amber-600",
    slug: "leather-crossbody-bag",
  },
  {
    name: "Running Shoes Pro",
    price: 119.99,
    originalPrice: 159.99,
    rating: 4.8,
    image: "bg-gradient-to-br from-rose-400 to-rose-600",
    slug: "running-shoes-pro",
  },
  {
    name: "Organic Skincare Set",
    price: 45.99,
    rating: 4.1,
    image: "bg-gradient-to-br from-pink-400 to-pink-600",
    slug: "organic-skincare-set",
  },
  {
    name: "Bluetooth Portable Speaker",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.4,
    image: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    slug: "bluetooth-portable-speaker",
  },
  {
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    rating: 4.6,
    image: "bg-gradient-to-br from-teal-400 to-teal-600",
    slug: "stainless-steel-water-bottle",
  },
]

export function FeaturedProductsGrid() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link
            to="/shop"
            className="text-sm font-medium text-primary hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
