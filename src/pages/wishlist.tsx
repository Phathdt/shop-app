import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function WishlistPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold">Wishlist</h1>
      <p className="mt-2 text-muted-foreground">
        Items you've saved for later.
      </p>
      <div className="mt-8 rounded-lg border border-dashed p-12 text-center text-muted-foreground">
        <p>Your wishlist is empty.</p>
        <Button variant="outline" className="mt-4" asChild>
          <Link to="/shop">Discover Products</Link>
        </Button>
      </div>
    </div>
  )
}
