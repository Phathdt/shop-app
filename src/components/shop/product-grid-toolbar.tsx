import { HugeiconsIcon } from "@hugeicons/react"
import { GridViewIcon, Menu01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  SORT_OPTIONS,
  PER_PAGE_OPTIONS,
  type SortOption,
  type ViewMode,
} from "@/data/products"

interface ProductGridToolbarProps {
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
  sortBy: SortOption
  onSortChange: (sort: SortOption) => void
  perPage: number
  onPerPageChange: (perPage: number) => void
  totalProducts: number
}

export function ProductGridToolbar({
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
  perPage,
  onPerPageChange,
  totalProducts,
}: ProductGridToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-card p-3">
      <div className="flex items-center gap-2">
        {/* View toggle */}
        <div className="flex items-center rounded-md border">
          <Button
            variant={viewMode === "grid" ? "secondary" : "ghost"}
            size="icon-sm"
            onClick={() => onViewModeChange("grid")}
            aria-label="Grid view"
            className="cursor-pointer rounded-r-none"
          >
            <HugeiconsIcon icon={GridViewIcon} className="size-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "secondary" : "ghost"}
            size="icon-sm"
            onClick={() => onViewModeChange("list")}
            aria-label="List view"
            className="cursor-pointer rounded-l-none"
          >
            <HugeiconsIcon icon={Menu01Icon} className="size-4" />
          </Button>
        </div>

        <span className="text-sm text-muted-foreground">
          {totalProducts} product{totalProducts !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="hidden text-sm text-muted-foreground sm:inline">
            Sort by:
          </span>
          <Select value={sortBy} onValueChange={(v) => onSortChange(v as SortOption)}>
            <SelectTrigger className="w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Per page */}
        <div className="hidden items-center gap-2 sm:flex">
          <span className="text-sm text-muted-foreground">Show:</span>
          <Select
            value={String(perPage)}
            onValueChange={(v) => onPerPageChange(Number(v))}
          >
            <SelectTrigger className="w-[70px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PER_PAGE_OPTIONS.map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
