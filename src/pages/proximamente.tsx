import React from 'react';

const ProximamentePorLlegar: React.FC = () => {
  // Datos de los peces que llegarán próximamente
  const pecesProximos = [
    { 
      id: 1, 
      name: 'Pez Mandarín', 
      price: 199.99, 
      description: 'Pez marino de colores espectaculares', 
      fechaLlegada: '2025-07-25',
      categoria: 'Marinos Premium',
      rareza: 'Muy Raro'
    },
    { 
      id: 2, 
      name: 'Arowana Dorado', 
      price: 450.00, 
      description: 'Pez dragón asiático de gran tamaño', 
      fechaLlegada: '2025-08-01',
      categoria: 'Exóticos',
      rareza: 'Extremadamente Raro'
    },
    { 
      id: 3, 
      name: 'Pez Ángel Altum', 
      price: 85.50, 
      description: 'Variedad salvaje de pez ángel', 
      fechaLlegada: '2025-07-30',
      categoria: 'Tropicales Salvajes',
      rareza: 'Raro'
    },
    { 
      id: 4, 
      name: 'Flowerhorn Premium', 
      price: 125.00, 
      description: 'Híbrido con joroba pronunciada', 
      fechaLlegada: '2025-08-05',
      categoria: 'Híbridos',
      rareza: 'Raro'
    },
    { 
      id: 5, 
      name: 'Pez Napoleón Juvenil', 
      price: 320.00, 
      description: 'Pez marino de gran personalidad', 
      fechaLlegada: '2025-08-10',
      categoria: 'Marinos Grandes',
      rareza: 'Muy Raro'
    },
    { 
      id: 6, 
      name: 'Betta Halfmoon Koi', 
      price: 65.00, 
      description: 'Betta con patrones tipo koi', 
      fechaLlegada: '2025-07-28',
      categoria: 'Bettas Premium',
      rareza: 'Limitado'
    }
  ];

  const formatearFecha = (fecha: string) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getDiasRestantes = (fecha: string) => {
    const hoy = new Date();
    const fechaLlegada = new Date(fecha);
    const diferencia = Math.ceil((fechaLlegada.getTime() - hoy.getTime()) / (1000 * 3600 * 24));
    return diferencia;
  };

  const getRarezaColor = (rareza: string) => {
    switch(rareza) {
      case 'Limitado': return 'bg-green-100 text-green-800';
      case 'Raro': return 'bg-yellow-100 text-yellow-800';
      case 'Muy Raro': return 'bg-orange-100 text-orange-800';
      case 'Extremadamente Raro': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleNotificarme = (pez: any) => {
    alert(`¡Te notificaremos cuando llegue ${pez.name}!`);
  };

  return (
    <div className="py-8 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🐠 Próximamente por Llegar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Especies exclusivas y raras que llegarán próximamente a nuestra tienda. 
            ¡Reserva tu lugar en la lista de espera!
          </p>
        </div>

        {/* Grid de peces próximos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pecesProximos.map((pez) => (
            <div key={pez.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img
                  className="w-full h-56 object-cover"
                  src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${pez.id}.jpg`}
                  alt={pez.name}
                />
                
                {/* Overlay de "Próximamente" */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      PRÓXIMAMENTE
                    </div>
                    <div className="text-2xl font-bold">${pez.price}</div>
                  </div>
                </div>

                {/* Etiqueta de rareza */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRarezaColor(pez.rareza)}`}>
                    {pez.rareza}
                  </span>
                </div>

                {/* Contador de días */}
                <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1">
                  <span className="text-xs font-bold text-gray-800">
                    {getDiasRestantes(pez.fechaLlegada)} días
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pez.name}</h3>
                <p className="text-gray-600 mb-3">{pez.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Categoría:</span>
                    <span className="text-sm font-medium text-blue-600">{pez.categoria}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Fecha estimada:</span>
                    <span className="text-sm font-medium text-gray-700">{formatearFecha(pez.fechaLlegada)}</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleNotificarme(pez)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  🔔 Notificarme cuando llegue
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de información adicional */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo funciona?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔔</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Suscríbete</h4>
              <p className="text-gray-600 text-sm">Haz clic en "Notificarme" para recibir avisos cuando llegue tu pez favorito</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">2. Te avisamos</h4>
              <p className="text-gray-600 text-sm">Recibirás un email tan pronto como el pez llegue a nuestra tienda</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Compra primero</h4>
              <p className="text-gray-600 text-sm">Tendrás prioridad de compra sobre otros clientes durante 48 horas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProximamentePorLlegar;