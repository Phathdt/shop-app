import { Link } from "react-router-dom"

const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    name: "Clothing",
    slug: "clothing",
    gradient: "from-pink-400 to-pink-600",
  },
  {
    name: "Home & Garden",
    slug: "home-garden",
    gradient: "from-green-400 to-green-600",
  },
  {
    name: "Sports",
    slug: "sports",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    name: "Books",
    slug: "books",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    name: "Beauty",
    slug: "beauty",
    gradient: "from-rose-400 to-rose-600",
  },
]

export function CategoriesGrid() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/shop/${category.slug}`}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
