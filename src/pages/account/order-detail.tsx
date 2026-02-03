import { useParams } from "react-router-dom"

export default function OrderDetailPage() {
  const { orderId } = useParams<{ orderId: string }>()

  return (
    <div>
      <h1 className="text-2xl font-bold">Order #{orderId}</h1>
      <p className="mt-2 text-muted-foreground">
        View details for order #{orderId}.
      </p>
      <div className="mt-6 rounded-lg border border-dashed p-8 text-center text-muted-foreground">
        Order details coming soon
      </div>
    </div>
  )
}
