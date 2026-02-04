import { useState, useMemo, useCallback } from "react"
import { Link, useParams } from "react-router-dom"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, FilterIcon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { ProductFilterSidebar } from "@/components/shop/product-filter-sidebar"
import { ProductGridToolbar } from "@/components/shop/product-grid-toolbar"
import { ProductCard } from "@/components/shop/product-card"
import { ProductEmptyState } from "@/components/shop/product-empty-state"
import {
  MOCK_PRODUCTS,
  INITIAL_FILTERS,
  type FilterState,
  type SortOption,
  type ViewMode,
} from "@/data/products"

export default function ShopPage() {
  const { category } = useParams<{ category?: string }>()

  // State
  const [filters, setFilters] = useState<FilterState>(() => ({
    ...INITIAL_FILTERS,
    categories: category ? [category] : [],
  }))
  const [sortBy, setSortBy] = useState<SortOption>("featured")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [perPage, setPerPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS]

    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category))
    }
    if (filters.brands.length > 0) {
      result = result.filter((p) => filters.brands.includes(p.brand))
    }
    if (filters.ratings.length > 0) {
      const minRating = Math.min(...filters.ratings)
      result = result.filter((p) => p.rating >= minRating)
    }
    if (filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => filters.sizes.includes(s))
      )
    }
    if (filters.colors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) => filters.colors.includes(c))
      )
    }
    result = result.filter(
      (p) =>
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    )

    return result
  }, [filters])

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts]
    switch (sortBy) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price)
        break
      case "newest":
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return sorted
  }, [filteredProducts, sortBy])

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / perPage)
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * perPage
    return sortedProducts.slice(start, start + perPage)
  }, [sortedProducts, currentPage, perPage])

  const clearFilters = useCallback(() => {
    setFilters(INITIAL_FILTERS)
    setCurrentPage(1)
  }, [])

  const handleFilterChange = useCallback((newFilters: FilterState) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }, [])

  const handlePerPageChange = useCallback((newPerPage: number) => {
    setPerPage(newPerPage)
    setCurrentPage(1)
  }, [])

  // Build breadcrumb
  const breadcrumbCategory = category || (filters.categories.length === 1 ? filters.categories[0] : null)

  // Generate pagination range
  const paginationRange = useMemo(() => {
    const range: (number | "ellipsis")[] = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) range.push(i)
    } else {
      range.push(1)
      if (currentPage > 3) range.push("ellipsis")
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)
      for (let i = start; i <= end; i++) range.push(i)
      if (currentPage < totalPages - 2) range.push("ellipsis")
      range.push(totalPages)
    }
    return range
  }, [totalPages, currentPage])

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
        <ol className="flex items-center gap-1">
          <li>
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          <li>
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5" />
          </li>
          {breadcrumbCategory ? (
            <>
              <li>
                <Link to="/shop" className="hover:text-foreground">
                  Shop
                </Link>
              </li>
              <li>
                <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5" />
              </li>
              <li className="text-foreground font-medium">
                {breadcrumbCategory}
              </li>
            </>
          ) : (
            <li className="text-foreground font-medium">Shop</li>
          )}
        </ol>
      </nav>

      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          {breadcrumbCategory || "All Products"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {sortedProducts.length} product{sortedProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Mobile filter toggle */}
      <div className="mb-4 lg:hidden">
        <Button
          variant="outline"
          className="w-full cursor-pointer"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <HugeiconsIcon icon={FilterIcon} className="size-4" />
          {showMobileFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      {/* Two-column layout */}
      <div className="flex gap-8">
        {/* Sidebar - desktop always visible, mobile toggle */}
        <div
          className={`w-full shrink-0 lg:block lg:w-64 ${
            showMobileFilters ? "block" : "hidden"
          }`}
        >
          <ProductFilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearAll={clearFilters}
          />
        </div>

        {/* Main content */}
        <div className="min-w-0 flex-1 space-y-4">
          <ProductGridToolbar
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            sortBy={sortBy}
            onSortChange={setSortBy}
            perPage={perPage}
            onPerPageChange={handlePerPageChange}
            totalProducts={sortedProducts.length}
          />

          {paginatedProducts.length === 0 ? (
            <ProductEmptyState onClearFilters={clearFilters} />
          ) : (
            <>
              {/* Product grid */}
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4"
                    : "flex flex-col gap-4"
                }
              >
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          if (currentPage > 1) setCurrentPage(currentPage - 1)
                        }}
                        className={
                          currentPage <= 1
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>

                    {paginationRange.map((item, idx) =>
                      item === "ellipsis" ? (
                        <PaginationItem key={`ellipsis-${idx}`}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      ) : (
                        <PaginationItem key={item}>
                          <PaginationLink
                            href="#"
                            isActive={item === currentPage}
                            onClick={(e) => {
                              e.preventDefault()
                              setCurrentPage(item)
                            }}
                            className="cursor-pointer"
                          >
                            {item}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    )}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          if (currentPage < totalPages)
                            setCurrentPage(currentPage + 1)
                        }}
                        className={
                          currentPage >= totalPages
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
