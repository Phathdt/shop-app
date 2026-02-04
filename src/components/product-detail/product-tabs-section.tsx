import { useState } from "react"
import DOMPurify from "dompurify"
import { HugeiconsIcon } from "@hugeicons/react"
import { StarIcon } from "@hugeicons/core-free-icons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ProductStarRating } from "./product-star-rating"
import type { ProductDetail } from "@/data/product-detail-mock-data"

interface ProductTabsSectionProps {
  product: ProductDetail
}

export function ProductTabsSection({ product }: ProductTabsSectionProps) {
  return (
    <Tabs defaultValue="description" id="reviews">
      <TabsList variant="line" className="w-full justify-start">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="additional-info">Additional Information</TabsTrigger>
        <TabsTrigger value="reviews">
          Reviews ({product.reviewCount})
        </TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-6">
        <DescriptionTab product={product} />
      </TabsContent>

      <TabsContent value="additional-info" className="mt-6">
        <AdditionalInfoTab product={product} />
      </TabsContent>

      <TabsContent value="reviews" className="mt-6">
        <ReviewsTab product={product} />
      </TabsContent>
    </Tabs>
  )
}

/* --- Description Tab --- */

function DescriptionTab({ product }: { product: ProductDetail }) {
  return (
    <div className="space-y-6">
      <div
        className="prose prose-sm max-w-none text-muted-foreground dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }}
      />
      <div>
        <h3 className="mb-3 text-lg font-semibold">Features</h3>
        <ul className="space-y-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* --- Additional Info Tab --- */

function AdditionalInfoTab({ product }: { product: ProductDetail }) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <table className="w-full text-sm">
        <tbody>
          {product.specs.map((spec, i) => (
            <tr
              key={spec.label}
              className={cn(i % 2 === 0 ? "bg-muted/50" : "bg-background")}
            >
              <td className="px-4 py-3 font-medium">{spec.label}</td>
              <td className="px-4 py-3 text-muted-foreground">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* --- Reviews Tab --- */

function ReviewsTab({ product }: { product: ProductDetail }) {
  return (
    <div className="space-y-8">
      {/* Rating summary */}
      <div className="flex flex-col items-start gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-1 rounded-lg border bg-muted/30 px-8 py-5">
          <span className="text-4xl font-bold">{product.rating}</span>
          <ProductStarRating rating={product.rating} />
          <span className="text-sm text-muted-foreground">
            {product.reviewCount} reviews
          </span>
        </div>
        <RatingBreakdown
          rating={product.rating}
          total={product.reviewCount}
        />
      </div>

      <Separator />

      {/* Review list */}
      <div className="space-y-6">
        {product.reviews.map((review) => (
          <div key={review.id} className="flex gap-4">
            <Avatar className="size-10 shrink-0">
              <AvatarImage src={review.avatar} alt={review.author} />
              <AvatarFallback>
                {review.author.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{review.author}</span>
                <span className="text-xs text-muted-foreground">
                  {review.date}
                </span>
              </div>
              <ProductStarRating rating={review.rating} className="mt-1" />
              <p className="mt-1 text-sm font-medium">{review.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {review.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Separator />

      {/* Write review form */}
      <WriteReviewForm />
    </div>
  )
}

/* --- Rating Breakdown --- */

function RatingBreakdown({
  rating,
  total,
}: {
  rating: number
  total: number
}) {
  // Approximate distribution based on average rating
  const distribution = [
    { stars: 5, percent: rating >= 4.5 ? 60 : rating >= 4 ? 45 : 30 },
    { stars: 4, percent: rating >= 4.5 ? 25 : rating >= 4 ? 30 : 25 },
    { stars: 3, percent: rating >= 4.5 ? 10 : rating >= 4 ? 15 : 20 },
    { stars: 2, percent: rating >= 4.5 ? 3 : rating >= 4 ? 7 : 15 },
    { stars: 1, percent: rating >= 4.5 ? 2 : rating >= 4 ? 3 : 10 },
  ]

  return (
    <div className="flex-1 space-y-1.5">
      {distribution.map(({ stars, percent }) => (
        <div key={stars} className="flex items-center gap-2 text-sm">
          <span className="flex w-8 items-center gap-0.5">
            {stars}
            <HugeiconsIcon
              icon={StarIcon}
              className="size-3 fill-amber-400 text-amber-400"
            />
          </span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-amber-400 transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="w-12 text-right text-xs text-muted-foreground">
            {Math.round((total * percent) / 100)}
          </span>
        </div>
      ))}
    </div>
  )
}

/* --- Write Review Form --- */

function WriteReviewForm() {
  const [hoverRating, setHoverRating] = useState(0)
  const [selectedRating, setSelectedRating] = useState(0)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Write a Review</h3>
      <div>
        <Label className="mb-1.5">Your Rating</Label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setSelectedRating(star)}
              className="cursor-pointer"
              aria-label={`Rate ${star} stars`}
            >
              <HugeiconsIcon
                icon={StarIcon}
                className={cn(
                  "size-6 transition-colors",
                  (hoverRating || selectedRating) >= star
                    ? "fill-amber-400 text-amber-400"
                    : "text-muted-foreground/30"
                )}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="review-name">Name</Label>
          <Input id="review-name" placeholder="Your name" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="review-email">Email</Label>
          <Input
            id="review-email"
            type="email"
            placeholder="your@email.com"
            className="mt-1.5"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="review-title">Review Title</Label>
        <Input
          id="review-title"
          placeholder="Summary of your experience"
          className="mt-1.5"
        />
      </div>
      <div>
        <Label htmlFor="review-content">Your Review</Label>
        <Textarea
          id="review-content"
          placeholder="Tell us about your experience with this product..."
          className="mt-1.5"
          rows={4}
        />
      </div>
      <Button className="cursor-pointer">Submit Review</Button>
    </div>
  )
}
