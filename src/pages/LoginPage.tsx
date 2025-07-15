import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock } from 'lucide-react';

interface FormData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.username || !formData.password) {
      alert('Por favor completa todos los campos');
      return;
    }

    setIsLoading(true);

    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login exitoso:', formData);
      alert('¡Login exitoso!');
    } catch (error) {
      console.error('Error en login:', error);
      alert('Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex">
      {/* Lado izquierdo - Imagen de acuario */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600"></div>



        {/* Simulación de acuario con CSS */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Burbujas animadas */}
          <div className="absolute inset-0">
                       <img
              src="/imagenes/Chana.png"
              alt="Pez nadando"
              className="absolute w-100 animate-swim"
              style={{ left: '%', top: '50%', transform: 'translateY(-50%)' }}
            />
            <div className="absolute w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{ left: '20%', top: '80%', animationDelay: '0s', animationDuration: '3s' }}></div>
            <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{ left: '30%', top: '70%', animationDelay: '1s', animationDuration: '2.5s' }}></div>
            <div className="absolute w-3 h-3 bg-white/25 rounded-full animate-bounce" style={{ left: '70%', top: '60%', animationDelay: '2s', animationDuration: '4s' }}></div>
            <div className="absolute w-5 h-5 bg-white/15 rounded-full animate-bounce" style={{ left: '80%', top: '75%', animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
            <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ left: '15%', top: '50%', animationDelay: '1.5s', animationDuration: '2s' }}></div>
            <div className="absolute w-3 h-3 bg-white/20 rounded-full animate-bounce" style={{ left: '60%', top: '40%', animationDelay: '2.5s', animationDuration: '3s' }}></div>

          </div>

          {/* Peces simulados */}
          <div className="absolute inset-0">
            <div className="absolute w-8 h-4 bg-orange-400 rounded-full animate-pulse" style={{ left: '25%', top: '30%', animationDelay: '0s' }}></div>
            <div className="absolute w-6 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ left: '60%', top: '20%', animationDelay: '1s' }}></div>
            <div className="absolute w-10 h-5 bg-blue-400 rounded-full animate-pulse" style={{ left: '40%', top: '45%', animationDelay: '2s' }}></div>
            <div className="absolute w-5 h-2 bg-pink-400 rounded-full animate-pulse" style={{ left: '75%', top: '35%', animationDelay: '1.5s' }}></div>
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
        </div>
      </div>

      {/* Lado derecho - Formulario de login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Iniciar Sesión</h1>
            <p className="text-gray-600">Ingresa tus credenciales para acceder</p>
          </div>

          {/* Formulario */}
          <div className="space-y-6">
            {/* Campo Usuario */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Usuario
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900"
                  placeholder="Ingresa tu usuario"
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900"
                  placeholder="Ingresa tu contraseña"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Botón de Login */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-blue-500/50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Iniciando sesión...
                </div>
              ) : (
                'Iniciar Sesión'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;