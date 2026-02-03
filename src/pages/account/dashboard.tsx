import { useAuth } from "@/context/auth-context"

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Welcome back, {user?.name ?? "User"}.
      </p>
      <div className="mt-6 rounded-lg border border-dashed p-8 text-center text-muted-foreground">
        Account overview coming soon
      </div>
    </div>
  )
}
