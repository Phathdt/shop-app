import { Link } from "react-router-dom"

const footerLinks = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Products" },
      { to: "/shop/new-arrivals", label: "New Arrivals" },
      { to: "/shop/sale", label: "Sale" },
    ],
  },
  {
    title: "Account",
    links: [
      { to: "/account/profile", label: "Profile" },
      { to: "/account/orders", label: "Orders" },
      { to: "/wishlist", label: "Wishlist" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "#", label: "Contact Us" },
      { to: "#", label: "Shipping" },
      { to: "#", label: "Returns" },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="text-lg font-bold">
              ShopApp
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Your favorite e-commerce store.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2 text-sm font-semibold">{group.title}</h3>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ShopApp. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
