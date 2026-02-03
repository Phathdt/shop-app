import { Navigate, useSearchParams } from "react-router-dom"
import { useAuth } from "@/context/auth-context"
import type { ReactNode } from "react"

export function GuestRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()
  const [searchParams] = useSearchParams()

  if (isAuthenticated) {
    const returnTo = searchParams.get("from") || "/account"
    return <Navigate to={returnTo} replace />
  }

  return <>{children}</>
}
