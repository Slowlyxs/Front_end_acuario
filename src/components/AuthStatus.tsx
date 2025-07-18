"use client"

import { useAuth } from "../hooks/useAuth" // Asegúrate de que la ruta sea correcta
import { LogOut, User, Shield } from "lucide-react"

const AuthStatus = () => {
  const { user, logout, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex items-center space-x-4 p-2 bg-base-100 rounded-box shadow-md">
      <div className="flex items-center space-x-2">
        {user?.role === "admin" ? (
          // CORRECCIÓN AQUÍ: Eliminado el '\' extra en text-error
          <Shield className="w-5 h-5 text-error" />
        ) : (
          <User className="w-5 h-5 text-info" />
        )}
        <span className="font-medium text-base-content">{user?.username}</span>
        <div className={`badge ${user?.role === "admin" ? "badge-error" : "badge-info"}`}>{user?.role}</div>
      </div>
      <button onClick={logout} className="btn btn-ghost btn-sm text-base-content hover:text-error">
        <LogOut className="w-4 h-4" />
        <span>Salir</span>
      </button>
    </div>
  )
}

export default AuthStatus
