import { Link } from "react-router-dom"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

interface ProductBreadcrumbProps {
  category: string
  productName: string
}

export function ProductBreadcrumb({
  category,
  productName,
}: ProductBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      <Link
        to="/"
        className="cursor-pointer text-muted-foreground transition-colors hover:text-primary"
      >
        Home
      </Link>
      <HugeiconsIcon
        icon={ArrowRight01Icon}
        className="size-3.5 text-muted-foreground"
      />
      <Link
        to={`/shop/${category.toLowerCase()}`}
        className="cursor-pointer text-muted-foreground transition-colors hover:text-primary"
      >
        {category}
      </Link>
      <HugeiconsIcon
        icon={ArrowRight01Icon}
        className="size-3.5 text-muted-foreground"
      />
      <span className="truncate font-medium text-foreground">
        {productName}
      </span>
    </nav>
  )
}
