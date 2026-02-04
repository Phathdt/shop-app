import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/shop", label: "All Categories", end: false },
  { to: "/shop/new-arrivals", label: "New Arrivals", end: false },
  { to: "/shop/sale", label: "Sale", end: false },
  { to: "#about", label: "About Us", end: false },
  { to: "#contact", label: "Contact", end: false },
] as const

interface NavbarProps {
  className?: string
  orientation?: "horizontal" | "vertical"
}

export function Navbar({
  className,
  orientation = "horizontal",
}: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex gap-1",
        orientation === "vertical" ? "flex-col" : "flex-row items-center",
        className,
      )}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
