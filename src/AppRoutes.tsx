"use client"

import type React from "react"

import { Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./hooks/useAuth"
import Home from "./pages/Home"
import About from "./pages/About"
import Galeria_peces from "./pages/galeria_peces"
import Contacto from "./pages/contacto"
import Proximamente from "./pages/proximamente"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage" // <--- IMPORTAR NUEVA PÁGINA

// Componente para rutas protegidas
const ProtectedRoute = ({ children, requiredRole }: { children: React.ReactNode; requiredRole?: string }) => {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated) {
    // Si no está autenticado, redirige al login
    return <Navigate to="/login" replace />
  }

  if (requiredRole && user?.role !== requiredRole) {
    // Si el rol no coincide, redirige al home (o a una página de "acceso denegado")
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

// Componente temporal para el dashboard de admin
const AdminDashboard = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Panel de Administración</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">¡Bienvenido al panel de administración!</p>
        <p className="text-sm text-gray-500 mt-2">Aquí irá el frontend del admin que crearemos después.</p>
      </div>
    </div>
  </div>
)

export default function AppRoutes() {
  const { isAuthenticated } = useAuth()

  return (
    <Routes>
      {/* Ruta de login - solo accesible si NO está autenticado */}
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />} />
      <Route path="/register" element={isAuthenticated ? <Navigate to="/" replace /> : <RegisterPage />} />{" "}
      {/* <--- NUEVA RUTA */}
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/galeria_peces" element={<Galeria_peces />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/proximamente" element={<Proximamente />} />
      {/* Ruta protegida para admin */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      {/* Redirección por defecto para la ruta antigua de LoginPage */}
      <Route path="/LoginPage" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
 