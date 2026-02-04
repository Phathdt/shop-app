import { Link } from "react-router-dom"

interface RecentProduct {
  id: string
  slug: string
  name: string
  price: number
  image: string
}

interface RecentlyViewedProductsProps {
  products: RecentProduct[]
}

export function RecentlyViewedProducts({
  products,
}: RecentlyViewedProductsProps) {
  if (products.length === 0) return null

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Recently Viewed</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.slug}`}
            className="group flex shrink-0 cursor-pointer flex-col"
          >
            <div className="overflow-hidden rounded-lg border bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="size-32 object-cover transition-transform duration-300 group-hover:scale-105 sm:size-36"
              />
            </div>
            <p className="mt-2 max-w-32 truncate text-sm font-medium group-hover:text-primary sm:max-w-36">
              {product.name}
            </p>
            <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
