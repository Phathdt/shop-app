import { HugeiconsIcon } from "@hugeicons/react"
import { SearchRemoveIcon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"

interface ProductEmptyStateProps {
  onClearFilters: () => void
}

export function ProductEmptyState({ onClearFilters }: ProductEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
      <div className="mb-4 rounded-full bg-muted p-4">
        <HugeiconsIcon
          icon={SearchRemoveIcon}
          className="size-10 text-muted-foreground"
        />
      </div>
      <h3 className="text-lg font-semibold">No products found</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">
        We couldn't find any products matching your current filters. Try
        adjusting your criteria or clearing all filters.
      </p>
      <Button
        variant="outline"
        className="mt-4 cursor-pointer"
        onClick={onClearFilters}
      >
        Clear All Filters
      </Button>
    </div>
  )
}
