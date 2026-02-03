import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <p className="mt-2 text-muted-foreground">Your cart is empty.</p>
      <div className="mt-8 rounded-lg border border-dashed p-12 text-center text-muted-foreground">
        <p>No items in your cart yet.</p>
        <Button variant="outline" className="mt-4" asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  )
}
