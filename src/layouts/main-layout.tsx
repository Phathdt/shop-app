import { Outlet } from "react-router-dom"
import { Header } from "@/components/common/header"
import { Footer } from "@/components/common/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
