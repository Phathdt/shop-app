import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  MinusSignIcon,
  PlusSignIcon,
  FavouriteIcon,
  Share01Icon,
  RulerIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ProductStarRating } from "./product-star-rating"
import type { ProductDetail } from "@/data/product-detail-mock-data"

interface ProductInfoSectionProps {
  product: ProductDetail
}

export function ProductInfoSection({ product }: ProductInfoSectionProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)

  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0

  function handleQuantityChange(delta: number) {
    setQuantity((prev) => Math.max(1, prev + delta))
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Title & Rating */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {product.name}
        </h1>
        <div className="mt-2 flex items-center gap-2">
          <ProductStarRating rating={product.rating} />
          <a
            href="#reviews"
            className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            ({product.reviewCount} reviews)
          </a>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
        {hasDiscount && (
          <>
            <span className="text-lg text-muted-foreground line-through">
              ${product.originalPrice!.toFixed(2)}
            </span>
            <Badge variant="destructive">-{discountPercent}%</Badge>
          </>
        )}
      </div>

      {/* Short description */}
      <p className="text-muted-foreground">{product.shortDescription}</p>

      {/* Stock status */}
      <Badge
        variant={product.inStock ? "secondary" : "destructive"}
        className="w-fit"
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </Badge>

      <Separator />

      {/* Color selector */}
      <div>
        <p className="mb-2 text-sm font-medium">
          Color: <span className="text-muted-foreground">{selectedColor}</span>
        </p>
        <div className="flex gap-2">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={cn(
                "size-9 cursor-pointer rounded-full border-2 transition-all",
                selectedColor === color.name
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-border hover:border-muted-foreground/50"
              )}
              style={{ backgroundColor: color.value }}
              aria-label={`Select ${color.name}`}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size selector */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-medium">Size</p>
          <button className="flex cursor-pointer items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
            <HugeiconsIcon icon={RulerIcon} className="size-4" />
            Size Guide
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={cn(
                "cursor-pointer rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                selectedSize === size
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Quantity & Actions */}
      <div className="flex flex-col gap-3">
        {/* Quantity */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Quantity:</span>
          <div className="flex items-center rounded-md border">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="cursor-pointer rounded-r-none"
              aria-label="Decrease quantity"
            >
              <HugeiconsIcon icon={MinusSignIcon} className="size-4" />
            </Button>
            <span className="w-10 text-center text-sm font-medium">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => handleQuantityChange(1)}
              className="cursor-pointer rounded-l-none"
              aria-label="Increase quantity"
            >
              <HugeiconsIcon icon={PlusSignIcon} className="size-4" />
            </Button>
          </div>
        </div>

        {/* Action buttons */}
        <Button
          size="lg"
          className="w-full cursor-pointer"
          disabled={!product.inStock}
        >
          Add to Cart
        </Button>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 cursor-pointer"
          >
            Buy Now
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer"
            aria-label="Add to wishlist"
          >
            <HugeiconsIcon icon={FavouriteIcon} className="size-5" />
          </Button>
        </div>
      </div>

      <Separator />

      {/* Meta */}
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-medium">SKU:</span>{" "}
          <span className="text-muted-foreground">{product.sku}</span>
        </p>
        <p>
          <span className="font-medium">Category:</span>{" "}
          <a
            href={`/shop/${product.category.toLowerCase()}`}
            className="cursor-pointer text-muted-foreground transition-colors hover:text-primary"
          >
            {product.category}
          </a>
        </p>
        <p>
          <span className="font-medium">Tags:</span>{" "}
          <span className="text-muted-foreground">
            {product.tags.join(", ")}
          </span>
        </p>
      </div>

      {/* Share */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Share:</span>
        <Button
          variant="ghost"
          size="icon-sm"
          className="cursor-pointer"
          aria-label="Share product"
        >
          <HugeiconsIcon icon={Share01Icon} className="size-4" />
        </Button>
      </div>
    </div>
  )
}
