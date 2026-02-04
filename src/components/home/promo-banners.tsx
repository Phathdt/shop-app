import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const banners = [
  {
    title: "Men's Collection",
    subtitle: "Explore trending styles",
    link: "/shop/clothing",
    gradient: "from-slate-700 to-slate-900",
  },
  {
    title: "Women's Collection",
    subtitle: "Elegant & modern designs",
    link: "/shop/clothing",
    gradient: "from-rose-600 to-rose-800",
  },
] as const

export function PromoBanners() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {banners.map((banner) => (
        <Link
          key={banner.title}
          to={banner.link}
          className="group relative flex min-h-[200px] cursor-pointer flex-col justify-end overflow-hidden rounded-xl p-6 transition-all hover:brightness-110"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${banner.gradient}`}
          />
          <div className="relative z-10 space-y-3">
            <h3 className="text-2xl font-bold text-white">{banner.title}</h3>
            <p className="text-sm text-white/90">{banner.subtitle}</p>
            <Button variant="secondary" size="sm">
              Shop Now
            </Button>
          </div>
        </Link>
      ))}
    </div>
  )
}
