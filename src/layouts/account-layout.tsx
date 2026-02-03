import { NavLink, Outlet } from "react-router-dom"
import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  DashboardSquare01Icon,
  UserIcon,
  ShoppingBag01Icon,
  Location01Icon,
  Settings01Icon,
} from "@hugeicons/core-free-icons"
import { Header } from "@/components/common/header"
import { Footer } from "@/components/common/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import { cn } from "@/lib/utils"

interface SidebarItem {
  to: string
  label: string
  icon: IconSvgElement
  end?: boolean
}

const sidebarItems: SidebarItem[] = [
  { to: "/account", label: "Dashboard", icon: DashboardSquare01Icon, end: true },
  { to: "/account/profile", label: "Profile", icon: UserIcon },
  { to: "/account/orders", label: "Orders", icon: ShoppingBag01Icon },
  { to: "/account/addresses", label: "Addresses", icon: Location01Icon },
  { to: "/account/settings", label: "Settings", icon: Settings01Icon },
]

function SidebarLink({ to, label, icon, end }: SidebarItem) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )
      }
    >
      <HugeiconsIcon icon={icon} className="size-4" />
      {label}
    </NavLink>
  )
}

export function AccountLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-6 px-4 py-6">
        {/* Sidebar - desktop */}
        <aside className="hidden w-56 shrink-0 md:block">
          <nav className="sticky top-20 flex flex-col gap-1">
            {sidebarItems.map((item) => (
              <SidebarLink key={item.to} {...item} />
            ))}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Mobile nav */}
          <nav className="mb-4 flex gap-1 overflow-x-auto md:hidden">
            {sidebarItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    "shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Main content */}
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
