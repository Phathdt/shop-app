import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to ShopApp
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover amazing products at great prices.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link to="/shop">Browse Shop</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
