"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Eye, EyeOff, User, Mail, Lock, AlertCircle } from "lucide-react"
import { useAuth } from "../hooks/useAuth"

interface FormData {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string>("")

  const { register, isLoading, isAuthenticated, user } = useAuth()
  const navigate = useNavigate()

  // Redireccionar si ya está autenticado
  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === "admin") {
        navigate("/admin-dashboard")
      } else {
        navigate("/")
      }
    }
  }, [isAuthenticated, user, navigate])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Limpiar error al escribir
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Por favor completa todos los campos.")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.")
      return
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.")
      return
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Por favor, introduce un email válido.")
      return
    }

    try {
      await register(formData.username, formData.email, formData.password)
      // La redirección se maneja en el useEffect después de un registro exitoso
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al registrarse.")
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen flex">
      {/* Lado izquierdo - Imagen de acuario (reutilizado de LoginPage) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Simulación de acuario con CSS */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Burbujas animadas */}
          <div className="absolute inset-0">
            <div
              className="absolute w-4 h-4 bg-white/30 rounded-full animate-bounce"
              style={{ left: "20%", top: "80%", animationDelay: "0s", animationDuration: "3s" }}
            ></div>
            <div
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
              style={{ left: "30%", top: "70%", animationDelay: "1s", animationDuration: "2.5s" }}
            ></div>
            <div
              className="absolute w-3 h-3 bg-white/25 rounded-full animate-bounce"
              style={{ left: "70%", top: "60%", animationDelay: "2s", animationDuration: "4s" }}
            ></div>
            <div
              className="absolute w-5 h-5 bg-white/15 rounded-full animate-bounce"
              style={{ left: "80%", top: "75%", animationDelay: "0.5s", animationDuration: "3.5s" }}
            ></div>
            <div
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
              style={{ left: "15%", top: "50%", animationDelay: "1.5s", animationDuration: "2s" }}
            ></div>
            <div
              className="absolute w-3 h-3 bg-white/20 rounded-full animate-bounce"
              style={{ left: "60%", top: "40%", animationDelay: "2.5s", animationDuration: "3s" }}
            ></div>
          </div>

          {/* Peces simulados */}
          <div className="absolute inset-0">
            <div
              className="absolute w-8 h-4 bg-orange-400 rounded-full animate-pulse"
              style={{ left: "25%", top: "30%", animationDelay: "0s" }}
            ></div>
            <div
              className="absolute w-6 h-3 bg-yellow-400 rounded-full animate-pulse"
              style={{ left: "60%", top: "20%", animationDelay: "1s" }}
            ></div>
            <div
              className="absolute w-10 h-5 bg-blue-400 rounded-full animate-pulse"
              style={{ left: "40%", top: "45%", animationDelay: "2s" }}
            ></div>
            <div
              className="absolute w-5 h-2 bg-pink-400 rounded-full animate-pulse"
              style={{ left: "75%", top: "35%", animationDelay: "1.5s" }}
            ></div>
          </div>

          {/* Plantas acuáticas */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-600/40 to-transparent"></div>
          <div className="absolute bottom-0 left-10 w-2 h-24 bg-green-500/60 rounded-t-full"></div>
          <div className="absolute bottom-0 left-20 w-3 h-28 bg-green-600/50 rounded-t-full"></div>
          <div className="absolute bottom-0 right-20 w-2 h-20 bg-green-500/70 rounded-t-full"></div>
          <div className="absolute bottom-0 right-10 w-3 h-26 bg-green-600/40 rounded-t-full"></div>

          {/* Efecto de ondas */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse"></div>
          </div>

          {/* Logo o título del acuario */}
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl font-bold mb-2">SlowlyXS</h2>
            <p className="text-xl opacity-90">Acuario Premium</p>
          </div>
        </div>
      </div>

      {/* Lado derecho - Formulario de registro */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Registrarse</h1>
            <p className="text-gray-600 text-lg">Crea tu cuenta para acceder a la tienda</p>
          </div>
          {/* Mensaje de error */}
          {error && (
            <div role="alert" className="alert alert-error mb-6">
              <AlertCircle className="w-6 h-6 stroke-current shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Usuario */}
            <div className="form-control">
              <label htmlFor="username" className="label">
                <span className="label-text text-gray-700 font-medium">Usuario</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="input input-bordered w-full pl-10 pr-4 py-3"
                  placeholder="Elige un nombre de usuario"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Campo Email */}
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text text-gray-700 font-medium">Email</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input input-bordered w-full pl-10 pr-4 py-3"
                  placeholder="tu@ejemplo.com"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text text-gray-700 font-medium">Contraseña</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input input-bordered w-full pl-10 pr-12 py-3"
                  placeholder="Crea tu contraseña"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Campo Confirmar Contraseña */}
            <div className="form-control">
              <label htmlFor="confirmPassword" className="label">
                <span className="label-text text-gray-700 font-medium">Confirmar Contraseña</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="input input-bordered w-full pl-10 pr-12 py-3"
                  placeholder="Repite tu contraseña"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Botón de Registro */}
            <button
              type="submit"
              disabled={isLoading}
              className={`btn btn-primary btn-block mt-8 ${isLoading ? "btn-disabled" : ""}`}
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Registrando...
                </>
              ) : (
                "Registrarse"
              )}
            </button>
          </form>
          {/* Información adicional */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes cuenta?{" "}
              <Link to="/login" className="link link-hover text-blue-600 font-medium">
                Inicia Sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
