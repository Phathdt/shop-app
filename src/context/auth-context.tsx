import { createContext, useContext, useState, useCallback } from "react"
import type { ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem("auth_user")
      return stored ? (JSON.parse(stored) as User) : null
    } catch {
      return null
    }
  })

  const isAuthenticated = user !== null

  const login = useCallback(async (_email: string, _password: string) => {
    // Mock login -- replace with real API call later
    const mockUser: User = {
      id: "1",
      name: "John Doe",
      email: _email,
    }
    localStorage.setItem("auth_user", JSON.stringify(mockUser))
    setUser(mockUser)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem("auth_user")
    setUser(null)
  }, [])

  return (
    <AuthContext value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext>
  )
}
