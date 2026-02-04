import { Link } from "react-router-dom"
import { HugeiconsIcon } from "@hugeicons/react"
import { HeartAddIcon, StarIcon, ShoppingCart01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface ProductCardProps {
  name: string
  price: number
  originalPrice?: number
  rating: number
  image: string
  slug: string
}

export function ProductCard({
  name,
  price,
  originalPrice,
  rating,
  image,
  slug,
}: ProductCardProps) {
  const isOnSale = originalPrice && originalPrice > price
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className="group overflow-hidden rounded-xl ring-1 ring-foreground/10 bg-card text-card-foreground">
      {/* Product Image Area */}
      <div className="relative aspect-[3/4]">
        <div className={`w-full h-full ${image} transition-all group-hover:brightness-110`} />

        {/* Sale Badge - Top Left */}
        {isOnSale && (
          <Badge className="absolute top-3 left-3">
            Sale
          </Badge>
        )}

        {/* Wishlist Button - Top Right */}
        <button
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full cursor-pointer transition-colors"
          aria-label="Add to wishlist"
        >
          <HugeiconsIcon icon={HeartAddIcon} size={20} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Product Name */}
        <Link
          to={`/product/${slug}`}
          className="font-medium hover:underline cursor-pointer line-clamp-2"
        >
          {name}
        </Link>

        {/* Star Rating */}
        <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <HugeiconsIcon
              key={index}
              icon={StarIcon}
              size={16}
              className={
                index < fullStars
                  ? "text-amber-400 fill-amber-400"
                  : index === fullStars && hasHalfStar
                  ? "text-amber-400 fill-amber-400/50"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">({rating})</span>
        </div>

        {/* Price Display */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">${price.toFixed(2)}</span>
          {isOnSale && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button variant="outline" className="w-full cursor-pointer" aria-label="Add to cart">
          <HugeiconsIcon icon={ShoppingCart01Icon} size={18} />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
