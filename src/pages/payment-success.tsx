import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function PaymentSuccessPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Payment Successful!
        </h1>
        <p className="mt-4 text-muted-foreground">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link to="/account/orders">View Orders</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
