import { HugeiconsIcon } from "@hugeicons/react"
import { StarIcon, StarHalfIcon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

interface ProductStarRatingProps {
  rating: number
  maxStars?: number
  className?: string
}

export function ProductStarRating({
  rating,
  maxStars = 5,
  className,
}: ProductStarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating - fullStars >= 0.5

  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} out of ${maxStars} stars`}>
      {Array.from({ length: maxStars }, (_, i) => {
        if (i < fullStars) {
          return (
            <HugeiconsIcon
              key={i}
              icon={StarIcon}
              className="size-4 fill-amber-400 text-amber-400"
            />
          )
        }
        if (i === fullStars && hasHalfStar) {
          return (
            <HugeiconsIcon
              key={i}
              icon={StarHalfIcon}
              className="size-4 fill-amber-400 text-amber-400"
            />
          )
        }
        return (
          <HugeiconsIcon
            key={i}
            icon={StarIcon}
            className="size-4 text-muted-foreground/30"
          />
        )
      })}
    </div>
  )
}
