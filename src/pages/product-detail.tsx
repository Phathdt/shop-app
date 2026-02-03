import { useParams } from "react-router-dom"

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold">Product Detail</h1>
      <p className="mt-2 text-muted-foreground">
        Viewing product: <span className="font-medium text-foreground">{slug}</span>
      </p>
      <div className="mt-8 rounded-lg border border-dashed p-12 text-center text-muted-foreground">
        Product detail coming soon
      </div>
    </div>
  )
}
