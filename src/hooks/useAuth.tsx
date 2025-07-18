"use client"

import { useState, useEffect, createContext, useContext, type ReactNode } from "react"

interface User {
  id: number
  username: string
  email: string
  role: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (username: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string) => Promise<void> // <--- NUEVA FUNCIÓN
  logout: () => void
  isLoading: boolean
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Cargar token del localStorage al iniciar
  useEffect(() => {
    const savedToken = localStorage.getItem("auth_token")
    const savedUser = localStorage.getItem("auth_user")

    if (savedToken && savedUser) {
      setToken(savedToken)
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleAuthResponse = (data: { access_token: string; user: User }) => {
    localStorage.setItem("auth_token", data.access_token)
    localStorage.setItem("auth_user", JSON.stringify(data.user))
    setToken(data.access_token)
    setUser(data.user)
  }

  const login = async (username: string, password: string): Promise<void> => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Error en el login")
      }

      const data = await response.json()
      handleAuthResponse(data)
    } catch (error) {
      console.error("Error en login:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // <--- NUEVA FUNCIÓN DE REGISTRO
  const register = async (username: string, email: string, password: string): Promise<void> => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Error en el registro")
      }

      const data = await response.json()
      handleAuthResponse(data) // Reutiliza la lógica para guardar token y usuario
    } catch (error) {
      console.error("Error en registro:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }
  // FIN NUEVA FUNCIÓN DE REGISTRO --->

  const logout = () => {
    localStorage.removeItem("auth_token")
    localStorage.removeItem("auth_user")
    setToken(null)
    setUser(null)
  }

  const value = {
    user,
    token,
    login,
    register, // <--- AÑADIR AL CONTEXTO
    logout,
    isLoading,
    isAuthenticated: !!token && !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
