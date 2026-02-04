import { Link } from "react-router-dom"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  StarIcon,
  FavouriteIcon,
  ShoppingCart01Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Product, ViewMode } from "@/data/products"

interface ProductCardProps {
  product: Product
  viewMode: ViewMode
}

export function ProductCard({ product, viewMode }: ProductCardProps) {
  if (viewMode === "list") {
    return <ProductCardList product={product} />
  }
  return <ProductCardGrid product={product} />
}

function ProductCardGrid({ product }: { product: Product }) {
  return (
    <Card className="group/card cursor-pointer gap-0 overflow-hidden py-0 transition-shadow hover:shadow-lg">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="size-full object-cover transition-transform duration-300 group-hover/card:scale-105"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isSale && <Badge variant="destructive">Sale</Badge>}
          {product.isNew && <Badge>New</Badge>}
        </div>

        {/* Wishlist button */}
        <Button
          variant="secondary"
          size="icon-sm"
          className="absolute top-2 right-2 cursor-pointer opacity-0 transition-opacity group-hover/card:opacity-100"
          aria-label="Add to wishlist"
        >
          <HugeiconsIcon icon={FavouriteIcon} className="size-4" />
        </Button>

        {/* Quick view overlay */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center bg-black/40 py-2 opacity-0 backdrop-blur-sm transition-opacity group-hover/card:opacity-100">
          <Button
            variant="secondary"
            size="sm"
            className="cursor-pointer"
          >
            <HugeiconsIcon icon={ViewIcon} className="size-4" />
            Quick View
          </Button>
        </div>
      </div>

      {/* Content */}
      <CardContent className="space-y-2 p-4">
        <Link
          to={`/product/${product.slug}`}
          className="line-clamp-2 text-sm font-medium hover:text-primary"
        >
          {product.name}
        </Link>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-semibold">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
              <HugeiconsIcon
                key={i}
                icon={StarIcon}
                className={`size-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground/40"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        {/* Add to cart */}
        <Button className="w-full cursor-pointer" size="sm">
          <HugeiconsIcon icon={ShoppingCart01Icon} className="size-4" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}

function ProductCardList({ product }: { product: Product }) {
  return (
    <Card className="group/card cursor-pointer flex-row gap-0 overflow-hidden py-0 transition-shadow hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-square w-48 shrink-0 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="size-full object-cover transition-transform duration-300 group-hover/card:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isSale && <Badge variant="destructive">Sale</Badge>}
          {product.isNew && <Badge>New</Badge>}
        </div>
      </div>

      {/* Content */}
      <CardContent className="flex flex-1 flex-col justify-between p-4">
        <div className="space-y-2">
          <Link
            to={`/product/${product.slug}`}
            className="text-base font-medium hover:text-primary"
          >
            {product.name}
          </Link>

          <p className="text-sm text-muted-foreground">
            {product.brand} &middot; {product.category}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <HugeiconsIcon
                  key={i}
                  icon={StarIcon}
                  className={`size-3.5 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Price & actions */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon-sm"
              className="cursor-pointer"
              aria-label="Add to wishlist"
            >
              <HugeiconsIcon icon={FavouriteIcon} className="size-4" />
            </Button>
            <Button className="cursor-pointer" size="sm">
              <HugeiconsIcon icon={ShoppingCart01Icon} className="size-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
