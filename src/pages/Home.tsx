import React from 'react';
import Carrusel from '../components/carrusel';
import { ProductCards } from '../components/cards';
import { CarruselOfertas } from '../components/carrusel_ofertas';
import { ProximosProductos } from '../components/proximosproductos';
import { Link } from 'react-router-dom';

const Acuario_Dulcevida: React.FC = () => {
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-cyan-300 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-200 rounded-full blur-md animate-ping"></div>
        </div>

        {/* Floating bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 bg-white bg-opacity-30 rounded-full animate-bounce`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="hero-content text-center text-white relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Línea Acuatica
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                      Acuario de peces Ornamentales
                    </span>
                  </h1>

                  <p className="text-lg text-blue-100 max-w-md">
                    Línea Acuática: donde el agua cobra vida y la naturaleza se hace arte.
                    En nuestro acuario, cada movimiento, cada burbuja y cada planta sumergida cuenta una historia. Nos dedicamos a crear ecosistemas vivos que no solo decoran espacios, sino que inspiran calma, conexión y asombro. Ya sea que busques un rincón de paz en tu hogar o una obra de arte natural en tu oficina, Línea Acuática transforma el agua en una experiencia visual y emocional.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link to="/galeria_peces" className="btn btn-warning btn-lg text-white font-semibold px-8 hover:scale-105 transition-all duration-300 shadow-lg">
                    <span>Comprar</span>
                  </Link>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <Link to="/About" className="btn btn-lg font-semibold px-8 hover:scale-105 transition-all duration-300 shadow-lg bg-white text-gray-800 hover:bg-gray-100 border border-gray-300">
                    <span>Sobre nosotros</span>
                  </Link>
                </div>
              </div>

              {/* Right Content - Fish Image */}
              <div className="relative lg:block hidden">
                <div className="relative w-full h-96 flex items-center justify-center">
                  {/* Main Fish Image with floating animation */}

                  {/* Decorative elements around the fish */}
                  <div className="absolute top-10 left-10 w-6 h-6 bg-cyan-300 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-16 right-12 w-4 h-4 bg-blue-300 rounded-full opacity-50 animate-bounce"></div>
                  <div className="absolute top-1/3 right-20 w-3 h-3 bg-white rounded-full opacity-70 animate-ping"></div>
                </div>
                <div className="animate-float">
                  <img
                    src="./imagenes/betaderecha.png"
                    className="w-180 h-120 object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                  />
                </div>
              </div>
              <img
                src="./imagenes/betaend.png"
                className="absolute top-40 right-0 left-150 w-180 h-120 object-contain drop-shadow-2xl filter brightness-110 contrast-110 animate-swim" />
            </div>
          </div>
        </div>



        {/* Custom CSS for animations */}
        <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
        
        @keyframes swim {
          0%, 100% { transform: translateX(0px) translateY(0px) rotate(-12deg); }
          25% { transform: translateX(10px) translateY(-5px) rotate(-8deg); }
          75% { transform: translateX(-10px) translateY(5px) rotate(-16deg); }
        }
        
        @keyframes swim-reverse {
          0%, 100% { transform: translateX(0px) translateY(0px) rotate(6deg); }
          25% { transform: translateX(-10px) translateY(-5px) rotate(10deg); }
          75% { transform: translateX(10px) translateY(5px) rotate(2deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-swim {
          animation: swim 4s ease-in-out infinite;
        }
        
        .animate-swim-reverse {
          animation: swim-reverse 3.5s ease-in-out infinite;
        }
      `}</style>
      </div >
      <div>
        <Carrusel />
        <ProductCards />
        <CarruselOfertas />
        <ProximosProductos />
      </div>
    </>
  );
};

export default Acuario_Dulcevida;