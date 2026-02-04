import { useState, useRef } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ZoomInAreaIcon } from "@hugeicons/core-free-icons"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ProductImage } from "@/data/product-detail-mock-data"

interface ProductImageGalleryProps {
  images: ProductImage[]
}

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isZooming, setIsZooming] = useState(false)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const imageElRef = useRef<HTMLImageElement>(null)

  const selectedImage = images[selectedIndex]

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!imageContainerRef.current || !imageElRef.current) return
    const rect = imageContainerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    imageElRef.current.style.transformOrigin = `${x}% ${y}%`
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Main image with zoom */}
      <Dialog>
        <div className="group relative">
          <div
            ref={imageContainerRef}
            className="relative cursor-zoom-in overflow-hidden rounded-lg border bg-muted"
            onMouseEnter={() => setIsZooming(true)}
            onMouseLeave={() => setIsZooming(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              ref={imageElRef}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={cn(
                "aspect-[6/7] w-full object-cover transition-transform duration-200",
                isZooming && "scale-150"
              )}
            />
          </div>

          {/* Fullscreen trigger */}
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              size="icon-sm"
              className="absolute right-3 bottom-3 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100"
              aria-label="View fullscreen"
            >
              <HugeiconsIcon icon={ZoomInAreaIcon} className="size-4" />
            </Button>
          </DialogTrigger>
        </div>

        {/* Lightbox dialog */}
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">
            {selectedImage.alt}
          </DialogTitle>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="h-auto w-full rounded-lg"
          />
        </DialogContent>
      </Dialog>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "relative shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition-colors",
              index === selectedIndex
                ? "border-primary"
                : "border-transparent hover:border-muted-foreground/30"
            )}
            aria-label={`View ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="size-16 object-cover sm:size-20"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
