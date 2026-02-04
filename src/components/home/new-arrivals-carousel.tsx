import { useRef } from "react"
import { Link } from "react-router-dom"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { ProductCard } from "./product-card"

const newArrivals = [
  {
    name: "Minimalist Desk Lamp",
    price: 34.99,
    rating: 4.3,
    image: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    slug: "minimalist-desk-lamp",
  },
  {
    name: "Canvas Sneakers",
    price: 54.99,
    originalPrice: 74.99,
    rating: 4.5,
    image: "bg-gradient-to-br from-cyan-400 to-cyan-600",
    slug: "canvas-sneakers",
  },
  {
    name: "Yoga Mat Premium",
    price: 39.99,
    rating: 4.7,
    image: "bg-gradient-to-br from-lime-400 to-lime-600",
    slug: "yoga-mat-premium",
  },
  {
    name: "Ceramic Coffee Mug Set",
    price: 19.99,
    rating: 4.2,
    image: "bg-gradient-to-br from-orange-400 to-orange-600",
    slug: "ceramic-coffee-mug-set",
  },
  {
    name: "Silk Scarf Collection",
    price: 28.99,
    originalPrice: 42.99,
    rating: 4.6,
    image: "bg-gradient-to-br from-fuchsia-400 to-fuchsia-600",
    slug: "silk-scarf-collection",
  },
  {
    name: "Wireless Charging Pad",
    price: 22.99,
    rating: 4.4,
    image: "bg-gradient-to-br from-blue-400 to-blue-600",
    slug: "wireless-charging-pad",
  },
]

export function NewArrivalsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.offsetWidth * 0.6
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">New Arrivals</h2>
          <div className="flex items-center gap-2">
            <Link
              to="/shop/new-arrivals"
              className="mr-4 text-sm font-medium text-primary hover:underline"
            >
              View All
            </Link>
            <button
              onClick={() => scroll("left")}
              className="rounded-full border p-2 transition-colors hover:bg-muted cursor-pointer"
              aria-label="Scroll left"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} className="size-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="rounded-full border p-2 transition-colors hover:bg-muted cursor-pointer"
              aria-label="Scroll right"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 md:gap-6 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {newArrivals.map((product) => (
            <div
              key={product.slug}
              className="w-[220px] shrink-0 md:w-[260px]"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
