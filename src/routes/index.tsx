import { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import type { RouteObject } from "react-router-dom"
import { ProtectedRoute } from "@/components/common/protected-route"
import { GuestRoute } from "@/components/common/guest-route"
import { Loading } from "@/components/common/loading"
import { MainLayout } from "@/layouts/main-layout"
import { AuthLayout } from "@/layouts/auth-layout"
import { AccountLayout } from "@/layouts/account-layout"

// -- Lazy-loaded pages --
const HomePage = lazy(() => import("@/pages/home"))
const ShopPage = lazy(() => import("@/pages/shop"))
const ProductDetailPage = lazy(() => import("@/pages/product-detail"))
const CartPage = lazy(() => import("@/pages/cart"))
const CheckoutPage = lazy(() => import("@/pages/checkout"))
const PaymentSuccessPage = lazy(() => import("@/pages/payment-success"))
const WishlistPage = lazy(() => import("@/pages/wishlist"))
const NotFoundPage = lazy(() => import("@/pages/not-found"))

const LoginPage = lazy(() => import("@/pages/auth/login"))
const RegisterPage = lazy(() => import("@/pages/auth/register"))
const ForgotPasswordPage = lazy(() => import("@/pages/auth/forgot-password"))
const ResetPasswordPage = lazy(() => import("@/pages/auth/reset-password"))

const DashboardPage = lazy(() => import("@/pages/account/dashboard"))
const ProfilePage = lazy(() => import("@/pages/account/profile"))
const OrdersPage = lazy(() => import("@/pages/account/orders"))
const OrderDetailPage = lazy(() => import("@/pages/account/order-detail"))
const AddressesPage = lazy(() => import("@/pages/account/addresses"))
const SettingsPage = lazy(() => import("@/pages/account/settings"))

// Suspense wrapper for lazy-loaded pages
function Lazy({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading className="min-h-[50vh]" />}>
      {children}
    </Suspense>
  )
}

// -- Route definitions --
const routes: RouteObject[] = [
  // Main layout routes
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Lazy><HomePage /></Lazy>,
      },
      {
        path: "shop",
        element: <Lazy><ShopPage /></Lazy>,
      },
      {
        path: "shop/:category",
        element: <Lazy><ShopPage /></Lazy>,
      },
      {
        path: "product/:slug",
        element: <Lazy><ProductDetailPage /></Lazy>,
      },
      {
        path: "cart",
        element: <Lazy><CartPage /></Lazy>,
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Lazy><CheckoutPage /></Lazy>
          </ProtectedRoute>
        ),
      },
      {
        path: "checkout/success",
        element: (
          <ProtectedRoute>
            <Lazy><PaymentSuccessPage /></Lazy>
          </ProtectedRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <Lazy><WishlistPage /></Lazy>
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <Lazy><NotFoundPage /></Lazy>,
      },
    ],
  },

  // Auth layout routes
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <GuestRoute>
            <Lazy><LoginPage /></Lazy>
          </GuestRoute>
        ),
      },
      {
        path: "register",
        element: (
          <GuestRoute>
            <Lazy><RegisterPage /></Lazy>
          </GuestRoute>
        ),
      },
      {
        path: "forgot-password",
        element: <Lazy><ForgotPasswordPage /></Lazy>,
      },
      {
        path: "reset-password/:token",
        element: <Lazy><ResetPasswordPage /></Lazy>,
      },
    ],
  },

  // Account layout routes (all protected)
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Lazy><DashboardPage /></Lazy>,
      },
      {
        path: "profile",
        element: <Lazy><ProfilePage /></Lazy>,
      },
      {
        path: "orders",
        element: <Lazy><OrdersPage /></Lazy>,
      },
      {
        path: "orders/:orderId",
        element: <Lazy><OrderDetailPage /></Lazy>,
      },
      {
        path: "addresses",
        element: <Lazy><AddressesPage /></Lazy>,
      },
      {
        path: "settings",
        element: <Lazy><SettingsPage /></Lazy>,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
