import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ProductStarRating } from "./product-star-rating"

interface RelatedProduct {
  id: string
  slug: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
}

interface RelatedProductsCarouselProps {
  products: RelatedProduct[]
  title?: string
}

export function RelatedProductsCarousel({
  products,
  title = "You May Also Like",
}: RelatedProductsCarouselProps) {
  if (products.length === 0) return null

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 hidden md:flex" />
        <CarouselNext className="-right-4 hidden md:flex" />
      </Carousel>
    </div>
  )
}

function ProductCard({ product }: { product: RelatedProduct }) {
  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price

  return (
    <Link to={`/product/${product.slug}`} className="group cursor-pointer">
      <Card className="overflow-hidden border transition-shadow hover:shadow-md">
        <div className="relative overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[6/7] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {hasDiscount && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              Sale
            </Badge>
          )}
        </div>
        <CardContent className="p-3">
          <h3 className="truncate text-sm font-medium group-hover:text-primary">
            {product.name}
          </h3>
          <ProductStarRating rating={product.rating} className="mt-1" />
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="text-sm font-bold">
              ${product.price.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="text-xs text-muted-foreground line-through">
                ${product.originalPrice!.toFixed(2)}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
