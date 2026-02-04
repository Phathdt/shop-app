import { Link } from "react-router-dom"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ShoppingCart01Icon,
  UserIcon,
  Logout01Icon,
  DashboardSquare01Icon,
  HeartCheckIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/context/auth-context"
import { Navbar } from "./navbar"

export function Header() {
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar: logo, search, action icons */}
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link to="/" className="shrink-0 text-lg font-bold tracking-tight">
          ShopApp
        </Link>

        {/* Search bar - hidden on mobile */}
        <div className="relative hidden flex-1 md:block md:max-w-md">
          <HugeiconsIcon
            icon={Search01Icon}
            className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-9"
          />
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1">
          {/* Mobile search toggle */}
          <Button variant="ghost" size="icon" className="md:hidden cursor-pointer">
            <HugeiconsIcon icon={Search01Icon} className="size-5" />
          </Button>

          {/* Wishlist */}
          {isAuthenticated && (
            <Button variant="ghost" size="icon" asChild>
              <Link to="/wishlist">
                <HugeiconsIcon icon={HeartCheckIcon} className="size-5" />
              </Link>
            </Button>
          )}

          {/* Cart */}
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart" className="relative">
              <HugeiconsIcon icon={ShoppingCart01Icon} className="size-5" />
              <Badge className="absolute -top-1 -right-1 size-4 justify-center p-0 text-[10px]">
                0
              </Badge>
            </Link>
          </Button>

          {/* User menu */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <HugeiconsIcon icon={UserIcon} className="size-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5 text-sm font-medium">
                  {user?.name}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/account">
                    <HugeiconsIcon
                      icon={DashboardSquare01Icon}
                      className="mr-2 size-4"
                    />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <HugeiconsIcon icon={Logout01Icon} className="mr-2 size-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          )}
        </div>
      </div>

      {/* Navigation menu bar */}
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4">
          <Navbar className="hidden md:flex" />
        </div>
      </div>
    </header>
  )
}
