"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const RoleRedirect = () => {
  const { user, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated && user) {
      // Redireccionar según el rol
      if (user.role === "admin") {
        // Por ahora redirigir a /admin-dashboard, después crearás el panel admin
        navigate("/admin-dashboard")
      } else {
        // Usuario normal va al home de la tienda
        navigate("/")
      }
    }
  }, [isAuthenticated, user, navigate])

  return null // Este componente no renderiza nada
}

export default RoleRedirect
