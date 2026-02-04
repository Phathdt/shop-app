import { HugeiconsIcon } from "@hugeicons/react"
import { StarIcon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import {
  CATEGORIES,
  BRANDS,
  SIZES,
  COLORS,
  PRICE_MIN,
  PRICE_MAX,
  type FilterState,
} from "@/data/products"

interface ProductFilterSidebarProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  onClearAll: () => void
}

export function ProductFilterSidebar({
  filters,
  onFilterChange,
  onClearAll,
}: ProductFilterSidebarProps) {
  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    filters.ratings.length > 0 ||
    filters.sizes.length > 0 ||
    filters.colors.length > 0 ||
    filters.priceRange[0] !== PRICE_MIN ||
    filters.priceRange[1] !== PRICE_MAX

  function toggleArrayFilter<K extends keyof FilterState>(
    key: K,
    value: FilterState[K] extends Array<infer U> ? U : never
  ) {
    const current = filters[key] as unknown[]
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    onFilterChange({ ...filters, [key]: next })
  }

  return (
    <aside className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="cursor-pointer text-muted-foreground"
          >
            Clear all
          </Button>
        )}
      </div>

      <Separator />

      {/* Category filter */}
      <FilterSection title="Category">
        {CATEGORIES.map((cat) => (
          <label
            key={cat.name}
            className="flex cursor-pointer items-center gap-2"
          >
            <Checkbox
              checked={filters.categories.includes(cat.name)}
              onCheckedChange={() =>
                toggleArrayFilter("categories", cat.name)
              }
            />
            <span className="flex-1 text-sm">{cat.name}</span>
            <span className="text-xs text-muted-foreground">({cat.count})</span>
          </label>
        ))}
      </FilterSection>

      <Separator />

      {/* Price range filter */}
      <FilterSection title="Price Range">
        <Slider
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={10}
          value={filters.priceRange}
          onValueChange={(value) =>
            onFilterChange({
              ...filters,
              priceRange: value as [number, number],
            })
          }
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </FilterSection>

      <Separator />

      {/* Brand filter */}
      <FilterSection title="Brand">
        {BRANDS.map((brand) => (
          <label
            key={brand.name}
            className="flex cursor-pointer items-center gap-2"
          >
            <Checkbox
              checked={filters.brands.includes(brand.name)}
              onCheckedChange={() => toggleArrayFilter("brands", brand.name)}
            />
            <span className="flex-1 text-sm">{brand.name}</span>
            <span className="text-xs text-muted-foreground">
              ({brand.count})
            </span>
          </label>
        ))}
      </FilterSection>

      <Separator />

      {/* Rating filter */}
      <FilterSection title="Rating">
        {[4, 3, 2, 1].map((star) => (
          <label
            key={star}
            className="flex cursor-pointer items-center gap-2"
          >
            <Checkbox
              checked={filters.ratings.includes(star)}
              onCheckedChange={() => toggleArrayFilter("ratings", star)}
            />
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <HugeiconsIcon
                  key={i}
                  icon={StarIcon}
                  className={`size-3.5 ${
                    i < star
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground/40"
                  }`}
                />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">& Up</span>
          </label>
        ))}
      </FilterSection>

      <Separator />

      {/* Size filter */}
      <FilterSection title="Size">
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => {
            const isActive = filters.sizes.includes(size)
            return (
              <button
                key={size}
                type="button"
                onClick={() => toggleArrayFilter("sizes", size)}
                className={`cursor-pointer rounded-md border px-3 py-1 text-sm transition-colors ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {size}
              </button>
            )
          })}
        </div>
      </FilterSection>

      <Separator />

      {/* Color filter */}
      <FilterSection title="Color">
        <div className="flex flex-wrap gap-2">
          {COLORS.map((color) => {
            const isActive = filters.colors.includes(color.name)
            return (
              <button
                key={color.name}
                type="button"
                onClick={() => toggleArrayFilter("colors", color.name)}
                title={color.name}
                className={`cursor-pointer rounded-full border-2 p-0.5 transition-colors ${
                  isActive ? "border-primary" : "border-transparent"
                }`}
              >
                <span
                  className="block size-6 rounded-full border border-border"
                  style={{ backgroundColor: color.value }}
                />
              </button>
            )
          })}
        </div>
      </FilterSection>
    </aside>
  )
}

function FilterSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">{title}</Label>
      <div className="space-y-2">{children}</div>
    </div>
  )
}
