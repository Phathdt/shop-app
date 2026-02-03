import { useParams } from "react-router-dom"
import { Badge } from "@/components/ui/badge"

export default function ShopPage() {
  const { category } = useParams<{ category?: string }>()

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold">Shop</h1>
        {category && <Badge variant="secondary">{category}</Badge>}
      </div>
      <p className="mt-2 text-muted-foreground">
        {category
          ? `Browsing ${category} products`
          : "Browse all products"}
      </p>
      <div className="mt-8 rounded-lg border border-dashed p-12 text-center text-muted-foreground">
        Product grid coming soon
      </div>
    </div>
  )
}
