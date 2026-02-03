import { Link, Outlet } from "react-router-dom"
import { ScrollToTop } from "@/components/common/scroll-to-top"

export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4">
      <ScrollToTop />
      {/* Logo */}
      <Link to="/" className="mb-6 text-2xl font-bold tracking-tight">
        ShopApp
      </Link>
      {/* Auth form outlet -- each page wraps its own Card */}
      <div className="w-full max-w-md">
        <Outlet />
      </div>
      {/* Footer */}
      <p className="mt-6 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} ShopApp
      </p>
    </div>
  )
}
